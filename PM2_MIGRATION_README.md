# PM2 Migration from GitHub Actions

This document describes the migration from GitHub Actions to PM2 for local automation and process management.

## Overview

We've replaced GitHub Actions workflows with PM2 ecosystem configuration to provide:
- Local development automation
- Continuous integration processes
- Automated deployment
- Health monitoring
- Process management

## What Was Replaced

### GitHub Actions Workflows → PM2 Services

| GitHub Action | PM2 Service | Purpose |
|---------------|-------------|---------|
| `ci.yml` | `lint-service`, `type-check-service` | Code quality checks |
| `deploy.yml` | `production-server`, `build-watcher` | Build and deployment |
| `ci-cd.yml` | Multiple services | Full CI/CD pipeline |
| `test.yml` | `health-check` | Testing and monitoring |
| `codeql.yml` | `security-audit` | Security scanning |

## PM2 Services

### Core Services
- **`dev-server`**: Development server with hot reload
- **`dev-backend`**: Backend development server (if exists)
- **`production-server`**: Production server with clustering
- **`build-watcher`**: Automated build on file changes

### Quality Assurance Services
- **`lint-service`**: ESLint checking (runs every 6 hours)
- **`type-check-service`**: TypeScript type checking (runs every 4 hours)
- **`security-audit`**: npm audit security checks (runs daily at 2 AM)

### Monitoring Services
- **`health-check`**: Application health monitoring (runs every 5 minutes)

## Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start all services
```bash
npm run pm2:start
```

### 3. Check status
```bash
npm run pm2:status
```

### 4. View logs
```bash
npm run pm2:logs
```

## Available Commands

### NPM Scripts
```bash
npm run pm2:start      # Start all services
npm run pm2:stop       # Stop all services
npm run pm2:restart    # Restart all services
npm run pm2:reload     # Reload all services
npm run pm2:status     # Show status
npm run pm2:logs       # Show logs
npm run pm2:monitor    # Start PM2 monitor
npm run pm2:build      # Build and deploy
npm run pm2:cleanup    # Clean up all processes
```

### Direct Script Usage
```bash
./scripts/pm2-manager.sh start
./scripts/pm2-manager.sh stop
./scripts/pm2-manager.sh restart
./scripts/pm2-manager.sh reload
./scripts/pm2-manager.sh status
./scripts/pm2-manager.sh logs [SERVICE]
./scripts/pm2-manager.sh monitor
./scripts/pm2-manager.sh build
./scripts/pm2-manager.sh cleanup
```

### PM2 Direct Commands
```bash
pm2 start ecosystem.config.js              # Start all services
pm2 start ecosystem.config.js --only dev-server  # Start specific service
pm2 stop all                              # Stop all services
pm2 restart all                            # Restart all services
pm2 reload all                             # Reload all services
pm2 delete all                             # Delete all services
pm2 logs                                  # Show all logs
pm2 monit                                 # Start monitor
pm2 status                                # Show status
```

## Service Configuration

### Development Server
- **Name**: `dev-server`
- **Script**: `npm run dev`
- **Watch**: `src`, `pages`, `components`, `utils`
- **Memory Limit**: 1GB
- **Auto-restart**: Yes

### Production Server
- **Name**: `production-server`
- **Script**: `npm run start`
- **Instances**: Max (based on CPU cores)
- **Mode**: Cluster
- **Memory Limit**: 1GB
- **Auto-restart**: Yes

### Quality Services
- **Linting**: Runs every 6 hours
- **Type Checking**: Runs every 4 hours
- **Security Audit**: Runs daily at 2 AM
- **Health Check**: Runs every 5 minutes

## Logs

All services log to the `logs/` directory:
- `dev-error.log` / `dev-out.log` / `dev-combined.log`
- `backend-error.log` / `backend-out.log` / `backend-combined.log`
- `build-error.log` / `build-out.log` / `build-combined.log`
- `prod-error.log` / `prod-out.log` / `prod-combined.log`
- `lint-error.log` / `lint-out.log` / `lint-combined.log`
- `typecheck-error.log` / `typecheck-out.log` / `typecheck-combined.log`
- `audit-error.log` / `audit-out.log` / `audit-combined.log`
- `health-error.log` / `health-out.log` / `health-combined.log`

## Deployment

### Local Deployment
```bash
npm run pm2:build
```

### Production Deployment
```bash
pm2 deploy production setup
pm2 deploy production
```

### Staging Deployment
```bash
pm2 deploy staging setup
pm2 deploy staging
```

## Monitoring

### Real-time Monitoring
```bash
npm run pm2:monitor
```

### Health Checks
The health check service monitors your application every 5 minutes and logs results to `logs/health-check.log`.

### Performance Monitoring
PM2 provides built-in performance monitoring:
- CPU usage
- Memory usage
- Process status
- Restart counts

## Troubleshooting

### Common Issues

1. **Service won't start**
   ```bash
   pm2 logs [service-name]
   npm run pm2:cleanup
   npm run pm2:start
   ```

2. **Memory issues**
   ```bash
   pm2 restart [service-name]
   ```

3. **Port conflicts**
   Check if ports are already in use:
   ```bash
   lsof -i :3000
   ```

### Reset Everything
```bash
npm run pm2:cleanup
npm run pm2:start
```

## Migration Benefits

### Advantages of PM2 over GitHub Actions
- **Faster execution**: No CI/CD queue delays
- **Local control**: Full control over execution environment
- **Cost savings**: No GitHub Actions minutes consumption
- **Real-time monitoring**: Live process monitoring
- **Immediate feedback**: Instant error reporting
- **Custom scheduling**: Flexible cron-based automation
- **Resource optimization**: Better memory and CPU management

### What We Kept
- **Build processes**: Same build commands and options
- **Quality checks**: ESLint, TypeScript checking
- **Security**: npm audit integration
- **Testing**: Health check monitoring

## Next Steps

1. **Test the setup**: Run `npm run pm2:start` and verify all services start
2. **Monitor performance**: Use `npm run pm2:monitor` to watch resource usage
3. **Customize schedules**: Adjust cron timings in `ecosystem.config.js`
4. **Add more services**: Extend the ecosystem file as needed
5. **Set up startup**: Run `pm2 startup` to auto-start PM2 on system boot

## Support

For issues or questions:
1. Check PM2 logs: `npm run pm2:logs`
2. Review service status: `npm run pm2:status`
3. Check the PM2 documentation: https://pm2.keymetrics.io/
4. Review this README for common solutions