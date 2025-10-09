#!/usr/bin/env node

/**
 * Monitoring and Health Check Script
 * Monitors application health and performance
 */

import fs from 'fs';
import https from 'https';
import http from 'http';

const config = {
  url: process.env.HEALTH_CHECK_URL || 'http://localhost:3000',
  interval: parseInt(process.env.CHECK_INTERVAL || '30000'),
  timeout: parseInt(process.env.CHECK_TIMEOUT || '5000'),
  logFile: process.env.LOG_FILE || './logs/health.log'
};

class HealthMonitor {
  constructor() {
    this.startMonitoring();
  }

  async checkHealth() {
    const startTime = Date.now();
    
    try {
      const response = await this.makeRequest(config.url);
      const responseTime = Date.now() - startTime;
      
      const healthData = {
        timestamp: new Date().toISOString(),
        status: response.statusCode === 200 ? 'healthy' : 'unhealthy',
        responseTime,
        statusCode: response.statusCode,
        url: config.url
      };
      
      this.logHealth(healthData);
      
      if (response.statusCode !== 200) {
        this.alert('Health check failed', healthData);
      }
      
    } catch (error) {
      const healthData = {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        url: config.url
      };
      
      this.logHealth(healthData);
      this.alert('Health check error', healthData);
    }
  }

  makeRequest(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      const request = client.get(url, { timeout: config.timeout }, (response) => {
        resolve(response);
      });
      
      request.on('error', reject);
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  logHealth(data) {
    const logEntry = JSON.stringify(data) + '\n';
    
    // Ensure logs directory exists
    const logDir = path.dirname(config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFileSync(config.logFile, logEntry);
    console.log(`Health check: ${data.status} (${data.responseTime || 'N/A'}ms)`);
  }

  alert(message, data) {
    console.error(`🚨 ALERT: ${message}`, data);
    
    // Here you would integrate with your alerting system
    // e.g., send email, Slack notification, etc.
  }

  startMonitoring() {
    console.log(`Starting health monitoring for ${config.url}`);
    console.log(`Check interval: ${config.interval}ms`);
    console.log(`Timeout: ${config.timeout}ms`);
    
    setInterval(() => {
      this.checkHealth();
    }, config.interval);
    
    // Initial check
    this.checkHealth();
  }
}

// Start monitoring
new HealthMonitor();
