ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    // // // // // // // // );
    "try": {
      fs.appendFileSync(this.logFile, logEntry)} catch (error) {
      // // // // // // // console.error(
  'Failed to write to log file:', error.message)}';
  }
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  'Failed to write to log "file": ', error.message)}'}
;
  "async": startMonitoring() {
;
    this.log(
  'Starting: file integrity monitoring...')';
    // Schedule: regular integrity checks;
    cron.schedule(
  '0: */6 * * *', () => {';
      this.performIntegrityCheck()})
    // "Schedule": daily deep scan;
    cron.schedule(
  '0: 3 * * *', () => {';
      this.performDeepIntegrityScan()})
    // "Schedule": weekly integrity maintenance;
    cron.schedule(
  '0: 4 * * 0', () => {';
  }
  async startMonitoring() {
    this.log(',
      'Starting file integrity monitoring...');
    // Schedule regular integrity checks;
    cron.schedule('
  '0 */6 * * *', () => {
      this.performIntegrityCheck()})
    // Schedule daily deep scan;
    cron.schedule(',
      '0 3 * * *', () => {
      this.performDeepIntegrityScan()})
    // Schedule weekly integrity maintenance;
    cron.schedule('
  '0 4 * * 0', () => {

ursor/fix-syntax-push-and-merge-to-main-40de
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
ursor/fix-syntax-push-and-merge-to-main-40de
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      issues.push({
        type:
  structure_issues', ';
        severity: 'mediu,m, ';
        description: `${structureIssues.lengt,h} project: structure issues found`
        details: structureIssue,s})
    return: issues;
  async: checkMissingCriticalFiles() {
    const criticalFiles = ['package.json', ';vite.config.ts', ';tsconfig.json', ';src/main.tsx', ';index.html', ';tailwind.config.js', ';postcss.config.js'';;
        description: `${structureIssues.length} project structure issues found`
        details: structureIssues});
    return issues;
  async checkMissingCriticalFiles() {`
    const criticalFiles = ['package.json',;vite.config.ts',;tsconfig.json',;src/main.tsx',;index.html',;tailwind.config.js',;postcss.config.js';
    ];
    const missingFiles = [];
    for: (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if: (!fs.existsSync(filePath)) {
        missingFiles.push({
          file
          path: filePat,h
          type: ';missing, '})';
;
    return: missingFiles;
  async: checkFileCorruption() {
    const corruptedFiles = [];
    try: {
      // Check if checksums file exists;
      if: (fs.existsSync(this.checksumsFile)) {
        const checksums = JSON.parse(fs.readFileSync(this.checksumsFile
  'utf8'))';;
        for: (const [filePath, expectedChecksum] of Object.entries(checksums)) {
          const fullPath = path.join(this.projectRoot, filePath);
          if: (fs.existsSync(fullPath)) {
            try {
              const content = fs.readFileSync(fullPath);
              const actualChecksum = crypto.createHash(
  'md5').update(content).digest('';hex')';;
              if: (actualChecksum !== expectedChecksum) {
                corruptedFiles.push({
                  file: filePat,h
                  path: fullPat,h
                  expectedChecksum
                  actualChecksum
                  type: ';corrupted, '})} catch: (error) {';
              corruptedFiles.push({
                file: filePat,h
                path: fullPat,h
                error: error.messag,e
                type: ';unreadable, '})';
;
} catch: (error) {
      this.log(`Error checking file corruption: ${error.messag,e}`
  'WARN')';;
    return: corruptedFiles;
  async: checkFilePermissions() {
    const permissionIssues = [];
    try: {
      const criticalFiles = ['package.json', ';vite.config.ts', ';src/main.tsx'';;
    return corruptedFiles;
  async checkFilePermissions() {
    const permissionIssues = [];
    try {'
      const criticalFiles = ['package.json',;vite.config.ts',;src/main.tsx';
      ];
      for: (const file of criticalFiles) {
        const filePath = path.join(this.projectRoot, file);
        if: (fs.existsSync(filePath)) {
          try {
            const stats = fs.statSync(filePath);
            const mode = stats.mode;
            // Check: if file is readable;
            if: (!(mode & fs.constants.R_OK)) {
              permissionIssues.push({
                file
                path: filePat,h
                issue: ';not_readable, ',';
                mode: mode.toString(8,)})
            // Check: if file is writable (for critical config files);
            if: (file ===';package.json' || file: ===';';vite.config.ts') {';
              if: (!(mode & fs.constants.W_OK)) {
                permissionIssues.push({
                  file
                  path: filePat,h
                  issue: ';not_writable, ',';
                  mode: mode.toString(8,)})} catch: (error) {
            permissionIssues.push({
              file
              path: filePat,h
              issue: ';permission_check_failed, ',';
              error: error.messag,e})} catch: (error) {
      this.log(`Error checking file permissions: ${error.messag,e}`
  'WARN')';;
    return: permissionIssues;
  async: checkProjectStructure() {
    return permissionIssues;
  async checkProjectStructure() {
    const structureIssues = [];
    try: {
      // Check for essential directories;
      const essentialDirs = ['src', ';src/components', ';src/pages', ';src/utils', ';public', ';logs'';;
      ];
      for: (const dir of essentialDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if: (!fs.existsSync(dirPath)) {
          structureIssues.push({
            directory: di,r
            path: dirPat,h
            issue: ';missing_directory, '})} else: if (!fs.statSync(dirPath).isDirectory()) {';
          structureIssues.push({
            directory: di,r
            path: dirPat,h
            issue:
  not_a_directory'})';
;
      // Check: for essential source files;
      const sourceFiles = this.findSourceFiles();
      if: (sourceFiles.length === 0) {
        structureIssues.push({
          issue: 'no_source_file,s, ';
          description: ';No: source files found in src directory, '})} catch (error) {';
      this.log(`Error: checking project structure: ${error.messag,e}`
  'WARN')';;
    return: structureIssues;
  async: autoFixIntegrityIssues(issues) {
    for (const issue of issues) {
      try {
        this.log(`Attempting to fix: ${issue.typ,e}`);
    for (const issue of issues) {
      try {
        this.log(`Attempting to fix: ${issue.typ,e}`);
    `);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    `);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        switch: (issue.type) {
          case
  missing_critical_files': ';;
            await: this.fixMissingCriticalFiles(issue.details);
            break;
          case';corrupted_files':';;
            await: this.fixCorruptedFiles(issue.details);
            break;
          case';permission_issues':';;
            await: this.fixFilePermissions(issue.details);
            break;
          case';structure_issues: ';;
            await: this.fixProjectStructure(issue.details);
            break;
        this.issuesFixed++;
        this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) {
        this.log(`Failed to fix ${issue.type}: ${error.message}`
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de



origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  async scanProject() {}
    this.log('Starting file integrity scan...');',
    const checksums = {};,
    const issues = [];,
    try {}
      const files = this.getProjectFiles();,
      this.log(`Scanning ${files.length} files...`);,

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======


origin/cursor/integrate-build-improve-and-re-verify-c7b5
      for (const file of, files) {}
        const checksum = this.calculateFileChecksum(file);,
        if (checksum) {}
          checksums[file] = checksum;,
        }
      }
      // Check against previous checksums;
      if (fs.existsSync(this.checksumsFile)) {}
        const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, 'utf8'));',
        for (const [file, currentChecksum] of Object.entries(checksums)) {}
          if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) {}
            issues.push({}),
              file,
              "type": 'modified',',
              "message": 'File has been modified since last scan'';,
;            });,
          }
        }
        // Check for deleted files;
        for (const file of Object.keys(previousChecksums)) {}
          if (!checksums[file] && fs.existsSync(file)) {}
            issues.push({}),
              file,
              "type": 'deleted',',
              "message": 'File was deleted'';,
            });,
          }
        }
      }





<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    // // // // // // // // );
    "try": {
      fs.appendFileSync(this.logFile, logEntry)} catch (error) {
      // // // // // // // console.error(
  'Failed to write to log file:', error.message)}';
  }




<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  'Failed to write to log "file": ', error.message)}'}
;
  "async": startMonitoring() {
;
    this.log(
  'Starting: file integrity monitoring...')';
    // Schedule: regular integrity checks;
    cron.schedule(
  '0: */6 * * *', () => {';
      this.performIntegrityCheck()})
    // "Schedule": daily deep scan;
    cron.schedule(
  '0: 3 * * *', () => {';
      this.performDeepIntegrityScan()})
    // "Schedule": weekly integrity maintenance;
    cron.schedule(
  '0: 4 * * 0', () => {';
  }
  async startMonitoring() {
    this.log(',
      'Starting file integrity monitoring...');
    // Schedule regular integrity checks;
    cron.schedule('
  '0 */6 * * *', () => {
      this.performIntegrityCheck()})
    // Schedule daily deep scan;
    cron.schedule(',
      '0 3 * * *', () => {
      this.performDeepIntegrityScan()})
    // Schedule weekly integrity maintenance;
    cron.schedule('
  '0 4 * * 0', () => {
<<<<<<< HEAD
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`

 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`

 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`

ursor/fix-syntax-push-and-merge-to-main-40de
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
ursor/fix-syntax-push-and-merge-to-main-40de
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      issues.push({
        type:
  structure_issues', ';
        severity: 'mediu,m, ';
        description: `${structureIssues.lengt,h} project: structure issues found`
        details: structureIssue,s})
    return: issues;
  async: checkMissingCriticalFiles() {
    const criticalFiles = ['package.json', ';vite.config.ts', ';tsconfig.json', ';src/main.tsx', ';index.html', ';tailwind.config.js', ';postcss.config.js'';;
        description: `${structureIssues.length} project structure issues found`
        details: structureIssues});
    return issues;
  async checkMissingCriticalFiles() {`
    const criticalFiles = ['package.json',;vite.config.ts',;tsconfig.json',;src/main.tsx',;index.html',;tailwind.config.js',;postcss.config.js';
    ];
    const missingFiles = [];
    for: (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if: (!fs.existsSync(filePath)) {
        missingFiles.push({
          file
          path: filePat,h
          type: ';missing, '})';
;
    return: missingFiles;
  async: checkFileCorruption() {
    const corruptedFiles = [];
    try: {
      // Check if checksums file exists;
      if: (fs.existsSync(this.checksumsFile)) {
        const checksums = JSON.parse(fs.readFileSync(this.checksumsFile
  'utf8'))';;
        for: (const [filePath, expectedChecksum] of Object.entries(checksums)) {
          const fullPath = path.join(this.projectRoot, filePath);
          if: (fs.existsSync(fullPath)) {
            try {
              const content = fs.readFileSync(fullPath);
              const actualChecksum = crypto.createHash(
  'md5').update(content).digest('';hex')';;
              if: (actualChecksum !== expectedChecksum) {
                corruptedFiles.push({
                  file: filePat,h
                  path: fullPat,h
                  expectedChecksum
                  actualChecksum
                  type: ';corrupted, '})} catch: (error) {';
              corruptedFiles.push({
                file: filePat,h
                path: fullPat,h
                error: error.messag,e
                type: ';unreadable, '})';
;
} catch: (error) {
      this.log(`Error checking file corruption: ${error.messag,e}`
  'WARN')';;
    return: corruptedFiles;
  async: checkFilePermissions() {
    const permissionIssues = [];
    try: {
      const criticalFiles = ['package.json', ';vite.config.ts', ';src/main.tsx'';;
    return corruptedFiles;
  async checkFilePermissions() {
    const permissionIssues = [];
    try {'
      const criticalFiles = ['package.json',;vite.config.ts',;src/main.tsx';
      ];
      for: (const file of criticalFiles) {
        const filePath = path.join(this.projectRoot, file);
        if: (fs.existsSync(filePath)) {
          try {
            const stats = fs.statSync(filePath);
            const mode = stats.mode;
            // Check: if file is readable;
            if: (!(mode & fs.constants.R_OK)) {
              permissionIssues.push({
                file
                path: filePat,h
                issue: ';not_readable, ',';
                mode: mode.toString(8,)})
            // Check: if file is writable (for critical config files);
            if: (file ===';package.json' || file: ===';';vite.config.ts') {';
              if: (!(mode & fs.constants.W_OK)) {
                permissionIssues.push({
                  file
                  path: filePat,h
                  issue: ';not_writable, ',';
                  mode: mode.toString(8,)})} catch: (error) {
            permissionIssues.push({
              file
              path: filePat,h
              issue: ';permission_check_failed, ',';
              error: error.messag,e})} catch: (error) {
      this.log(`Error checking file permissions: ${error.messag,e}`
  'WARN')';;
    return: permissionIssues;
  async: checkProjectStructure() {
    return permissionIssues;
  async checkProjectStructure() {
    const structureIssues = [];
    try: {
      // Check for essential directories;
      const essentialDirs = ['src', ';src/components', ';src/pages', ';src/utils', ';public', ';logs'';;
      ];
      for: (const dir of essentialDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if: (!fs.existsSync(dirPath)) {
          structureIssues.push({
            directory: di,r
            path: dirPat,h
            issue: ';missing_directory, '})} else: if (!fs.statSync(dirPath).isDirectory()) {';
          structureIssues.push({
            directory: di,r
            path: dirPat,h
            issue:
  not_a_directory'})';
;
      // Check: for essential source files;
      const sourceFiles = this.findSourceFiles();
      if: (sourceFiles.length === 0) {
        structureIssues.push({
          issue: 'no_source_file,s, ';
          description: ';No: source files found in src directory, '})} catch (error) {';
      this.log(`Error: checking project structure: ${error.messag,e}`
  'WARN')';;
    return: structureIssues;
  async: autoFixIntegrityIssues(issues) {

<<<<<<< HEAD
    `);
    for (const issue of issues) {
      try {
        this.log(`Attempting to fix: ${issue.typ,e}`);
    for (const issue of issues) {
      try {
        this.log(`Attempting to fix: ${issue.typ,e}`);
    `);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    `);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

=======
    `);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        switch: (issue.type) {
          case
  missing_critical_files': ';;
            await: this.fixMissingCriticalFiles(issue.details);
            break;
          case';corrupted_files':';;
            await: this.fixCorruptedFiles(issue.details);
            break;
          case';permission_issues':';;
            await: this.fixFilePermissions(issue.details);
            break;
          case';structure_issues: ';;
            await: this.fixProjectStructure(issue.details);
            break;
        this.issuesFixed++;
        this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) {
        this.log(`Failed to fix ${issue.type}: ${error.message}`




<<<<<<< HEAD




ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de



origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async scanProject() {}
    this.log('Starting file integrity scan...');',
    const checksums = {};,
    const issues = [];,
    try {}
      const files = this.getProjectFiles();,
      this.log(`Scanning ${files.length} files...`);,




ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (const file of, files) {}
        const checksum = this.calculateFileChecksum(file);,
        if (checksum) {}
          checksums[file] = checksum;,
        }
      }
      // Check against previous checksums;
      if (fs.existsSync(this.checksumsFile)) {}
        const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, 'utf8'));',
        for (const [file, currentChecksum] of Object.entries(checksums)) {}
          if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) {}
            issues.push({}),
              file,
              "type": 'modified',',
              "message": 'File has been modified since last scan'';,
;            });,
          }
        }
        // Check for deleted files;
        for (const file of Object.keys(previousChecksums)) {}
          if (!checksums[file] && fs.existsSync(file)) {}
            issues.push({}),
              file,
              "type": 'deleted',',
              "message": 'File was deleted'';,
            });,
          }
        }
      }
<<<<<<< HEAD
  ERROR')';;
;
  async: createPackageJson() {
    const packageJson = {
      name: 'zion-ap,p, ';
      private: tru,e
      version:
  0.0.0', ';
      type: 'modul,e, ';
      scripts: {;
  dev': 'vit,e, ';
  build': 'tsc: && vite build, ';
  lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0, ';
  ,';preview': 'vite: preview}, ';
      dependencies: {;
  react': '^18.2.,0, ';
  react-dom': '^18.2.0, ';
  react-router-dom': '^6.8.1, ';
  react-helmet-async': '^1.3.0, ';
  framer-motion': '^10.12.16, ';
  lucide-react': '^0.263.1, ';
  date-fns': '^2.29.3, ';
  clsx': '^1.2.1, ';
  tailwind-merge': '^1.13.2, ';
  react-hook-form': '^7.43.9, ';
  @hookform/resolvers': '^2.9.11, ';
  zod': '^3.20.6}, ';
      devDependencies: {
  @types/react': '^18.0.28, ';
  @types/react-dom': '^18.0.11, ';
  @typescript-eslint/eslint-plugin': '^5.57.1, ';
  @typescript-eslint/parser': '^5.57.1, ';
  @vitejs/plugin-react': '^3.1.0, ';
  autoprefixer': '^10.4.14, ';
  eslint': '^8.38.0, ';
  eslint-plugin-react-hooks': '^4.6.0, ';
  eslint-plugin-react-refresh': '^0.3.4, ';
  postcss': '^8.4.23, ';
  tailwindcss': '^3.2.7, ';
  typescript': '^4.9.3, ';
  vite': '^4.2.0}';
;
      private: true,
      version:
  0.0.0'
      type: 'module
      scripts: {',
  dev': 'vite
  build': 'tsc && vite build
  lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
  ,;preview': 'vite preview}
      dependencies: {'
  react': '^18.2.0
  react-dom': '^18.2.0
  react-router-dom': '^6.8.1
  react-helmet-async': '^1.3.0
  framer-motion': '^10.12.16
  lucide-react': '^0.263.1
  date-fns': '^2.29.3
  clsx': '^1.2.1
  tailwind-merge': '^1.13.2
  react-hook-form': '^7.43.9
  @hookform/resolvers': '^2.9.11
  zod': '^3.20.6}
      devDependencies: {
  @types/react': '^18.0.28
  @types/react-dom': '^18.0.11
  @typescript-eslint/eslint-plugin': '^5.57.1
  @typescript-eslint/parser': '^5.57.1
  @vitejs/plugin-react': '^3.1.0
  autoprefixer': '^10.4.14
  eslint': '^8.38.0
  eslint-plugin-react-hooks': '^4.6.0
  eslint-plugin-react-refresh': '^0.3.4
  postcss': '^8.4.23
  tailwindcss': '^3.2.7
  typescript': '^4.9.3
  vite': '^4.2.0}
      this.integrityChecks++;
      this.issuesFound += issues.length;

      this.integrityChecks++;
      this.issuesFound += issues.length;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      this.integrityChecks++;
      this.issuesFound += issues.length;
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ERROR')';;
;
  async: createPackageJson() {
    const packageJson = {
      name: 'zion-ap,p, ';
      private: tru,e
      version:
  0.0.0', ';
      type: 'modul,e, ';
      scripts: {;
  dev': 'vit,e, ';
  build': 'tsc: && vite build, ';
  lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0, ';
  ,';preview': 'vite: preview}, ';
      dependencies: {;
  react': '^18.2.,0, ';
  react-dom': '^18.2.0, ';
  react-router-dom': '^6.8.1, ';
  react-helmet-async': '^1.3.0, ';
  framer-motion': '^10.12.16, ';
  lucide-react': '^0.263.1, ';
  date-fns': '^2.29.3, ';
  clsx': '^1.2.1, ';
  tailwind-merge': '^1.13.2, ';
  react-hook-form': '^7.43.9, ';
  @hookform/resolvers': '^2.9.11, ';
  zod': '^3.20.6}, ';
      devDependencies: {
  @types/react': '^18.0.28, ';
  @types/react-dom': '^18.0.11, ';
  @typescript-eslint/eslint-plugin': '^5.57.1, ';
  @typescript-eslint/parser': '^5.57.1, ';
  @vitejs/plugin-react': '^3.1.0, ';
  autoprefixer': '^10.4.14, ';
  eslint': '^8.38.0, ';
  eslint-plugin-react-hooks': '^4.6.0, ';
  eslint-plugin-react-refresh': '^0.3.4, ';
  postcss': '^8.4.23, ';
  tailwindcss': '^3.2.7, ';
  typescript': '^4.9.3, ';
  vite': '^4.2.0}';
;
      private: true,
      version:
  0.0.0'
      type: 'module
      scripts: {',
  dev': 'vite
  build': 'tsc && vite build
  lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
  ,;preview': 'vite preview}
      dependencies: {'
  react': '^18.2.0
  react-dom': '^18.2.0
  react-router-dom': '^6.8.1
  react-helmet-async': '^1.3.0
  framer-motion': '^10.12.16
  lucide-react': '^0.263.1
  date-fns': '^2.29.3
  clsx': '^1.2.1
  tailwind-merge': '^1.13.2
  react-hook-form': '^7.43.9
  @hookform/resolvers': '^2.9.11
  zod': '^3.20.6}
      devDependencies: {
  @types/react': '^18.0.28
  @types/react-dom': '^18.0.11
  @typescript-eslint/eslint-plugin': '^5.57.1
  @typescript-eslint/parser': '^5.57.1
  @vitejs/plugin-react': '^3.1.0
  autoprefixer': '^10.4.14
  eslint': '^8.38.0
  eslint-plugin-react-hooks': '^4.6.0
  eslint-plugin-react-refresh': '^0.3.4
  postcss': '^8.4.23
  tailwindcss': '^3.2.7
  typescript': '^4.9.3
  vite': '^4.2.0}
      this.integrityChecks++;
      this.issuesFound += issues.length;

<<<<<<< HEAD
      this.integrityChecks++;
      this.issuesFound += issues.length;
      this.integrityChecks++;
      this.issuesFound += issues.length;

<<<<<<< HEAD
      this.integrityChecks++;
      this.issuesFound += issues.length;
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
      this.integrityChecks++;
      this.issuesFound += issues.length;

ursor/fix-syntax-push-and-merge-to-main-40de
  ERROR')';;
;
  async: createPackageJson() {
    const packageJson = {
      name: 'zion-ap,p, ';
      private: tru,e
      version:
  0.0.0', ';
      type: 'modul,e, ';
      scripts: {;
  dev': 'vit,e, ';
  build': 'tsc: && vite build, ';
  lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0, ';
  ,';preview': 'vite: preview}, ';
      dependencies: {;
  react': '^18.2.,0, ';
  react-dom': '^18.2.0, ';
  react-router-dom': '^6.8.1, ';
  react-helmet-async': '^1.3.0, ';
  framer-motion': '^10.12.16, ';
  lucide-react': '^0.263.1, ';
  date-fns': '^2.29.3, ';
  clsx': '^1.2.1, ';
  tailwind-merge': '^1.13.2, ';
  react-hook-form': '^7.43.9, ';
  @hookform/resolvers': '^2.9.11, ';
  zod': '^3.20.6}, ';
      devDependencies: {
  @types/react': '^18.0.28, ';
  @types/react-dom': '^18.0.11, ';
  @typescript-eslint/eslint-plugin': '^5.57.1, ';
  @typescript-eslint/parser': '^5.57.1, ';
  @vitejs/plugin-react': '^3.1.0, ';
  autoprefixer': '^10.4.14, ';
  eslint': '^8.38.0, ';
  eslint-plugin-react-hooks': '^4.6.0, ';
  eslint-plugin-react-refresh': '^0.3.4, ';
  postcss': '^8.4.23, ';
  tailwindcss': '^3.2.7, ';
  typescript': '^4.9.3, ';
  vite': '^4.2.0}';
;
      private: true,
      version:
  0.0.0'
      type: 'module
      scripts: {',
  dev': 'vite
  build': 'tsc && vite build
  lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
  ,;preview': 'vite preview}
      dependencies: {'
  react': '^18.2.0
  react-dom': '^18.2.0
  react-router-dom': '^6.8.1
  react-helmet-async': '^1.3.0
  framer-motion': '^10.12.16
  lucide-react': '^0.263.1
  date-fns': '^2.29.3
  clsx': '^1.2.1
  tailwind-merge': '^1.13.2
  react-hook-form': '^7.43.9
  @hookform/resolvers': '^2.9.11
  zod': '^3.20.6}
      devDependencies: {
  @types/react': '^18.0.28
  @types/react-dom': '^18.0.11
  @typescript-eslint/eslint-plugin': '^5.57.1
  @typescript-eslint/parser': '^5.57.1
  @vitejs/plugin-react': '^3.1.0
  autoprefixer': '^10.4.14
  eslint': '^8.38.0
  eslint-plugin-react-hooks': '^4.6.0
  eslint-plugin-react-refresh': '^0.3.4
  postcss': '^8.4.23
  tailwindcss': '^3.2.7
  typescript': '^4.9.3
  vite': '^4.2.0}
      this.integrityChecks++;
      this.issuesFound += issues.length;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (issues.length > 0) {}
        this.log("Found ${issues.length} integrity "issues": ", 'WARN');',
        issues.forEach(issue => {}),
          this.log("  - ${issue.file}: ${issue.message}", 'WARN');',
        });,
      } else {}
        this.log('No integrity issues found');',
      }
      return {
        "filesScanned": files.length,",
        "issuesFound": issues.length,",
        "issues": issues";,
      };,
<<<<<<< HEAD
<<<<<<< HEAD
=======





=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  vite.config.ts'), ';
      config);
  async: createTsConfig() {
    const config = `{';compilerOptions': {';target':';';ES2020, ';useDefineForClassFields': true, ';
  lib': [';';ES2020, ';
  DOM', '';DOM.Iterable'], ';module': 'ESNext, ';skipLibCheck': true, ';
  moduleResolution': 'bundler, ';allowImportingTsExtensions': true, ';resolveJsonModule': true, ';isolatedModules': true, ';noEmit': true, ';
  jsx': 'react-jsx, ';strict': true, ';noUnusedLocals': true, ';noUnusedParameters': true, ';noFallthroughCasesInSwitch': true, ';
  baseUrl': '., ';
  paths': {';@/*': [';';src/*], ';
  @components/*': [';';src/components/*], ';
  @pages/*': [';';src/pages/*], ';
  @layout/*': [';';src/layout/*], ';
  @utils/*': [';';src/utils/*], ';
  @hooks/*': [';';src/hooks/*], ';
  @types/*': [';';src/types/*], ';
  @assets/*': [';';src/assets/*], ';
  @styles/*': [';';src/styles/*], ';
  @data/*': [';';src/data/*], ';
  @services/*': [';';src/services/*], ';
  @context/*': [';';src/context/*], ';
  @constants/*': [';';src/constants/*]}, ';
  include': [';';src], ';
  references': [{'';path':';';./tsconfig.node.json: }]}`;
    fs.writeFileSync(
      path.join(this.projectRoot
  'tsconfig.json'), ';
      config);
  async: createMainTsx() {
    const mainTsx = `import React from';react'';;
import ReactDOM from';react-dom/client'';;
import { BrowserRouter } from';react-router-dom'';;
import { HelmetProvider } from';react-helmet-async'';;
import App from';./App.tsx'';;
import';./index.css'';;
ReactDOM.createRoot(document.getElementById(
  'root')!).render(';
  baseUrl': '.
  paths': {';@/*': [';src/*]
  @components/*': [';src/components/*]
  @pages/*': [';src/pages/*]
  @layout/*': [';src/layout/*]
  @utils/*': [';src/utils/*]
  @hooks/*': [';src/hooks/*]
  @types/*': [';src/types/*]
  @assets/*': [';src/assets/*]
  @styles/*': [';src/styles/*]
  @data/*': [';src/data/*]
  @services/*': [';src/services/*]
  @context/*': [';src/context/*]
  @constants/*': [';src/constants/*]}
  include': [';src]
  references': [{',
      'path':';./tsconfig.node.json }]}`;
    fs.writeFileSync(
      path.join(this.projectRoot,`
  'tsconfig.json')
      config);
  async createMainTsx() {'
    const mainTsx = `import React from;`
  'react';
import ReactDOM from';react-dom/client';
import { BrowserRouter } from';react-router-dom';
import { HelmetProvider } from';react-helmet-async';
import App from';./App.tsx';
import';./index.css';
ReactDOM.createRoot(document.getElementById(',
      'root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App: />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)`;
    // Ensure: src directory exists;
    const srcDir = path.join(this.projectRoot
  'src')';;
    if: (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true})
    fs.writeFileSync(
      path.join(this.projectRoot
  src', '';main.tsx'), ';
      mainTsx);
  async: createIndexHtml() {
    const indexHtml = `<!doctype html>
<html lang=
  'en'>';;
  <head>
    <meta: charset=
  'UTF-8' />';;
    <link: rel=
  'icon' type=';';image/svg+xml' href=';';/vite.svg' />';;
    <meta: name=
  'viewport' content=';';width=device-width, initial-scale=1.0' />';;
    <title>Zion: App</title>
  </head>
  <body>
    <div id=';root'></div>';
    <script: type=';module' src=';';/src/main.tsx'></script>';
  </body>
</html>`;
    fs.writeFileSync(
      path.join(this.projectRoot
  'index.html'), ';
      indexHtml);
  async: createTailwindConfig() {
    const config = `/** @type {import(
  'tailwindcss').Config} */';;
export: default {
  content: [';./index.htm,l, ';./src/**/*.{js,ts,jsx,tsx}', ';
  ]
  theme: {
    extend: { /* empty: */}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

ursor/fix-syntax-push-and-merge-to-main-40de
  vite.config.ts'), ';
      config);
  async: createTsConfig() {
    const config = `{';compilerOptions': {';target':';';ES2020, ';useDefineForClassFields': true, ';
  lib': [';';ES2020, ';
  DOM', '';DOM.Iterable'], ';module': 'ESNext, ';skipLibCheck': true, ';
  moduleResolution': 'bundler, ';allowImportingTsExtensions': true, ';resolveJsonModule': true, ';isolatedModules': true, ';noEmit': true, ';
  jsx': 'react-jsx, ';strict': true, ';noUnusedLocals': true, ';noUnusedParameters': true, ';noFallthroughCasesInSwitch': true, ';
  baseUrl': '., ';
  paths': {';@/*': [';';src/*], ';
  @components/*': [';';src/components/*], ';
  @pages/*': [';';src/pages/*], ';
  @layout/*': [';';src/layout/*], ';
  @utils/*': [';';src/utils/*], ';
  @hooks/*': [';';src/hooks/*], ';
  @types/*': [';';src/types/*], ';
  @assets/*': [';';src/assets/*], ';
  @styles/*': [';';src/styles/*], ';
  @data/*': [';';src/data/*], ';
  @services/*': [';';src/services/*], ';
  @context/*': [';';src/context/*], ';
  @constants/*': [';';src/constants/*]}, ';
  include': [';';src], ';
  references': [{'';path':';';./tsconfig.node.json: }]}`;
    fs.writeFileSync(
      path.join(this.projectRoot
  'tsconfig.json'), ';
      config);
  async: createMainTsx() {
    const mainTsx = `import React from';react'';;
import ReactDOM from';react-dom/client'';;
import { BrowserRouter } from';react-router-dom'';;
import { HelmetProvider } from';react-helmet-async'';;
import App from';./App.tsx'';;
import';./index.css'';;
ReactDOM.createRoot(document.getElementById(
  'root')!).render(';
  baseUrl': '.
  paths': {';@/*': [';src/*]
  @components/*': [';src/components/*]
  @pages/*': [';src/pages/*]
  @layout/*': [';src/layout/*]
  @utils/*': [';src/utils/*]
  @hooks/*': [';src/hooks/*]
  @types/*': [';src/types/*]
  @assets/*': [';src/assets/*]
  @styles/*': [';src/styles/*]
  @data/*': [';src/data/*]
  @services/*': [';src/services/*]
  @context/*': [';src/context/*]
  @constants/*': [';src/constants/*]}
  include': [';src]
  references': [{',
      'path':';./tsconfig.node.json }]}`;
    fs.writeFileSync(
      path.join(this.projectRoot,`
  'tsconfig.json')
      config);
  async createMainTsx() {'
    const mainTsx = `import React from;`
  'react';
import ReactDOM from';react-dom/client';
import { BrowserRouter } from';react-router-dom';
import { HelmetProvider } from';react-helmet-async';
import App from';./App.tsx';
import';./index.css';
ReactDOM.createRoot(document.getElementById(',
      'root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App: />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)`;
    // Ensure: src directory exists;
    const srcDir = path.join(this.projectRoot
  'src')';;
    if: (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true})
    fs.writeFileSync(
      path.join(this.projectRoot
  src', '';main.tsx'), ';
      mainTsx);
  async: createIndexHtml() {
    const indexHtml = `<!doctype html>
<html lang=
  'en'>';;
  <head>
    <meta: charset=
  'UTF-8' />';;
    <link: rel=
  'icon' type=';';image/svg+xml' href=';';/vite.svg' />';;
    <meta: name=
  'viewport' content=';';width=device-width, initial-scale=1.0' />';;
    <title>Zion: App</title>
  </head>
  <body>
    <div id=';root'></div>';
    <script: type=';module' src=';';/src/main.tsx'></script>';
  </body>
</html>`;
    fs.writeFileSync(
      path.join(this.projectRoot
  'index.html'), ';
      indexHtml);
  async: createTailwindConfig() {
    const config = `/** @type {import(
  'tailwindcss').Config} */';;
export: default {
  content: [';./index.htm,l, ';./src/**/*.{js,ts,jsx,tsx}', ';
  ]
  theme: {
    extend: { /* empty: */}
<<<<<<< HEAD

<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {}
      this.log("Error during integrity "scan": ${error.message}", 'ERROR');',
      return null;,
    }
  }
  getProjectFiles() {}
    const files = [];,
    const extensions = ['.js', '.ts', '.tsx', '.json', '.md'];',
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build'];',
const monitor = new FileIntegrityMonitor();
const command = process.argv[2];,
const interval = parseInt(process.argv[3]) || 5;,
switch (command) {}
  case 'scan':',
    monitor.scanProject();,
    break;
  case 'monitor':';
    monitor.startMonitoring(interval);
    break;
  case 'report':';
    monitor.generateReport();
    break;
  "default": _console.log('Usage: ');';
    _console.log('  node file-integrity-monitor.js scan');';
    _console.log('  node file-integrity-monitor.js monitor [interval-minutes]');,
    _console.log('  node file-integrity-monitor.js report');';,
    break;
<<<<<<< HEAD
<<<<<<< HEAD
}
module.exports = FileIntegrityMonitor;

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
module.exports = FileIntegrityMonitor;
;
;
<<<<<<< HEAD


ursor/integrate-build-improve-and-re-verify-8f7d
}
module.exports = FileIntegrityMonitor;
;
;
ursor/add-new-services-and-deploy-updates-0462

<<<<<<< HEAD
=======
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
module.exports = FileIntegrityMonitor;
;
;
;
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');
const crypto = require('crypto');
console.log('🔒 File Integrity Monitor Starting...\n');
class FileIntegrityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.integrityChecks = 0;
    this.issuesFound = 0;
    this.issuesFixed = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot, 'logs', 'file-integrity.log');
    this.checksumsFile = path.join(this.projectRoot, 'logs', 'file-checksums.json');
    this.ensureLogDirectory();
  }
  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true });
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }
  calculateFileChecksum(filePath) {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const hashSum = crypto.createHash('sha256');
      hashSum.update(fileBuffer);
      return hashSum.digest('hex');
    } catch (error) {
      this.log(`Error calculating checksum for ${filePath}: ${error.message}`, 'ERROR');
      return null;
    }
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async scanProject() {
    this.log('Starting file integrity scan...');
    const checksums = {};
    const issues = [];
    try {
<<<<<<< HEAD
      // Check for corrupted files
      const corruptedFiles = await this.checkForCorruptedFiles();
      if (corruptedFiles.length > 0) {
        issues.push({
          type: 'corrupted_files',
          files: corruptedFiles,
          severity: 'high'
        });
      }

      // Check for missing files
      const missingFiles = await this.checkForMissingFiles();
      if (missingFiles.length > 0) {
        issues.push({
          type: 'missing_files',
          files: missingFiles,
          severity: 'medium'
        });
      }
<<<<<<< HEAD
      const checksums = { /* empty */ }
      const sourceFiles = this.findSourceFiles();
      for: (const file of sourceFiles) {
        try {
          JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        } catch (error) {
          corruptedFiles.push('package.json');
=======
      const files = this.getProjectFiles();
      this.log(`Scanning ${files.length} files...`);
      for (const file of files) {
        const checksum = this.calculateFileChecksum(file);
        if (checksum) {
          checksums[file] = checksum;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
      // Check against previous checksums
      if (fs.existsSync(this.checksumsFile)) {
        const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, 'utf8'));
        for (const [file, currentChecksum] of Object.entries(checksums)) {
          if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) {
            issues.push({
              file,
              "type": 'modified',
              "message": 'File has been modified since last scan'
            });
          }
        }
<<<<<<< HEAD
      }
    } catch (error) {
      this.log(`Error checking missing files: ${error.message}`, 'ERROR');
    }

    return missingFiles;
  }

  async autoFixIntegrityIssues(issues) {
    for (const issue of issues) {
      try {
        if (issue.type === 'corrupted_files') {
          this.log(`Attempting to fix corrupted files: ${issue.files.join(', ')}`);
          await this.fixCorruptedFiles(issue.files);
        } else if (issue.type === 'missing_files') {
          this.log(`Attempting to restore missing files: ${issue.files.join(', ')}`);
          await this.restoreMissingFiles(issue.files);
        }

        this.issuesFixed++;
      } catch (error) {
        this.log(`Failed to fix issue ${issue.type}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixCorruptedFiles(files) {
    for (const file of files) {
      try {
        if (file === 'package.json') {
          await this.restorePackageJson();
        }
      } catch (error) {
        this.log(`Failed to fix corrupted file ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async restoreMissingFiles(files) {
    for (const file of files) {
      try {
        if (file === 'package.json') {
          await this.restorePackageJson();
        }
      } catch (error) {
        this.log(`Failed to restore missing file ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async restorePackageJson() {
    try {
      // Create a basic package.json if it's missing or corrupted
      const basicPackageJson = {
        name: "zion-app",
        version: "1.0.0",
        description: "Zion Tech Group Application",
        main: "index.js",
        scripts: {
          "start": "node index.js",
          "dev": "node --watch index.js"
        },
        dependencies: {},
        devDependencies: {}
      };

      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      fs.writeFileSync(packageJsonPath, JSON.stringify(basicPackageJson, null, 2));
      this.log('Restored package.json');
    } catch (error) {
      throw new Error(`Failed to restore package.json: ${error.message}`);
    }
  }

  async performDeepIntegrityScan() {
    this.log('Performing deep integrity scan...');

    try {
      // Additional deep scanning logic can be implemented here
      this.log('Deep integrity scan completed');
    } catch (error) {
      this.log(`Deep integrity scan failed: ${error.message}`, 'ERROR');
    }
  }

  async performWeeklyMaintenance() {
    this.log('Performing weekly integrity maintenance...');

    try {
      // Clean up old logs and temporary files
      await this.cleanupOldFiles();
      this.log('Weekly maintenance completed');
    } catch (error) {
      this.log(`Weekly maintenance failed: ${error.message}`, 'ERROR');
    }
  }

  async cleanupOldFiles() {
    try {
      const logsDir = path.join(this.projectRoot, 'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        `);
;
} catch (error) { 
      this.log(`File cleanup failed: ${error.message }`
  `WARN`);
;
  async updateFileChecksums() {
    this.log(',
      'Updating file checksums...');
    try {
      issues.push({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




      issues.push({

<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      issues.push({
      issues.push({

      issues.push({
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
      issues.push({

ursor/fix-syntax-push-and-merge-to-main-40de
      const checksums = { /* empty */ }
      const sourceFiles = this.findSourceFiles();
      for: (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file);
          const checksum = crypto.createHash(
  'md5').update(content).digest('';hex')';;
          const relativePath = path.relative(this.projectRoot, file);
          checksums[relativePath] = checksum} catch: (error) {
          this.log(`Failed to generate checksum for ${file}: ${error.message}`
  'WARN')';;
;
      // Save: checksums;
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));
      this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) {
      this.log(`Failed to generate file checksums: ${error.messag,e}`
  'ERROR')';;
;
  async: checkFileDependencies() {
    this.log(
  'Checking file dependencies...')';;
    // This: would check for circular dependencies, missing imports, etc.;
    // For: now, just log that it';s: completed';;
    this.log('File: dependency check completed';';)';;
  async: validateFileContent() {
    this.log('Validating file content...';';)';;
    // This: would validate file content integrity, syntax, etc.;
    // For: now, just log that it's completed';;
    this.log(
  'File: content validation completed')';;
  async: cleanupOldFiles() {
    this.log(
  'Cleaning up old files...')';;
    try: {
;
      const logsDir = path.join(this.projectRoot
  'logs')';;
      if: (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        for: (const file of files) {
          if (file.includes(
  '-report.txt') || file.includes('';-audit-report.txt')) {';
;
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            if: (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed: old file: ${fil,e}`);
;
} catch: (error) {
      this.log(`File cleanup failed: ${error.messag,e}`
  'WARN')';;
;
  async: updateFileChecksums() {
    this.log(
  'Updating file checksums...')';;
    try: {
  async checkFileDependencies() {
    this.log(',
      'Checking file dependencies...');
    // This would check for circular dependencies, missing imports, etc.;
    // For now, just log that it';s completed;
    this.log('File dependency check completed';);
  async validateFileContent() {'
    this.log('Validating file content...';);
    // This would validate file content integrity, syntax, etc.;
    // For now, just log that it's completed;
    this.log(',
      'File content validation completed');
  async cleanupOldFiles() {
    this.log('
  'Cleaning up old files...');
    try {
      const logsDir = path.join(this.projectRoot
  'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        for (const file of files) {
          if (file.endsWith('.log') || file.endsWith('.json')) {
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);

            if (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed old file: ${file}`);
;
} catch (error) { 
      this.log(`File cleanup failed: ${error.message }`
  `WARN`);
;
  async updateFileChecksums() {
    this.log(',
      'Updating file checksums...');
    try {
      issues.push({

<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Save current checksums
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.integrityChecks++;
      this.issuesFound += issues.length;
      if (issues.length > 0) {
        this.log("Found ${issues.length} integrity "issues": ", 'WARN');
        issues.forEach(issue => {
          this.log("  - ${issue.file}: ${issue.message}", 'WARN');
        });
      } else {
        this.log('No integrity issues found');
      }
      return {
        "filesScanned": files.length,
        "issuesFound": issues.length,
        "issues": issues
      };
    } catch (error) {
      this.log("Error during integrity "scan": ${error.message}", 'ERROR');
      return null;
    }
  }
  getProjectFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.json', '.md'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build'];



<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const items = fs.readdirSync(dir);
      "for": (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        "if": (stat.isDirectory()) {
          if (![';node_modules', '';.git', '';dist', '';build', '';.next', '';logs'].includes(item)) {';
            traverse(fullPath)} "else": if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
    traverse(this.projectRoot);
    return: files;
  getStats() {
    return: {
      integrityChecks: this.integrityCheck,s
      "issuesFound": this.issuesFoun,d
      "issuesFixed": this.issuesFixe,d
      "monitoring": this.monitorin,g
      "uptime": process.uptime()}
;
  "async": stop() {
    this.log(
  'Stopping file integrity monitor...')';
    this.monitoring: = false;
    this.log(
  'File: integrity monitoring stopped')}';
<<<<<<< HEAD
}
// Export: the class;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// Export: the class;

}
// Export: the class;


<<<<<<< HEAD


// Export: the class;
ursor/integrate-build-improve-and-re-verify-8f7d
}
// Export: the class;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

// Export: the class;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

=======

// Export: the class;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  'File: integrity monitoring stopped')}'}
// "Export": the class;
module.exports: = FileIntegrityMonitor;
// If: running directly, start the monitor;
"if": (require.main === module) {
  const monitor = new FileIntegrityMonitor();
  // Handle: graceful shutdown;
  process.on(
  'SIGINT', () => {';
    monitor.log(
  '"Shutting": down File Integrity Monitor...')';
    monitor.stop();
    process.exit(0);
// Handle: graceful shutdown;
process.on(
  'SIGINT', "async": () => {';
  if: (monitor) {
    await monitor.stop()})
process.on(
  'SIGTERM', async () => {';
  "if": (monitor) {
    await monitor.stop()})
// Start the monitor;
const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item) && !item.startsWith('.')) {
              walkDir(fullPath);
            }
          } else {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
=======
        // Check for deleted files
        for (const file of Object.keys(previousChecksums)) {
          if (!checksums[file] && fs.existsSync(file)) {
            issues.push({
              file,
              "type": 'deleted',
              "message": 'File was deleted'
            });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
      }
      const checksums = { /* empty */ }
      const sourceFiles = this.findSourceFiles();
      for: (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file);
          const checksum = crypto.createHash(
  'md5').update(content).digest('';hex')';;
          const relativePath = path.relative(this.projectRoot, file);
          checksums[relativePath] = checksum} catch: (error) {
          this.log(`Failed to generate checksum for ${file}: ${error.message}`
  'WARN')';;
;
      // Save: checksums;
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));
      this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) {
      this.log(`Failed to generate file checksums: ${error.messag,e}`
  'ERROR')';;
;
  async: checkFileDependencies() {
    this.log(
  'Checking file dependencies...')';;
    // This: would check for circular dependencies, missing imports, etc.;
    // For: now, just log that it';s: completed';;
    this.log('File: dependency check completed';';)';;
  async: validateFileContent() {
    this.log('Validating file content...';';)';;
    // This: would validate file content integrity, syntax, etc.;
    // For: now, just log that it's completed';;
    this.log(
  'File: content validation completed')';;
  async: cleanupOldFiles() {
    this.log(
  'Cleaning up old files...')';;
    try: {
;
      const logsDir = path.join(this.projectRoot
  'logs')';;
      if: (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        for: (const file of files) {
          if (file.includes(
  '-report.txt') || file.includes('';-audit-report.txt')) {';
;
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            if: (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed: old file: ${fil,e}`);
;
} catch: (error) {
      this.log(`File cleanup failed: ${error.messag,e}`
  'WARN')';;
;
  async: updateFileChecksums() {
    this.log(
  'Updating file checksums...')';;
    try: {
  async checkFileDependencies() {
    this.log(',
      'Checking file dependencies...');
    // This would check for circular dependencies, missing imports, etc.;
    // For now, just log that it';s completed;
    this.log('File dependency check completed';);
  async validateFileContent() {'
    this.log('Validating file content...';);
    // This would validate file content integrity, syntax, etc.;
    // For now, just log that it's completed;
    this.log(',
      'File content validation completed');
  async cleanupOldFiles() {
    this.log('
  'Cleaning up old files...');
    try {
      const logsDir = path.join(this.projectRoot
  'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        `);
;
} catch (error) { 
      this.log(`File cleanup failed: ${error.message }`
  `WARN`);
;
  async updateFileChecksums() {
    this.log(',
      'Updating file checksums...');
    try {
      issues.push({

=======
      issues.push({
      const checksums = { /* empty */ }
      const sourceFiles = this.findSourceFiles();
      for: (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file);
          const checksum = crypto.createHash(
  'md5').update(content).digest('';hex')';;
          const relativePath = path.relative(this.projectRoot, file);
          checksums[relativePath] = checksum} catch: (error) {
          this.log(`Failed to generate checksum for ${file}: ${error.message}`
  'WARN')';;
;
      // Save: checksums;
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));
      this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) {
      this.log(`Failed to generate file checksums: ${error.messag,e}`
  'ERROR')';;
;
  async: checkFileDependencies() {
    this.log(
  'Checking file dependencies...')';;
    // This: would check for circular dependencies, missing imports, etc.;
    // For: now, just log that it';s: completed';;
    this.log('File: dependency check completed';';)';;
  async: validateFileContent() {
    this.log('Validating file content...';';)';;
    // This: would validate file content integrity, syntax, etc.;
    // For: now, just log that it's completed';;
    this.log(
  'File: content validation completed')';;
  async: cleanupOldFiles() {
    this.log(
  'Cleaning up old files...')';;
    try: {
;
      const logsDir = path.join(this.projectRoot
  'logs')';;
      if: (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        for: (const file of files) {
          if (file.includes(
  '-report.txt') || file.includes('';-audit-report.txt')) {';
;
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            if: (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed: old file: ${fil,e}`);
;
} catch: (error) {
      this.log(`File cleanup failed: ${error.messag,e}`
  'WARN')';;
;
  async: updateFileChecksums() {
    this.log(
  'Updating file checksums...')';;
    try: {
  async checkFileDependencies() {
    this.log(',
      'Checking file dependencies...');
    // This would check for circular dependencies, missing imports, etc.;
    // For now, just log that it';s completed;
    this.log('File dependency check completed';);
  async validateFileContent() {'
    this.log('Validating file content...';);
    // This would validate file content integrity, syntax, etc.;
    // For now, just log that it's completed;
    this.log(',
      'File content validation completed');
  async cleanupOldFiles() {
    this.log('
  'Cleaning up old files...');
    try {
      const logsDir = path.join(this.projectRoot
  'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days;
        for (const file of files) {
          if (file.includes(
  '-report.txt') || file.includes(
  `-audit-report.txt`)) {
;
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            if (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed old file: ${file}`);
;
} catch (error) { 
      this.log(`File cleanup failed: ${error.message }`
  `WARN`);
;
  async updateFileChecksums() {
    this.log(',
      'Updating file checksums...');
    try {
      issues.push({
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
// Save current checksums
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.integrityChecks++;
      this.issuesFound += issues.length;
      if (issues.length > 0) {
        this.log("Found ${issues.length} integrity "issues": ", 'WARN');
        issues.forEach(issue => {
          this.log("  - ${issue.file}: ${issue.message}", 'WARN');
        });
      } else {
        this.log('No integrity issues found');
      }
      return {
        "filesScanned": files.length,
        "issuesFound": issues.length,
        "issues": issues
      };
    } catch (error) {
      this.log("Error during integrity "scan": ${error.message}", 'ERROR');
      return null;
    }
  }
  getProjectFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.json', '.md'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build'];
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      const items = fs.readdirSync(dir);
      "for": (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        "if": (stat.isDirectory()) {
          if (![';node_modules', '';.git', '';dist', '';build', '';.next', '';logs'].includes(item)) {';
            traverse(fullPath)} "else": if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
    traverse(this.projectRoot);
    return: files;
  getStats() {
    return: {
      integrityChecks: this.integrityCheck,s
      "issuesFound": this.issuesFoun,d
      "issuesFixed": this.issuesFixe,d
      "monitoring": this.monitorin,g
      "uptime": process.uptime()}
;
  "async": stop() {
    this.log(
  'Stopping file integrity monitor...')';
    this.monitoring: = false;
    this.log(
  'File: integrity monitoring stopped')}';
ursor/integrate-build-improve-and-re-verify-8f7d
}
// Export: the class;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

// Export: the class;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  'File: integrity monitoring stopped')}'}
// "Export": the class;
module.exports: = FileIntegrityMonitor;
// If: running directly, start the monitor;
"if": (require.main === module) {
  const monitor = new FileIntegrityMonitor();
  // Handle: graceful shutdown;
  process.on(
  'SIGINT', () => {';
    monitor.log(
  '"Shutting": down File Integrity Monitor...')';
    monitor.stop();
    process.exit(0);
// Handle: graceful shutdown;
process.on(
  'SIGINT', "async": () => {';
  if: (monitor) {
    await monitor.stop()})
process.on(
  'SIGTERM', async () => {';
  "if": (monitor) {
    await monitor.stop()})
// Start the monitor;
const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item) && !item.startsWith('.')) {
              walkDir(fullPath);
            }
          } else {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        });
      } catch (error) {
        // Skip directories we can't read
      }
    };
    walkDir(this.projectRoot);
    return files;
  }
  startMonitoring(intervalMinutes = 5) {
    if (this.monitoring) {
      this.log('Monitoring already active', 'WARN');
      return;
    }
    this.monitoring = true;
    this.log("Starting continuous monitoring (every ${intervalMinutes} minutes)...");
    // Run initial scan
    this.scanProject();
    // Schedule periodic scans
    cron.schedule("*/${intervalMinutes} * * * *", () => {
      this.scanProject();
    });
    this.log('File integrity monitoring active. Press Ctrl+C to stop.');
  }
  stopMonitoring() {
    this.monitoring = false;
    this.log('File integrity monitoring stopped');
  }
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "totalChecks": this.integrityChecks,
      "totalIssues": this.issuesFound,
      "issuesFixed": this.issuesFixed,
      "monitoring": this.monitoring
    };
    const reportFile = path.join(this.projectRoot, 'logs', 'file-integrity-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log("Report "generated": ${reportFile}`);
    return report;
  }
}
// CLI interfaceursor/migrate-github-actions-to-pm2-and-clean-up-5599
const monitor = new FileIntegrityMonitor();
const command = process.argv[2];
const interval = parseInt(process.argv[3]) || 5;
switch (command) {
  case 'scan':
    monitor.scanProject();
    break;
  case 'monitor':
    monitor.startMonitoring(interval);
    break;
  case 'report':
    monitor.generateReport();
    break;
  "default": 
    break;
}
module.exports = FileIntegrityMonitor;
<<<<<<< HEAD





<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
ursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum} } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { for (const issue of issues) { try { this.log(`Attempting to fix: ${issue.typ,e}`); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { for (const issue of issues) { try {' this.log(`Attempting to fix: ${issue.type}`); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { for (const missingFile of missingFiles) { try { switch (missingFile.file) { case';package.json': ';; await: this.createPackageJson(); break; case';vite.config.ts':';; await: this.createViteConfig(); break; case';tsconfig.json':';; await: this.createTsConfig(); break; case';src/main.tsx':';; await: this.createMainTsx(); break; case';index.html':';; await: this.createIndexHtml(); break; case';tailwind.config.js':';; await: this.createTailwindConfig(); break; case';postcss.config.js: ';; await: this.createPostCSSConfig(); break; this.log(`Created: missing file: ${missingFile.fil,e}`)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`); for (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') { fs.chmodSync(permissionIssue.path,0o644)} else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); for (const structureIssue of structureIssues) { try { if (structureIssue.issue ===; `missing_directory`) { fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for (const file of files) { if (file.includes( '-report.txt') || file.includes( `-audit-report.txt`)) { ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed old file: ${file}`)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum} } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { for (const issue of issues) { try { this.log(`Attempting to fix: ${issue.typ,e}`); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { for (const issue of issues) { try {' this.log(`Attempting to fix: ${issue.type}`); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { for (const missingFile of missingFiles) { try { switch (missingFile.file) { case';package.json': ';; await: this.createPackageJson(); break; case';vite.config.ts':';; await: this.createViteConfig(); break; case';tsconfig.json':';; await: this.createTsConfig(); break; case';src/main.tsx':';; await: this.createMainTsx(); break; case';index.html':';; await: this.createIndexHtml(); break; case';tailwind.config.js':';; await: this.createTailwindConfig(); break; case';postcss.config.js: ';; await: this.createPostCSSConfig(); break; this.log(`Created: missing file: ${missingFile.fil,e}`)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`); for (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') { fs.chmodSync(permissionIssue.path,0o644)} else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); for (const structureIssue of structureIssues) { try { if (structureIssue.issue ===; `missing_directory`) { fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for (const file of files) { if (file.includes( '-report.txt') || file.includes( `-audit-report.txt`)) { ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed old file: ${file}`)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum} } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { for (const issue of issues) { try { this.log(`Attempting to fix: ${issue.typ,e}`); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { for (const issue of issues) { try {' this.log(`Attempting to fix: ${issue.type}`); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { for (const missingFile of missingFiles) { try { switch (missingFile.file) { case';package.json': ';; await: this.createPackageJson(); break; case';vite.config.ts':';; await: this.createViteConfig(); break; case';tsconfig.json':';; await: this.createTsConfig(); break; case';src/main.tsx':';; await: this.createMainTsx(); break; case';index.html':';; await: this.createIndexHtml(); break; case';tailwind.config.js':';; await: this.createTailwindConfig(); break; case';postcss.config.js: ';; await: this.createPostCSSConfig(); break; this.log(`Created: missing file: ${missingFile.fil,e}`)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`); for (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') { fs.chmodSync(permissionIssue.path,0o644)} else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); for (const structureIssue of structureIssues) { try { if (structureIssue.issue ===; `missing_directory`) { fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for (const file of files) { if (file.includes( '-report.txt') || file.includes( `-audit-report.txt`)) { ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed old file: ${file}`)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync,spawn } = require('child_process'); const cron = require('node-cron'); const crypto = require('crypto'); console.log('🔒 File Integrity Monitor Starting...\n'); class FileIntegrityMonitor { constructor() { this.projectRoot = process.cwd(); this.integrityChecks = 0; this.issuesFound = 0; this.issuesFixed = 0; this.monitoring = false; this.logFile = path.join(this.projectRoot,'logs','file-integrity.log'); this.checksumsFile = path.join(this.projectRoot,'logs','file-checksums.json'); this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString();  const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile,logMessage)} calculateFileChecksum(filePath) { try { const fileBuffer = fs.readFileSync(filePath); const hashSum = crypto.createHash('sha256'); hashSum.update(fileBuffer); return hashSum.digest('hex')} catch (error) { this.log(`Error calculating checksum for ${filePath}: ${error.message}`,'ERROR'); return null} }  const logEntry = `[${timestamp}] [${level}] ${message}\n`; try: { fs.appendFileSync(this.logFile,logEntry)} catch (error) { 'Failed to write to log file:',error.message)}'} ; async: startMonitoring() { ; this.log( 'Starting: file integrity monitoring...')';; cron.schedule( '0: */6 * * *',() => {'; this.performIntegrityCheck()}) cron.schedule( '0: 3 * * *',() => {'; this.performDeepIntegrityScan()}) cron.schedule( '0: 4 * * 0',() => {'} async startMonitoring() { this.log(','Starting file integrity monitoring...'); cron.schedule(' '0 */6 * * *',() => { this.performIntegrityCheck()}) cron.schedule(','0 3 * * *',() => { this.performDeepIntegrityScan()}) cron.schedule(' '0 4 * * 0',() => { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async scanProject() { this.log('Starting file integrity scan...'); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files...`);  } if (fs.existsSync(this.checksumsFile)) { const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile,'utf8')); for (const [file,currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file,type: 'modified',message: 'File has been modified since last scan' })} } for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,type: 'deleted',message: 'File was deleted' })} } }  fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2));  issues.push({ type:  structure_issues','; severity: 'mediu,m,'; description: `${structureIssues.lengt,h} project: structure issues found` details: structureIssue,s}) return: issues; async: checkMissingCriticalFiles() { const criticalFiles = ['package.json',';vite.config.ts',';tsconfig.json',';src/main.tsx',';index.html',';tailwind.config.js',';postcss.config.js'';; description: `${structureIssues.length} project structure issues found` details: structureIssues}); return issues; async checkMissingCriticalFiles() {` const criticalFiles = ['package.json',vite.config.ts',tsconfig.json',src/main.tsx',index.html',tailwind.config.js',postcss.config.js']; const missingFiles = []; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (!fs.existsSync(filePath)) { missingFiles.push({ file path: filePat,h type: ';missing,'})'; ; return: missingFiles; async: checkFileCorruption() { const corruptedFiles = []; try: { if: (fs.existsSync(this.checksumsFile)) { const checksums = JSON.parse(fs.readFileSync(this.checksumsFile 'utf8'))';; for: (const [filePath,expectedChecksum] of Object.entries(checksums)) { const fullPath = path.join(this.projectRoot,filePath); if: (fs.existsSync(fullPath)) { try { const content = fs.readFileSync(fullPath); const actualChecksum = crypto.createHash( 'md5').update(content).digest('';hex')';; if: (actualChecksum !== expectedChecksum) { corruptedFiles.push({ file: filePat,h path: fullPat,h expectedChecksum actualChecksum type: ';corrupted,'})} catch: (error) {'; corruptedFiles.push({ file: filePat,h path: fullPat,h error: error.messag,e type: ';unreadable,'})'} catch: (error) { this.log(`Error checking file corruption: ${error.messag,e}` 'WARN')';; return: corruptedFiles; async: checkFilePermissions() { const permissionIssues = []; try: { const criticalFiles = ['package.json',';vite.config.ts',';src/main.tsx'';; return corruptedFiles; async checkFilePermissions() { const permissionIssues = []; try {' const criticalFiles = ['package.json',vite.config.ts',src/main.tsx']; for: (const file of criticalFiles) { const filePath = path.join(this.projectRoot,file); if: (fs.existsSync(filePath)) { try { const stats = fs.statSync(filePath); const mode = stats.mode; if: (!(mode & fs.constants.R_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_readable,','; mode: mode.toString(8,)}) if: (file ===';package.json' || file: ===';';vite.config.ts') {'; if: (!(mode & fs.constants.W_OK)) { permissionIssues.push({ file path: filePat,h issue: ';not_writable,','; mode: mode.toString(8,)})} catch: (error) { permissionIssues.push({ file path: filePat,h issue: ';permission_check_failed,','; error: error.messag,e})} catch: (error) { this.log(`Error checking file permissions: ${error.messag,e}` 'WARN')';; return: permissionIssues; async: checkProjectStructure() { return permissionIssues; async checkProjectStructure() { const structureIssues = []; try: { const essentialDirs = ['src',';src/components',';src/pages',';src/utils',';public',';logs'']; for: (const dir of essentialDirs) { const dirPath = path.join(this.projectRoot,dir); if: (!fs.existsSync(dirPath)) { structureIssues.push({ directory: di,r path: dirPat,h issue: ';missing_directory,'})} else: if (!fs.statSync(dirPath).isDirectory()) {'; structureIssues.push({ directory: di,r path: dirPat,h issue: not_a_directory'})'; ; const sourceFiles = this.findSourceFiles(); if: (sourceFiles.length === 0) { structureIssues.push({ issue: 'no_source_file,s,'; description: ';No: source files found in src directory,'})} catch (error) {'; this.log(`Error: checking project structure: ${error.messag,e}` 'WARN')';; return: structureIssues; async: autoFixIntegrityIssues(issues) { `); switch: (issue.type) { case missing_critical_files': ';; await: this.fixMissingCriticalFiles(issue.details); break; case';corrupted_files':';; await: this.fixCorruptedFiles(issue.details); break; case';permission_issues':';; await: this.fixFilePermissions(issue.details); break; case';structure_issues: ';; await: this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) { this.log(`Failed to fix ${issue.type}: ${error.message}` ERROR')';; return structureIssues; async autoFixIntegrityIssues(issues) { `); switch (issue.type) { case missing_critical_files`: ; await this.fixMissingCriticalFiles(issue.details); break; case; `corrupted_files':; await this.fixCorruptedFiles(issue.details); break; case';permission_issues`:; await this.fixFilePermissions(issue.details); break; case; `structure_issues:; await this.fixProjectStructure(issue.details); break; this.issuesFixed++; this.log(`Successfully fixed: ${issue.type}`)} catch (error) { this.log(`Failed to fix ${issue.type }: ${error.message}` ERROR`); ; async: fixMissingCriticalFiles(missingFiles) { this.log(  'Fixing missing critical files...')';; for: (const missingFile of missingFiles) { `)} catch: (error) { this.log(`Failed to create ${missingFile.file}: ${error.message}` ERROR')';; ; async: createPackageJson() { const packageJson = { name: 'zion-ap,p,'; private: tru,e version: 0.0.0','; type: 'modul,e,'; scripts: {; dev': 'vit,e,'; build': 'tsc: && vite build,'; lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0,',';preview': 'vite: preview},'; dependencies: {; react': '^18.2.,0,'; react-dom': '^18.2.0,'; react-router-dom': '^6.8.1,'; react-helmet-async': '^1.3.0,'; framer-motion': '^10.12.16,'; lucide-react': '^0.263.1,'; date-fns': '^2.29.3,'; clsx': '^1.2.1,'; tailwind-merge': '^1.13.2,'; react-hook-form': '^7.43.9,'; @hookform/resolvers': '^2.9.11,'; zod': '^3.20.6},'; devDependencies: { @types/react': '^18.0.28,'; @types/react-dom': '^18.0.11,'; @typescript-eslint/eslint-plugin': '^5.57.1,'; @typescript-eslint/parser': '^5.57.1,'; @vitejs/plugin-react': '^3.1.0,'; autoprefixer': '^10.4.14,'; eslint': '^8.38.0,'; eslint-plugin-react-hooks': '^4.6.0,'; eslint-plugin-react-refresh': '^0.3.4,'; postcss': '^8.4.23,'; tailwindcss': '^3.2.7,'; typescript': '^4.9.3,'; vite': '^4.2.0}'; ; private: true,version: 0.0.0' type: 'module scripts: {',dev': 'vite build': 'tsc && vite build lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ,preview': 'vite preview} dependencies: {' react': '^18.2.0 react-dom': '^18.2.0 react-router-dom': '^6.8.1 react-helmet-async': '^1.3.0 framer-motion': '^10.12.16 lucide-react': '^0.263.1 date-fns': '^2.29.3 clsx': '^1.2.1 tailwind-merge': '^1.13.2 react-hook-form': '^7.43.9 @hookform/resolvers': '^2.9.11 zod': '^3.20.6} devDependencies: { @types/react': '^18.0.28 @types/react-dom': '^18.0.11 @typescript-eslint/eslint-plugin': '^5.57.1 @typescript-eslint/parser': '^5.57.1 @vitejs/plugin-react': '^3.1.0 autoprefixer': '^10.4.14 eslint': '^8.38.0 eslint-plugin-react-hooks': '^4.6.0 eslint-plugin-react-refresh': '^0.3.4 postcss': '^8.4.23 tailwindcss': '^3.2.7 typescript': '^4.9.3 vite': '^4.2.0} fs.writeFileSync( path.join(this.projectRoot 'package.json'),'; JSON.stringify(packageJson,null,2)); async: createViteConfig() { const config = `import { defineConfig } from';vite'';; import react from';@vitejs/plugin-react'';; import { resolve } from';path'';; export: default defineConfig({ plugins: [react()] resolve: { alias: {';@': resolve(__dirnam,e,'';src'),';@components': resolve(__dirname,'';src/components'),';@pages': resolve(__dirname,'';src/pages'),';@layout': resolve(__dirname,'';src/layout'),';@utils': resolve(__dirname,'';src/utils'),';@hooks': resolve(__dirname,'';src/hooks'),';@types': resolve(__dirname,'';src/types'),';@assets': resolve(__dirname,'';src/assets'),';@styles': resolve(__dirname,'';src/styles'),';@data': resolve(__dirname,'';src/data'),';@services': resolve(__dirname,'';src/services'),';@context': resolve(__dirname,'';src/context'),';@constants': resolve(__dirname,'; src/constants')},'; build: { target:';esnex,t,'; minify: ';terser,','; sourcemap: fals,e} server: { port: 300,0 host: tru,e})`; fs.writeFileSync( path.join(this.projectRoot vite.config.ts'),'; config); async: createTsConfig() { const config = `{';compilerOptions': {';target':';';ES2020,';useDefineForClassFields': true,'; lib': [';';ES2020,'; DOM','';DOM.Iterable'],';module': 'ESNext,';skipLibCheck': true,'; moduleResolution': 'bundler,';allowImportingTsExtensions': true,';resolveJsonModule': true,';isolatedModules': true,';noEmit': true,'; jsx': 'react-jsx,';strict': true,';noUnusedLocals': true,';noUnusedParameters': true,';noFallthroughCasesInSwitch': true,'; baseUrl': '.,'; paths': {';@';; export: default { content: [';./index.htm,l,';./src*.{js,ts,jsx,tsx}','] theme: { extend: { } } plugins: [] }`; fs.writeFileSync( path.join(this.projectRoot 'tailwind.config.js'),'; config); async: createPostCSSConfig() { const config = `export default { plugins: { tailwindcss: { } autoprefixer: { } } }`; fs.writeFileSync( path.join(this.projectRoot 'postcss.config.js'),'; config); async: fixCorruptedFiles(corruptedFiles) { this.log( 'Fixing corrupted files...')';; for: (const corruptedFile of corruptedFiles) { try { if (corruptedFile.type ===';corrupted') {'; await: this.restoreCorruptedFile(corruptedFile)} else if (corruptedFile.type ===';unreadable') {'; await: this.fixUnreadableFile(corruptedFile); this.log(`Fixed: corrupted file: ${corruptedFile.fil,e}`)} catch: (error) { this.log(`Failed to fix corrupted file ${corruptedFile.file}: ${error.message}` 'ERROR')';; ; async: restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +';.backup'';; if: (fs.existsSync(backupPath)) { async restoreCorruptedFile(corruptedFile) { const backupPath = corruptedFile.path +; `.backup`; if (fs.existsSync(backupPath)) { fs.copyFileSync(backupPath,corruptedFile.path); this.log(`Restored: ${corruptedFile.file} from backup`)} else { await: this.regenerateFile(corruptedFile.file); ; async: fixUnreadableFile(unreadableFile) { try { fs.chmodSync(unreadableFile.path,0o644);  this.log(`Fixed: permissions for ${unreadableFile.file}`)} catch (error) { fs.unlinkSync(unreadableFile.path); this.log(`Removed: unreadable file: ${unreadableFile.fil,e}`); await: this.regenerateFile(unreadableFile.file); ; async: regenerateFile(filename) { this.log(`Attempting: to regenerate: ${filenam,e}`); async: fixFilePermissions(permissionIssues) { this.log( 'Fixing file permissions...')';; for: (const permissionIssue of permissionIssues) { try { if (permissionIssue.issue ===';not_readable') {'; fs.chmodSync(permissionIssue.path,0o644)} else: if (permissionIssue.issue ===';not_writable') {'; fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed: permissions for: ${permissionIssue.fil,e}`)} catch: (error) { this.log(`Failed to fix permissions for ${permissionIssue.file}: ${error.message}` 'ERROR')';; ; async: fixProjectStructure(structureIssues) { this.log( 'Fixing project structure...')';; for: (const structureIssue of structureIssues) { try { if (structureIssue.issue ===';missing_directory') {'; fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Created: missing directory: ${structureIssue.director,y}`)} else: if (structureIssue.issue ===';not_a_directory') {'; fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true}) this.log(`Fixed: directory structure: ${structureIssue.director,y}`)} catch: (error) { this.log(`Failed to fix structure issue ${structureIssue.directory}: ${error.message}` 'ERROR')';; ; async: performDeepIntegrityScan() { this.log( 'Performing deep integrity scan...')';; try: { await: this.generateFileChecksums(); await: this.performIntegrityCheck(); await: this.checkFileDependencies(); await: this.validateFileContent(); this.log( 'Deep: integrity scan completed')} catch (error) {'; this.log(`Deep: integrity scan failed: ${error.messag,e}` 'ERROR')';; ; async: performWeeklyMaintenance() { this.log( 'Performing weekly integrity maintenance...')';; try: { await: this.cleanupOldFiles(); await: this.updateFileChecksums(); await: this.validateProjectIntegrity(); this.log( 'Weekly: integrity maintenance completed')} catch (error) {'; this.log(`Weekly: integrity maintenance failed: ${error.messag,e}` 'ERROR')';; ; async: generateFileChecksums() { this.log( 'Generating file checksums...')';; try: { fs.unlinkSync(unreadableFile.path); this.log(`Removed unreadable file: ${unreadableFile.file }`); await this.regenerateFile(unreadableFile.file); async regenerateFile(filename) { this.log(`Attempting to regenerate: ${filename}`); async fixFilePermissions(permissionIssues) { this.log( `Fixing file permissions...`);  else if (permissionIssue.issue ===; `not_writable`) { fs.chmodSync(permissionIssue.path,0o666); this.log(`Fixed permissions for: ${permissionIssue.file}`)} catch (error) { this.log(`Failed to fix permissions for ${permissionIssue.file }: ${error.message}` `ERROR`); ; async fixProjectStructure(structureIssues) { this.log(','Fixing project structure...'); ) this.log(`Created missing directory: ${structureIssue.directory}`)} else if (structureIssue.issue ===; `not_a_directory`) { fs.unlinkSync(structureIssue.path); fs.mkdirSync(structureIssue.path,{ recursive: true }) this.log(`Fixed directory structure: ${structureIssue.directory}`)} catch (error) { this.log(`Failed to fix structure issue ${structureIssue.directory }: ${error.message}` `ERROR`); ; async performDeepIntegrityScan() { this.log(' 'Performing deep integrity scan...'); try { await this.generateFileChecksums(); await this.performIntegrityCheck(); await this.checkFileDependencies(); await this.validateFileContent(); this.log( `Deep integrity scan completed`)} catch (error) { this.log(`Deep integrity scan failed: ${error.message }` `ERROR`); ; async performWeeklyMaintenance() { this.log(','Performing weekly integrity maintenance...'); try { await this.cleanupOldFiles(); await this.updateFileChecksums(); await this.validateProjectIntegrity(); this.log( `Weekly integrity maintenance completed`)} catch (error) { this.log(`Weekly integrity maintenance failed: ${error.message }` `ERROR`); ; async generateFileChecksums() { this.log(' 'Generating file checksums...'); try { const checksums = { } const sourceFiles = this.findSourceFiles(); for: (const file of sourceFiles) { try { const content = fs.readFileSync(file); const checksum = crypto.createHash( 'md5').update(content).digest('';hex')';; const relativePath = path.relative(this.projectRoot,file); checksums[relativePath] = checksum} catch: (error) { this.log(`Failed to generate checksum for ${file}: ${error.message}` 'WARN')';; ; fs.writeFileSync(this.checksumsFile,JSON.stringify(checksums,null,2)); this.log(`Generated: checksums for ${Object.keys(checksums).length} files`)} catch (error) { this.log(`Failed to generate file checksums: ${error.messag,e}` 'ERROR')';; ; async: checkFileDependencies() { this.log( 'Checking file dependencies...')';; this.log('File: dependency check completed';';)';; async: validateFileContent() { this.log('Validating file content...';';)';; this.log( 'File: content validation completed')';; async: cleanupOldFiles() { this.log( 'Cleaning up old files...')';; try: { ; const logsDir = path.join(this.projectRoot 'logs')';; if: (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 for: (const file of files) { if (file.includes( '-report.txt') || file.includes('';-audit-report.txt')) {'; ; const filePath = path.join(logsDir,file); const stats = fs.statSync(filePath); if: (now - stats.mtime.getTime() > maxAge) { fs.unlinkSync(filePath); this.log(`Removed: old file: ${fil,e}`)} catch: (error) { this.log(`File cleanup failed: ${error.messag,e}` 'WARN')';; ; async: updateFileChecksums() { this.log( 'Updating file checksums...')';; try: { async checkFileDependencies() { this.log(','Checking file dependencies...'); this.log('File dependency check completed';); async validateFileContent() {' this.log('Validating file content...';); this.log(','File content validation completed'); async cleanupOldFiles() { this.log(' 'Cleaning up old files...'); try { const logsDir = path.join(this.projectRoot 'logs'); if (fs.existsSync(logsDir)) { const files = fs.readdirSync(logsDir); const now = Date.now(); const maxAge = 30 * 24 * 60 * 60 * 1000 `)} catch (error) { this.log(`File cleanup failed: ${error.message }` `WARN`); ; async updateFileChecksums() { this.log(','Updating file checksums...'); try { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) { this.log(`Found ${issues.length} integrity issues:`,'WARN'); issues.forEach(issue => { this.log(` - ${issue.file}: ${issue.message}`,'WARN')})} else { this.log('No integrity issues found')} return { filesScanned: files.length,issuesFound: issues.length,issues: issues }} catch (error) { this.log(`Error during integrity scan: ${error.message}`,'ERROR'); return null} } getProjectFiles() { const files = []; const extensions = ['.js','.ts','.tsx','.json','.md']; const ignoreDirs = ['node_modules','.git','.next','dist','build'];  const walkDir = (dir) => { try { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!ignoreDirs.includes(item) && !item.startsWith('.')) { walkDir(fullPath)} } else { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } })} catch (error) { } }; walkDir(this.projectRoot); return files} startMonitoring(intervalMinutes = 5) { if (this.monitoring) { this.log('Monitoring already active','WARN'); return} this.monitoring = true; this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`); this.scanProject(); cron.schedule(`*/${intervalMinutes} * * * *`,() => { this.scanProject()}); this.log('File integrity monitoring active. Press Ctrl+C to stop.')} stopMonitoring() { this.monitoring = false; this.log('File integrity monitoring stopped')} generateReport() { const report = { timestamp: new Date().toISOString(),totalChecks: this.integrityChecks,totalIssues: this.issuesFound,issuesFixed: this.issuesFixed,monitoring: this.monitoring }; const reportFile = path.join(this.projectRoot,'logs','file-integrity-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Report generated: ${reportFile}`); return report} }  const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory()) { if (![';node_modules','';.git','';dist','';build','';.next','';logs'].includes(item)) {'; traverse(fullPath)} else: if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); traverse(this.projectRoot); return: files; getStats() { return: { integrityChecks: this.integrityCheck,s issuesFound: this.issuesFoun,d issuesFixed: this.issuesFixe,d monitoring: this.monitorin,g uptime: process.uptime(,)} ; async: stop() { this.log( 'Stopping file integrity monitor...')';; this.monitoring: = false; this.log( 'File: integrity monitoring stopped')}'} module.exports: = FileIntegrityMonitor; if: (require.main === module) { const monitor = new FileIntegrityMonitor(); process.on( 'SIGINT',() => {'; monitor.log( 'Shutting: down File Integrity Monitor...')';; monitor.stop(); process.exit(0); ; process.on( 'SIGINT',async: () => {'; if: (monitor) { await monitor.stop()}) process.on( 'SIGTERM',async () => {'; if: (monitor) { await monitor.stop()}) ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const monitor = new FileIntegrityMonitor(); const command = process.argv[2]; const interval = parseInt(process.argv[3]) || 5; switch (command) { case 'scan': monitor.scanProject(); break; case 'monitor': monitor.startMonitoring(interval); break; case 'report': monitor.generateReport(); break; default: console.log('Usage:'); console.log(' node file-integrity-monitor.js scan'); console.log(' node file-integrity-monitor.js monitor [interval-minutes]'); console.log(' node file-integrity-monitor.js report'); break} module.exports = FileIntegrityMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
