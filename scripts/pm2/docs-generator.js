<<<<<<< HEAD
<<<<<<< HEAD
}};
<<<<<<< HEAD
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name};
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
; async generateReadme() {_; try {; this.log('📝 Generating README.md...');
; const _packageJson = JSON.parse(fs.readFileSync('package.json', _'utf8')); const _readmeContent = `# ${packageJson.name};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
};
};
;
  async generateReadme() {_;
    try {;
      this.log('📝 Generating README.md...');
;
<<<<<<< HEAD
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
<<<<<<< HEAD
=======
      const readmeContent = `# ${packageJson.name};
=======
      const _packageJson = JSON.parse(fs.readFileSync('package.json', _'utf8'));
      const _readmeContent = `# ${packageJson.name};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
;
${_packageJson.description || 'A modern web application built with Next.js'};
;
## 🚀 Getting Started;
### Prerequisites;
<<<<<<< HEAD
- Node.js ${process.version};
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()};
;
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.;
### Build;
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
;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
### Development Dependencies;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
## 🔧 Configuration;
This project uses Next.js with the following: configuration: ;
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
The project includes automated monitoring with: PM2:;
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
Generated on ${new Date().toISOString()};
`;
;
      fs.writeFileSync('README.md', readmeContent);
;
      return {;
        succes: s: true;
        messag: e: 'README.md generated successfully';
      ;
    } catch (error) {;
      return {;
        succes: s: false;
        erro: r: error.message;
      ;
};
};
;
  async generateApiDocs() {;
    try {;
      this.log('🔌 Generating API documentation...');
;
      const apiDocs = {;
        titl: e: 'API Documentation';
        versio: n: '1.0.0';
        descriptio: n: 'API endpoints and documentation';
        baseUr: l: 'htt: p://localhos: t:3000';
        endpoint: s: [];
        generatedA: t: new Date().toISOString();
      ;
;
      // Scan for API routes;
      const pagesDir = path.join(this.projectRoot, 'pages/api');
      if (fs.existsSync(pagesDir)) {;
        const apiFiles = this.getApiFiles(pagesDir);
;
        apiFiles.forEach(file => {;
          const content = fs.readFileSync(file, 'utf8');
          const endpoint = this.extractApiEndpoint(file, content);
          if (endpoint) {;
            apiDocs.endpoints.push(endpoint);
          };
        });
      };
;
      const docsContent = `# API Documentation;
## Overview;
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
;
## Endpoints;
${apiDocs.endpoints.map(endpoint => `;
### ${endpoint.method} ${endpoint.path};
;
${endpoint.description};
;
**Parameter: s: **;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')};
;
**Respons: e: **;
\`\`\`json;
${JSON.stringify(endpoint.response, null, 2)};
\`\`\`;
`).join('\n')};
;
## Error Handling;
All endpoints return appropriate HTTP status: codes: ;
- \`200\`: Success;
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date().toISOString();
`;
;
      fs.writeFileSync('docs/API.md', docsContent);
;
      return {;
        succes: s: true;
        messag: e: 'API documentation generated successfully';
        endpoint: s: apiDocs.endpoints.length;
      ;
    } catch (error) {;
      return {;
        succes: s: false;
        erro: r: error.message;
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
      metho: d: method;
      pat: h: path;
      descriptio: n: description;
      parameter: s: [];
      respons: e: {;
        succes: s: true;
        dat: a: {;
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
**Prop: s: **;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')};
;
**Usag: e: **;
\`\`\`jsx;
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
        succes: s: true;
        messag: e: 'Component documentation generated successfully';
        component: s: componentDocs.length;
      ;
    } catch (error) {;
      return {;
        succes: s: false;
        erro: r: error.message;
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
            nam: e: propMatch[1];
            typ: e: propMatch[2];
            descriptio: n: 'Component prop';
          });
        };
      });
};
;
    return {;
      nam: e: componentName;
      fil: e: filePath.replace(this.projectRoot + '/', '');
      descriptio: n: description;
      prop: s: props;
      usag: e: `<${componentName} />`;
};
};
;
  async generateReport(readmeResult, apiResult, componentResult) {;
    const report = {;
      timestam: p: new Date().toISOString();
      summar: y: {;
        readmeGenerate: d: readmeResult.success;
        apiDocsGenerate: d: apiResult.success;
        componentDocsGenerate: d: componentResult.success;
        totalEndpoint: s: apiResult.endpoints || 0;
        totalComponent: s: componentResult.components || 0;
      ;
      detail: s: {;
        readm: e: readmeResult;
        ap: i: apiResult;
        component: s: componentResult;
      ;
      recommendation: s: [];
    ;
;
    // Generate recommendations;
    if (!readmeResult.success) {;
      report.recommendations.push({;
        priorit: y: 'high';
        messag: e: 'README generation failed';
        actio: n: 'Check file permissions and try again';
      });
};
;
    if (!apiResult.success) {;
      report.recommendations.push({;
        priorit: y: 'medium';
        messag: e: 'API documentation generation failed';
        actio: n: 'Check API route files and try again';
      });
};
;
    if (!componentResult.success) {;
      report.recommendations.push({;
        priorit: y: 'medium';
        messag: e: 'Component documentation generation failed';
        actio: n: 'Check component files and try again';
      });
};
;
    if (report.summary.totalEndpoints === 0) {;
      report.recommendations.push({;
        priorit: y: 'low';
        messag: e: 'No API endpoints found';
        actio: n: 'Consider adding API routes for better documentation';
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
        fs.mkdirSync(reportDir, { recursiv: e: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving: report: ${error.message}`);
};
};
;
  async run() {;
    this.log('📚 Starting Docs Generator...');
    this.log(`Project: root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      };
;
      // Create docs directory if it doesn't exist;
      const docsDir = path.join(this.projectRoot, 'docs');
      if (!fs.existsSync(docsDir)) {;
        fs.mkdirSync(docsDir, { recursiv: e: true });
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
      this.log('\n📊 Docs Generator: Summary: ');
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`);
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`);
      this.log(`Total: Components: ${report.summary.totalComponents}`);
      this.log(`Duratio: n: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendation: s: ');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio: n: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ Documentation generated successfully!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running docs: generator: ${error.message}`);
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
=======
}
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
,
  async generateReadme() {,
    try {,
      this.log('📝 Generating README.md...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
      const readmeContent = `# ${packageJson.name};
;
${packageJson.description || 'A modern web application built with Next.js'};
;
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version};
<<<<<<< HEAD
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};
=======
- Node.js ${_process.version};
- npm ${_execSync('npm --version', _{ encoding: 'utf8'}).trim()};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
;
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
Open [http: //localhost: 3000](http: //localhost: 3000) with your browser to see the result.;
### Build;
\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;
${_this.projectRoot}/;
├── pages/ # Next.js pages;
├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;
${_Object.entries(packageJson.scripts || {}).map(([key, value]) = > `- **${_key}**: \`${_value}\``).join('\n')};
;
## 📦 Dependencies;
### Production Dependencies;
${_Object.keys(packageJson.dependencies || {}).map(dep = > `- ${_dep}`).join('\n')};
;
### Development Dependencies;
${_Object.keys(packageJson.devDependencies || {}).map(dep = > `- ${_dep}`).join('\n')};
;
## 🔧 Configuration;
This project uses Next.js with the following configuration: ;
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
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
Generated on ${_new Date().toISOString()};
`;
; fs.writeFileSync('README.md', readmeContent);
; return {_; success: true; message: 'README.md generated successfully'}} catch (error) {_; return {; success: false; error: error.message}}};
; async generateApiDocs() {_; try {; this.log('🔌 Generating API documentation...');
; const _apiDocs = {; title: 'API Documentation'; version: '1.0.0'; description: 'API endpoints and documentation'; baseUrl: 'http: //localhost: 3000'; endpoints: []; generatedAt: new Date().toISOString()};
; // Scan for API routes; const _pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {_; const _apiFiles = this.getApiFiles(pagesDir);
; apiFiles.forEach(file = > {; const _content = fs.readFileSync(file, _'utf8'); const _endpoint = this.extractApiEndpoint(file, _content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})};
; const _docsContent = `# API Documentation;
## Overview;
<<<<<<< HEAD
=======
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()};
=======
      const readmeContent = `# ${packageJson.name},
,
${packageJson.description || 'A modern web application built with Next.js'},
,
## 🚀 Getting Started,
### Prerequisites,
- Node.js ${process.version},
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
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
      
}
},
,
  async generateApiDocs() {,
    try {,
      this.log('🔌 Generating API documentation...'),
,
      const apiDocs = {,
        titl: e: 'API Documentation',
        versio: n: '1.0.0',
        descriptio: n: 'API endpoints and documentation',
        baseUr: l: 'htt: p://localhos: t:3000',
        endpoint: s: [],
        generatedA: t: new Date().toISOString(),
      ,
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
            apiDocs.endpoints.push(endpoint)
          }
        })
      },
,
      const docsContent = `# API Documentation,
## Overview,
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
=======
- **Base window.URL**: ${_apiDocs.baseUrl};
- **Version**: ${_apiDocs.version};
- **Generated**: ${_apiDocs.generatedAt};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
;
## Endpoints;
${_apiDocs.endpoints.map(endpoint = > `;
### ${endpoint.method} ${_endpoint.path};
;
<<<<<<< HEAD
${endpoint.description};
<<<<<<< HEAD
=======
${_endpoint.description};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
;
**Parameters: **;
${_endpoint.parameters.map(param = > `- \`${param.name}\` (${_param.type}): ${_param.description}`).join('\n')};
;
**Response: **;
\`\`\`json;
<<<<<<< HEAD
=======
=======
- **Base URL**: ${apiDocs.baseUrl},
- **Version**: ${apiDocs.version},
- **Generated**: ${apiDocs.generatedAt},
,
## Endpoints,
${apiDocs.endpoints.map(endpoint => `,
### ${endpoint.method} ${endpoint.path},
,
${endpoint.description},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
,
**Parameter: s: **,
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},
,
**Respons: e: **,
\`\`\`json,
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
${JSON.stringify(endpoint.response, null, 2)};
=======
${_JSON.stringify(endpoint.response, _null, _2)};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
\`\`\`;
`).join('\n')};
<<<<<<< HEAD
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
Generated by Docs Generator on ${_new Date().toISOString()};
`;
; fs.writeFileSync('docs/API.md', docsContent);
; return {_; success: true; message: 'API documentation generated successfully'; endpoints: apiDocs.endpoints.length}} catch (error) {_; return {; success: false; error: error.message}}};
; getApiFiles(dir) {_; const _files = [];
; const _scanDirectory = (currentDir) = > {; const _items = fs.readdirSync(currentDir); items.forEach(item = > {; const _fullPath = path.join(currentDir, _item); const _stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') || item.endsWith('.ts')) {_; files.push(fullPath)}})};
; scanDirectory(dir); return files};
; extractApiEndpoint(filePath, content) {_; const _relativePath = filePath.replace(this.projectRoot + '/pages/api', _''); const _path = relativePath.replace(/\.(js|ts)$/, _'').replace(/\/index$/, _'') || '/';
; // Extract HTTP method from content; const _method = content.includes('export default') ? 'GET': 'POST';
; // Extract description from comments; const _commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const _description = commentMatch ? commentMatch[1].trim(): 'API endpoint';
; return {; method: method; path: path; description: description; parameters: []; response: {; success: true; data: {}}}};
; async generateComponentDocs() {_; try {; this.log('🧩 Generating component documentation...');
; const _componentsDir = path.join(this.projectRoot, _'components'); const _componentDocs = [];
; if (fs.existsSync(componentsDir)) {; const _componentFiles = this.getComponentFiles(componentsDir);
; componentFiles.forEach(file = > {; const _content = fs.readFileSync(file, _'utf8'); const _componentInfo = this.extractComponentInfo(file, _content); if (componentInfo) {; componentDocs.push(componentInfo)}})};
; const _docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
<<<<<<< HEAD
${componentDocs.map(component = > `;
=======
=======
${JSON.stringify(endpoint.response, null, 2)},
\`\`\`,
`).join('\n')},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
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
      
}
},
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,
          files.push(fullPath)
        }
      })
},
,
    scanDirectory(dir),
    return files
},
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
      metho: d: method,
      pat: h: path,
      descriptio: n: description,
      parameter: s: [],
      respons: e: {,
        succes: s: true,
        dat: a: {
      }
}
},
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
            componentDocs.push(componentInfo)
          }
        })
      },
,
      const docsContent = `# Component Documentation,
## Overview,
This document describes all React components in the application.,
## Components,
${componentDocs.map(component => `,
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
### ${component.name};
;
${component.description};
<<<<<<< HEAD
=======
${_componentDocs.map(component = > `;
### ${component.name};
;
${_component.description};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
;
**File**: \`${_component.file}\`;
**Props: **;
${_component.props.map(prop = > `- \`${prop.name}\` (${_prop.type}): ${_prop.description}`).join('\n')};
;
**Usage: **;
\`\`\`jsx;
<<<<<<< HEAD
=======
=======
### ${component.name},
,
${component.description},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
,
**File**: \`${component.file}\`,
**Prop: s: **,
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},
,
**Usag: e: **,
\`\`\`jsx,
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
${component.usage};
=======
${_component.usage};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
\`\`\`;
`).join('\n')};
;
---;
<<<<<<< HEAD
Generated by Docs Generator on ${new Date().toISOString()};
<<<<<<< HEAD
=======
Generated by Docs Generator on ${_new Date().toISOString()};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
`;
; fs.writeFileSync('docs/COMPONENTS.md', docsContent);
; return {_; success: true; message: 'Component documentation generated successfully'; components: componentDocs.length}} catch (error) {_; return {; success: false; error: error.message}}};
; getComponentFiles(dir) {_; const _files = [];
; const _scanDirectory = (currentDir) = > {; const _items = fs.readdirSync(currentDir); items.forEach(item = > {; const _fullPath = path.join(currentDir, _item); const _stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {_; files.push(fullPath)}})};
; scanDirectory(dir); return files};
; extractComponentInfo(filePath, content) {_; const _fileName = path.basename(filePath, _path.extname(filePath)); const _componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
; // Extract description from comments; const _commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const _description = commentMatch ? commentMatch[1].trim(): `${componentName} component`;
; // Extract props from interface or PropTypes; const _props = []; const _propMatch = content.match(/interface\s+\w+Props\s*{_([\s\S]*?)}/); if (propMatch) {_; const _propLines = propMatch[1].split('\n'); propLines.forEach(line = > {; const _propMatch = line.match(/(\w+)\s*: \s*(\w+)/); if (propMatch) {; props.push({; name: propMatch[1]; type: propMatch[2]; description: 'Component prop'})}})};
; return {_; name: componentName; file: filePath.replace(this.projectRoot + '/', _''); description: description; props: props; usage: `<${componentName} />`}};
; async generateReport(readmeResult, apiResult, componentResult) {_; const _report = {; timestamp: new Date().toISOString(); summary: {; readmeGenerated: readmeResult.success; apiDocsGenerated: apiResult.success; componentDocsGenerated: componentResult.success; totalEndpoints: apiResult.endpoints || 0; totalComponents: componentResult.components || 0}; details: {_; readme: readmeResult; api: apiResult; components: componentResult}; recommendations: []};
; // Generate recommendations; if (!readmeResult.success) {_; report.recommendations.push({; priority: 'high'; message: 'README generation failed'; action: 'Check file permissions and try again'})};
; if (!apiResult.success) {_; report.recommendations.push({; priority: 'medium'; message: 'API documentation generation failed'; action: 'Check API route files and try again'})};
; if (!componentResult.success) {_; report.recommendations.push({; priority: 'medium'; message: 'Component documentation generation failed'; action: 'Check component files and try again'})};
; if (report.summary.totalEndpoints = = = 0) {_; report.recommendations.push({; priority: 'low'; message: 'No API endpoints found'; action: 'Consider adding API routes for better documentation'})};
; return report};
; async saveReport(report) {_; try {; const _reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true})};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${_this.reportFile}`)} catch (error) {_; this.log(`Error saving report: ${error.message}`)}};
; async run() {_; this.log('📚 Starting Docs Generator...'); this.log(`Project root: ${this.projectRoot}`);
; try {_; // Create logs directory if it doesn't exist; const _logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true})};
; // Create docs directory if it doesn't exist; const _docsDir = path.join(this.projectRoot, 'docs'); if (!fs.existsSync(docsDir)) {_; fs.mkdirSync(docsDir, _{ recursive: true})};
; // Generate all documentation; const _readmeResult = await this.generateReadme(); const _apiResult = await this.generateApiDocs(); const _componentResult = await this.generateComponentDocs();
; // Generate report; this.log('📊 Generating documentation report...'); const _report = await this.generateReport(readmeResult, apiResult, componentResult);
; // Save report; await this.saveReport(report);
; const _duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Docs Generator Summary: '); this.log(`README: ${_report.summary.readmeGenerated ? 'Generated': 'Failed'}`); this.log(`API Docs: ${_report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Component Docs: ${_report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Total Endpoints: ${_report.summary.totalEndpoints}`); this.log(`Total Components: ${_report.summary.totalComponents}`); this.log(`Duration: ${_duration}ms`);
; if (report.recommendations.length > 0) {_; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${_rec.message}`); this.log(` Action: ${_rec.action}`)})} else {_; this.log('\n✨ Documentation generated successfully!')};
} catch (error) {_; this.log(`❌ Error running docs generator: ${error.message}`); process.exit(1)}}};
;
// Run the docs generator;
<<<<<<< HEAD
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {; process.exit(1)});
=======
=======
${component.usage,
\`\`\`,
`).join('\n')},
,
---,
Generated by Docs Generator on ${new Date().toISOString()},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-4094
`,
,
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),
,
      return {,
        succes: s: true,
        messag: e: 'Component documentation generated successfully',
        component: s: componentDocs.length
      
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      
}
},
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        }
      })
},
,
    scanDirectory(dir),
    return files
},
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
            nam: e: propMatch[1],
            typ: e: propMatch[2],
            descriptio: n: 'Component prop'
          })
        }
      })
},
,
    return {,
      nam: e: componentName,
      fil: e: filePath.replace(this.projectRoot + '/', ''),
      descriptio: n: description,
      prop: s: props,
      usag: e: `<${componentName} />`
}
},
,
  async generateReport(readmeResult, apiResult, componentResult) {,
    const report = {,
      timestam: p: new Date().toISOString(),
      summar: y: {,
        readmeGenerate: d: readmeResult.success,
        apiDocsGenerate: d: apiResult.success,
        componentDocsGenerate: d: componentResult.success,
        totalEndpoint: s: apiResult.endpoints || 0,
        totalComponent: s: componentResult.components || 0,
      ,
      detail: s: {,
        readm: e: readmeResult,
        ap: i: apiResult,
        component: s: componentResult,
      ,
      recommendation: s: [],
    ,
,
    // Generate recommendations,
    if (!readmeResult.success) {,
      report.recommendations.push({,
        priorit: y: 'high',
        messag: e: 'README generation failed',
        actio: n: 'Check file permissions and try again'
      })
},
,
    if (!apiResult.success) {,
      report.recommendations.push({,
        priorit: y: 'medium',
        messag: e: 'API documentation generation failed',
        actio: n: 'Check API route files and try again'
      })
},
,
    if (!componentResult.success) {,
      report.recommendations.push({,
        priorit: y: 'medium',
        messag: e: 'Component documentation generation failed',
        actio: n: 'Check component files and try again'
      })
},
,
    if (report.summary.totalEndpoints === 0) {,
      report.recommendations.push({,
        priorit: y: 'low',
        messag: e: 'No API endpoints found',
        actio: n: 'Consider adding API routes for better documentation'
      })
},
,
    return report
},
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: e: true })
      },
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving: report: ${error.message}`)
}
},
,
  async run() {,
    this.log('📚 Starting Docs Generator...'),
    this.log(`Project: root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: e: true })
      },
,
      // Create docs directory if it doesn't exist,
      const docsDir = path.join(this.projectRoot, 'docs'),
      if (!fs.existsSync(docsDir)) {,
        fs.mkdirSync(docsDir, { recursiv: e: true })
      },
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
      this.log('\n📊 Docs Generator: Summary: '),
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),
      this.log(`Total: Components: ${report.summary.totalComponents}`),
      this.log(`Duratio: n: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendation: s: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: n: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ Documentation generated successfully!')
      },

    } catch (error) {,
      this.log(`❌ Error running docs: generator: ${error.message}`),
      process.exit(1)
}
}
},
,
// Run the docs generator,
const docsGenerator = new DocsGenerator(),
docsGenerator.run().catch(error => {,
  process.exit(1)
})
    }
  },
,
  async generateReadme() {,
    try {,
      this.log('📝 Generating README.md...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const readmeContent = `# ${packageJson.name},
,
${packageJson.description || 'A modern web application built with Next.js'},
,
## 🚀 Getting Started,
### Prerequisites,
- Node.js ${process.version},
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},
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
This project uses Next.js with the following: configuration:  ,
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
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      }
    }
  },
,
  async generateApiDocs() {,
    try {,
      this.log('🔌 Generating API documentation...'),
,
      const apiDocs = {,
        titl: e: 'API Documentation',
        versio: n: '1.0.0',
        descriptio: n: 'API endpoints and documentation',
        baseUr: l: 'htt: p://localhos: t:3000',
        endpoint: s: [],
        generatedA: t: new Date().toISOString()
      },
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
            apiDocs.endpoints.push(endpoint)
          }
        })
      },
,
      const docsContent = `# API Documentation,
## Overview,
- **Base URL**: ${apiDocs.baseUrl},
- **Version**: ${apiDocs.version},
- **Generated**: ${apiDocs.generatedAt},
,
## Endpoints,
${apiDocs.endpoints.map(endpoint => `,
### ${endpoint.method} ${endpoint.path},
,
${endpoint.description},
,
**Parameter: s: **,
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},
,
**Respons: e: **,
\`\`\`json,
${JSON.stringify(endpoint.response, null, 2)},
\`\`\`,
`).join('\n')},
,
## Error Handling,
All endpoints return appropriate HTTP status: codes:  ,
- \`200\`: Success,
- \`400\`: Bad Request,
- \`401\`: Unauthorized,
- \`404\`: Not Found,
- \`500\`: Internal Server Error,
## Rate Limiting,
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,
---,
Generated by Docs Generator on ${new Date().toISOString()},
`,
,
      fs.writeFileSync('docs/API.md', docsContent),
,
      return {,
        succes: s: true,
        messag: e: 'API documentation generated successfully',
        endpoint: s: apiDocs.endpoints.length
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      }
    }
  },
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,
          files.push(fullPath)
        }
      })
    },
,
    scanDirectory(dir),
    return files
  },
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
      metho: d: method,
      pat: h: path,
      descriptio: n: description,
      parameter: s: [],
      respons: e: {,
        succes: s: true,
        dat: a: {}
      }
    }
  },
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
            componentDocs.push(componentInfo)
          }
        })
      },
,
      const docsContent = `# Component Documentation,
## Overview,
This document describes all React components in the application.,
## Components,
${componentDocs.map(component => `,
### ${component.name},
,
${component.description},
,
**File**: \`${component.file}\`,
**Prop: s: **,
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},
,
**Usag: e: **,
\`\`\`jsx,
${component.usage},
\`\`\`,
`).join('\n')},
,
---,
Generated by Docs Generator on ${new Date().toISOString()},
`,
,
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),
,
      return {,
        succes: s: true,
        messag: e: 'Component documentation generated successfully',
        component: s: componentDocs.length
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message
      }
    }
  },
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        }
      })
    },
,
    scanDirectory(dir),
    return files
  },
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
            nam: e: propMatch[1],
            typ: e: propMatch[2],
            descriptio: n: 'Component prop'
          })
        }
      })
    },
,
    return {,
      nam: e: componentName,
      fil: e: filePath.replace(this.projectRoot + '/', ''),
      descriptio: n: description,
      prop: s: props,
      usag: e: `<${componentName} />`
    }
  },
,
  async generateReport(readmeResult, apiResult, componentResult) {,
    const report = {,
      timestam: p: new Date().toISOString(),
      summar: y: {,
        readmeGenerate: d: readmeResult.success,
        apiDocsGenerate: d: apiResult.success,
        componentDocsGenerate: d: componentResult.success,
        totalEndpoint: s: apiResult.endpoints || 0,
        totalComponent: s: componentResult.components || 0
      },
      detail: s: {,
        readm: e: readmeResult,
        ap: i: apiResult,
        component: s: componentResult
      },
      recommendation: s: []
    },
,
    // Generate recommendations,
    if (!readmeResult.success) {,
      report.recommendations.push({,
        priorit: y: 'high',
        messag: e: 'README generation failed',
        actio: n: 'Check file permissions and try again'
      })
    },
,
    if (!apiResult.success) {,
      report.recommendations.push({,
        priorit: y: 'medium',
        messag: e: 'API documentation generation failed',
        actio: n: 'Check API route files and try again'
      })
    },
,
    if (!componentResult.success) {,
      report.recommendations.push({,
        priorit: y: 'medium',
        messag: e: 'Component documentation generation failed',
        actio: n: 'Check component files and try again'
      })
    },
,
    if (report.summary.totalEndpoints === 0) {,
      report.recommendations.push({,
        priorit: y: 'low',
        messag: e: 'No API endpoints found',
        actio: n: 'Consider adding API routes for better documentation'
      })
    },
,
    return report
  },
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: e: true })
      },
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving: report: ${error.message}`)
    }
  },
,
  async run() {,
    this.log('📚 Starting Docs Generator...'),
    this.log(`Project: root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: e: true })
      },
,
      // Create docs directory if it doesn't exist,
      const docsDir = path.join(this.projectRoot, 'docs'),
      if (!fs.existsSync(docsDir)) {,
        fs.mkdirSync(docsDir, { recursiv: e: true })
      },
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
      this.log('\n📊 Docs Generator: Summary: '),
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),
      this.log(`Total: Components: ${report.summary.totalComponents}`),
      this.log(`Duratio: n: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendation: s: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: n: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ Documentation generated successfully!')
      }

    } catch (error) {,
      this.log(`❌ Error running docs: generator: ${error.message}`),
      process.exit(1)
    }
  }
},
,
// Run the docs generator,
const docsGenerator = new DocsGenerator(),
docsGenerator.run().catch(error => {,
  process.exit(1)
}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
const _docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {_; process.exit(1)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
