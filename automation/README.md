# Cursor Chat Automation System

A comprehensive automation system that continuously sends "proceed" commands to Cursor chat sessions to keep them running and active.

## 🚀 Features

- **Multi-Session Management**: Handle multiple Cursor chat sessions simultaneously
- **Platform-Agnostic**: Works on macOS, Windows, and Linux
- **Real Interface Interaction**: Actually interacts with Cursor's interface using keyboard automation
- **Configurable Commands**: Support for multiple command patterns (proceed, continue, next, etc.)
- **Health Monitoring**: Automatic health checks and session recovery
- **Multiple Deployment Options**: Run as standalone script, background process, or PM2 service
- **Comprehensive Logging**: Detailed logging with different log levels
- **Error Recovery**: Automatic retry mechanisms and failure handling
- **Resource Management**: Memory monitoring and garbage collection

## 📋 Requirements

- **Node.js**: Version 16 or higher
- **Operating System**: macOS, Windows, or Linux
- **Permissions**: Ability to run shell scripts and Node.js processes

## 🛠️ Installation

1. **Clone or download** the automation files to your project
2. **Navigate** to the automation directory:
   ```bash
   cd automation
   ```
3. **Make scripts executable**:
   ```bash
   chmod +x *.sh
   ```
4. **Install dependencies** (if any):
   ```bash
   npm install
   ```

## 🚀 Quick Start

### Option 1: Quick Start Script (Recommended)
```bash
cd automation
./quick-start.sh
```

### Option 2: Manual Launch
```bash
cd automation
./launch-cursor-automation.sh
```

### Option 3: Direct Node.js Execution
```bash
cd automation
node cursor-chat-automation.js
```

## 📖 Usage

### Starting the Automation

```bash
# Start automation
./launch-cursor-automation.sh

# Or start directly with Node.js
node cursor-chat-automation.js
```

### Stopping the Automation

```bash
# Stop automation
./stop-cursor-automation.sh

# Or stop manually by finding and killing the process
ps aux | grep cursor-chat-automation
kill <PID>
```

### Monitoring and Logs

```bash
# View real-time logs
tail -f cursor-automation.log

# Check process status
ps aux | grep cursor-chat-automation

# View automation stats
node cursor-chat-automation.js --stats
```

## ⚙️ Configuration

The system uses `cursor-automation-config.json` for configuration:

```json
{
  "automation": {
    "enabled": true,
    "interval": 30000,
    "maxSessions": 5,
    "enableLogging": true,
    "autoRestart": true
  },
  "sessions": [
    {
      "id": "main-dev",
      "name": "Main Development Chat",
      "interval": 25000,
      "commands": ["proceed", "continue", "next"]
    }
  ]
}
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `interval` | Main automation loop interval (ms) | 30000 |
| `maxSessions` | Maximum number of concurrent sessions | 5 |
| `enableLogging` | Enable file logging | true |
| `autoRestart` | Automatically restart on failure | true |
| `healthCheckInterval` | Health check frequency (ms) | 60000 |
| `maxRetries` | Maximum retry attempts | 3 |
| `retryDelay` | Delay between retries (ms) | 5000 |

## 🔧 Session Management

### Adding Sessions

```javascript
const automation = new CursorChatAutomation();

automation.addSession({
  id: 'my-session',
  name: 'My Development Chat',
  interval: 30000,
  commands: ['proceed', 'continue', 'next'],
  priority: 'high'
});
```

### Session Configuration

| Property | Description | Required |
|----------|-------------|----------|
| `id` | Unique session identifier | Yes |
| `name` | Human-readable session name | Yes |
| `interval` | Session-specific interval | No |
| `commands` | Array of commands to send | No |
| `priority` | Session priority (high/medium/low) | No |
| `autoProceed` | Enable automatic command sending | No |

## 📊 Monitoring and Health Checks

The system includes comprehensive monitoring:

- **Session Health**: Tracks error rates and session status
- **Resource Monitoring**: Memory usage and garbage collection
- **Automatic Recovery**: Restarts failed sessions and processes
- **Performance Metrics**: Response times and success rates

### Health Check Commands

```bash
# Check system health
node cursor-chat-automation.js --health

# View performance metrics
node cursor-chat-automation.js --metrics

# Get session statistics
node cursor-chat-automation.js --stats
```

## 🐛 Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   chmod +x *.sh
   ```

2. **Node.js Not Found**
   ```bash
   # Install Node.js from https://nodejs.org/
   # Or use nvm:
   nvm install 16
   nvm use 16
   ```

3. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :<PORT>
   # Kill the process or change port in config
   ```

4. **High Memory Usage**
   - The system automatically performs garbage collection
   - Check for memory leaks in your custom code
   - Consider reducing the number of concurrent sessions

### Debug Mode

Enable debug logging by setting the log level:

```bash
# Set debug level
export LOG_LEVEL=DEBUG
node cursor-chat-automation.js

# Or modify config file
{
  "logging": {
    "level": "DEBUG"
  }
}
```

## 🔒 Security Considerations

- **Local Execution**: The automation runs locally on your machine
- **No External Calls**: Does not send data to external servers
- **Process Isolation**: Each session runs in its own context
- **Log Privacy**: Logs are stored locally and not transmitted

## 📈 Performance Optimization

### Recommended Settings

- **High Performance**: 15-30 second intervals
- **Balanced**: 30-60 second intervals  
- **Low Resource**: 60+ second intervals

### Resource Management

- **Memory**: Automatic garbage collection when usage > 100MB
- **CPU**: Configurable intervals to control CPU usage
- **Sessions**: Limit concurrent sessions based on system resources

## 🔄 Deployment Options

### 1. Standalone Script
```bash
./launch-cursor-automation.sh
```

### 2. Background Process
```bash
nohup ./launch-cursor-automation.sh > automation.log 2>&1 &
```

### 3. System Service (Linux/macOS)
```bash
# Create systemd service file
sudo cp automation.service /etc/systemd/system/
sudo systemctl enable cursor-automation
sudo systemctl start cursor-automation
```

### 4. PM2 Process Manager
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start cursor-chat-automation.js --name "cursor-automation"

# Monitor
pm2 monit
```

## 📝 Logging

### Log Levels

- **ERROR**: Critical errors and failures
- **WARN**: Warning messages and issues
- **INFO**: General information and status updates
- **DEBUG**: Detailed debugging information

### Log Files

- **Main Log**: `cursor-automation.log`
- **Error Log**: `cursor-automation-error.log`
- **Access Log**: `cursor-automation-access.log`

### Log Rotation

The system supports automatic log rotation:

```json
{
  "logging": {
    "maxSize": "10MB",
    "maxFiles": 5
  }
}
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help

1. **Check the logs**: `tail -f cursor-automation.log`
2. **Review configuration**: Verify `cursor-automation-config.json`
3. **Check system resources**: Monitor CPU, memory, and disk usage
4. **Restart the system**: `./stop-cursor-automation.sh && ./launch-cursor-automation.sh`

### Reporting Issues

When reporting issues, please include:

- Operating system and version
- Node.js version
- Error messages and logs
- Steps to reproduce
- Configuration file contents

---

**Happy Automating! 🚀**

The Cursor Chat Automation System will keep your development conversations flowing smoothly.
