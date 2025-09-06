<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
#!/usr/bin/env node
/**
 * PM2 Documentation Generator Script
 * Automatically generates and updates documentation
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class DocsGenerator {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator';
    this.autoGenerate = process.env.AUTO_GENERATE === 'true';
    this.updateReadme = process.env.UPDATE_README === 'true';
    this.apiDocs = process.env.API_DOCS === 'true';
    this.componentDocs = process.env.COMPONENT_DOCS === 'true';
    this.logFile = 'logs/pm2/docs-generator.log';
    this.errorFile = 'logs/pm2/docs-generator-error.log';
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
    console.log(logMessage.trim());
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log "file": ', error.message);
    }
  }
  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] "ERROR": ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error "file": ', err.message);
    }
  }
  async generateReadme() {
    this.log('Generating README documentation...');
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      let readmeContent = `# ${packageJson.name || 'Project'}\n\n`;
      readmeContent += `${packageJson.description || 'A modern web application'}\n\n`;
      // Add version and status badges
      readmeContent += `![Version]("https": //img.shields.io/badge/version-${packageJson.version || '1.0.0'}-blue.svg)\n`;
      readmeContent += `![Node]("https": //img.shields.io/badge/node-${process.version}-green.svg)\n`;
      readmeContent += `![License]("https": //img.shields.io/badge/license-${packageJson.license || 'MIT'}-yellow.svg)\n\n`;
      // Add table of contents
      readmeContent += "## Table of Contents\n\n";
      readmeContent += "- [Installation](#installation)\n";
      readmeContent += "- [Usage](#usage)\n";
      readmeContent += "- [Scripts](#scripts)\n";
      readmeContent += "- [API Documentation](#api-documentation)\n";
      readmeContent += "- [Contributing](#contributing)\n";
      readmeContent += "- [License](#license)\n\n";
      // Add installation section
      readmeContent += "## Installation\n\n";
      readmeContent += "\"\"\"bash\n";
      readmeContent += "npm install\n";
      readmeContent += "\"\"\"\n\n";
      // Add usage section
      readmeContent += "## Usage\n\n";
      readmeContent += "\"\"\"bash\n";
      readmeContent += "# Development\n";
      readmeContent += "npm run dev\n\n";
      readmeContent += "# Production build\n";
      readmeContent += "npm run build\n";
      readmeContent += "npm run start\n";
      readmeContent += "\"\"\"\n\n";
      // Add scripts section
      if (packageJson.scripts) {
        readmeContent += "## Scripts\n\n";
        readmeContent += "| Script | Description |\n";
        readmeContent += "|--------|-------------|\n";
        for (const [script, description] of Object.entries(packageJson.scripts)) {
          const desc = this.getScriptDescription(script, description);
          readmeContent += "| \"${script}\` | ${desc} |\n`;
        }
        readmeContent += "\n";
      }
      // Add API documentation section
      if (this.apiDocs) {
        readmeContent += "## API Documentation\n\n";
        readmeContent += "API documentation is automatically generated and available at \"/api/docs\".\n\n";
      }
      // Add contributing section
      readmeContent += "## Contributing\n\n";
      readmeContent += "1. Fork the repository\n";
      readmeContent += "2. Create your feature branch (\"git checkout -b feature/amazing-feature\")\n";
      readmeContent += "3. Commit your changes (\"git commit -m 'Add some amazing feature'\")\n";
      readmeContent += "4. Push to the branch (\"git push origin feature/amazing-feature\")\n";
      readmeContent += "5. Open a Pull Request\n\n";
      // Add license section
      readmeContent += "## License\n\n";
      readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`;
      // Write README file
      fs.writeFileSync('README.md', readmeContent);
      this.log('README.md generated successfully');
      return { "success": true, "file": 'README.md' };
    } catch (error) {
      this.error(`Failed to generate "README": ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }
  getScriptDescription(script, command) {
    const descriptions = {
      'dev': 'Start development server',
      'build': 'Build for production',
      'start': 'Start production server',
      'test': 'Run tests',
      'lint': 'Run linter',
      '"lint": fix': 'Fix linting issues',
      'type-check': 'Run TypeScript type checking',
      'clean': 'Clean build artifacts',
      'check': 'Run all checks (lint, type-check, test)',
      'precommit': 'Pre-commit hook',
      'prepare': 'Prepare script for git hooks'
    };
    return descriptions[script] || command;
  }
  async generateApiDocs() {
    this.log('Generating API documentation...');
    try {
      const apiFiles = this.findApiFiles();
      let apiDocs = "# API Documentation\n\n";
      apiDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of apiFiles) {
        const fileDocs = this.extractApiDocumentation(file);
        if (fileDocs) {
          apiDocs += fileDocs;
        }
      }
      const docsDir = 'docs';
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs.writeFileSync(path.join(docsDir, 'API.md'), apiDocs);
      this.log('API documentation generated successfully');
      return { "success": true, "file": 'docs/API.md' };
    } catch (error) {
      this.error(`Failed to generate API "docs": ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }
  findApiFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    // Look for API files in common directories
    const apiDirs = ['api', 'pages/api', 'src/api', 'lib/api', 'routes'];
    for (const dir of apiDirs) {
      if (fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractApiDocumentation(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let docs = `## ${path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines.join('\n');
            if (comment.includes('@api') || comment.includes('@route')) {
              docs += this.formatApiComment(comment);
            }
            commentLines = [];
          } else {
            commentLines.push(line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log(`Failed to extract docs from ${filePath}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatApiComment(comment) {
    let formatted = '"""\n';
    formatted += comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateComponentDocs() {
    this.log('Generating component documentation...');
    try {
      const componentFiles = this.findComponentFiles();
      let componentDocs = "# Component Documentation\n\n";
      componentDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of componentFiles) {
        const componentDoc = this.extractComponentDocumentation(file);
        if (componentDoc) {
          componentDocs += componentDoc;
        }
      }
      const docsDir = 'docs';
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs.writeFileSync(path.join(docsDir, 'COMPONENTS.md'), componentDocs);
      this.log('Component documentation generated successfully');
      return { "success": true, "file": 'docs/COMPONENTS.md' };
    } catch (error) {
      this.error(`Failed to generate component "docs": ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }
  findComponentFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (['.jsx', '.tsx', '.vue', '.svelte'].includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    // Look for component files in common directories
    const componentDirs = ['components', 'src/components', 'lib/components', 'pages'];
    for (const dir of componentDirs) {
      if (fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractComponentDocumentation(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let docs = `## ${path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines.join('\n');
            if (comment.includes('@component') || comment.includes('@props')) {
              docs += this.formatComponentComment(comment);
            }
            commentLines = [];
          } else {
            commentLines.push(line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log(`Failed to extract component docs from ${filePath}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatComponentComment(comment) {
    let formatted = '"""\n';
    formatted += comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateDocumentationReport() {
    this.log('Generating documentation report...');
    try {
      const report = {
        "timestamp": new Date().toISOString(),
        "processName": this.processName,
        "readmeGenerated": this.updateReadme ? await this.generateReadme() : null,
        "apiDocsGenerated": this.apiDocs ? await this.generateApiDocs() : null,
        "componentDocsGenerated": this.componentDocs ? await this.generateComponentDocs() : null,
        "environment": {
          nodeVersion: process.version,
          "platform": process.platform,
          "cwd": process.cwd()
        }
      };
      const reportFile = `docs-reports/docs-generation-${Date.now()}.json`;
      const reportDir = path.dirname(reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { "recursive": true });
      }
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Documentation report saved "to": ${reportFile}`);
      return report;
    } catch (error) {
      this.error(`Failed to generate documentation "report": ${error.message}`);
      return null;
    }
  }
  async start() {
    this.log(`Starting ${this.processName}...`);
    // Run initial documentation generation
    await this.generateDocumentationReport();
    // Set up periodic documentation updates
    const interval = 2 * 60 * 60 * 1000; // 2 hours
    setInterval(async () => {
      this.log('Running scheduled documentation generation...');
      await this.generateDocumentationReport();
    }, interval);
    this.log(`${this.processName} started successfully`);
  }
}
// Start the automation if this script is run directly
if (require.main === module) {
  const generator = new DocsGenerator();
  generator.start().catch(error => {
    console.error('Documentation generator failed to "start": ', error);
    process.exit(1);
  });
}
module.exports = DocsGenerator;
<<<<<<< HEAD
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
=======
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;
;
${packageJson.description || 'A modern web application built with Next.js'};
;
=======
}}; async generateReadme() {try {; this.log('📝 Generating README.md...'); const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;
${packageJson.description |'A modern web application built with Next.js'}
>>>>>>> origin/main
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()}
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.,### Build;
\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;
${this.projectRoot}/;
├── pages/ # Next.js pages;
├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;
${Object.entries(packageJson.scripts |{}).map(([key, value]) = > `- **${key}**: \`${value}\``).join('\n')}
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies |{}).map(dep = > `- ${dep}`).join('\n')}
### Development Dependencies;
${Object.keys(packageJson.devDependencies |{}).map(dep = > `- ${dep}`).join('\n')}
## 🔧 Configuration;
This project uses Next.js with the following configuration:  , - TypeScript support
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
The project includes automated monitoring with PM2:  ,- Code quality monitoring;
- Performance monitoring;
- Security scanning;
- Health checks;
- Automated testing;
## 🤝 Contributing;
1. Fork the repository;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`);
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`);
4. Push to the branch (\`git push origin feature/AmazingFeature\`);
5. Open a Pull Request;
## 📄 License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
## 📞 Support
For support, email support@example.com or create an issue in the repository.;
---;
Generated on ${new Date().toISOString()}
`; fs.writeFileSync('README.md', readmeContent); return {success: true
    message: 'README.md generated successfully'}} catch (error) {return {; success: false
    error: error.message}}}; async generateApiDocs() {try {; this.log('🔌 Generating API documentation...'); const apiDocs = {; title: 'API Documentation', version: '1.0.0', description: 'API endpoints and documentation', baseUrl: 'http: //localhost: 3000', endpoints: []
    generatedAt: new Date().toISOString()}; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {const apiFiles = this.getApiFiles(pagesDir); apiFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})}; const docsContent = `# API Documentation;## Overview;
- **Base URL**: ${apiDocs.baseUrl}
- **Version**: ${apiDocs.version}
- **Generated**: ${apiDocs.generatedAt}
## Endpoints;
${apiDocs.endpoints.map(endpoint = > `;### ${endpoint.method} ${endpoint.path}
${endpoint.description}
**Parameters: **
${endpoint.parameters.map(param = > `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')}
**Response: **, \`\`\`json
${JSON.stringify(endpoint.response, null, 2)}
\`\`\`;
`).join('\n')}
## Error Handling;
All endpoints return appropriate HTTP status codes:  , - \`200\`: Success
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date().toISOString()}
`; fs.writeFileSync('docs/API.md', docsContent); return {success: true, message: 'API documentation generated successfully', endpoints: apiDocs.endpoints.length}} catch (error) {return {; success: false
    error: error.message}}}; getApiFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.ts')) {files.push(fullPath)}})}; scanDirectory(dir); return files}; extractApiEndpoint(filePath, content) {const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''); const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') |'/'; // Extract HTTP method from content; const method = content.includes('export default') ? 'GET': 'POST'; // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): 'API endpoint'; return {; method: method, path: path, description: description, parameters: [], response: {, success: true, data: {}}}}; async generateComponentDocs() {try {; this.log('🧩 Generating component documentation...'); const componentsDir = path.join(this.projectRoot, 'components'); const componentDocs = []; if (fs.existsSync(componentsDir)) {; const componentFiles = this.getComponentFiles(componentsDir); componentFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const componentInfo = this.extractComponentInfo(file, content); if (componentInfo) {; componentDocs.push(componentInfo)}})}; const docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${componentDocs.map(component = > `;
### ${component.name}
${component.description}
**File**: \`${component.file}\`;
**Props: **
${component.props.map(prop = > `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')}
**Usage: **, \`\`\`jsx
${component.usage}
\`\`\`;
`).join('\n')}
---;
Generated by Docs Generator on ${new Date().toISOString()}
`; fs.writeFileSync('docs/COMPONENTS.md', docsContent); return {success: true, message: 'Component documentation generated successfully', components: componentDocs.length}} catch (error) {return {; success: false
    error: error.message}}}; getComponentFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.jsx') |item.endsWith('.tsx')) {files.push(fullPath)}})}; scanDirectory(dir); return files}; extractComponentInfo(filePath, content) {const fileName = path.basename(filePath, path.extname(filePath)); const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1); // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): `${componentName} component`; // Extract props from interface or PropTypes; const props = []; const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/); if (propMatch) {const propLines = propMatch[1].split('\n'); propLines.forEach(line = > {; const propMatch = line.match(/(\w+)\s*: \s*(\w+)/); if (propMatch) {; props.push({; name: propMatch[1], type: propMatch[2], description: 'Component prop'})}})}; return {name: componentName
    file: filePath.replace(this.projectRoot + '/', ''); description: description, props: props, usage: `<${componentName} />`}}; async generateReport(readmeResult, apiResult, componentResult) {const report = {; timestamp: new Date().toISOString(), summary: {
      , readmeGenerated: readmeResult.success, apiDocsGenerated: apiResult.success, componentDocsGenerated: componentResult.success, totalEndpoints: apiResult.endpoints |0, totalComponents: componentResult.components |0
    }
    details: {, readme: readmeResult, api: apiResult
    components: componentResult}; recommendations: []}; // Generate recommendations; if (!readmeResult.success) {report.recommendations.push({; priority: 'high', message: 'README generation failed', action: 'Check file permissions and try again'})}; if (!apiResult.success) {report.recommendations.push({; priority: 'medium', message: 'API documentation generation failed', action: 'Check API route files and try again'})}; if (!componentResult.success) {report.recommendations.push({; priority: 'medium', message: 'Component documentation generation failed', action: 'Check component files and try again'})}; if (report.summary.totalEndpoints = = = 0) {report.recommendations.push({; priority: 'low', message: 'No API endpoints found', action: 'Consider adding API routes for better documentation'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('📚 Starting Docs Generator...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Create docs directory if it doesn't exist; const docsDir = path.join(this.projectRoot, 'docs'); if (!fs.existsSync(docsDir)) {fs.mkdirSync(docsDir, { recursive: true })}; // Generate all documentation; const readmeResult = await this.generateReadme(); const apiResult = await this.generateApiDocs(); const componentResult = await this.generateComponentDocs(); // Generate report; this.log('📊 Generating documentation report...'); const report = await this.generateReport(readmeResult, apiResult, componentResult); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Docs Generator Summary: '); this.log(`README: ${report.summary.readmeGenerated ? 'Generated': 'Failed'}`); this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Total Endpoints: ${report.summary.totalEndpoints}`); this.log(`Total Components: ${report.summary.totalComponents}`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ Documentation generated successfully!')}
} catch (error) {this.log(`❌ Error running docs generator: ${error.message}`); process.exit(1)}}}
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {process.exit(1)});
${packageJson.description |'A modern web application built with Next.js'}
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()}
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.,### Build;
\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;
${this.projectRoot}/;
├── pages/ # Next.js pages;
├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;
${Object.entries(packageJson.scripts |{}).map(([key, value]) = > `- **${key}**: \`${value}\``).join('\n')}
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies |{}).map(dep = > `- ${dep}`).join('\n')}
### Development Dependencies;
${Object.keys(packageJson.devDependencies |{}).map(dep = > `- ${dep}`).join('\n')}
## 🔧 Configuration;
This project uses Next.js with the following configuration:  , - TypeScript support
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
The project includes automated monitoring with PM2:  ,- Code quality monitoring;
- Performance monitoring;
- Security scanning;
- Health checks;
- Automated testing;
## 🤝 Contributing;
1. Fork the repository;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`);
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`);
4. Push to the branch (\`git push origin feature/AmazingFeature\`);
5. Open a Pull Request;
## 📄 License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
## 📞 Support;
For support, email support@example.com or create an issue in the repository.;
---;
Generated on ${new Date().toISOString()}
`; fs.writeFileSync('README.md', readmeContent); return {success: true
    message: 'README.md generated successfully'}} catch (error) {return {; success: false
    error: error.message}}}; async generateApiDocs() {try {; this.log('🔌 Generating API documentation...'); const apiDocs = {; title: 'API Documentation', version: '1.0.0', description: 'API endpoints and documentation', baseUrl: 'http: //localhost: 3000', endpoints: []
    generatedAt: new Date().toISOString()}; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {const apiFiles = this.getApiFiles(pagesDir); apiFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})}; const docsContent = `# API Documentation;## Overview;
- **Base URL**: ${apiDocs.baseUrl}
- **Version**: ${apiDocs.version}
- **Generated**: ${apiDocs.generatedAt}
## Endpoints;
${apiDocs.endpoints.map(endpoint = > `;### ${endpoint.method} ${endpoint.path}
${endpoint.description}
**Parameters: **
${endpoint.parameters.map(param = > `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')}
**Response: **, \`\`\`json
${JSON.stringify(endpoint.response, null, 2)}
\`\`\`;
`).join('\n')}
## Error Handling;
All endpoints return appropriate HTTP status codes:  , - \`200\`: Success
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date().toISOString()}
`; fs.writeFileSync('docs/API.md', docsContent); return {success: true, message: 'API documentation generated successfully', endpoints: apiDocs.endpoints.length}} catch (error) {return {; success: false
    error: error.message}}}; getApiFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.ts')) {files.push(fullPath)}})}; scanDirectory(dir); return files}; extractApiEndpoint(filePath, content) {const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''); const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') |'/'; // Extract HTTP method from content; const method = content.includes('export default') ? 'GET': 'POST'; // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): 'API endpoint'; return {; method: method, path: path, description: description, parameters: [], response: {, success: true, data: {}}}}; async generateComponentDocs() {try {; this.log('🧩 Generating component documentation...'); const componentsDir = path.join(this.projectRoot, 'components'); const componentDocs = []; if (fs.existsSync(componentsDir)) {; const componentFiles = this.getComponentFiles(componentsDir); componentFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const componentInfo = this.extractComponentInfo(file, content); if (componentInfo) {; componentDocs.push(componentInfo)}})}; const docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${componentDocs.map(component = > `;
### ${component.name}
${component.description}
**File**: \`${component.file}\`;
**Props: **
${component.props.map(prop = > `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')}
**Usage: **, \`\`\`jsx
${component.usage}
\`\`\`;
`).join('\n')}
---;
Generated by Docs Generator on ${new Date().toISOString()}
`; fs.writeFileSync('docs/COMPONENTS.md', docsContent); return {success: true, message: 'Component documentation generated successfully', components: componentDocs.length}} catch (error) {return {; success: false
    error: error.message}}}; getComponentFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.jsx') |item.endsWith('.tsx')) {files.push(fullPath)}})}; scanDirectory(dir); return files}; extractComponentInfo(filePath, content) {const fileName = path.basename(filePath, path.extname(filePath)); const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1); // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): `${componentName} component`; // Extract props from interface or PropTypes; const props = []; const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/); if (propMatch) {const propLines = propMatch[1].split('\n'); propLines.forEach(line = > {; const propMatch = line.match(/(\w+)\s*: \s*(\w+)/); if (propMatch) {; props.push({; name: propMatch[1], type: propMatch[2], description: 'Component prop'})}})}; return {name: componentName
    file: filePath.replace(this.projectRoot + '/', ''); description: description, props: props, usage: `<${componentName} />`}}; async generateReport(readmeResult, apiResult, componentResult) {const report = {; timestamp: new Date().toISOString(), summary: {
      , readmeGenerated: readmeResult.success, apiDocsGenerated: apiResult.success, componentDocsGenerated: componentResult.success, totalEndpoints: apiResult.endpoints |0, totalComponents: componentResult.components |0
    }
    details: {, readme: readmeResult, api: apiResult
    components: componentResult}; recommendations: []}; // Generate recommendations; if (!readmeResult.success) {report.recommendations.push({; priority: 'high', message: 'README generation failed', action: 'Check file permissions and try again'})}; if (!apiResult.success) {report.recommendations.push({; priority: 'medium', message: 'API documentation generation failed', action: 'Check API route files and try again'})}; if (!componentResult.success) {report.recommendations.push({; priority: 'medium', message: 'Component documentation generation failed', action: 'Check component files and try again'})}; if (report.summary.totalEndpoints = = = 0) {report.recommendations.push({; priority: 'low', message: 'No API endpoints found', action: 'Consider adding API routes for better documentation'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('📚 Starting Docs Generator...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Create docs directory if it doesn't exist; const docsDir = path.join(this.projectRoot, 'docs'); if (!fs.existsSync(docsDir)) {fs.mkdirSync(docsDir, { recursive: true })}; // Generate all documentation; const readmeResult = await this.generateReadme(); const apiResult = await this.generateApiDocs(); const componentResult = await this.generateComponentDocs(); // Generate report; this.log('📊 Generating documentation report...'); const report = await this.generateReport(readmeResult, apiResult, componentResult); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Docs Generator Summary: '); this.log(`README: ${report.summary.readmeGenerated ? 'Generated': 'Failed'}`); this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Total Endpoints: ${report.summary.totalEndpoints}`); this.log(`Total Components: ${report.summary.totalComponents}`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ Documentation generated successfully!')}
} catch (error) {this.log(`❌ Error running docs generator: ${error.message}`); process.exit(1)}}}
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error => {process.exit(1);
});
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {_; process.exit(1)});
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
#!/usr/bin/env node
/**
 * PM2 Documentation Generator Script
 * Automatically generates and updates documentation
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class DocsGenerator {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME |'docs-generator';
    this.autoGenerate = process.env.AUTO_GENERATE === 'true';
    this.updateReadme = process.env.UPDATE_README === 'true';
    this.apiDocs = process.env.API_DOCS === 'true';
    this.componentDocs = process.env.COMPONENT_DOCS === 'true';
    this.logFile = 'logs/pm2/docs-generator.log';
    this.errorFile = 'logs/pm2/docs-generator-error.log';
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
    console.log(logMessage.trim());
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log "file": ', error.message);
    }
  }
  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] "ERROR": ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error "file": ', err.message);
    }
  }
  async generateReadme() {
    this.log('Generating README documentation...');
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      let readmeContent = `# ${packageJson.name |'Project'}\n\n`;
      readmeContent += `${packageJson.description |'A modern web application'}\n\n`;
      // Add version and status badges
      readmeContent += `![Version]("https": //img.shields.io/badge/version-${packageJson.version |'1.0.0'}-blue.svg)\n`;
      readmeContent += `![Node]("https": //img.shields.io/badge/node-${process.version}-green.svg)\n`;
      readmeContent += `![License]("https": //img.shields.io/badge/license-${packageJson.license |'MIT'}-yellow.svg)\n\n`;
      // Add table of contents
      readmeContent += "## Table of Contents\n\n";
      readmeContent += "- [Installation](#installation)\n";
      readmeContent += "- [Usage](#usage)\n";
      readmeContent += "- [Scripts](#scripts)\n";
      readmeContent += "- [API Documentation](#api-documentation)\n";
      readmeContent += "- [Contributing](#contributing)\n";
      readmeContent += "- [License](#license)\n\n";
      // Add installation section
      readmeContent += "## Installation\n\n";
      readmeContent += "\"\"\"bash\n";
      readmeContent += "npm install\n";
      readmeContent += "\"\"\"\n\n";
      // Add usage section
      readmeContent += "## Usage\n\n";
      readmeContent += "\"\"\"bash\n";
      readmeContent += "# Development\n";
      readmeContent += "npm run dev\n\n";
      readmeContent += "# Production build\n";
      readmeContent += "npm run build\n";
      readmeContent += "npm run start\n";
      readmeContent += "\"\"\"\n\n";
      // Add scripts section
      if (packageJson.scripts) {
        readmeContent += "## Scripts\n\n";
        readmeContent += "| Script | Description |\n";
        readmeContent += "|--------|-------------|\n";
        for (const [script, description] of Object.entries(packageJson.scripts)) {
          const desc = this.getScriptDescription(script, description);
          readmeContent += "| \"${script}\` | ${desc} |\n`;
        }
        readmeContent += "\n";
      }
      // Add API documentation section
      if (this.apiDocs) {
        readmeContent += "## API Documentation\n\n";
        readmeContent += "API documentation is automatically generated and available at \"/api/docs\".\n\n";
      }
      // Add contributing section
      readmeContent += "## Contributing\n\n";
      readmeContent += "1. Fork the repository\n";
      readmeContent += "2. Create your feature branch (\"git checkout -b feature/amazing-feature\")\n";
      readmeContent += "3. Commit your changes (\"git commit -m 'Add some amazing feature'\")\n";
      readmeContent += "4. Push to the branch (\"git push origin feature/amazing-feature\")\n";
      readmeContent += "5. Open a Pull Request\n\n";
      // Add license section
      readmeContent += "## License\n\n";
      readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`;
      // Write README file
      fs.writeFileSync('README.md', readmeContent);
      this.log('README.md generated successfully');
      return { "success": true, "file": 'README.md' }
    } catch (error) {
      this.error(`Failed to generate "README": ${error.message}`);
      return { "success": false, "error": error.message }
    }
  }
  getScriptDescription(script, command) {
    const descriptions = {
      'dev': 'Start development server'
      'build': 'Build for production'
      'start': 'Start production server'
      'test': 'Run tests'
      'lint': 'Run linter'
      '"lint": fix': 'Fix linting issues'
      'type-check': 'Run TypeScript type checking'
      'clean': 'Clean build artifacts'
      'check': 'Run all checks (lint, type-check, test)'
      'precommit': 'Pre-commit hook'
      'prepare': 'Prepare script for git hooks'
    }
    return descriptions[script] |command;
  }
  async generateApiDocs() {
    this.log('Generating API documentation...');
    try {
      const apiFiles = this.findApiFiles();
      let apiDocs = "# API Documentation\n\n";
      apiDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of apiFiles) {
        const fileDocs = this.extractApiDocumentation(file);
        if (fileDocs) {
          apiDocs += fileDocs;
        }
      }
      const docsDir = 'docs';
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs.writeFileSync(path.join(docsDir, 'API.md'), apiDocs);
      this.log('API documentation generated successfully');
      return { "success": true, "file": 'docs/API.md' }
    } catch (error) {
      this.error(`Failed to generate API "docs": ${error.message}`);
      return { "success": false, "error": error.message }
    }
  }
  findApiFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    // Look for API files in common directories
    const apiDirs = ['api', 'pages/api', 'src/api', 'lib/api', 'routes'];
    for (const dir of apiDirs) {
      if (fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractApiDocumentation(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let docs = `## ${path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines.join('\n');
            if (comment.includes('@api') |comment.includes('@route')) {
              docs += this.formatApiComment(comment);
            }
            commentLines = [];
          } else {
            commentLines.push(line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log(`Failed to extract docs from ${filePath}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatApiComment(comment) {
    let formatted = '"""\n';
    formatted += comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateComponentDocs() {
    this.log('Generating component documentation...');
    try {
      const componentFiles = this.findComponentFiles();
      let componentDocs = "# Component Documentation\n\n";
      componentDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of componentFiles) {
        const componentDoc = this.extractComponentDocumentation(file);
        if (componentDoc) {
          componentDocs += componentDoc;
        }
      }
      const docsDir = 'docs';
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs.writeFileSync(path.join(docsDir, 'COMPONENTS.md'), componentDocs);
      this.log('Component documentation generated successfully');
      return { "success": true, "file": 'docs/COMPONENTS.md' }
    } catch (error) {
      this.error(`Failed to generate component "docs": ${error.message}`);
      return { "success": false, "error": error.message }
    }
  }
  findComponentFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (['.jsx', '.tsx', '.vue', '.svelte'].includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    // Look for component files in common directories
    const componentDirs = ['components', 'src/components', 'lib/components', 'pages'];
    for (const dir of componentDirs) {
      if (fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractComponentDocumentation(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let docs = `## ${path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines.join('\n');
            if (comment.includes('@component') |comment.includes('@props')) {
              docs += this.formatComponentComment(comment);
            }
            commentLines = [];
          } else {
            commentLines.push(line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log(`Failed to extract component docs from ${filePath}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatComponentComment(comment) {
    let formatted = '"""\n';
    formatted += comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateDocumentationReport() {
    this.log('Generating documentation report...');
    try {
      const report = {
        "timestamp": new Date().toISOString()
        "processName": this.processName
        "readmeGenerated": this.updateReadme ? await this.generateReadme() : null
        "apiDocsGenerated": this.apiDocs ? await this.generateApiDocs() : null
        "componentDocsGenerated": this.componentDocs ? await this.generateComponentDocs() : null
        "environment": {
          nodeVersion: process.version
          "platform": process.platform
          "cwd": process.cwd()
        }
      }
      const reportFile = `docs-reports/docs-generation-${Date.now()}.json`;
      const reportDir = path.dirname(reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { "recursive": true });
      }
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Documentation report saved "to": ${reportFile}`);
      return report;
    } catch (error) {
      this.error(`Failed to generate documentation "report": ${error.message}`);
      return null;
    }
  }
  async start() {
    this.log(`Starting ${this.processName}...`);
    // Run initial documentation generation
    await this.generateDocumentationReport();
    // Set up periodic documentation updates
    const interval = 2 * 60 * 60 * 1000; // 2 hours
    setInterval(async () => {
      this.log('Running scheduled documentation generation...');
      await this.generateDocumentationReport();
    }, interval);
    this.log(`${this.processName} started successfully`);
  }
}
// Start the automation if this script is run directly
if (require.main === module) {
  const generator = new DocsGenerator();
  generator.start().catch(error => {
    console.error('Documentation generator failed to "start": ', error);
    process.exit(1);
  });
}
module.exports = DocsGenerator;
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
=======
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
docsGenerator.run().catch(error = > {; process.exit(1)});
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});
>>>>>>> origin/main
