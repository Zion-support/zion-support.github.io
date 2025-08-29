## Build or Link Check Failure

**Date:** {{ date }}
**Process:** PM2 Automation System
**Commit:** {{ github.sha }}

### Summary
The automated build or link check has failed. This issue was created automatically by the PM2 automation system.

### What Happened
- [ ] Build failed
- [ ] Link check failed
- [ ] Tests failed
- [ ] Other (please specify)

### Details
Please check the PM2 logs for more detailed information about the failure.

### Next Steps
1. Check PM2 process status: `pm2 list`
2. Review the PM2 logs: `pm2 logs <process-name>`
3. Identify the root cause
4. Fix the issue
5. Restart the process: `pm2 restart <process-name>`

### Additional Notes
Add any additional context or notes here.

### PM2 Commands for Troubleshooting
```bash
# Check all process status
pm2 list

# View logs for specific process
pm2 logs <process-name>

# Restart specific process
pm2 restart <process-name>

# Monitor processes in real-time
pm2 monit
```