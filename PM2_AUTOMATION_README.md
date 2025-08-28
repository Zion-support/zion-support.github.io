# PM2 Automation System

This project has been migrated from Netlify functions to a PM2-based automation system for better performance, reliability, and control.

## Overview

The PM2 automation system replaces all Netlify functions and GitHub Actions workflows with local, scheduled automation scripts that run continuously on your server.

## Architecture

### Main Applications
- **zion-app**: Main frontend application
- **zion-backend**: Backend server (if exists)

### Automation Processes
All automation processes run on scheduled intervals using PM2's cron functionality:

#### Daily Automations (2 AM - 8 PM)
- **link-checker**: Daily link validation and health checks
- **daily-build-test**: Daily build verification and testing
- **performance-monitor**: Daily performance analysis and optimization
- **quality-checks**: Daily code quality and linting checks
- **link-integrity**: Daily link integrity and asset validation
- **front-maximizer**: Daily frontend optimization analysis
- **sitemap-runner**: Daily sitemap generation and validation

#### Weekly Automations
- **continuous-improvement**: Weekly code quality improvements (Monday 2 AM)
- **security-audit**: Weekly security vulnerability scanning (Sunday 8 AM)
- **dependency-updates**: Weekly dependency updates and security patches (Tuesday 10 AM)

## Installation

1. **Install PM2 globally**:
   ```bash
   npm install -g pm2
   ```

2. **Start the automation system**:
   ```bash
   ./scripts/start-pm2-automation.sh
   ```

## Management Commands

### Start All Processes
```bash
pm2 start ecosystem.config.js
```

### Start Only Applications
```bash
pm2 start ecosystem.config.js --only zion-app
```

### Start Only Automation
```bash
pm2 start ecosystem.config.js --only automation
```

### View Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs                    # All processes
pm2 logs link-checker       # Specific process
```

### Restart Processes
```bash
pm2 restart all             # All processes
pm2 restart link-checker    # Specific process
```

### Stop Processes
```bash
pm2 stop all                # All processes
pm2 stop link-checker       # Specific process
```

### Save Configuration
```bash
pm2 save
```

### Reload Configuration
```bash
pm2 reload ecosystem.config.js
```

## Automation Scripts

### Link Checker (`scripts/automation/link-checker.js`)
- Runs daily at 2 AM
- Builds project and validates links
- Checks for broken references and 404 errors

### Continuous Improvement (`scripts/automation/continuous-improvement.js`)
- Runs weekly on Monday at 2 AM
- Performs code quality checks
- Runs tests and dependency analysis

### Daily Build Test (`scripts/automation/daily-build-test.js`)
- Runs daily at 6 AM
- Full project build and test execution
- Performance testing and validation

### Security Audit (`scripts/automation/security-audit.js`)
- Runs weekly on Sunday at 8 AM
- NPM security vulnerability scanning
- Automatic security fixes when possible

### Dependency Updates (`scripts/automation/dependency-updates.js`)
- Runs weekly on Tuesday at 10 AM
- Checks for outdated packages
- Updates minor and patch versions safely

### Performance Monitor (`scripts/automation/performance-monitor.js`)
- Runs daily at 12 PM
- Bundle size analysis
- Performance optimization recommendations

### Quality Checks (`scripts/automation/quality-checks.js`)
- Runs daily at 2 PM
- ESLint and TypeScript validation
- Code coverage and dead code detection

### Link Integrity (`scripts/automation/link-integrity.js`)
- Runs daily at 4 PM
- Comprehensive link validation
- Asset integrity checking

### Front Maximizer (`scripts/automation/front-maximizer.js`)
- Runs daily at 6 PM
- Frontend performance analysis
- Optimization recommendations

### Sitemap Runner (`scripts/automation/sitemap-runner.js`)
- Runs daily at 8 PM
- Sitemap generation and validation
- Robots.txt management

## Configuration

The automation system is configured in `ecosystem.config.js` with:
- **Cron schedules** for each automation
- **Environment variables** for production settings
- **Memory limits** and restart policies
- **Process naming** for easy management

## Monitoring

### Logs
All automation logs are available through PM2:
```bash
pm2 logs --lines 100        # Last 100 lines
pm2 logs --timestamp        # With timestamps
pm2 logs --err              # Only error logs
```

### Reports
Each automation generates JSON reports in the project root:
- `link-checker-report.json`
- `continuous-improvement-report.json`
- `daily-build-test-report.json`
- `security-audit-report.json`
- `dependency-updates-report.json`
- `performance-report.json`
- `quality-report.json`
- `link-integrity-report.json`
- `front-maximizer-report.json`
- `sitemap-runner-report.json`

### Health Checks
Monitor automation health:
```bash
pm2 monit                   # Interactive monitoring
pm2 show link-checker       # Detailed process info
```

## Troubleshooting

### Common Issues

1. **Process not starting**:
   ```bash
   pm2 logs --err
   pm2 restart all
   ```

2. **Memory issues**:
   ```bash
   pm2 restart all
   pm2 show zion-app
   ```

3. **Cron not working**:
   ```bash
   pm2 restart automation
   pm2 logs --timestamp
   ```

### Debug Mode
Enable debug logging:
```bash
pm2 start ecosystem.config.js --env development
```

## Migration from Netlify Functions

This system replaces the following Netlify functions:
- `front-maximizer`
- `schedule-homepage`
- `schedule-site-health`
- `schedule-content-index`
- `schedule-knowledge-graph`
- `front-enhancer`
- `frontpage-enhancer`
- `link-and-health-scheduler`
- `marketing-and-features-promo`
- `homepage_advertiser`
- `cloud_orchestrator`
- `fast-orchestrator`
- `continuous-orchestrator`
- `continuous-front-runner`
- `readme-advertiser`
- `features-capabilities-benefits-advertiser`
- `hyper-front-index-accelerator`
- `innovation-lab`
- `auto-scheduler`
- `broken-image-scanner`
- `fast-front-promoter`
- `feature-advertiser`
- `front-index-futurizer`
- `front-index-orchestrator`
- `front-index-scheduler`
- `sitemap_runner`

## Benefits of PM2 Automation

1. **Performance**: Local execution eliminates network latency
2. **Reliability**: Continuous operation with automatic restarts
3. **Control**: Full control over scheduling and execution
4. **Monitoring**: Real-time process monitoring and logging
5. **Scalability**: Easy to scale across multiple servers
6. **Cost**: No serverless function execution costs
7. **Debugging**: Local debugging and error handling
8. **Customization**: Easy to modify and extend automations

## Next Steps

1. **Deploy to your server** with PM2 installed
2. **Start the automation system** using the startup script
3. **Monitor the processes** for the first few days
4. **Customize schedules** based on your needs
5. **Add new automations** as required

## Support

For issues or questions about the PM2 automation system:
1. Check PM2 logs: `pm2 logs`
2. Review process status: `pm2 status`
3. Check individual process: `pm2 show <process-name>`
4. Restart processes: `pm2 restart all`
