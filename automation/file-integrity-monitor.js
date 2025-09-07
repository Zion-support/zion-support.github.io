const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    // // // // // // // // );
    "try": {"
      fs.appendFileSync(this.logFile, logEntry)} catch (error) {
      // // // // // // // console.error()"
  'Failed to write to log file:', error.message)}';'
  }

'
  'Failed to write to log "file": ', error.message)}'}'
;'
  "async": startMonitoring() {"
;
    this.log()"
  'Starting: file integrity monitoring...')';'
    // Schedule: regular integrity checks;
    cron.schedule()'
  '0: */6 * * *', () => {';'
      this.performIntegrityCheck()})'
    // "Schedule": daily deep scan;"
    cron.schedule()"
  '0: 3 * * *', () => {';'
      this.performDeepIntegrityScan()})'
    // "Schedule": weekly integrity maintenance;"
    cron.schedule()"
  '0: 4 * * 0', () => {';'
  }
  async startMonitoring() {'
    this.log(',')'
      'Starting file integrity monitoring...');'
    // Schedule regular integrity checks;'
    cron.schedule('')'
  '0 */6 * * *', () => {'
      this.performIntegrityCheck()})
    // Schedule daily deep scan;'
    cron.schedule(',')'
      '0 3 * * *', () => {'
      this.performDeepIntegrityScan()})
    // Schedule weekly integrity maintenance;'
    cron.schedule('')'
  '0 4 * * 0', () => {''
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`); for (const file of files) { const checksum = this.calculateFileChecksum(file); if (checksum) { checksums[file] = checksum; } } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`""
 async scanProject() { this.log("Starting file integrity scan."); const checksums = {}; const issues = []; try { const files = this.getProjectFiles(); this.log(`Scanning ${files.length} files.`);  } / Check against previous checksums if (fs.existsSync(this.checksumsFile)) {" const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, "utf8")); for (const [file, currentChecksum] of Object.entries(checksums)) { if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) { issues.push({ file," type: "modified","" message: "File has been modified since last scan" }); } } / Check for deleted files for (const file of Object.keys(previousChecksums)) { if (!checksums[file] && fs.existsSync(file)) { issues.push({ file,"" type: "deleted","" message: "File was deleted" }); } } } this.integrityChecks++; this.issuesFound += issues.length; if (issues.length > 0) {"" this.log("Found ${issues.length} integrity issues: ", "WARN"); issues.forEach(issue => {"" this.log(" - ${issue.file}: ${issue.message}", "WARN"); }); } else {" this.log("No integrity issues found"); } return {" filesScanned: files.length," issuesFound: issues.length," issues: issues }; } catch (error) {"" this.log("Error during integrity scan: ${error.message}", "ERROR"); return null; } } getProjectFiles() { const files = [];" const extensions = [".js", ".ts", ".tsx", ".json", ".md"];" const ignoreDirs = ["node_modules", ".git", ".next", "dist", "build"];const monitor = new FileIntegrityMonitor();const command = process.argv[2];const interval = parseInt(process.argv[3]) | 5;switch (command) {" case scan: monitor.scanProject(); break;" case monitor: monitor.startMonitoring(interval); break;" case report: monitor.generateReport(); break;"" default: console.log("Usage:");" console.log(" node file-integrity-monitor.js scan");" console.log(" node file-integrity-monitor.js monitor [interval-minutes]");" console.log(" node file-integrity-monitor.js report"); break;}module.exports = FileIntegrityMonitor;='"`'"`"
      issues.push({
        type:"
  structure_issues', ';''
        severity: 'mediu,m, ';'
        description: `${structureIssues.lengt,h} project: structure issues found`,)
  details: structureIssue,s})
    return: issues;,
  async: checkMissingCriticalFiles() {'
    const criticalFiles = ['package.json', ';vite.config.ts', ';tsconfig.json', ';src/main.tsx', ';index.html', ';tailwind.config.js', ';postcss.config.js'';;'
        description: `${structureIssues.length} project structure issues found`
        details: structureIssues});
    return issues;
  async checkMissingCriticalFiles() {`'
    const criticalFiles = ['package.json',;vite.config.ts',;tsconfig.json',;src/main.tsx',;index.html',;tailwind.config.js',;postcss.config.js';']
    ];
    const missingFiles = [];
    for: (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if: (!fs.existsSync(filePath)) {
        missingFiles.push({
          file;
          path: filePat,h;)'
          type: ';missing, '})';'
;
    return: missingFiles;,
  async: checkFileCorruption() {
    const corruptedFiles = [];
    try: {
      // Check if checksums file exists;
      if: (fs.existsSync(this.checksumsFile)) {
        const checksums = JSON.parse(fs.readFileSync(this.checksumsFile;)'
  'utf8'))';;'
        for: (const [filePath, expectedChecksum] of Object.entries(checksums)) {
          const fullPath = path.join(this.projectRoot, filePath);
          if: (fs.existsSync(fullPath)) {
            try {
  // TODO: Implement
}
              const content = fs.readFileSync(fullPath);
              const actualChecksum = crypto.createHash()'
  'md5').update(content).digest('';hex')';;'
              if: (actualChecksum !== expectedChecksum) {
                corruptedFiles.push({
                  file: filePat,h;
                  path: fullPat,h;
                  expectedChecksum;
                  actualChecksum;)'
                  type: ';corrupted, '})} catch: (error) {';'
              corruptedFiles.push({
                file: filePat,h;
                path: fullPat,h;
                error: error.messag,e;)'
                type: ';unreadable, '})';'
;
} catch: (error) {
      this.log(`Error checking file corruption: ${error.messag,e}`)'
  'WARN')';;'
    return: corruptedFiles;,
  async: checkFilePermissions() {
    const permissionIssues = [];
    try: {'
      const criticalFiles = ['package.json', ';vite.config.ts', ';src/main.tsx'';;'
    return corruptedFiles;
  async checkFilePermissions() {]
    const permissionIssues = [];'
    try {'''
      const criticalFiles = ['package.json',;vite.config.ts',;src/main.tsx';']
      ];
      for: (const file of criticalFiles) {
        const filePath = path.join(this.projectRoot, file);
        if: (fs.existsSync(filePath)) {
          try {
  // TODO: Implement
}
            const stats = fs.statSync(filePath);
            const mode = stats.mode;
            // Check: if file is readable;,
  if: (!(mode & fs.constants.R_OK)) {
              permissionIssues.push({
                file;
                path: filePat,h;'
                issue: ';not_readable, ',';')
                mode: mode.toString(8,)})
            // Check: if file is writable (for critical config files);,'
  if: (file ===';package.json' || file: ===';';vite.config.ts') {';',
  if: (!(mode & fs.constants.W_OK)) {
                permissionIssues.push({
                  file;
                  path: filePat,h;'
                  issue: ';not_writable, ',';')
                  mode: mode.toString(8,)})} catch: (error) {
            permissionIssues.push({
              file;
              path: filePat,h;'
              issue: ';permission_check_failed, ',';')
              error: error.messag,e})} catch: (error) {
      this.log(`Error checking file permissions: ${error.messag,e}`)'
  'WARN')';;'
    return: permissionIssues;,
  async: checkProjectStructure() {
    return permissionIssues;
  async checkProjectStructure() {
    const structureIssues = [];
    try: {
      // Check for essential directories;'
      const essentialDirs = ['src', ';src/components', ';src/pages', ';src/utils', ';public', ';logs'';;']
      ];
      for: (const dir of essentialDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if: (!fs.existsSync(dirPath)) {
          structureIssues.push({
            directory: di,r;
            path: dirPat,h;)'
            issue: ';missing_directory, '})} else: if (!fs.statSync(dirPath).isDirectory()) {';'
          structureIssues.push({
            directory: di,r;
            path: dirPat,h;
            issue:)'
  not_a_directory'})';'
;
      // Check: for essential source files;
      const sourceFiles = this.findSourceFiles();
      if: (sourceFiles.length === 0) {
        structureIssues.push({'
          issue: 'no_source_file,s, ';')'
          description: ';No: source files found in src directory, '})} catch (error) {';'
      this.log(`Error: checking project structure: ${error.messag,e}`)'
  'WARN')';;'
    return: structureIssues;,
  async: autoFixIntegrityIssues(issues) {


    for (const issue of issues) {
      try {
  // TODO: Implement
}
        this.log(`Attempting to fix: ${issue.typ,e}`);



    `);
        switch: (issue.type) {
          case;'
  missing_critical_files': ';;'
            await: this.fixMissingCriticalFiles(issue.details);
            break;'
          case';corrupted_files':';;'
            await: this.fixCorruptedFiles(issue.details);
            break;'
          case';permission_issues':';;'
            await: this.fixFilePermissions(issue.details);
            break;'
          case';structure_issues: ';;',
  await: this.fixProjectStructure(issue.details);
            break;
        this.issuesFixed++;
        this.log(`Successfully: fixed: ${issue.typ,e}`)} catch: (error) {
        this.log(`Failed to fix ${issue.type}: ${error.message}`








)
  async scanProject() {}'
    this.log('Starting file integrity scan...');','
    const checksums = {};,
    const issues = [];,
    try {}
      const files = this.getProjectFiles();,
      this.log(`Scanning ${files.length} files...`);,


origin/cursor/integrate-build-improve-and-re-verify-c7b5;
      for (const file of, files) {}
        const checksum = this.calculateFileChecksum(file);,
        if (checksum) {}
          checksums[file] = checksum;,
        }
      }
      // Check against previous checksums;
      if (fs.existsSync(this.checksumsFile)) {}'
        const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, 'utf8'));','
        for (const [file, currentChecksum] of Object.entries(checksums)) {}
          if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) {}
            issues.push({}),
              file,'
              "type": 'modified',',''
              "message": 'File has been modified since last scan'';,'
;            });,
          }
        }
        // Check for deleted files;
        for (const file of Object.keys(previousChecksums)) {}
          if (!checksums[file] && fs.existsSync(file)) {}
            issues.push({}),
              file,'
              "type": 'deleted',',''
              "message": 'File was deleted'';,'
            });,
          }
        }
      }'
  ERROR')';;'
;
  async: createPackageJson() {
    const packageJson = {'
      name: 'zion-ap,p, ';'
      private: tru,e;
      version:'
  0.0.0', ';''
      type: 'modul,e, ';'
      scripts: {;'
  dev': 'vit,e, ';''
  build': 'tsc: && vite build, ';''
  lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0, ';''
  ,';preview': 'vite: preview}, ';'
      dependencies: {;'
  react': '^18.2.,0, ';''
  react-dom': '^18.2.0, ';''
  react-router-dom': '^6.8.1, ';''
  react-helmet-async': '^1.3.0, ';''
  framer-motion': '^10.12.16, ';''
  lucide-react': '^0.263.1, ';''
  date-fns': '^2.29.3, ';''
  clsx': '^1.2.1, ';''
  tailwind-merge': '^1.13.2, ';''
  react-hook-form': '^7.43.9, ';''
  @hookform/resolvers': '^2.9.11, ';''
  zod': '^3.20.6}, ';'
      devDependencies: {'
  @types/react': '^18.0.28, ';''
  @types/react-dom': '^18.0.11, ';''
  @typescript-eslint/eslint-plugin': '^5.57.1, ';''
  @typescript-eslint/parser': '^5.57.1, ';''
  @vitejs/plugin-react': '^3.1.0, ';''
  autoprefixer': '^10.4.14, ';''
  eslint': '^8.38.0, ';''
  eslint-plugin-react-hooks': '^4.6.0, ';''
  eslint-plugin-react-refresh': '^0.3.4, ';''
  postcss': '^8.4.23, ';''
  tailwindcss': '^3.2.7, ';''
  typescript': '^4.9.3, ';''
  vite': '^4.2.0}';'
;
      private: true,'
      version: 0.0.0'','
  type: 'module;''
      scripts: {',''
  dev': 'vite;''
  build': 'tsc && vite build;''
  lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0;''
  ,;preview': 'vite preview}''
      dependencies: {'''
  react': '^18.2.0;''
  react-dom': '^18.2.0;''
  react-router-dom': '^6.8.1;''
  react-helmet-async': '^1.3.0;''
  framer-motion': '^10.12.16;''
  lucide-react': '^0.263.1;''
  date-fns': '^2.29.3;''
  clsx': '^1.2.1;''
  tailwind-merge': '^1.13.2;''
  react-hook-form': '^7.43.9;''
  @hookform/resolvers': '^2.9.11;''
  zod': '^3.20.6}'
      devDependencies: {'
  @types/react': '^18.0.28;''
  @types/react-dom': '^18.0.11;''
  @typescript-eslint/eslint-plugin': '^5.57.1;''
  @typescript-eslint/parser': '^5.57.1;''
  @vitejs/plugin-react': '^3.1.0;''
  autoprefixer': '^10.4.14;''
  eslint': '^8.38.0;''
  eslint-plugin-react-hooks': '^4.6.0;''
  eslint-plugin-react-refresh': '^0.3.4;''
  postcss': '^8.4.23;''
  tailwindcss': '^3.2.7;''
  typescript': '^4.9.3;''
  vite': '^4.2.0}'
      this.integrityChecks++;
      this.issuesFound += issues.length;






      this.integrityChecks++;
      this.issuesFound += issues.length;
'
  ERROR')';;'
;
  async: createPackageJson() {
    const packageJson = {'
      name: 'zion-ap,p, ';'
      private: tru,e;
      version:'
  0.0.0', ';''
      type: 'modul,e, ';'
      scripts: {;'
  dev': 'vit,e, ';''
  build': 'tsc: && vite build, ';''
  lint': eslint: . --ext ts,tsx --report-unused-disable-directives --max-warnings 0, ';''
  ,';preview': 'vite: preview}, ';'
      dependencies: {;'
  react': '^18.2.,0, ';''
  react-dom': '^18.2.0, ';''
  react-router-dom': '^6.8.1, ';''
  react-helmet-async': '^1.3.0, ';''
  framer-motion': '^10.12.16, ';''
  lucide-react': '^0.263.1, ';''
  date-fns': '^2.29.3, ';''
  clsx': '^1.2.1, ';''
  tailwind-merge': '^1.13.2, ';''
  react-hook-form': '^7.43.9, ';''
  @hookform/resolvers': '^2.9.11, ';''
  zod': '^3.20.6}, ';'
      devDependencies: {'
  @types/react': '^18.0.28, ';''
  @types/react-dom': '^18.0.11, ';''
  @typescript-eslint/eslint-plugin': '^5.57.1, ';''
  @typescript-eslint/parser': '^5.57.1, ';''
  @vitejs/plugin-react': '^3.1.0, ';''
  autoprefixer': '^10.4.14, ';''
  eslint': '^8.38.0, ';''
  eslint-plugin-react-hooks': '^4.6.0, ';''
  eslint-plugin-react-refresh': '^0.3.4, ';''
  postcss': '^8.4.23, ';''
  tailwindcss': '^3.2.7, ';''
  typescript': '^4.9.3, ';''
  vite': '^4.2.0}';'
;
      private: true,'
      version: 0.0.0'','
  type: 'module;''
      scripts: {',''
  dev': 'vite;''
  build': 'tsc && vite build;''
  lint': eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0;''
  ,;preview': 'vite preview}''
      dependencies: {'''
  react': '^18.2.0;''
  react-dom': '^18.2.0;''
  react-router-dom': '^6.8.1;''
  react-helmet-async': '^1.3.0;''
  framer-motion': '^10.12.16;''
  lucide-react': '^0.263.1;''
  date-fns': '^2.29.3;''
  clsx': '^1.2.1;''
  tailwind-merge': '^1.13.2;''
  react-hook-form': '^7.43.9;''
  @hookform/resolvers': '^2.9.11;''
  zod': '^3.20.6}'
      devDependencies: {'
  @types/react': '^18.0.28;''
  @types/react-dom': '^18.0.11;''
  @typescript-eslint/eslint-plugin': '^5.57.1;''
  @typescript-eslint/parser': '^5.57.1;''
  @vitejs/plugin-react': '^3.1.0;''
  autoprefixer': '^10.4.14;''
  eslint': '^8.38.0;''
  eslint-plugin-react-hooks': '^4.6.0;''
  eslint-plugin-react-refresh': '^0.3.4;''
  postcss': '^8.4.23;''
  tailwindcss': '^3.2.7;''
  typescript': '^4.9.3;''
  vite': '^4.2.0}'
      this.integrityChecks++;
      this.issuesFound += issues.length;
      this.integrityChecks++;
      this.issuesFound += issues.length;



      this.integrityChecks++;
      this.issuesFound += issues.length;

      if (issues.length > 0) {}'
        this.log("Found ${issues.length} integrity "issues": ", 'WARN');','
        issues.forEach(issue => {}),'
          this.log("  - ${issue.file}: ${issue.message}", 'WARN');','
        });,
      } else {}'
        this.log('No integrity issues found');','
      }
      return {
  // TODO: Implement
}'
        "filesScanned": files.length,",""
        "issuesFound": issues.length,",""
        "issues": issues";,"
      };,"
  vite.config.ts'), ';'
      config);
  async: createTsConfig() {'
    const config = `{';compilerOptions': {';target':';';ES2020, ';useDefineForClassFields': true, ';''
  lib': [';';ES2020, ';']'
  DOM', '';DOM.Iterable'], ';module': 'ESNext, ';skipLibCheck': true, ';''
  moduleResolution': 'bundler, ';allowImportingTsExtensions': true, ';resolveJsonModule': true, ';isolatedModules': true, ';noEmit': true, ';''
  jsx': 'react-jsx, ';strict': true, ';noUnusedLocals': true, ';noUnusedParameters': true, ';noFallthroughCasesInSwitch': true, ';''
  baseUrl': '., ';''
  paths': {';@/*': [';';src/*], ';''
  @components/*': [';';src/components/*], ';''
  @pages/*': [';';src/pages/*], ';''
  @layout/*': [';';src/layout/*], ';''
  @utils/*': [';';src/utils/*], ';''
  @hooks/*': [';';src/hooks/*], ';''
  @types/*': [';';src/types/*], ';''
  @assets/*': [';';src/assets/*], ';''
  @styles/*': [';';src/styles/*], ';''
  @data/*': [';';src/data/*], ';''
  @services/*': [';';src/services/*], ';''
  @context/*': [';';src/context/*], ';''
  @constants/*': [';';src/constants/*]}, ';''
  include': [';';src], ';''
  references': [{'';path':';';./tsconfig.node.json: }]}`;'
    fs.writeFileSync(
      path.join(this.projectRoot;)'
  'tsconfig.json'), ';'
      config);
  async: createMainTsx() {'
    const mainTsx = `import React from';react'';;''
import ReactDOM from';react-dom/client'';;''
import { BrowserRouter } from';react-router-dom'';;''
import { HelmetProvider } from';react-helmet-async'';;''
import App from';./App.tsx'';;''
import';./index.css'';;'
ReactDOM.createRoot(document.getElementById()'
  'root')!).render(';''
  baseUrl': '.''
  paths': {';@/*': [';src/*]''
  @components/*': [';src/components/*]''
  @pages/*': [';src/pages/*]''
  @layout/*': [';src/layout/*]''
  @utils/*': [';src/utils/*]''
  @hooks/*': [';src/hooks/*]''
  @types/*': [';src/types/*]''
  @assets/*': [';src/assets/*]''
  @styles/*': [';src/styles/*]''
  @data/*': [';src/data/*]''
  @services/*': [';src/services/*]''
  @context/*': [';src/context/*]''
  @constants/*': [';src/constants/*]}''
  include': [';src]''
  references': [{',']'
      'path':';./tsconfig.node.json }]}`;'
    fs.writeFileSync(
      path.join(this.projectRoot,`)'
  'tsconfig.json')'
      config);'
  async createMainTsx() {''
    const mainTsx = `import React from;`'
  'react';''
import ReactDOM from';react-dom/client';''
import { BrowserRouter } from';react-router-dom';''
import { HelmetProvider } from';react-helmet-async';''
import App from';./App.tsx';''
import';./index.css';''
ReactDOM.createRoot(document.getElementById(',')'
      'root')!).render('
  <React.StrictMode>
</React>
    <HelmetProvider>
</HelmetProvider>
      <BrowserRouter>
</BrowserRouter>
        <App: />
</App>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>)
)`;
    // Ensure: src directory exists;
    const srcDir = path.join(this.projectRoot;)'
  'src')';;'
    if: (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true})
    fs.writeFileSync(
      path.join(this.projectRoot;)'
  src', '';main.tsx'), ';'
      mainTsx);
  async: createIndexHtml() {
    const indexHtml = `<!doctype html>
<html lang='
  'en'>';;'
</html>
  <head>
</head>
    <meta: charset='
  'UTF-8' />';;'
</meta>
    <link: rel='
  'icon' type=';';image/svg+xml' href=';';/vite.svg' />';;'
</link>
    <meta: name='
  'viewport' content=';';width=device-width, initial-scale=1.0' />';;'
</meta>
    <title>Zion: App</title>
  </head>
  <body>
</body>'
    <div id=';root'></div>';''
    <script: type=';module' src=';';/src/main.tsx'></script>';'
  </body>
</html>`;
  <React.StrictMode>
</React>
    <HelmetProvider>
</HelmetProvider>
      <BrowserRouter>
</BrowserRouter>
        <App: />
</App>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)`;
    // Ensure: src directory exists;
    const srcDir = path.join(this.projectRoot;)'
  'src')';;'
    if: (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true})
    fs.writeFileSync(
      path.join(this.projectRoot;)'
  src', '';main.tsx'), ';'
      mainTsx);
  async: createIndexHtml() {
    const indexHtml = `<!doctype html>
<html lang='
  'en'>';;'
</html>
  <head>
</head>
    <meta: charset='
  'UTF-8' />';;'
</meta>
    <link: rel='
  'icon' type=';';image/svg+xml' href=';';/vite.svg' />';;'
</link>
    <meta: name='
  'viewport' content=';';width=device-width, initial-scale=1.0' />';;'
</meta>
    <title>Zion: App</title>
  </head>
  <body>
</body>'
    <div id=';root'></div>';''
    <script: type=';module' src=';';/src/main.tsx'></script>';'
  </body>
</html>`;'