#!/usr/bin/env node

/**
 * Zion Project Console Error Capture Integration
 * 
 * This script demonstrates how to integrate the console error capture
 * automation with the Zion project for automatic error reporting.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ZionErrorCaptureIntegration {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.automationDir = __dirname;
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.configFile = path.join(this.automationDir, 'zion-config.json');
  }

  async initialize() {
    console.log('🚀 Initializing Zion Console Error Capture Integration...');
    
    // Create reports directory
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    // Check if automation dependencies are installed
    await this.checkDependencies();
    
    // Create Zion-specific configuration
    await this.createZionConfig();
    
    console.log('✅ Zion integration initialized successfully');
  }

  async checkDependencies() {
    console.log('📦 Checking automation dependencies...');
    
    try {
      // Check if we're in the automation directory
      process.chdir(this.automationDir);
      
      // Check if package.json exists
      if (!fs.existsSync('package.json')) {
        throw new Error('package.json not found in automation directory');
      }
      
      // Install dependencies if needed
      try {
        require.resolve('puppeteer');
        console.log('✅ Puppeteer already installed');
      } catch (e) {
        console.log('📦 Installing Puppeteer...');
        execSync('npm install', { stdio: 'inherit' });
      }
      
      // Return to project root
      process.chdir(this.projectRoot);
      
    } catch (error) {
      console.error('❌ Failed to check dependencies:', error.message);
      throw error;
    }
  }

  async createZionConfig() {
    console.log('⚙️ Creating Zion-specific configuration...');
    
    const config = {
      project: 'Zion Tech Group Website',
      version: '1.0.0',
      urls: {
        localhost: [
          'http://localhost:3000',
          'http://localhost:3000/services',
          'http://localhost:3000/about',
          'http://localhost:3000/contact',
          'http://localhost:3000/blog'
        ],
        production: [
          'https://ziontechgroup.com',
          'https://ziontechgroup.com/services',
          'https://ziontechgroup.com/about',
          'https://ziontechgroup.com/contact',
          'https://ziontechgroup.com/blog'
        ]
      },
      errorCapture: {
        maxErrors: 200,
        autoReport: true,
        reportInterval: 60000, // 1 minute
        captureConsole: true,
        captureNetwork: true,
        captureUnhandled: true,
        captureResource: true
      },
      integration: {
        nextjs: true,
        react: true,
        supabase: true,
        tailwind: true
      },
      reporting: {
        format: ['markdown', 'json'],
        includeStackTraces: true,
        includeUserAgent: true,
        includePerformance: true
      }
    };

    fs.writeFileSync(this.configFile, JSON.stringify(config, null, 2));
    console.log(`✅ Configuration saved to: ${this.configFile}`);
  }

  async runAutomatedCapture() {
    console.log('🔍 Running automated console error capture...');
    
    try {
      // Change to automation directory
      process.chdir(this.automationDir);
      
      // Run the main automation script
      console.log('🚀 Starting console error capture...');
      execSync('node console-error-capture.js --headless', { 
        stdio: 'inherit',
        env: { ...process.env, ZION_INTEGRATION: 'true' }
      });
      
    } catch (error) {
      console.error('❌ Automated capture failed:', error.message);
      throw error;
    } finally {
      // Return to project root
      process.chdir(this.projectRoot);
    }
  }

  async integrateWithNextJS() {
    console.log('⚛️ Integrating with Next.js...');
    
    // Check if pages/api directory exists
    const apiDir = path.join(this.projectRoot, 'pages', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }

    // Check if error-capture API already exists
    const apiFile = path.join(apiDir, 'error-capture.js');
    if (!fs.existsSync(apiFile)) {
      console.log('📝 Creating Next.js API endpoint...');
      
      // Copy the API file
      const sourceApi = path.join(this.automationDir, '..', 'pages', 'api', 'error-capture.js');
      if (fs.existsSync(sourceApi)) {
        fs.copyFileSync(sourceApi, apiFile);
        console.log('✅ Next.js API endpoint created');
      } else {
        console.log('⚠️ Source API file not found, skipping API creation');
      }
    } else {
      console.log('✅ Next.js API endpoint already exists');
    }
  }

  async integrateWithReact() {
    console.log('⚛️ Integrating with React components...');
    
    // Create a sample React component that uses the error capture hook
    const componentsDir = path.join(this.projectRoot, 'components');
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }

    const errorMonitorFile = path.join(componentsDir, 'ErrorMonitor.jsx');
    if (!fs.existsSync(errorMonitorFile)) {
      console.log('📝 Creating React Error Monitor component...');
      
      const componentCode = `import React from 'react';
import { useErrorCapture } from '../automation/useErrorCapture';

export default function ErrorMonitor() {
  const {
    errors,
    isCapturing,
    generateCursorChatReport,
    sendReport,
    clearErrors,
    getErrorCount
  } = useErrorCapture({
    maxErrors: 100,
    autoReport: true,
    reportEndpoint: '/api/error-capture',
    onError: (error) => console.log('🚨 New error captured:', error),
    onReport: (report, success) => console.log('📊 Report sent:', success ? 'Success' : 'Failed')
  });

  const handleGenerateReport = () => {
    const report = generateCursorChatReport();
    console.log('📝 Generated report:', report);
    
    // Copy to clipboard if possible
    if (navigator.clipboard) {
      navigator.clipboard.writeText(report);
      alert('Report copied to clipboard!');
    }
  };

  const handleSendReport = async () => {
    const success = await sendReport();
    if (success) {
      alert('Report sent successfully!');
    } else {
      alert('Failed to send report. Check console for details.');
    }
  };

  if (!isCapturing) {
    return <div>Loading error monitor...</div>;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="text-lg font-semibold mb-2">🐛 Error Monitor</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm">
          <span className="font-medium">Status:</span> 
          <span className={\`ml-2 px-2 py-1 rounded text-xs \${isCapturing ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}\`}>
            {isCapturing ? 'Active' : 'Inactive'}
          </span>
        </p>
        
        <p className="text-sm">
          <span className="font-medium">Errors:</span> 
          <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
            {getErrorCount()}
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleGenerateReport}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          📝 Generate Report
        </button>
        
        <button
          onClick={sendReport}
          className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          📤 Send Report
        </button>
        
        <button
          onClick={clearErrors}
          className="w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          🧹 Clear Errors
        </button>
      </div>

      {errors.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-xs text-red-700">
            Latest error: {errors[errors.length - 1]?.message?.substring(0, 50)}...
          </p>
        </div>
      )}
    </div>
  );
}`;

      fs.writeFileSync(errorMonitorFile, componentCode);
      console.log('✅ React Error Monitor component created');
    } else {
      console.log('✅ React Error Monitor component already exists');
    }
  }

  async createIntegrationScript() {
    console.log('📝 Creating integration script...');
    
    const scriptFile = path.join(this.projectRoot, 'capture-errors.js');
    const scriptContent = `#!/usr/bin/env node

/**
 * Zion Project Error Capture Script
 * 
 * Quick script to capture console errors from the Zion project
 */

const { spawn } = require('child_process');
const path = require('path');

async function captureZionErrors() {
  console.log('🚀 Starting Zion Error Capture...');
  
  const automationDir = path.join(__dirname, 'automation');
  const automationScript = path.join(automationDir, 'console-error-capture.js');
  
  if (!require('fs').existsSync(automationScript)) {
    console.error('❌ Automation script not found. Run the integration first.');
    process.exit(1);
  }
  
  // Change to automation directory
  process.chdir(automationDir);
  
  // Run the automation
  const child = spawn('node', ['console-error-capture.js', '--headless'], {
    stdio: 'inherit',
    env: { ...process.env, ZION_INTEGRATION: 'true' }
  });
  
  child.on('close', (code) => {
    console.log(\`\\n🎯 Error capture completed with code: \${code}\`);
    process.exit(code);
  });
  
  child.on('error', (error) => {
    console.error('❌ Failed to start error capture:', error);
    process.exit(1);
  });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\\n🛑 Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\\n🛑 Shutting down gracefully...');
  process.exit(0);
});

captureZionErrors().catch(console.error);`;

    fs.writeFileSync(scriptFile, scriptContent);
    
    // Make executable
    try {
      execSync(`chmod +x "${scriptFile}"`);
    } catch (e) {
      console.log('⚠️ Could not make script executable (this is normal on Windows)');
    }
    
    console.log('✅ Integration script created: capture-errors.js');
  }

  async runFullIntegration() {
    console.log('🔧 Running full Zion integration...');
    
    try {
      await this.initialize();
      await this.integrateWithNextJS();
      await this.integrateWithReact();
      await this.createIntegrationScript();
      
      console.log('\n🎉 Zion Console Error Capture Integration Complete!');
      console.log('\n📋 Next Steps:');
      console.log('1. Add <ErrorMonitor /> to your main layout or pages');
      console.log('2. Run: node capture-errors.js');
      console.log('3. Check the reports/ directory for error reports');
      console.log('4. Use the generated reports in Cursor chats for fixing');
      
    } catch (error) {
      console.error('❌ Integration failed:', error.message);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const integration = new ZionErrorCaptureIntegration();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Zion Console Error Capture Integration

Usage: node integrate-with-zion.js [options]

Options:
  --help, -h     Show this help message
  --full         Run full integration (default)
  --api-only     Only integrate Next.js API
  --react-only   Only integrate React components
  --capture      Run error capture after integration

Examples:
  node integrate-with-zion.js
  node integrate-with-zion.js --api-only
  node integrate-with-zion.js --full --capture
    `);
    process.exit(0);
  }

  const runFull = args.includes('--full') || args.length === 0;
  const runCapture = args.includes('--capture');
  
  if (runFull) {
    integration.runFullIntegration().then(() => {
      if (runCapture) {
        console.log('\n🚀 Running error capture...');
        return integration.runAutomatedCapture();
      }
    }).catch(console.error);
  } else if (args.includes('--api-only')) {
    integration.integrateWithNextJS().catch(console.error);
  } else if (args.includes('--react-only')) {
    integration.integrateWithReact().catch(console.error);
  }
}

module.exports = ZionErrorCaptureIntegration;
