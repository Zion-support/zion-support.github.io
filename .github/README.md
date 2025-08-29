# PM2 Automation System

This directory contains configuration and documentation for the PM2-based automation system that has replaced GitHub Actions workflows.

## Automation Overview

All automation tasks are now handled by PM2 processes running continuously on the server, providing real-time monitoring and automated execution.

### 🔄 PM2 Automation Processes

The following automation processes are managed by PM2:

#### High Priority Automations
- **console-error-fixer**: Runs every 15 minutes - Automated console error detection and fixing
- **link-checker**: Runs every 30 minutes - Automated broken link detection and reporting
- **daily-build-test**: Runs every hour - Automated build testing and verification
- **continuous-improvement**: Runs every 2 hours - Automated code improvement suggestions
- **quality-checks**: Runs every 3 hours - Automated code quality and linting checks
- **performance-monitor**: Runs every 2 hours - Performance monitoring and optimization
- **link-integrity**: Runs every 2 hours - Link integrity validation and reporting

#### Scheduled Automations
- **security-audit**: Runs every 4 hours - Security vulnerability scanning and reporting
- **front-maximizer**: Runs every 4 hours - Frontend optimization and enhancement
- **dependency-updates**: Runs every 6 hours - Automated dependency management
- **sitemap-runner**: Runs every 6 hours - Sitemap generation and validation

### 🚀 Main Applications
- **zion-app**: Main frontend application
- **zion-backend**: Backend server application

## PM2 Configuration

The automation system is configured in `ecosystem.config.cjs` at the root of the project.

### Key Features
- **Auto-restart**: All processes automatically restart on failure
- **Memory management**: Configurable memory limits with automatic restarts
- **Environment-specific configs**: Production and development configurations
- **Process monitoring**: Real-time status monitoring and logging

## Monitoring and Management

### PM2 Commands
```bash
# View all processes
pm2 status

# Monitor processes in real-time
pm2 monit

# View logs for a specific process
pm2 logs <process-name>

# Restart a process
pm2 restart <process-name>

# Stop all processes
pm2 stop all

# Start all processes
pm2 start ecosystem.config.cjs
```

### Process Status
All automation processes run continuously and can be monitored through PM2's built-in monitoring tools.

## Benefits of PM2 over GitHub Actions

1. **Real-time execution**: Processes run continuously instead of waiting for triggers
2. **Immediate feedback**: Instant error detection and resolution
3. **Resource efficiency**: Better resource utilization and monitoring
4. **Customizable scheduling**: Flexible timing and interval configurations
5. **Local execution**: No dependency on external CI/CD services
6. **Cost effective**: No GitHub Actions minutes consumption

## Configuration Files

### CodeQL Configuration
- **File**: `.github/codeql/codeql-config.yml`
- **Purpose**: Security analysis configuration for TypeScript/React projects

## Environment Variables

The PM2 processes use the following environment variables:
- `NODE_ENV`: Set to 'production' for all automation processes
- `AUTOMATION_INTERVAL`: Configurable intervals for each automation process
- `NODE_OPTIONS`: Memory and legacy provider configurations

## Troubleshooting

### Common Issues

1. **Process Failures**: Check PM2 logs with `pm2 logs <process-name>`
2. **Memory Issues**: Adjust `max_memory_restart` values in ecosystem.config.cjs
3. **Restart Loops**: Check for script errors or missing dependencies
4. **Performance Issues**: Monitor resource usage with `pm2 monit`

### Debug Mode

To debug processes:
1. Check individual process logs
2. Monitor resource usage
3. Verify script paths and dependencies
4. Check environment variable configurations

## Contributing

When modifying automation processes:

1. Update the ecosystem.config.cjs file
2. Test changes locally before deployment
3. Monitor process stability after changes
4. Update this documentation as needed

## Support

For automation issues:
1. Check PM2 process status
2. Review process logs for errors
3. Verify configuration file syntax
4. Monitor resource usage and performance

## Migration from GitHub Actions

This system replaces the following GitHub Actions workflows:
- CI/CD Pipeline
- Security & Dependency Management
- Testing & Quality Assurance
- Release Management
- Dependency Management
- Continuous Improvement
- Link Crawler Factory

All functionality is now handled by PM2 automation processes running continuously on the server.
