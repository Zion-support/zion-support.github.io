# Zion Tech Group - PM2 Automation System

## Overview

This project includes a comprehensive PM2 automation system that continuously monitors and fixes project errors, maintains code quality, and ensures optimal performance. The system runs multiple automated processes that work together to keep the project healthy and error-free.

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start All Automations
```bash
./start-automations.sh
```

Or manually:
```bash
pm2 start ecosystem.config.cjs
```

### 3. Monitor Status
```bash
pm2 status
pm2 logs
```

## 🔧 Available Automations

### High Priority (5-10 minute intervals)

#### 1. Enhanced Error Fixer
- **Script**: `scripts/automation/enhanced-error-fixer.cjs`
- **Interval**: 10 minutes
- **Purpose**: Automatically fixes common project errors including:
  - Merge conflicts
  - Unused imports and variables
  - Console statements
  - Parsing errors
  - TypeScript errors
  - ESLint violations

#### 2. Project Health Monitor
- **Script**: `scripts/automation/project-health-monitor.cjs`
- **Interval**: 5 minutes
- **Purpose**: Comprehensive project health monitoring:
  - Build health
  - Linting health
  - TypeScript health
  - Dependency health
  - Security health
  - Performance health
  - Code quality health

#### 3. Intelligent Predictive Monitor
- **Script**: `scripts/automation/intelligent-predictive-monitor.cjs`
- **Interval**: 5 minutes
- **Purpose**: ML-powered monitoring and prediction:
  - Failure prediction
  - Performance optimization
  - Resource usage monitoring
  - Predictive maintenance

### Medium Priority (15-30 minute intervals)

#### 4. Console Error Fixer
- **Script**: `scripts/automation/console-error-fixer.cjs`
- **Interval**: 15 minutes
- **Purpose**: Detects and fixes console statements in production code

#### 5. Link Checker
- **Script**: `scripts/automation/link-checker.cjs`
- **Interval**: 30 minutes
- **Purpose**: Validates internal and external links

### Lower Priority (1-6 hour intervals)

#### 6. Security Audit
- **Script**: `scripts/automation/security-audit.cjs`
- **Interval**: 4 hours
- **Purpose**: Security vulnerability scanning

#### 7. Quality Checks
- **Script**: `scripts/automation/quality-checks.cjs`
- **Interval**: 3 hours
- **Purpose**: Code quality analysis

#### 8. Performance Monitor
- **Script**: `scripts/automation/performance-monitor.cjs`
- **Interval**: 2 hours
- **Purpose**: Performance metrics monitoring

#### 9. Dependency Updates
- **Script**: `scripts/automation/dependency-updates.cjs`
- **Interval**: 6 hours
- **Purpose**: Automatic dependency updates

## 📊 Monitoring and Reports

### Report Locations
- **Error Fix Reports**: `error-fix-reports/`
- **Health Reports**: `health-reports/`
- **Console Error Reports**: `console-error-fixer-report.json`
- **Security Reports**: `security-reports/`
- **Quality Reports**: `quality-report.json`

### Viewing Logs
```bash
# View all logs
pm2 logs

# View specific automation logs
pm2 logs enhanced-error-fixer
pm2 logs project-health-monitor
pm2 logs intelligent-predictive-monitor

# Follow logs in real-time
pm2 logs --follow

# View logs for specific time period
pm2 logs --lines 100
```

## 🛠️ Management Commands

### Start/Stop Automations
```bash
# Start all automations
pm2 start ecosystem.config.cjs

# Stop all automations
pm2 stop all

# Restart all automations
pm2 restart all

# Delete all automations
pm2 delete all
```

### Individual Automation Control
```bash
# Start specific automation
pm2 start scripts/automation/enhanced-error-fixer.cjs --name enhanced-error-fixer

# Stop specific automation
pm2 stop enhanced-error-fixer

# Restart specific automation
pm2 restart enhanced-error-fixer

# Delete specific automation
pm2 delete enhanced-error-fixer
```

### Configuration
```bash
# Save current PM2 configuration
pm2 save

# Restore saved configuration
pm2 resurrect

# Generate startup script
pm2 startup
```

## 🔍 Troubleshooting

### Common Issues

#### 1. PM2 Not Found
```bash
npm install -g pm2
```

#### 2. Permission Issues
```bash
sudo npm install -g pm2
```

#### 3. Port Conflicts
Check if ports are already in use:
```bash
lsof -i :3000
```

#### 4. Memory Issues
Monitor memory usage:
```bash
pm2 monit
```

### Debug Mode
```bash
# Run automation in debug mode
NODE_ENV=development pm2 start scripts/automation/enhanced-error-fixer.cjs --name debug-error-fixer

# View detailed logs
pm2 logs debug-error-fixer --lines 200
```

## 📈 Performance Monitoring

### Real-time Monitoring
```bash
pm2 monit
```

### Performance Metrics
- CPU usage per automation
- Memory usage per automation
- Error rates
- Response times
- Uptime statistics

## 🔒 Security Features

### Automatic Security Checks
- Dependency vulnerability scanning
- Code security analysis
- Security header validation
- Content Security Policy checks

### Security Reports
- Automated security reports
- Vulnerability notifications
- Security score tracking

## 🎯 Best Practices

### 1. Regular Monitoring
- Check PM2 status daily
- Review automation logs weekly
- Monitor performance metrics

### 2. Backup Configuration
```bash
# Backup PM2 configuration
pm2 save
cp ~/.pm2/dump.pm2 pm2-backup.json
```

### 3. Update Automations
- Keep automation scripts updated
- Review and update intervals as needed
- Monitor automation effectiveness

### 4. Resource Management
- Monitor memory usage
- Adjust automation intervals if needed
- Scale automations based on project size

## 📝 Configuration

### Environment Variables
```bash
# Set automation intervals (in milliseconds)
export AUTOMATION_INTERVAL=600000  # 10 minutes
export NODE_ENV=production
```

### Custom Intervals
Edit `ecosystem.config.cjs` to modify automation intervals:
```javascript
env: {
  NODE_ENV: 'production',
  AUTOMATION_INTERVAL: '600000' // 10 minutes
}
```

## 🚨 Alerts and Notifications

### Error Alerts
- Critical errors trigger immediate alerts
- Warning thresholds for performance issues
- Security vulnerability notifications

### Health Score Tracking
- Project health score (0-100)
- Trend analysis
- Improvement recommendations

## 📚 Additional Resources

### Documentation
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Security Best Practices](https://owasp.org/www-project-top-ten/)

### Support
- Check automation logs for detailed error information
- Review generated reports for insights
- Monitor health scores for trends

---

## 🎉 Success Metrics

The automation system is working effectively when:
- ✅ Project health score > 90
- ✅ Zero critical errors
- ✅ Build success rate > 95%
- ✅ Security vulnerabilities < 5
- ✅ Performance score > 85

Monitor these metrics regularly to ensure optimal project health!