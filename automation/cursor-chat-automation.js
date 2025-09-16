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
    this.log(`Session ${sessionId} terminated`);
    return true;
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
=======

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


/**
 * Cursor Chat Automation System
 * 
 * Manages todos and queues for all future Cursor chats:
 * - Automatic todo creation from chat interactions
 * - Queue management for pending tasks
 * - Priority-based task scheduling
 * - Integration with project management
 * - Automated follow-up and reminders
 */

const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');

class CursorChatAutomation extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      dataDir: config.dataDir || './data/cursor-chats',
      todoFile: config.todoFile || './data/todos.json',
      queueFile: config.queueFile || './data/queue.json',
      autoCreateTodos: config.autoCreateTodos !== false,
      autoQueueTasks: config.autoQueueTasks !== false,
      priorityLevels: config.priorityLevels || ['low', 'medium', 'high', 'critical'],
      maxQueueSize: config.maxQueueSize || 100,
      ...config
    };
    
    this.isRunning = false;
    this.todos = new Map();
    this.queue = [];
    this.chatHistory = [];
    this.patterns = this.initializePatterns();
  }

  async initialize() {
    logger.info('🤖 Initializing Cursor Chat Automation...');
    
    try {
      // Ensure data directory exists
      await this.ensureDataDirectory();
      
      // Load existing data
      await this.loadData();
      
      // Start monitoring
      this.startMonitoring();
      
      this.isRunning = true;
      logger.info('✅ Cursor Chat Automation initialized');
      
    } catch (error) {
      logger.error('❌ Failed to initialize Cursor Chat Automation:', error);
      throw error;
    }
  }

  async ensureDataDirectory() {
    try {
      await fs.mkdir(this.config.dataDir, { recursive: true });
      await fs.mkdir(path.dirname(this.config.todoFile), { recursive: true });
      await fs.mkdir(path.dirname(this.config.queueFile), { recursive: true });
    } catch (error) {
      logger.error('Error creating data directories:', error);
    }
  }

  async loadData() {
    try {
      // Load todos
      try {
        const todoData = await fs.readFile(this.config.todoFile, 'utf8');
        const todos = JSON.parse(todoData);
        this.todos = new Map(Object.entries(todos));
      } catch (error) {
        logger.info('No existing todos found, starting fresh');
      }

      // Load queue
      try {
        const queueData = await fs.readFile(this.config.queueFile, 'utf8');
        this.queue = JSON.parse(queueData);
      } catch (error) {
        logger.info('No existing queue found, starting fresh');
      }

      // Load chat history
      try {
        const chatFiles = await fs.readdir(this.config.dataDir);
        for (const file of chatFiles) {
          if (file.endsWith('.json')) {
            const chatData = await fs.readFile(path.join(this.config.dataDir, file), 'utf8');
            const chat = JSON.parse(chatData);
            this.chatHistory.push(chat);
          }
        }
      } catch (error) {
        logger.info('No existing chat history found');
      }

    } catch (error) {
      logger.error('Error loading data:', error);
    }
  }

  initializePatterns() {
    return {
      todoPatterns: [
        {
          pattern: /(?:TODO|FIXME|BUG|HACK|NOTE|XXX|FIX|REVIEW|OPTIMIZE|REFACTOR)/gi,
          priority: 'medium',
          type: code_todo
        },
        {
          pattern: /(?:need to|should|must|have to|got to|gotta)\s+(?:implement|add|create|fix|update|improve|optimize|refactor)/gi,
          priority: 'high',
          type: action_item
        },
        {
          pattern: /(?:error|bug|issue|problem|broken|not working|failing)/gi,
          priority: 'critical',
          type: bug_fix
        },
        {
          pattern: /(?:feature|enhancement|improvement|upgrade|update)/gi,
          priority: 'medium',
          type: feature_request
        },
        {
          pattern: /(?:test|testing|unit test|integration test|e2e test)/gi,
          priority: 'low',
          type: testing
        },
        {
          pattern: /(?:documentation|docs|readme|comment|explain)/gi,
          priority: 'low',
          type: documentation
        },
        {
          pattern: /(?:performance|speed|optimization|efficiency)/gi,
          priority: 'medium',
          type: performance
        },
        {
          pattern: /(?:security|vulnerability|secure|protect)/gi,
          priority: 'high',
          type: security
        }
      ],
      queuePatterns: [
        {
          pattern: /(?:queue|schedule|plan|roadmap|milestone|sprint)/gi,
          type: planning
        },
        {
          pattern: /(?:next|later|future|upcoming|pending|waiting)/gi,
          type: deferred
        },
        {
          pattern: /(?:blocked|dependency|waiting for|requires)/gi,
          type: blocked
        }
      ]
    };
  }

  startMonitoring() {
    logger.info('👀 Starting Cursor chat monitoring...');
    
    // Monitor for new chat interactions
    setInterval(async () => {
      if (this.isRunning) {
        await this.processNewChats();
      }
    }, 30000); // Every 30 seconds

    // Process queue
    setInterval(async () => {
      if (this.isRunning) {
        await this.processQueue();
      }
    }, 60000); // Every minute

    // Generate reports
    setInterval(async () => {
      if (this.isRunning) {
        await this.generateReport();
      }
    }, 3600000); // Every hour
  }

  async processNewChats() {
    try {
      // This would integrate with Cursor's API or file system
      // For now, we'll simulate processing
      const newChats = await this.detectNewChats();
      
      for (const chat of newChats) {
        await this.processChat(chat);
      }
    } catch (error) {
      logger.error('Error processing new chats:', error);
    }
  }

  async detectNewChats() {
    // This would detect new chat files or API responses
    // For now, return empty array
    return [];
  }

  async processChat(chat) {
    logger.info(`📝 Processing chat: ${chat.id}`);
    
    // Extract todos from chat content
    const todos = this.extractTodos(chat.content);
    
    // Extract queue items
    const queueItems = this.extractQueueItems(chat.content);
    
    // Create todos
    for (const todo of todos) {
      await this.createTodo(todo, chat);
    }
    
    // Add to queue
    for (const item of queueItems) {
      await this.addToQueue(item, chat);
    }
    
    // Save chat to history
    this.chatHistory.push(chat);
    await this.saveChatHistory();
  }

  extractTodos(content) {
    const todos = [];
    
    for (const pattern of this.patterns.todoPatterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        for (const match of matches) {
          const context = this.extractContext(content, match);
          todos.push({
            id: this.generateId(),
            text: match,
            priority: pattern.priority,
            type: pattern.type,
            context: context,
            timestamp: new Date().toISOString(),
            status: pending
          });
        }
      }
    }
    
    return todos;
  }

  extractQueueItems(content) {
    const items = [];
    
    for (const pattern of this.patterns.queuePatterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        for (const match of matches) {
          const context = this.extractContext(content, match);
          items.push({
            id: this.generateId(),
            text: match,
            type: pattern.type,
            context: context,
            timestamp: new Date().toISOString(),
            status: queued
          });
        }
      }
    }
    
    return items;
  }

  extractContext(content, match, contextSize = 100) {
    const index = content.indexOf(match);
    const start = Math.max(0, index - contextSize);
    const end = Math.min(content.length, index + match.length + contextSize);
    return content.substring(start, end).trim();
  }

  async createTodo(todo, chat) {
    if (!this.config.autoCreateTodos) return;
    
    this.todos.set(todo.id, {
      ...todo,
      chatId: chat.id,
      chatTimestamp: chat.timestamp,
      source: cursor_chat
    });
    
    await this.saveTodos();
    
    logger.info(`✅ Created todo: ${todo.text} (${todo.priority})`);
    this.emit('todoCreated', todo);
  }

  async addToQueue(item, chat) {
    if (!this.config.autoQueueTasks) return;
    
    if (this.queue.length >= this.config.maxQueueSize) {
      logger.warn('⚠️ Queue is full, removing oldest item');
      this.queue.shift();
    }
    
    this.queue.push({
      ...item,
      chatId: chat.id,
      chatTimestamp: chat.timestamp,
      source: cursor_chat
    });
    
    await this.saveQueue();
    
    logger.info(`📋 Added to queue: ${item.text} (${item.type})`);
    this.emit('itemQueued', item);
  }

  async processQueue() {
    if (this.queue.length === 0) return;
    
    logger.info(`🔄 Processing ${this.queue.length} items in queue...`);
    
    // Sort by priority and timestamp
    this.queue.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const aPriority = priorityOrder[a.priority] || 2;
      const bPriority = priorityOrder[b.priority] || 2;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    
    // Process top items
    const itemsToProcess = this.queue.splice(0, 5); // Process 5 items at a time
    
    for (const item of itemsToProcess) {
      await this.processQueueItem(item);
    }
    
    await this.saveQueue();
  }

  async processQueueItem(item) {
    logger.info(`⚡ Processing queue item: ${item.text}`);
    
    try {
      // This would integrate with project management tools
      // For now, we'll just mark as processed
      item.status = processed';
      item.processedAt = new Date().toISOString();
      
      // Create a todo from queue item if it's actionable
      if (this.isActionable(item)) {
        const todo = {
          id: this.generateId(),
          text: item.text,
          priority: this.determinePriority(item),
          type: item.type,
          context: item.context,
          timestamp: new Date().toISOString(),
          status: 'pending',
          source: queue_processing
        };
        
        await this.createTodo(todo, { id: 'queue', timestamp: new Date().toISOString() });
      }
      
      this.emit('itemProcessed', item);
      
    } catch (error) {
      logger.error(`Error processing queue item: ${error.message}`);
      item.status = failed';
      item.error = error.message;
    }
  }

  isActionable(item) {
    const actionableTypes = ['action_item', bug_fix', feature_request', performance'];
    return actionableTypes.includes(item.type);
  }

  determinePriority(item) {
    // Determine priority based on type and content
    if (item.type === 'bug_fix') return critical';
    if (item.type === 'security') return high';
    if (item.type === 'performance') return medium';
    return low';
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      todos: {
        total: this.todos.size,
        byPriority: this.getTodosByPriority(),
        byType: this.getTodosByType(),
        byStatus: this.getTodosByStatus()
      },
      queue: {
        total: this.queue.length,
        byType: this.getQueueByType(),
        byStatus: this.getQueueByStatus()
      },
      chats: {
        total: this.chatHistory.length,
        recent: this.chatHistory.slice(-10)
      }
    };
    
    const reportFile = path.join(this.config.dataDir, `report-${Date.now()}.json`);
    await fs.writeFile(reportFile, JSON.stringify(report, null, 2));
    
    logger.info(`📊 Generated report: ${reportFile}`);
    this.emit('reportGenerated', report);
  }

  getTodosByPriority() {
    const byPriority = {};
    for (const [id, todo] of this.todos) {
      byPriority[todo.priority] = (byPriority[todo.priority] || 0) + 1;
    }
    return byPriority;
  }

  getTodosByType() {
    const byType = {};
    for (const [id, todo] of this.todos) {
      byType[todo.type] = (byType[todo.type] || 0) + 1;
    }
    return byType;
  }

  getTodosByStatus() {
    const byStatus = {};
    for (const [id, todo] of this.todos) {
      byStatus[todo.status] = (byStatus[todo.status] || 0) + 1;
    }
    return byStatus;
  }

  getQueueByType() {
    const byType = {};
    for (const item of this.queue) {
      byType[item.type] = (byType[item.type] || 0) + 1;
    }
    return byType;
  }

  getQueueByStatus() {
    const byStatus = {};
    for (const item of this.queue) {
      byStatus[item.status] = (byStatus[item.status] || 0) + 1;
    }
    return byStatus;
  }

  async saveTodos() {
    const todosObj = Object.fromEntries(this.todos);
    await fs.writeFile(this.config.todoFile, JSON.stringify(todosObj, null, 2));
  }

  async saveQueue() {
    await fs.writeFile(this.config.queueFile, JSON.stringify(this.queue, null, 2));
  }

  async saveChatHistory() {
    const historyFile = path.join(this.config.dataDir, 'chat-history.json');
    await fs.writeFile(historyFile, JSON.stringify(this.chatHistory, null, 2));
  }

  generateId() {
    return `cursor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      todosCount: this.todos.size,
      queueLength: this.queue.length,
      chatHistoryLength: this.chatHistory.length,
      lastActivity: this.chatHistory.length > 0 
        ? this.chatHistory[this.chatHistory.length - 1].timestamp 
        : null
    };
  }

  stop() {
    logger.info('🛑 Stopping Cursor Chat Automation...');
    this.isRunning = false;
  }
}

// Export the class
module.exports = CursorChatAutomation;

// Run if called directly
if (require.main === module) {
  const automation = new CursorChatAutomation();
  
  automation.initialize().catch(error => {
    logger.error('Failed to initialize Cursor Chat Automation:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    logger.info('\n🛑 Shutting down Cursor Chat Automation...');
    automation.stop();
    process.exit(0);
  });
} 
