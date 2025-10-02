
const fs = require('fs');
const path = require('path');

class MonitoringSetup {
  constructor() {
    this.projectRoot = process.cwd()}

  async setupErrorTracking() {
    console.log('🚨 Setting up error tracking...');
    
    const errorTrackingConfig = `
// Error tracking configuration
export const errorTracking = {
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  },
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    format: 'json'
  }
};

export default errorTracking;
`;

    fs.writeFileSync(path.join(this.projectRoot, 'config/error-tracking.js'), errorTrackingConfig);
    console.log('✅ Error tracking configuration created')}

  async setupAnalytics() {
    console.log('📈 Setting up analytics...');
    
    const analyticsConfig = `
// Analytics configuration
export const analytics = {
  googleAnalytics: {
    measurementId: process.env.GA_MEASUREMENT_ID
  },
  customEvents: {
    pageView: true,
    userInteraction: true,
    performance: true,
    errors: true
  }
};

export default analytics;
`;

    fs.writeFileSync(path.join(this.projectRoot, 'config/analytics.js'), analyticsConfig);
    console.log('✅ Analytics configuration created')}

  async setupHealthChecks() {
    console.log('🏥 Setting up health checks...');
    
    const healthCheckScript = `
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version || '1.0.0'
  })});

app.get('/ready', (req, res) => {
  // Add readiness checks here
  res.status(200).json({
    status: 'ready',
    timestamp: new Date().toISOString()
  })});

module.exports = app;
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts/health-check.js'), healthCheckScript);
    console.log('✅ Health check script created')}

  async run() {
    await this.setupErrorTracking();
    await this.setupAnalytics();
    await this.setupHealthChecks();
    console.log('✅ Monitoring setup completed!')}
}

const setup = new MonitoringSetup();
setup.run().catch(console.error);
