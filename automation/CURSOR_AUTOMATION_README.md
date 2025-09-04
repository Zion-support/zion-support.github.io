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
- **Error Recovery**: Automatic retry mechanisms and error handling

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **Cursor** application installed and accessible
- **Platform-specific tools**:
  - **macOS**: Built-in AppleScript support
  - **Windows**: PowerShell (built-in)
  - **Linux**: `xdotool` package

### Linux Dependencies

```bash
# Ubuntu/Debian
sudo apt-get install xdotool

# CentOS/RHEL
sudo yum install xdotool

# Arch Linux
sudo pacman -S xdotool
```

## 🏗️ Installation

1. **Clone or download** the automation files to your desired directory
2. **Make scripts executable**:
   ```bash
   chmod +x launch-cursor-automation.sh
   chmod +x stop-cursor-automation.sh
   ```
3. **Install Node.js dependencies** (if any):
   ```bash
   npm install
   ```

## ⚙️ Configuration

### Basic Configuration

Edit `cursor-automation-config.json` to customize:

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
      "autoProceed": true,
      "priority": "high",
      "commands": ["proceed", "continue", "next"]
    }
  ]
}
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `interval` | Base interval between commands (ms) | 30000 |
| `maxSessions` | Maximum number of concurrent sessions | 5 |
| `enableLogging` | Enable/disable logging | true |
| `autoRestart` | Auto-restart failed sessions | true |
| `healthCheckInterval` | Health check frequency (ms) | 60000 |

### Session Configuration

| Option | Description | Default |
|--------|-------------|---------|
| `id` | Unique session identifier | Required |
| `name` | Human-readable session name | Auto-generated |
| `interval` | Command interval for this session | Global default |
| `autoProceed` | Enable automatic command sending | true |
| `priority` | Session priority (high/medium/low) | medium |
| `commands` | Array of commands to cycle through | ["proceed"] |

## 🚀 Usage

### Method 1: Direct Execution

```bash
# Run the automation directly
node cursor-interface-automation.js

# Or with custom config
node cursor-interface-automation.js /path/to/config.json
```

### Method 2: Launcher Script (Recommended)

```bash
# Start automation
./launch-cursor-automation.sh

# Stop automation
./stop-cursor-automation.sh
```

### Method 3: PM2 Service

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start as PM2 service
pm2 start cursor-automation-pm2.json

# Monitor
pm2 monit

# View logs
pm2 logs cursor-chat-automation

# Stop service
pm2 stop cursor-chat-automation

# Restart service
pm2 restart cursor-chat-automation
```

## 📊 Monitoring

### Real-time Status

The automation provides real-time status updates:

```
[2024-01-15 10:30:00] Status: 3 active sessions, 45 commands sent
```

### Log Files

- **Main log**: `cursor-interface-automation.log`
- **PM2 logs**: `./logs/cursor-automation*.log`
- **Launcher logs**: `cursor-automation.log`

### Health Checks

The system automatically:
- Monitors session health every minute
- Detects stuck sessions
- Restarts failed automation
- Provides detailed error reporting

## 🔧 Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   chmod +x *.sh
   ```

2. **Cursor Not Found**
   - Ensure Cursor is installed and accessible
   - Check application name matches platform

3. **Automation Not Working**
   - Verify platform-specific tools are installed
   - Check log files for error messages
   - Ensure Cursor has focus permissions

4. **High CPU Usage**
   - Increase command intervals
   - Reduce number of concurrent sessions
   - Check for stuck processes

### Debug Mode

Enable debug logging by modifying the configuration:

```json
{
  "automation": {
    "enableLogging": true,
    "logLevel": "debug"
  }
}
```

### Manual Testing

Test the automation system without starting full automation:

```javascript
const automation = new CursorInterfaceAutomation();
automation.testAutomation().then(result => {
  console.log('Test result:', result);
});
```

## 🛡️ Security Considerations

- **No Credentials Stored**: The system doesn't store or transmit sensitive information
- **Local Only**: All automation runs locally on your machine
- **Permission-Based**: Requires appropriate system permissions for interface automation
- **Audit Trail**: All actions are logged for transparency

## 🔄 Advanced Features

### Custom Command Patterns

Create sophisticated command sequences:

```json
{
  "commands": [
    "proceed",
    "continue with the next step",
    "analyze the current code",
    "suggest improvements"
  ]
}
```

### Session Prioritization

Manage multiple sessions with different priorities:

```json
{
  "sessions": [
    {
      "id": "critical",
      "priority": "high",
      "interval": 15000
    },
    {
      "id": "background",
      "priority": "low",
      "interval": 60000
    }
  ]
}
```

### Integration with Other Tools

The automation system can be integrated with:
- **CI/CD pipelines**
- **Monitoring systems**
- **Notification services**
- **Custom workflows**

## 📈 Performance Optimization

### Recommended Settings

- **Development**: 30-60 second intervals
- **Production**: 2-5 minute intervals
- **High-traffic**: Reduce concurrent sessions
- **Low-resource**: Increase intervals

### Resource Monitoring

Monitor system resources:
```bash
# CPU and memory usage
top -p $(cat cursor-automation.pid)

# Process status
ps aux | grep cursor-automation
```

## 🤝 Contributing

To contribute to the automation system:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This automation system is provided as-is for educational and development purposes.

## 🆘 Support

For issues and questions:

1. Check the troubleshooting section
2. Review log files for error details
3. Verify system requirements
4. Test with minimal configuration

## 🔮 Future Enhancements

Planned features:
- **Web Dashboard**: Real-time monitoring interface
- **API Integration**: REST API for remote control
- **Advanced Scheduling**: Cron-like command scheduling
- **Machine Learning**: Intelligent command optimization
- **Multi-Monitor Support**: Handle multiple displays
- **Cloud Sync**: Configuration synchronization

---

**Note**: This automation system is designed for development and testing purposes. Use responsibly and ensure compliance with your organization's policies.
