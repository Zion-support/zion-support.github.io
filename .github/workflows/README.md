# GitHub Workflows - Zion Tech Group

## 🚀 Overview

This directory contains the remaining GitHub Actions workflows after migrating most automation tasks to PM2. The PM2 automation system provides continuous monitoring, maintenance, and improvement with better performance and resource efficiency.

## 📋 Remaining Workflows

### CodeQL Security Analysis
- **File**: `codeql.yml`
- **Purpose**: Automated security code analysis using GitHub's CodeQL engine
- **Triggers**: Push to main/develop branches, pull requests, weekly schedule
- **Functionality**: 
  - JavaScript/TypeScript code analysis
  - Security vulnerability detection
  - Automated security scanning

### Status Reporting
- **File**: `status.yml`
- **Purpose**: Status reporting for remaining workflows
- **Triggers**: Completion of other workflows
- **Functionality**: 
  - Workflow status reporting
  - PM2 automation information display

## 🔄 Migrated to PM2 Automation

The following tasks have been migrated from GitHub Actions to PM2 automation processes:

| Task | PM2 Process | Frequency | Status |
|------|-------------|-----------|---------|
| **CI/CD Pipeline** | `daily-build-test` + `continuous-improvement` | Every hour + Every 2 hours | ✅ Running |
| **Security Auditing** | `security-audit` | Every 4 hours | ✅ Running |
| **Dependency Updates** | `dependency-updates` | Every 6 hours | ✅ Running |
| **Performance Monitoring** | `performance-monitor` | Every 2 hours | ✅ Running |
| **Quality Checks** | `quality-checks` | Every 3 hours | ✅ Running |
| **Link Validation** | `link-checker` + `link-integrity` | Every 30 min + Every 2 hours | ✅ Running |
| **Console Error Fixing** | `console-error-fixer` | Every 15 minutes | ✅ Running |
| **Frontend Optimization** | `front-maximizer` | Every 4 hours | ✅ Running |
| **Sitemap Generation** | `sitemap-runner` | Every 6 hours | ✅ Running |

## 🛠️ PM2 Management Commands

```bash
# Check automation status
pm2 status

# View automation logs
pm2 logs

# Restart automation processes
pm2 restart ecosystem.config.cjs

# Stop automation processes
pm2 stop ecosystem.config.cjs

# Start automation processes
pm2 start ecosystem.config.cjs

# Monitor automation in real-time
pm2 monit
```

## 📊 Benefits of PM2 Migration

### Performance Improvements
- **Faster execution**: No GitHub Actions startup overhead
- **Continuous operation**: 24/7 automation instead of scheduled runs
- **Resource efficiency**: Lower memory and CPU usage
- **Real-time monitoring**: Immediate feedback and status updates

### Cost Reduction
- **No GitHub Actions minutes**: Eliminates GitHub Actions usage costs
- **Reduced external dependencies**: Self-contained automation system
- **Better resource utilization**: Optimized for the specific environment

### Enhanced Capabilities
- **Immediate response**: No waiting for GitHub Actions scheduling
- **Custom automation**: Tailored to specific project needs
- **Better error handling**: Graceful failure recovery and logging
- **Real-time reporting**: Continuous status monitoring and alerts

## 🔒 Security Considerations

- **CodeQL remains**: Security scanning continues via GitHub Actions
- **PM2 isolation**: Each automation process runs independently
- **Resource limits**: Memory and CPU limits prevent resource exhaustion
- **Audit logging**: Full automation activity logging and monitoring

## 📈 Monitoring and Maintenance

### Daily Operations
- Check PM2 status: `pm2 status`
- Review automation logs: `pm2 logs`
- Monitor resource usage: `pm2 monit`

### Weekly Maintenance
- Review automation performance
- Check for process restarts
- Analyze automation reports

### Monthly Review
- Performance optimization
- Automation process updates
- Resource usage analysis

## 🆘 Troubleshooting

### Common Issues
1. **Process not starting**: Check PM2 installation and ecosystem config
2. **High memory usage**: Review memory limits in ecosystem.config.cjs
3. **Process errors**: Check logs with `pm2 logs <process-name>`

### Quick Fixes
```bash
# Restart all automation processes
pm2 restart ecosystem.config.cjs

# Check specific process logs
pm2 logs <process-name>

# Auto-fix failed processes
pm2 restart <failed-process>
```

## 📚 Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [PM2 Automation README](../PM2_AUTOMATION_README.md)
- [Ecosystem Configuration](../ecosystem.config.cjs)
- [Automation Scripts](../scripts/automation/)

---

**Last Updated**: $(date)
**Migration Status**: ✅ Complete
**PM2 Status**: All automation processes operational
**GitHub Actions**: Reduced from 40+ workflows to 2 essential workflows