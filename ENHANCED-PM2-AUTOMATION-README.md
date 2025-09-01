# Enhanced PM2 Automation System 🚀

A comprehensive, intelligent automation system built on PM2 that automatically manages your development workflow, code quality, deployments, and repository operations.

## 🌟 What's New

This enhanced system introduces several intelligent automation processes that go beyond basic PM2 process management:

### 🤖 Git Automation Manager
- **Automatic commits** of improvements and fixes
- **Intelligent branch management** and merging
- **Conflict resolution** with smart strategies
- **Repository health monitoring**
- **Automated deployment triggers**

### 🚀 Intelligent Deployment Pipeline
- **Automated deployment** with health checks
- **Smart rollback** on failures
- **Performance monitoring** during deployment
- **Dependency validation**
- **Environment-specific configurations**

### 🎯 Code Quality Automation
- **Automatic linting** and fixing
- **Code formatting** with Prettier
- **Type checking** with TypeScript
- **Test execution** and coverage analysis
- **Code quality metrics** and reporting

### ⚡ Performance Optimization Automation
- **Bundle analysis** and optimization
- **Performance monitoring** and alerts
- **Automatic optimization** suggestions
- **Performance regression** detection

### 🔒 Security Automation
- **Automated security scanning**
- **Vulnerability detection** and reporting
- **Security best practices** enforcement
- **Dependency security** monitoring

### 📊 Repository Health Monitor
- **Repository health** assessment
- **Branch analysis** and recommendations
- **Code quality** trending
- **Performance metrics** tracking

## 🚀 Quick Start

### 1. Start the Enhanced System

```bash
# Make the script executable
chmod +x start-enhanced-pm2-automation.sh

# Start the enhanced automation system
./start-enhanced-pm2-automation.sh
```

### 2. Check System Status

```bash
# View overall system status
./check-automation.sh

# Open automation dashboard
./automation-dashboard.sh

# Check PM2 status
pm2 status
```

### 3. Monitor and Manage

```bash
# Real-time monitoring
pm2 monit

# View specific process logs
./view-logs.sh git-automation-manager
./view-logs.sh code-quality-automation
./view-logs.sh intelligent-deployment-pipeline

# Restart automation system
./restart-automation.sh
```

## 📋 Available Commands

### System Management
- `./start-enhanced-pm2-automation.sh` - Start the enhanced system
- `./stop-automation.sh` - Stop all automation processes
- `./restart-automation.sh` - Restart all automation processes
- `./check-automation.sh` - View comprehensive system status

### Monitoring and Logs
- `./automation-dashboard.sh` - Open automation dashboard
- `./view-logs.sh <process>` - View specific process logs
- `pm2 monit` - Real-time process monitoring
- `pm2 logs` - View all logs

### Specialized Automation
- `./git-automation.sh` - Git automation information and controls
- `./quality-automation.sh` - Code quality automation information

## 🔧 Configuration

### Environment Variables

The system can be configured using environment variables:

```bash
# Git Automation
export GIT_AUTO_COMMIT=true
export GIT_AUTO_PUSH=true
export GIT_AUTO_MERGE=true

# Deployment Pipeline
export AUTO_DEPLOY=true
export DEPLOY_STRATEGY=intelligent
export HEALTH_CHECK_URL=http://localhost:3000/health

# Code Quality
export AUTO_LINT=true
export AUTO_FORMAT=true
export AUTO_TEST=true

# Performance Optimization
export AUTO_OPTIMIZE=true
export BUNDLE_ANALYSIS=true

# Security
export AUTO_SECURITY_SCAN=true
export VULNERABILITY_CHECK=true
```

### Ecosystem Configuration

The system uses `ecosystem.config.cjs` with enhanced process definitions:

```javascript
// Example of new automation processes
{
  name: 'git-automation-manager',
  script: './scripts/automation/git-automation-manager.cjs',
  env: {
    GIT_AUTO_COMMIT: 'true',
    GIT_AUTO_PUSH: 'true',
    GIT_AUTO_MERGE: 'true'
  },
  cron_restart: '0 */3 * * *' // Restart every 3 hours
}
```

## 📊 Health Endpoints

The system provides several health check endpoints:

- **`/health`** - Basic application health
- **`/automation-status`** - Automation system status
- **`/quality-report`** - Code quality metrics

Access these at `http://localhost:3000/`

## 📈 Monitoring and Reporting

### Real-time Monitoring
```bash
# Monitor all processes
pm2 monit

# Monitor specific process
pm2 monit git-automation-manager
```

### Log Analysis
```bash
# View recent logs
pm2 logs --lines 100

# View specific process logs
pm2 logs git-automation-manager --lines 50
```

### Reports and Metrics
- **Automation Status**: `reports/automation-status.json`
- **Code Quality**: `reports/code-quality-report.json`
- **Deployment Status**: `reports/deployment-status.json`
- **Repository Health**: `reports/repository-health.json`

## 🔍 Troubleshooting

### Common Issues

1. **Process not starting**
   ```bash
   # Check PM2 logs
   pm2 logs
   
   # Check specific process
   pm2 logs <process-name>
   
   # Restart process
   pm2 restart <process-name>
   ```

2. **Health checks failing**
   ```bash
   # Check health endpoint
   curl http://localhost:3000/health
   
   # Check automation status
   curl http://localhost:3000/automation-status
   ```

3. **Git automation issues**
   ```bash
   # Check Git automation logs
   ./view-logs.sh git-automation-manager
   
   # Manual Git automation trigger
   pm2 restart git-automation-manager
   ```

### Debug Mode

Enable debug logging by setting environment variables:

```bash
export DEBUG=true
export PM2_DEBUG=true
```

## 🚀 Advanced Usage

### Custom Automation Scripts

You can create custom automation scripts in `scripts/automation/`:

```javascript
// scripts/automation/custom-automation.cjs
class CustomAutomation {
  async run() {
    // Your custom automation logic
  }
}

module.exports = CustomAutomation;
```

### Integration with CI/CD

The system can integrate with your CI/CD pipeline:

```yaml
# .github/workflows/automation.yml
- name: Trigger PM2 Automation
  run: |
    pm2 restart intelligent-deployment-pipeline
    pm2 restart code-quality-automation
```

### Custom Health Checks

Extend the health endpoint with custom checks:

```javascript
// Add to health-endpoint.js
} else if (req.url === '/custom-health') {
  // Your custom health check logic
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ custom: 'healthy' }));
}
```

## 📚 API Reference

### Git Automation Manager

```javascript
const GitAutomationManager = require('./scripts/automation/git-automation-manager.cjs');

const manager = new GitAutomationManager();
await manager.autoCommit();
await manager.autoPush();
await manager.autoMerge();
```

### Code Quality Automation

```javascript
const CodeQualityAutomation = require('./scripts/automation/code-quality-automation.cjs');

const automation = new CodeQualityAutomation();
await automation.runQualityCheck();
await automation.runLinting();
await automation.runTests();
```

### Deployment Pipeline

```javascript
const IntelligentDeploymentPipeline = require('./scripts/automation/intelligent-deployment-pipeline.cjs');

const pipeline = new IntelligentDeploymentPipeline();
await pipeline.deploy();
await pipeline.rollback();
```

## 🔄 Update and Maintenance

### Updating the System

```bash
# Pull latest changes
git pull origin main

# Restart automation system
./restart-automation.sh

# Check for updates
./check-automation.sh
```

### Backup and Recovery

```bash
# Backup current configuration
cp ecosystem.config.cjs ecosystem.config.backup.cjs

# Restore from backup
cp ecosystem.config.backup.cjs ecosystem.config.cjs
pm2 reload ecosystem.config.cjs
```

## 🤝 Contributing

To contribute to the automation system:

1. Create a new automation script in `scripts/automation/`
2. Add the process to `ecosystem.config.cjs`
3. Update this README with documentation
4. Test thoroughly before submitting

## 📄 License

This enhanced PM2 automation system is part of the Zion Tech Group project.

## 🆘 Support

For support and questions:

- Check the logs: `pm2 logs`
- Review the automation status: `./check-automation.sh`
- Check health endpoints: `curl http://localhost:3000/health`
- Review this README for troubleshooting steps

---

**🎉 Welcome to the future of automated development!** 

This enhanced PM2 automation system will transform your development workflow by automatically handling the tedious tasks while you focus on building amazing features.