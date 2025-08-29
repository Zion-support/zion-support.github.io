const { spawn, exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');

class DevAutomation {
  constructor() {
    this.processes = new Map();
    this.watchers = new Map();
    this.isRunning = false;
    this.config = {
      frontend: {
        port: process.env.FRONTEND_PORT || 3000,
        script: 'npm run dev',
        cwd: './',
        watchPatterns: [
          'src/**/*.{js,jsx,ts,tsx}',
          'pages/**/*.{js,jsx,ts,tsx}',
          'components/**/*.{js,jsx,ts,tsx}',
          'styles/**/*.{css,scss}',
          '!**/node_modules/**',
          '!**/dist/**',
          '!**/build/**'
        ]
      },
      backend: {
        port: process.env.BACKEND_PORT || 5000,
        script: 'npm run dev',
        cwd: './server',
        watchPatterns: [
          'src/**/*.{js,ts}',
          'controllers/**/*.{js,ts}',
          '!**/node_modules/**',
          '!**/dist/**'
        ]
      }
    };
  }

  // Start all development processes
  async start() {
    if (this.isRunning) {
      console.log('🚀 Development automation is already running');
      return;
    }

    console.log('🚀 Starting intelligent development automation...');
    this.isRunning = true;

    try {
      // Start frontend
      await this.startFrontend();
      
      // Start backend
      await this.startBackend();
      
      // Start monitoring
      await this.startMonitoring();
      
      // Start intelligent file watching
      this.startIntelligentWatching();
      
      console.log('✅ Development automation started successfully!');
      console.log('📱 Frontend: http://localhost:' + this.config.frontend.port);
      console.log('🔧 Backend: http://localhost:' + this.config.backend.port);
      console.log('📊 Monitor: http://localhost:3002/dashboard');
      
    } catch (error) {
      console.error('❌ Error starting development automation:', error);
      this.isRunning = false;
    }
  }

  // Start frontend development server
  async startFrontend() {
    console.log('🌐 Starting frontend development server...');
    
    const frontendProcess = spawn(this.config.frontend.script, [], {
      shell: true,
      cwd: this.config.frontend.cwd,
      stdio: 'pipe',
      env: { ...process.env, NODE_ENV: 'development' }
    });

    this.processes.set('frontend', frontendProcess);

    // Handle frontend output
    frontendProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('ready')) {
        console.log('✅ Frontend server ready');
      }
      process.stdout.write(`[FRONTEND] ${output}`);
    });

    frontendProcess.stderr.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Error') || output.includes('Failed')) {
        console.error(`❌ Frontend error: ${output}`);
        this.handleFrontendError();
      }
      process.stderr.write(`[FRONTEND ERROR] ${output}`);
    });

    frontendProcess.on('close', (code) => {
      if (code !== 0) {
        console.log(`❌ Frontend process exited with code ${code}`);
        this.restartFrontend();
      }
    });

    // Wait for frontend to be ready
    await this.waitForService('frontend', this.config.frontend.port);
  }

  // Start backend development server
  async startBackend() {
    console.log('🔧 Starting backend development server...');
    
    const backendProcess = spawn(this.config.backend.script, [], {
      shell: true,
      cwd: this.config.backend.cwd,
      stdio: 'pipe',
      env: { ...process.env, NODE_ENV: 'development' }
    });

    this.processes.set('backend', backendProcess);

    // Handle backend output
    backendProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('listening') || output.includes('ready')) {
        console.log('✅ Backend server ready');
      }
      process.stdout.write(`[BACKEND] ${output}`);
    });

    backendProcess.stderr.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Error') || output.includes('Failed')) {
        console.error(`❌ Backend error: ${output}`);
        this.handleBackendError();
      }
      process.stderr.write(`[BACKEND ERROR] ${output}`);
    });

    backendProcess.on('close', (code) => {
      if (code !== 0) {
        console.log(`❌ Backend process exited with code ${code}`);
        this.restartBackend();
      }
    });

    // Wait for backend to be ready
    await this.waitForService('backend', this.config.backend.port);
  }

  // Start monitoring dashboard
  async startMonitoring() {
    console.log('📊 Starting monitoring dashboard...');
    
    const monitorProcess = spawn('node', ['scripts/monitor.js'], {
      shell: true,
      cwd: './',
      stdio: 'pipe',
      env: { ...process.env, NODE_ENV: 'development' }
    });

    this.processes.set('monitor', monitorProcess);

    monitorProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('running on port')) {
        console.log('✅ Monitoring dashboard ready');
      }
      process.stdout.write(`[MONITOR] ${output}`);
    });

    monitorProcess.stderr.on('data', (data) => {
      process.stderr.write(`[MONITOR ERROR] ${data}`);
    });
  }

  // Intelligent file watching with smart reloading
  startIntelligentWatching() {
    console.log('👀 Starting intelligent file watching...');

    // Watch frontend files
    const frontendWatcher = chokidar.watch(this.config.frontend.watchPatterns, {
      ignored: /node_modules|dist|build|\.git/,
      persistent: true,
      ignoreInitial: true
    });

    this.watchers.set('frontend', frontendWatcher);

    frontendWatcher
      .on('add', (filePath) => this.handleFileChange('frontend', 'add', filePath))
      .on('change', (filePath) => this.handleFileChange('frontend', 'change', filePath))
      .on('unlink', (filePath) => this.handleFileChange('frontend', 'unlink', filePath));

    // Watch backend files
    const backendWatcher = chokidar.watch(this.config.backend.watchPatterns, {
      ignored: /node_modules|dist/,
      persistent: true,
      ignoreInitial: true
    });

    this.watchers.set('backend', backendWatcher);

    backendWatcher
      .on('add', (filePath) => this.handleFileChange('backend', 'add', filePath))
      .on('change', (filePath) => this.handleFileChange('backend', 'change', filePath))
      .on('unlink', (filePath) => this.handleFileChange('backend', 'unlink', filePath));
  }

  // Handle file changes intelligently
  async handleFileChange(service, event, filePath) {
    const fileName = path.basename(filePath);
    const fileExt = path.extname(filePath);
    
    console.log(`📝 [${service.toUpperCase()}] ${event}: ${fileName}`);

    // Determine if restart is needed based on file type and change
    const needsRestart = this.shouldRestart(service, event, filePath);
    
    if (needsRestart) {
      console.log(`🔄 Restarting ${service} due to ${fileName} change...`);
      await this.restartService(service);
    } else {
      console.log(`✅ ${fileName} change handled (no restart needed)`);
    }
  }

  // Determine if service restart is needed
  shouldRestart(service, event, filePath) {
    const fileName = path.basename(filePath);
    const fileExt = path.extname(filePath);
    
    // Always restart for certain file types
    if (fileExt === '.ts' || fileExt === '.js') {
      return true;
    }
    
    // Restart for configuration changes
    if (fileName.includes('config') || fileName.includes('package.json')) {
      return true;
    }
    
    // Don't restart for style changes (frontend handles hot reload)
    if (service === 'frontend' && (fileExt === '.css' || fileExt === '.scss')) {
      return false;
    }
    
    // Don't restart for certain file types
    if (fileExt === '.md' || fileExt === '.txt' || fileExt === '.log') {
      return false;
    }
    
    return true;
  }

  // Restart a specific service
  async restartService(service) {
    try {
      const process = this.processes.get(service);
      if (process) {
        process.kill('SIGTERM');
        await this.wait(1000); // Wait for graceful shutdown
        
        if (service === 'frontend') {
          await this.startFrontend();
        } else if (service === 'backend') {
          await this.startBackend();
        }
      }
    } catch (error) {
      console.error(`❌ Error restarting ${service}:`, error);
    }
  }

  // Restart frontend
  async restartFrontend() {
    console.log('🔄 Restarting frontend...');
    await this.restartService('frontend');
  }

  // Restart backend
  async restartBackend() {
    console.log('🔄 Restarting backend...');
    await this.restartService('backend');
  }

  // Handle frontend errors intelligently
  async handleFrontendError() {
    console.log('🔧 Attempting to fix frontend error...');
    
    try {
      // Try to install dependencies if needed
      await this.runCommand('npm install', this.config.frontend.cwd);
      
      // Clear cache
      await this.runCommand('npm run clean', this.config.frontend.cwd);
      
      // Restart frontend
      await this.restartFrontend();
      
    } catch (error) {
      console.error('❌ Failed to fix frontend error:', error);
    }
  }

  // Handle backend errors intelligently
  async handleBackendError() {
    console.log('🔧 Attempting to fix backend error...');
    
    try {
      // Try to install dependencies if needed
      await this.runCommand('npm install', this.config.backend.cwd);
      
      // Clear build
      await this.runCommand('npm run clean', this.config.backend.cwd);
      
      // Restart backend
      await this.restartBackend();
      
    } catch (error) {
      console.error('❌ Failed to fix backend error:', error);
    }
  }

  // Wait for service to be ready
  async waitForService(service, port) {
    return new Promise((resolve) => {
      const maxAttempts = 30;
      let attempts = 0;
      
      const checkService = async () => {
        try {
          const response = await fetch(`http://localhost:${port}/health`);
          if (response.ok) {
            console.log(`✅ ${service} health check passed`);
            resolve();
            return;
          }
        } catch (error) {
          // Service not ready yet
        }
        
        attempts++;
        if (attempts >= maxAttempts) {
          console.log(`⚠️ ${service} health check timeout, continuing anyway...`);
          resolve();
          return;
        }
        
        setTimeout(checkService, 1000);
      };
      
      setTimeout(checkService, 2000); // Start checking after 2 seconds
    });
  }

  // Run a command
  async runCommand(command, cwd) {
    return new Promise((resolve, reject) => {
      exec(command, { cwd }, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  // Wait utility
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Stop all processes
  async stop() {
    console.log('🛑 Stopping development automation...');
    this.isRunning = false;

    // Stop all processes
    for (const [name, process] of this.processes) {
      console.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
    }

    // Stop all watchers
    for (const [name, watcher] of this.watchers) {
      console.log(`🛑 Stopping ${name} watcher...`);
      watcher.close();
    }

    // Wait for processes to close
    await this.wait(2000);
    
    console.log('✅ Development automation stopped');
  }

  // Get status of all services
  getStatus() {
    const status = {};
    
    for (const [name, process] of this.processes) {
      status[name] = {
        running: !process.killed,
        pid: process.pid,
        exitCode: process.exitCode
      };
    }
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const automation = new DevAutomation();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await automation.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await automation.stop();
    process.exit(0);
  });
  
  // Start automation
  automation.start().catch(console.error);
}

module.exports = DevAutomation;