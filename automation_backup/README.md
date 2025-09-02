# Zion.app PM2 Automation System

A comprehensive automation system for monitoring browser console errors and automatically fixing them using PM2 process management.

## 🚀 Features

### Browser Error Monitor

- **Real-time monitoring** of browser console errors using Puppeteer
- **Automatic error classification** by severity and type
- **Intelligent fix strategies** for common JavaScript errors
- **Continuous health checks** every 5 minutes
- **Comprehensive logging** and reporting

### Auto-Fix Capabilities

- **Null/undefined property access** → Adds optional chaining (`?.`)
- **Function existence errors** → Adds function type checks
- **Reference errors** → Adds variable declarations
- **Type errors** → Adds type safety checks
- **Syntax errors** → Attempts to fix common syntax issues
- **Resource loading errors** → Retries and fallback strategies

### PM2 Process Management

- **Automatic restarts** on failures
- **Health monitoring** with graceful shutdown
- **Log rotation** and management
- **Cron-based scheduling** for maintenance
- **Memory and CPU monitoring**

## 📋 Prerequisites

- Node.js 16+ and npm 8+
- PM2 (will be installed automatically)
- Access to the Zion.app source code

## 🛠️ Installation

### Quick Setup

```bash
cd automation
chmod +x manage.sh
./manage.sh setup
```

### Manual Installation

```bash
cd automation
npm install
pm2 start ecosystem.config.js
```

## 📖 Usage

### Management Commands

```bash
# First-time setup
./manage.sh setup

# Start all services
./manage.sh start

# Stop all services
./manage.sh stop

# Restart all services
./manage.sh restart

# Show status
./manage.sh status

# View logs
./manage.sh logs                    # All logs
./manage.sh logs zion-browser-error-monitor  # Specific service

# Open PM2 monitor
./manage.sh monitor

# Run health check
./manage.sh health

# Start browser monitor only
./manage.sh browser-monitor

# Cleanup
./manage.sh cleanup
```

### PM2 Commands

```bash
# Start services
pm2 start ecosystem.config.js

# Stop services
pm2 stop ecosystem.config.js

# Restart services
pm2 restart ecosystem.config.js

# Reload services (zero-downtime)
pm2 reload ecosystem.config.js

# Delete services
pm2 delete ecosystem.config.js

# View status
pm2 status

# Monitor processes
pm2 monit

# View logs
pm2 logs
```

## 🔧 Configuration

### Environment Variables

Create `automation/.env` file:

```bash
# App configuration
ZION_APP_URL=https://ziontechgroup.com
ZION_APP_ENV=production

# PM2 configuration
PM2_HOME=./automation/.pm2

# Browser configuration
BROWSER_HEADLESS=true
BROWSER_TIMEOUT=30000

# Monitoring intervals
HEALTH_CHECK_INTERVAL=900000  # 15 minutes
BROWSER_CHECK_INTERVAL=300000 # 5 minutes
```

### Ecosystem Configuration

The `ecosystem.config.js` file configures:

- **Service names** and scripts
- **Memory limits** and restart policies
- **Logging** and monitoring
- **Health checks** and graceful shutdown
- **Cron scheduling** for maintenance

## 📊 Monitoring & Reporting

### Health Checks

- **System resources** (CPU, memory, disk)
- **Service status** and uptime
- **Error rates** and fix success rates
- **Performance metrics**

### Reports Generated

- `browser-error-report.json` - Browser error statistics
- `auto-fix-report.json` - Auto-fix results
- `health-status.json` - System health status

### Log Files

- `browser-monitor-*.log` - Browser monitoring logs
- `health-check-*.log` - Health check logs
- `pm2-*.log` - PM2 process logs

## 🔍 Error Detection & Fixing

### Error Types Detected

#### JavaScript Errors

- **Syntax errors** - Missing brackets, quotes, etc.
- **Reference errors** - Undefined variables/functions
- **Type errors** - Property access on null/undefined
- **Function errors** - Calling non-functions

#### Network Errors

- **Resource loading failures** - 404s, timeouts
- **CORS issues** - Cross-origin restrictions
- **Connection problems** - Network connectivity

#### CSS/Resource Errors

- **Missing assets** - Images, stylesheets, scripts
- **Loading failures** - Network issues, timeouts

### Fix Strategies

#### Runtime Fixes

- **Error handlers** - Global error catching
- **Fallback values** - Default values for null/undefined
- **Retry logic** - Automatic retry for failed requests
- **Graceful degradation** - Continue operation despite errors

#### Source Code Fixes

- **Optional chaining** - `obj?.prop` instead of `obj.prop`
- **Null checks** - `if (obj && obj.prop)` guards
- **Function checks** - `typeof func === 'function'` validation
- **Variable declarations** - Add missing `const`/`let`/`var`

## 🚨 Troubleshooting

### Common Issues

#### PM2 Not Starting

```bash
# Check PM2 installation
npm list -g pm2

# Reinstall PM2
npm install -g pm2

# Clear PM2 cache
pm2 kill
rm -rf ~/.pm2
```

#### Browser Monitor Fails

```bash
# Check Puppeteer installation
npm list puppeteer

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check system dependencies (Linux)
sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

#### Memory Issues

```bash
# Check memory usage
pm2 monit

# Restart with memory limit
pm2 restart zion-browser-error-monitor --max-memory-restart 500M

# Monitor memory growth
pm2 logs --lines 100 | grep "Memory"
```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment
export DEBUG=zion:*

# Start with debug
pm2 start ecosystem.config.js --env production -- --debug

# View debug logs
pm2 logs --lines 200
```

## 🔄 Maintenance

### Daily Operations

- **Health checks** run every 15 minutes
- **Browser monitoring** runs every 5 minutes
- **Log rotation** happens automatically
- **Backup cleanup** removes old backups

### Weekly Maintenance

- **Performance review** of fix success rates
- **Log analysis** for error patterns
- **Configuration updates** based on usage
- **Dependency updates** and security patches

### Monthly Maintenance

- **Full system audit** and health review
- **Performance optimization** based on metrics
- **Feature updates** and improvements
- **Documentation updates**

## 📈 Performance Metrics

### Key Indicators

- **Error detection rate** - How many errors are caught
- **Fix success rate** - Percentage of errors successfully fixed
- **Response time** - Time from error to fix application
- **System uptime** - Service availability percentage

### Monitoring Dashboard

```bash
# Open PM2 monitor
pm2 monit

# View real-time metrics
pm2 status

# Check performance
pm2 show zion-browser-error-monitor
```

## 🔒 Security Considerations

### Access Control

- **Environment variables** for sensitive configuration
- **PM2 process isolation** from main application
- **Log sanitization** to prevent information leakage
- **Backup encryption** for sensitive data

### Best Practices

- **Regular updates** of dependencies
- **Security scanning** of generated code
- **Access logging** for all operations
- **Backup verification** and testing

## 🤝 Contributing

### Development Setup

```bash
# Clone repository
git clone https://github.com/Zion-Holdings/zion.app.git

# Install dependencies
cd automation
npm install

# Run tests
npm test

# Start development mode
npm run dev
```

### Adding New Fix Strategies

1. **Identify error pattern** in `fixPatterns`
2. **Implement fix function** in `BrowserErrorFixer` class
3. **Add tests** for the new fix strategy
4. **Update documentation** with examples

### Code Style

- **ESLint** configuration for consistency
- **Prettier** for code formatting
- **JSDoc** comments for all functions
- **TypeScript** definitions for type safety

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

### Documentation

- **This README** - Comprehensive usage guide
- **Code comments** - Inline documentation
- **PM2 docs** - Process management reference
- **Puppeteer docs** - Browser automation reference

### Issues & Bugs

- **GitHub Issues** - Report bugs and feature requests
- **Log files** - Check automation logs for errors
- **Health reports** - Review system health status
- **PM2 logs** - Process management logs

### Community

- **Zion Tech Group** - Main project repository
- **Discussions** - GitHub Discussions for questions
- **Contributions** - Pull requests welcome

---

**Built with ❤️ by Zion Tech Group**

_Automating the future, one error at a time._
