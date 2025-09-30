# PM2 Automation System

This document describes the PM2-based automation system that has replaced GitHub Actions for continuous automation tasks.

## Overview

The PM2 automation system provides a robust, production-ready alternative to GitHub Actions by running automation processes locally with PM2 process management. This approach offers:

- **Real-time monitoring** of automation processes
- **Automatic restart** on failures
- **Resource management** and memory limits
- **Local execution** without external dependencies
- **Persistent processes** that survive system restarts

## Architecture

### Core Components

1. **PM2 Ecosystem Configuration** (`ecosystem.config.cjs`)
   - Defines all automation processes
   - Configures resource limits and restart policies
   - Manages environment variables

2. **Automation Launcher** (`pm2-automation-launcher.js`)
   - Node.js script for managing PM2 processes
   - Provides CLI interface for all operations
   - Includes health checking and monitoring

3. **Shell Scripts**
   - `pm2-start.sh` - Quick startup script
   - `pm2-manage.sh` - Management operations

### Automation Processes

| Process Name | Script | Purpose |
|--------------|--------|---------|
| `automation-orchestrator` | `intelligent-orchestrator.cjs` | Main automation coordination |
| `lint-automation-manager` | `lint-automation-manager.cjs` | Linting process management |
| `lint-monitor` | `lint-monitor.cjs` | Continuous linting monitoring |
| `lint-error-fixer` | `lint-error-fixer.cjs` | Automatic error fixing |
| `code-quality-monitor` | `code-quality-monitor.cjs` | Code quality analysis |
| `performance-optimizer` | `performance-optimizer.cjs` | Performance optimization |
| `security-scanner` | `security-scanner.cjs` | Security vulnerability scanning |
| `automation-factory` | `automation-factory.cjs` | Automation process factory |
| `automation-dashboard` | `automation-dashboard.cjs` | Web-based monitoring dashboard |
| `launch-all-automation` | `launch-all-automation.cjs` | Master automation launcher |

## Installation & Setup

### Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0
- PM2 (installed globally)

### Setup Steps

1. **Install PM2 globally:**
   ```bash
   npm install -g pm2
   ```

2. **Start the automation ecosystem:**
   ```bash
   npm run pm2:start
   # or
   ./pm2-start.sh
   ```

3. **Setup PM2 to start on system boot:**
   ```bash
   npm run pm2:startup
   # Follow the sudo command output
   ```

## Usage

### NPM Scripts

The following npm scripts are available for PM2 management:

```bash
# Core operations
npm run pm2:start      # Start all automation processes
npm run pm2:stop       # Stop all processes
npm run pm2:restart    # Restart all processes
npm run pm2:reload     # Reload ecosystem configuration

# Monitoring and status
npm run pm2:status     # Show process status
npm run pm2:logs       # Show process logs
npm run pm2:monitor    # Open PM2 monitor
npm run pm2:health     # Perform health check

# Management
npm run pm2:delete     # Delete all processes
npm run pm2:startup    # Setup startup script
npm run pm2:ecosystem  # Start ecosystem directly
npm run pm2:save       # Save current configuration
```

### Direct PM2 Commands

```bash
# Start ecosystem
pm2 start ecosystem.config.cjs

# View status
pm2 status

# View logs
pm2 logs

# Monitor processes
pm2 monit

# Restart all
pm2 restart all

# Stop all
pm2 stop all

# Delete all
pm2 delete all

# Save configuration
pm2 save

# Setup startup
pm2 startup
```

### Shell Scripts

```bash
# Quick start
./pm2-start.sh

# Management operations
./pm2-manage.sh start
./pm2-manage.sh stop
./pm2-manage.sh restart
./pm2-manage.sh status
./pm2-manage.sh logs
./pm2-manage.sh monitor
```

## Configuration

### Ecosystem Configuration

The `ecosystem.config.cjs` file defines all automation processes with:

- **Process names** for easy identification
- **Script paths** pointing to automation files
- **Instance count** (typically 1 per process)
- **Auto-restart** on failures
- **Memory limits** (1GB per process)
- **Environment variables** (NODE_ENV, PORT)

### Environment Variables

- `NODE_ENV`: Set to 'production' for all processes
- `PORT`: Specific ports for web-based processes (3001, 3002)

### Resource Management

- **Memory limit**: 1GB per process
- **Auto-restart**: Enabled for all processes
- **Watch mode**: Disabled for production stability

## Monitoring & Maintenance

### Health Checks

```bash
npm run pm2:health
```

This command provides:
- Count of online processes
- Count of errored processes
- Count of stopped processes
- Warnings for any issues

### Log Management

```bash
# View all logs
npm run pm2:logs

# View specific process logs
pm2 logs <process-name>

# Follow logs in real-time
pm2 logs --follow
```

### Process Monitoring

```bash
# Open PM2 monitor
npm run pm2:monitor

# View real-time status
pm2 status
```

## Troubleshooting

### Common Issues

1. **Process in error state:**
   ```bash
   npm run pm2:logs
   npm run pm2:restart
   ```

2. **Memory issues:**
   - Check memory usage: `pm2 status`
   - Restart processes: `npm run pm2:restart`

3. **Startup issues:**
   - Verify ecosystem file exists
   - Check script paths in configuration
   - Ensure all dependencies are installed

### Recovery Procedures

1. **Full restart:**
   ```bash
   npm run pm2:delete
   npm run pm2:start
   ```

2. **Configuration reload:**
   ```bash
   npm run pm2:reload
   ```

3. **Health check:**
   ```bash
   npm run pm2:health
   ```

## Migration from GitHub Actions

### What Was Replaced

- **Continuous Integration**: Now handled by local PM2 processes
- **Automated Testing**: Local execution with PM2 monitoring
- **Code Quality Checks**: Real-time monitoring and fixing
- **Security Scanning**: Continuous local security analysis
- **Performance Monitoring**: Local performance optimization

### Benefits of Migration

- **Faster execution** (no external API calls)
- **Real-time monitoring** and immediate feedback
- **Resource control** and optimization
- **Offline capability** (no external service dependencies)
- **Cost reduction** (no GitHub Actions minutes consumption)

## Security Considerations

- All processes run locally with controlled permissions
- No external API keys or secrets required
- Process isolation through PM2
- Memory limits prevent resource exhaustion
- Automatic restart on failures maintains availability

## Performance

- **Startup time**: ~5-10 seconds for all processes
- **Memory usage**: ~60-70MB per process
- **CPU usage**: Minimal when idle, scales with activity
- **Restart time**: ~2-3 seconds per process

## Future Enhancements

- **Web dashboard** for process management
- **Alerting system** for process failures
- **Metrics collection** and reporting
- **Process scaling** based on load
- **Integration** with external monitoring tools

## Support

For issues or questions about the PM2 automation system:

1. Check process status: `npm run pm2:status`
2. Review logs: `npm run pm2:logs`
3. Perform health check: `npm run pm2:health`
4. Restart processes: `npm run pm2:restart`

The system is designed to be self-healing and will automatically restart failed processes.