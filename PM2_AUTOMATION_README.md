# PM2 Automation System - Zion Tech Group

## 🚀 Overview

The PM2 Automation System provides continuous monitoring, maintenance, and improvement of the Zion Tech Group website. It consists of 11 automated processes that run continuously to ensure optimal performance, security, and quality.

## 📊 Automation Processes

### Core Automation Services

| Process | Purpose | Status | Memory | CPU |
|---------|---------|--------|--------|-----|
| **console-error-fixer** | Continuously fixes console errors and build issues | 🟢 Online | ~71MB | 0.3% |
| **link-checker** | Monitors and reports broken internal/external links | 🟢 Online | ~61MB | 0.3% |
| **continuous-improvement** | Implements ongoing website enhancements | 🟢 Online | ~61MB | 0.3% |
| **daily-build-test** | Ensures daily builds complete successfully | 🟢 Online | ~61MB | 0.3% |
| **security-audit** | Continuous security monitoring and updates | 🟢 Online | ~61MB | 0.3% |
| **dependency-updates** | Manages package updates and security patches | 🟢 Online | ~60MB | 0.2% |
| **performance-monitor** | Tracks website performance metrics | 🟢 Online | ~60MB | 0.3% |
| **quality-checks** | Runs automated quality assurance tests | 🟢 Online | ~60MB | 0.3% |
| **link-integrity** | Validates internal link structure | 🟢 Online | ~61MB | 0.2% |
| **front-maximizer** | Optimizes frontend performance | 🟢 Online | ~60MB | 0.2% |
| **sitemap-runner** | Generates and updates sitemaps | 🟢 Online | ~60MB | 0.3% |

## 🛠️ Management Commands

### Quick Commands

```bash
# Start all automation processes
npm run automation:start

# Stop all automation processes
npm run automation:stop

# Restart all automation processes
npm run automation:restart

# Check automation status
npm run automation:status

# View recent logs
npm run automation:logs

# Open PM2 monitoring interface
npm run automation:monit

# Check automation health
npm run automation:health

# Generate reports
npm run automation:reports
```

### Direct PM2 Commands

```bash
# Start automation only
npm run pm2:start

# Stop automation only
npm run pm2:stop

# Restart automation only
npm run pm2:restart

# View all PM2 processes
npm run pm2:status

# View PM2 logs
npm run pm2:logs

# Open PM2 monitoring
npm run pm2:monit
```

### Shell Script Commands

```bash
# Using the shell script directly
./scripts/start-automation.sh start
./scripts/start-automation.sh status
./scripts/start-automation.sh logs
./scripts/start-automation.sh monit
./scripts/start-automation.sh health
./scripts/start-automation.sh reports
```

## 📁 File Structure

```
scripts/
├── automation-manager.js          # Node.js automation manager
├── start-automation.sh            # Shell script for automation management
├── automation-dashboard.js        # Real-time monitoring dashboard
└── automation/
    ├── console-error-fixer.cjs    # Console error fixing automation
    ├── link-checker.cjs           # Link validation automation
    ├── continuous-improvement.cjs # Continuous improvement automation
    ├── daily-build-test.cjs       # Daily build testing automation
    ├── security-audit.cjs         # Security monitoring automation
    ├── dependency-updates.cjs     # Dependency management automation
    ├── performance-monitor.cjs    # Performance monitoring automation
    ├── quality-checks.cjs         # Quality assurance automation
    ├── link-integrity.cjs         # Link integrity validation
    ├── front-maximizer.cjs        # Frontend optimization automation
    └── sitemap-runner.cjs         # Sitemap generation automation

ecosystem.config.cjs               # PM2 configuration file
```

## 🔧 Configuration

### PM2 Ecosystem Configuration

The `ecosystem.config.cjs` file configures all automation processes with:

- **Memory limits**: 512MB per process
- **Auto-restart**: Enabled for all processes
- **Environment**: Production mode with 15-minute intervals
- **Monitoring**: Full process monitoring and logging

### Environment Variables

- `NODE_ENV`: Set to 'production' for all automation processes
- `AUTOMATION_INTERVAL`: 900000ms (15 minutes) between automation cycles

## 📊 Monitoring & Reporting

### Real-time Dashboard

```bash
# Start the real-time monitoring dashboard
node scripts/automation-dashboard.js
```

The dashboard provides:
- Live process status updates
- Memory and CPU usage monitoring
- Recent log activity
- Health recommendations
- Performance metrics

### Health Reports

```bash
# Generate health report
npm run automation:health

# Generate performance report
npm run automation:reports
```

Reports are saved as:
- `automation-health-report.json` - Process health status
- `automation-performance-report.json` - Performance metrics
- `automation-status-report.txt` - Human-readable status

## 🚨 Troubleshooting

### Common Issues

1. **Process Not Starting**
   ```bash
   # Check PM2 installation
   npm install -g pm2
   
   # Restart all processes
   npm run automation:restart
   ```

2. **High Memory Usage**
   ```bash
   # Check memory usage
   npm run pm2:status
   
   # Restart specific process
   npm run pm2:restart <process-name>
   ```

3. **Process Errors**
   ```bash
   # Check process logs
   npm run automation:logs
   
   # Auto-fix failed processes
   node scripts/automation-manager.js fix
   ```

### Log Management

```bash
# View specific process logs
pm2 logs <process-name>

# View all logs
pm2 logs

# Clear logs
pm2 flush
```

## 🔄 Automation Workflows

### Console Error Fixing
- **Frequency**: Every 15 minutes
- **Process**: Builds project, scans for errors, applies fixes
- **Output**: Error reports and fix confirmations

### Link Validation
- **Frequency**: Every 15 minutes
- **Process**: Scans internal and external links
- **Output**: Broken link reports and status updates

### Security Auditing
- **Frequency**: Every 15 minutes
- **Process**: Dependency vulnerability scanning
- **Output**: Security alerts and update recommendations

### Performance Monitoring
- **Frequency**: Every 15 minutes
- **Process**: Website performance metrics collection
- **Output**: Performance reports and optimization suggestions

## 📈 Performance Metrics

### Current System Status
- **Total Processes**: 11
- **Online Processes**: 11 (100%)
- **Total Memory Usage**: ~670MB
- **Average CPU Usage**: 0.3%
- **Uptime**: Continuous operation
- **Restart Count**: 0 (stable)

### Resource Optimization
- Each process runs independently
- Memory limits prevent resource exhaustion
- Auto-restart ensures continuous operation
- Efficient logging and monitoring

## 🚀 Getting Started

### First Time Setup

1. **Install PM2 globally**
   ```bash
   npm install -g pm2
   ```

2. **Start automation system**
   ```bash
   npm run automation:start
   ```

3. **Verify status**
   ```bash
   npm run automation:status
   ```

4. **Monitor processes**
   ```bash
   npm run automation:monit
   ```

### Daily Operations

1. **Check status**: `npm run automation:status`
2. **View logs**: `npm run automation:logs`
3. **Monitor health**: `npm run automation:health`
4. **Generate reports**: `npm run automation:reports`

## 🔒 Security Features

- **Process isolation**: Each automation runs independently
- **Memory limits**: Prevents resource exhaustion attacks
- **Auto-restart**: Ensures continuous operation
- **Logging**: Full audit trail of all operations
- **Error handling**: Graceful failure recovery

## 📋 Maintenance Schedule

### Daily
- Status checks and health monitoring
- Log review and error analysis
- Performance metric collection

### Weekly
- Comprehensive health reports
- Performance optimization analysis
- Security audit reviews

### Monthly
- System performance review
- Automation process optimization
- Resource usage analysis

## 🆘 Support & Troubleshooting

### Quick Diagnostics

```bash
# Check system health
npm run automation:health

# View recent activity
npm run automation:logs

# Monitor real-time
npm run automation:monit
```

### Advanced Troubleshooting

```bash
# Use automation manager
node scripts/automation-manager.js help

# Check specific process
node scripts/automation-manager.js logs <process-name>

# Auto-fix issues
node scripts/automation-manager.js fix
```

## 📚 Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Node.js Process Management](https://nodejs.org/api/process.html)
- [Automation Best Practices](https://github.com/Zion-Holdings/zion.app)

---

**Last Updated**: $(date)
**System Version**: PM2 v5.x
**Status**: All systems operational ✅
