# PM2 Automation System - Error Monitoring & Auto-Fixing

## 🚀 Overview

This PM2 automation system provides comprehensive error monitoring, automatic fixing, and health checking for your project. It continuously monitors your application for various types of errors and automatically attempts to fix them.

## 🛠️ Components

### 1. Error Monitor (`scripts/error-monitor.js`)
- **Purpose**: Continuously monitors for TypeScript, ESLint, and build errors
- **Frequency**: Every 10 minutes
- **Features**:
  - TypeScript error detection and parsing
  - ESLint error detection and parsing
  - Build error detection and parsing
  - Error threshold monitoring (triggers auto-fixer at 5+ errors)
  - Detailed error reporting

### 2. Auto Fixer (`scripts/auto-fixer.js`)
- **Purpose**: Automatically fixes detected errors
- **Frequency**: Every 2 hours or when triggered by error monitor
- **Capabilities**:
  - Resolves merge conflicts
  - Fixes import/export errors
  - Adds missing type annotations
  - Fixes common syntax errors
  - Cleans up malformed files
  - Validates fixes after application

### 3. Health Checker (`scripts/health-checker.js`)
- **Purpose**: Monitors application and system health
- **Frequency**: Every 5 minutes
- **Checks**:
  - Application response time and status
  - Disk space usage
  - Memory usage
  - PM2 process status
  - Log file sizes
  - Dependency status
  - Auto-restart on critical health issues

### 4. Log Cleaner (`scripts/log-cleaner.js`)
- **Purpose**: Manages log files and prevents disk space issues
- **Frequency**: Daily at 2 AM
- **Features**:
  - Removes logs older than 7 days
  - Archives large log files (>100MB)
  - Manages total log directory size (<500MB)
  - Cleans old error reports (>14 days)
  - Rotates PM2 logs

### 5. Main Application (`zion-app`)
- **Purpose**: Your main application
- **Features**:
  - Auto-restart on failure
  - Memory limit monitoring (2GB)
  - Daily restart at 4 AM for maintenance
  - Comprehensive logging

## 📁 Directory Structure

```
/workspace/
├── ecosystem.config.js           # PM2 configuration
├── start-pm2-automation.sh       # Startup script
├── logs/                         # Log files
│   ├── app-*.log                # Application logs
│   ├── error-monitor-*.log      # Error monitor logs
│   ├── health-checker-*.log     # Health checker logs
│   ├── auto-fixer-*.log         # Auto fixer logs
│   └── log-cleaner-*.log        # Log cleaner logs
├── error-reports/               # Error reports
│   ├── error-monitor-report-*.json
│   ├── auto-fixer-report-*.json
│   └── health-report-*.json
└── scripts/                     # Automation scripts
    ├── error-monitor.js
    ├── auto-fixer.js
    ├── health-checker.js
    └── log-cleaner.js
```

## 🚦 Getting Started

### 1. Start the Automation System
```bash
./start-pm2-automation.sh
```

### 2. Start with System Boot (Optional)
```bash
./start-pm2-automation.sh --startup
```

## 📊 Monitoring Commands

### View All Processes
```bash
pm2 list
```

### Real-time Monitoring Dashboard
```bash
pm2 monit
```

### View Logs
```bash
# All logs
pm2 logs

# Specific application logs
pm2 logs zion-app
pm2 logs error-monitor
pm2 logs health-checker
pm2 logs auto-fixer
pm2 logs log-cleaner
```

### Check Application Health
```bash
curl http://localhost:3000/health
```

## 🔧 Management Commands

### Restart All Processes
```bash
pm2 restart all
```

### Stop All Processes
```bash
pm2 stop all
```

### Delete All Processes
```bash
pm2 delete all
```

### Restart Specific Process
```bash
pm2 restart zion-app
pm2 restart error-monitor
```

### View Process Details
```bash
pm2 show zion-app
```

### Save Configuration
```bash
pm2 save
```

## 📈 Automation Schedule

| Process | Frequency | Purpose |
|---------|-----------|---------|
| Error Monitor | Every 10 minutes | Detect and report errors |
| Health Checker | Every 5 minutes | Monitor system health |
| Auto Fixer | Every 2 hours | Fix detected errors |
| Log Cleaner | Daily at 2 AM | Clean and manage logs |
| App Restart | Daily at 4 AM | Maintenance restart |

## 🔍 Error Types Monitored

### TypeScript Errors
- Type mismatches
- Missing type annotations
- Import/export errors
- Syntax errors
- Configuration issues

### ESLint Errors
- Code quality issues
- Style violations
- Unused variables
- Import/export problems
- Best practice violations

### Build Errors
- Compilation failures
- Dependency issues
- Configuration problems
- Asset loading errors

### System Health Issues
- High memory usage (>90%)
- Low disk space (<10% free)
- Process failures
- Response time issues
- Log file overflow

## 🛡️ Auto-Fix Capabilities

### Merge Conflicts
- Automatically resolves simple merge conflicts
- Keeps HEAD version by default
- Removes conflict markers

### Import/Export Fixes
- Fixes missing imports
- Corrects import paths
- Removes unused imports
- Fixes export syntax

### Type Annotations
- Adds missing type annotations
- Provides `any` type for untyped variables
- Fixes function return types

### Syntax Fixes
- Adds missing semicolons
- Fixes incomplete declarations
- Repairs malformed objects/arrays
- Corrects string literals

### File Cleanup
- Removes empty files or adds default exports
- Fixes malformed file structures
- Cleans up artifacts

## 📋 Reports and Logs

### Error Monitor Reports
Location: `error-reports/error-monitor-report-*.json`
- Error summary by type
- Detailed error information
- Recommendations for fixes

### Auto Fixer Reports
Location: `error-reports/auto-fixer-report-*.json`
- Applied fixes summary
- Failed fixes with reasons
- Success/failure status

### Health Reports
Location: `logs/health-report-*.json`
- System health status
- Resource usage metrics
- Process status information

### Log Cleaner Reports
Location: `logs/log-cleaner-report-*.json`
- Cleaned files summary
- Space reclaimed
- Archive information

## 🚨 Troubleshooting

### PM2 Not Starting
```bash
# Check PM2 status
pm2 status

# Restart PM2 daemon
pm2 kill
pm2 start ecosystem.config.js
```

### High Resource Usage
```bash
# Check resource usage
pm2 monit

# Restart specific process
pm2 restart <process-name>
```

### Automation Not Working
```bash
# Check automation logs
pm2 logs error-monitor
pm2 logs health-checker

# Manually trigger automation
node scripts/error-monitor.js
node scripts/health-checker.js
```

### Build Failures
```bash
# Check build logs
npm run build

# Run auto-fixer manually
node scripts/auto-fixer.js
```

## 🔧 Configuration

### Ecosystem Configuration
Edit `ecosystem.config.js` to modify:
- Process settings
- Memory limits
- Restart policies
- Log configurations
- Cron schedules

### Error Thresholds
Modify in `scripts/error-monitor.js`:
```javascript
this.errorThreshold = 5; // Number of errors before triggering fixes
```

### Health Check Intervals
Modify cron schedules in `ecosystem.config.js`:
```javascript
cron_restart: '*/5 * * * *' // Every 5 minutes
```

## 🎯 Benefits

1. **Automated Error Detection**: Continuous monitoring for various error types
2. **Self-Healing**: Automatic fixing of common errors
3. **Health Monitoring**: Proactive system health checks
4. **Resource Management**: Automated log cleanup and resource monitoring
5. **Minimal Downtime**: Auto-restart on failures
6. **Comprehensive Logging**: Detailed logs for debugging
7. **Easy Management**: Simple PM2 commands for control
8. **Scalable**: Can be extended with additional monitors and fixes

## 🔮 Future Enhancements

- Advanced AI-powered error fixing
- Integration with external monitoring services
- Slack/email notifications
- Performance optimization suggestions
- Security vulnerability scanning
- Automated dependency updates
- Custom error patterns and fixes
- Metrics dashboard and analytics

---

Your project now has a robust, automated error monitoring and fixing system powered by PM2! 🎉