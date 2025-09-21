import { measureLatency, Endpoint, EndpointTestResult } from './latencyTester';
import { checkAndAlert, sendHealthSummary } from './alerter';
import * as fs from 'fs';
import * as path from 'path';

// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
  endpoints: Array<{
    name: string;
    baseURLKey: string;
    defaultBaseURL: string;
    path: string;
    method: string;
    headers?: Record<string, string>;
    body?: any;
  }>;
}

// Function to read and parse the configuration file
function loadConfig(): MonitoringConfig {
  const configPath = path.join(__dirname, '../../monitoring-config.json');
  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configFile) as MonitoringConfig;
  } catch (error) {
    logger.error('Error reading or parsing monitoring-config.json: ' + error);
    // Return default configuration if file doesn't exist or is invalid
    return {
      alertThresholdMs: 1000,
      consecutiveChecksLimit: 3,
      endpoints: [
        {
          name: 'API Health Check',
          baseURLKey: 'API_BASE_URL',
          defaultBaseURL: 'http://localhost:3000',
          path: '/api/health',
          method: 'GET'
        }
      ]
    };
  }
}

// Function to convert config endpoints to Endpoint objects
function convertToEndpoints(config: MonitoringConfig): Endpoint[] {
  return config.endpoints.map(endpoint => ({
    name: endpoint.name,
    url: `${process.env[endpoint.baseURLKey] || endpoint.defaultBaseURL}${endpoint.path}`,
    method: endpoint.method as 'GET' | 'POST' | 'PUT' | 'DELETE',
    headers: endpoint.headers || {},
    body: endpoint.body
  }));
}

// Main monitoring function
export async function runMonitoring(): Promise<void> {
  const config = loadConfig();
  const endpoints = convertToEndpoints(config);
  const consecutiveFailures = new Map<string, number>();
  
  logger.info(`Starting monitoring for ${endpoints.length} endpoints`);
  
  const results: EndpointTestResult[] = [];
  
  for (const endpoint of endpoints) {
    try {
      const result = await measureLatency(endpoint);
      results.push(result);
      
      // Check and alert if necessary
      await checkAndAlert(endpoint.url, result, consecutiveFailures);
      
      logger.info(`Endpoint ${endpoint.name}: ${result.responseTime}ms (${result.statusCode || 'N/A'})`);
    } catch (error) {
      logger.error(`Error testing endpoint ${endpoint.name}:`, error);
      
      // Create a failed result for alerting
      const failedResult: EndpointTestResult = {
        responseTime: 0,
        statusCode: null,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      
      await checkAndAlert(endpoint.url, failedResult, consecutiveFailures);
    }
  }
  
  // Calculate summary statistics
  const healthyResults = results.filter(r => r.success && r.responseTime <= config.alertThresholdMs);
  const unhealthyResults = results.filter(r => !r.success || r.responseTime > config.alertThresholdMs);
  const averageResponseTime = results.length > 0 
    ? results.reduce((sum, r) => sum + r.responseTime, 0) / results.length 
    : 0;
  
  const summary = {
    totalEndpoints: endpoints.length,
    healthyEndpoints: healthyResults.length,
    unhealthyEndpoints: unhealthyResults.length,
    averageResponseTime
  };
  
  // Send health summary
  await sendHealthSummary(summary);
  
  logger.info(`Monitoring complete. Healthy: ${summary.healthyEndpoints}/${summary.totalEndpoints}, Avg Response Time: ${summary.averageResponseTime.toFixed(2)}ms`);
}

// Function to run monitoring continuously
export async function startContinuousMonitoring(intervalMs: number = 60000): Promise<void> {
  logger.info(`Starting continuous monitoring with ${intervalMs}ms interval`);
  
  // Run immediately
  await runMonitoring();
  
  // Then run at intervals
  setInterval(async () => {
    try {
      await runMonitoring();
    } catch (error) {
      logger.error('Error in continuous monitoring:', error);
    }
  }, intervalMs);
}

// CLI execution
if (require.main === module) {
  const interval = process.env.MONITORING_INTERVAL_MS ? parseInt(process.env.MONITORING_INTERVAL_MS) : 60000;
  
  if (process.env.CONTINUOUS_MONITORING === 'true') {
    startContinuousMonitoring(interval);
  } else {
    runMonitoring().catch(error => {
      logger.error('Monitoring failed:', error);
      process.exit(1);
    });
  }
}