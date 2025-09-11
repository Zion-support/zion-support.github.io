


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

=======
}}
; async generate_readme () { try { this.log ('📝 Generating README.md...');
; const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); const readme_content = `# ${package_json.name};;
${package_json.description || 'A modern web application built with Next.js'}
;
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${exec_sync ('npm --version', { encoding: 'utf8' }).trim ()}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.,### Build;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;
\`\`\`bash;
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

=======
${Object.entries (package_json.scripts || {}).map (([key, value]) = > `- **${key}**: \`${value}\``).join ('\n')}
;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys (package_json.dependencies || {}).map (dep = > `- ${dep}`).join ('\n')}
;
### Development Dependencies;
${Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${dep}`).join('\n')};;
## 🔧 Configuration;
This project uses Next.js with the following configuration:  , - TypeScript support,
${Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${dep}`).join('\n')};
;
## 🔧 Configuration;
This project uses Next.js with the following configuration: ;
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
The project includes automated monitoring with PM2:  ,- Code quality monitoring;
The project includes automated monitoring with PM2: ;
- Code quality monitoring;
- Performance monitoring;
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
- **Generated**: ${apiDocs.generatedAt};
;
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
>>>>>>> origin/automation-improvements-final
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;;
${packageJson.description || 'A modern web application built with Next.js'};
=======
; fs.writeFileSync ('docs / COMPONENTS.md', docs_content);
; return { success: true, message: 'Component documentation generated successfully', components: component_docs.length}} catch (error) { return { success: false,
    error: error.message}}}
; getComponentFiles (dir) { const files = [];
; const scan_directory = (current_dir) = > { const items = fs.readdir_sync (current_dir); items.for_each (item = > { const full_path = path.join (current_dir, item); const stat = fs.stat_sync (full_path);
; if () {) {
  $2
} scan_directory (full_path)} else if (|| item.ends_with ('.tsx')) {) {
  $2
} files.push (full_path)}})}
; scan_directory (dir); return files}
; extractComponentInfo (file_path, content) { const file_name = path.basename (file_path, path.extname (file_path)); const component_name = file_name.char_at (0).toUpperCase () + file_name.slice (1);
; // Extract description from comments; const comment_match = content.match (/\/\*\*([\s\S]*?)\*\//); const description = comment_match ? comment_match[1].trim (): `${component_name} component`;
; // Extract props from interface or PropTypes; const props = []; const prop_match = content.match (/interface\s+\w + Props\s*{([\s\S]*?)}/); // Check condition
if ( {) {
  $2
} const prop_lines = prop_match[1].split ('\n'); prop_lines.for_each (line = > { const prop_match = line.match (/(\w+)\s*: \s*(\w+)/); // Check condition
if ( {) {
  $2
} props.push ({ name: prop_match[1], type: prop_match[2], description: 'Component prop'})}})}
; return { name: component_name,
    file: file_path.replace (this.project_root + '/', ''); description: description, props: props, usage: `<${component_name} />`}}
; async generate_report (readme_result, api_result, component_result) { const report = { timestamp: new Date ().toISOString (), summary: {
      , readme_generated: readme_result.success, apiDocsGenerated: api_result.success, componentDocsGenerated: component_result.success, total_endpoints: api_result.endpoints || 0, total_components: component_result.components || 0;
    },
    details: {, readme: readme_result, api: api_result,
    components: component_result} recommendations: []}
; // Generate recommendations; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'high', message: 'README generation failed', action: 'Check file permissions and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'API documentation generation failed', action: 'Check API route files and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'Component documentation generation failed', action: 'Check component files and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'low', message: 'No API endpoints found', action: 'Consider adding API routes for better documentation'})}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async run () { this.log ('📚 Starting Docs Generator...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Create docs directory if it doesn't exist; const docs_dir = path.join (this.project_root, 'docs'); if () {) {
  $2
} fs.mkdir_sync (docs_dir, { recursive: true })}
; // Generate all documentation; const readme_result = await this.generate_readme (); const api_result = await this.generateApiDocs (); const component_result = await this.generateComponentDocs ();
; // Generate report; this.log ('📊 Generating documentation report...'); const report = await this.generate_report (readme_result, api_result, component_result);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Docs Generator Summary: '); this.log (`README: ${report.summary.readme_generated ? 'Generated': 'Failed'}`); this.log (`API Docs: ${report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log (`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log (`Total Endpoints: ${report.summary.total_endpoints}`); this.log (`Total Components: ${report.summary.total_components}`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)})} else { this.log ('\n✨ Documentation generated successfully!')}
} catch (error) { this.log (`❌ Error running docs generator: ${error.message}`); process.exit (1)}}}
;
// Run the docs generator;
const docs_generator = new DocsGenerator ();
docs_generator.run ().catch (error = > { process.exit (1)});
${package_json.description || 'A modern web application built with Next.js'}
;
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${exec_sync ('npm --version', { encoding: 'utf8' }).trim ()}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
;
=======
}}; async generateReadme() {try {; this.log('📝 Generating README.md...'); const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;
${packageJson.description |'A modern web application built with Next.js'}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

Open [http: //localhost:3000](http://localhost:3000) with your browser to see the result.,
### Build;

=======

Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;
${this.projectRoot}/;

├── pages/                 # Next.js pages;
├── components/            # React components;
├── styles/               # CSS styles;
├── public/               # Static assets;
├── scripts/              # Build and utility scripts;
└── package.json          # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')};
=======

${Object.entries(packageJson.scripts || {}).map(([key, value]) = > `- **${key}**: \`${value}\``).join('\n')};

;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
### Development Dependencies;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
## 🔧 Configuration;

This project uses Next.js with the following configuration: ;
- TypeScript support;


- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;

${Object.entries (package_json.scripts || {}).map (([key, value]) = > `- **${key}**: \`${value}\``).join ('\n')}
;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys (package_json.dependencies || {}).map (dep = > `- ${dep}`).join ('\n')}
;
### Development Dependencies;
${Object.keys (package_json.dev_dependencies || {}).map (dep = > `- ${dep}`).join ('\n')};

## 🔧 Configuration;
This project uses Next.js with the following configuration:  , - TypeScript support
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;

The project includes automated monitoring with PM2:;
- Code quality monitoring;

=======
The project includes automated monitoring with PM2:  , - Code quality monitoring;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

The project includes automated monitoring with PM2: ;
- Code quality monitoring;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
- Performance monitoring;
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
## 📞 Support;
For support, email support@example.com or create an issue in the repository.;
---;

Generated on ${new Date().toISOString()};
`;
; fs.writeFileSync('README.md', readmeContent);
; return {; success: true,
    message: 'README.md generated successfully'}} catch (error) {; return {; success: false,
    error: error.message}}};
; async generateApiDocs() {; try {; this.log('🔌 Generating API documentation...');
; const apiDocs = {; title: 'API Documentation', version: '1.0.0', description: 'API endpoints and documentation', baseUrl: 'http: //localhost: 3000', endpoints: [],
    generatedAt: new Date().toISOString()};
; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {; const apiFiles = this.getApiFiles(pagesDir);
; apiFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})};
; const docsContent = `# API Documentation;## Overview;
; const docsContent = `# API Documentation;
## Overview;
,
### Installation,
\`\`\`bash,
npm install,
\`\`\`,
### Development,
\`\`\`bash,
npm run dev,
\`\`\`,
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,
### Build,
\`\`\`bash,
npm run build,
npm start,
\`\`\`,
## 📁 Project Structure,
\`\`\`,
${this.projectRoot}/,
├── pages/                 # Next.js pages,
├── components/            # React components,
├── styles/               # CSS styles,
├── public/               # Static assets,
├── scripts/              # Build and utility scripts,
└── package.json          # Dependencies and scripts,
\`\`\`,
## 🛠️ Available Scripts,
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},
,
## 📦 Dependencies,
### Production Dependencies,
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},
,
### Development Dependencies,
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},
,
## 🔧 Configuration,
This project uses Next.js with the following: configuration: ,
- TypeScript support,
- ESLint for code quality,
- Prettier for code formatting,
- PM2 for process management,
## 📊 Monitoring,
The project includes automated monitoring with: PM2:,
- Code quality monitoring,
- Performance monitoring,
- Security scanning,
- Health checks,
- Automated testing,
## 🤝 Contributing,
1. Fork the repository,
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),
4. Push to the branch (\`git push origin feature/AmazingFeature\`),
5. Open a Pull Request,
## 📄 License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
## 📞 Support,
For support, email support@example.com or create an issue in the repository.,
---,
Generated on ${new Date().toISOString()},
`,
,
      fs.writeFileSync('README.md', readmeContent),
,
      return {,
        succes: s: true,
        messag: e: 'README.md generated successfully'
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
},;
,;
  async generateReadme() {,;
    try {,;
      this.log('📝 Generating README.md...'),;
,;
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
      const readmeContent = `# ${packageJson.name},;
,;
${packageJson.description || 'A modern web application built with Next.js'},;
,;
## 🚀 Getting Started,;
### Prerequisites,;
- Node.js ${process.version},;
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},;
,;
### Installation,;
\`\`\`bash,;
npm install,;
\`\`\`,;
### Development,;
\`\`\`bash,;
npm run dev,;
\`\`\`,;
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,;
### Build,;
\`\`\`bash,;
npm run build,;
npm start,;
\`\`\`,;
## 📁 Project Structure,;
\`\`\`,;
${this.projectRoot}/,;
├── pages/                 # Next.js pages,;
├── components/            # React components,;
├── styles/               # CSS styles,;
├── public/               # Static assets,;
├── scripts/              # Build and utility scripts,;
└── package.json          # Dependencies and scripts,;
\`\`\`,;
## 🛠️ Available Scripts,;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},;
,;
## 📦 Dependencies,;
### Production Dependencies,;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
### Development Dependencies,;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
## 🔧 Configuration,;
This project uses Next.js with the following: configuration: ,;
- TypeScript support,;
- ESLint for code quality,;
- Prettier for code formatting,;
- PM2 for process management,;
## 📊 Monitoring,;
The project includes automated monitoring with: PM2:,;
- Code quality monitoring,;
- Performance monitoring,;
- Security scanning,;
- Health checks,;
- Automated testing,;
## 🤝 Contributing,;
1. Fork the repository,;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),;
4. Push to the branch (\`git push origin feature/AmazingFeature\`),;
5. Open a Pull Request,;
## 📄 License,;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,;
## 📞 Support,;
For support, email support@example.com or create an issue in the repository.,;
---,;
Generated on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('README.md', readmeContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'README.md generated successfully';
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
}
},;
,;
  async generateApiDocs() {,;
    try {,;
      this.log('🔌 Generating API documentation...'),;
,;
      const apiDocs = {,;
        titl: e: 'API Documentation',;
        versio: n: '1.0.0',;
        descriptio: n: 'API endpoints and documentation',;
        baseUr: l: 'htt: p://localhos: t:3000',;
        endpoint: s: [],;
        generatedA: t: new Date().toISOString(),;
      ,;
,;
      // Scan for API routes,;
      const pagesDir = path.join(this.projectRoot, 'pages/api'),;
      if (fs.existsSync(pagesDir)) {,;
        const apiFiles = this.getApiFiles(pagesDir),;
,;
        apiFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const endpoint = this.extractApiEndpoint(file, content),;
          if (endpoint) {,;
            apiDocs.endpoints.push(endpoint);
          }
        })
      },
,
      const docsContent = `# API Documentation,
## Overview,
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
;
## Endpoints;
${apiDocs.endpoints.map(endpoint => `;
### ${endpoint.method} ${endpoint.path};
=======
Generated on ${new Date ().toISOString ()}
`;
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
;
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
All endpoints return appropriate HTTP status codes:  , - \`200\`: Success
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
${componentDocs.map(component = > `;
### ${component.name};
;
${component.description}
;
**File**: \`${component.file}\`;
**Props: **,
${component.props.map (prop = > `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join ('\n')}
;
**Usage: **, \`\`\`jsx,
,
## Error Handling,
All endpoints return appropriate HTTP status: codes: ,
- \`200\`: Success,
- \`400\`: Bad Request,
- \`401\`: Unauthorized,
- \`404\`: Not Found,
- \`500\`: Internal Server Error,
## Rate Limiting,
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,
---,
Generated by Docs Generator on ${new Date().toISOString(),
`,
,
      fs.writeFileSync('docs/API.md', docsContent),
,
      return {,
        succes: s: true,
        messag: e: 'API documentation generated successfully',
        endpoint: s: apiDocs.endpoints.length
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
        });
      },;
,;
      const docsContent = `# API Documentation,;
## Overview,;
- **Base URL**: ${apiDocs.baseUrl},;
- **Version**: ${apiDocs.version},;
- **Generated**: ${apiDocs.generatedAt},;
,;
## Endpoints,;
${apiDocs.endpoints.map(endpoint => `,;
### ${endpoint.method} ${endpoint.path},;
,;
${endpoint.description},;
,;
**Parameter: s: **,;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},;
,;
**Respons: e: **,;
\`\`\`json,;
${JSON.stringify(endpoint.response, null, 2)},;
\`\`\`,;
`).join('\n')},;
,;
## Error Handling,;
All endpoints return appropriate HTTP status: codes: ,;
- \`200\`: Success,;
- \`400\`: Bad Request,;
- \`401\`: Unauthorized,;
- \`404\`: Not Found,;
- \`500\`: Internal Server Error,;
## Rate Limiting,;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,;
---,;
Generated by Docs Generator on ${new Date().toISOString(),;
`,;
,;
      fs.writeFileSync('docs/API.md', docsContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'API documentation generated successfully',;
        endpoint: s: apiDocs.endpoints.length;
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
}
},;
,;
  getApiFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,;
          files.push(fullPath);
        }
      });
},;
,;
    scanDirectory(dir),;
    return files;
},;
,;
  extractApiEndpoint(filePath, content) {,;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''),;
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/',;
,;
    // Extract HTTP method from content,;
    const method = content.includes('export default') ? 'GET' : 'POST',;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint',;
,;
    return {,;
      metho: d: method,;
      pat: h: path,;
      descriptio: n: description,;
      parameter: s: [],;
      respons: e: {,;
        succes: s: true,;
        dat: a: {;
      }
}
},;
,;
  async generateComponentDocs() {,;
    try {,;
      this.log('🧩 Generating component documentation...'),;
,;
      const componentsDir = path.join(this.projectRoot, 'components'),;
      const componentDocs = [],;
,;
      if (fs.existsSync(componentsDir)) {,;
        const componentFiles = this.getComponentFiles(componentsDir),;
,;
        componentFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const componentInfo = this.extractComponentInfo(file, content),;
          if (componentInfo) {,;
            componentDocs.push(componentInfo);
          }
        })
      },
,
      const docsContent = `# Component Documentation,
## Overview,
This document describes all React components in the application.,
## Components,
${componentDocs.map(component => `,
${component.usage};
\`\`\`;
`).join ('\n')}
;
---;
Generated by Docs Generator on ${new Date ().toISOString ()}
`;
; fs.writeFileSync ('docs / COMPONENTS.md', docs_content);
; return { success: true, message: 'Component documentation generated successfully', components: component_docs.length}} catch (error) { return { success: false,
    error: error.message}}}
; getComponentFiles (dir) { const files = [];
; const scan_directory = (current_dir) = > { const items = fs.readdir_sync (current_dir); items.for_each (item = > { const full_path = path.join (current_dir, item); const stat = fs.stat_sync (full_path);
; if () {) {
  $2
} scan_directory (full_path)} else if (|| item.ends_with ('.tsx')) {) {
  $2
} files.push (full_path)}})}
; scan_directory (dir); return files}
; extractComponentInfo (file_path, content) { const file_name = path.basename (file_path, path.extname (file_path)); const component_name = file_name.char_at (0).toUpperCase () + file_name.slice (1);
; // Extract description from comments; const comment_match = content.match (/\/\*\*([\s\S]*?)\*\//); const description = comment_match ? comment_match[1].trim (): `${component_name} component`;
; // Extract props from interface or PropTypes; const props = []; const prop_match = content.match (/interface\s+\w + Props\s*{([\s\S]*?)}/); // Check condition
if ( {) {
  $2
} const prop_lines = prop_match[1].split ('\n'); prop_lines.for_each (line = > { const prop_match = line.match (/(\w+)\s*: \s*(\w+)/); // Check condition
if ( {) {
  $2
} props.push ({ name: prop_match[1], type: prop_match[2], description: 'Component prop'})}})}
; return { name: component_name,
    file: file_path.replace (this.project_root + '/', ''); description: description, props: props, usage: `<${component_name} />`}}
; async generate_report (readme_result, api_result, component_result) { const report = { timestamp: new Date ().toISOString (), summary: {
      , readme_generated: readme_result.success, apiDocsGenerated: api_result.success, componentDocsGenerated: component_result.success, total_endpoints: api_result.endpoints || 0, total_components: component_result.components || 0;
    },
    details: {, readme: readme_result, api: api_result,
    components: component_result} recommendations: []}
; // Generate recommendations; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'high', message: 'README generation failed', action: 'Check file permissions and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'API documentation generation failed', action: 'Check API route files and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'Component documentation generation failed', action: 'Check component files and try again'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'low', message: 'No API endpoints found', action: 'Consider adding API routes for better documentation'})}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async run () { this.log ('📚 Starting Docs Generator...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Create docs directory if it doesn't exist; const docs_dir = path.join (this.project_root, 'docs'); if () {) {
  $2
} fs.mkdir_sync (docs_dir, { recursive: true })}
; // Generate all documentation; const readme_result = await this.generate_readme (); const api_result = await this.generateApiDocs (); const component_result = await this.generateComponentDocs ();
; // Generate report; this.log ('📊 Generating documentation report...'); const report = await this.generate_report (readme_result, api_result, component_result);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Docs Generator Summary: '); this.log (`README: ${report.summary.readme_generated ? 'Generated': 'Failed'}`); this.log (`API Docs: ${report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log (`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log (`Total Endpoints: ${report.summary.total_endpoints}`); this.log (`Total Components: ${report.summary.total_components}`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)})} else { this.log ('\n✨ Documentation generated successfully!')}
} catch (error) { this.log (`❌ Error running docs generator: ${error.message}`); process.exit (1)}}}
;
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error => {;
  process.exit(1);
});
const docs_generator = new DocsGenerator ();
docs_generator.run ().catch (error = > {_; process.exit (1)});
#!/usr / bin / env node const { exec_sync } = require ('child_process'); const fs = require ('fs'); const path = require ('path'); class DocsGenerator { constructor () { this.process_name = process.env.PM2_PROCESS_NAME || 'docs - generator'; this.auto_generate = process.env.AUTO_GENERATE === 'true'; this.update_readme = process.env.UPDATE_README === 'true'; this.api_docs = process.env.API_DOCS === 'true'; this.component_docs = process.env.COMPONENT_DOCS === 'true'; this.log_file = 'logs / pm2 / docs - generator.log'; this.error_file = 'logs / pm2 / docs - generator - error.log'; this.ensureLogDirectory ()} ensureLogDirectory () { const log_dir = path.dirname (this.log_file); if () { fs.mkdir_sync (log_dir, { recursive: true })} } log (message, level = 'INFO') { const timestamp = new Date ().toISOString ()) {
  $2
} const log_message = `[${timestamp}] [${level}] ${message}\n`); try { fs.appendFileSync (this.log_file, log_message)} catch (error) { console.error ('Failed to write to log file:', error.message)} } error (message) { this.log (message, 'ERROR'); try { fs.appendFileSync (this.error_file, `[${new Date ().toISOString ()}] ERROR: ${message}\n`)} catch (err) { console.error ('Failed to write to error file:', err.message)} } async generate_readme () { this.log ('Generating README documentation...'); try { const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); let readme_content = `# ${package_json.name || 'Project'}\n\n`; readme_content += `${package_json.description || 'A modern web application'}\n\n`; readme_content += `![Version](https: readme_content += `![Node](https: readme_content += `![License](https: readme_content += `## Table of Contents\n\n`; readme_content += `- [Installation](#installation)\n`; readme_content += `- [Usage](#usage)\n`; readme_content += `- [Scripts](#scripts)\n`; readme_content += `- [API Documentation](#api - documentation)\n`; readme_content += `- [Contributing](#contributing)\n`; readme_content += `- [License](#license)\n\n`; readme_content += `## Installation\n\n`; readme_content += `\`\`\`bash\n`; readme_content += `npm install\n`; readme_content += `\`\`\`\n\n`; readme_content += `## Usage\n\n`; readme_content += `\`\`\`bash\n`; readme_content += `# Development\n`; readme_content += `npm run dev\n\n`; readme_content += `# Production build\n`; readme_content += `npm run build\n`; readme_content += `npm run start\n`; readme_content += `\`\`\`\n\n`; // Check condition
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
#!/usr / bin / env node;
/**;
* PM2 Documentation Generator Script;
* Automatically generates and updates documentation;
*/;
const { exec_sync } = require ('child_process');
const fs = require ('fs');
const path = require ('path');
class DocsGenerator {

  constructor () {
    this.process_name = process.env.PM2_PROCESS_NAME || 'docs - generator';
    this.auto_generate = process.env.AUTO_GENERATE === 'true';
    this.update_readme = process.env.UPDATE_README === 'true';
    this.api_docs = process.env.API_DOCS === 'true';
    this.component_docs = process.env.COMPONENT_DOCS === 'true';
    this.log_file = 'logs / pm2 / docs - generator.log';
    this.error_file = 'logs / pm2 / docs - generator - error.log';
    this.ensureLogDirectory ();

  }
  ensureLogDirectory () {
    const log_dir = path.dirname (this.log_file);
    if () {) {
  $2
}
      fs.mkdir_sync (log_dir, { "recursive": true });
    }
  }
  log (message, level = 'INFO') {
    const timestamp = new Date ().toISOString ();
    const log_message = `[${timestamp}] [${level}] ${message}\n`;
    console.log (log_message.trim ());
    try {
      fs.appendFileSync (this.log_file, log_message);
    } catch (error) {
      console.error ('Failed to write to log "file": ', error.message);
    }
  }
  error (message) {
    this.log (message, 'ERROR');
    try {
      fs.appendFileSync (this.error_file, `[${new Date ().toISOString ()}] "ERROR": ${message}\n`);
    } catch (err) {
      console.error ('Failed to write to error "file": ', err.message);
    }
  }
  async generate_readme () {
    this.log ('Generating README documentation...');
    try {

      const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8'));
      let readme_content = `# ${package_json.name || 'Project'}\n\n`;
      readme_content += `${package_json.description || 'A modern web application'}\n\n`;
      // Add version and status badges;
      readme_content += `![Version]("https": //img.shields.io / badge / version-${package_json.version || '1.0.0'}-blue.svg)\n`;
      readme_content += `![Node]("https": //img.shields.io / badge / node-${process.version}-green.svg)\n`;
      readme_content += `![License]("https": //img.shields.io / badge / license-${package_json.license || 'MIT'}-yellow.svg)\n\n`;
      // Add table of contents;
      readme_content += "## Table of Contents\n\n";
      readme_content += "- [Installation](#installation)\n";
      readme_content += "- [Usage](#usage)\n";
      readme_content += "- [Scripts](#scripts)\n";
      readme_content += "- [API Documentation](#api - documentation)\n";
      readme_content += "- [Contributing](#contributing)\n";
      readme_content += "- [License](#license)\n\n";
      // Add installation section;
      readme_content += "## Installation\n\n";
      readme_content += """"bash\n";
      readme_content += "npm install\n";
      readme_content += """"\n\n";
      // Add usage section;
      readme_content += "## Usage\n\n";
      readme_content += """"bash\n";
      readme_content += "# Development\n";
      readme_content += "npm run dev\n\n";
      readme_content += "# Production build\n";
      readme_content += "npm run build\n";
      readme_content += "npm run start\n";
      readme_content += """"\n\n";
      // Add scripts section;
      // Check condition
if ( {) {
  $2
}
        readme_content += "## Scripts\n\n";
        readme_content += "| Script | Description |\n";
        readme_content += "|--------|-------------|\n";
        for (const [script, description] of Object.entries (package_json.scripts)) {
          const desc = this.getScriptDescription (script, description);
          readme_content += "| "${script}\` | ${desc} |\n`;

        }
        readme_content += "\n";
      }
      // Add API documentation section;
      // Check condition
if ( {) {
  $2
}
        readme_content += "## API Documentation\n\n";
        readme_content += "API documentation is automatically generated and available at "/api / docs".\n\n";
      }

      // Add contributing section;
      readme_content += "## Contributing\n\n";
      readme_content += "1. Fork the repository\n";
      readme_content += "2. Create your feature branch ("git checkout -b feature / amazing - feature")\n";
      readme_content += "3. Commit your changes ("git commit -m 'Add some amazing feature'")\n";
      readme_content += "4. Push to the branch ("git push origin feature / amazing - feature")\n";
      readme_content += "5. Open a Pull Request\n\n";
      // Add license section;
      readme_content += "## License\n\n";
      readme_content += `This project is licensed under the ${package_json.license || 'MIT'} License.\n\n`;
      // Write README file;
      fs.writeFileSync ('README.md', readme_content);
      this.log ('README.md generated successfully');
      return { "success": true, "file": 'README.md' }
    } catch (error) {
      this.error (`Failed to generate "README": ${error.message}`);

      return { "success": false, "error": error.message }
    }
  }
  getScriptDescription (script, command) {
    const descriptions = {

      'dev': 'Start development server',
      'build': 'Build for production',
      'start': 'Start production server',
      'test': 'Run tests',
      'lint': 'Run linter',
      '"lint": fix': 'Fix linting issues',
      'type - check': 'Run TypeScript type checking',
      'clean': 'Clean build artifacts',
      'check': 'Run all checks (lint, type - check, test)',
      'precommit': 'Pre - commit hook',
      'prepare': 'Prepare script for git hooks';
    }
    return descriptions[script] || command;

  }
  async generateApiDocs () {
    this.log ('Generating API documentation...');
    try {
      const api_files = this.findApiFiles ();
      let api_docs = "# API Documentation\n\n";
      api_docs += `Generated "on": ${new Date ().toISOString ()}\n\n`;
      for (const file of api_files) {
        const file_docs = this.extractApiDocumentation (file);
        // Check condition
if ( {) {
  $2
}
          api_docs += file_docs;
        }
      }
      const docs_dir = 'docs';
      if () {) {
  $2
}
module.exports = DocsGenerator;
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;
;
origin/automation-improvements-final
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;;
${packageJson.description || 'A modern web application built with Next.js'};
;
}}; async generateReadme() {try {; this.log('📝 Generating README.md...'); const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};;
${packageJson.description |'A modern web application built with Next.js'}
origin/main
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()}
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};
,
  async generateReadme() {,
    try {,
      this.log('📝 Generating README.md...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const readmeContent = `# ${packageJson.name};
;
${packageJson.description || 'A modern web application built with Next.js'};
;
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version};
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};
;
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.,### Build;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;
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
${Object.entries(packageJson.scripts || {}).map(([key, value]) = > `- **${key}**: \`${value}\``).join('\n')};
;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies || {}).map(dep = > `- ${dep}`).join('\n')};
;
### Development Dependencies;
${Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${dep}`).join('\n')};
;
## 🔧 Configuration;
This project uses Next.js with the following configuration: ;
- TypeScript support;
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
The project includes automated monitoring with PM2: ;
- Code quality monitoring;
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
function scan_directory() {
      try {
        const items = fs.readdir_sync (dir);
        for (const item of items) {
          const full_path = path.join (dir, item);
          const stat = fs.stat_sync (full_path);
          if () {) {
  $2
}
            if () {) {
  $2
}
              scan_directory (full_path);
            }
          } else if () {) {
  $2
}
            const ext = path.extname (item);
            if () {) {
  $2
}
              files.push (full_path);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read;
      }
    }
    // Look for API files in common directories;
    const api_dirs = ['api', 'pages / api', 'src / api', 'lib / api', 'routes'];
    for (const dir of api_dirs) {
      if () {) {
  $2
}
        scan_directory (dir);
      }
    }
    return files;
  }
  extractApiDocumentation (file_path) {
    try {
      const content = fs.readFileSync (file_path, 'utf8');
      const lines = content.split ('\n');
      let docs = `## ${path.basename (file_path)}\n\n`;
      let in_comment = false;
      let comment_lines = [];
      for (let index = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments;
        if (.starts_with ('/**')) {) {
  $2
}
          in_comment = true;
          comment_lines = [];
          continue;
        }

        // Check condition
if ( {) {
  $2
}
          if (.ends_with ('*/')) {) {
  $2
}
            in_comment = false;
            // Process collected comment lines;
            const comment = comment_lines.join ('\n');
            if (|| comment.includes ('@route')) {) {
  $2
}
              docs += this.formatApiComment (comment);

            }
            comment_lines = [];
          } else {
            comment_lines.push (line.replace (/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log (`Failed to extract docs from ${file_path}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatApiComment (comment) {
    let formatted = '"""\n';
    formatted += comment.replace (/@\w+/g, '').trim ();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateComponentDocs () {
    this.log ('Generating component documentation...');
    try {
      const component_files = this.findComponentFiles ();
      let component_docs = "# Component Documentation\n\n";
      component_docs += `Generated "on": ${new Date ().toISOString ()}\n\n`;
      for (const file of component_files) {
        const component_doc = this.extractComponentDocumentation (file);
        // Check condition
if ( {) {
  $2
}
          component_docs += component_doc;
        }
      }
      const docs_dir = 'docs';
      if () {) {
  $2
}
        fs.mkdir_sync (docs_dir, { "recursive": true });
      }

      fs.writeFileSync (path.join (docs_dir, 'COMPONENTS.md'), component_docs);
      this.log ('Component documentation generated successfully');
      return { "success": true, "file": 'docs / COMPONENTS.md' }
    } catch (error) {
      this.error (`Failed to generate component "docs": ${error.message}`);

      return { "success": false, "error": error.message }
    }
  }
  findComponentFiles () {
    const files = [];
    /**
 * scan_directory - Function description
 */
function scan_directory() {
      try {
        const items = fs.readdir_sync (dir);
        for (const item of items) {
          const full_path = path.join (dir, item);
          const stat = fs.stat_sync (full_path);
          if () {) {
  $2
}
            if () {) {
  $2
}
              scan_directory (full_path);
            }
          } else if () {) {
  $2
}
            const ext = path.extname (item);
            if () {) {
  $2
}
              files.push (full_path);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read;
      }
    }
    // Look for component files in common directories;
    const component_dirs = ['components', 'src / components', 'lib / components', 'pages'];
    for (const dir of component_dirs) {
      if () {) {
  $2
}
        scan_directory (dir);
      }
    }
    return files;
  }
  extractComponentDocumentation (file_path) {
    try {
      const content = fs.readFileSync (file_path, 'utf8');
      const lines = content.split ('\n');
      let docs = `## ${path.basename (file_path)}\n\n`;
      let in_comment = false;
      let comment_lines = [];
      for (let index = 0; i < lines.length; i++) {
        const line = lines[i];
        // Check for JSDoc comments;
        if (.starts_with ('/**')) {) {
  $2
}
          in_comment = true;
          comment_lines = [];
          continue;
        }

        // Check condition
if ( {) {
  $2
}
          if (.ends_with ('*/')) {) {
  $2
}
            in_comment = false;
            // Process collected comment lines;
            const comment = comment_lines.join ('\n');
            if (|| comment.includes ('@props')) {) {
  $2
}
              docs += this.formatComponentComment (comment);

            }
            comment_lines = [];
          } else {
            comment_lines.push (line.replace (/^\s*\*\s?/, ''));
          }
        }
      }
      return docs;
    } catch (error) {
      this.log (`Failed to extract component docs from ${file_path}: ${error.message}`, 'WARNING');
      return null;
    }
  }
  formatComponentComment (comment) {
    let formatted = '"""\n';
    formatted += comment.replace (/@\w+/g, '').trim ();
    formatted += '\n"""\n\n';
    return formatted;
  }
  async generateDocumentationReport () {
    this.log ('Generating documentation report...');
    try {
      const report = {

        "timestamp": new Date ().toISOString (),
        "process_name": this.process_name,
        "readme_generated": this.update_readme ? await this.generate_readme () : null,
        "apiDocsGenerated": this.api_docs ? await this.generateApiDocs () : null,
        "componentDocsGenerated": this.component_docs ? await this.generateComponentDocs () : null,
        "environment": {
          node_version: process.version,
          "platform": process.platform,
          "cwd": process.cwd ();
        }

      }
      const report_file = `docs - reports / docs - generation-${Date.now ()}.json`;
      const report_dir = path.dirname (report_file);
      if () {) {
  $2
}
        fs.mkdir_sync (report_dir, { "recursive": true });
      }
      fs.writeFileSync (report_file, JSON.stringify (report, null, 2));
      this.log (`Documentation report saved "to": ${report_file}`);
      return report;
    } catch (error) {
      this.error (`Failed to generate documentation "report": ${error.message}`);
      return null;
    }
  }
  async start () {
    this.log (`Starting ${this.process_name}...`);
    // Run initial documentation generation;
    await this.generateDocumentationReport ();
    // Set up periodic documentation updates;
    const interval = 2 * 60 * 60 * 1000; // 2 hours;
    set_interval (async () => {
      this.log ('Running scheduled documentation generation...');
      await this.generateDocumentationReport ();
    }, interval);
    this.log (`${this.process_name} started successfully`);
  }
}
// Start the automation if this script is run directly;
// Check condition
if ( {) {
  $2
}
  const generator = new DocsGenerator ();
  generator.start ().catch (error => {
    console.error ('Documentation generator failed to "start": ', error);
    process.exit (1);
  });
}
module.exports = DocsGenerator;

=======
=======
Generated by Docs Generator on ${new Date().toISOString();
`;
;
      fs.writeFileSync('docs/API.md', docsContent);
;
      return {;
        success: true, message: 'API documentation generated successfully',
        endpoints: apiDocs.endpoints.length, ,
    } catch (error) {;
      return {;
        success: false, error: error.message,
      ;
};
};
;
  getApiFiles(dir) {;
    const files = [];
;
    const scanDirectory = (currentDir) => {;
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {;
          files.push(fullPath);
        };
      });
};
;
    scanDirectory(dir);
    return files;
};
;
  extractApiEndpoint(filePath, content) {;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', '');
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/';
;
    // Extract HTTP method from content;
    const method = content.includes('export default') ? 'GET' : 'POST';
;
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint';
;
    return {;
      method: method, path: path,
      description: description, parameters: [],
      response: {, success: true,
        data: {,
      };
};
};
;
  async generateComponentDocs() {;
    try {;
      this.log('🧩 Generating component documentation...');
;
      const componentsDir = path.join(this.projectRoot, 'components');
      const componentDocs = [];
;
      if (fs.existsSync(componentsDir)) {;
        const componentFiles = this.getComponentFiles(componentsDir);
;
        componentFiles.forEach(file => {;
          const content = fs.readFileSync(file, 'utf8');
          const componentInfo = this.extractComponentInfo(file, content);
          if (componentInfo) {;
            componentDocs.push(componentInfo);
          };
        });
      };
;
      const docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${componentDocs.map(component => `;
### ${component.name};
;
${component.description};
;
**File**: \`${component.file}\`;
**Props: **,
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')};
;
**Usage: **, \`\`\`jsx,
${component.usage;
\`\`\`;
`).join('\n')};
;
---;
Generated by Docs Generator on ${new Date().toISOString()};
`;
;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent);
;
      return {;
        success: true, message: 'Component documentation generated successfully',
        components: componentDocs.length, ,
    } catch (error) {;
      return {;
        success: false, error: error.message,
      ;
};
};
;
  getComponentFiles(dir) {;
    const files = [];
;
    const scanDirectory = (currentDir) => {;
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath);
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {;
          files.push(fullPath);
        };
      });
};
;
    scanDirectory(dir);
    return files;
};
;
  extractComponentInfo(filePath, content) {;
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
;
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
    const description = commentMatch ? commentMatch[1].trim() : `${componentName} component`;
;
    // Extract props from interface or PropTypes;
    const props = [];
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/);
    if (propMatch) {;
      const propLines = propMatch[1].split('\n');
      propLines.forEach(line => {;
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/);
        if (propMatch) {;
          props.push({;
            name: propMatch[1], type: propMatch[2],
            description: 'Component prop',
          });
        };
      });
};
;
    return {;
      name: componentName,
      file: filePath.replace(this.projectRoot + '/', '');
      description: description, props: props,
      usage: `<${componentName} />`;
};
};
;
  async generateReport(readmeResult, apiResult, componentResult) {;
    const report = {;
      timestamp: new Date().toISOString(), summary: {,
        readmeGenerated: readmeResult.success, apiDocsGenerated: apiResult.success,
        componentDocsGenerated: componentResult.success, totalEndpoints: apiResult.endpoints || 0,
        totalComponents: componentResult.components || 0, ,
      details: {, readme: readmeResult,
        api: apiResult, components: componentResult,
      ;
      recommendations: [], ,
;
    // Generate recommendations;
    if (!readmeResult.success) {;
      report.recommendations.push({;
        priority: 'high', message: 'README generation failed',
        action: 'Check file permissions and try again',
      });
};
;
    if (!apiResult.success) {;
      report.recommendations.push({;
        priority: 'medium', message: 'API documentation generation failed',
        action: 'Check API route files and try again',
      });
};
;
    if (!componentResult.success) {;
      report.recommendations.push({;
        priority: 'medium', message: 'Component documentation generation failed',
        action: 'Check component files and try again',
      });
};
;
    if (report.summary.totalEndpoints === 0) {;
      report.recommendations.push({;
        priority: 'low', message: 'No API endpoints found',
        action: 'Consider adding API routes for better documentation',
      });
};
;
    return report;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async run() {;
    this.log('📚 Starting Docs Generator...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
;
      // Create docs directory if it doesn't exist;
      const docsDir = path.join(this.projectRoot, 'docs');
      if (!fs.existsSync(docsDir)) {;
        fs.mkdirSync(docsDir, { recursive: true });
      };
;
      // Generate all documentation;
      const readmeResult = await this.generateReadme();
      const apiResult = await this.generateApiDocs();
      const componentResult = await this.generateComponentDocs();
;
      // Generate report;
      this.log('📊 Generating documentation report...');
      const report = await this.generateReport(readmeResult, apiResult, componentResult);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Docs Generator Summary: '),
      this.log(`README: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`);
      this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Total Endpoints: ${report.summary.totalEndpoints}`);
      this.log(`Total Components: ${report.summary.totalComponents}`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ Documentation generated successfully!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running docs generator: ${error.message}`);
      process.exit(1);
};
};
};
;
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error => {;
  process.exit(1);
});

    };
  };
,
  async generateReadme() {,
    try {,
      this.log('📝 Generating README.md...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const readmeContent = `# ${packageJson.name};
,
${packageJson.description || 'A modern web application built with Next.js'};
,
## 🚀 Getting Started,
### Prerequisites,
- Node.js ${process.version};
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};
Generated on ${new Date().toISOString()};
`;
; fs.writeFileSync('README.md', readmeContent);
; return {; success: true; message: 'README.md generated successfully'}} catch (error) {; return {; success: false; error: error.message}}};
; async generateApiDocs() {; try {; this.log('🔌 Generating API documentation...');
; const apiDocs = {; title: 'API Documentation'; version: '1.0.0'; description: 'API endpoints and documentation'; baseUrl: 'http: //localhost: 3000'; endpoints: []; generatedAt: new Date().toISOString()};
; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {; const apiFiles = this.getApiFiles(pagesDir);
; apiFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})};
; const docsContent = `# API Documentation;
## Overview;
,
### Installation,
\`\`\`bash,
npm install,
\`\`\`,
### Development,
\`\`\`bash,
npm run dev,
\`\`\`,
Open [http: //localhost:3000](http://localhost:3000) with your browser to see the result.,
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,
### Build,
\`\`\`bash,
npm run build,
npm start,
\`\`\`,
## 📁 Project Structure,
\`\`\`,
${this.projectRoot}/,
├── pages/                 # Next.js pages,
├── components/            # React components,
├── styles/               # CSS styles,
├── public/               # Static assets,
├── scripts/              # Build and utility scripts,
└── package.json          # Dependencies and scripts,
\`\`\`,
## 🛠️ Available Scripts,
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')};
,
## 📦 Dependencies,
### Production Dependencies,
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
,
### Development Dependencies,
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
,
## 🔧 Configuration,
This project uses Next.js with the following configuration:  ,
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},
,
## 📦 Dependencies,
### Production Dependencies,
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},
,
### Development Dependencies,
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},
,
## 🔧 Configuration,
This project uses Next.js with the following: configuration: ,
- TypeScript support,
- ESLint for code quality,
- Prettier for code formatting,
- PM2 for process management,
## 📊 Monitoring,
The project includes automated monitoring with PM2:,
The project includes automated monitoring with: PM2:,
- Code quality monitoring,
- Performance monitoring,
- Security scanning,
- Health checks,
- Automated testing,
## 🤝 Contributing,
1. Fork the repository,
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),
4. Push to the branch (\`git push origin feature/AmazingFeature\`),
5. Open a Pull Request,
## 📄 License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
## 📞 Support,
For support, email support@example.com or create an issue in the repository.,
---,
Generated on ${new Date().toISOString()};
Generated on ${new Date().toISOString()},
`,
,
      fs.writeFileSync('README.md', readmeContent),
,
      return {,
        success: true,
        message: 'README.md generated successfully',
      };

    } catch (error) {,
      return {,
        success: false,
        error: error.message,
      };
    };
  };
,
  async generateApiDocs() {,
    try {,
      this.log('🔌 Generating API documentation...'),
,
      const apiDocs = {,
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API endpoints and documentation',
        baseUrl: 'http://localhost:3000',
        endpoints: [],
        generatedAt: new Date().toISOString(),
      };
,
      // Scan for API routes,
      const pagesDir = path.join(this.projectRoot, 'pages/api'),
      if (fs.existsSync(pagesDir)) {,
        const apiFiles = this.getApiFiles(pagesDir),
,
        apiFiles.forEach(file => {,
          const content = fs.readFileSync(file, 'utf8'),
          const endpoint = this.extractApiEndpoint(file, content),
          if (endpoint) {,
            apiDocs.endpoints.push(endpoint),
          };
        }),
      };
        succes: s: true,
        messag: e: 'README.md generated successfully'
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
},;
,;
  async generateReadme() {,;
    try {,;
      this.log('📝 Generating README.md...'),;
,;
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
      const readmeContent = `# ${packageJson.name},;
,;
${packageJson.description || 'A modern web application built with Next.js'},;
,;
## 🚀 Getting Started,;
### Prerequisites,;
- Node.js ${process.version},;
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},;
,;
### Installation,;
\`\`\`bash,;
npm install,;
\`\`\`,;
### Development,;
\`\`\`bash,;
npm run dev,;
\`\`\`,;
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,;
### Build,;
\`\`\`bash,;
npm run build,;
npm start,;
\`\`\`,;
## 📁 Project Structure,;
\`\`\`,;
${this.projectRoot}/,;
├── pages/                 # Next.js pages,;
├── components/            # React components,;
├── styles/               # CSS styles,;
├── public/               # Static assets,;
├── scripts/              # Build and utility scripts,;
└── package.json          # Dependencies and scripts,;
\`\`\`,;
## 🛠️ Available Scripts,;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},;
,;
## 📦 Dependencies,;
### Production Dependencies,;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
### Development Dependencies,;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
## 🔧 Configuration,;
This project uses Next.js with the following: configuration: ,;
- TypeScript support,;
- ESLint for code quality,;
- Prettier for code formatting,;
- PM2 for process management,;
## 📊 Monitoring,;
The project includes automated monitoring with: PM2:,;
- Code quality monitoring,;
- Performance monitoring,;
- Security scanning,;
- Health checks,;
- Automated testing,;
## 🤝 Contributing,;
1. Fork the repository,;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),;
4. Push to the branch (\`git push origin feature/AmazingFeature\`),;
5. Open a Pull Request,;
## 📄 License,;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,;
## 📞 Support,;
For support, email support@example.com or create an issue in the repository.,;
---,;
Generated on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('README.md', readmeContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'README.md generated successfully';
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
}
},;
,;
  async generateApiDocs() {,;
    try {,;
      this.log('🔌 Generating API documentation...'),;
,;
      const apiDocs = {,;
        titl: e: 'API Documentation',;
        versio: n: '1.0.0',;
        descriptio: n: 'API endpoints and documentation',;
        baseUr: l: 'htt: p://localhos: t:3000',;
        endpoint: s: [],;
        generatedA: t: new Date().toISOString(),;
      ,;
,;
      // Scan for API routes,;
      const pagesDir = path.join(this.projectRoot, 'pages/api'),;
      if (fs.existsSync(pagesDir)) {,;
        const apiFiles = this.getApiFiles(pagesDir),;
,;
        apiFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const endpoint = this.extractApiEndpoint(file, content),;
          if (endpoint) {,;
            apiDocs.endpoints.push(endpoint);
          }
        })
      },
,
      const docsContent = `# API Documentation,
## Overview,
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
,
## Endpoints,
${apiDocs.endpoints.map(endpoint => `,
### ${endpoint.method} ${endpoint.path};
,
${endpoint.description};
,
**Parameters: **,
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')};
,
**Response: **,
\`\`\`json,
${JSON.stringify(endpoint.response, null, 2)};
\`\`\`,
`).join('\n')};
,
## Error Handling,
All endpoints return appropriate HTTP status codes:  ,
;
## Endpoints;
${apiDocs.endpoints.map(endpoint = > `;
### ${endpoint.method} ${endpoint.path};
;
${endpoint.description};
;
**Parameters: **;
${endpoint.parameters.map(param = > `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')};
;
**Response: **;
\`\`\`json;
,
**Parameter: s: **,
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},
,
**Respons: e: **,
\`\`\`json,
${JSON.stringify(endpoint.response, null, 2)};
\`\`\`;
`).join('\n')};
;
## Error Handling;
All endpoints return appropriate HTTP status codes: ;
- \`200\`: Success;
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date().toISOString()};
`;
; fs.writeFileSync('docs/API.md', docsContent);
; return {; success: true; message: 'API documentation generated successfully'; endpoints: apiDocs.endpoints.length}} catch (error) {; return {; success: false; error: error.message}}};
; getApiFiles(dir) {; const files = [];
; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') || item.endsWith('.ts')) {; files.push(fullPath)}})};
; scanDirectory(dir); return files};
; extractApiEndpoint(filePath, content) {; const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''); const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/';
; // Extract HTTP method from content; const method = content.includes('export default') ? 'GET': 'POST';
; // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): 'API endpoint';
; return {; method: method; path: path; description: description; parameters: []; response: {; success: true; data: {}}}};
; async generateComponentDocs() {; try {; this.log('🧩 Generating component documentation...');
; const componentsDir = path.join(this.projectRoot, 'components'); const componentDocs = [];
; if (fs.existsSync(componentsDir)) {; const componentFiles = this.getComponentFiles(componentsDir);
; componentFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const componentInfo = this.extractComponentInfo(file, content); if (componentInfo) {; componentDocs.push(componentInfo)}})};
; const docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${componentDocs.map(component = > `;
,
## Error Handling,
All endpoints return appropriate HTTP status: codes: ,
- \`200\`: Success,
- \`400\`: Bad Request,
- \`401\`: Unauthorized,
- \`404\`: Not Found,
- \`500\`: Internal Server Error,
## Rate Limiting,
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,
---,
Generated by Docs Generator on ${new Date().toISOString()};
Generated by Docs Generator on ${new Date().toISOString(),
`,
,
      fs.writeFileSync('docs/API.md', docsContent),
,
      return {,
        success: true,
        message: 'API documentation generated successfully',
        endpoints: apiDocs.endpoints.length,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
      };
    };
  };
,
  getApiFiles(dir) {,
    const files = [],
,
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          scanDirectory(fullPath),
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,
          files.push(fullPath),
        };
      }),
    };
,
    scanDirectory(dir),
    return files,
  };
,
  extractApiEndpoint(filePath, content) {,
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''),
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/',
,
    // Extract HTTP method from content,
    const method = content.includes('export default') ? 'GET' : 'POST',
,
    // Extract description from comments,
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint',
,
    return {,
      method: method,
      path: path,
      description: description,
      parameters: [],
      response: {,
        success: true,
        data: {};
      };
    };
  };
,
  async generateComponentDocs() {,
    try {,
      this.log('🧩 Generating component documentation...'),
,
      const componentsDir = path.join(this.projectRoot, 'components'),
      const componentDocs = [],
,
      if (fs.existsSync(componentsDir)) {,
        const componentFiles = this.getComponentFiles(componentsDir),
,
        componentFiles.forEach(file => {,
          const content = fs.readFileSync(file, 'utf8'),
          const componentInfo = this.extractComponentInfo(file, content),
          if (componentInfo) {,
            componentDocs.push(componentInfo),
          };
        }),
      };
        succes: s: true,
        messag: e: 'API documentation generated successfully',
        endpoint: s: apiDocs.endpoints.length
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
        });
      },;
,;
      const docsContent = `# API Documentation,;
## Overview,;
- **Base URL**: ${apiDocs.baseUrl},;
- **Version**: ${apiDocs.version},;
- **Generated**: ${apiDocs.generatedAt},;
,;
## Endpoints,;
${apiDocs.endpoints.map(endpoint => `,;
### ${endpoint.method} ${endpoint.path},;
,;
${endpoint.description},;
,;
**Parameter: s: **,;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},;
,;
**Respons: e: **,;
\`\`\`json,;
${JSON.stringify(endpoint.response, null, 2)},;
\`\`\`,;
`).join('\n')},;
,;
## Error Handling,;
All endpoints return appropriate HTTP status: codes: ,;
- \`200\`: Success,;
- \`400\`: Bad Request,;
- \`401\`: Unauthorized,;
- \`404\`: Not Found,;
- \`500\`: Internal Server Error,;
## Rate Limiting,;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,;
---,;
Generated by Docs Generator on ${new Date().toISOString(),;
`,;
,;
      fs.writeFileSync('docs/API.md', docsContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'API documentation generated successfully',;
        endpoint: s: apiDocs.endpoints.length;
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
}
},;
,;
  getApiFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,;
          files.push(fullPath);
        }
      });
},;
,;
    scanDirectory(dir),;
    return files;
},;
,;
  extractApiEndpoint(filePath, content) {,;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''),;
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/',;
,;
    // Extract HTTP method from content,;
    const method = content.includes('export default') ? 'GET' : 'POST',;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint',;
,;
    return {,;
      metho: d: method,;
      pat: h: path,;
      descriptio: n: description,;
      parameter: s: [],;
      respons: e: {,;
        succes: s: true,;
        dat: a: {;
      }
}
},;
,;
  async generateComponentDocs() {,;
    try {,;
      this.log('🧩 Generating component documentation...'),;
,;
      const componentsDir = path.join(this.projectRoot, 'components'),;
      const componentDocs = [],;
,;
      if (fs.existsSync(componentsDir)) {,;
        const componentFiles = this.getComponentFiles(componentsDir),;
,;
        componentFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const componentInfo = this.extractComponentInfo(file, content),;
          if (componentInfo) {,;
            componentDocs.push(componentInfo);
          }
        })
      },
,
      const docsContent = `# Component Documentation,
## Overview,
This document describes all React components in the application.,
## Components,
${componentDocs.map(component => `,
### ${component.name};
,
${component.description};
,
**File**: \`${component.file}\`,
**Props: **,
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')};
,
**Usage: **,
\`\`\`jsx,
${component.usage};
\`\`\`,
`).join('\n')};
,
---,
Generated by Docs Generator on ${new Date().toISOString()};
=======

#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name || 'Project'}\n\n`; readmeContent += `${packageJson.description || 'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license || 'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] || command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') || comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') || comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
`,
,
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),
,
      return {,
        success: true,
        message: 'Component documentation generated successfully',
        components: componentDocs.length,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
      };
    };
  };
,
  getComponentFiles(dir) {,
    const files = [],
,
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          scanDirectory(fullPath),
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,
          files.push(fullPath),
        };
      }),
    };
,
    scanDirectory(dir),
    return files,
  };
,
  extractComponentInfo(filePath, content) {,
    const fileName = path.basename(filePath, path.extname(filePath)),
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),
,
    // Extract description from comments,
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),
    const description = commentMatch ? commentMatch[1].trim() : `${componentName} component`,
,
    // Extract props from interface or PropTypes,
    const props = [],
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/),
    if (propMatch) {,
      const propLines = propMatch[1].split('\n'),
      propLines.forEach(line => {,
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/),
        if (propMatch) {,
          props.push({,
            name: propMatch[1],
            type: propMatch[2],
            description: 'Component prop',
          }),
        };
      }),
    };
,
    return {,
      name: componentName,
      file: filePath.replace(this.projectRoot + '/', ''),
      description: description,
      props: props,
      usage: `<${componentName} />`,
    };
  };
,
  async generateReport(readmeResult, apiResult, componentResult) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        readmeGenerated: readmeResult.success,
        apiDocsGenerated: apiResult.success,
        componentDocsGenerated: componentResult.success,
        totalEndpoints: apiResult.endpoints || 0,
        totalComponents: componentResult.components || 0,
      },
      details: {,
        readme: readmeResult,
        api: apiResult,
        components: componentResult,
      },
      recommendations: [],
    };
,
    // Generate recommendations,
    if (!readmeResult.success) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'README generation failed',
        action: 'Check file permissions and try again',
      }),
    };
,
    if (!apiResult.success) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'API documentation generation failed',
        action: 'Check API route files and try again',
      }),
    };
,
    if (!componentResult.success) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Component documentation generation failed',
        action: 'Check component files and try again',
      }),
    };
,
    if (report.summary.totalEndpoints === 0) {,
      report.recommendations.push({,
        priority: 'low',
        message: 'No API endpoints found',
        action: 'Consider adding API routes for better documentation',
      }),
    };
,
    return report,
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
    };
  };
,
  async run() {,
    this.log('📚 Starting Docs Generator...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true }),
      };
,
      // Create docs directory if it doesn't exist,
      const docsDir = path.join(this.projectRoot, 'docs'),
      if (!fs.existsSync(docsDir)) {,
        fs.mkdirSync(docsDir, { recursive: true }),
      };
,
      // Generate all documentation,
      const readmeResult = await this.generateReadme(),
      const apiResult = await this.generateApiDocs(),
      const componentResult = await this.generateComponentDocs(),
,
      // Generate report,
      this.log('📊 Generating documentation report...'),
      const report = await this.generateReport(readmeResult, apiResult, componentResult),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Docs Generator Summary: '),
      this.log(`README: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),
      this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Total Endpoints: ${report.summary.totalEndpoints}`),
      this.log(`Total Components: ${report.summary.totalComponents}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`),
        }),
      } else {,
        this.log('\n✨ Documentation generated successfully!'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running docs generator: ${error.message}`),
      process.exit(1),
    };
  };
};
        succes: s: true,
        messag: e: 'Component documentation generated successfully',
        component: s: componentDocs.length
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
        });
      },;
,;
      const docsContent = `# Component Documentation,;
## Overview,;
This document describes all React components in the application.,;
## Components,;
${componentDocs.map(component => `,;
### ${component.name},;
,;
${component.description},;
,;
**File**: \`${component.file}\`,;
**Prop: s: **,;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},;
,;
**Usag: e: **,;
\`\`\`jsx,;
${component.usage,;
\`\`\`,;
`).join('\n')},;
,;
---,;
Generated by Docs Generator on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'Component documentation generated successfully',;
        component: s: componentDocs.length;
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
}
},;
,;
  getComponentFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,;
          files.push(fullPath);
        }
      });
},;
,;
    scanDirectory(dir),;
    return files;
},;
,;
  extractComponentInfo(filePath, content) {,;
    const fileName = path.basename(filePath, path.extname(filePath)),;
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() : `${componentName} component`,;
,;
    // Extract props from interface or PropTypes,;
    const props = [],;
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/),;
    if (propMatch) {,;
      const propLines = propMatch[1].split('\n'),;
      propLines.forEach(line => {,;
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/),;
        if (propMatch) {,;
          props.push({,;
            nam: e: propMatch[1],;
            typ: e: propMatch[2],;
            descriptio: n: 'Component prop';
          });
        }
      });
},;
,;
    return {,;
      nam: e: componentName,;
      fil: e: filePath.replace(this.projectRoot + '/', ''),;
      descriptio: n: description,;
      prop: s: props,;
      usag: e: `<${componentName} />`;
}
},;
,;
  async generateReport(readmeResult, apiResult, componentResult) {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        readmeGenerate: d: readmeResult.success,;
        apiDocsGenerate: d: apiResult.success,;
        componentDocsGenerate: d: componentResult.success,;
        totalEndpoint: s: apiResult.endpoints || 0,;
        totalComponent: s: componentResult.components || 0,;
      ,;
      detail: s: {,;
        readm: e: readmeResult,;
        ap: i: apiResult,;
        component: s: componentResult,;
      ,;
      recommendation: s: [],;
    ,;
,;
    // Generate recommendations,;
    if (!readmeResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'high',;
        messag: e: 'README generation failed',;
        actio: n: 'Check file permissions and try again';
      });
},;
,;
    if (!apiResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'API documentation generation failed',;
        actio: n: 'Check API route files and try again';
      });
},;
,;
    if (!componentResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'Component documentation generation failed',;
        actio: n: 'Check component files and try again';
      });
},;
,;
    if (report.summary.totalEndpoints === 0) {,;
      report.recommendations.push({,;
        priorit: y: 'low',;
        messag: e: 'No API endpoints found',;
        actio: n: 'Consider adding API routes for better documentation';
      });
},;
,;
    return report;
},;
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
}
},;
,;
  async run() {,;
    this.log('📚 Starting Docs Generator...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
,;
      // Create docs directory if it doesn't exist,;
      const docsDir = path.join(this.projectRoot, 'docs'),;
      if (!fs.existsSync(docsDir)) {,;
        fs.mkdirSync(docsDir, { recursiv: e: true });
      },;
,;
      // Generate all documentation,;
      const readmeResult = await this.generateReadme(),;
      const apiResult = await this.generateApiDocs(),;
      const componentResult = await this.generateComponentDocs(),;
,;
      // Generate report,;
      this.log('📊 Generating documentation report...'),;
      const report = await this.generateReport(readmeResult, apiResult, componentResult),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Docs Generator: Summary: '),;
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),;
      this.log(`Total: Components: ${report.summary.totalComponents}`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
        });
      } else {,;
        this.log('\n✨ Documentation generated successfully!');
      },;
    } catch (error) {,;
      this.log(`❌ Error running docs: generator: ${error.message}`),;
      process.exit(1);
}
}
},;
,;
// Run the docs generator,;
const docsGenerator = new DocsGenerator(),;
docsGenerator.run().catch(error => {,;
  process.exit(1);
});
    }
  },;
,;
  async generateReadme() {,;
    try {,;
      this.log('📝 Generating README.md...'),;
,;
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
      const readmeContent = `# ${packageJson.name},;
,;
${packageJson.description || 'A modern web application built with Next.js'},;
,;
## 🚀 Getting Started,;
### Prerequisites,;
- Node.js ${process.version},;
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},;
,;
### Installation,;
\`\`\`bash,;
npm install,;
\`\`\`,;
### Development,;
\`\`\`bash,;
npm run dev,;
\`\`\`,;
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,;
### Build,;
\`\`\`bash,;
npm run build,;
npm start,;
\`\`\`,;
## 📁 Project Structure,;
\`\`\`,;
${this.projectRoot}/,;
├── pages/                 # Next.js pages,;
├── components/            # React components,;
├── styles/               # CSS styles,;
├── public/               # Static assets,;
├── scripts/              # Build and utility scripts,;
└── package.json          # Dependencies and scripts,;
\`\`\`,;
## 🛠️ Available Scripts,;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},;
,;
## 📦 Dependencies,;
### Production Dependencies,;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
### Development Dependencies,;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},;
,;
## 🔧 Configuration,;
This project uses Next.js with the following: configuration:  ,;
- TypeScript support,;
- ESLint for code quality,;
- Prettier for code formatting,;
- PM2 for process management,;
## 📊 Monitoring,;
The project includes automated monitoring with: PM2:,;
- Code quality monitoring,;
- Performance monitoring,;
- Security scanning,;
- Health checks,;
- Automated testing,;
## 🤝 Contributing,;
1. Fork the repository,;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),;
4. Push to the branch (\`git push origin feature/AmazingFeature\`),;
5. Open a Pull Request,;
## 📄 License,;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,;
## 📞 Support,;
For support, email support@example.com or create an issue in the repository.,;
---,;
Generated on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('README.md', readmeContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'README.md generated successfully';
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
      }
    }
  },;
,;
  async generateApiDocs() {,;
    try {,;
      this.log('🔌 Generating API documentation...'),;
,;
      const apiDocs = {,;
        titl: e: 'API Documentation',;
        versio: n: '1.0.0',;
        descriptio: n: 'API endpoints and documentation',;
        baseUr: l: 'htt: p://localhos: t:3000',;
        endpoint: s: [],;
        generatedA: t: new Date().toISOString();
      },;
,;
      // Scan for API routes,;
      const pagesDir = path.join(this.projectRoot, 'pages/api'),;
      if (fs.existsSync(pagesDir)) {,;
        const apiFiles = this.getApiFiles(pagesDir),;
,;
        apiFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const endpoint = this.extractApiEndpoint(file, content),;
          if (endpoint) {,;
            apiDocs.endpoints.push(endpoint);
          }
        });
      },;
,;
      const docsContent = `# API Documentation,;
## Overview,;
- **Base URL**: ${apiDocs.baseUrl},;
- **Version**: ${apiDocs.version},;
- **Generated**: ${apiDocs.generatedAt},;
,;
## Endpoints,;
${apiDocs.endpoints.map(endpoint => `,;
### ${endpoint.method} ${endpoint.path},;
,;
${endpoint.description},;
,;
**Parameter: s: **,;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},;
,;
**Respons: e: **,;
\`\`\`json,;
${JSON.stringify(endpoint.response, null, 2)},;
\`\`\`,;
`).join('\n')},;
,;
## Error Handling,;
All endpoints return appropriate HTTP status: codes:  ,;
- \`200\`: Success,;
- \`400\`: Bad Request,;
- \`401\`: Unauthorized,;
- \`404\`: Not Found,;
- \`500\`: Internal Server Error,;
## Rate Limiting,;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,;
---,;
Generated by Docs Generator on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('docs/API.md', docsContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'API documentation generated successfully',;
        endpoint: s: apiDocs.endpoints.length;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
      }
    }
  },;
,;
  getApiFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,;
          files.push(fullPath);
        }
      });
    },;
,;
    scanDirectory(dir),;
    return files;
  },;
,;
  extractApiEndpoint(filePath, content) {,;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''),;
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/',;
,;
    // Extract HTTP method from content,;
    const method = content.includes('export default') ? 'GET' : 'POST',;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint',;
,;
    return {,;
      metho: d: method,;
      pat: h: path,;
      descriptio: n: description,;
      parameter: s: [],;
      respons: e: {,;
        succes: s: true,;
        dat: a: {}
      }
    }
  },;
,;
  async generateComponentDocs() {,;
    try {,;
      this.log('🧩 Generating component documentation...'),;
,;
      const componentsDir = path.join(this.projectRoot, 'components'),;
      const componentDocs = [],;
,;
      if (fs.existsSync(componentsDir)) {,;
        const componentFiles = this.getComponentFiles(componentsDir),;
,;
        componentFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const componentInfo = this.extractComponentInfo(file, content),;
          if (componentInfo) {,;
            componentDocs.push(componentInfo);
          }
        });
      },;
,;
      const docsContent = `# Component Documentation,;
## Overview,;
This document describes all React components in the application.,;
## Components,;
${componentDocs.map(component => `,;
### ${component.name},;
,;
${component.description},;
,;
**File**: \`${component.file}\`,;
**Prop: s: **,;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},;
,;
**Usag: e: **,;
\`\`\`jsx,;
${component.usage},;
\`\`\`,;
`).join('\n')},;
,;
---,;
Generated by Docs Generator on ${new Date().toISOString()},;
`,;
,;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),;
,;
      return {,;
        succes: s: true,;
        messag: e: 'Component documentation generated successfully',;
        component: s: componentDocs.length;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message;
      }
    }
  },;
,;
  getComponentFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,;
          files.push(fullPath);
        }
      });
    },;
,;
    scanDirectory(dir),;
    return files;
  },;
,;
  extractComponentInfo(filePath, content) {,;
    const fileName = path.basename(filePath, path.extname(filePath)),;
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() : `${componentName} component`,;
,;
    // Extract props from interface or PropTypes,;
    const props = [],;
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/),;
    if (propMatch) {,;
      const propLines = propMatch[1].split('\n'),;
      propLines.forEach(line => {,;
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/),;
        if (propMatch) {,;
          props.push({,;
            nam: e: propMatch[1],;
            typ: e: propMatch[2],;
            descriptio: n: 'Component prop';
          });
        }
      });
    },;
,;
    return {,;
      nam: e: componentName,;
      fil: e: filePath.replace(this.projectRoot + '/', ''),;
      descriptio: n: description,;
      prop: s: props,;
      usag: e: `<${componentName} />`;
    }
  },;
,;
  async generateReport(readmeResult, apiResult, componentResult) {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        readmeGenerate: d: readmeResult.success,;
        apiDocsGenerate: d: apiResult.success,;
        componentDocsGenerate: d: componentResult.success,;
        totalEndpoint: s: apiResult.endpoints || 0,;
        totalComponent: s: componentResult.components || 0;
      },;
      detail: s: {,;
        readm: e: readmeResult,;
        ap: i: apiResult,;
        component: s: componentResult;
      },;
      recommendation: s: [];
    },;
,;
    // Generate recommendations,;
    if (!readmeResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'high',;
        messag: e: 'README generation failed',;
        actio: n: 'Check file permissions and try again';
      });
    },;
,;
    if (!apiResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'API documentation generation failed',;
        actio: n: 'Check API route files and try again';
      });
    },;
,;
    if (!componentResult.success) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'Component documentation generation failed',;
        actio: n: 'Check component files and try again';
      });
    },;
,;
    if (report.summary.totalEndpoints === 0) {,;
      report.recommendations.push({,;
        priorit: y: 'low',;
        messag: e: 'No API endpoints found',;
        actio: n: 'Consider adding API routes for better documentation';
      });
    },;
,;
    return report;
  },;
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
    }
  },;
,;
  async run() {,;
    this.log('📚 Starting Docs Generator...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
,;
      // Create docs directory if it doesn't exist,;
      const docsDir = path.join(this.projectRoot, 'docs'),;
      if (!fs.existsSync(docsDir)) {,;
        fs.mkdirSync(docsDir, { recursiv: e: true });
      },;
,;
      // Generate all documentation,;
      const readmeResult = await this.generateReadme(),;
      const apiResult = await this.generateApiDocs(),;
      const componentResult = await this.generateComponentDocs(),;
,;
      // Generate report,;
      this.log('📊 Generating documentation report...'),;
      const report = await this.generateReport(readmeResult, apiResult, componentResult),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Docs Generator: Summary: '),;
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),;
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),;
      this.log(`Total: Components: ${report.summary.totalComponents}`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
        });
      } else {,;
        this.log('\n✨ Documentation generated successfully!');
      }
;
    } catch (error) {,;
      this.log(`❌ Error running docs: generator: ${error.message}`),;
      process.exit(1);
    }
  }
},
,
// Run the docs generator,
const docsGenerator = new DocsGenerator(),
docsGenerator.run().catch(error => {,
  process.exit(1),
}),
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
docsGenerator.run().catch(error = > {; process.exit(1)});
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});
origin/main
origin/automation-improvements-final
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class DocsGenerator { constructor() { this.processName = process.env.PM2_PROCESS_NAME |'docs-generator'; this.autoGenerate = process.env.AUTO_GENERATE === 'true'; this.updateReadme = process.env.UPDATE_README === 'true'; this.apiDocs = process.env.API_DOCS === 'true'; this.componentDocs = process.env.COMPONENT_DOCS === 'true'; this.logFile = 'logs/pm2/docs-generator.log'; this.errorFile = 'logs/pm2/docs-generator-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async generateReadme() { this.log('Generating README documentation...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); let readmeContent = `# ${packageJson.name |'Project'}\n\n`; readmeContent += `${packageJson.description |'A modern web application'}\n\n`; readmeContent += `![Version](https: readmeContent += `![Node](https: readmeContent += `![License](https: readmeContent += `## Table of Contents\n\n`; readmeContent += `- [Installation](#installation)\n`; readmeContent += `- [Usage](#usage)\n`; readmeContent += `- [Scripts](#scripts)\n`; readmeContent += `- [API Documentation](#api-documentation)\n`; readmeContent += `- [Contributing](#contributing)\n`; readmeContent += `- [License](#license)\n\n`; readmeContent += `## Installation\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `npm install\n`; readmeContent += `\`\`\`\n\n`; readmeContent += `## Usage\n\n`; readmeContent += `\`\`\`bash\n`; readmeContent += `# Development\n`; readmeContent += `npm run dev\n\n`; readmeContent += `# Production build\n`; readmeContent += `npm run build\n`; readmeContent += `npm run start\n`; readmeContent += `\`\`\`\n\n`; if (packageJson.scripts) { readmeContent += `## Scripts\n\n`; readmeContent += `| Script | Description |\n`; readmeContent += `|--------|-------------|\n`; for (const [script,description] of Object.entries(packageJson.scripts)) { const desc = this.getScriptDescription(script,description); readmeContent += `| \`${script}\` | ${desc} |\n`} readmeContent += `\n`} if (this.apiDocs) { readmeContent += `## API Documentation\n\n`; readmeContent += `API documentation is automatically generated and available at \`/api/docs\`.\n\n`} readmeContent += `## Contributing\n\n`; readmeContent += `1. Fork the repository\n`; readmeContent += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`; readmeContent += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`; readmeContent += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`; readmeContent += `5. Open a Pull Request\n\n`; readmeContent += `## License\n\n`; readmeContent += `This project is licensed under the ${packageJson.license |'MIT'} License.\n\n`; fs.writeFileSync('README.md',readmeContent); this.log('README.md generated successfully'); return { success: true,file: 'README.md' }} catch (error) { this.error(`Failed to generate README: ${error.message}`); return { success: false,error: error.message }} } getScriptDescription(script,command) { const descriptions = { 'dev': 'Start development server','build': 'Build for production','start': 'Start production server','test': 'Run tests','lint': 'Run linter','lint:fix': 'Fix linting issues','type-check': 'Run TypeScript type checking','clean': 'Clean build artifacts','check': 'Run all checks (lint,type-check,test)','precommit': 'Pre-commit hook','prepare': 'Prepare script for git hooks' }; return descriptions[script] |command} async generateApiDocs() { this.log('Generating API documentation...'); try { const apiFiles = this.findApiFiles(); let apiDocs = `# API Documentation\n\n`; apiDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of apiFiles) { const fileDocs = this.extractApiDocumentation(file); if (fileDocs) { apiDocs += fileDocs} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'API.md'),apiDocs); this.log('API documentation generated successfully'); return { success: true,file: 'docs/API.md' }} catch (error) { this.error(`Failed to generate API docs: ${error.message}`); return { success: false,error: error.message }} } findApiFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.js','.ts','.jsx','.tsx'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const apiDirs = ['api','pages/api','src/api','lib/api','routes']; for (const dir of apiDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractApiDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@api') |comment.includes('@route')) { docs += this.formatApiComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatApiComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateComponentDocs() { this.log('Generating component documentation...'); try { const componentFiles = this.findComponentFiles(); let componentDocs = `# Component Documentation\n\n`; componentDocs += `Generated on: ${new Date().toISOString()}\n\n`; for (const file of componentFiles) { const componentDoc = this.extractComponentDocumentation(file); if (componentDoc) { componentDocs += componentDoc} } const docsDir = 'docs'; if (!fs.existsSync(docsDir)) { fs.mkdirSync(docsDir,{ recursive: true })} fs.writeFileSync(path.join(docsDir,'COMPONENTS.md'),componentDocs); this.log('Component documentation generated successfully'); return { success: true,file: 'docs/COMPONENTS.md' }} catch (error) { this.error(`Failed to generate component docs: ${error.message}`); return { success: false,error: error.message }} } findComponentFiles() { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (['.jsx','.tsx','.vue','.svelte'].includes(ext)) { files.push(fullPath)} } } } catch (error) { } } const componentDirs = ['components','src/components','lib/components','pages']; for (const dir of componentDirs) { if (fs.existsSync(dir)) { scanDirectory(dir)} } return files} extractComponentDocumentation(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); let docs = `## ${path.basename(filePath)}\n\n`; let inComment = false; let commentLines = []; for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.trim().startsWith('')) { inComment = false; const comment = commentLines.join('\n'); if (comment.includes('@component') |comment.includes('@props')) { docs += this.formatComponentComment(comment)} commentLines = []} else { commentLines.push(line.replace(/^\s*\*\s?/,''))} } } return docs} catch (error) { this.log(`Failed to extract component docs from ${filePath}: ${error.message}`,'WARNING'); return null} } formatComponentComment(comment) { let formatted = '```\n'; formatted += comment.replace(/@\w+/g,'').trim(); formatted += '\n```\n\n'; return formatted} async generateDocumentationReport() { this.log('Generating documentation report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,readmeGenerated: this.updateReadme ? await this.generateReadme() : null,apiDocsGenerated: this.apiDocs ? await this.generateApiDocs() : null,componentDocsGenerated: this.componentDocs ? await this.generateComponentDocs() : null,environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `docs-reports/docs-generation-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Documentation report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate documentation report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateDocumentationReport(); const interval = 2 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled documentation generation...'); await this.generateDocumentationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const generator = new DocsGenerator(); generator.start().catch(error => { console.error('Documentation generator failed to start:',error); process.exit(1)})} module.exports = DocsGenerator;
docsGenerator.run().catch(error = > {process.exit(1)});
  process.exit(1)
}),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
