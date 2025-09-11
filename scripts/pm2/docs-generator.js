=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
}};
; async generateReadme() {; try {; this && this.log('📝 Generating README && README.md...');
; const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json', 'utf8')); const readmeContent = `# ${packageJson && packageJson.name};;;
${packageJson && packageJson.description || 'A modern web application built with Next && Next.js'};

## 🚀 Getting Started;
### Prerequisites;
- Node && Node.js ${process && process.version};
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};

Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result., ### Build;

=======
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.,### Build;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;


├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package && package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;

## 🔧 Configuration;
This project uses Next && Next.js with the following configuration:  , - TypeScript support,
=======
${Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${dep}`).join('\n')};;
## 🔧 Configuration;
This project uses Next.js with the following configuration:  , - TypeScript support,
${Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${dep}`).join('\n')};
;
## 🔧 Configuration;
This project uses Next.js with the following configuration: ;
- TypeScript support;- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
=======
The project includes automated monitoring with PM2:  ,- Code quality monitoring;
The project includes automated monitoring with PM2: ;
- Code quality monitoring;- Performance monitoring;
- Security scanning;
- Health checks;
- Automated testing;
## 🤝 Contributing;
1. Fork the repository;
2. Create your feature branch (\`git checkout -b feature / AmazingFeature\`);
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`);
4. Push to the branch (\`git push origin feature / AmazingFeature\`);
5. Open a Pull Request;
## 📄 License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
## 📞 Support,
; fs.writeFileSync ('README.md', readme_content);
; return { success: true,
    message: 'README.md generated successfully'}} catch (error) { return { success: false,
    error: error.message}}}
; async generateApiDocs () { try { this.log ('🔌 Generating API documentation...');
; const api_docs = { title: 'API Documentation', version: '1.0.0', description: 'API endpoints and documentation', base_url: 'http: //localhost: 3000', endpoints: [],
    generated_at: new Date ().toISOString ()}
; // Scan for API routes; const pages_dir = path.join (this.project_root, 'pages / api'); if () {) {
  $2
} const api_files = this.getApiFiles (pages_dir);
; api_files.for_each (file = > { const content = fs.readFileSync (file, 'utf8'); const endpoint = this.extractApiEndpoint (file, content); // Check condition
if ( {) {
  $2
} api_docs.endpoints.push (endpoint)}})}
; const docs_content = `# API Documentation;## Overview;
- **Base URL**: ${api_docs.base_url}
- **Version**: ${api_docs.version}
- **Generated**: ${api_docs.generated_at}
=======
## 📞 Support;
For support, email support@example.com or create an issue in the repository.;
---;
Generated on ${new Date ().toISOString ()}
`;
; fs.writeFileSync('README.md', readmeContent);
; return {; success: true; message: 'README.md generated successfully'}} catch (error) {; return {; success: false; error: error.message}}};
; async generateApiDocs() {; try {; this.log('🔌 Generating API documentation...');
; const apiDocs = {; title: 'API Documentation'; version: '1.0.0'; description: 'API endpoints and documentation'; baseUrl: 'http: //localhost: 3000'; endpoints: []; generatedAt: new Date().toISOString()};
; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {; const apiFiles = this.getApiFiles(pagesDir);
; apiFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})};
; const docsContent = `# API Documentation;## Overview;
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};;
## Endpoints;
${api_docs.endpoints.map (endpoint = > `;### ${endpoint.method} ${endpoint.path}
;
${endpoint.description}
;
**Parameters: **,
${endpoint.parameters.map (param = > `- \`${param.name}\` (${param.type}): ${param.description}`).join ('\n')};
**Response: **, \`\`\`json,
${JSON.stringify (endpoint.response, null, 2)}
\`\`\`;
`).join ('\n')}
;

## Error Handling;
All endpoints return appropriate HTTP status codes:  , - \`200\`: Success,
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date ().toISOString ()}
`;

; fs.writeFileSync ('docs / API.md', docs_content);
; return { success: true, message: 'API documentation generated successfully', endpoints: api_docs.endpoints.length}} catch (error) { return { success: false,
    error: error.message}}}
; getApiFiles (dir) { const files = [];
; const scan_directory = (current_dir) = > { const items = fs.readdir_sync (current_dir); items.for_each (item = > { const full_path = path.join (current_dir, item); const stat = fs.stat_sync (full_path);
; if () {) {
  $2
} scan_directory (full_path)} else if (|| item.ends_with ('.ts')) {) {
  $2
} files.push (full_path)}})}
; scan_directory (dir); return files}
; extractApiEndpoint (file_path, content) { const relative_path = file_path.replace (this.project_root + '/pages / api', ''); const path = relative_path.replace (/\.(js | ts)$/, '').replace (/\/index$/, '') || '/';
; // Extract HTTP method from content; const method = content.includes ('export default') ? 'GET': 'POST';
; // Extract description from comments; const comment_match = content.match (/\/\*\*([\s\S]*?)\*\//); const description = comment_match ? comment_match[1].trim (): 'API endpoint';
; return { method: method, path: path, description: description, parameters: [], response: {, success: true, data: {}}}}
; async generateComponentDocs () { try { this.log ('🧩 Generating component documentation...');
; const components_dir = path.join (this.project_root, 'components'); const component_docs = [];
; if () {) {
  $2
} const component_files = this.getComponentFiles (components_dir);
; component_files.for_each (file = > { const content = fs.readFileSync (file, 'utf8'); const component_info = this.extractComponentInfo (file, content); // Check condition
if ( {) {
  $2
} component_docs.push (component_info)}})}
; const docs_content = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${component_docs.map (component = > `;
### ${component.name}
;
${component.description}
;
**File**: \`${component.file}\`;
**Props: **,
${component.props.map (prop = > `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join ('\n')}
;
**Usage: **, \`\`\`jsx,
${component.usage}
\`\`\`;
`).join ('\n')}
;

---;
Generated by Docs Generator on ${new Date ().toISOString ()}
`;

    };
    return descriptions[script] || command;
  }
  async generateApiDocs() {
    this && this.log('Generating API documentation...');
    try {
      const apiFiles = this && this.findApiFiles();
      let apiDocs = "# API Documentation\n\n";
      apiDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of apiFiles) {
        const fileDocs = this && this.extractApiDocumentation(file);
        if (fileDocs) {
          apiDocs += fileDocs;
        }
      }
      const docsDir = 'docs';
      if (!fs && fs.existsSync(docsDir)) {
        fs && fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs && fs.writeFileSync(path && path.join(docsDir, 'API && API.md'), apiDocs);
      this && this.log('API documentation generated successfully');
      return { "success": true, "file": 'docs/API && API.md' };
    } catch (error) {
      this && this.error(`Failed to generate API "docs": ${error && error.message}`);
      return { "success": false, "error": error && error.message };
    }
  }
  findApiFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs && fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path && path.join(dir, item);
          const stat = fs && fs.statSync(fullPath);
          if (stat && stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat && stat.isFile()) {
            const ext = path && path.extname(item);
            if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
              files && files.push(fullPath);
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
      if (fs && fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractApiDocumentation(filePath) {
    try {
      const content = fs && fs.readFileSync(filePath, 'utf8');
      const lines = content && content.split('\n');
      let docs = `## ${path && path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines && lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line && line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line && line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines && commentLines.join('\n');
            if (comment && comment.includes('@api') || comment && comment.includes('@route')) {
              docs += this && this.formatApiComment(comment);
            }
            commentLines = [];
          } else {
            commentLines && commentLines.push(line && line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this && this.log(`Failed to extract docs from ${filePath}: ${error && error.message}`, 'WARNING');
      return null;
    }
  }
  formatApiComment(comment) {
    let formatted = '"""\n';
    formatted += comment && comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateComponentDocs() {
    this && this.log('Generating component documentation...');
    try {
      const componentFiles = this && this.findComponentFiles();
      let componentDocs = "# Component Documentation\n\n";
      componentDocs += `Generated "on": ${new Date().toISOString()}\n\n`;
      for (const file of componentFiles) {
        const componentDoc = this && this.extractComponentDocumentation(file);
        if (componentDoc) {
          componentDocs += componentDoc;
        }
      }
      const docsDir = 'docs';
      if (!fs && fs.existsSync(docsDir)) {
        fs && fs.mkdirSync(docsDir, { "recursive": true });
      }
      fs && fs.writeFileSync(path && path.join(docsDir, 'COMPONENTS && COMPONENTS.md'), componentDocs);
      this && this.log('Component documentation generated successfully');
      return { "success": true, "file": 'docs/COMPONENTS && COMPONENTS.md' };
    } catch (error) {
      this && this.error(`Failed to generate component "docs": ${error && error.message}`);
      return { "success": false, "error": error && error.message };
    }
  }
  findComponentFiles() {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs && fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path && path.join(dir, item);
          const stat = fs && fs.statSync(fullPath);
          if (stat && stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat && stat.isFile()) {
            const ext = path && path.extname(item);
            if (['.jsx', '.tsx', '.vue', '.svelte'].includes(ext)) {
              files && files.push(fullPath);
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
      if (fs && fs.existsSync(dir)) {
        scanDirectory(dir);
      }
    }
    return files;
  }
  extractComponentDocumentation(filePath) {
    try {
      const content = fs && fs.readFileSync(filePath, 'utf8');
      const lines = content && content.split('\n');
      let docs = `## ${path && path.basename(filePath)}\n\n`;
      let inComment = false;
      let commentLines = [];
      for (let i = 0; i < lines && lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments
        if (line && line.trim().startsWith('/**')) {
          inComment = true;
          commentLines = [];
          continue;
        }
        if (inComment) {
          if (line && line.trim().endsWith('*/')) {
            inComment = false;
            // Process collected comment lines
            const comment = commentLines && commentLines.join('\n');
            if (comment && comment.includes('@component') || comment && comment.includes('@props')) {
              docs += this && this.formatComponentComment(comment);
            }
            commentLines = [];
          } else {
            commentLines && commentLines.push(line && line.replace(/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this && this.log(`Failed to extract component docs from ${filePath}: ${error && error.message}`, 'WARNING');
      return null;
    }
  }
  formatComponentComment(comment) {
    let formatted = '"""\n';
    formatted += comment && comment.replace(/@\w+/g, '').trim();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateDocumentationReport() {
    this && this.log('Generating documentation report...');
    try {
      const report = {
        "timestamp": new Date().toISOString(),
        "processName": this && this.processName,
        "readmeGenerated": this && this.updateReadme ? await this && this.generateReadme() : null,
        "apiDocsGenerated": this && this.apiDocs ? await this && this.generateApiDocs() : null,
        "componentDocsGenerated": this && this.componentDocs ? await this && this.generateComponentDocs() : null,
        "environment": {
          nodeVersion: process && process.version,
          "platform": process && process.platform,
          "cwd": process && process.cwd()
        }
      };
      const reportFile = `docs-reports/docs-generation-${Date && Date.now()}.json`;
      const reportDir = path && path.dirname(reportFile);
      if (!fs && fs.existsSync(reportDir)) {
        fs && fs.mkdirSync(reportDir, { "recursive": true });
      }
      fs && fs.writeFileSync(reportFile, JSON && JSON.stringify(report, null, 2));
      this && this.log(`Documentation report saved "to": ${reportFile}`);
      return report;
    } catch (error) {
      this && this.error(`Failed to generate documentation "report": ${error && error.message}`);
      return null;
    }
  }
  async start() {
    this && this.log(`Starting ${this && this.processName}...`);
    // Run initial documentation generation
    await this && this.generateDocumentationReport();
    // Set up periodic documentation updates
    const interval = 2 * 60 * 60 * 1000; // 2 hours
    setInterval(async () => {
      this && this.log('Running scheduled documentation generation...');
      await this && this.generateDocumentationReport();
    }, interval);
    this && this.log(`${this && this.processName} started successfully`);
  }
}
// Start the automation if this script is run directly
if (require && require.main === module) {
  const generator = new DocsGenerator();
  generator && generator.start().catch(error => {
    console && console.error('Documentation generator failed to "start": ', error);
    process && process.exit(1);
  });
}



=======
==============


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;;
${packageJson.description || 'A modern web application built with Next.js'};



Open [http: //localhost:3000](http://localhost:3000) with your browser to see the result.,
### Build;

Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;


#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});

=======  process.exit(1),
}),
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
docsGenerator.run().catch(error = > {; process.exit(1)});
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});
=======

docsGenerator.run().catch(error = > {; process.exit(1)});

=======
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

#!/usr / bin / env node const { exec_sync } = require ('child_process'); const fs = require ('fs'); const path = require ('path'); class DocsGenerator { constructor () { this.process_name = process.env.PM2_PROCESS_NAME || 'docs - generator'; this.auto_generate = process.env.AUTO_GENERATE === 'true'; this.update_readme = process.env.UPDATE_README === 'true'; this.api_docs = process.env.API_DOCS === 'true'; this.component_docs = process.env.COMPONENT_DOCS === 'true'; this.log_file = 'logs / pm2 / docs - generator.log'; this.error_file = 'logs / pm2 / docs - generator - error.log'; this.ensureLogDirectory ()} ensureLogDirectory () { const log_dir = path.dirname (this.log_file); if () { fs.mkdir_sync (log_dir, { recursive: true })} } log (message, level = 'INFO') { const timestamp = new Date ().toISOString ()) {
  $2
} const log_message = `[${timestamp}] [${level}] ${message}\n`; console.log (log_message.trim ()); try { fs.appendFileSync (this.log_file, log_message)} catch (error) { console.error ('Failed to write to log file:', error.message)} } error (message) { this.log (message, 'ERROR'); try { fs.appendFileSync (this.error_file, `[${new Date ().toISOString ()}] ERROR: ${message}\n`)} catch (err) { console.error ('Failed to write to error file:', err.message)} } async generate_readme () { this.log ('Generating README documentation...'); try { const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); let readme_content = `# ${package_json.name || 'Project'}\n\n`; readme_content += `${package_json.description || 'A modern web application'}\n\n`; readme_content += `![Version](https: readme_content += `![Node](https: readme_content += `![License](https: readme_content += `## Table of Contents\n\n`; readme_content += `- [Installation](#installation)\n`; readme_content += `- [Usage](#usage)\n`; readme_content += `- [Scripts](#scripts)\n`; readme_content += `- [API Documentation](#api - documentation)\n`; readme_content += `- [Contributing](#contributing)\n`; readme_content += `- [License](#license)\n\n`; readme_content += `## Installation\n\n`; readme_content += `\`\`\`bash\n`; readme_content += `npm install\n`; readme_content += `\`\`\`\n\n`; readme_content += `## Usage\n\n`; readme_content += `\`\`\`bash\n`; readme_content += `# Development\n`; readme_content += `npm run dev\n\n`; readme_content += `# Production build\n`; readme_content += `npm run build\n`; readme_content += `npm run start\n`; readme_content += `\`\`\`\n\n`; // Check condition
if ( { readme_content += `## Scripts\n\n`) {
  $2
} readme_content += `| Script | Description |\n`; readme_content += `|--------|-------------|\n`; for (const [script, description] of Object.entries (package_json.scripts)) { const desc = this.getScriptDescription (script, description); readme_content += `| \`${script}\` | ${desc} |\n`} readme_content += `\n`} // Check condition
if ( { readme_content += `## API Documentation\n\n`) {
  $2
} readme_content += `API documentation is automatically generated and available at \`/api / docs\`.\n\n`} readme_content += `## Contributing\n\n`; readme_content += `1. Fork the repository\n`; readme_content += `2. Create your feature branch (\`git checkout -b feature / amazing - feature\`)\n`; readme_content += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readme_content += `4. Push to the branch (\`git push origin feature / amazing - feature\`)\n`; readme_content += `5. Open a Pull Request\n\n`; readme_content += `## License\n\n`; readme_content += `This project is licensed under the ${package_json.license || 'MIT'} License.\n\n`; fs.writeFileSync ('README.md', readme_content); this.log ('README.md generated successfully'); return { success: true, file: 'README.md' }} catch (error) { this.error (`Failed to generate README: ${error.message}`); return { success: false, error: error.message }} } getScriptDescription (script, command) { const descriptions = { 'dev': 'Start development server', 'build': 'Build for production', 'start': 'Start production server', 'test': 'Run tests', 'lint': 'Run linter', 'lint:fix': 'Fix linting issues', 'type - check': 'Run TypeScript type checking', 'clean': 'Clean build artifacts', 'check': 'Run all checks (lint, type - check, test)', 'precommit': 'Pre - commit hook', 'prepare': 'Prepare script for git hooks' } return descriptions[script] || command} async generateApiDocs () { this.log ('Generating API documentation...'); try { const api_files = this.findApiFiles (); let api_docs = `# API Documentation\n\n`; api_docs += `Generated on: ${new Date ().toISOString ()}\n\n`; for (const file of api_files) { const file_docs = this.extractApiDocumentation (file); // Check condition
if ( { api_docs += file_docs} } const docs_dir = 'docs') {
  $2
} if () { fs.mkdir_sync (docs_dir, { recursive: true })} fs.writeFileSync (path.join (docs_dir, 'API.md'), api_docs)) {
  $2
} this.log ('API documentation generated successfully'); return { success: true, file: 'docs / API.md' }} catch (error) { this.error (`Failed to generate API docs: ${error.message}`); return { success: false, error: error.message }} } findApiFiles () { const files = []; /**
 * scan_directory - Function description
 */
function scan_directory() { try { const items = fs.readdir_sync (dir); for (const item of items) { const full_path = path.join (dir, item); const stat = fs.stat_sync (full_path); if () { if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes (item)) { scan_directory (full_path)} } else if (stat.is_file ()) { const ext = path.extname (item)) {
  $2
} if () { files.push (full_path)} } } } catch (error) { } } const api_dirs = ['api', 'pages / api', 'src / api', 'lib / api', 'routes']) {
  $2
} for (const dir of api_dirs) { if () { scan_directory (dir)} } return files} extractApiDocumentation (file_path) { try { const content = fs.readFileSync (file_path, 'utf8')) {
  $2
} const lines = content.split ('\n'); let docs = `## ${path.basename (file_path)}\n\n`; let in_comment = false; let comment_lines = []; for (let index = 0; i < lines.length; i++) { const line = lines[i]; if (.starts_with ('')) { in_comment = false) {
  $2
} const comment = comment_lines.join ('\n'); if (|| comment.includes ('@route')) { docs += this.formatApiComment (comment)} comment_lines = []} else { comment_lines.push (line.replace (/^\s*\*\s?/, ''))} } } return docs} catch (error) { this.log (`Failed to extract docs from ${file_path}: ${error.message}`, 'WARNING')) {
  $2
} return null} } formatApiComment (comment) { let formatted = '```\n'; formatted += comment.replace (/@\w+/g, '').trim (); formatted += '\n```\n\n'; return formatted} async generateComponentDocs () { this.log ('Generating component documentation...'); try { const component_files = this.findComponentFiles (); let component_docs = `# Component Documentation\n\n`; component_docs += `Generated on: ${new Date ().toISOString ()}\n\n`; for (const file of component_files) { const component_doc = this.extractComponentDocumentation (file); // Check condition
if ( { component_docs += component_doc} } const docs_dir = 'docs') {
  $2
} if () { fs.mkdir_sync (docs_dir, { recursive: true })} fs.writeFileSync (path.join (docs_dir, 'COMPONENTS.md'), component_docs)) {
  $2
} this.log ('Component documentation generated successfully'); return { success: true, file: 'docs / COMPONENTS.md' }} catch (error) { this.error (`Failed to generate component docs: ${error.message}`); return { success: false, error: error.message }} } findComponentFiles () { const files = []; /**
 * scan_directory - Function description
 */
function scan_directory() { try { const items = fs.readdir_sync (dir); for (const item of items) { const full_path = path.join (dir, item); const stat = fs.stat_sync (full_path); if () { if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes (item)) { scan_directory (full_path)} } else if (stat.is_file ()) { const ext = path.extname (item)) {
  $2
} if () { files.push (full_path)} } } } catch (error) { } } const component_dirs = ['components', 'src / components', 'lib / components', 'pages']) {
  $2
} for (const dir of component_dirs) { if () { scan_directory (dir)} } return files} extractComponentDocumentation (file_path) { try { const content = fs.readFileSync (file_path, 'utf8')) {
  $2
} const lines = content.split ('\n'); let docs = `## ${path.basename (file_path)}\n\n`; let in_comment = false; let comment_lines = []; for (let index = 0; i < lines.length; i++) { const line = lines[i]; if (.starts_with ('')) { in_comment = false) {
  $2
} const comment = comment_lines.join ('\n'); if (|| comment.includes ('@props')) { docs += this.formatComponentComment (comment)} comment_lines = []} else { comment_lines.push (line.replace (/^\s*\*\s?/, ''))} } } return docs} catch (error) { this.log (`Failed to extract component docs from ${file_path}: ${error.message}`, 'WARNING')) {
  $2
} return null} } formatComponentComment (comment) { let formatted = '```\n'; formatted += comment.replace (/@\w+/g, '').trim (); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport () { this.log ('Generating documentation report...'); try { const report = { timestamp: new Date ().toISOString (), process_name: this.process_name, readme_generated: this.update_readme ? await this.generate_readme () : null, apiDocsGenerated: this.api_docs ? await this.generateApiDocs () : null, componentDocsGenerated: this.component_docs ? await this.generateComponentDocs () : null, environment: { node_version: process.version, platform: process.platform, cwd: process.cwd () } } const report_file = `docs - reports / docs - generation-${Date.now ()}.json`; const report_dir = path.dirname (report_file); if () { fs.mkdir_sync (report_dir, { recursive: true })} fs.writeFileSync (report_file, JSON.stringify (report, null, 2))) {
  $2
} this.log (`Documentation report saved to: ${report_file}`); return report} catch (error) { this.error (`Failed to generate documentation report: ${error.message}`); return null} } async start () { this.log (`Starting ${this.process_name}...`); await this.generateDocumentationReport (); const interval = 2 * 60 * 60 * 1000; set_interval (async () => { this.log ('Running scheduled documentation generation...'); await this.generateDocumentationReport ()}, interval); this.log (`${this.process_name} started successfully`)} } if ( { const generator = new DocsGenerator ()) {
  $2
} generator.start ().catch (error => { console.error ('Documentation generator failed to start:', error); process.exit (1)})} module.exports = DocsGenerator;
docs_generator.run ().catch (error = > { process.exit (1)});
;
  process.exit(1)
}),


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
