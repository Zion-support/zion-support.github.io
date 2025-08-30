# 🚀 Project Automation System

This project includes a comprehensive automation system built with PM2 and Node.js scripts to automatically detect, fix, and prevent common project errors and issues.

## 📋 Overview

The automation system consists of 10 specialized automation scripts that work together to maintain project health:

1. **Error Fixer** - Detects and fixes common linting and TypeScript errors
2. **Lint Automation** - Automates ESLint checks and fixes
3. **Type Check Automation** - Automates TypeScript type checking
4. **Code Quality Automation** - Analyzes code quality metrics
5. **Dependency Automation** - Manages dependencies and security updates
6. **Security Audit Automation** - Performs security audits and fixes
7. **Performance Monitor Automation** - Monitors and optimizes performance
8. **Build Health Automation** - Ensures build process health
9. **File Cleanup Automation** - Cleans up unnecessary files
10. **CI Automation** - Manages continuous integration checks

## 🛠️ Prerequisites

- Node.js 16+ installed
- PM2 installed globally: `npm install -g pm2`
- Project dependencies installed: `npm install`

## 🚀 Quick Start

### 1. Start All Automations

```bash
# Start all PM2 automation processes
npm run pm2:start

# Check status
npm run pm2:status

# View logs
npm run pm2:logs
```

### 2. Run Individual Automations

```bash
# Run all automations at once
node scripts/automation-runner.js run-all

# Run only critical automations
node scripts/automation-runner.js run-critical

# Run a specific automation
node scripts/automation-runner.js run error-fixer.js

# Run maintenance mode (all + health check)
node scripts/automation-runner.js maintenance
```

### 3. Continuous Mode

```bash
# Start continuous automation (runs every 5 minutes)
node scripts/automation-runner.js continuous

# Stop with Ctrl+C
```

## 📊 Available Commands

### PM2 Commands (via npm scripts)

```bash
npm run pm2:start      # Start all automation processes
npm run pm2:stop       # Stop all automation processes
npm run pm2:restart    # Restart all automation processes
npm run pm2:status     # Show PM2 status
npm run pm2:logs       # Show recent logs
npm run pm2:monit      # Open PM2 monitoring interface
```

### Automation Runner Commands

```bash
node scripts/automation-runner.js run-all        # Run all automations
node scripts/automation-runner.js run-critical   # Run critical automations only
node scripts/automation-runner.js run [script]   # Run specific automation
node scripts/automation-runner.js health         # Run health check
node scripts/automation-runner.js maintenance    # Run maintenance mode
node scripts/automation-runner.js continuous     # Start continuous mode
node scripts/automation-runner.js status         # Show automation status
node scripts/automation-runner.js help           # Show help
```

## 🔧 Individual Automation Scripts

### Error Fixer (`error-fixer.js`)
- Detects linting and TypeScript errors
- Automatically fixes common issues
- Generates error reports

```bash
node scripts/error-fixer.js
```

### Lint Automation (`lint-automation.js`)
- Runs ESLint checks
- Applies automatic fixes
- Generates linting reports

```bash
node scripts/lint-automation.js
```

### Type Check Automation (`type-check-automation.js`)
- Runs TypeScript type checking
- Attempts to fix type errors
- Generates type check reports

```bash
node scripts/type-check-automation.js
```

### Code Quality Automation (`code-quality-automation.js`)
- Analyzes code complexity
- Identifies maintainability issues
- Generates quality metrics

```bash
node scripts/code-quality-automation.js
```

### Dependency Automation (`dependency-automation.js`)
- Checks for outdated packages
- Runs security audits
- Updates dependencies safely

```bash
node scripts/dependency-automation.js
```

### Security Audit Automation (`security-audit-automation.js`)
- Performs npm audit
- Scans for security vulnerabilities
- Fixes security issues automatically

```bash
node scripts/security-audit-automation.js
```

### Performance Monitor Automation (`performance-monitor-automation.js`)
- Monitors build performance
- Analyzes bundle size
- Identifies performance bottlenecks

```bash
node scripts/performance-monitor-automation.js
```

### Build Health Automation (`build-health-automation.js`)
- Verifies build process
- Runs tests
- Analyzes build artifacts

```bash
node scripts/build-health-automation.js
```

### File Cleanup Automation (`file-cleanup-automation.js`)
- Removes temporary files
- Cleans build artifacts
- Identifies duplicate files

```bash
node scripts/file-cleanup-automation.js
```

### CI Automation (`ci-automation.js`)
- Verifies Git status
- Runs CI pipeline checks
- Ensures deployment readiness

```bash
node scripts/ci-automation.js
```

## 📁 File Structure

```
project/
├── scripts/
│   ├── automation-runner.js          # Main automation coordinator
│   ├── error-fixer.js               # Error detection and fixing
│   ├── lint-automation.js           # Linting automation
│   ├── type-check-automation.js     # TypeScript automation
│   ├── code-quality-automation.js   # Code quality analysis
│   ├── dependency-automation.js     # Dependency management
│   ├── security-audit-automation.js # Security auditing
│   ├── performance-monitor-automation.js # Performance monitoring
│   ├── build-health-automation.js   # Build health checks
│   ├── file-cleanup-automation.js   # File cleanup
│   ├── ci-automation.js             # CI automation
│   └── start-automation.sh          # PM2 management script
├── logs/                            # Automation logs and reports
├── ecosystem.config.cjs             # PM2 configuration
└── package.json                     # Project configuration
```

## 📊 Monitoring and Reports

### Log Files
All automation scripts generate logs in the `logs/` directory:
- `automation-runner.log` - Main automation runner logs
- `automation-status.json` - Current automation status
- Individual script logs (e.g., `error-fixer.log`)

### Reports
Each automation generates detailed reports:
- Error reports with fix recommendations
- Performance metrics and optimization suggestions
- Security audit results
- Code quality analysis
- Dependency update recommendations

### Health Checks
Run health checks to monitor system status:
```bash
node scripts/automation-runner.js health
```

## ⚙️ Configuration

### PM2 Ecosystem Configuration
The `ecosystem.config.cjs` file configures:
- Process names and scripts
- Auto-restart policies
- Memory limits
- Log file paths
- Cron schedules for periodic runs

### Customization
Modify individual automation scripts to:
- Adjust detection thresholds
- Customize fix strategies
- Add new automation rules
- Integrate with external tools

## 🚨 Troubleshooting

### Common Issues

1. **PM2 not found**
   ```bash
   npm install -g pm2
   ```

2. **Scripts fail to run**
   ```bash
   npm install  # Ensure dependencies are installed
   ```

3. **Permission errors**
   ```bash
   chmod +x scripts/*.js
   ```

4. **Log directory issues**
   ```bash
   mkdir -p logs
   ```

### Debug Mode
Run automations with verbose logging:
```bash
# Check PM2 logs
npm run pm2:logs

# Check specific script logs
tail -f logs/error-fixer.log
```

## 🔄 Automation Schedules

The system can be configured to run automatically:

- **Continuous Mode**: Runs every 5 minutes
- **Scheduled Runs**: Via PM2 cron schedules
- **Manual Triggers**: On-demand execution
- **Event-Driven**: Based on file changes or errors

## 📈 Best Practices

1. **Start with Critical Automations**: Use `run-critical` for immediate issues
2. **Monitor Logs**: Regularly check automation logs for issues
3. **Review Reports**: Analyze generated reports for insights
4. **Customize Rules**: Adapt automation rules to your project needs
5. **Regular Maintenance**: Run maintenance mode weekly
6. **Backup Before Major Changes**: Always backup before running dependency updates

## 🤝 Contributing

To add new automation scripts:

1. Create a new script in the `scripts/` directory
2. Follow the existing script structure
3. Add the script to `automation-runner.js`
4. Update the PM2 ecosystem configuration
5. Test thoroughly before deployment

## 📞 Support

For issues or questions:
1. Check the logs in the `logs/` directory
2. Review the automation status: `node scripts/automation-runner.js status`
3. Run health checks: `node scripts/automation-runner.js health`
4. Check PM2 status: `npm run pm2:status`

---

**Happy Automating! 🚀**

This automation system will continuously monitor and maintain your project's health, automatically fixing common issues and providing insights for optimization.