# Error Automation System

A comprehensive automated error fixing and monitoring system for the Zion Tech Group project.

## 🚀 Quick Start

### Start the Automation System
```bash
npm run automation:start
```

### Manual Error Fixing
```bash
# Run comprehensive error fixing
npm run automation:comprehensive

# Run basic error fixing
npm run automation:error-fix
```

### Monitor the System
```bash
# Check status
npm run automation:status

# View logs
npm run automation:logs

# Restart all processes
npm run automation:restart

# Stop all processes
npm run automation:stop
```

## 📋 What This System Does

### 🔧 Error Fixing
- **Merge Conflicts**: Automatically resolves Git merge conflicts
- **Syntax Errors**: Fixes common JavaScript/TypeScript syntax issues
- **Unused Imports**: Removes unused imports and variables
- **TypeScript Errors**: Fixes TypeScript compilation errors
- **Duplicate Declarations**: Removes duplicate function/import declarations
- **Missing Exports**: Adds missing export statements
- **Import Errors**: Fixes import path and module issues
- **Undefined Variables**: Fixes undefined variable references
- **Console Statements**: Handles console.log statements in production

### 🔍 Code Quality Checks
- **ESLint**: Runs linting with auto-fix
- **TypeScript**: Type checking
- **Prettier**: Code formatting
- **Bundle Analysis**: Performance monitoring

### 🔒 Security & Dependencies
- **Security Audits**: npm audit checks
- **Dependency Updates**: Outdated package detection
- **Vulnerability Scanning**: Security vulnerability detection

## 📊 Automation Schedule

| Process | Frequency | Priority |
|---------|-----------|----------|
| Comprehensive Error Fixer | Every 10 minutes | 🔴 HIGHEST |
| Error Fixer Automation | Every 15 minutes | 🔴 HIGH |
| Console Error Fixer | Every 15 minutes | 🔴 HIGH |
| Code Quality Checks | Every 30 minutes | 🟡 MEDIUM |
| Security Checks | Every 4 hours | 🟡 MEDIUM |
| Performance Monitoring | Every 2 hours | 🟢 LOW |
| Dependency Updates | Every 6 hours | 🟢 LOW |

## 📁 File Structure

```
scripts/
├── automation/
│   ├── error-fixer-automation.cjs          # Basic error fixing
│   ├── comprehensive-error-automation.cjs  # Full automation orchestrator
│   └── console-error-fixer.cjs            # Console error handling
├── start-error-automation.sh               # Startup script
└── ...

reports/
├── automation-reports/                     # Comprehensive reports
├── error-reports/                         # Error fixing reports
└── logs/                                  # Process logs
```

## 🔧 Configuration

### PM2 Ecosystem Configuration
The system uses `ecosystem.config.cjs` to manage PM2 processes:

```javascript
{
  name: 'comprehensive-error-fixer',
  script: './scripts/automation/comprehensive-error-automation.cjs',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'production',
    AUTOMATION_INTERVAL: '600000' // 10 minutes
  }
}
```

### Environment Variables
- `NODE_ENV`: Set to 'production' for production mode
- `AUTOMATION_INTERVAL`: Interval between runs in milliseconds

## 📈 Monitoring & Reports

### Real-time Monitoring
```bash
# View all processes
pm2 status

# View specific process logs
pm2 logs comprehensive-error-fixer

# Monitor in real-time
pm2 monit
```

### Generated Reports
- **Comprehensive Reports**: `automation-reports/comprehensive-report-*.json`
- **Error Reports**: `error-reports/error-fixer-report-*.json`
- **Statistics**: `automation-reports/automation-stats.json`
- **Error Logs**: `logs/error-log-*.json`

### Report Structure
```json
{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "duration": "5000ms",
  "stats": {
    "totalRuns": 100,
    "successfulRuns": 95,
    "failedRuns": 5,
    "totalFixes": 1500,
    "totalErrors": 50
  },
  "summary": {
    "successRate": 95,
    "averageFixesPerRun": 15,
    "totalErrorsRemaining": 50
  },
  "recommendations": [
    {
      "priority": "high",
      "category": "code_quality",
      "message": "High number of errors detected",
      "action": "Review and fix critical errors first"
    }
  ]
}
```

## 🛠️ Troubleshooting

### Common Issues

#### PM2 Not Installed
```bash
npm install -g pm2
```

#### Permission Issues
```bash
sudo chmod +x scripts/start-error-automation.sh
```

#### Process Not Starting
```bash
# Check PM2 logs
pm2 logs

# Restart processes
pm2 restart all

# Check system resources
pm2 monit
```

#### High Memory Usage
```bash
# Increase memory limit in ecosystem.config.cjs
max_memory_restart: '2G'

# Restart processes
pm2 restart all
```

### Debug Mode
```bash
# Run with debug logging
DEBUG=* npm run automation:comprehensive

# View detailed logs
pm2 logs --lines 100
```

## 🔄 Integration with CI/CD

### GitHub Actions Integration
```yaml
name: Error Automation
on:
  schedule:
    - cron: '*/10 * * * *'  # Every 10 minutes
  workflow_dispatch:  # Manual trigger

jobs:
  error-fix:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run automation:comprehensive
      - run: npm run automation:status
```

### Pre-commit Hooks
```bash
#!/bin/sh
# .git/hooks/pre-commit

# Run error fixing before commit
npm run automation:error-fix

# Check if any files were modified
if git diff --cached --name-only | grep -q .; then
  echo "Error fixes applied. Please review changes before committing."
  exit 1
fi
```

## 📚 Advanced Usage

### Custom Error Fixing Rules
Create custom rules in `scripts/automation/error-fixer-automation.cjs`:

```javascript
// Add custom syntax fixes
const customFixes = [
  {
    pattern: /your-custom-pattern/g,
    replacement: 'your-replacement',
    description: 'Custom fix description'
  }
];
```

### Extending Automation
Add new automation processes to `ecosystem.config.cjs`:

```javascript
{
  name: 'custom-automation',
  script: './scripts/automation/custom-automation.cjs',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '512M',
  env: {
    NODE_ENV: 'production',
    AUTOMATION_INTERVAL: '1800000' // 30 minutes
  }
}
```

### Performance Optimization
- Monitor memory usage with `pm2 monit`
- Adjust `max_memory_restart` based on system resources
- Use clustering for CPU-intensive operations
- Implement caching for repeated operations

## 🤝 Contributing

### Adding New Error Fixes
1. Add fix logic to `ErrorFixerAutomation` class
2. Update documentation
3. Add tests
4. Submit pull request

### Reporting Issues
1. Check existing reports in `automation-reports/`
2. Review logs in `logs/`
3. Create issue with detailed error information
4. Include relevant log files

## 📞 Support

For issues or questions:
- Check the logs: `npm run automation:logs`
- Review reports: `automation-reports/`
- Check PM2 status: `npm run automation:status`
- Restart system: `npm run automation:restart`

## 📄 License

This automation system is part of the Zion Tech Group project and follows the same licensing terms.