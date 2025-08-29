# Console Error Capture Automation

A comprehensive automation system for capturing browser console errors and sending them to Cursor chats for fixing. This system includes multiple components for different use cases and integration methods.

## 🚀 Features

- **Automated Error Capture**: Uses Puppeteer to automatically visit pages and capture console errors
- **Real-time Browser Monitoring**: JavaScript library for capturing errors in real-time
- **React Integration**: Custom hook for easy integration in React applications
- **Next.js API Support**: API endpoint for receiving and storing error reports
- **Multiple Error Types**: Captures console errors, unhandled errors, network errors, and more
- **Cursor Chat Ready**: Generates formatted reports perfect for Cursor chat analysis
- **Flexible Configuration**: Customizable options for different environments

## 📁 Project Structure

```
automation/
├── console-error-capture.js    # Main Node.js automation script
├── browser-error-capture.js    # Browser-based error capture library
├── useErrorCapture.js          # React hook for error capture
├── package.json                # Dependencies and scripts
└── README.md                   # This file

pages/api/
└── error-capture.js            # Next.js API endpoint for receiving reports
```

## 🛠️ Installation

### 1. Install Dependencies

```bash
cd automation
npm install
```

### 2. Make Scripts Executable

```bash
chmod +x console-error-capture.js
```

## 🎯 Usage

### Node.js Automation (Recommended for Development)

The main automation script that uses Puppeteer to visit pages and capture errors:

```bash
# Basic usage
node console-error-capture.js

# Headless mode
node console-error-capture.js --headless

# Custom URLs
node console-error-capture.js --urls "https://example.com,https://test.com"

# Custom output directory
node console-error-capture.js --output ./custom-reports

# Show help
node console-error-capture.js --help
```

**Features:**

- Automatically detects localhost vs production URLs
- Captures errors from multiple pages
- Generates detailed reports for Cursor chat
- Saves both JSON data and formatted markdown reports

### Browser Integration

Include the browser script in your HTML pages:

```html
<script src="automation/browser-error-capture.js"></script>
<script>
  // Auto-initialized with default settings
  console.log('Error capture active:', window.errorCaptureInstance.isCapturing);

  // Or create custom instance
  const customCapture = new BrowserErrorCapture({
    maxErrors: 50,
    autoReport: true,
    reportEndpoint: '/api/error-capture',
  });

  // Manual control
  window.errorCapture.generateCursorChatReport();
  window.errorCapture.sendReport();
</script>
```

**Features:**

- Real-time error capture
- Network error monitoring
- Automatic error reporting
- Export functionality

### React Integration

Use the custom hook in your React components:

```jsx
import { useErrorCapture } from './automation/useErrorCapture';

function App() {
  const {
    errors,
    isCapturing,
    generateCursorChatReport,
    sendReport,
    clearErrors,
  } = useErrorCapture({
    maxErrors: 100,
    autoReport: true,
    reportEndpoint: '/api/error-capture',
    onError: (error) => console.log('New error:', error),
    onReport: (report, success) => console.log('Report sent:', success),
  });

  return (
    <div>
      <h1>Error Monitoring Dashboard</h1>
      <p>Capturing: {isCapturing ? 'Yes' : 'No'}</p>
      <p>Total Errors: {errors.length}</p>

      <button
        onClick={() => {
          const report = generateCursorChatReport();
          console.log(report);
        }}
      >
        Generate Report
      </button>

      <button onClick={sendReport}>Send Report</button>

      <button onClick={clearErrors}>Clear Errors</button>
    </div>
  );
}
```

**Features:**

- React lifecycle management
- Automatic cleanup
- State management
- Callback support

### Next.js API Integration

The system includes a Next.js API route for receiving error reports:

```javascript
// pages/api/error-capture.js
// Automatically handles POST requests with error reports
// Stores reports and returns summaries
```

**Features:**

- RESTful API endpoint
- Report validation
- Storage management
- Rate limiting support

## 📊 Generated Reports

### Console Error Report Format

The system generates comprehensive reports perfect for Cursor chat analysis:

```markdown
# Console Error Report for Cursor Chat

Generated: [timestamp]
Total Errors: [count]

## Summary

- console.error: X errors
- unhandled.error: Y errors
- network.fetch.error: Z errors

## Detailed Error Analysis

### CONSOLE.ERROR (X errors)

#### Error 1

**Timestamp**: [timestamp]
**Message**: [error message]
**Stack**: [stack trace]

## Recommended Actions

1. Review Error Patterns
2. Fix Critical Errors
3. Update Error Handling
4. Test Fixes
5. Monitor

## Next Steps for Cursor Chat

Please analyze these errors and provide specific code fixes...
```

### JSON Data Export

Raw error data is also exported for programmatic analysis:

```json
{
  "summary": {
    "totalErrors": 5,
    "errorTypes": 3,
    "errorsByType": [...],
    "mostCommonError": [...]
  },
  "errors": [...],
  "timestamp": "...",
  "url": "...",
  "userAgent": "..."
}
```

## ⚙️ Configuration Options

### Node.js Automation

| Option       | Default        | Description                          |
| ------------ | -------------- | ------------------------------------ |
| `--headless` | false          | Run browser in headless mode         |
| `--urls`     | localhost URLs | Comma-separated list of URLs to test |
| `--output`   | `./reports`    | Custom output directory              |
| `--help`     | -              | Show help information                |

### Browser Integration

| Option             | Default | Description                |
| ------------------ | ------- | -------------------------- |
| `maxErrors`        | 100     | Maximum errors to store    |
| `autoReport`       | false   | Enable automatic reporting |
| `reportInterval`   | 30000   | Auto-report interval (ms)  |
| `reportEndpoint`   | null    | API endpoint for reports   |
| `captureConsole`   | true    | Capture console errors     |
| `captureNetwork`   | true    | Capture network errors     |
| `captureUnhandled` | true    | Capture unhandled errors   |

### React Hook

| Option             | Default | Description                |
| ------------------ | ------- | -------------------------- |
| `maxErrors`        | 100     | Maximum errors to store    |
| `autoReport`       | false   | Enable automatic reporting |
| `reportInterval`   | 30000   | Auto-report interval (ms)  |
| `reportEndpoint`   | null    | API endpoint for reports   |
| `captureConsole`   | true    | Capture console errors     |
| `captureNetwork`   | true    | Capture network errors     |
| `captureUnhandled` | true    | Capture unhandled errors   |
| `onError`          | null    | Error callback function    |
| `onReport`         | null    | Report callback function   |

## 🔧 Customization

### Adding Custom Error Types

```javascript
// In browser-error-capture.js
class BrowserErrorCapture {
  addCustomErrorType(type, captureFunction) {
    // Implement custom error capture logic
    captureFunction((error) => {
      this.addError({
        type: `custom.${type}`,
        message: error.message,
        data: error.data,
      });
    });
  }
}
```

### Custom Storage Backends

```javascript
// In console-error-capture.js
async function storeErrorReport(report) {
  // MongoDB
  await db.errorReports.create(report);

  // PostgreSQL
  await db.query('INSERT INTO error_reports (data) VALUES ($1)', [
    JSON.stringify(report),
  ]);

  // Cloud Storage
  await cloudStorage.upload('error-reports', report);

  // Log Aggregation
  await logService.send('error-report', report);
}
```

## 🚨 Error Types Captured

1. **Console Errors**: `console.error()`, `console.warn()`, error-indicating `console.log()`
2. **Unhandled Errors**: JavaScript runtime errors, syntax errors
3. **Unhandled Rejections**: Promise rejections without `.catch()`
4. **Network Errors**: Failed fetch requests, XMLHttpRequest errors
5. **Resource Errors**: Failed image, script, or CSS loading
6. **Custom Errors**: User-defined error types

## 📈 Monitoring and Analytics

### Real-time Metrics

- Error count by type
- Error frequency over time
- Most common error patterns
- Performance impact analysis

### Historical Data

- Error trends over time
- Page-specific error analysis
- User agent correlation
- Geographic error distribution

## 🔒 Security Considerations

- Rate limiting on API endpoints
- Input validation and sanitization
- Secure storage of error reports
- User privacy protection
- CORS configuration

## 🧪 Testing

### Test the Automation

```bash
# Test with a known error page
node console-error-capture.js --urls "https://httpstat.us/500" --headless

# Test local development
npm run dev  # Start your app
node console-error-capture.js  # Capture errors
```

### Test Browser Integration

```html
<!-- Create test errors -->
<script>
  console.error('Test error for automation');
  setTimeout(() => {
    throw new Error('Test unhandled error');
  }, 1000);
</script>
```

## 📝 Troubleshooting

### Common Issues

1. **Puppeteer Installation**: Run `npm install` in the automation directory
2. **Permission Errors**: Make scripts executable with `chmod +x`
3. **Port Conflicts**: Ensure your app is running on the expected port
4. **CORS Issues**: Configure your API endpoint CORS settings

### Debug Mode

```bash
# Enable verbose logging
DEBUG=* node console-error-capture.js

# Check browser console
node console-error-capture.js  # Browser will open with DevTools
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:

1. Check the troubleshooting section
2. Review the configuration options
3. Check the generated reports for clues
4. Open an issue in the repository

---

**Happy Error Hunting! 🐛✨**
