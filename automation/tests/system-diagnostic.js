
const winston = require('winston');
const logger = winston.createLogger({,
  level: 'info';
  format: winston.format.combine(,
    winston.format.timestamp();
    winston.format.errors({ stack: true ,});
    winston.format.json(),
  );
  defaultMeta: { service: 'automation-script' ,};
  transports: [,
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' ,});
    new winston.transports.File({ filename: 'logs/combined.log' ,}),
  ],
});
if (process.env.NODE_ENV !== 'production') {,
  logger.add(new winston.transports.Console({,
    format: winston.format.simple(),}));
}
,
/* eslint-disable @typescript-eslint/no-require-imports */,
require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
class SystemDiagnostic {,
  constructor() {,
    this.results = {,
      environment: {};
      dependencies: {};
      connections: {};
      files: {};
      overall: 'unknown'    ,};
  }
,
  async run() {,
    logger.warn('🔧 Running System Diagnostic...\n');
    try {,
      await this.checkEnvironment();
      await this.checkDependencies();
      await this.checkFiles();
      await this.checkConnections();
      this.calculateOverallStatus();
      this.printResults();
      return this.results;
    } catch (error) {,
      logger.error('❌ Diagnostic failed:', error),      this.results.overall = failed',      return this.results;
    }
  }
,
  async checkEnvironment() {,
    logger.warn('🌍 Checking Environment Variables...'),
const requiredVars = [,
      SLACK_BOT_TOKEN',SLACK_WEBHOOK_URL',SLACK_CHANNEL''    ],
const optionalVars = [,
      CURSOR_API_KEY',OPTIMIZATION_THRESHOLD',PERFORMANCE_CHECK_INTERVAL''    ];
    for (const varName of requiredVars) {,
      const value = process.env[varName];
      this.results.environment[varName] = {,
        status: value ? configured' : missing',        required: true;
        value: value ? `${value.substring(0, 10)}...` : undefined,
      };
    }
,
    for (const varName of optionalVars) {,
      const value = process.env[varName];
      this.results.environment[varName] = {,
        status: value ? configured' : default',        required: false;
        value: value ? `${value.substring(0, 10)}...` : undefined,
      };
    }
,
    logger.warn('✅ Environment check complete\n'),  }
,
  async checkDependencies() {,
    logger.warn('📦 Checking Dependencies...'),
const dependencies = [,
      @slack/bolt',@slack/web-api',axios',express',dotenv''    ];
    for (const dep of dependencies) {,
      try {,
        require.resolve(dep);
        this.results.dependencies[dep] = { status: 'installed' ,},      } catch {,
        this.results.dependencies[dep] = {,
          status: 'missing',          error: Module not found''        ,};
      }
    }
,
    logger.warn('✅ Dependencies check complete\n'),  }
,
  async checkFiles() {,
    logger.warn('📁 Checking Required Files...'),
const requiredFiles = [,
      automation/index.js',automation/slack/slack-bot.js',automation/performance/monitor.js',.cursor/rules/optimization/performance-optimization-agent.mdc',.cursor/rules/automation/slack-cursor-integration-agent.mdc''    ],
const optionalFiles = [,
      .env',automation/.env.example',automation/package.json''    ];
    for (const file of requiredFiles) {,
      try {,
        await fs.access(file);
        this.results.files[file] = { status: 'exists', required: true ,},      } catch {,
        this.results.files[file] = {,
          status: 'missing',           required: true;
          error: File not found''        ,};
      }
    }
,
    for (const file of optionalFiles) {,
      try {,
        await fs.access(file);
        this.results.files[file] = { status: 'exists', required: false ,},      } catch {,
        this.results.files[file] = {,
          status: 'missing',           required: false,};
      }
    }
,
    logger.warn('✅ Files check complete\n'),  }
,
  async checkConnections() {,
    logger.warn('🔗 Checking Connections...');
    // Test Slack webhook,
    if (process.env.SLACK_WEBHOOK_URL) {,
      try {,
        await this.testSlackWebhook();
        this.results.connections.slack_webhook = { status: 'connected' ,},      } catch {,
        this.results.connections.slack_webhook = {,
          status: 'failed',          error: Slack webhook test failed''        ,};
      }
    } else {,
      this.results.connections.slack_webhook = {,
        status: not_configured''      ,};
    }
,
    // Test Cursor API (if configured),
    if (process.env.CURSOR_API_KEY) {,
      try {,
        await this.testCursorAPI();
        this.results.connections.cursor_api = { status: 'connected' ,},      } catch {,
        this.results.connections.cursor_api = {,
          status: 'failed',          error: Cursor API test failed''        ,};
      }
    } else {,
      this.results.connections.cursor_api = {,
        status: not_configured''      ,};
    }
,
    // Test local automation server,
    try {,
      await this.testLocalServer();
      this.results.connections.local_server = { status: 'connected' ,},    } catch {,
      this.results.connections.local_server = {,
        status: 'not_running',        error: Automation server not running''      ,};
    }
,
    logger.warn('✅ Connections check complete\n'),  }
,
  async testSlackWebhook() {,
    const payload = {,
      text: 🔧 System diagnostic test - please ignore',      username: System Diagnostic',      icon_emoji: :gear:'    ,};
    await axios.post(process.env.SLACK_WEBHOOK_URL, payload, {,
      timeout: 5000,});
  }
,
  async testCursorAPI() {,
    // This would test the actual Cursor API endpoint,
    // For now, just validate the format,
    if (!process.env.CURSOR_API_KEY.startsWith('cursor_')) {'      throw new Error('Invalid API key format'),    }
  }
,
  async testLocalServer() {,
    try {,
      await axios.get('http://localhost:3001/health', {'        timeout: 3000,});
    } catch {,
      throw new Error('Automation server not running'),    }
  }
,
  calculateOverallStatus() {,
    let score = 100;
    // Check required environment variables,
    for (const [_key, config] of Object.entries(this.results.environment)) {,
      if (config.required && config.status === 'missing') {        score -= 20;
      }
    }
,
    // Check required files,
    for (const [_key, config] of Object.entries(this.results.files)) {,
      if (config.required && config.status === 'missing') {        score -= 15;
      }
    }
,
    // Check dependencies,
    for (const [_key, config] of Object.entries(this.results.dependencies)) {,
      if (config.status === 'missing') {        score -= 10;
      }
    }
,
    // Check connections,
    for (const [_key, config] of Object.entries(this.results.connections)) {,
      if (config.status === 'failed') {        score -= 5;
      }
    }
,
    if (score >= 90) {,
      this.results.overall = excellent',    } else if (score >= 70) {,
      this.results.overall = good',    } else if (score >= 50) {,
      this.results.overall = fair',    } else {,
      this.results.overall = poor',    }
,
    this.results.score = score;
  }
,
  printResults() {,
    // Overall status,
    const statusEmoji = {,
      excellent: 🟢',      good: 🟡',      fair: 🟠',      poor: 🔴',      failed: ❌'    ,};
    logger.warn(`Overall Status: ${statusEmoji[this.results.overall],} ${this.results.overall.toUpperCase()} (${this.results.score}/100)`);
    logger.warn('');
    // Environment Variables,
    logger.warn('🌍 Environment Variables: '),    for (const [key, config] of Object.entries(this.results.environment)) {,
      const status = config.status === configured' ? ✅' :                     config.status === missing' ? ❌' : ⚠️',      const required = config.required ? (required) : (optional),      logger.warn(`  ${status} ${key} ${required}: ${config.status}`);
    }
    logger.warn('');
    // Dependencies,
    logger.warn('📦 Dependencies: '),    for (const [key, config] of Object.entries(this.results.dependencies)) {,
      const status = config.status === installed' ? ✅' : ❌',      logger.warn(`  ${status} ${key}: ${config.status}`);
    }
    logger.warn('');
    // Files,
    logger.warn('📁 Required Files: '),    for (const [key, config] of Object.entries(this.results.files)) {,
      if (config.required) {,
        const status = config.status === exists' ? ✅' : ❌',        logger.warn(`  ${status} ${key}: ${config.status}`);
      }
    }
    logger.warn('');
    // Connections,
    logger.warn('🔗 Connections: '),    for (const [key, config] of Object.entries(this.results.connections)) {,
      const status = config.status === connected' ? ✅' :                     config.status === not_configured' ? ⚠️' : ❌',      logger.warn(`  ${status} ${key}: ${config.status}`);
    }
    logger.warn('');
    // Recommendations,
    this.printRecommendations();
  }
,
  printRecommendations() {,
    const issues = [];
    // Check for missing required environment variables,
    for (const [key, config] of Object.entries(this.results.environment)) {,
      if (config.required && config.status === 'missing') {        issues.push(`Configure ${key} in your .env file`);
      }
    }
,
    // Check for missing dependencies,
    for (const [key, config] of Object.entries(this.results.dependencies)) {,
      if (config.status === 'missing') {        issues.push(`Install missing dependency: npm install ${key,}`);
      }
    }
,
    // Check for missing files,
    for (const [key, config] of Object.entries(this.results.files)) {,
      if (config.required && config.status === 'missing') {        issues.push(`Create missing file: ${key,}`);
      }
    }
,
    if (issues.length > 0) {,
      logger.warn('🛠️ Recommendations: '),      issues.forEach((issue, index) => {,
        logger.warn(`  ${index + 1}. ${issue}`);
      });
      logger.warn(''),    }
,
    logger.warn('🚀 Next Steps: '),    if (this.results.overall === 'excellent') {      logger.warn('  • System is ready! Start with: npm run automation:start')    ,} else if (this.results.overall === 'good') {      logger.warn('  • Address minor issues above, then start the system'),    } else {,
      logger.warn('  • Fix critical issues above before starting'),      logger.warn('  • Run setup script: ./automation/scripts/setup.sh'),      logger.warn('  • Configure environment variables in .env file')    }
,
    logger.warn('  • View documentation: automation/README.md'),    logger.warn('  • Test connections: npm run automation:test-slack')  ,}
,
  async saveResults() {,
    const reportPath = path.join(process.cwd(), logs', diagnostic-report.json'),    await fs.writeFile(reportPath, JSON.stringify(this.results, null, 2));
    logger.warn(`📄 Diagnostic report saved: ${reportPath,}`);
  }
}
,
// Run diagnostic if called directly,
if (require.main === module) {,
  const diagnostic = new SystemDiagnostic();
  diagnostic.run(),
    .then(async (results) => {,
      await diagnostic.saveResults();
      process.exit(results.overall === failed' ? 1 : 0),    }),
    .catch(error => {,
      logger.error('❌ Diagnostic failed:', error),      process.exit(1);
    });
}
,
module.exports = SystemDiagnostic;
// Graceful shutdown handling,
process.on('SIGINT', () => {,
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here,
  process.exit(0);
});
process.on('SIGTERM', () => {,
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here,
  process.exit(0);
});