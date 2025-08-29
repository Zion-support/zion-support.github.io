# 🚀 PM2 Intelligent Automation System

## Overview

This comprehensive PM2 automation system transforms your development workflow with intelligent process management, automated quality checks, and advanced monitoring capabilities. It's designed to make your development experience more efficient, reliable, and intelligent.

## ✨ Key Features

### 🧠 Intelligent Process Management
- **Auto-scaling** based on system resources
- **Smart restart strategies** with failure analysis
- **Memory and CPU optimization** with automatic process management
- **Health monitoring** with predictive maintenance

### 🔄 Development Workflow Automation
- **File watching** with intelligent change detection
- **Auto-linting** and type checking on save
- **Automatic process restart** on configuration changes
- **Quality gate enforcement** with real-time feedback

### 📊 Advanced Monitoring & Analytics
- **Real-time health metrics** for all processes
- **System resource monitoring** with alerts
- **Performance analytics** and trend analysis
- **Automated reporting** and insights

### 🛡️ Reliability & Recovery
- **Automatic backup** and restore capabilities
- **Graceful degradation** during system stress
- **Self-healing** processes with intelligent recovery
- **Disaster recovery** with automated rollbacks

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PM2 Ecosystem Config                     │
│              (ecosystem.config.js)                         │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│              PM2 Intelligent Manager                       │
│        (pm2-intelligent-manager.js)                       │
│  • Health Monitoring • Auto-Optimization • Backup         │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│            Development Workflow Manager                     │
│          (pm2-dev-workflow.js)                            │
│  • File Watching • Quality Checks • Process Management    │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│              Automation Launcher                           │
│        (pm2-automation-launcher.sh)                       │
│  • CLI Interface • System Management • Monitoring         │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start the entire automation system
```bash
# Using the launcher script
bash scripts/pm2-automation-launcher.sh start

# Or using npm scripts
npm run automation:start
```

### 3. Check status
```bash
npm run automation:status
# or
bash scripts/pm2-automation-launcher.sh status
```

## 📋 Available Commands

### 🎯 High-Level Automation Commands
```bash
# Start all automation systems
npm run automation:start

# Stop all automation systems
npm run automation:stop

# Restart all automation systems
npm run automation:restart

# Show comprehensive status
npm run automation:status

# Run health check
npm run automation:health

# Run automatic optimization
npm run automation:optimize

# Generate comprehensive report
npm run automation:report

# Create system backup
npm run automation:backup

# Clean up old files
npm run automation:cleanup
```

### 🧠 Intelligent Manager Commands
```bash
# Start intelligent monitoring
npm run pm2:intelligent:start

# Run health check
npm run pm2:intelligent:health

# Run optimization
npm run pm2:intelligent:optimize

# Generate report
npm run pm2:intelligent:report

# Create backup
npm run pm2:intelligent:backup
```

### 🔄 Development Workflow Commands
```bash
# Start development workflow
npm run pm2:workflow:start

# Stop development workflow
npm run pm2:workflow:stop

# Run quality checks
npm run pm2:workflow:quality

# Start monitoring
npm run pm2:workflow:monitor

# Clean up logs
npm run pm2:workflow:cleanup
```

### ⚡ Direct PM2 Commands
```bash
# Start PM2 ecosystem
npm run pm2:start

# Stop all PM2 processes
npm run pm2:stop

# Restart all processes
npm run pm2:restart

# Show PM2 status
npm run pm2:status

# View logs
npm run pm2:logs

# Monitor processes
npm run pm2:monitor

# Reload configuration
npm run pm2:reload

# Save current state
npm run pm2:save

# Restore saved state
npm run pm2:resurrect
```

## 🔧 Configuration

### Ecosystem Configuration (`ecosystem.config.js`)
The ecosystem file defines all your PM2 processes with intelligent configurations:

- **Frontend Development Server** - Vite dev server with hot reload
- **Backend Development Server** - Express server with TypeScript
- **Hybrid Development Server** - Combined frontend/backend
- **Intelligent Orchestrator** - Process management and optimization
- **Automation Dashboard** - Monitoring and metrics
- **Lint Manager** - Code quality automation
- **Code Quality Monitor** - Continuous quality assessment
- **Performance Optimizer** - Bundle and performance analysis
- **Security Scanner** - Vulnerability detection
- **SEO Optimizer** - SEO automation
- **Test Generator** - Automated test creation

### Environment Variables
```bash
# Development environment
NODE_ENV=development
LOG_LEVEL=info
MONITORING_INTERVAL=30000
HEALTH_CHECK_INTERVAL=60000

# Production environment
NODE_ENV=production
LOG_LEVEL=warn
MONITORING_INTERVAL=60000
HEALTH_CHECK_INTERVAL=300000
```

## 📊 Monitoring & Health Checks

### Real-Time Health Metrics
- **Process Status** - Online/offline/error states
- **Resource Usage** - Memory, CPU, and disk utilization
- **Performance Metrics** - Response times and throughput
- **Error Rates** - Failure frequency and patterns

### Automated Health Checks
```bash
# Run comprehensive health check
npm run automation:health

# View health report
cat automation/logs/health-report.json

# Monitor in real-time
npm run pm2:monitor
```

### Health Check Intervals
- **Process Health**: Every 30 seconds
- **System Resources**: Every 60 seconds
- **Quality Checks**: Every 5 minutes
- **Backup Creation**: Every hour
- **Report Generation**: Every 5 minutes

## 🔄 Auto-Optimization

### Smart Process Management
- **Memory Optimization** - Automatic restart of memory-intensive processes
- **CPU Load Balancing** - Process scaling based on system load
- **Resource Prioritization** - Critical processes get priority during stress
- **Graceful Degradation** - Non-essential processes stopped during resource constraints

### Optimization Triggers
- **Memory Usage > 90%** - Emergency optimization
- **CPU Usage > 90%** - Standard optimization
- **Process Failures > 5** - Auto-restart with backoff
- **Disk Usage > 90%** - Log cleanup and backup rotation

## 📁 File Structure

```
├── ecosystem.config.js                    # PM2 ecosystem configuration
├── scripts/
│   ├── pm2-intelligent-manager.js        # Intelligent process management
│   ├── pm2-dev-workflow.js               # Development workflow automation
│   └── pm2-automation-launcher.sh        # CLI automation launcher
├── automation/
│   ├── logs/                             # All automation logs
│   │   ├── health-report.json            # Health check reports
│   │   ├── quality-report.json           # Quality check reports
│   │   └── pm2-intelligent-report.json   # Intelligent manager reports
│   └── backups/                          # System backups
└── package.json                          # NPM scripts for automation
```

## 🚨 Troubleshooting

### Common Issues

#### PM2 Not Installed
```bash
npm install -g pm2
```

#### Permission Issues
```bash
# Make scripts executable
chmod +x scripts/pm2-automation-launcher.sh
chmod +x scripts/*.js
```

#### Process Won't Start
```bash
# Check logs
npm run pm2:logs

# Check status
npm run automation:status

# Restart automation
npm run automation:restart
```

#### High Memory Usage
```bash
# Run optimization
npm run automation:optimize

# Check health
npm run automation:health

# Clean up logs
npm run automation:cleanup
```

### Debug Mode
```bash
# Enable debug logging
LOG_LEVEL=debug npm run automation:start

# View detailed logs
tail -f automation/logs/pm2-intelligent-manager.log
tail -f automation/logs/pm2-dev-workflow.log
```

## 📈 Performance Tuning

### Memory Optimization
- **Frontend**: 2GB max memory, auto-restart on threshold
- **Backend**: 1GB max memory, optimized for TypeScript
- **Automation**: 512MB max memory, lightweight monitoring

### CPU Optimization
- **Development**: Single instance for hot reload
- **Production**: Multi-instance with load balancing
- **Automation**: Background processes with low priority

### Disk Optimization
- **Log Rotation**: Automatic cleanup after 7 days
- **Backup Management**: Keep last 24 backups
- **Cache Management**: Automatic PM2 log flushing

## 🔐 Security Features

### Process Isolation
- **User Permissions** - Run processes with appropriate user context
- **Resource Limits** - Memory and CPU constraints per process
- **Network Isolation** - Separate ports for different services

### Vulnerability Scanning
- **Dependency Checks** - Regular security audits
- **Auto-Updates** - Configurable automatic security updates
- **Threat Detection** - Real-time security monitoring

## 🚀 Advanced Usage

### Custom Automation Rules
```javascript
// In pm2-dev-workflow.js
const customRules = {
  autoActions: {
    lintOnSave: true,
    typeCheckOnSave: true,
    testOnChange: false,
    buildOnMajorChange: true,
    restartOnConfigChange: true
  }
};
```

### Custom Health Checks
```javascript
// In pm2-intelligent-manager.js
const customHealthChecks = {
  database: async () => checkDatabaseConnection(),
  externalAPI: async () => checkExternalAPIHealth(),
  customService: async () => checkCustomService()
};
```

### Integration with CI/CD
```yaml
# .github/workflows/deploy.yml
- name: Deploy with PM2
  run: |
    npm run automation:backup
    npm run pm2:reload
    npm run automation:health
```

## 📚 API Reference

### PM2 Intelligent Manager
```javascript
const PM2IntelligentManager = require('./scripts/pm2-intelligent-manager.js');

const manager = new PM2IntelligentManager();
await manager.startMonitoring();
await manager.performHealthCheck();
await manager.autoOptimize();
```

### Development Workflow
```javascript
const PM2DevWorkflow = require('./scripts/pm2-dev-workflow.js');

const workflow = new PM2DevWorkflow();
await workflow.startDevelopmentEnvironment();
await workflow.performQualityChecks();
```

## 🤝 Contributing

### Adding New Automation
1. Create your automation script in `scripts/`
2. Add it to the ecosystem configuration
3. Update the automation launcher
4. Add npm scripts to package.json
5. Update this README

### Testing Automation
```bash
# Test individual components
npm run pm2:intelligent:health
npm run pm2:workflow:quality

# Test full system
npm run automation:start
npm run automation:health
npm run automation:stop
```

## 📞 Support

### Getting Help
- Check the logs in `automation/logs/`
- Run health checks: `npm run automation:health`
- View status: `npm run automation:status`
- Check PM2 status: `npm run pm2:status`

### Reporting Issues
1. Run `npm run automation:report` to generate a comprehensive report
2. Check the logs for error details
3. Include system information and error messages
4. Describe the steps to reproduce the issue

## 🎯 Best Practices

### Development Workflow
1. **Start automation** at the beginning of your work session
2. **Monitor health** regularly during development
3. **Run quality checks** before committing code
4. **Use backups** before major changes
5. **Clean up logs** periodically

### Production Deployment
1. **Test automation** in staging environment
2. **Monitor resources** during deployment
3. **Set up alerts** for critical issues
4. **Regular backups** of production state
5. **Performance monitoring** and optimization

### Maintenance
1. **Regular health checks** - Daily
2. **Log rotation** - Weekly
3. **Backup verification** - Weekly
4. **Performance review** - Monthly
5. **Security updates** - As needed

---

## 🎉 Congratulations!

You now have a **world-class PM2 automation system** that will significantly improve your development experience. The system provides:

- 🚀 **Intelligent process management** with auto-optimization
- 🔄 **Seamless development workflow** with file watching and quality checks
- 📊 **Comprehensive monitoring** with real-time health metrics
- 🛡️ **Reliability features** with automatic backup and recovery
- 🎯 **Performance optimization** with smart resource management

Start with `npm run automation:start` and watch your development experience transform! 🚀