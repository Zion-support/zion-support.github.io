

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class PM2ErrorPrevention {;
  constructor() {;
    this.projectRoot = process.cwd()}}

    this.setupMonitoring();
;
    // Start the prevention loop;
    this.startPreventionLoop()}
;
  setupMonitoring() {;
    // Create PM2 ecosystem configuration for error prevention;
    const ecosystemConfig = {;
      name: 'error-prevention',;
      script: ''scripts/automation/pm2-error-prevention.cjs'',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '1G',;
      env: {;
        NODE_ENV: 'development',;
        PM2_ERROR_PREVENTION: 'true',},};
;
    // Write PM2 ecosystem config;
    const ecosystemPath = path.join(;
      this.projectRoot,ecosystem-error-prevention.config.cjs';

    );
    fs.writeFileSync(;
      ecosystemPath,;
      module.exports = ${JSON.stringify(ecosystemConfig, null, 2)};
    `);


    console.log(`✅ PM2 ecosystem configuration created`)}
;
  startPreventionLoop() {;
    setInterval(async () => {;
      try {;
        await this.runPreventionChecks()}, this.config.checkInterval)}

    await this.checkTypeScriptErrors();
    
    // Check 2: Import issues
    await this.checkImportIssues();
    
    // Check 3: Syntax issues
    await this.checkSyntaxIssues();
;

    // Check 4: Unused imports;
    await this.checkUnusedImports()}
;
  async checkTypeScriptErrors() {;
    try {;
      const result = execSync('npm run type-check' {;
        cwd: this.projectRoot,;
        encoding: 'utf8',;
        stdio: 'pipe',});

        await this.autoFixTypeScriptErrors()}
    }
  }

  async checkImportIssues() {
    const sourceFiles = await this.getSourceFiles();
    let importIssues = 0;

      const uniqueImports = new Set(importLines);
      if (importLines.length !== uniqueImports.size) {;
        importIssues++}
    }
;
    if (importIssues > 0) {console.log(⚠️  Found ${importIssues} import issues``);
;
      if (this.config.autoFix) {;
        await this.autoFixImportIssues()}


    }
  }

  async checkSyntaxIssues() {
    const sourceFiles = await this.getSourceFiles();
    let syntaxIssues = 0;

        syntaxIssues++}
    }
;
    if (syntaxIssues > 0) {console.log(`⚠️  Found ${syntaxIssues} syntax issues)}
  }
;
  async checkUnusedImports() {;
    try {;
      // Run ESLint to check for unused imports;
      const result = execSync('npm run lint -- --quiet' {;
        cwd: this.projectRoot,;
        encoding: 'utf8',;
        stdio: 'pipe',});
;
      const unusedImportCount = (result.match(/'unused/g') || []).length;
;

      if (unusedImportCount > 0) {console.log(⚠️  Found ${unusedImportCount} unused imports`);
;
        if (this.config.autoFix) {;
          await this.autoFixUnusedImports()}

  }
;
  async autoFixTypeScriptErrors() {;
    console.log('🔧 Auto-fixing TypeScript errors...')});
;
      console.log('✅ TypeScript errors auto-fixed');

      console.error('❌ Failed to auto-fix TypeScript errors:', error)}
  }
;
  async autoFixImportIssues() {;
    console.log('🔧 Auto-fixing import issues...')});
;
      console.log('✅ Import issues auto-fixed');

      console.error('❌ Failed to auto-fix import issues:', error)}
  }
;
  async autoFixSyntaxIssues() {;
    console.log('🔧 Auto-fixing syntax issues...')});
;
      console.log('✅ Syntax issues auto-fixed');

      console.error('❌ Failed to auto-fix syntax issues:', error)}
  }
;
  async autoFixUnusedImports() {;
    console.log('🔧 Auto-fixing unused imports...')});
;
      console.log('✅ Unused imports auto-fixed');

      console.error('❌ Failed to auto-fix unused imports:', error)}
  }

  async getSourceFiles() {
    const sourceFiles = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
;
        if (;
          stat.isDirectory() &&;
          !item.startsWith('.') &&;
          item !== 'node_modules';
        ) {;
          scanDirectory(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {;
          sourceFiles.push(fullPath)}
      }
    };
    
    scanDirectory(path.join(this.projectRoot, 'src'));
    return sourceFiles}

    console.log('🚀 PM2 Error Prevention started')}
;
  onStop() {;
    console.log('🛑 PM2 Error Prevention stopped')}
;
  onRestart() {;
    console.log('🔄 PM2 Error Prevention restarted')}
}

  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

// Start the automation;
errorPrevention.start();
