# PM2 Setup - Replacing GitHub Actions

This project has been migrated from GitHub Actions to PM2 for local automation and process management.

## What PM2 Replaces

PM2 now handles the following tasks that were previously managed by GitHub Actions:

- **Building**: `npm run build` - Creates production build
- **Quality Checks**: Linting and type checking
- **Testing**: Running test suites
- **Deployment**: Local deployment and process management
- **Monitoring**: Application health and resource monitoring
- **Auto-restart**: Automatic restart on crashes or file changes

## PM2 Commands

### Start the Application

```bash
# Start with PM2
pm2 start npm --name "bolt-zion-app" -- run preview

# Or use the automation script
./scripts/pm2-automation.sh deploy
```

### Check Status

```bash
pm2 status
pm2 logs bolt-zion-app
```

### Stop/Restart

```bash
pm2 stop bolt-zion-app
pm2 restart bolt-zion-app
pm2 delete bolt-zion-app
```

### Monitoring

```bash
pm2 monit
```

## Automation Script

Use the PM2 automation script for common tasks:

```bash
# Run complete pipeline (quality checks, build, test, deploy)
./scripts/pm2-automation.sh all

# Run specific tasks
./scripts/pm2-automation.sh quality    # Lint and type check
./scripts/pm2-automation.sh build      # Build project
./scripts/pm2-automation.sh test       # Run tests
./scripts/pm2-automation.sh deploy     # Deploy with PM2
./scripts/pm2-automation.sh monitor    # Monitor application
```

## Benefits of PM2 over GitHub Actions

1. **Faster Execution**: No need to wait for GitHub runners
2. **Local Control**: Full control over the environment
3. **Real-time Monitoring**: Live monitoring of processes
4. **Cost Effective**: No GitHub Actions minutes consumed
5. **Immediate Feedback**: Instant results and error reporting
6. **Customization**: Easy to modify and extend automation

## Configuration Files

- `ecosystem.config.js`: PM2 ecosystem configuration
- `scripts/pm2-automation.sh`: Automation script
- `logs/`: PM2 log files directory

## Migration Notes

The following GitHub Actions workflows have been replaced:

- `ci.yml` → PM2 quality checks and build
- `deploy.yml` → PM2 deployment and monitoring
- `test.yml` → PM2 test execution
- `build.yml` → PM2 build automation

## Troubleshooting

If PM2 fails to start:

1. Check if the application is already running: `pm2 status`
2. Clear PM2 processes: `pm2 delete all`
3. Restart PM2 daemon: `pm2 kill && pm2 start`
4. Check logs: `pm2 logs`

## Next Steps

1. Ensure PM2 is running: `pm2 status`
2. Test the automation: `./scripts/pm2-automation.sh all`
3. Set up PM2 to start on system boot: `pm2 startup`
4. Monitor application performance: `pm2 monit`
