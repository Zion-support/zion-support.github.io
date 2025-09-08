#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class DocsGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/docs-generator.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/docs-generator-report.json');
    this.startTime = Date.now();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
    super(props);
    this.state = { 'hasError': false
};
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
; async generateReadme() {; try {; this && this.log('📝 Generating README && README.md...');'
;

}

const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json', 'utf8'));'

const readmeContent = `# ${packageJson && packageJson.name};`${packageJson && packageJson.description || 'A modern web application built with Next && Next.js'};'

## 🚀 Getting Started;
### Prerequisites;
- Node && Node.js ${process && process.version}- npm ${execSync('npm --version', { 'encoding': 'utf8' }).trim()},'
}async generateReadme() {try {this.log('📝 Generating README.md...')const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))const readmeContent = `# ${packageJson.name},async generateReadme() {,try {,this.log('📝 Generating README.md...'),,const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));'
  }
  async generateReadme() {
    try {
      this.log('📝 Generating README.md...');
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
      const readmeContent = `# ${packageJson.name}
${packageJson.description || 'A modern web application built with Next.js'}
## 🚀 Getting Started
### Prerequisites
- Node.js ${process.version}
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()}
### Installation
\`\`\`bash
npm install
\`\`\`
### Development
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Build
\`\`\`bash
npm run build
npm start
\`\`\`
## 📁 Project Structure
\`\`\`
${this.projectRoot}/
├── pages/                 # Next.js pages
├── components/            # React components
├── styles/               # CSS styles
├── public/               # Static assets
├── scripts/              # Build and utility scripts
└── package.json          # Dependencies and scripts
\`\`\`
## 🛠️ Available Scripts
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')}
## 📦 Dependencies
### Production Dependencies
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')}
### Development Dependencies
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')}
## 🔧 Configuration
This project uses Next.js with the following configuration:
- TypeScript support
- ESLint for code quality
- Prettier for code formatting
- PM2 for process management
## 📊 Monitoring
The project includes automated monitoring with PM2:
- Code quality monitoring
- Performance monitoring
- Security scanning
- Health checks
- Automated testing
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request
## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## 📞 Support
For support, email support@example.com or create an issue in the repository.
---
Generated on ${new Date().toISOString()}
`;
      fs.writeFileSync('README.md', readmeContent);
      return {
        success: true
        message: 'README.md generated successfully'
      };
    } catch (error) {
      return {
        success: false
        error: error.message
      };
    }
  }
  async generateApiDocs() {
    try {
      this.log('🔌 Generating API documentation...');
      const apiDocs = {
        title: 'API Documentation'
        version: '1.0.0'
        description: 'API endpoints and documentation'
        baseUrl: 'http://localhost:3000'
        endpoints: []
        generatedAt: new Date().toISOString()
      };
      // Scan for API routes
      const pagesDir = path.join(this.projectRoot, 'pages/api');
      if (fs.existsSync(pagesDir)) {
        const apiFiles = this.getApiFiles(pagesDir);
        apiFiles.forEach(file => {
          const content = fs.readFileSync(file, 'utf8');
          const endpoint = this.extractApiEndpoint(file, content);
          if (endpoint) {
            apiDocs.endpoints.push(endpoint);
          }
        });
      }
      const docsContent = `# API Documentation
## Overview
- **Base URL**: ${apiDocs.baseUrl}
- **Version**: ${apiDocs.version}
- **Generated**: ${apiDocs.generatedAt}
## Endpoints
${apiDocs.endpoints.map(endpoint => `
### ${endpoint.method} ${endpoint.path}
${endpoint.description}
**Parameters:**
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')}
**Response:**
\`\`\`json
${JSON.stringify(endpoint.response, null, 2)}
\`\`\`
`).join('\n')}
## Error Handling
All endpoints return appropriate HTTP status codes:
- \`200\`: Success
- \`400\`: Bad Request
- \`401\`: Unauthorized
- \`404\`: Not Found
- \`500\`: Internal Server Error
## Rate Limiting
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.
---
Generated by Docs Generator on ${new Date().toISOString()}
`;
      fs.writeFileSync('docs/API.md', docsContent);
      return {
        success: true
        message: 'API documentation generated successfully'
        endpoints: apiDocs.endpoints.length
      };
    } catch (error) {
      return {
        success: false
        error: error.message
      };
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