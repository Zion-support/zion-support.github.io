# 🚀 Bolt Zion - Intelligent PM2 Automation System

A comprehensive and intelligent automation system for your full-stack TypeScript application that leverages PM2 for process management, monitoring, and deployment automation.

## 🌟 Features

### 🧠 Intelligent Automation
- **Smart Environment Detection** - Automatically detects and configures development, staging, and production environments
- **Resource-Aware Scaling** - Automatically scales based on system resources (CPU, memory)
- **Intelligent File Watching** - Smart file change detection with selective service restarts
- **Adaptive Error Recovery** - Automatic error detection and intelligent recovery strategies

### 🚀 Development Workflow
- **Hot Reload Automation** - Intelligent file watching with smart restart logic
- **Multi-Service Management** - Frontend, backend, and monitoring services in one command
- **Error Auto-Fix** - Automatic dependency installation and cache clearing on errors
- **Health Check Integration** - Continuous health monitoring during development

### 📊 Production Management
- **Zero-Downtime Deployments** - Intelligent deployment with automatic rollbacks
- **Load Balancing** - Automatic load balancing and connection distribution
- **Performance Monitoring** - Real-time performance metrics and alerting
- **Intelligent Scaling** - Auto-scaling based on load and performance

### 🔍 Quality Assurance
- **Smart Test Selection** - Runs only relevant tests based on code changes
- **Continuous Quality Monitoring** - Automated linting, type checking, and security audits
- **Performance Testing** - Automated performance testing with Lighthouse and load testing
- **Intelligent Recommendations** - AI-powered suggestions for code improvements

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Monitoring    │
│   (React/Vite)  │◄──►│   (Express)     │◄──►│   Dashboard     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   API Gateway   │
                    │   (Load Balancer│
                    │   & Proxy)      │
                    └─────────────────┘
                                 │
                    ┌─────────────────┐
                    │   PM2 Process   │
                    │   Manager       │
                    └─────────────────┘
```

## 🚀 Quick Start

### 1. Installation

```bash
# Install dependencies
npm run install:all

# Install PM2 globally (if not already installed)
npm install -g pm2
```

### 2. Development Mode

```bash
# Start intelligent development automation
npm run dev:automated

# Or start individual services
npm run pm2:start:dev
```

### 3. Production Deployment

```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production

# Start production services
npm run pm2:start:production
```

## 📋 Available Scripts

### 🛠️ Development
```bash
npm run dev:automated          # Start intelligent development automation
npm run dev:hybrid            # Start frontend + backend concurrently
npm run dev                   # Start frontend only
npm run dev:backend           # Start backend only
```

### 🧪 Testing & Quality
```bash
npm run qa                     # Run full QA automation
npm run qa:watch              # Run QA with file watching
npm run qa:critical           # Run critical QA checks only
npm run qa:performance        # Run performance tests only
npm run test                  # Run all tests
npm run test:unit             # Run unit tests with coverage
npm run test:integration      # Run integration tests
npm run test:e2e              # Run end-to-end tests
```

### 🚀 Deployment
```bash
npm run deploy                # Deploy to default environment
npm run deploy:staging        # Deploy to staging
npm run deploy:production     # Deploy to production
```

### 📊 PM2 Management
```bash
npm run pm2:start             # Start all services
npm run pm2:start:dev         # Start development environment
npm run pm2:start:staging     # Start staging environment
npm run pm2:start:production  # Start production environment
npm run pm2:stop              # Stop all services
npm run pm2:restart           # Restart all services
npm run pm2:reload            # Reload configuration
npm run pm2:logs              # View logs
npm run pm2:monitor           # Open PM2 monitoring
npm run pm2:status            # Check service status
```

### 🔍 Monitoring & Health
```bash
npm run monitor:start         # Start monitoring dashboard
npm run gateway:start         # Start API gateway
npm run health:check          # Check frontend health
npm run health:check:backend  # Check backend health
npm run health:check:all      # Check all services
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in your project root:

```bash
# Environment
NODE_ENV=development

# Ports
PORT=3000
BACKEND_PORT=5000
GATEWAY_PORT=80
MONITOR_PORT=3002

# Database
DATABASE_URL=mongodb://localhost:27017/bolt-zion

# Security
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000

# Deployment
PROD_HOST=your-production-host
STAGING_HOST=your-staging-host
REPO_URL=git@github.com:your-username/bolt-zion.git
```

### PM2 Ecosystem Configuration

The `ecosystem.config.js` file automatically configures:

- **Environment-specific settings** (dev/staging/production)
- **Resource limits** based on system capabilities
- **Load balancing** and clustering
- **Health checks** and auto-restart
- **Logging** and monitoring
- **Performance optimization**

## 🔧 Customization

### Adding New Services

To add a new service to the PM2 ecosystem:

1. **Update `ecosystem.config.js`**:
```javascript
// Add to the apps array
{
  name: 'your-new-service',
  script: 'npm',
  args: 'run your-script',
  cwd: './your-service-directory',
  ...getEnvironmentConfig(getEnvironment().env),
  ...getMonitoringConfig(),
  ...getHealthConfig()
}
```

2. **Add scripts to `package.json`**:
```json
{
  "scripts": {
    "your-script": "your-command",
    "pm2:start:your-service": "pm2 start ecosystem.config.js --only your-new-service"
  }
}
```

### Custom Health Checks

Add custom health check endpoints to your services:

```javascript
// Frontend health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version
  });
});
```

### Custom Monitoring Metrics

Extend the monitoring system with custom metrics:

```javascript
// In your service
const pmx = require('pmx');

// Custom metric
const responseTime = pmx.metric({
  name: 'Response Time',
  unit: 'ms'
});

// Update metric
responseTime.set(150);
```

## 📊 Monitoring Dashboard

Access the real-time monitoring dashboard at `http://localhost:3002/dashboard` to view:

- **System Metrics** - CPU, memory, disk usage
- **Application Status** - Service health and performance
- **Real-time Alerts** - Performance warnings and critical issues
- **Performance Trends** - Historical performance data
- **Service Logs** - Centralized logging and error tracking

## 🚨 Alerting & Notifications

The system automatically generates alerts for:

- **High CPU usage** (>80%)
- **High memory usage** (>85%)
- **Service failures** and restarts
- **Performance degradation**
- **Health check failures**

## 🔄 Deployment Workflow

### Automated Deployment Process

1. **Pre-deployment Checks**
   - System resource validation
   - Current environment health check
   - Dependency verification

2. **Build & Test**
   - Application building
   - Automated testing
   - Quality checks

3. **Deployment**
   - Zero-downtime deployment
   - Health check validation
   - Automatic rollback on failure

4. **Post-deployment**
   - Performance monitoring
   - Backup cleanup
   - Notification sending

### Rollback Strategy

Automatic rollback is triggered when:
- Health checks fail consecutively
- Performance metrics degrade
- Error rates increase
- Service becomes unresponsive

## 🧪 Testing Strategy

### Intelligent Test Selection

The QA automation system automatically determines which tests to run based on:

- **File changes** - Only runs tests related to modified code
- **Change scope** - Frontend changes trigger E2E tests, backend changes trigger integration tests
- **Critical paths** - Always runs unit tests for critical components
- **Performance impact** - Runs performance tests for UI changes

### Test Types

- **Unit Tests** - Component and function testing
- **Integration Tests** - API and service integration
- **E2E Tests** - Full user journey testing
- **Performance Tests** - Lighthouse and load testing
- **Security Tests** - Vulnerability scanning and audit

## 🔍 Troubleshooting

### Common Issues

1. **Service won't start**
   ```bash
   # Check PM2 status
   npm run pm2:status
   
   # View logs
   npm run pm2:logs
   
   # Check health endpoints
   npm run health:check:all
   ```

2. **High memory usage**
   ```bash
   # Check memory usage
   npm run pm2:monitor
   
   # Restart services
   npm run pm2:restart
   ```

3. **Deployment failures**
   ```bash
   # Check deployment logs
   tail -f logs/deployment.log
   
   # Manual rollback
   npm run pm2:reload:production
   ```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment
DEBUG=* npm run dev:automated

# Or for specific services
DEBUG=pm2:* npm run pm2:start:dev
```

## 📈 Performance Optimization

### Automatic Optimizations

- **Memory management** - Automatic garbage collection optimization
- **CPU scaling** - Intelligent instance scaling based on load
- **Connection pooling** - Database and HTTP connection optimization
- **Caching strategies** - Intelligent cache invalidation and management

### Manual Optimizations

```bash
# Scale specific services
pm2 scale bolt-zion-frontend 4
pm2 scale bolt-zion-backend 2

# Set memory limits
pm2 restart bolt-zion-frontend --max-memory-restart 2G

# Monitor performance
npm run pm2:monitor
```

## 🔐 Security Features

- **Rate limiting** - Intelligent rate limiting based on user behavior
- **Security headers** - Automatic security header injection
- **CORS management** - Environment-specific CORS configuration
- **Input validation** - Automatic input sanitization and validation
- **Audit logging** - Comprehensive security event logging

## 🌍 Environment Management

### Development
- Hot reload enabled
- Debug logging
- Single instance mode
- File watching

### Staging
- Production-like configuration
- Limited instances
- Performance monitoring
- Automated testing

### Production
- Maximum instances
- Load balancing
- Performance optimization
- Security hardening
- Automated monitoring

## 📚 API Reference

### Development Automation
```javascript
const DevAutomation = require('./scripts/dev-automation');
const automation = new DevAutomation();

// Start development
await automation.start();

// Stop automation
await automation.stop();

// Get status
const status = automation.getStatus();
```

### Deployment Automation
```javascript
const DeployAutomation = require('./scripts/deploy-automation');
const automation = new DeployAutomation();

// Deploy to environment
const result = await automation.deploy('production');

// Get deployment history
const history = automation.getDeploymentHistory();
```

### QA Automation
```javascript
const QAAutomation = require('./scripts/qa-automation');
const automation = new QAAutomation();

// Run QA
const report = await automation.runQA({
  type: 'all',
  scope: 'changed',
  environment: 'development',
  watch: true
});
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run QA automation**: `npm run qa:critical`
5. **Submit a pull request**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: This README and inline code comments
- **Issues**: GitHub Issues for bug reports and feature requests
- **Discussions**: GitHub Discussions for questions and help
- **Wiki**: Additional documentation and examples

---

**Built with ❤️ using intelligent automation and PM2 process management**