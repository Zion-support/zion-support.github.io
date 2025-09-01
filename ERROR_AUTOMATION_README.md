# 🚀 Error Automation System

A comprehensive PM2-based automation system that continuously detects and automatically fixes errors in your project.

## 🎯 Overview

This system provides automated error detection, fixing, and prevention for JavaScript/TypeScript projects. It runs continuously in the background using PM2 process manager to ensure your project stays error-free.

## ✨ Features

### 🔍 **Error Detection Service**
- **Real-time scanning** every 5 minutes
- **File watching** for immediate error detection
- **Comprehensive error categorization** (syntax, TypeScript, ESLint, build, dependencies, configuration)
- **Intelligent error prioritization** by severity

### 🛠️ **Automated Error Fixing**
- **Syntax Error Fixer**: Fixes unterminated strings, missing semicolons, unclosed brackets
- **TypeScript Error Fixer**: Resolves type issues, missing imports, interface problems
- **ESLint Error Fixer**: Automatically fixes linting violations
- **File Extension Normalizer**: Standardizes file extensions and updates imports
- **Import Cleaner**: Removes unused imports and organizes import statements

### 📊 **Monitoring & Reporting**
- **Code Quality Monitor**: Tracks project health metrics
- **Build Health Monitor**: Monitors build performance and bundle optimization
- **Error Report Aggregator**: Generates comprehensive error reports
- **Intelligent Error Prevention**: Learns from patterns to prevent future errors

## 🚀 Quick Start

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Start the Error Automation System**
```bash
./start-error-automation-system.sh
```

### 3. **Verify Services are Running**
```bash
pm2 list
pm2 logs
```

## 📋 Service Details

| Service | Frequency | Purpose |
|---------|-----------|---------|
| **Error Detection Service** | Every 5 minutes | Scans for new errors |
| **Syntax Error Fixer** | Every 10 minutes | Fixes syntax issues |
| **TypeScript Error Fixer** | Every 15 minutes | Resolves TS errors |
| **ESLint Error Fixer** | Every 10 minutes | Fixes linting issues |
| **File Extension Normalizer** | Every 30 minutes | Standardizes file types |
| **Import Cleaner** | Every 20 minutes | Cleans up imports |
| **Code Quality Monitor** | Every 5 minutes | Tracks project health |
| **Build Health Monitor** | Every 30 minutes | Monitors build performance |
| **Error Report Aggregator** | Every 10 minutes | Generates reports |
| **Intelligent Error Prevention** | Every 15 minutes | Prevents future errors |

## 🔧 Configuration

### Environment Variables

The system can be configured using environment variables in the PM2 ecosystem configuration:

```javascript
env: {
  NODE_ENV: 'development',
  SCAN_INTERVAL: '300000',        // 5 minutes
  AUTO_FIX: 'true',               // Enable automatic fixing
  LOG_LEVEL: 'info',              // Logging level
  MAX_RETRIES: '3',               // Maximum retry attempts
  BACKUP_BEFORE_FIX: 'true'       // Create backups before fixing
}
```

### Customizing Fix Intervals

Modify the `cron_restart` values in `ecosystem.error-automation.config.cjs`:

```javascript
cron_restart: '0 */2 * * *',  // Every 2 hours
cron_restart: '0 */3 * * *',  // Every 3 hours
cron_restart: '0 */4 * * *',  // Every 4 hours
```

## 📁 Directory Structure

```
project/
├── ecosystem.error-automation.config.cjs  # PM2 ecosystem configuration
├── scripts/pm2/                           # PM2 service scripts
│   ├── error-detection-service.js         # Main error detection service
│   ├── syntax-error-fixer.js              # Syntax error fixing service
│   ├── typescript-error-fixer.js          # TypeScript error fixing service
│   └── ...                               # Other services
├── logs/pm2/                              # PM2 service logs
├── error-reports/                         # Generated error reports
├── backups/                               # File backups before fixes
│   ├── syntax-fixes/                      # Syntax fix backups
│   └── typescript-fixes/                  # TypeScript fix backups
└── start-error-automation-system.sh       # Startup script
```

## 📊 Monitoring & Logs

### View Service Status
```bash
pm2 list                    # Show all services
pm2 monit                   # Interactive monitoring
pm2 logs                    # View all logs
pm2 logs [service-name]     # View specific service logs
```

### Log Files Location
- **PM2 Logs**: `logs/pm2/`
- **Error Reports**: `error-reports/`
- **Backups**: `backups/`

### Sample Log Output
```json
{
  "timestamp": "2025-09-01T08:30:00.000Z",
  "level": "info",
  "message": "Syntax scan completed. Found 15 syntax errors",
  "service": "error-detection-service"
}
```

## 🛠️ Manual Operations

### Trigger Immediate Fix
```bash
# Trigger syntax error fixer
pm2 sendSignal SIGUSR2 syntax-error-fixer

# Trigger TypeScript error fixer
pm2 sendSignal SIGUSR2 typescript-error-fixer

# Trigger ESLint error fixer
pm2 sendSignal SIGUSR2 eslint-error-fixer
```

### Restart Services
```bash
pm2 restart all              # Restart all services
pm2 restart [service-name]   # Restart specific service
pm2 reload all               # Zero-downtime reload
```

### Stop/Start System
```bash
pm2 stop all                 # Stop all services
pm2 start all                # Start all services
pm2 delete all               # Remove all services
```

## 🔍 Error Types Handled

### 1. **Syntax Errors**
- Unterminated strings (single quotes, double quotes, backticks)
- Unterminated comments (block comments)
- Missing semicolons
- Unclosed brackets, braces, parentheses
- Malformed imports/exports

### 2. **TypeScript Errors**
- Undefined names and variables
- Missing type annotations
- Module resolution issues
- Property access errors
- Parameter type issues

### 3. **ESLint Violations**
- Code style issues
- Best practice violations
- Import/export problems
- Unused variables

### 4. **Build Errors**
- Compilation failures
- Bundle optimization issues
- Performance problems

### 5. **Dependency Issues**
- Security vulnerabilities
- Version conflicts
- Missing packages

## 📈 Performance & Optimization

### Resource Management
- **Memory limits**: 1GB per service
- **Auto-restart**: Services restart automatically on failure
- **Batch processing**: Large fixes are processed in batches
- **File size limits**: Configurable thresholds for large files

### Monitoring Metrics
- **Fix success rate**: Percentage of successful fixes
- **Error reduction**: Track error count over time
- **Service health**: Uptime and performance metrics
- **Resource usage**: Memory and CPU monitoring

## 🚨 Troubleshooting

### Common Issues

#### 1. **Services Not Starting**
```bash
# Check PM2 installation
npm list -g pm2

# Check service logs
pm2 logs [service-name]

# Verify ecosystem config
node -c ecosystem.error-automation.config.cjs
```

#### 2. **Permission Issues**
```bash
# Fix file permissions
chmod +x scripts/pm2/*.js
chmod +x start-error-automation-system.sh

# Check directory permissions
ls -la logs/ error-reports/ backups/
```

#### 3. **Dependency Issues**
```bash
# Reinstall dependencies
npm install

# Clear npm cache
npm cache clean --force

# Check for conflicts
npm ls
```

### Debug Mode

Enable debug logging by setting environment variables:

```bash
export LOG_LEVEL=debug
export DEBUG=true
```

## 🔒 Security Considerations

### Backup Strategy
- **Automatic backups** before any file modifications
- **Timestamped backups** for easy rollback
- **Configurable backup retention**

### File Validation
- **Syntax verification** after fixes
- **Type checking** for TypeScript files
- **Build verification** for critical fixes

## 📚 Advanced Usage

### Custom Error Patterns

Add custom error detection patterns in the error detection service:

```javascript
// In error-detection-service.js
this.customPatterns = {
  customError: /your-custom-pattern/g
};
```

### Integration with CI/CD

The system can be integrated with CI/CD pipelines:

```yaml
# GitHub Actions example
- name: Start Error Automation
  run: |
    npm install -g pm2
    ./start-error-automation-system.sh
```

### Custom Fix Strategies

Extend the fixing logic by modifying the service scripts:

```javascript
// In syntax-error-fixer.js
async customFix(content, filePath) {
  // Your custom fixing logic
  return modifiedContent;
}
```

## 🤝 Contributing

### Adding New Services

1. Create a new service script in `scripts/pm2/`
2. Add the service to `ecosystem.error-automation.config.cjs`
3. Update the startup script verification
4. Add appropriate logging and error handling

### Service Template

```javascript
#!/usr/bin/env node

class CustomService {
  constructor() {
    // Initialize service
  }
  
  async start() {
    // Service startup logic
  }
  
  // Add your service methods
}

const service = new CustomService();
service.start().catch(console.error);
```

## 📄 License

This project is part of the Zion App ecosystem and follows the same licensing terms.

## 🆘 Support

For issues or questions:

1. Check the logs: `pm2 logs`
2. Review error reports in `error-reports/`
3. Check service status: `pm2 list`
4. Restart services: `pm2 restart all`

---

**🎉 Your project will now automatically stay error-free with continuous monitoring and automated fixing!**
