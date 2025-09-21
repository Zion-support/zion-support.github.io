import { exec } from 'child_process';
import axios from 'axios';
// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};
import { EndpointTestResult } from './latencyTester';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
}

// Function to read and parse the configuration file for alert thresholds
function loadAlertConfig(): { alertThresholdMs: number, consecutiveChecksLimit: number } {
  const configPath = path.join(__dirname, '../../monitoring-config.json');
  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    const parsedConfig = JSON.parse(configFile) as MonitoringConfig;
    return {
      alertThresholdMs: parsedConfig.alertThresholdMs,
      consecutiveChecksLimit: parsedConfig.consecutiveChecksLimit
    };
  } catch (error) {
    logger.error('Error reading or parsing monitoring-config.json in alerter.ts: ' + error);
    // Return default values if config loading fails
    return {
      alertThresholdMs: 1000, // Default threshold
      consecutiveChecksLimit: 3 // Default consecutive checks limit
    };
  }
}

// Function to send alert via webhook
async function sendWebhookAlert(endpoint: string, result: EndpointTestResult, config: { alertThresholdMs: number, consecutiveChecksLimit: number }): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL || 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK';
  
  const message = {
    text: `🚨 Alert: High Latency Detected`,
    attachments: [
      {
        color: 'danger',
        fields: [
          {
            title: 'Endpoint',
            value: endpoint,
            short: true
          },
          {
            title: 'Response Time',
            value: `${result.responseTime}ms`,
            short: true
          },
          {
            title: 'Threshold',
            value: `${config.alertThresholdMs}ms`,
            short: true
          },
          {
            title: 'Status Code',
            value: result.statusCode ? result.statusCode.toString() : 'N/A',
            short: true
          },
          {
            title: 'Timestamp',
            value: new Date().toISOString(),
            short: false
          }
        ]
      }
    ]
  };

  try {
    await axios.post(webhookUrl, message);
    logger.info(`Alert sent successfully for endpoint: ${endpoint}`);
  } catch (error) {
    logger.error(`Failed to send webhook alert for ${endpoint}:`, error);
  }
}

// Function to check if alert should be sent based on consecutive failures
function shouldSendAlert(endpoint: string, consecutiveFailures: Map<string, number>, config: { consecutiveChecksLimit: number }): boolean {
  const failures = consecutiveFailures.get(endpoint) || 0;
  return failures >= config.consecutiveChecksLimit;
}

// Main alerting function
export async function checkAndAlert(endpoint: string, result: EndpointTestResult, consecutiveFailures: Map<string, number>): Promise<void> {
  const config = loadAlertConfig();
  
  // Check if response time exceeds threshold
  if (result.responseTime > config.alertThresholdMs) {
    const failures = consecutiveFailures.get(endpoint) || 0;
    consecutiveFailures.set(endpoint, failures + 1);
    
    // Only send alert if we've hit the consecutive failure limit
    if (shouldSendAlert(endpoint, consecutiveFailures, config)) {
      await sendWebhookAlert(endpoint, result, config);
      // Reset counter after sending alert
      consecutiveFailures.set(endpoint, 0);
    }
  } else {
    // Reset counter on successful response
    consecutiveFailures.set(endpoint, 0);
  }
}

// Function to send system health summary
export async function sendHealthSummary(summary: { totalEndpoints: number, healthyEndpoints: number, unhealthyEndpoints: number, averageResponseTime: number }): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL || 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK';
  
  const message = {
    text: `📊 System Health Summary`,
    attachments: [
      {
        color: summary.unhealthyEndpoints > 0 ? 'warning' : 'good',
        fields: [
          {
            title: 'Total Endpoints',
            value: summary.totalEndpoints.toString(),
            short: true
          },
          {
            title: 'Healthy',
            value: summary.healthyEndpoints.toString(),
            short: true
          },
          {
            title: 'Unhealthy',
            value: summary.unhealthyEndpoints.toString(),
            short: true
          },
          {
            title: 'Average Response Time',
            value: `${summary.averageResponseTime.toFixed(2)}ms`,
            short: true
          },
          {
            title: 'Timestamp',
            value: new Date().toISOString(),
            short: false
          }
        ]
      }
    ]
  };

  try {
    await axios.post(webhookUrl, message);
    logger.info('Health summary sent successfully');
  } catch (error) {
    logger.error('Failed to send health summary:', error);
  }
}