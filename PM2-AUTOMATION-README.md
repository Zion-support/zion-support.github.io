# PM2 Automation System for Zion Tech Group

This document describes the PM2 automation system that automatically detects and fixes common project errors.

## Overview

The PM2 automation system consists of multiple specialized error fixers that run continuously to maintain code quality and prevent errors from accumulating.

## Architecture

### Core Components

1. **PM2 Ecosystem Config** (`ecosystem.config.cjs`)
   - Manages all automation processes
   - Configures restart policies and resource limits
   - Handles environment-specific configurations

2. **Error Fixer Scripts**
   - `console-error-fixer.cjs` - Fixes console and logging errors (runs every 15 min)
   - `typescript-error-fixer.cjs` - Fixes TypeScript type errors (runs every 45 min)
   - `jsx-error-fixer.cjs` - Fixes JSX syntax errors (runs every 40 min)
   - `comprehensive-error-fixer.cjs` - Handles multiple error types (runs every 30 min)
   - `master-error-fixer.cjs` - Coordinates all fixers (runs every hour)

3. **Supporting Scripts**
   - `start-automation.sh` - Bootstrap script for the entire system
   - Log rotation and monitoring

## Quick Start

### 1. Install Dependencies

```bash
yarn add -D pm2
```

### 2. Start the Automation System

```bash
chmod +x start-automation.sh
./start-automation.sh
```

### 3. Monitor the System

```bash
# View all processes
pm2 status

# Monitor in real-time
pm2 monit

# View logs
pm2 logs

# View specific process logs
pm2 logs console-error-fixer
```

## Manual Control

### Start All Automations

```bash
pm2 start ecosystem.config.cjs
```

### Stop All Automations

```bash
pm2 stop all
```

### Restart All Automations

```bash
pm2 restart all
```

### View Process Status

```bash
pm2 status
```

## Error Fixer Details

### Console Error Fixer
- **Frequency**: Every 15 minutes
- **Purpose**: Detects and fixes console.log, console.error, etc.
- **Logs**: `logs/console-error-fixer.log`

### TypeScript Error Fixer
- **Frequency**: Every 45 minutes
- **Purpose**: Fixes TypeScript type errors, import issues, property access
- **Logs**: `logs/typescript-error-fixer.log`

### JSX Error Fixer
- **Frequency**: Every 40 minutes
- **Purpose**: Fixes JSX syntax errors, closing tags, expressions
- **Logs**: `logs/jsx-error-fixer.log`

### Comprehensive Error Fixer
- **Frequency**: Every 30 minutes
- **Purpose**: Runs multiple checks and applies auto-fixes
- **Logs**: `logs/comprehensive-error-fixer.log`

### Master Error Fixer
- **Frequency**: Every hour
- **Purpose**: Coordinates all fixers, ensures system health
- **Logs**: `logs/master-error-fixer.log`

## Log Management

### Log Rotation
- **Max Size**: 10MB per log file
- **Retention**: 30 log files
- **Compression**: Enabled
- **Format**: YYYY-MM-DD_HH-mm-ss

### Log Locations
- All logs are stored in the `logs/` directory
- Each fixer has its own log file
- Error logs are separated for easier debugging

## Configuration

### Environment Variables
- `NODE_ENV`: Set to 'production' for production deployments
- `AUTOMATION_INTERVAL`: Override default intervals (in milliseconds)

### PM2 Settings
- **Auto-restart**: Enabled for all processes
- **Memory limits**: 512MB for fixers, 1GB for main apps
- **Watch mode**: Disabled (processes restart on completion)

## Troubleshooting

### Common Issues

1. **PM2 not found**
   ```bash
   npm install -g pm2
   ```

2. **Permission denied on startup script**
   ```bash
   chmod +x start-automation.sh
   ```

3. **Processes not starting**
   ```bash
   pm2 kill
   pm2 start ecosystem.config.cjs
   ```

4. **Log rotation not working**
   ```bash
   pm2 install pm2-logrotate
   pm2 set pm2-logrotate:max_size 10M
   ```

### Debug Mode

To run a fixer in debug mode:

```bash
node scripts/automation/console-error-fixer.cjs
```

## Development

### Adding New Error Fixers

1. Create a new script in `scripts/automation/`
2. Follow the existing pattern with a class-based structure
3. Add the process to `ecosystem.config.cjs`
4. Update this README

### Testing Fixers

```bash
# Test individual fixer
node scripts/automation/typescript-error-fixer.cjs

# Test with PM2
pm2 start ecosystem.config.cjs --only typescript-error-fixer
```

## Production Deployment

### Startup Script
The system automatically sets up PM2 to start on system boot:

```bash
pm2 startup
pm2 save
```

### Monitoring
- Use `pm2 monit` for real-time monitoring
- Set up external monitoring for PM2 processes
- Configure log aggregation for centralized logging

## Security Considerations

- All fixers run with limited permissions
- No external network access by default
- Logs contain only error information, no sensitive data
- Processes restart automatically on failures

## Support

For issues with the automation system:
1. Check PM2 status: `pm2 status`
2. Review logs: `pm2 logs`
3. Restart processes: `pm2 restart all`
4. Check system resources: `pm2 monit`

## License

This automation system is part of the Zion Tech Group project.
