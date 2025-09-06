#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class AppMonitor {
  constructor() {
    this.metrics = {
      uptime: Date.now(),
      requests: 0,
      errors: 0,
      performance: []
    };
  }

  logRequest() {
    this.metrics.requests++;
  }

  logError(error) {
    this.metrics.errors++;
    console.error('App Error:', error);
  }

  logPerformance(metric) {
    this.metrics.performance.push({
      timestamp: Date.now(),
      ...metric
    });
  }

  getHealthStatus() {
    const errorRate = this.metrics.requests > 0 ? (this.metrics.errors / this.metrics.requests) * 100 : 0;
    
    return {
      status: errorRate < 5 ? 'healthy' : errorRate < 20 ? 'degraded' : 'unhealthy',
      uptime: Date.now() - this.metrics.uptime,
      requests: this.metrics.requests,
      errors: this.metrics.errors,
      errorRate: errorRate.toFixed(2) + '%'
    };
  }
}

module.exports = AppMonitor;