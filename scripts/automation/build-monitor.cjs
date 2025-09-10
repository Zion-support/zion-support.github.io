#!/""usr/bin/env"" node;
=======
#!/"usr/bin/env" node;
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

<<<<<<< HEAD;
const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

class BuildMonitor {
  constructor() {

    this.projectRoot = '/workspace';
    this.logDir = path.join(this.projectRoot, 'logs');
    this.checkInterval = 10 * 60 * 1000; // 10 minutes;
    this.isRunning = false;
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
    
    this.ensureDirectories();
    this.setupSignalHandlers();
  }

  ensureDirectories() {

    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });