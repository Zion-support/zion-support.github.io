#!/usr/bin/env node
/**
 * Cursor Chat Automation System
 * Continuously sends "proceed" commands to keep Cursor chat sessions active
 *
 * "Features": * - Automated chat session management
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
      "interval": config.interval || 30000, // 30 seconds default
      "maxSessions": config.maxSessions || 5,
      "logFile": config.logFile || 'cursor-chat-automation.log',
      "enableLogging": config.enableLogging !== false,
      "autoRestart": config.autoRestart !== false,
      ...config};
    this.sessions = new Map();
    this.isRunning = false;
    this.stats = {
      "totalCommands": 0,
      "successfulCommands": 0,
      "failedCommands": 0,
      "sessionsCreated": 0,
      "sessionsTerminated": 0,
      "startTime": null};
    this.log('Cursor Chat Automation initialized');
  }
  /**
   * Log messages with timestamp
   */
  log(message, level = 'INFO') {
    if (!this.config.enableLogging) return;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    try {
      fs.appendFileSync(this.config.logFile, logEntry + '\n');
    } catch (error) {
      console.error('Failed to write to log "file": ', error.message);
    }
  }
  /**
   * Create a new Cursor chat session
   */
  async createSession(sessionId, options = {}) {
    try {
      const sessionConfig = {
        "name": options.name || `Session-${sessionId}`,
        "interval": options.interval || this.config.interval,
        "autoProceed": options.autoProceed !== false,
        ...options};
      const session = {
        "id": sessionId,
        "config": sessionConfig,
        "status": 'active',
        "lastCommand": null,
        "commandCount": 0,
        "errors": 0,
        "createdAt": new Date(),
        "process": null};
      this.sessions.set(sessionId, session);
      this.stats.sessionsCreated++;
      this.log(`Session ${sessionId} "created": ${sessionConfig.name}`);
      if (sessionConfig.autoProceed) {
        this.startSessionAutomation(sessionId);
      }
      return session;
    } catch (error) {
      this.log(
        `Failed to create session ${sessionId}: ${error.message}`,
        'ERROR'
      );
      throw error;
    }
  }
  /**
   * Start automation for a specific session
   */
  startSessionAutomation(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session || session.status !== 'active') {
      this.log(
        `Cannot start automation for session ${sessionId}: session not found or inactive`,
        'WARN'
      );
      return;
    }
    const runSession = async () => {
      if (!this.isRunning || session.status !== 'active') {
        return;
      }
      try {
        await this.sendProceedCommand(sessionId);
        // Schedule next command
        setTimeout(() => runSession(), session.config.interval);
      } catch (error) {
        this.log(
          `Session ${sessionId} automation "error": ${error.message}`,
          'ERROR'
        );
        session.errors++;
        // Continue despite errors
        setTimeout(() => runSession(), session.config.interval);
      }
    };
    // Start the automation loop
    runSession();
    this.log(`Automation started for session ${sessionId}`);
  }
  /**
   * Send "proceed" command to a specific session
   */
  async sendProceedCommand(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`Session ${sessionId} not found`);
    }
    try {
      // Simulate sending "proceed" command to Cursor
      // This could be enhanced with actual Cursor API integration
      const command = 'proceed';
      // Log the command being sent
      this.log(`Sending "${command}" to session ${sessionId}`);
      // Update session stats
      session.lastCommand = new Date();
      session.commandCount++;
      this.stats.totalCommands++;
      // Simulate command execution (replace with actual Cursor integration)
      await this.executeCursorCommand(sessionId, command);
      this.stats.successfulCommands++;
      this.log(`Command sent successfully to session ${sessionId}`);
    } catch (error) {
      this.stats.failedCommands++;
      session.errors++;
      this.log(
        `Failed to send command to session ${sessionId}: ${error.message}`,
        'ERROR'
      );
      throw error;
    }
  }
  /**
   * Execute a command in Cursor (placeholder for actual integration)
   */
  async executeCursorCommand(sessionId, command) {
    // This is a placeholder for actual Cursor integration
    // In a real implementation, this "would": // 1. Connect to Cursor's API or CLI
    // 2. Send the command to the specific chat session
    // 3. Handle the response
    // For now, we'll simulate the process
    return new Promise((resolve, reject) => {
      // Simulate network delay
      const delay = Math.random() * 1000 + 500;
      setTimeout(() => {
        // Simulate occasional failures
        if (Math.random() < 0.05) {
          // 5% failure rate
          reject(new Error('Simulated command failure'));
        } else {
          resolve({ "success": true, sessionId, command });
        }
      }, delay);
    });
  }
  /**
   * Start the automation system
   */
  start() {
    if (this.isRunning) {
      this.log('Automation system already running', 'WARN');
      return;
    }
    this.isRunning = true;
    this.stats.startTime = new Date();
    this.log('Cursor Chat Automation system started');
    // Start automation for all active sessions
    for (const [sessionId, session] of this.sessions) {
      if (session.status === 'active' && session.config.autoProceed) {
        this.startSessionAutomation(sessionId);
      }
    }
    // Start health monitoring
    this.startHealthMonitoring();
  }
  /**
   * Stop the automation system
   */
  stop() {
    this.isRunning = false;
    this.log('Cursor Chat Automation system stopped');
  }
  /**
   * Start health monitoring
   */
  startHealthMonitoring() {
    const healthCheck = () => {
      if (!this.isRunning) return;
      this.log(`Health "check": ${this.sessions.size} active sessions`);
      // Check for stuck sessions
      for (const [sessionId, session] of this.sessions) {
        if (session.status === 'active') {
          const timeSinceLastCommand =
            Date.now() - (session.lastCommand?.getTime() || 0);
          const maxDelay = session.config.interval * 3;
          if (timeSinceLastCommand > maxDelay) {
            this.log(
              `Session ${sessionId} appears stuck, restarting automation`,
              'WARN'
            );
            this.startSessionAutomation(sessionId);
          }
        }
      }
      // Schedule next health check
      setTimeout(healthCheck, 60000); // Every minute
    };
    healthCheck();
  }
  /**
   * Get system statistics
   */
  getStats() {
    const uptime = this.stats.startTime
      ? Date.now() - this.stats.startTime.getTime()
      : 0;
    return {
      ...this.stats,
      uptime,
      "uptimeFormatted": this.formatUptime(uptime),
      "activeSessions": Array.from(this.sessions.values()).filter(
        s => s.status === 'active'
      ).length,
      "totalSessions": this.sessions.size};
  }
  /**
   * Format uptime in human readable format
   */
  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }
  /**
   * Terminate a session
   */
  terminateSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      this.log(`Session ${sessionId} not found for termination`, 'WARN');
      return false;
    }
    session.status = 'terminated';
    this.stats.sessionsTerminated++;
    this.log(`Session ${sessionId} terminated`);`    return true;
  }
  /**
   * Get session information
   */
  getSessionInfo(sessionId) {
    return this.sessions.get(sessionId);
  }
  /**
   * List all sessions
   */
  listSessions() {
    return Array.from(this.sessions.entries()).map(([id, session]) => ({
      id,
      "name": session.config.name,
      "status": session.status,
      "commandCount": session.commandCount,
      "errors": session.errors,
      "createdAt": session.createdAt,
      "lastCommand": session.lastCommand}));
  }
}
// CLI interface
if (require.main === module) {
  const automation = new CursorChatAutomation({
    "interval": 30000, // 30 seconds
    "maxSessions": 3,
    "enableLogging": true,
    "autoRestart": true});
  // Create some sample sessions
  automation.createSession('main-chat', {
    "name": 'Main Development Chat',
    "interval": 25000});
  automation.createSession('code-review', {
    "name": 'Code Review Assistant',
    "interval": 35000});
  automation.createSession('bug-fixes', {
    "name": 'Bug Fixes Helper',
    "interval": 40000});
  // Start the automation
  automation.start();
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\nShutting down Cursor Chat Automation...');
    automation.stop();
    const stats = automation.getStats();
    console.log('\nFinal "Statistics": ');
    console.log(JSON.stringify(stats, null, 2));
    process.exit(0);
  });
  // Keep the process alive
  setInterval(() => {
    const stats = automation.getStats();
    console.log(
      `\n[${new Date().toISOString()}] "Status": ${stats.activeSessions} active sessions, ${stats.totalCommands} commands sent`
    );
  }, 60000); // Status update every minute
}
module.exports = CursorChatAutomation;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { exec } = require('child_process'); const { promisify } = require('util'); const execAsync = promisify(exec); class CursorChatAutomation { constructor(config = {}) { this.config = { interval: config.interval || 30000,maxSessions: config.maxSessions || 5,logFile: config.logFile || 'cursor-chat-automation.log',enableLogging: config.enableLogging !== false,autoRestart: config.autoRestart !== false,...config,}; this.sessions = new Map(); this.isRunning = false; this.stats = { totalCommands: 0,successfulCommands: 0,failedCommands: 0,sessionsCreated: 0,sessionsTerminated: 0,startTime: null,}; this.log('Cursor Chat Automation initialized')} log(message,level = 'INFO') { if (!this.config.enableLogging) return; const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}`; console.log(logEntry); try { fs.appendFileSync(this.config.logFile,logEntry + '\n')} catch (error) { console.error('Failed to write to log file:',error.message)} } async createSession(sessionId,options = {}) { try { const sessionConfig = { name: options.name || `Session-${sessionId}`,interval: options.interval || this.config.interval,autoProceed: options.autoProceed !== false,...options,}; const session = { id: sessionId,config: sessionConfig,status: 'active',lastCommand: null,commandCount: 0,errors: 0,createdAt: new Date(),process: null,}; this.sessions.set(sessionId,session); this.stats.sessionsCreated++; this.log(`Session ${sessionId} created: ${sessionConfig.name}`); if (sessionConfig.autoProceed) { this.startSessionAutomation(sessionId)} return session} catch (error) { this.log( `Failed to create session ${sessionId}: ${error.message}`,'ERROR' ); throw error} } startSessionAutomation(sessionId) { const session = this.sessions.get(sessionId); if (!session || session.status !== 'active') { this.log( `Cannot start automation for session ${sessionId}: session not found or inactive`,'WARN' ); return} const runSession = async () => { if (!this.isRunning || session.status !== 'active') { return} try { await this.sendProceedCommand(sessionId); setTimeout(() => runSession(),session.config.interval)} catch (error) { this.log( `Session ${sessionId} automation error: ${error.message}`,'ERROR' ); session.errors++; setTimeout(() => runSession(),session.config.interval)} }; runSession(); this.log(`Automation started for session ${sessionId}`)} async sendProceedCommand(sessionId) { const session = this.sessions.get(sessionId); if (!session) { throw new Error(`Session ${sessionId} not found`)} try { const command = 'proceed'; this.log(`Sending "${command}" to session ${sessionId}`); session.lastCommand = new Date(); session.commandCount++; this.stats.totalCommands++; await this.executeCursorCommand(sessionId,command); this.stats.successfulCommands++; this.log(`Command sent successfully to session ${sessionId}`)} catch (error) { this.stats.failedCommands++; session.errors++; this.log( `Failed to send command to session ${sessionId}: ${error.message}`,'ERROR' ); throw error} } async executeCursorCommand(sessionId,command) { return new Promise((resolve,reject) => { const delay = Math.random() * 1000 + 500; setTimeout(() => { if (Math.random() < 0.05) { reject(new Error('Simulated command failure'))} else { resolve({ success: true,sessionId,command })} },delay)})} start() { if (this.isRunning) { this.log('Automation system already running','WARN'); return} this.isRunning = true; this.stats.startTime = new Date(); this.log('Cursor Chat Automation system started'); for (const [sessionId,session] of this.sessions) { if (session.status === 'active' && session.config.autoProceed) { this.startSessionAutomation(sessionId)} } this.startHealthMonitoring()} stop() { this.isRunning = false; this.log('Cursor Chat Automation system stopped')} startHealthMonitoring() { const healthCheck = () => { if (!this.isRunning) return; this.log(`Health check: ${this.sessions.size} active sessions`); for (const [sessionId,session] of this.sessions) { if (session.status === 'active') { const timeSinceLastCommand = Date.now() - (session.lastCommand?.getTime() || 0); const maxDelay = session.config.interval * 3; if (timeSinceLastCommand > maxDelay) { this.log( `Session ${sessionId} appears stuck,restarting automation`,'WARN' ); this.startSessionAutomation(sessionId)} } } setTimeout(healthCheck,60000)}; healthCheck()} getStats() { const uptime = this.stats.startTime ? Date.now() - this.stats.startTime.getTime() : 0; return { ...this.stats,uptime,uptimeFormatted: this.formatUptime(uptime),activeSessions: Array.from(this.sessions.values()).filter( s => s.status === 'active' ).length,totalSessions: this.sessions.size,}} formatUptime(ms) { const seconds = Math.floor(ms / 1000); const minutes = Math.floor(seconds / 60); const hours = Math.floor(minutes / 60); const days = Math.floor(hours / 24); if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`; if (hours > 0) return `${hours}h ${minutes % 60}m`; if (minutes > 0) return `${minutes}m ${seconds % 60}s`; return `${seconds}s`} terminateSession(sessionId) { const session = this.sessions.get(sessionId); if (!session) { this.log(`Session ${sessionId} not found for termination`,'WARN'); return false} session.status = 'terminated'; this.stats.sessionsTerminated++; this.log(`Session ${sessionId} terminated`); return true} getSessionInfo(sessionId) { return this.sessions.get(sessionId)} listSessions() { return Array.from(this.sessions.entries()).map(([id,session]) => ({ id,name: session.config.name,status: session.status,commandCount: session.commandCount,errors: session.errors,createdAt: session.createdAt,lastCommand: session.lastCommand,}))} } if (require.main === module) { const automation = new CursorChatAutomation({ interval: 30000,maxSessions: 3,enableLogging: true,autoRestart: true,}); automation.createSession('main-chat',{ name: 'Main Development Chat',interval: 25000,}); automation.createSession('code-review',{ name: 'Code Review Assistant',interval: 35000,}); automation.createSession('bug-fixes',{ name: 'Bug Fixes Helper',interval: 40000,}); automation.start(); process.on('SIGINT',() => { console.log('\nShutting down Cursor Chat Automation...'); automation.stop(); const stats = automation.getStats(); console.log('\nFinal Statistics:'); console.log(JSON.stringify(stats,null,2)); process.exit(0)}); setInterval(() => { const stats = automation.getStats(); console.log( `\n[${new Date().toISOString()}] Status: ${stats.activeSessions} active sessions,${stats.totalCommands} commands sent` )},60000)} module.exports = CursorChatAutomation;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { exec } = require('child_process'); const { promisify } = require('util'); const execAsync = promisify(exec); class CursorChatAutomation { constructor(config = {}) { this.config = { interval: config.interval || 30000,maxSessions: config.maxSessions || 5,logFile: config.logFile || 'cursor-chat-automation.log',enableLogging: config.enableLogging !== false,autoRestart: config.autoRestart !== false,...config,}; this.sessions = new Map(); this.isRunning = false; this.stats = { totalCommands: 0,successfulCommands: 0,failedCommands: 0,sessionsCreated: 0,sessionsTerminated: 0,startTime: null,}; this.log('Cursor Chat Automation initialized')} log(message,level = 'INFO') { if (!this.config.enableLogging) return; const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}`; console.log(logEntry); try { fs.appendFileSync(this.config.logFile,logEntry + '\n')} catch (error) { console.error('Failed to write to log file:',error.message)} } async createSession(sessionId,options = {}) { try { const sessionConfig = { name: options.name || `Session-${sessionId}`,interval: options.interval || this.config.interval,autoProceed: options.autoProceed !== false,...options,}; const session = { id: sessionId,config: sessionConfig,status: 'active',lastCommand: null,commandCount: 0,errors: 0,createdAt: new Date(),process: null,}; this.sessions.set(sessionId,session); this.stats.sessionsCreated++; this.log(`Session ${sessionId} created: ${sessionConfig.name}`); if (sessionConfig.autoProceed) { this.startSessionAutomation(sessionId)} return session} catch (error) { this.log( `Failed to create session ${sessionId}: ${error.message}`,'ERROR' ); throw error} } startSessionAutomation(sessionId) { const session = this.sessions.get(sessionId); if (!session || session.status !== 'active') { this.log( `Cannot start automation for session ${sessionId}: session not found or inactive`,'WARN' ); return} const runSession = async () => { if (!this.isRunning || session.status !== 'active') { return} try { await this.sendProceedCommand(sessionId); setTimeout(() => runSession(),session.config.interval)} catch (error) { this.log( `Session ${sessionId} automation error: ${error.message}`,'ERROR' ); session.errors++; setTimeout(() => runSession(),session.config.interval)} }; runSession(); this.log(`Automation started for session ${sessionId}`)} async sendProceedCommand(sessionId) { const session = this.sessions.get(sessionId); if (!session) { throw new Error(`Session ${sessionId} not found`)} try { const command = 'proceed'; this.log(`Sending "${command}" to session ${sessionId}`); session.lastCommand = new Date(); session.commandCount++; this.stats.totalCommands++; await this.executeCursorCommand(sessionId,command); this.stats.successfulCommands++; this.log(`Command sent successfully to session ${sessionId}`)} catch (error) { this.stats.failedCommands++; session.errors++; this.log( `Failed to send command to session ${sessionId}: ${error.message}`,'ERROR' ); throw error} } async executeCursorCommand(sessionId,command) { return new Promise((resolve,reject) => { const delay = Math.random() * 1000 + 500; setTimeout(() => { if (Math.random() < 0.05) { reject(new Error('Simulated command failure'))} else { resolve({ success: true,sessionId,command })} },delay)})} start() { if (this.isRunning) { this.log('Automation system already running','WARN'); return} this.isRunning = true; this.stats.startTime = new Date(); this.log('Cursor Chat Automation system started'); for (const [sessionId,session] of this.sessions) { if (session.status === 'active' && session.config.autoProceed) { this.startSessionAutomation(sessionId)} } this.startHealthMonitoring()} stop() { this.isRunning = false; this.log('Cursor Chat Automation system stopped')} startHealthMonitoring() { const healthCheck = () => { if (!this.isRunning) return; this.log(`Health check: ${this.sessions.size} active sessions`); for (const [sessionId,session] of this.sessions) { if (session.status === 'active') { const timeSinceLastCommand = Date.now() - (session.lastCommand?.getTime() || 0); const maxDelay = session.config.interval * 3; if (timeSinceLastCommand > maxDelay) { this.log( `Session ${sessionId} appears stuck,restarting automation`,'WARN' ); this.startSessionAutomation(sessionId)} } } setTimeout(healthCheck,60000)}; healthCheck()} getStats() { const uptime = this.stats.startTime ? Date.now() - this.stats.startTime.getTime() : 0; return { ...this.stats,uptime,uptimeFormatted: this.formatUptime(uptime),activeSessions: Array.from(this.sessions.values()).filter( s => s.status === 'active' ).length,totalSessions: this.sessions.size,}} formatUptime(ms) { const seconds = Math.floor(ms / 1000); const minutes = Math.floor(seconds / 60); const hours = Math.floor(minutes / 60); const days = Math.floor(hours / 24); if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`; if (hours > 0) return `${hours}h ${minutes % 60}m`; if (minutes > 0) return `${minutes}m ${seconds % 60}s`; return `${seconds}s`} terminateSession(sessionId) { const session = this.sessions.get(sessionId); if (!session) { this.log(`Session ${sessionId} not found for termination`,'WARN'); return false} session.status = 'terminated'; this.stats.sessionsTerminated++; this.log(`Session ${sessionId} terminated`); return true} getSessionInfo(sessionId) { return this.sessions.get(sessionId)} listSessions() { return Array.from(this.sessions.entries()).map(([id,session]) => ({ id,name: session.config.name,status: session.status,commandCount: session.commandCount,errors: session.errors,createdAt: session.createdAt,lastCommand: session.lastCommand,}))} } if (require.main === module) { const automation = new CursorChatAutomation({ interval: 30000,maxSessions: 3,enableLogging: true,autoRestart: true,}); automation.createSession('main-chat',{ name: 'Main Development Chat',interval: 25000,}); automation.createSession('code-review',{ name: 'Code Review Assistant',interval: 35000,}); automation.createSession('bug-fixes',{ name: 'Bug Fixes Helper',interval: 40000,}); automation.start(); process.on('SIGINT',() => { console.log('\nShutting down Cursor Chat Automation...'); automation.stop(); const stats = automation.getStats(); console.log('\nFinal Statistics:'); console.log(JSON.stringify(stats,null,2)); process.exit(0)}); setInterval(() => { const stats = automation.getStats(); console.log( `\n[${new Date().toISOString()}] Status: ${stats.activeSessions} active sessions,${stats.totalCommands} commands sent` )},60000)} module.exports = CursorChatAutomation;
