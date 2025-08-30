#!/usr/bin/env node

/**
 * Cursor Chat Automation System
 * Continuously sends "proceed" commands to keep Cursor chat sessions active
 * 
 * Features:
 * - Automated chat session management
 * - Configurable intervals and patterns
 * - Session health monitoring
 * - Logging and error handling
 * - Multiple chat session support
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class CursorChatAutomation {
  constructor(config = {}) {
    this.config = {
      interval: config.interval || 30000, // 30 seconds default
      maxSessions: config.maxSessions || 5,
      logFile: config.logFile || 'cursor-chat-automation.log',
      enableLogging: config.enableLogging !== false,
      autoRestart: config.autoRestart !== false,
      healthCheckInterval: config.healthCheckInterval || 60000,
      maxRetries: config.maxRetries || 3,
      retryDelay: config.retryDelay || 5000
    };
    
    this.sessions = new Map();
    this.isRunning = false;
    this.healthCheckTimer = null;
    this.mainTimer = null;
    this.retryCount = 0;
    
    this.setupLogging();
  }

  setupLogging() {
    if (!this.config.enableLogging) return;
    
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    if (this.config.enableLogging) {
      fs.appendFileSync(this.config.logFile, logMessage + '\n');
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('Automation is already running', 'WARN');
      return;
    }

    this.log('Starting Cursor Chat Automation System...', 'INFO');
    this.isRunning = true;

    try {
      // Start main automation loop
      await this.startMainLoop();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      this.log('Cursor Chat Automation System started successfully', 'INFO');
    } catch (error) {
      this.log(`Failed to start automation: ${error.message}`, 'ERROR');
      this.isRunning = false;
      throw error;
    }
  }

  async startMainLoop() {
    const runAutomation = async () => {
      if (!this.isRunning) return;

      try {
        await this.processAllSessions();
        this.retryCount = 0; // Reset retry count on success
      } catch (error) {
        this.retryCount++;
        this.log(`Main loop error (attempt ${this.retryCount}): ${error.message}`, 'ERROR');
        
        if (this.retryCount >= this.config.maxRetries) {
          this.log('Max retries reached, stopping automation', 'ERROR');
          await this.stop();
          return;
        }
        
        // Wait before retry
        setTimeout(() => {
          if (this.isRunning) {
            this.startMainLoop();
          }
        }, this.config.retryDelay);
        return;
      }

      // Schedule next run
      this.mainTimer = setTimeout(() => {
        if (this.isRunning) {
          this.startMainLoop();
        }
      }, this.config.interval);
    };

    await runAutomation();
  }

  async processAllSessions() {
    const sessionPromises = Array.from(this.sessions.values()).map(session => 
      this.processSession(session)
    );
    
    await Promise.allSettled(sessionPromises);
  }

  async processSession(session) {
    try {
      this.log(`Processing session: ${session.name}`, 'DEBUG');
      
      // Send proceed command
      await this.sendProceedCommand(session);
      
      // Update session stats
      session.lastActivity = new Date();
      session.messageCount++;
      
      this.log(`Session ${session.name} processed successfully`, 'DEBUG');
    } catch (error) {
      this.log(`Session ${session.name} error: ${error.message}`, 'ERROR');
      session.errorCount++;
      
      if (session.errorCount >= this.config.maxRetries) {
        this.log(`Session ${session.name} exceeded error limit, removing`, 'WARN');
        this.sessions.delete(session.id);
      }
    }
  }

  async sendProceedCommand(session) {
    // Simulate sending "proceed" command to Cursor
    // In a real implementation, this would interact with Cursor's interface
    
    const commands = session.commands || ['proceed', 'continue', 'next'];
    const command = commands[Math.floor(Math.random() * commands.length)];
    
    this.log(`Sending command "${command}" to session ${session.name}`, 'DEBUG');
    
    // Simulate command processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Simulate success/failure
    if (Math.random() > 0.1) { // 90% success rate
      this.log(`Command "${command}" sent successfully to ${session.name}`, 'DEBUG');
    } else {
      throw new Error(`Failed to send command "${command}"`);
    }
  }

  startHealthMonitoring() {
    this.healthCheckTimer = setInterval(() => {
      if (!this.isRunning) return;
      
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    try {
      this.log('Performing health check...', 'DEBUG');
      
      // Check session health
      const healthySessions = Array.from(this.sessions.values()).filter(session => 
        session.errorCount < this.config.maxRetries
      );
      
      if (healthySessions.length === 0) {
        this.log('No healthy sessions found, restarting automation', 'WARN');
        await this.restart();
        return;
      }
      
      // Check system resources
      const memoryUsage = process.memoryUsage();
      if (memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
        this.log('High memory usage detected, performing garbage collection', 'WARN');
        global.gc && global.gc();
      }
      
      this.log(`Health check passed: ${healthySessions.length} healthy sessions`, 'DEBUG');
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async restart() {
    this.log('Restarting Cursor Chat Automation System...', 'INFO');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.start();
  }

  async stop() {
    this.log('Stopping Cursor Chat Automation System...', 'INFO');
    
    this.isRunning = false;
    
    if (this.mainTimer) {
      clearTimeout(this.mainTimer);
      this.mainTimer = null;
    }
    
    if (this.healthCheckTimer) {
      clearInterval(this.healthCheckTimer);
      this.healthCheckTimer = null;
    }
    
    this.log('Cursor Chat Automation System stopped', 'INFO');
  }

  addSession(sessionConfig) {
    const session = {
      id: sessionConfig.id || `session-${Date.now()}`,
      name: sessionConfig.name || 'Unnamed Session',
      interval: sessionConfig.interval || this.config.interval,
      commands: sessionConfig.commands || ['proceed'],
      autoProceed: sessionConfig.autoProceed !== false,
      priority: sessionConfig.priority || 'normal',
      lastActivity: new Date(),
      messageCount: 0,
      errorCount: 0,
      ...sessionConfig
    };
    
    this.sessions.set(session.id, session);
    this.log(`Added session: ${session.name} (ID: ${session.id})`, 'INFO');
    
    return session.id;
  }

  removeSession(sessionId) {
    if (this.sessions.has(sessionId)) {
      const session = this.sessions.get(sessionId);
      this.sessions.delete(sessionId);
      this.log(`Removed session: ${session.name} (ID: ${sessionId})`, 'INFO');
      return true;
    }
    return false;
  }

  getSessionStats() {
    const stats = {
      totalSessions: this.sessions.size,
      running: this.isRunning,
      uptime: this.startTime ? Date.now() - this.startTime : 0,
      sessions: Array.from(this.sessions.values()).map(session => ({
        id: session.id,
        name: session.name,
        messageCount: session.messageCount,
        errorCount: session.errorCount,
        lastActivity: session.lastActivity,
        status: session.errorCount >= this.config.maxRetries ? 'error' : 'healthy'
      }))
    };
    
    return stats;
  }
}

// CLI interface
if (require.main === module) {
  const automation = new CursorChatAutomation();
  
  // Add some default sessions
  automation.addSession({
    id: 'main-dev',
    name: 'Main Development Chat',
    commands: ['proceed', 'continue', 'next']
  });
  
  automation.addSession({
    id: 'code-review',
    name: 'Code Review Assistant',
    commands: ['proceed', 'review', 'analyze']
  });
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\nReceived SIGINT, shutting down...');
    await automation.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\nReceived SIGTERM, shutting down...');
    await automation.stop();
    process.exit(0);
  });
  
  // Start automation
  automation.start().catch(error => {
    console.error('Failed to start automation:', error);
    process.exit(1);
  });
}

module.exports = CursorChatAutomation;
