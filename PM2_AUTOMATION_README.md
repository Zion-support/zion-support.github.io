# PM2 Automation System

This document describes the PM2 automation system that has replaced the GitHub Actions workflows for CI/CD pipeline management.

## Overview

The PM2 automation system provides the same functionality as the previous GitHub Actions workflows but runs locally with PM2 process management. This gives you more control over your deployment process and reduces dependency on external CI/CD services.

## What PM2 Replaces

The following GitHub Actions workflows have been replaced:

- **CI Workflow** (`ci.yml`) - Code quality, building, and testing
- **Deploy Workflow** (`deploy.yml`) - Production deployment
- **CI/CD Pipeline** (`ci-cd.yml`) - Full CI/CD pipeline with performance testing
- **Test Workflow** (`test.yml`) - Testing automation

## Files Created

1. **`ecosystem.config.js`** - PM2 ecosystem configuration
2. **`pm2-automation.sh`** - Automation script for CI/CD pipeline
3. **`PM2_AUTOMATION_README.md`** - This documentation file

## Prerequisites

- Node.js 18+ installed
- PM2 installed globally: `npm install -g pm2`
- Git repository with proper access

## Quick Start

### 1. Start the PM2 Daemon
```bash
pm2 start
```

### 2. Run the Full CI/CD Pipeline
```bash
./pm2-automation.sh main
```

### 3. Check Status
```bash
./pm2-automation.sh status
```

## Available Commands

### Main Operations
- **`./pm2-automation.sh main`** - Run full CI/CD pipeline (default)
- **`./pm2-automation.sh production`** - Deploy to production
- **`./pm2-automation.sh watch`** - Start in development watch mode

### Monitoring & Management
- **`./pm2-automation.sh health`** - Run health checks
- **`./pm2-automation.sh monitor`** - Start performance monitoring
- **`./pm2-automation.sh status`** - Show PM2 status
- **`./pm2-automation.sh logs`** - Show PM2 logs

### Application Control
- **`./pm2-automation.sh restart`** - Restart the application
- **`./pm2-automation.sh stop`** - Stop the application
- **`./pm2-automation.sh delete`** - Remove from PM2

## What Each Command Does

### Full CI/CD Pipeline (`main`)
1. ✅ Checks PM2 status
2. 📦 Installs dependencies (`npm ci`)
3. 🔍 Runs ESLint (`npm run lint`)
4. 🔍 Runs TypeScript type checking (`npm run type-check`)
5. 🔒 Runs security audit (`npm audit`)
6. 🏗️ Builds the application (`npm run build`)
7. 🧪 Runs tests (`npm test`)
8. 🚀 Deploys with PM2
9. 🏥 Runs health checks

### Production Deployment (`production`)
1. Runs the full CI/CD pipeline
2. Switches to production environment
3. Ensures production settings are applied

### Watch Mode (`watch`)
1. Starts the application in development mode
2. Enables file watching for automatic restarts
3. Perfect for development workflow

## PM2 Ecosystem Configuration

The `ecosystem.config.js` file defines:

- **Application settings**: Name, script, instances, memory limits
- **Environment variables**: Development vs production
- **Deployment configuration**: Git integration, deployment paths
- **Automation scripts**: PM2-specific automation commands

## Environment Variables

- **Development**: `NODE_ENV=development`, `PORT=3000`
- **Production**: `NODE_ENV=production`, `PORT=3000`

## Memory Management

- **Max Memory Restart**: 1GB
- **Node Options**: `--max-old-space-size=6144 --openssl-legacy-provider`

## Monitoring & Logs

### View Application Status
```bash
pm2 status
```

### View Real-time Logs
```bash
pm2 logs
```

### Monitor Performance
```bash
pm2 monit
```

### View Specific App Logs
```bash
pm2 logs bolt-new-zion-app
```

## Troubleshooting

### PM2 Not Running
```bash
pm2 start
```

### Application Won't Start
```bash
pm2 logs bolt-new-zion-app
pm2 restart bolt-new-zion-app
```

### Memory Issues
```bash
pm2 restart bolt-new-zion-app
pm2 reload bolt-new-zion-app
```

### Reset PM2
```bash
pm2 kill
pm2 start
```

## Integration with Git Hooks

You can integrate PM2 automation with Git hooks for automatic deployment:

### Pre-commit Hook
```bash
#!/bin/bash
./pm2-automation.sh test:auto
```

### Post-merge Hook
```bash
#!/bin/bash
./pm2-automation.sh deploy:auto
```

## Comparison with GitHub Actions

| Feature | GitHub Actions | PM2 Automation |
|---------|----------------|----------------|
| **Trigger** | Git events | Manual/scripted |
| **Environment** | Cloud runners | Local server |
| **Cost** | Free tier limits | No additional cost |
| **Control** | Limited | Full control |
| **Speed** | Depends on queue | Immediate |
| **Security** | GitHub managed | Self-managed |
| **Customization** | YAML constraints | Full flexibility |

## Benefits of PM2 Automation

1. **Cost Effective**: No GitHub Actions minutes consumption
2. **Faster Execution**: No queue waiting, runs immediately
3. **Full Control**: Complete control over the deployment process
4. **Local Development**: Can test deployment locally before production
5. **Process Management**: Built-in process monitoring and restart
6. **Flexibility**: Easy to modify and extend automation logic

## Security Considerations

- Keep PM2 automation scripts secure
- Use environment variables for sensitive data
- Regularly update dependencies
- Monitor PM2 logs for suspicious activity

## Next Steps

1. **Test the automation**: Run `./pm2-automation.sh main`
2. **Customize the configuration**: Modify `ecosystem.config.js`
3. **Set up monitoring**: Use `./pm2-automation.sh monitor`
4. **Integrate with Git hooks**: Add automation to your Git workflow
5. **Delete GitHub Actions**: Remove the `.github/workflows/` directory

## Support

For issues with PM2 automation:
1. Check PM2 status: `pm2 status`
2. View logs: `pm2 logs`
3. Check the automation script: `./pm2-automation.sh --help`
4. Restart PM2: `pm2 kill && pm2 start`

---

**Note**: This system replaces GitHub Actions workflows. Make sure to test thoroughly before deleting the original workflows.
