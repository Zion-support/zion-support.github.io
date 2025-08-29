# PM2 Automation - GitHub Actions Replacement

This document explains how PM2 has been configured to replace GitHub Actions workflows with local automation.

## 🚀 What Has Been Replaced

### GitHub Actions → PM2 Automation

| GitHub Action | PM2 Replacement | Schedule |
|---------------|-----------------|----------|
| `ci.yml` | `./scripts/pm2-automation.sh ci` | Daily 6:00 AM + Monday 4:00 AM |
| `deploy.yml` | `./scripts/pm2-automation.sh deploy` | Manual execution |
| `dependencies.yml` | `./scripts/pm2-automation.sh dependencies` | Monday 2:00 AM |
| `security.yml` | `./scripts/pm2-automation.sh security` | Monday 3:00 AM |
| `quality-check.yml` | `./scripts/pm2-automation.sh quality` | Monday 5:00 AM |

## 📁 Files Created

- `ecosystem.config.js` - PM2 application configuration
- `scripts/pm2-automation.sh` - Main automation script
- `scripts/pm2-setup.sh` - PM2 setup script
- `scripts/setup-cron.sh` - Cron job setup script
- `PM2-AUTOMATION-README.md` - This documentation

## 🛠️ How to Use

### Check PM2 Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs bolt-new-zion-app
```

### Run Automation Tasks Manually

#### Run all checks:
```bash
./scripts/pm2-automation.sh all
```

#### Run specific tasks:
```bash
./scripts/pm2-automation.sh ci          # CI checks
./scripts/pm2-automation.sh quality     # Quality checks
./scripts/pm2-automation.sh security    # Security audit
./scripts/pm2-automation.sh dependencies # Update dependencies
./scripts/pm2-automation.sh deploy      # Build and verify deployment
```

### Restart Application
```bash
pm2 restart bolt-new-zion-app
```

### Stop Application
```bash
pm2 stop bolt-new-zion-app
```

## ⏰ Automated Schedule

The following tasks run automatically:

- **Monday 2:00 AM** - Dependency updates and security patches
- **Monday 3:00 AM** - Security vulnerability scanning
- **Monday 4:00 AM** - Full CI pipeline (lint, type-check, build, test)
- **Monday 5:00 AM** - Quality assurance checks
- **Daily 6:00 AM** - Build verification

## 📝 Log Files

All automation tasks create detailed logs:

- `pm2-automation.log` - Main automation script logs
- `cron-dependencies.log` - Dependency update logs
- `cron-security.log` - Security check logs
- `cron-ci.log` - CI check logs
- `cron-quality.log` - Quality check logs
- `cron-daily.log` - Daily build verification logs

## 🔧 PM2 Commands

### Basic Operations
```bash
pm2 start ecosystem.config.js    # Start with config
pm2 start npm --name "app" -- run dev  # Start npm script
pm2 restart <app-name>           # Restart app
pm2 stop <app-name>              # Stop app
pm2 delete <app-name>            # Delete app
pm2 save                         # Save current configuration
pm2 startup                      # Setup startup script
```

### Monitoring
```bash
pm2 monit                        # Interactive monitoring
pm2 logs                         # View all logs
pm2 logs <app-name>              # View specific app logs
pm2 show <app-name>              # Show app details
```

## 🚨 Troubleshooting

### App Not Starting
1. Check logs: `pm2 logs bolt-new-zion-app`
2. Verify dependencies: `npm ci`
3. Check build: `npm run build`
4. Restart: `pm2 restart bolt-new-zion-app`

### Cron Jobs Not Running
1. Check cron service: `systemctl status cron`
2. View cron jobs: `crontab -l`
3. Check log files in `/workspace/`

### PM2 Issues
1. Reset PM2: `pm2 kill && pm2 start ecosystem.config.js`
2. Clear logs: `pm2 flush`
3. Reinstall: `npm install -g pm2`

## 🔄 Migration Benefits

### Advantages of PM2 over GitHub Actions:
- ✅ **Faster execution** - No queue waiting
- ✅ **Cost effective** - No GitHub Actions minutes consumption
- ✅ **Real-time monitoring** - Live process management
- ✅ **Local control** - Full control over execution environment
- ✅ **Offline capability** - Works without internet connection
- ✅ **Custom scheduling** - Flexible cron-based automation

### What's Maintained:
- 🔄 **Automated testing** - Lint, type-check, build verification
- 🔄 **Security scanning** - Regular vulnerability checks
- 🔄 **Dependency management** - Automated updates and audits
- 🔄 **Quality assurance** - Consistent code quality checks
- 🔄 **Deployment verification** - Build validation and testing

## 📋 Next Steps

1. **Verify PM2 is running**: `pm2 status`
2. **Test automation**: `./scripts/pm2-automation.sh all`
3. **Monitor logs**: Check log files for any issues
4. **Customize schedule**: Edit cron jobs if needed
5. **Delete GitHub Actions**: Remove workflows now handled by PM2

## 🆘 Support

If you encounter issues:

1. Check the log files in `/workspace/`
2. Verify PM2 status: `pm2 status`
3. Review cron jobs: `crontab -l`
4. Check system resources: `pm2 monit`

---

**Note**: This automation system provides the same functionality as GitHub Actions but runs locally with PM2, giving you full control over your CI/CD pipeline.