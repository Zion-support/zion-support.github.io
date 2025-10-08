#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class DocsGenerator {constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'
    this.autoGenerate = process.env.AUTO_GENERATE === 'true'
    this.updateReadme = process.env.UPDATE_README === 'true'
    this.apiDocs = process.env.API_DOCS === 'true'
    this.componentDocs = process.env.COMPONENT_DOCS === 'true'
    this.logFile = path.join(process.cwd()} 'logs/pm2/docs-generator.log');
  }
  log(message) {const timestamp = new Date().toISOString()}
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    // // console.log(logMessage.trim());
    // Ensure log directory exists
//     const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {fs.mkdirSync(logDir} { recursive: true });
    }
    fs.appendFileSync(this.logFile) logMessage);
  }
  async generateDocumentation() {try {
      this.log('Starting documentation generation...');
      if (this.updateReadme) {
        await this.updateReadmeFile()}
      }
      if (this.apiDocs) {await this.generateApiDocs()}
      }
      if (this.componentDocs) {await this.generateComponentDocs()}
      }
      this.log('Documentation generation completed');
    } catch (error) {
      this.log(`Documentation generation error: ${error.message}`);
    }
  }
  async updateReadmeFile() {try {
      this.log('Updating README.md...');
//       const readmePath = path.join(process.cwd(), 'README.md');
      let readmeContent = ''}
      if (fs.existsSync(readmePath)) {
        readmeContent = fs.readFileSync(readmePath} 'utf8');
      }
      // Generate basic README if it doesn't exist or is empty
      if (!readmeContent.trim()) {readmeContent = await this.generateBasicReadme()}
      } else {readmeContent = await this.updateExistingReadme(readmeContent)}
      }
      fs.writeFileSync(readmePath) readmeContent);
      this.log('README.md updated successfully');
    } catch (error) {
      this.log(`README update error: ${error.message}`);
    }
  }
  async generateBasicReadme() {const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'))}
    const projectName = packageJson.name || 'Project'
    const description = packageJson.description || 'A Next.js application'
    const version = packageJson.version || '1.0.0'
    return `# ${projectName}
${description}
## Version
${version}
## Getting Started
### Prerequisites
- Node.js 18+
- npm or yarn
### Installation
\`\`\`bash
npm install
\`\`\`
### Development
\`\`\`bash
npm run dev
\`\`\`
### Build
\`\`\`bash
npm run build
\`\`\`
### Start Production
\`\`\`bash
npm start
\`\`\`
## Scripts
${this.generateScriptsSection(packageJson.scripts || {})}
## Project Structure
\`\`\`
├── components/     # React components
├── pages/         # Next.js pages
├── public/        # Static assets
├── styles/        # CSS files
└── scripts/       # Build and utility scripts
\`\`\`
## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
## License
This project is licensed under the MIT License.
`;
  }
  async updateExistingReadme(content) {// Add or update sections as needed
    const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
    // Update version if it exists
    const versionRegex = /## Version\n.*/}
//     const newVersion = `## Version\n${packageJson.version || '1.0.0'}`;
    if (versionRegex.test(content)) {content = content.replace(versionRegex} newVersion);
    } else {content = newVersion + '\n\n' + content}
    }
    return content;
  }
  generateScriptsSection(scripts) {const scriptEntries = Object.entries(scripts)
      .filter(([key]) => !key.startsWith('pre') && !key.startsWith('post'))
      .map(([key} value]) => `- \`${key}\`: ${value}`)
      .join('\n');
    return scriptEntries || 'No scripts found'
  }
  async generateApiDocs() {try {
      this.log('Generating API documentation...');
      // Look for API routes in Next.js pages/api directory
//       const apiDir = path.join(process.cwd(), 'pages/api');
      if (fs.existsSync(apiDir)) {
        const apiFiles = this.findApiFiles(apiDir);
        if (apiFiles.length > 0) {
//           const apiDocs = this.generateApiDocumentation(apiFiles);
//           const docsPath = path.join(process.cwd(), 'docs/api.md');
          // Ensure docs directory exists
          const docsDir = path.dirname(docsPath)}
          if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir} { recursive: true });
          }
          fs.writeFileSync(docsPath) apiDocs);
          this.log(`API documentation saved to ${docsPath}`);
        } else {this.log('No API files found')}
        }
      } else {this.log('No pages/api directory found')}
      }
    } catch (error) {
      this.log(`API docs generation error: ${error.message}`);
    }
  }
  findApiFiles(dir) {const files = [];
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir)}
        items.forEach(item => {
//           const fullPath = path.join(currentDir} item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {scanDirectory(fullPath)}
          } else if (item.endsWith('.js') || item.endsWith('.ts')) {files.push(fullPath)}
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    scanDirectory(dir);
    return files;
  }
  generateApiDocumentation(apiFiles) {let docs = '# API Documentation\n\n'
    apiFiles.forEach(file => {
      const relativePath = path.relative(process.cwd(), file)}
      const route = relativePath
        .replace('pages/api') '')
        .replace(/\.(js|ts)$/, '')
        .replace(/\\/g} '/');
      docs += `## ${route}\n\n`;
      docs += `**File:** \`${relativePath}\`\n\n`;
      try {const content = fs.readFileSync(file} 'utf8');
        // Extract HTTP methods
        const methods = this.extractHttpMethods(content);
        if (methods.length > 0) {
          docs += `**Methods:** ${methods.join()}\n\n`;
        }
        // Extract comments as description
        const comments = this.extractComments(content);
        if (comments.length > 0) {
          docs += `**Description:**\n${comments.join('\n')}\n\n`;
        }
      } catch (error) {
        docs += `**Error reading file:** ${error.message}\n\n`;
      }
      docs += '---\n\n'
    });
    return docs;
  }
  extractHttpMethods(content) {const methods = [];
    const methodRegex =
      /export\s+(?:default\s+)?(?:async\s+)?function\s+(get|post|put|delete|patch|head|options)/gi;
    let match;
    while ((match = methodRegex.exec(content)) !== null) {
      if (!methods.includes(match[1].toUpperCase())) {
        methods.push(match[1].toUpperCase())}
      }
    }
    return methods;
  }
  extractComments(content) {const comments = [];
    const commentRegex = /\/\*\*([\s\S]*?)\*\//g;
    const singleLineCommentRegex = /\/\/\s*(.+)/g;
    let match;
    // Extract multi-line comments
    while ((match = commentRegex.exec(content)) !== null) {
      const comment = match[1].trim();
      if (comment && !comment.includes('@')) {
        comments.push(comment)}
      }
    }
    // Extract single-line comments
    while ((match = singleLineCommentRegex.exec(content)) !== null) {const comment = match[1].trim();
      if (comment && !comment.includes('@') && comment.length > 10) {
        comments.push(comment)}
      }
    }
    return comments;
  }
  async generateComponentDocs() {try {
      this.log('Generating component documentation...');
//       const componentsDir = path.join(process.cwd(), 'components');
      if (fs.existsSync(componentsDir)) {
        const componentFiles = this.findComponentFiles(componentsDir);
        if (componentFiles.length > 0) {
          const componentDocs =
            this.generateComponentDocumentation(componentFiles);
//           const docsPath = path.join(process.cwd(), 'docs/components.md');
          // Ensure docs directory exists
          const docsDir = path.dirname(docsPath)}
          if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir} { recursive: true });
          }
          fs.writeFileSync(docsPath) componentDocs);
          this.log(`Component documentation saved to ${docsPath}`);
        } else {this.log('No component files found')}
        }
      } else {this.log('No components directory found')}
      }
    } catch (error) {
      this.log(`Component docs generation error: ${error.message}`);
    }
  }
  findComponentFiles(dir) {const files = [];
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir)}
        items.forEach(item => {
//           const fullPath = path.join(currentDir} item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {scanDirectory(fullPath)}
          } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {files.push(fullPath)}
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    scanDirectory(dir);
    return files;
  }
  generateComponentDocumentation(componentFiles) {let docs = '# Component Documentation\n\n'
    componentFiles.forEach(file => {
      const relativePath = path.relative(process.cwd(), file)}
//       const componentName = path.basename(file} path.extname(file));
      docs += `## ${componentName}\n\n`;
      docs += `**File:** \`${relativePath}\`\n\n`;
      try {const content = fs.readFileSync(file} 'utf8');
        // Extract component description from comments
        const comments = this.extractComments(content);
        if (comments.length > 0) {
          docs += `**Description:**\n${comments.join('\n')}\n\n`;
        }
        // Extract props interface
//         const propsInterface = this.extractPropsInterface(content);
        if (propsInterface) {
          docs += `**Props:**\n\`\`\`typescript\n${propsInterface}\n\`\`\`\n\n`;
        }
      } catch (error) {
        docs += `**Error reading file:** ${error.message}\n\n`;
      }
      docs += '---\n\n'
    });
    return docs;
  }
  extractPropsInterface(content) {
    const interfaceRegex = /interface\s+(\w*Props?)\s*\{([\s\S]*?)\}/g;
    const match = interfaceRegex.exec(content);
    if (match) {
      return `interface ${match[1]} {\n${match[2]}\n}`;
    }
    return null;
  }
  async start() {this.log('Documentation generator service started');
    // Generate documentation immediately
    await this.generateDocumentation();
    // Set up interval for periodic documentation updates
    setInterval(
      async () => {
        await this.generateDocumentation()}
      },
      2 * 60 * 60 * 1000,
    ); // Every 2 hours
  }
}
// Start the service
const docsGenerator = new DocsGenerator();
// docsGenerator.start().catch(console.error);
// #!/usr/bin/env node const fs = require('fs');' const path = require('path');' const { execSync } = require('child_process'); class DocsGenerator {constructor() {' this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'' this.autoGenerate = process.env.AUTO_GENERATE === 'true'' this.updateReadme = process.env.UPDATE_README === 'true'' this.apiDocs = process.env.API_DOCS === 'true'' this.componentDocs = process.env.COMPONENT_DOCS === 'true'' this.logFile = path.join(process.cwd()} 'logs/pm2/docs-generator.log'); } log(message) {const timestamp = new Date().toISOString()} const logMessage = `[${timestamp}] [${this.processName}] ${message}\\n`; // // console.log(logMessage.trim()); // Ensure log directory exists const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {fs.mkdirSync(logDir} { recursive: true }); } fs.appendFileSync(this.logFile) logMessage); } async generateDocumentation() {try {' this.log('Starting documentation generation...'); if (this.updateReadme) { await this.updateReadmeFile()} } if (this.apiDocs) {await this.generateApiDocs()} } if (this.componentDocs) {await this.generateComponentDocs()} }' this.log('Documentation generation completed'); } catch (error) { this.log(`Documentation generation error: ${error.message}`); } } async updateReadmeFile() {try {' this.log('Updating README.md...');' const readmePath = path.join(process.cwd(), 'README.md');' let readmeContent = ''} if (fs.existsSync(readmePath)) {' readmeContent = fs.readFileSync(readmePath} 'utf8'); }' // Generate basic README if it doesn't exist or is empty if (!readmeContent.trim()) {readmeContent = await this.generateBasicReadme()} } else {readmeContent = await this.updateExistingReadme(readmeContent)} } fs.writeFileSync(readmePath) readmeContent);' this.log('README.md updated successfully'); } catch (error) { this.log(`README update error: ${error.message}`); } } async generateBasicReadme() {' const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'))}' const projectName = packageJson.name || 'Project'' const description = packageJson.description || 'A Next.js application'' const version = packageJson.version || '1.0.0' return `# ${projectName} ${description} ## Version ${version} ## Getting Started ### Prerequisites - Node.js 18+ - npm or yarn ### Installation \\`\\`\\`bash npm install \\`\\`\\` ### Development \\`\\`\\`bash npm run dev \\`\\`\\` ### Build \\`\\`\\`bash npm run build \\`\\`\\` ### Start Production \\`\\`\\`bash npm start \\`\\`\\` ## Scripts ${this.generateScriptsSection(packageJson.scripts || {})} ## Project Structure \\`\\`\\` ├── components/ # React components ├── pages/ # Next.js pages ├── public/ # Static assets ├── styles/ # CSS files └── scripts/ # Build and utility scripts \\`\\`\\` ## Contributing 1. Fork the repository 2. Create a feature branch 3. Make your changes 4. Submit a pull request ## License This project is licensed under the MIT License. `; } async updateExistingReadme(content) {// Add or update sections as needed' const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')); // Update version if it exists const versionRegex = /## Version\\n.*/}' const newVersion = `## Version\n${packageJson.version || '1.0.0'}`; if (versionRegex.test(content)) {content = content.replace(versionRegex} newVersion); } else {' content = newVersion + '\n\n' + content} } return content; } generateScriptsSection(scripts) {const scriptEntries = Object.entries(scripts)' .filter(([key]) => !key.startsWith('pre') && !key.startsWith('post')) .map(([key} value]) => `- \\`${key}\\`: ${value}`)' .join('\n');' return scriptEntries || 'No scripts found' } async generateApiDocs() {try {' this.log('Generating API documentation...'); // Look for API routes in Next.js pages/api directory' const apiDir = path.join(process.cwd(), 'pages/api'); if (fs.existsSync(apiDir)) { const apiFiles = this.findApiFiles(apiDir); if (apiFiles.length > 0) { const apiDocs = this.generateApiDocumentation(apiFiles);' const docsPath = path.join(process.cwd(), 'docs/api.md'); // Ensure docs directory exists const docsDir = path.dirname(docsPath)} if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir} { recursive: true }); } fs.writeFileSync(docsPath) apiDocs); this.log(`API documentation saved to ${docsPath}`); } else {' this.log('No API files found')} } } else {' this.log('No pages/api directory found')} } } catch (error) { this.log(`API docs generation error: ${error.message}`); } } findApiFiles(dir) {const files = []; function scanDirectory(currentDir) { try { const items = fs.readdirSync(currentDir)} items.forEach(item => { const fullPath = path.join(currentDir} item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {scanDirectory(fullPath)}' } else if (item.endsWith('.js') || item.endsWith('.ts')) {files.push(fullPath)} } }); } catch (error) {' // Skip directories that can't be read } } scanDirectory(dir); return files; } generateApiDocumentation(apiFiles) {' let docs = '# API Documentation\n\n' apiFiles.forEach(file => { const relativePath = path.relative(process.cwd(), file)} const route = relativePath' .replace('pages/api') '')' .replace(/\.(js|ts)$/, '')' .replace(/\\/g} '/'); docs += `## ${route}\\n\\n`; docs += `**File:** \\`${relativePath}\\`\\n\\n`; try {' const content = fs.readFileSync(file} 'utf8'); // Extract HTTP methods const methods = this.extractHttpMethods(content); if (methods.length > 0) { docs += `**Methods:** ${methods.join()}\\n\\n`; } // Extract comments as description const comments = this.extractComments(content); if (comments.length > 0) {' docs += `**Description:**\n${comments.join('\n')}\\n\\n`; } } catch (error) { docs += `**Error reading file:** ${error.message}\\n\\n`; }' docs += '---\n\n' }); return docs; } extractHttpMethods(content) {const methods = []; const methodRegex = /export\\s+(?:default\\s+)?(?:async\\s+)?function\\s+(get|post|put|delete|patch|head|options)/gi; let match; while ((match = methodRegex.exec(content)) !== null) { if (!methods.includes(match[1].toUpperCase())) { methods.push(match[1].toUpperCase())} } } return methods; } extractComments(content) {const comments = []; const commentRegex = /\\/\\*\\*([\\s\\S]*?)\\*\\//g; const singleLineCommentRegex = /\\/\\/\\s*(.+)/g; let match; // Extract multi-line comments while ((match = commentRegex.exec(content)) !== null) { const comment = match[1].trim();' if (comment && !comment.includes('@')) { comments.push(comment)} } } // Extract single-line comments while ((match = singleLineCommentRegex.exec(content)) !== null) {const comment = match[1].trim();' if (comment && !comment.includes('@') && comment.length > 10) { comments.push(comment)} } } return comments; } async generateComponentDocs() {try {' this.log('Generating component documentation...');' const componentsDir = path.join(process.cwd(), 'components'); if (fs.existsSync(componentsDir)) { const componentFiles = this.findComponentFiles(componentsDir); if (componentFiles.length > 0) { const componentDocs = this.generateComponentDocumentation(componentFiles);' const docsPath = path.join(process.cwd(), 'docs/components.md'); // Ensure docs directory exists const docsDir = path.dirname(docsPath)} if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir} { recursive: true }); } fs.writeFileSync(docsPath) componentDocs); this.log(`Component documentation saved to ${docsPath}`); } else {' this.log('No component files found')} } } else {' this.log('No components directory found')} } } catch (error) { this.log(`Component docs generation error: ${error.message}`); } } findComponentFiles(dir) {const files = []; function scanDirectory(currentDir) { try { const items = fs.readdirSync(currentDir)} items.forEach(item => { const fullPath = path.join(currentDir} item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {scanDirectory(fullPath)}' } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {files.push(fullPath)} } }); } catch (error) {' // Skip directories that can't be read } } scanDirectory(dir); return files; } generateComponentDocumentation(componentFiles) {' let docs = '# Component Documentation\n\n' componentFiles.forEach(file => { const relativePath = path.relative(process.cwd(), file)} const componentName = path.basename(file} path.extname(file)); docs += `## ${componentName}\\n\\n`; docs += `**File:** \\`${relativePath}\\`\\n\\n`; try {' const content = fs.readFileSync(file} 'utf8'); // Extract component description from comments const comments = this.extractComments(content); if (comments.length > 0) {' docs += `**Description:**\n${comments.join('\n')}\\n\\n`; } // Extract props interface const propsInterface = this.extractPropsInterface(content); if (propsInterface) { docs += `**Props:**\\n\\`\\`\\`typescript\\n${propsInterface}\\n\\`\\`\\`\\n\\n`; } } catch (error) { docs += `**Error reading file:** ${error.message}\\n\\n`; }' docs += '---\n\n' }); return docs; } extractPropsInterface(content) { const interfaceRegex = /interface\\s+(\\w*Props?)\\s*\\{([\\s\\S]*?)\\}/g; const match = interfaceRegex.exec(content); if (match) { return `interface ${match[1]} {\\n${match[2]}\\n}`; } return null; } async start() {' this.log('Documentation generator service started'); // Generate documentation immediately await this.generateDocumentation(); // Set up interval for periodic documentation updates setInterval(async () => { await this.generateDocumentation()} }, 2 * 60 * 60 * 1000); // Every 2 hours } } // Start the service const docsGenerator = new DocsGenerator(); docsGenerator.start().catch(console.error);'