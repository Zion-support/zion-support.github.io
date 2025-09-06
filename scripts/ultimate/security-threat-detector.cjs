#!/usr/bin/env node
/**
 * Advanced Security Threat Detection System
 * Proactive security monitoring with AI-powered threat detection
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

class AdvancedSecurityThreatDetector {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'security-threat-detector.log');
    this.threatsFile = path.join(this.projectRoot, 'logs', 'security-threats.json');
    this.patternsFile = path.join(this.projectRoot, 'logs', 'threat-patterns.json');
    
    this.threatDatabase = {
      threats: [],
      patterns: new Map(),
      signatures: new Map(),
      anomalies: [],
      blockedIPs: new Set(),
      suspiciousProcesses: new Set()
    };
    
    this.securityRules = {
      maxFailedAttempts: 5,
      suspiciousMemoryThreshold: 1024 * 1024 * 1024, // 1GB
      suspiciousCpuThreshold: 90,
      maxFileSize: 100 * 1024 * 1024, // 100MB
      scanInterval: 60000, // 1 minute
      threatLevels: {
        LOW: 1,
        MEDIUM: 2,
        HIGH: 3,
        CRITICAL: 4
      }
    };
    
    this.threatPatterns = {
      // Memory-based threats
      memoryLeak: {
        pattern: /memory.*leak|heap.*overflow|out.*of.*memory/i,
        severity: 'HIGH',
        action: 'restart_process'
      },
      
      // CPU-based threats
      cpuSpike: {
        pattern: /cpu.*usage.*100|cpu.*spike|high.*cpu/i,
        severity: 'MEDIUM',
        action: 'throttle_process'
      },
      
      // Network-based threats
      suspiciousConnection: {
        pattern: /connection.*refused|timeout|network.*error/i,
        severity: 'MEDIUM',
        action: 'investigate_network'
      },
      
      // File system threats
      fileSystemError: {
        pattern: /file.*not.*found|permission.*denied|disk.*full/i,
        severity: 'LOW',
        action: 'check_filesystem'
      },
      
      // Security threats
      unauthorizedAccess: {
        pattern: /unauthorized|forbidden|access.*denied|permission.*denied/i,
        severity: 'HIGH',
        action: 'block_access'
      },
      
      // Malware indicators
      malwareSignature: {
        pattern: /malware|virus|trojan|backdoor|rootkit/i,
        severity: 'CRITICAL',
        action: 'quarantine_process'
      },
      
      // Injection attacks
      injectionAttack: {
        pattern: /sql.*injection|xss|script.*injection|command.*injection/i,
        severity: 'CRITICAL',
        action: 'block_request'
      },
      
      // Brute force attacks
      bruteForce: {
        pattern: /too.*many.*attempts|brute.*force|rate.*limit/i,
        severity: 'HIGH',
        action: 'rate_limit'
      }
    };
    
    this.ensureLogsDirectory();
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await fs.mkdir(path.join(this.projectRoot, 'scripts', 'ultimate'), { recursive: true });
      await this.loadThreatDatabase();
    } catch (error) {
      console.log('Directories already exist or created');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }

  async loadThreatDatabase() {
    try {
      const threatsData = await fs.readFile(this.threatsFile, 'utf8');
      const parsed = JSON.parse(threatsData);
      
      this.threatDatabase.threats = parsed.threats || [];
      this.threatDatabase.patterns = new Map(parsed.patterns || []);
      this.threatDatabase.signatures = new Map(parsed.signatures || []);
      this.threatDatabase.anomalies = parsed.anomalies || [];
      this.threatDatabase.blockedIPs = new Set(parsed.blockedIPs || []);
      this.threatDatabase.suspiciousProcesses = new Set(parsed.suspiciousProcesses || []);
      
      this.log(`🛡️ Loaded threat database: ${this.threatDatabase.threats.length} threats, ${this.threatDatabase.patterns.size} patterns`);
    } catch (error) {
      this.log('🛡️ No existing threat database found, starting fresh');
    }
  }

  async saveThreatDatabase() {
    try {
      const data = {
        threats: this.threatDatabase.threats,
        patterns: Array.from(this.threatDatabase.patterns.entries()),
        signatures: Array.from(this.threatDatabase.signatures.entries()),
        anomalies: this.threatDatabase.anomalies,
        blockedIPs: Array.from(this.threatDatabase.blockedIPs),
        suspiciousProcesses: Array.from(this.threatDatabase.suspiciousProcesses),
        lastUpdated: new Date().toISOString()
      };
      
      await fs.writeFile(this.threatsFile, JSON.stringify(data, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save threat database: ${error.message}`, 'ERROR');
    }
  }

  async initialize() {
    this.log('🛡️ Initializing Advanced Security Threat Detection System...');
    
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to PM2: ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        
        this.log('✅ Connected to PM2 for security monitoring');
        this.startThreatDetection();
        resolve();
      });
    });
  }

  startThreatDetection() {
    this.log('🛡️ Starting threat detection system...');
    
    // Continuous threat scanning
    setInterval(async () => {
      await this.performThreatScan();
    }, this.securityRules.scanInterval);

    // Process monitoring every 30 seconds
    setInterval(async () => {
      await this.monitorProcesses();
    }, 30000);

    // Log analysis every 2 minutes
    setInterval(async () => {
      await this.analyzeLogs();
    }, 120000);

    // Network monitoring every 5 minutes
    setInterval(async () => {
      await this.monitorNetwork();
    }, 300000);

    // File system monitoring every 10 minutes
    setInterval(async () => {
      await this.monitorFileSystem();
    }, 600000);

    // Threat database update every hour
    setInterval(async () => {
      await this.updateThreatDatabase();
    }, 3600000);
  }

  async performThreatScan() {
    this.log('🔍 Performing comprehensive threat scan...');
    
    try {
      const processes = await this.getProcessList();
      const threats = [];
      
      // Scan each process for threats
      for (const process of processes) {
        const processThreats = await this.scanProcess(process);
        threats.push(...processThreats);
      }
      
      // Scan system for threats
      const systemThreats = await this.scanSystem();
      threats.push(...systemThreats);
      
      // Process detected threats
      for (const threat of threats) {
        await this.processThreat(threat);
      }
      
      this.log(`🔍 Threat scan completed: ${threats.length} threats detected`);
      
    } catch (error) {
      this.log(`❌ Threat scan failed: ${error.message}`, 'ERROR');
    }
  }

  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
        } else {
          resolve(processes);
        }
      });
    });
  }

  async scanProcess(process) {
    const threats = [];
    
    // Check memory usage
    if (process.monit.memory > this.securityRules.suspiciousMemoryThreshold) {
      threats.push({
        type: 'memory_anomaly',
        severity: 'HIGH',
        process: process.name,
        details: `High memory usage: ${Math.round(process.monit.memory / 1024 / 1024)}MB`,
        timestamp: Date.now()
      });
    }
    
    // Check CPU usage
    if (process.monit.cpu > this.securityRules.suspiciousCpuThreshold) {
      threats.push({
        type: 'cpu_anomaly',
        severity: 'MEDIUM',
        process: process.name,
        details: `High CPU usage: ${process.monit.cpu}%`,
        timestamp: Date.now()
      });
    }
    
    // Check restart frequency
    if (process.pm2_env.restart_time > 10) {
      threats.push({
        type: 'instability',
        severity: 'MEDIUM',
        process: process.name,
        details: `High restart count: ${process.pm2_env.restart_time}`,
        timestamp: Date.now()
      });
    }
    
    // Check process uptime
    const uptime = Date.now() - process.pm2_env.pm_uptime;
    if (uptime > 7 * 24 * 60 * 60 * 1000) { // 7 days
      threats.push({
        type: 'long_running',
        severity: 'LOW',
        process: process.name,
        details: `Process running for ${Math.round(uptime / 1000 / 60 / 60)} hours`,
        timestamp: Date.now()
      });
    }
    
    return threats;
  }

  async scanSystem() {
    const threats = [];
    
    try {
      // Check system resources
      const os = require('os');
      const totalMemory = os.totalmem();
      const freeMemory = os.freemem();
      const memoryUsage = (totalMemory - freeMemory) / totalMemory;
      
      if (memoryUsage > 0.9) {
        threats.push({
          type: 'system_memory_high',
          severity: 'HIGH',
          details: `System memory usage: ${(memoryUsage * 100).toFixed(2)}%`,
          timestamp: Date.now()
        });
      }
      
      // Check disk space
      const { execSync } = require('child_process');
      const diskUsage = execSync('df -h /', { encoding: 'utf8' });
      const usageMatch = diskUsage.match(/(\d+)%/);
      
      if (usageMatch && parseInt(usageMatch[1]) > 90) {
        threats.push({
          type: 'disk_space_low',
          severity: 'HIGH',
          details: `Disk usage: ${usageMatch[1]}%`,
          timestamp: Date.now()
        });
      }
      
      // Check for suspicious network connections
      const netstat = execSync('netstat -tuln', { encoding: 'utf8' });
      const suspiciousPorts = this.analyzeNetworkConnections(netstat);
      
      for (const port of suspiciousPorts) {
        threats.push({
          type: 'suspicious_port',
          severity: 'MEDIUM',
          details: `Suspicious port open: ${port}`,
          timestamp: Date.now()
        });
      }
      
    } catch (error) {
      this.log(`❌ System scan failed: ${error.message}`, 'ERROR');
    }
    
    return threats;
  }

  analyzeNetworkConnections(netstatOutput) {
    const suspiciousPorts = [];
    const lines = netstatOutput.split('\n');
    
    for (const line of lines) {
      // Look for suspicious ports (common attack vectors)
      const suspiciousPortPatterns = [
        /:22\s/, // SSH
        /:23\s/, // Telnet
        /:135\s/, // RPC
        /:139\s/, // NetBIOS
        /:445\s/, // SMB
        /:1433\s/, // SQL Server
        /:3389\s/, // RDP
        /:5432\s/, // PostgreSQL
        /:6379\s/, // Redis
        /:27017\s/ // MongoDB
      ];
      
      for (const pattern of suspiciousPortPatterns) {
        if (pattern.test(line)) {
          const portMatch = line.match(/:(\d+)\s/);
          if (portMatch) {
            suspiciousPorts.push(portMatch[1]);
          }
        }
      }
    }
    
    return [...new Set(suspiciousPorts)]; // Remove duplicates
  }

  async processThreat(threat) {
    this.log(`🚨 Processing threat: ${threat.type} (${threat.severity}) - ${threat.details}`);
    
    // Add to threat database
    this.threatDatabase.threats.push(threat);
    
    // Take appropriate action based on threat type and severity
    await this.takeThreatAction(threat);
    
    // Update threat patterns
    this.updateThreatPatterns(threat);
    
    // Generate alert if severity is high or critical
    if (threat.severity === 'HIGH' || threat.severity === 'CRITICAL') {
      await this.generateSecurityAlert(threat);
    }
  }

  async takeThreatAction(threat) {
    try {
      switch (threat.type) {
        case 'memory_anomaly':
          await this.handleMemoryThreat(threat);
          break;
        case 'cpu_anomaly':
          await this.handleCpuThreat(threat);
          break;
        case 'instability':
          await this.handleInstabilityThreat(threat);
          break;
        case 'system_memory_high':
          await this.handleSystemMemoryThreat(threat);
          break;
        case 'disk_space_low':
          await this.handleDiskSpaceThreat(threat);
          break;
        case 'suspicious_port':
          await this.handleSuspiciousPortThreat(threat);
          break;
        default:
          this.log(`❓ Unknown threat type: ${threat.type}`, 'WARN');
      }
    } catch (error) {
      this.log(`❌ Failed to handle threat: ${error.message}`, 'ERROR');
    }
  }

  async handleMemoryThreat(threat) {
    this.log(`💾 Handling memory threat for ${threat.process}`);
    
    // Restart the process to free memory
    await this.restartProcess(threat.process);
    
    // Add to suspicious processes
    this.threatDatabase.suspiciousProcesses.add(threat.process);
  }

  async handleCpuThreat(threat) {
    this.log(`⚡ Handling CPU threat for ${threat.process}`);
    
    // Throttle the process
    await this.throttleProcess(threat.process);
  }

  async handleInstabilityThreat(threat) {
    this.log(`🔄 Handling instability threat for ${threat.process}`);
    
    // Restart with optimized settings
    await this.restartProcessWithOptimization(threat.process);
  }

  async handleSystemMemoryThreat(threat) {
    this.log(`🖥️ Handling system memory threat`);
    
    // Clean up system resources
    await this.cleanupSystemResources();
  }

  async handleDiskSpaceThreat(threat) {
    this.log(`💿 Handling disk space threat`);
    
    // Clean up old logs and temporary files
    await this.cleanupDiskSpace();
  }

  async handleSuspiciousPortThreat(threat) {
    this.log(`🔌 Handling suspicious port threat: ${threat.details}`);
    
    // Block the suspicious port
    await this.blockSuspiciousPort(threat.details);
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.restart(processName, (err) => {
        if (err) {
          reject(err);
        } else {
          this.log(`✅ Restarted process: ${processName}`);
          resolve();
        }
      });
    });
  }

  async throttleProcess(processName) {
    // Reduce process priority or limit resources
    pm2.reload(processName, {
      max_memory_restart: '512M',
      instances: 1
    }, (err) => {
      if (err) {
        this.log(`❌ Failed to throttle ${processName}: ${err.message}`, 'ERROR');
      } else {
        this.log(`✅ Throttled process: ${processName}`);
      }
    });
  }

  async restartProcessWithOptimization(processName) {
    // Restart with optimized settings
    pm2.reload(processName, {
      max_memory_restart: '1G',
      max_restarts: 5,
      min_uptime: '10s',
      instances: 1
    }, (err) => {
      if (err) {
        this.log(`❌ Failed to optimize restart ${processName}: ${err.message}`, 'ERROR');
      } else {
        this.log(`✅ Optimized restart for process: ${processName}`);
      }
    });
  }

  async cleanupSystemResources() {
    this.log('🧹 Cleaning up system resources...');
    
    try {
      // Force garbage collection
      if (global.gc) {
        global.gc();
        this.log('🗑️ Forced garbage collection');
      }
      
      // Clear PM2 logs
      execSync('pm2 flush', { stdio: 'pipe' });
      this.log('📝 Cleared PM2 logs');
      
    } catch (error) {
      this.log(`❌ System cleanup failed: ${error.message}`, 'ERROR');
    }
  }

  async cleanupDiskSpace() {
    this.log('💿 Cleaning up disk space...');
    
    try {
      // Clean up old logs
      const logDir = path.join(this.projectRoot, 'logs');
      const files = await fs.readdir(logDir);
      const now = Date.now();
      const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days
      
      for (const file of files) {
        const filePath = path.join(logDir, file);
        const stats = await fs.stat(filePath);
        
        if (now - stats.mtime.getTime() > maxAge) {
          await fs.unlink(filePath);
          this.log(`🗑️ Cleaned up old log file: ${file}`);
        }
      }
      
      // Clean up temporary files
      execSync('find /tmp -name "*.tmp" -mtime +1 -delete', { stdio: 'pipe' });
      this.log('🗑️ Cleaned up temporary files');
      
    } catch (error) {
      this.log(`❌ Disk cleanup failed: ${error.message}`, 'ERROR');
    }
  }

  async blockSuspiciousPort(portDetails) {
    this.log(`🚫 Blocking suspicious port: ${portDetails}`);
    
    try {
      // Extract port number from details
      const portMatch = portDetails.match(/(\d+)/);
      if (portMatch) {
        const port = portMatch[1];
        
        // Block port using iptables (requires root privileges)
        execSync(`iptables -A INPUT -p tcp --dport ${port} -j DROP`, { stdio: 'pipe' });
        this.log(`🚫 Blocked port ${port}`);
      }
    } catch (error) {
      this.log(`❌ Failed to block port: ${error.message}`, 'ERROR');
    }
  }

  updateThreatPatterns(threat) {
    const patternKey = `${threat.type}_${threat.severity}`;
    const currentCount = this.threatDatabase.patterns.get(patternKey) || 0;
    this.threatDatabase.patterns.set(patternKey, currentCount + 1);
    
    // If pattern occurs frequently, mark as high priority
    if (currentCount > 5) {
      this.log(`⚠️ Frequent threat pattern detected: ${patternKey} (${currentCount + 1} occurrences)`);
    }
  }

  async generateSecurityAlert(threat) {
    this.log(`🚨 GENERATING SECURITY ALERT: ${threat.type} - ${threat.severity}`);
    
    const alert = {
      timestamp: new Date().toISOString(),
      type: threat.type,
      severity: threat.severity,
      details: threat.details,
      process: threat.process,
      action: 'IMMEDIATE_ATTENTION_REQUIRED'
    };
    
    // Save alert to file
    const alertFile = path.join(this.projectRoot, 'logs', `security-alert-${Date.now()}.json`);
    await fs.writeFile(alertFile, JSON.stringify(alert, null, 2));
    
    // Send notification (in a real implementation, this would send to monitoring system)
    this.log(`📧 Security alert saved to: ${alertFile}`);
  }

  async monitorProcesses() {
    this.log('👁️ Monitoring processes for security threats...');
    
    try {
      const processes = await this.getProcessList();
      
      for (const process of processes) {
        // Check for suspicious process behavior
        if (this.threatDatabase.suspiciousProcesses.has(process.name)) {
          this.log(`⚠️ Monitoring suspicious process: ${process.name}`);
          
          // Additional monitoring for suspicious processes
          await this.performDeepProcessAnalysis(process);
        }
      }
      
    } catch (error) {
      this.log(`❌ Process monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async performDeepProcessAnalysis(process) {
    // Analyze process in detail for security threats
    const analysis = {
      processName: process.name,
      memoryUsage: process.monit.memory,
      cpuUsage: process.monit.cpu,
      uptime: process.pm2_env.pm_uptime,
      restarts: process.pm2_env.restart_time,
      timestamp: Date.now()
    };
    
    // Check for memory leaks
    if (process.monit.memory > 500 * 1024 * 1024) { // 500MB
      this.log(`🔍 Deep analysis: ${process.name} shows high memory usage`);
    }
    
    // Check for CPU spikes
    if (process.monit.cpu > 80) {
      this.log(`🔍 Deep analysis: ${process.name} shows high CPU usage`);
    }
    
    // Store analysis
    this.threatDatabase.anomalies.push(analysis);
  }

  async analyzeLogs() {
    this.log('📝 Analyzing logs for security threats...');
    
    try {
      const logDir = path.join(this.projectRoot, 'logs');
      const files = await fs.readdir(logDir);
      const logFiles = files.filter(file => file.endsWith('.log'));
      
      for (const logFile of logFiles) {
        await this.analyzeLogFile(path.join(logDir, logFile));
      }
      
    } catch (error) {
      this.log(`❌ Log analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeLogFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const lines = content.split('\n');
      
      for (const line of lines) {
        // Check for threat patterns in logs
        for (const [patternName, pattern] of Object.entries(this.threatPatterns)) {
          if (pattern.pattern.test(line)) {
            const threat = {
              type: patternName,
              severity: pattern.severity,
              details: `Pattern detected in ${path.basename(filePath)}: ${line.substring(0, 100)}...`,
              timestamp: Date.now(),
              source: 'log_analysis'
            };
            
            await this.processThreat(threat);
          }
        }
      }
      
    } catch (error) {
      this.log(`❌ Failed to analyze log file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async monitorNetwork() {
    this.log('🌐 Monitoring network for security threats...');
    
    try {
      // Check for suspicious network activity
      const netstat = execSync('netstat -tuln', { encoding: 'utf8' });
      const suspiciousConnections = this.analyzeNetworkConnections(netstat);
      
      if (suspiciousConnections.length > 0) {
        this.log(`🚨 Detected ${suspiciousConnections.length} suspicious network connections`);
        
        for (const port of suspiciousConnections) {
          const threat = {
            type: 'suspicious_network',
            severity: 'MEDIUM',
            details: `Suspicious port open: ${port}`,
            timestamp: Date.now()
          };
          
          await this.processThreat(threat);
        }
      }
      
    } catch (error) {
      this.log(`❌ Network monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async monitorFileSystem() {
    this.log('📁 Monitoring file system for security threats...');
    
    try {
      // Check for suspicious file modifications
      const projectFiles = await this.scanProjectFiles();
      
      for (const file of projectFiles) {
        if (this.isSuspiciousFile(file)) {
          const threat = {
            type: 'suspicious_file',
            severity: 'MEDIUM',
            details: `Suspicious file detected: ${file}`,
            timestamp: Date.now()
          };
          
          await this.processThreat(threat);
        }
      }
      
    } catch (error) {
      this.log(`❌ File system monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async scanProjectFiles() {
    const files = [];
    
    try {
      const scanDir = async (dir) => {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
            await scanDir(fullPath);
          } else if (entry.isFile()) {
            files.push(fullPath);
          }
        }
      };
      
      await scanDir(this.projectRoot);
      
    } catch (error) {
      this.log(`❌ File scanning failed: ${error.message}`, 'ERROR');
    }
    
    return files;
  }

  isSuspiciousFile(filePath) {
    const suspiciousPatterns = [
      /\.exe$/i,
      /\.bat$/i,
      /\.cmd$/i,
      /\.scr$/i,
      /\.pif$/i,
      /\.com$/i,
      /\.vbs$/i,
      /\.js$/i,
      /\.jar$/i,
      /\.war$/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(filePath));
  }

  async updateThreatDatabase() {
    this.log('🔄 Updating threat database...');
    
    try {
      // Clean up old threats (keep only last 1000)
      if (this.threatDatabase.threats.length > 1000) {
        this.threatDatabase.threats = this.threatDatabase.threats.slice(-1000);
      }
      
      // Clean up old anomalies (keep only last 500)
      if (this.threatDatabase.anomalies.length > 500) {
        this.threatDatabase.anomalies = this.threatDatabase.anomalies.slice(-500);
      }
      
      // Save updated database
      await this.saveThreatDatabase();
      
      this.log('✅ Threat database updated successfully');
      
    } catch (error) {
      this.log(`❌ Threat database update failed: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      await this.initialize();
      this.log('🎯 Advanced Security Threat Detection System is now running');
      
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Security Threat Detection System...');
        await this.saveThreatDatabase();
        pm2.disconnect();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the detector
if (require.main === module) {
  const detector = new AdvancedSecurityThreatDetector();
  detector.run();
}

module.exports = AdvancedSecurityThreatDetector;