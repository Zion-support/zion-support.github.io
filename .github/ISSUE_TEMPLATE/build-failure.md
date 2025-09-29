## Build or Link Check Failure

**Date:** {{ date }}
**Process:** PM2 Automation
**Commit:** {{ github.sha }}

### Summary
The automated build or link check has failed. This issue was created automatically by PM2 automation processes.

### What Happened

- [ ] Build failed
- [ ] Link check failed
- [ ] Tests failed
- [ ] Console error detected
- [ ] Quality check failed
- [ ] Other (please specify)

### Details
Please check the PM2 process logs for more detailed information about the failure.

### Next Steps
1. Check PM2 process status: `pm2 status`
2. Review the specific process logs: `pm2 logs <process-name>`
3. Identify the root cause
4. Fix the issue
5. Restart the process: `pm2 restart <process-name>`

### Additional Notes
Add any additional context or notes here.

### PM2 Commands for Debugging
```bash
# View all processes
pm2 status

# Monitor processes in real-time
pm2 monit

# View logs for a specific process
pm2 logs <process-name>

# Restart a specific process
pm2 restart <process-name>

# Restart all processes
pm2 restart all
```