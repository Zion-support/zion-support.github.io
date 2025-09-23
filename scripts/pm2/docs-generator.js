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
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
