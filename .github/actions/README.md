# PM2 Automation System

This directory contains configuration and documentation for the PM2-based automation system that has replaced all GitHub Actions workflows.

## Automation Overview

All previously GitHub Actions-based workflows have been successfully migrated to PM2 processes that run continuously and automatically, providing better performance, monitoring, and control.

## PM2 Automation Processes

### 🔄 Continuous Automation (Running 24/7)

#### High Priority Processes
- **console-error-fixer**: Runs every 15 minutes
  - Automatically detects and fixes console errors
  - JavaScript syntax error correction
  - Real-time error monitoring and resolution

#### Regular Interval Processes
- **link-checker**: Runs every 30 minutes
  - Comprehensive link validation
  - Broken link detection and reporting
  - Link health monitoring

- **continuous-improvement**: Runs every 2 hours
  - Automated code improvements
  - Performance optimizations
  - Quality enhancement suggestions

- **daily-build-test**: Runs every hour
  - Build verification and testing
  - Continuous integration tasks
  - Test execution and reporting

- **security-audit**: Runs every 4 hours
  - Security vulnerability scanning
  - Dependency security checks
  - Code security analysis

- **performance-monitor**: Runs every 2 hours
  - Performance metrics collection
  - Optimization opportunities identification
  - Performance trend analysis

- **quality-checks**: Runs every 3 hours
  - Code quality assessment
  - Linting and formatting checks
  - Quality gate enforcement

- **link-integrity**: Runs every 2 hours
  - Link integrity verification
  - Cross-reference validation
  - Internal link consistency checks

- **front-maximizer**: Runs every 4 hours
  - Frontend optimization
  - User experience improvements
  - Interface enhancements

- **sitemap-runner**: Runs every 6 hours
  - Sitemap generation and updates
  - SEO optimization
  - Search engine compatibility

- **dependency-updates**: Runs every 6 hours
  - Package dependency monitoring
  - Security updates
  - Version compatibility checks

## Main Applications

- **zion-app**: Main frontend application with automatic restart
- **zion-backend**: Backend server with automatic restart

## PM2 Management Commands

### Status and Monitoring
```bash
# Check all process status
pm2 status

# View real-time logs
pm2 logs

# View specific process logs
pm2 logs [process-name]

# Monitor processes in real-time
pm2 monit
```

### Process Control
```bash
# Restart all processes
pm2 restart all

# Restart specific process
pm2 restart [process-name]

# Stop all processes
pm2 stop all

# Start all processes
pm2 start ecosystem.config.cjs

# Reload all processes
pm2 reload all
```

### Configuration and Setup
```bash
# Save current PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup

# View PM2 configuration
pm2 show [process-name]
```

## Benefits of PM2 over GitHub Actions

### 1. **Continuous Operation**
- Processes run continuously instead of being triggered by events
- No waiting for GitHub Actions to trigger
- Immediate response to issues

### 2. **Real-time Monitoring**
- Live status monitoring with `pm2 status`
- Real-time log viewing
- Immediate process control

### 3. **Resource Efficiency**
- Better resource utilization
- Lower overhead compared to GitHub Actions
- Optimized for continuous operation

### 4. **Local Control**
- Full control over automation without external dependencies
- No GitHub API rate limits
- Immediate troubleshooting and fixes

### 5. **Cost Effectiveness**
- No GitHub Actions minutes consumption
- Runs on your own infrastructure
- Predictable resource usage

## Migration Status

✅ **Completed Migrations:**
- CI/CD Pipeline → PM2 continuous processes
- Security Scanning → PM2 security-audit
- Dependency Management → PM2 dependency-updates
- Quality Assurance → PM2 quality-checks
- Performance Monitoring → PM2 performance-monitor
- Link Management → PM2 link-checker & link-integrity
- Continuous Improvement → PM2 continuous-improvement
- Build & Testing → PM2 daily-build-test
- SEO Optimization → PM2 sitemap-runner
- Frontend Optimization → PM2 front-maximizer

## Configuration

The PM2 configuration is defined in `ecosystem.config.cjs` at the project root, which includes:
- Process definitions and settings
- Environment variables
- Resource limits
- Restart policies
- Monitoring configurations

## Support and Troubleshooting

### Common Issues
1. **Process Crashes**: Check logs with `pm2 logs [process-name]`
2. **High Memory Usage**: Monitor with `pm2 monit`
3. **Process Not Starting**: Verify ecosystem.config.cjs configuration

### Getting Help
1. Check PM2 status: `pm2 status`
2. Review process logs: `pm2 logs [process-name]`
3. Check the main PM2 automation documentation in the project root
4. Verify ecosystem.config.cjs configuration

## Future Enhancements

The PM2 automation system is designed to be easily extensible:
- Add new automation processes
- Modify timing intervals
- Customize monitoring and alerting
- Integrate with external monitoring tools