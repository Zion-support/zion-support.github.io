# PM2 Automation System

This directory contains documentation for the PM2-based automation system that has replaced GitHub Actions workflows for the Zion Tech Group application.

## System Overview

The Zion Tech Group application now uses PM2 (Process Manager 2) for comprehensive automation, providing:
- **Continuous monitoring** and management of all processes
- **Automated restart** on failures with configurable memory limits
- **Scheduled automation** at various intervals for different tasks
- **Resource management** with memory and CPU monitoring
- **Real-time process monitoring** and logging

## Automation Processes

### 🚀 Core Applications
- **zion-app**: Main frontend application with production optimizations
- **zion-backend**: Backend server for API and services

### 🔄 Continuous Automation

#### High Priority (15 minutes)
- **console-error-fixer**: Continuous console error detection and fixing
  - Memory limit: 512MB
  - Auto-restart: Enabled
  - Purpose: Maintain error-free console output

#### Regular Intervals
- **link-checker**: Link validation every 30 minutes
  - Memory limit: 512MB
  - Purpose: Ensure all links are functional

- **continuous-improvement**: Code improvements every 2 hours
  - Memory limit: 512MB
  - Purpose: Automated code quality improvements

- **daily-build-test**: Build and test automation every hour
  - Memory limit: 512MB
  - Purpose: Continuous build verification

- **security-audit**: Security scanning every 4 hours
  - Memory limit: 512MB
  - Purpose: Vulnerability detection and security monitoring

- **dependency-updates**: Package updates every 6 hours
  - Memory limit: 512MB
  - Purpose: Keep dependencies up-to-date and secure

- **performance-monitor**: Performance monitoring every 2 hours
  - Memory limit: 512MB
  - Purpose: Track application performance metrics

- **quality-checks**: Code quality checks every 3 hours
  - Memory limit: 512MB
  - Purpose: Maintain code quality standards

- **link-integrity**: Link integrity verification every 2 hours
  - Memory limit: 512MB
  - Purpose: Deep link validation and reporting

- **front-maximizer**: Frontend optimization every 4 hours
  - Memory limit: 512MB
  - Purpose: Optimize frontend performance and SEO

- **sitemap-runner**: Sitemap generation every 6 hours
  - Memory limit: 512MB
  - Purpose: Keep sitemaps current and accurate

## Configuration

### Ecosystem Configuration
- **File**: `ecosystem.config.cjs`
- **Memory Limits**: 
  - Main apps: 1GB
  - Automation processes: 512MB
- **Auto-restart**: Enabled for all processes
- **Watch Mode**: Disabled for production stability
- **Environment**: Production mode with optimized Node.js settings

### Environment Variables
- `NODE_ENV`: Production
- `NODE_OPTIONS`: Optimized memory settings for main apps
- `AUTOMATION_INTERVAL`: Process-specific timing intervals

## Management & Monitoring

### Process Management
```bash
# Start all processes
pm2 start ecosystem.config.cjs

# Monitor processes
pm2 list
pm2 monit

# Restart specific process
pm2 restart <process-name>

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all
```

### Logging & Debugging
```bash
# View logs for specific process
pm2 logs <process-name>

# View last 100 lines of all logs
pm2 logs --lines 100

# Clear logs
pm2 flush
```

### Performance Monitoring
```bash
# Real-time monitoring
pm2 monit

# Process statistics
pm2 show <process-name>

# Resource usage
pm2 status
```

## Benefits Over GitHub Actions

1. **Real-time Processing**: Continuous operation instead of triggered runs
2. **Resource Efficiency**: Lower overhead and faster execution
3. **Immediate Response**: Instant error detection and recovery
4. **Cost Effective**: No GitHub Actions minutes consumption
5. **Local Control**: Full control over automation timing and resources
6. **Scalability**: Easy to add new automation processes
7. **Memory Management**: Configurable memory limits prevent resource exhaustion
8. **Process Isolation**: Each automation runs independently

## Health Monitoring

### Status Indicators
- **Online**: Process is running normally
- **Launching**: Process is starting up
- **Stopped**: Process has been stopped
- **Error**: Process has encountered an error

### Performance Metrics
- **CPU Usage**: Real-time CPU consumption
- **Memory Usage**: Current memory footprint
- **Restart Count**: Number of times process has restarted
- **Uptime**: How long process has been running

## Troubleshooting

### Common Issues
1. **High Restart Counts**: Check logs for underlying errors
2. **Memory Issues**: Adjust max_memory_restart values
3. **Process Crashes**: Review logs and fix root causes
4. **Performance Issues**: Monitor resource usage patterns

### Debug Steps
1. Check process status: `pm2 list`
2. Review logs: `pm2 logs <name>`
3. Verify configuration: Check ecosystem.config.cjs
4. Monitor resources: `pm2 monit`
5. Check system resources: `htop` or `top`

## Security & Best Practices

### Security Features
- All processes run in production environment
- Memory limits prevent resource exhaustion attacks
- Auto-restart ensures service availability
- Process isolation for security

### Best Practices
- Monitor restart counts regularly
- Set appropriate memory limits
- Review logs for security issues
- Keep PM2 updated to latest version
- Use environment-specific configurations

## Future Enhancements

- **Monitoring Dashboards**: Web-based PM2 monitoring
- **Alerting System**: Notifications for critical failures
- **Process Dependencies**: Manage process startup order
- **Backup Processes**: Redundant automation processes
- **Metrics Collection**: Performance data aggregation
- **Auto-scaling**: Dynamic process scaling based on load

## Support & Maintenance

### Regular Maintenance
- Monitor process health daily
- Review logs weekly for patterns
- Update PM2 and dependencies monthly
- Review and optimize automation intervals

### Getting Help
For PM2 automation issues:
1. Check process status with `pm2 list`
2. Review logs for error details
3. Verify ecosystem configuration
4. Check system resources
5. Contact the development team

### Documentation Resources
- PM2 Official Documentation: https://pm2.keymetrics.io/
- Node.js Performance Best Practices
- Process Management Guidelines