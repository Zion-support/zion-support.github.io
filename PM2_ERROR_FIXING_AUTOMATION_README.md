# PM2 Error Fixing Automation System

## 🎯 Overview

This comprehensive automation system automatically detects and fixes common project errors, ensuring your project maintains optimal health and performance. The system consists of multiple specialized automation scripts that work together to provide comprehensive error resolution.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start All Automations
```bash
pm2 start ecosystem.config.cjs
```

### 3. Monitor Status
```bash
pm2 status
pm2 logs
```

### 4. Stop All Automations
```bash
pm2 stop ecosystem.config.cjs
pm2 delete ecosystem.config.cjs
```

## 🔧 Automation Scripts

### 1. Error Fixing Orchestrator (HIGHEST PRIORITY)
- **Script**: `./scripts/automation/error-fixing-orchestrator.cjs`
- **Frequency**: Every 15 minutes
- **Purpose**: Coordinates all other automations and provides unified error resolution
- **Features**:
  - Runs initial project assessment
  - Executes automations in priority order
  - Measures improvements and generates reports
  - Provides actionable recommendations

### 2. TypeScript Error Fixer (HIGH PRIORITY)
- **Script**: `./scripts/automation/typescript-error-fixer.cjs`
- **Frequency**: Every 30 minutes
- **Purpose**: Automatically fixes TypeScript compilation errors
- **Fixes Applied**:
  - Case sensitivity issues (duplicate files)
  - Unused imports
  - Missing exports
  - Type mismatches
  - Duplicate identifiers

### 3. Console Error Fixer (HIGH PRIORITY)
- **Script**: `./scripts/automation/console-error-fixer.cjs`
- **Frequency**: Every 15 minutes
- **Purpose**: Removes console statements and fixes runtime errors
- **Features**:
  - Scans source code for console statements
  - Checks build output for console errors
  - Identifies potential error patterns

### 4. Project Health Monitor
- **Script**: `./scripts/automation/project-health-monitor.cjs`
- **Frequency**: Every hour
- **Purpose**: Comprehensive project health monitoring
- **Health Checks**:
  - Dependencies health (outdated packages, vulnerabilities)
  - Security health (sensitive files, hardcoded secrets)
  - Code quality health (TypeScript errors, linting issues)
  - Build health (build success, configuration)
  - Performance health (bundle size, anti-patterns)

### 5. Security Audit
- **Script**: `./scripts/automation/security-audit.cjs`
- **Frequency**: Every 4 hours
- **Purpose**: Identifies and fixes security vulnerabilities
- **Features**:
  - npm audit integration
  - Dependency vulnerability scanning
  - Security best practices enforcement

### 6. Quality Checks
- **Script**: `./scripts/automation/quality-checks.cjs`
- **Frequency**: Every 3 hours
- **Purpose**: Runs code quality checks and applies fixes
- **Features**:
  - Linting automation
  - Code style enforcement
  - Quality metric tracking

### 7. Dependency Updates
- **Script**: `./scripts/automation/dependency-updates.cjs`
- **Frequency**: Every 6 hours
- **Purpose**: Updates dependencies and fixes compatibility issues
- **Features**:
  - Automatic dependency updates
  - Compatibility checking
  - Breaking change detection

## 📊 Monitoring and Reports

### Real-time Monitoring
```bash
# View all running automations
pm2 status

# Monitor specific automation
pm2 logs error-fixing-orchestrator
pm2 logs typescript-error-fixer
pm2 logs project-health-monitor

# View real-time logs
pm2 logs --follow
```

### Generated Reports
The system generates comprehensive reports for each automation:

- `error-fixing-orchestrator-report.json` - Main orchestration report
- `typescript-error-fixer-report.json` - TypeScript fixes report
- `project-health-report.json` - Project health assessment
- `console-error-fixer-report.json` - Console error fixes
- `security-audit-report.json` - Security audit results

### Report Structure
Each report includes:
- Timestamp and execution details
- Issues found and fixes applied
- Performance metrics
- Recommendations for improvement
- Status indicators

## 🎛️ Configuration

### Environment Variables
You can customize automation intervals using environment variables:

```bash
# Set custom intervals (in milliseconds)
export AUTOMATION_INTERVAL=1800000  # 30 minutes
export TYPESCRIPT_FIXER_INTERVAL=900000  # 15 minutes
export HEALTH_MONITOR_INTERVAL=7200000  # 2 hours
```

### PM2 Configuration
The `ecosystem.config.cjs` file contains all automation configurations:

```javascript
{
  name: 'error-fixing-orchestrator',
  script: './scripts/automation/error-fixing-orchestrator.cjs',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'production',
    AUTOMATION_INTERVAL: '900000' // 15 minutes
  }
}
```

## 🔍 Manual Execution

### Run Individual Automations
```bash
# TypeScript Error Fixer
node ./scripts/automation/typescript-error-fixer.cjs

# Project Health Monitor
node ./scripts/automation/project-health-monitor.cjs

# Error Fixing Orchestrator
node ./scripts/automation/error-fixing-orchestrator.cjs
```

### Run with Custom Intervals
```bash
# Run with 5-minute interval
AUTOMATION_INTERVAL=300000 node ./scripts/automation/error-fixing-orchestrator.cjs
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Automation Scripts Not Found
```bash
# Ensure scripts are executable
chmod +x ./scripts/automation/*.cjs

# Check file paths
ls -la ./scripts/automation/
```

#### 2. Permission Denied
```bash
# Fix permissions
sudo chown -R $USER:$USER ./scripts/
chmod +x ./scripts/automation/*.cjs
```

#### 3. PM2 Process Crashes
```bash
# Check logs for errors
pm2 logs

# Restart specific process
pm2 restart error-fixing-orchestrator

# Restart all processes
pm2 restart ecosystem.config.cjs
```

#### 4. High Memory Usage
```bash
# Monitor memory usage
pm2 monit

# Adjust memory limits in ecosystem.config.cjs
max_memory_restart: '2G'
```

### Debug Mode
Enable debug logging by setting the environment variable:

```bash
DEBUG=true pm2 start ecosystem.config.cjs
```

## 📈 Performance Optimization

### Automation Scheduling
- **High Priority**: Run every 15-30 minutes (error fixers)
- **Medium Priority**: Run every 1-3 hours (health monitors)
- **Low Priority**: Run every 6-24 hours (maintenance tasks)

### Resource Management
- Monitor memory usage with `pm2 monit`
- Adjust `max_memory_restart` values as needed
- Use `instances: 1` for most automations to avoid conflicts

### Error Handling
- All automations include comprehensive error handling
- Failed automations are logged and reported
- Automatic retry mechanisms for transient failures

## 🔄 Integration with CI/CD

### GitHub Actions Integration
```yaml
name: PM2 Automation Health Check
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run health check
        run: node ./scripts/automation/project-health-monitor.cjs
```

### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "node ./scripts/automation/typescript-error-fixer.cjs"
    }
  }
}
```

## 📚 Advanced Usage

### Custom Automation Scripts
Create custom automation scripts by following the template:

```javascript
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

async function runCustomAutomation() {
  try {
    console.log('🚀 Starting custom automation...');
    
    // Your automation logic here
    
    console.log('✅ Custom automation completed');
  } catch (error) {
    console.error('❌ Custom automation failed:', error.message);
  }
}

// Main execution
async function main() {
  await runCustomAutomation();
}

main().catch(console.error);
```

### Automation Dependencies
Some automations depend on others:

```
Error Fixing Orchestrator
├── TypeScript Error Fixer
├── Console Error Fixer
├── Project Health Monitor
├── Security Audit
├── Quality Checks
└── Dependency Updates
```

### Custom Health Checks
Extend the project health monitor with custom checks:

```javascript
async function customHealthCheck() {
  // Your custom health check logic
  return {
    status: 'healthy',
    score: 95,
    issues: []
  };
}
```

## 🎯 Best Practices

### 1. Regular Monitoring
- Check PM2 status daily
- Review generated reports weekly
- Monitor automation performance monthly

### 2. Gradual Rollout
- Start with high-priority automations
- Add medium and low-priority automations gradually
- Monitor system performance impact

### 3. Backup and Recovery
- Keep backups of working automation configurations
- Document any custom modifications
- Test automations in staging environment first

### 4. Performance Tuning
- Adjust intervals based on project needs
- Monitor resource usage and optimize
- Use appropriate memory limits

## 📞 Support

### Getting Help
1. Check the generated reports for detailed error information
2. Review PM2 logs for execution details
3. Verify script permissions and file paths
4. Check Node.js version compatibility

### Contributing
To contribute to the automation system:
1. Follow the existing code structure
2. Include comprehensive error handling
3. Add appropriate logging and reporting
4. Test thoroughly before deployment

## 🔮 Future Enhancements

### Planned Features
- Machine learning-based error prediction
- Integration with external monitoring tools
- Advanced performance analytics
- Custom automation marketplace
- Real-time collaboration features

### Roadmap
- Q1: Enhanced error prediction algorithms
- Q2: Integration with popular IDEs
- Q3: Advanced reporting dashboard
- Q4: AI-powered code optimization

---

**Note**: This automation system is designed to be robust and self-healing. It will automatically detect and fix most common project issues, but manual intervention may still be required for complex problems. Always review the generated reports and recommendations for optimal project health.