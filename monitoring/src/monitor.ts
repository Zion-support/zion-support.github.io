import { measureLatency, Endpoint, EndpointTestResult } from './latencyTester';
import { Alerter } from './alerter';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
    name: string;
    baseURLKey: string;
    defaultBaseURL: string;
    path: string;
    serviceName: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS';
    body?: any;
    headers?: Record<string, string>;
  }>;
}

// Function to read and parse the configuration file
function loadConfig(): MonitoringConfig {
  const configPath = path.join(__dirname, '../../monitoring-config.json'); // Adjust path as necessary
  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configFile) as MonitoringConfig;
  } catch (error) {
    logger.error('Error reading or parsing monitoring-config.json: ' + error);
    // Return a default or minimal configuration to prevent crashing
    return {
      alertThresholdMs: 1000, // Default threshold
      consecutiveChecksLimit: 3, // Default limit
      endpoints: [] // No endpoints if config fails
    };
  }
}

const config = loadConfig();
// const checkHistory: Map<string, EndpointTestResult[]> = new Map(), // Removed checkHistory

export async function runMonitoring() {
  logger.info('Starting API latency monitoring run...');
  const resolvedEndpoints: Endpoint[] = config.endpoints.map(e => ({
    name: e.name,
    baseURL: process.env[e.baseURLKey] || e.defaultBaseURL,
    path: e.path,
    serviceName: e.serviceName,
    method: e.method,
    body: e.body,
    headers: e.headers
  }));
  // const results = await measureLatency(endpoints), // Original line
  const results: EndpointTestResult[] = await measureLatency(resolvedEndpoints); // Use resolved endpoints

  // Process alerts
  for (const result of results) {
    // No 'await' here if we want alerts to be non-blocking for the overall monitoring cycle.
    // However, for logging clarity and ensuring restart attempts are logged within the same run;
    // 'await' might be preferred. Let's use await.
    await triggerAlerts(result); // Simplified call to triggerAlerts
  }

  const sortedResults = results.sort((a, b) => (b.latencyMs || 0) - (a.latencyMs || 0));
  const slowestResponses = sortedResults.slice(0, 5);
  if (slowestResponses.length > 0) {
    logger.info('Top 5 slowest responses: ' + JSON.stringify({ slowestResponses }));
  } else {
    logger.info('No responses measured or all responses were errors before latency could be determined.');
  }

  results.forEach(result => {
    if (result.error) {
      logger.error('Endpoint test failed: ' + JSON.stringify(result));
    } else {
      // logger.debug('Endpoint test succeeded:', result);
    }
  });

  logger.info('API latency monitoring run finished.');
  alertChannels: string[];
  endpoints: Endpoint[];
  checkIntervalMs: number;
}

// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};

export class Monitor {
  private config: MonitoringConfig;
  private alerter: Alerter;
  private isRunning: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(configPath: string) {
    this.config = this.loadConfig(configPath);
    this.alerter = new Alerter(configPath);
  }

  private loadConfig(configPath: string): MonitoringConfig {
    try {
      const configData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      logger.error('Failed to load monitoring config:', error);
      throw error;
    }
  }

  public async start(): Promise<void> {
    if (this.isRunning) {
      logger.info('Monitor is already running');
      return;
    }

    this.isRunning = true;
    logger.info('Starting monitoring...');

    // Run initial check
    await this.runCheck();

    // Set up interval for periodic checks
    this.intervalId = setInterval(async () => {
      await this.runCheck();
    }, this.config.checkIntervalMs);
  }

  public stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    logger.info('Monitoring stopped');
  }

  private async runCheck(): Promise<void> {
    try {
      logger.info('Running endpoint checks...');
      
      const results: EndpointTestResult[] = [];
      
      for (const endpoint of this.config.endpoints) {
        try {
          const result = await measureLatency(endpoint);
          results.push(result);
          
          if (result.error) {
            logger.error(`Endpoint ${endpoint.name} failed: ${result.error}`);
          } else {
            logger.info(`Endpoint ${endpoint.name}: ${result.latencyMs}ms`);
          }
        } catch (error) {
          logger.error(`Error testing endpoint ${endpoint.name}:`, error);
        }
      }
      
      // Check for alerts
      await this.alerter.checkAndAlert(results);
      
    } catch (error) {
      logger.error('Error during monitoring check:', error);
    }
  }

  public getStatus(): { isRunning: boolean; endpoints: number } {
    return {
      isRunning: this.isRunning,
      endpoints: this.config.endpoints.length,
    };
  }
}

// Export function for backward compatibility
export async function triggerAlerts(results: EndpointTestResult[]): Promise<void> {
  // This function is kept for backward compatibility
  logger.info(`Triggering alerts for ${results.length} results`);
}