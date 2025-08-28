# PM2 Automation System

This project has been migrated from Netlify functions to a PM2-based automation system for better performance, reliability, and control.

## Overview

The PM2 automation system replaces all Netlify functions and GitHub Actions workflows with local, **continuous and autonomous** automation scripts that run continuously on your server with intelligent intervals.

## Architecture

### Main Applications

- **zion-app**: Main frontend application
- **zion-backend**: Backend server (if exists)

### Automation Processes

All automation processes run **continuously and autonomously** using PM2's process management:

#### Continuous Automations (Always Running)

- **link-checker**: Runs every 30 minutes - Continuous link validation and health checks
- **continuous-improvement**: Runs every 2 hours - Continuous code quality improvements
- **daily-build-test**: Runs every hour - Continuous build verification and testing
- **security-audit**: Runs every 4 hours - Continuous security vulnerability scanning
- **dependency-updates**: Runs every 6 hours - Continuous dependency management
- **performance-monitor**: Runs every 2 hours - Continuous performance analysis
- **quality-checks**: Runs every 3 hours - Continuous code quality validation
- **link-integrity**: Runs every 2 hours - Continuous link integrity validation
- **front-maximizer**: Runs every 4 hours - Continuous frontend optimization
- **sitemap-runner**: Runs every 6 hours - Continuous sitemap generation

## Key Features

### 🚀 **Continuous Operation**

- All automations run continuously without stopping
- No more waiting for scheduled times
- Immediate response to system changes
- 24/7 monitoring and maintenance

### 🤖 **Autonomous Operation**

- Self-healing processes with automatic restarts
- Error handling without process termination
- Intelligent retry mechanisms
- Graceful degradation on failures

### ⚡ **Intelligent Intervals**

- Different intervals for different types of automation
- Resource-intensive tasks run less frequently
- Critical checks run more frequently
- Configurable via environment variables

### 📊 **Real-time Monitoring**

- Continuous status updates
- Live performance metrics
- Immediate issue detection
- Comprehensive logging

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

- **Runs continuously every 30 minutes**
- Builds project and validates links
- Checks for broken references and 404 errors
- Generates real-time reports

### Continuous Improvement (`scripts/automation/continuous-improvement.js`)

- **Runs continuously every 2 hours**
- Performs code quality checks
- Runs tests and dependency analysis
- Continuous code optimization

### Daily Build Test (`scripts/automation/daily-build-test.js`)

- **Runs continuously every hour**
- Full project build and test execution
- Performance testing and validation
- Continuous build health monitoring

### Security Audit (`scripts/automation/security-audit.js`)

- **Runs continuously every 4 hours**
- NPM security vulnerability scanning
- Automatic security fixes when possible
- Continuous security monitoring

### Dependency Updates (`scripts/automation/dependency-updates.js`)

- **Runs continuously every 6 hours**
- Checks for outdated packages
- Updates minor and patch versions safely
- Continuous dependency health

### Performance Monitor (`scripts/automation/performance-monitor.js`)

- **Runs continuously every 2 hours**
- Bundle size analysis
- Performance optimization recommendations
- Continuous performance tracking

### Quality Checks (`scripts/automation/quality-checks.js`)

- **Runs continuously every 3 hours**
- ESLint and TypeScript validation
- Code coverage and dead code detection
- Continuous code quality monitoring

### Link Integrity (`scripts/automation/link-integrity.js`)

- **Runs continuously every 2 hours**
- Comprehensive link validation
- Asset integrity checking
- Continuous link health monitoring

### Front Maximizer (`scripts/automation/front-maximizer.js`)

- **Runs continuously every 4 hours**
- Frontend performance analysis
- Optimization recommendations
- Continuous frontend optimization

### Sitemap Runner (`scripts/automation/sitemap-runner.js`)

- **Runs continuously every 6 hours**
- Sitemap generation and validation
- Robots.txt management
- Continuous SEO optimization

## Configuration

The automation system is configured in `ecosystem.config.js` with:

- **Continuous operation** for all automations
- **Environment variables** for production settings
- **Memory limits** and restart policies
- **Process naming** for easy management
- **Automatic restarts** on failures

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

3. **Continuous operation issues**:
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

## Benefits of Continuous PM2 Automation

1. **Performance**: Local execution eliminates network latency
2. **Reliability**: Continuous operation with automatic restarts
3. **Control**: Full control over scheduling and execution
4. **Monitoring**: Real-time process monitoring and logging
5. **Scalability**: Easy to scale across multiple servers
6. **Cost**: No serverless function execution costs
7. **Debugging**: Local debugging and error handling
8. **Customization**: Easy to modify and extend automations
9. **Immediacy**: No waiting for scheduled times
10. **Resilience**: Self-healing and fault-tolerant

## Next Steps

1. **Deploy to your server** with PM2 installed
2. **Start the automation system** using the startup script
3. **Monitor the processes** for continuous operation
4. **Customize intervals** based on your needs
5. **Add new automations** as required

## Support

For issues or questions about the PM2 automation system:

1. Check PM2 logs: `pm2 logs`
2. Review process status: `pm2 status`
3. Check individual process: `pm2 show <process-name>`
4. Restart processes: `pm2 restart all`
