}};
<<<<<<< HEAD
; async generateReadme() {; try {; this.log('📝 Generating README.md...');

=======
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name}}};
;
  async generateReadme() {;
    try {;
      this.log(' Generating README.md...');
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));`;
      const readmeContent = `# ${packageJson.name};
${packageJson.description || 'A modern web application built with Next.js'};
##  Getting Started;
### Prerequisites;
- Node.js ${process.version};
- npm ${execSync('npm --version', { encodin:g:'utf8' }).trim()};;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Installation;
=======
### Installation;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
\`\`\`bash;
npm install;`;
\`\`\`;
<<<<<<< HEAD
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
<<<<<<< HEAD

=======
Open [htt:p://localhos:t:3000](htt:p://localhos:t:3000) with your browser to see the result.;### Build;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
\`\`\`bash;
npm run build;
npm start;
\`\`\`;
<<<<<<< HEAD
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

;
## 📦 Dependencies;
=======
##  Project Structure;
\`\`\`;
=======
### Development;`;
npm run dev;`;
Open [htt:p://localhos:t:3000](htt:p://localhos:t:3000) with your browser to see the result.;### Build;`;
npm run build;
npm start;`;
##  Project Structure;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${this.projectRoot}/;
 pages/                 # Next.js pages;
 components/            # React components;
 styles/               # CSS styles;
 public/               # Static assets;
 scripts/              # Build and utility scripts;
 package.json          # Dependencies and scripts;`;
\`\`\`;`;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**:\`${value}\``).join('\n')};
##  Dependencies;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Production Dependencies;
=======
### Production Dependencies;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
### Development Dependencies;`;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
<<<<<<< HEAD
;
<<<<<<< HEAD
## 🔧 Configuration;

- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
This project uses Next.js with the following:configuration:;This project uses Next.js with the following configuration: ;
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
The project includes automated monitoring with:PM2:;The project includes automated monitoring with PM2:;
- Code quality monitoring;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
- Performance monitoring;
- Security scanning;
- Health checks;
- Automated testing;
<<<<<<< HEAD
## 🤝 Contributing;
1. Fork the repository;

5. Open a Pull Request;
## 📄 License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
## 📞 Support;
=======
##  Contributing;
1. Fork the repository;`;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`);`;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`);`;
4. Push to the branch (\`git push origin feature/AmazingFeature\`);
5. Open a Pull Request;
##  License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
##  Support;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
For support, email support@example.com or create an issue in the repository.;
---;
Generated on ${new Date().toISOString()};`;
`;
      fs.writeFileSync('README.md', readmeContent);
      return {;
<<<<<<< HEAD
<<<<<<< HEAD

    };
  };
,
  async generateReadme() {,
    try {,
      this.log('📝 Generating README.md...'),
=======
        succes:s:true;
        messag:e:'README.md generated successfully';
      ;
=======
        succes: s:true;,
  messag:e:'README.md generated successfully';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } catch (error) {;
      return {;
        succes:s:false;
        erro:r:error.message
        succes: s:false;,
  erro:r:error.message;      ;
pr-12325
};
        succes: s: true,
        messag: e: 'README.md generated successfully
        succes: s: false,
        erro: r: error.message;
}
  async generateApiDocs() {;
      const apiDocs = {;
        titl:e:'API Documentation';
        versio:n:'1.0.0';
        descriptio:n:'API endpoints and documentation';
        baseUr:l:'htt:p://localhos:t:3000';
        endpoint:s:[];
        generatedA:t:new Date().toISOString();        title: 'API Documentation';
        version: '1.0.0',
  description: 'API endpoints and documentation';
        baseUrl: 'http://localhost:3000';
        endpoints: [];
        titl: e:'API Documentation';',
  versio:n: '1.0.0';',
  descriptio:n: 'API endpoints and documentation';',
  baseUr:l: 'htt:p://localhos:t:3000';',
  endpoint:s: [];,
  generatedA:t: new Date().toISOString();        title: 'API Documentation';',
  version: '1.0.0';
        description: 'API endpoints and documentation';',
  baseUrl: 'http: //localhost:3000';',
  endpoints: [];
pr-12325
        generatedAt: new Date().toISOString();
      // Scan for API routes;
      const pagesDir = path.join(this.projectRoot, 'pages/api');
      if (fs.existsSync(pagesDir)) {;
        const apiFiles = this.getApiFiles(pagesDir);
        apiFiles.forEach(file => {;)
          const content = fs.readFileSync(file, 'utf8');
          const endpoint = this.extractApiEndpoint(file, content);
          if (endpoint) {;
            apiDocs.endpoints.push(endpoint)
        })
;`;
      const docsContent = `# API Documentation;
## Overview;
- **Base URL**:${apiDocs.baseUrl};
- **Version**:${apiDocs.version};
- **Generated**:${apiDocs.generatedAt};
;
## Endpoints;
${apiDocs.endpoints.map(endpoint => `
}
};
,
## Endpoints;`;
${apiDocs.endpoints.map(endpoint => `;
,)
pr-12325
  async generateReadme() {,
    try {,
      this.log(' Generating README.md...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
<<<<<<< HEAD
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const readmeContent = `# ${packageJson.name};
,
${packageJson.description || 'A modern web application built with Next.js'};
,
<<<<<<< HEAD
## 🚀 Getting Started,
=======
=======
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
##  Getting Started,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Prerequisites,
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};
### Installation,`;
\`\`\`bash,
npm install,`;
\`\`\`,
### Development,`;
npm run dev,`;
Open [http: //localhost:3000](http://localhost:3000) with your browser to see the result.,
### Build,`;
npm run build,
<<<<<<< HEAD
npm start,
\`\`\`,
<<<<<<< HEAD
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
=======
##  Project Structure,
\`\`\`,
=======
npm start,`;
##  Project Structure,`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${this.projectRoot}/,
 pages/                 # Next.js pages,
 components/            # React components,
 styles/               # CSS styles,
 public/               # Static assets,
 scripts/              # Build and utility scripts,
 package.json          # Dependencies and scripts,`;
##  Available Scripts,`;
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')};
##  Dependencies,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Production Dependencies,
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
,
### Development Dependencies,
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
,
<<<<<<< HEAD
## 🔧 Configuration,
=======
=======
### Production Dependencies,`;
### Development Dependencies,`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
##  Configuration,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
This project uses Next.js with the following configuration:  ,
- TypeScript support,
- ESLint for code quality,
- Prettier for code formatting,
- PM2 for process management,
<<<<<<< HEAD
## 📊 Monitoring,
=======
##  Monitoring,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
The project includes automated monitoring with PM2:,
- Code quality monitoring,
- Performance monitoring,
- Security scanning,
- Health checks,
- Automated testing,
<<<<<<< HEAD
## 🤝 Contributing,
=======
##  Contributing,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
1. Fork the repository,
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),
=======
1. Fork the repository,`;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),`;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
4. Push to the branch (\`git push origin feature/AmazingFeature\`),
5. Open a Pull Request,
<<<<<<< HEAD
## 📄 License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
## 📞 Support,
=======
##  License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
##  Support,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
For support, email support@example.com or create an issue in the repository.,
---,
`,
      fs.writeFileSync('README.md', readmeContent),
      return {,
        success: true,
        message: 'README.md generated successfully
    } catch (error) {,
        success: false,
        error: error.message
<<<<<<< HEAD
      };
    };
  };
,
  async generateApiDocs() {,
    try {,
      this.log('🔌 Generating API documentation...'),
=======
      }
}
};
,
        error: error.message;
pr-12325
  async generateApiDocs() {,
      this.log(' Generating API documentation...'),
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const apiDocs = {,
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API endpoints and documentation',
        baseUrl: 'http://localhost:3000',
        endpoints: [],
        generatedAt: new Date().toISOString()
      // Scan for API routes,
      const pagesDir = path.join(this.projectRoot, 'pages/api'),
      if (fs.existsSync(pagesDir)) {,
        const apiFiles = this.getApiFiles(pagesDir),
        apiFiles.forEach(file => {,)
          const content = fs.readFileSync(file, 'utf8'),
          const endpoint = this.extractApiEndpoint(file, content),
          if (endpoint) {,
,`;
      const docsContent = `# API Documentation,
## Overview,
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
## Endpoints,`;
${apiDocs.endpoints.map(endpoint => `,
### ${endpoint.method} ${endpoint.path};
${endpoint.description};
**Parameter:s:**;)`;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}):${param.description}`).join('\n')};
**Respons:e:**;\`\`\`json;
**Parameters: **,`;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')};
**Response: **,`;
\`\`\`json,
${JSON.stringify(endpoint.response, null, 2)};`;
\`\`\`,`;
`).join('\n')};
## Error Handling;
All endpoints return appropriate HTTP status:codes:;`;
- \`200\`:Success;`;
- \`400\`:Bad Request;`;
- \`401\`:Unauthorized;`;
- \`404\`:Not Found;`;
- \`500\`:Internal Server Error;- \`200\`: Success;`;
- \`400\`: Bad Request;`;
- \`401\`: Unauthorized;`;
- \`404\`: Not Found;`;
- \`500\`: Internal Server Error;
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
Generated by Docs Generator on ${new Date().toISOString();`;
      fs.writeFileSync('docs/API.md', docsContent);
;
      return {;
        succes:s:true;
        messag:e:'API documentation generated successfully';
        endpoint:s:apiDocs.endpoints.length;
      ;
    } catch (error) {;
      return {;
        succes:s:false;
<<<<<<< HEAD
        erro:r:error.message;      ;
=======
        erro:r:error.message
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
        succes: s: true,
        messag: e: 'API documentation generated successfully';
        endpoint: s: apiDocs.endpoints.length
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {;
      return {;
        succes: s: false,
        erro: r: error.message
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
};
;
  messag:e: 'API documentation generated successfully';',
  endpoint:s:apiDocs.endpoints.length;
        messag: e: 'API documentation generated successfully';',
  endpoint: s: apiDocs.endpoints.length;
pr-12325
  getApiFiles(dir) {;
    const files = [];
    const scanDirectory = (currentDir) => {;
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {;)
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {;
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {;
          files.push(fullPath)
    scanDirectory(dir);
    return files;
  extractApiEndpoint(filePath, content) {;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', );
    const path = relativePath.replace(/\.(js|ts)$/, ).replace(/\/index$/, ) || '/';
    // Extract HTTP method from content;
    const method = content.includes('export default') ? 'GET' :'POST';
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
    const description = commentMatch ? commentMatch[1].trim() :'API endpoint';
;
    return {;
      metho:d:method;
      pat:h:path;
      descriptio:n:description;
      parameter:s:[];
      respons:e:{;
        succes:s:true;
<<<<<<< HEAD
        dat:a:{;      };
=======
        dat:a:{
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
      metho: d:method;,
  pat:h: path;,
  descriptio:n: description;,
  parameter:s: [];,
  respons:e: {;,
  succes:s: true;,
  dat:a:{;      };
pr-12325
      metho: d: method,
      pat: h: path,
      descriptio: n: description,
      parameter: s: [];,
  respons: e: {;,
        dat: a: {
  async generateComponentDocs() {;
<<<<<<< HEAD
    try {;
<<<<<<< HEAD
      this.log('🧩 Generating component documentation...');
=======
      this.log(' Generating component documentation...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
=======
      this.log(' Generating component documentation...');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const componentsDir = path.join(this.projectRoot, 'components');
      const componentDocs = [];
      if (fs.existsSync(componentsDir)) {;
        const componentFiles = this.getComponentFiles(componentsDir);
        componentFiles.forEach(file => {;)
          const componentInfo = this.extractComponentInfo(file, content);
          if (componentInfo) {;
            componentDocs.push(componentInfo)
      const docsContent = `# Component Documentation;
This document describes all React components in the application.;
## Components;`;
${componentDocs.map(component => `;
### ${component.name};
${component.description};
**File**:\`${component.file}\`;
**Prop:s:**;)`;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}):${prop.description}`).join('\n')};
**Usag:e:**;\`\`\`jsx;
${component.usage;`;
Generated by Docs Generator on ${new Date().toISOString()};`;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent);
;
      return {;
        succes:s:true;
        messag:e:'Component documentation generated successfully';
        component:s:componentDocs.length;
      ;
    } catch (error) {;
      return {;
        succes:s:false;
<<<<<<< HEAD
        erro:r:error.message;      ;
=======
        erro:r:error.message
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
        succes: s: true,
        messag: e: 'Component documentation generated successfully';
        component: s: componentDocs.length
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {;
      return {;
        succes: s: false,
        erro: r: error.message
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
};
;
  messag:e: 'Component documentation generated successfully';',
  component:s:componentDocs.length;
        messag: e: 'Component documentation generated successfully';',
  component: s: componentDocs.length;
pr-12325
  getComponentFiles(dir) {;
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {;
  extractComponentInfo(filePath, content) {;
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);`;
    const description = commentMatch ? commentMatch[1].trim() :`${componentName} component`;
    // Extract props from interface or PropTypes;
    const props = [];
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/);
    if (propMatch) {;
      const propLines = propMatch[1].split('\n');
      propLines.forEach(line => {;)
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/);
          props.push({;
            nam:e:propMatch[1];
            typ:e:propMatch[2];
<<<<<<< HEAD
            descriptio:n:'Component prop';          });
        };
      });
=======
            descriptio:n:'Component prop';          })
};
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    return {;
      nam:e:componentName;
      fil:e:filePath.replace(this.projectRoot + '/', '');
      descriptio:n:description;
      prop:s:props;
<<<<<<< HEAD
      usag:e:`<${componentName} />`;};
=======
      usag:e:`<${componentName} />`
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            nam: e: propMatch[1];
            typ: e: propMatch[2];
            descriptio: n: 'Component prop'
          })
        }
      })
};
;
    return {;
            nam: e:propMatch[1];,
  typ:e: propMatch[2];,)
  descriptio:n:'Component prop';          });
      });
      nam: e:componentName;,
  fil:e:filePath.replace(this.projectRoot + '/', );
      descriptio: n:description;,
  prop:s: props;,`;
  usag:e:`<${componentName} />`;};
            nam: e: propMatch[1];,
  typ: e: propMatch[2];,
  descriptio: n: 'Component prop
pr-12325
      nam: e: componentName,
      fil: e: filePath.replace(this.projectRoot + '/', );
      prop: s: props,`;
      usag: e: `<${componentName} />`
  async generateReport(readmeResult, apiResult, componentResult) {;
    const report = {;
      timestam: p:new Date().toISOString();,
  summar:y: {;,
  readmeGenerate:d: readmeResult.success;,
  apiDocsGenerate:d: apiResult.success;,
  componentDocsGenerate:d: componentResult.success;,
  totalEndpoint:s: apiResult.endpoints || 0;,
  totalComponent:s:componentResult.components || 0;
      detail: s:{;,
  readm:e: readmeResult;,
  ap:i: apiResult;,
  component:s:componentResult;
      recommendation:s:[];
    // Generate recommendations;
    if (!readmeResult.success) {;
      report.recommendations.push({;
        priorit: y:'high';',
  messag:e: 'README generation failed';',
  actio:n:'Check file permissions and try again';')
      });        priority: 'high';',
  message: 'README generation failed';
        action: 'Check file permissions and try again';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
pr-12325
    if (!apiResult.success) {;
        priorit: y:'medium';',
  messag:e: 'API documentation generation failed';',
  actio:n:'Check API route files and try again';')
      });        priority: 'medium';',
  message: 'API documentation generation failed';
        action: 'Check API route files and try again';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
pr-12325
    if (!componentResult.success) {;
  messag:e: 'Component documentation generation failed';',
  actio:n:'Check component files and try again';')
  message: 'Component documentation generation failed';
        action: 'Check component files and try again';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
pr-12325
    if (report.summary.totalEndpoints === 0) {;
        priorit: y:'low';',
  messag:e: 'No API endpoints found';',
  actio:n:'Consider adding API routes for better documentation';')
      });        priority: 'low';',
  message: 'No API endpoints found';
        action: 'Consider adding API routes for better documentation';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    return report
};
;
    return report;
pr-12325
  async saveReport(report) {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true });
      };
=======
        fs.mkdirSync(reportDir, { recursiv:e:true })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;
<<<<<<< HEAD
      this.log(`Error saving:report:${error.message}`);};
=======
      this.log(`Error saving:report:${error.message}`)
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        fs.mkdirSync(reportDir, { recursiv:e:true });
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));`;
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;`;
      this.log(`Error saving:report:${error.message}`);};
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        fs.mkdirSync(reportDir, { recursiv: e: true })
      this.log(`Report saved: to: ${this.reportFile}`)
      this.log(`Error saving: report: ${error.message}`)
  async run() {;
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('📚 Starting Docs Generator...');
=======
    this.log(' Starting Docs Generator...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    this.log(' Starting Docs Generator...');`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log(`Project:root:${this.projectRoot}`);;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true });
      };
=======
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      // Create docs directory if it doesn't exist;
      const docsDir = path.join(this.projectRoot, 'docs');
      if (!fs.existsSync(docsDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(docsDir, { recursiv:e:true });        fs.mkdirSync(docsDir, { recursive: true });
      };
=======
        fs.mkdirSync(docsDir, { recursiv:e:true });        fs.mkdirSync(docsDir, { recursive: true })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true });
      // Create docs directory if it doesn't exist;
      const docsDir = path.join(this.projectRoot, 'docs');
      if (!fs.existsSync(docsDir)) {;
        fs.mkdirSync(docsDir, { recursiv:e:true });        fs.mkdirSync(docsDir, { recursive: true });
pr-12325
      // Generate all documentation;
      const readmeResult = await this.generateReadme();
      const apiResult = await this.generateApiDocs();
      const componentResult = await this.generateComponentDocs();
      // Generate report;
<<<<<<< HEAD
      this.log('📊 Generating documentation report...');
=======
      this.log(' Generating documentation report...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(readmeResult, apiResult, componentResult);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Docs Generator:Summary:');
=======
      this.log('\n Docs Generator:Summary:');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`);
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`);
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`);
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`);
      this.log(`Total:Components:${report.summary.totalComponents}`);
=======
      this.log('\n Docs Generator:Summary:');`;
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`);`;
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`);`;
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`);`;
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`);`;
      this.log(`Total:Components:${report.summary.totalComponents}`);`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`Duratio:n:${duration}ms`);
      if (report.recommendations.length > 0) {;
<<<<<<< HEAD
        this.log('\n💡 Recommendation:s:');
=======
        this.log('\n Recommendation:s:');
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
=======
        report.recommendations.forEach(rec => {;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);`;
          this.log(`    Actio:n:${rec.action}`);        });`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          this.log(`    Actio: n: ${rec.action}`)
      } else {;
<<<<<<< HEAD
        this.log('\n✨ Documentation generated successfully!')
      }

    } catch (error) {;
      this.log(`❌ Error running docs:generator:${error.message}`);      process.exit(1);
};
};
      this.log(`❌ Error running docs: generator: ${error.message}`);
=======
        this.log('\n Documentation generated successfully!')

    } catch (error) {;
      this.log(` Error running docs:generator:${error.message}`);      process.exit(1)
}
};
      this.log(` Error running docs:generator:${error.message}`);      process.exit(1);
};`;
pr-12325
      this.log(` Error running docs: generator: ${error.message}`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      process.exit(1)
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error => {;)
  process.exit(1);
<<<<<<< HEAD
});
    };
  };
,;
  async generateReadme() {,;
    try {,;
      this.log('📝 Generating README.md...'),;
=======
})
}
};
pr-12325
,;
  async generateReadme() {,;
    try {,;
      this.log(' Generating README.md...'),;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
      const readmeContent = `# ${packageJson.name};
,;
${packageJson.description || 'A modern web application built with Next.js'};
,;
<<<<<<< HEAD
## 🚀 Getting Started,;
=======
=======
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
##  Getting Started,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Prerequisites,;
- npm ${execSync('npm --version', { encodin:g:'utf8' }).trim()};
### Installation,;`;
\`\`\`bash,;
npm install,;`;
\`\`\`,;
### Development,;`;
npm run dev,;`;
Open [htt:p://localhos:t:3000](htt:p://localhos:t:3000) with your browser to see the result.,;
### Build,;`;
npm run build,;
<<<<<<< HEAD
npm start,;
\`\`\`,;
<<<<<<< HEAD
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
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**:\`${value}\``).join('\n')};
,;
## 📦 Dependencies,;
=======
##  Project Structure,;
\`\`\`,;
=======
npm start,;`;
##  Project Structure,;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${this.projectRoot}/,;
 pages/                 # Next.js pages,;
 components/            # React components,;
 styles/               # CSS styles,;
 public/               # Static assets,;
 scripts/              # Build and utility scripts,;
 package.json          # Dependencies and scripts,;`;
##  Available Scripts,;`;
##  Dependencies,;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Production Dependencies,;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
,;
### Development Dependencies,;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
,;
<<<<<<< HEAD
## 🔧 Configuration,;
=======
=======
### Production Dependencies,;`;
### Development Dependencies,;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
##  Configuration,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
This project uses Next.js with the following:configuration: ,;
- TypeScript support,;
- ESLint for code quality,;
- Prettier for code formatting,;
- PM2 for process management,;
<<<<<<< HEAD
## 📊 Monitoring,;
=======
##  Monitoring,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
The project includes automated monitoring with:PM2:,;
- Code quality monitoring,;
- Performance monitoring,;
- Security scanning,;
- Health checks,;
- Automated testing,;
<<<<<<< HEAD
## 🤝 Contributing,;
=======
##  Contributing,;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
1. Fork the repository,;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),;
=======
1. Fork the repository,;`;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),;`;
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
4. Push to the branch (\`git push origin feature/AmazingFeature\`),;
5. Open a Pull Request,;
<<<<<<< HEAD
## 📄 License,;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,;
## 📞 Support,;
=======
##  License,;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,;
##  Support,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
For support, email support@example.com or create an issue in the repository.,;
---,;
`,;
      fs.writeFileSync('README.md', readmeContent),;
      return {,;
        succes:s:true,;
<<<<<<< HEAD
        messag:e:'README.md generated successfully',;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
      };
    };
  };
,;
  async generateApiDocs() {,;
    try {,;
      this.log('🔌 Generating API documentation...'),;
=======
        messag:e:'README.md generated successfully',
};
        messag:e:'README.md generated successfully',;
pr-12325
    } catch (error) {,;
        succes:s:false,;
        erro:r:error.message,
};
    }
};
,;
        erro:r:error.message,;
pr-12325
  async generateApiDocs() {,;
      this.log(' Generating API documentation...'),;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const apiDocs = {,;
        titl:e:'API Documentation',;
        versio:n:'1.0.0',;
        descriptio:n:'API endpoints and documentation',;
        baseUr:l:'htt:p://localhos:t:3000',;
        endpoint:s:[],;
<<<<<<< HEAD
        generatedA:t:new Date().toISOString(),;
      };
=======
        generatedA:t:new Date().toISOString(),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        generatedA:t:new Date().toISOString(),;
pr-12325
      // Scan for API routes,;
      const pagesDir = path.join(this.projectRoot, 'pages/api'),;
      if (fs.existsSync(pagesDir)) {,;
        const apiFiles = this.getApiFiles(pagesDir),;
        apiFiles.forEach(file => {,;)
          const content = fs.readFileSync(file, 'utf8'),;
          const endpoint = this.extractApiEndpoint(file, content),;
          if (endpoint) {,;
<<<<<<< HEAD
            apiDocs.endpoints.push(endpoint),;
          };
        }),;
      };
=======
            apiDocs.endpoints.push(endpoint),
};
        }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
            apiDocs.endpoints.push(endpoint),;
        }),;
,;`;
pr-12325
      const docsContent = `# API Documentation,;
## Overview,;
## Endpoints,;`;
${apiDocs.endpoints.map(endpoint => `,;
**Parameter:s:**,;)`;
**Respons:e:**,;`;
\`\`\`json,;
\`\`\`,;`;
## Error Handling,;
All endpoints return appropriate HTTP status:codes: ,;`;
- \`200\`:Success,;`;
- \`400\`:Bad Request,;`;
- \`401\`:Unauthorized,;`;
- \`404\`:Not Found,;`;
- \`500\`:Internal Server Error,;
## Rate Limiting,;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,;
      fs.writeFileSync('docs/API.md', docsContent),;
        messag:e:'API documentation generated successfully',;
<<<<<<< HEAD
        endpoint:s:apiDocs.endpoints.length,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
      };
    };
  };
=======
        endpoint:s:apiDocs.endpoints.length,
};
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,
};
    }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        endpoint:s:apiDocs.endpoints.length,;
pr-12325
  getApiFiles(dir) {,;
    const files = [],;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;)
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath),;
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,;
<<<<<<< HEAD
          files.push(fullPath),;
        };
      }),;
    };
,;
    scanDirectory(dir),;
    return files,;
  };
=======
          files.push(fullPath),
};
      }),
};
,;
    scanDirectory(dir),;
    return files,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
          files.push(fullPath),;
    scanDirectory(dir),;
    return files,;
pr-12325
  extractApiEndpoint(filePath, content) {,;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ),;
    const path = relativePath.replace(/\.(js|ts)$/, ).replace(/\/index$/, ) || '/',;
    // Extract HTTP method from content,;
    const method = content.includes('export default') ? 'GET' :'POST',;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() :'API endpoint',;
      metho:d:method,;
      pat:h:path,;
      descriptio:n:description,;
      parameter:s:[],;
      respons:e:{,;
        succes:s:true,;
<<<<<<< HEAD
        dat:a:{};
      };
    };
  };
,;
  async generateComponentDocs() {,;
    try {,;
      this.log('🧩 Generating component documentation...'),;
=======
        dat:a:{}
};
    }
};
,;
        dat:a:{};
pr-12325
  async generateComponentDocs() {,;
      this.log(' Generating component documentation...'),;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const componentsDir = path.join(this.projectRoot, 'components'),;
      const componentDocs = [],;
      if (fs.existsSync(componentsDir)) {,;
        const componentFiles = this.getComponentFiles(componentsDir),;
        componentFiles.forEach(file => {,;)
          const componentInfo = this.extractComponentInfo(file, content),;
          if (componentInfo) {,;
<<<<<<< HEAD
            componentDocs.push(componentInfo),;
          };
        }),;
      };
=======
            componentDocs.push(componentInfo),
};
        }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
            componentDocs.push(componentInfo),;
pr-12325
      const docsContent = `# Component Documentation,;
This document describes all React components in the application.,;
## Components,;`;
${componentDocs.map(component => `,;
**File**:\`${component.file}\`,;
**Prop:s:**,;)`;
**Usag:e:**,;`;
\`\`\`jsx,;
${component.usage};`;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),;
        messag:e:'Component documentation generated successfully',;
<<<<<<< HEAD
        component:s:componentDocs.length,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
      };
    };
  };
=======
        component:s:componentDocs.length,
};
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,
};
    }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        component:s:componentDocs.length,;
pr-12325
  getComponentFiles(dir) {,;
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,;
<<<<<<< HEAD
          files.push(fullPath),;
        };
      }),;
    };
,;
    scanDirectory(dir),;
    return files,;
  };
=======
          files.push(fullPath),
};
      }),
};
,;
    scanDirectory(dir),;
    return files,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
pr-12325
  extractComponentInfo(filePath, content) {,;
    const fileName = path.basename(filePath, path.extname(filePath)),;
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;`;
    const description = commentMatch ? commentMatch[1].trim() :`${componentName} component`,;
    // Extract props from interface or PropTypes,;
    const props = [],;
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/),;
    if (propMatch) {,;
      const propLines = propMatch[1].split('\n'),;
      propLines.forEach(line => {,;)
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/),;
          props.push({,;
            nam:e:propMatch[1],;
            typ:e:propMatch[2],;
            descriptio:n:'Component prop',;
<<<<<<< HEAD
          }),;
        };
      }),;
    };
=======
          }),
};
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
    return {,;
      nam:e:componentName,;
      fil:e:filePath.replace(this.projectRoot + '/', ''),;
      descriptio:n:description,;
      prop:s:props,;
<<<<<<< HEAD
      usag:e:`<${componentName} />`,;
    };
  };
=======
      usag:e:`<${componentName} />`,
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
            descriptio:n:'Component prop',;')
      nam:e:componentName,;
      fil:e:filePath.replace(this.projectRoot + '/', ),;
      prop:s:props,;`;
      usag:e:`<${componentName} />`,;
pr-12325
  async generateReport(readmeResult, apiResult, componentResult) {,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      summar:y:{,;
        readmeGenerate:d:readmeResult.success,;
        apiDocsGenerate:d:apiResult.success,;
        componentDocsGenerate:d:componentResult.success,;
        totalEndpoint:s:apiResult.endpoints || 0,;
        totalComponent:s:componentResult.components || 0,;
      },;
      detail:s:{,;
        readm:e:readmeResult,;
        ap:i:apiResult,;
        component:s:componentResult,;
      },;
<<<<<<< HEAD
      recommendation:s:[],;
    };
=======
      recommendation:s:[],
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      recommendation:s:[],;
pr-12325
    // Generate recommendations,;
    if (!readmeResult.success) {,;
      report.recommendations.push({,;
        priorit:y:'high',;
        messag:e:'README generation failed',;
        actio:n:'Check file permissions and try again',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        actio:n:'Check file permissions and try again',;')
pr-12325
    if (!apiResult.success) {,;
        priorit:y:'medium',;
        messag:e:'API documentation generation failed',;
        actio:n:'Check API route files and try again',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        actio:n:'Check API route files and try again',;')
pr-12325
    if (!componentResult.success) {,;
        messag:e:'Component documentation generation failed',;
        actio:n:'Check component files and try again',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        actio:n:'Check component files and try again',;')
pr-12325
    if (report.summary.totalEndpoints === 0) {,;
        priorit:y:'low',;
        messag:e:'No API endpoints found',;
        actio:n:'Consider adding API routes for better documentation',;
<<<<<<< HEAD
      }),;
    };
,;
    return report,;
  };
=======
      }),
};
,;
    return report,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        actio:n:'Consider adding API routes for better documentation',;')
    return report,;
pr-12325
  async saveReport(report) {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(reportDir, { recursiv:e:true }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
<<<<<<< HEAD
      this.log(`Error saving:report:${error.message}`),;
    };
  };
,;
  async run() {,;
    this.log('📚 Starting Docs Generator...'),;
=======
      this.log(`Error saving:report:${error.message}`),
}
};
,;
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;`;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;`;
      this.log(`Error saving:report:${error.message}`),;
pr-12325
  async run() {,;
<<<<<<< HEAD
    this.log(' Starting Docs Generator...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    this.log(' Starting Docs Generator...'),;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log(`Project:root:${this.projectRoot}`),;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(logsDir, { recursiv:e:true }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      // Create docs directory if it doesn't exist,;
      const docsDir = path.join(this.projectRoot, 'docs'),;
      if (!fs.existsSync(docsDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(docsDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(docsDir, { recursiv:e:true }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      // Create docs directory if it doesn't exist,;
      const docsDir = path.join(this.projectRoot, 'docs'),;
      if (!fs.existsSync(docsDir)) {,;
        fs.mkdirSync(docsDir, { recursiv:e:true }),;
pr-12325
      // Generate all documentation,;
      const readmeResult = await this.generateReadme(),;
      const apiResult = await this.generateApiDocs(),;
      const componentResult = await this.generateComponentDocs(),;
      // Generate report,;
<<<<<<< HEAD
      this.log('📊 Generating documentation report...'),;
=======
      this.log(' Generating documentation report...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(readmeResult, apiResult, componentResult),;
      // Save report,;
      await this.saveReport(report),;
      const duration = Date.now() - this.startTime,;
      // Log summary,;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Docs Generator:Summary:'),;
=======
      this.log('\n Docs Generator:Summary:'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`),;
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`),;
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`),;
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`),;
      this.log(`Total:Components:${report.summary.totalComponents}`),;
=======
      this.log('\n Docs Generator:Summary:'),;`;
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`),;`;
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`),;`;
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`),;`;
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`),;`;
      this.log(`Total:Components:${report.summary.totalComponents}`),;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`Duratio:n:${duration}ms`),;
      if (report.recommendations.length > 0) {,;
<<<<<<< HEAD
        this.log('\n💡 Recommendation:s:'),;
=======
        this.log('\n Recommendation:s:'),;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
=======
        report.recommendations.forEach(rec => {,;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          this.log(`    Actio:n:${rec.action}`),;
      } else {,;
<<<<<<< HEAD
        this.log('\n✨ Documentation generated successfully!'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running docs:generator:${error.message}`),;
      process.exit(1),;
    };
  };
=======
        this.log('\n Documentation generated successfully!'),
};
,;
    } catch (error) {,;
      this.log(` Error running docs:generator:${error.message}`),;
      process.exit(1),
};
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,;
        this.log('\n Documentation generated successfully!'),;
      this.log(` Error running docs:generator:${error.message}`),;
      process.exit(1),;
pr-12325
// Run the docs generator,;
const docsGenerator = new DocsGenerator(),;
docsGenerator.run().catch(error => {,;)
}),;,
  async run() {,
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('📚 Starting Docs Generator...'),
=======
    this.log(' Starting Docs Generator...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    this.log(' Starting Docs Generator...'),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log(`Project root: ${this.projectRoot}`),
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true })
      // Create docs directory if it doesn't exist,
      const docsDir = path.join(this.projectRoot, 'docs'),
      if (!fs.existsSync(docsDir)) {,
        fs.mkdirSync(docsDir, { recursive: true })
      // Generate all documentation,
      const readmeResult = await this.generateReadme(),
      const apiResult = await this.generateApiDocs(),
      const componentResult = await this.generateComponentDocs(),
      // Generate report,
<<<<<<< HEAD
      this.log('📊 Generating documentation report...'),
=======
      this.log(' Generating documentation report...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(readmeResult, apiResult, componentResult),
      // Save report,
      await this.saveReport(report),
      const duration = Date.now() - this.startTime,
      // Log summary,
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Docs Generator Summary: '),
=======
      this.log('\n Docs Generator Summary: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`README: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),
      this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Total Endpoints: ${report.summary.totalEndpoints}`),
      this.log(`Total Components: ${report.summary.totalComponents}`),
=======
      this.log('\n Docs Generator Summary: '),`;
      this.log(`README: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`Total Endpoints: ${report.summary.totalEndpoints}`),`;
      this.log(`Total Components: ${report.summary.totalComponents}`),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`Duration: ${duration}ms`),
      if (report.recommendations.length > 0) {,
<<<<<<< HEAD
        this.log('\n💡 Recommendations: '),
=======
        this.log('\n Recommendations: '),
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
=======
        report.recommendations.forEach(rec => {,)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          this.log(`    Action: ${rec.action}`)
      } else {,
<<<<<<< HEAD
<<<<<<< HEAD
        this.log('\n✨ Documentation generated successfully!')
      }
    } catch (error) {,
      this.log(`❌ Error running docs generator: ${error.message}`),
      process.exit(1)
    };
  };
=======
        this.log('\n Documentation generated successfully!')
      }
    } catch (error) {,
=======
    } catch (error) {,`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(` Error running docs generator: ${error.message}`),
      process.exit(1)
    }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,
pr-12325
// Run the docs generator,
const docsGenerator = new DocsGenerator(),
docsGenerator.run().catch(error => {,)
  },
<<<<<<< HEAD
,
  async generateReadme() {,
    try {,
<<<<<<< HEAD
      this.log('📝 Generating README.md...'),
=======
      this.log(' Generating README.md...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const readmeContent = `# ${packageJson.name},
${packageJson.description || 'A modern web application built with Next.js'},
<<<<<<< HEAD
,
<<<<<<< HEAD
## 🚀 Getting Started,
=======
##  Getting Started,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Prerequisites,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
- Node.js ${process.version},
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()},
Open [htt: p: //localhos: t:3000](htt: p://localhos: t:3000) with your browser to see the result.,
<<<<<<< HEAD
### Build,
\`\`\`bash,
npm run build,
npm start,
\`\`\`,
<<<<<<< HEAD
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
=======
##  Project Structure,
\`\`\`,
${this.projectRoot}/,
 pages/                 # Next.js pages,
 components/            # React components,
 styles/               # CSS styles,
 public/               # Static assets,
 scripts/              # Build and utility scripts,
 package.json          # Dependencies and scripts,
\`\`\`,
##  Available Scripts,
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},
,
##  Dependencies,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
### Production Dependencies,
=======
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')},
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')},
<<<<<<< HEAD
,
<<<<<<< HEAD
## 🔧 Configuration,
=======
##  Configuration,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
This project uses Next.js with the following: configuration:  ,
- TypeScript support,
- ESLint for code quality,
- Prettier for code formatting,
- PM2 for process management,
<<<<<<< HEAD
## 📊 Monitoring,
=======
##  Monitoring,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
The project includes automated monitoring with: PM2:,
- Code quality monitoring,
- Performance monitoring,
- Security scanning,
- Health checks,
- Automated testing,
<<<<<<< HEAD
## 🤝 Contributing,
=======
##  Contributing,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
1. Fork the repository,
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`),
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`),
4. Push to the branch (\`git push origin feature/AmazingFeature\`),
5. Open a Pull Request,
<<<<<<< HEAD
## 📄 License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
## 📞 Support,
=======
##  License,
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.,
##  Support,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
      this.log('🔌 Generating API documentation...'),
=======
      this.log(' Generating API documentation...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      const apiDocs = {,
=======
This project uses Next.js with the following: configuration:  ,
The project includes automated monitoring with: PM2:,
Generated on ${new Date().toISOString()},`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        titl: e: 'API Documentation',
        versio: n: '1.0.0',
        descriptio: n: 'API endpoints and documentation',
        baseUr: l: 'htt: p://localhos: t:3000',
        endpoint: s: [],
        generatedA: t: new Date().toISOString()
      // Scan for API routes,
- **Base URL**: ${apiDocs.baseUrl},
- **Version**: ${apiDocs.version},
- **Generated**: ${apiDocs.generatedAt},
### ${endpoint.method} ${endpoint.path},
${endpoint.description},
**Parameter: s: **,)`;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')},
**Respons: e: **,`;
${JSON.stringify(endpoint.response, null, 2)},`;
`).join('\n')},
## Error Handling,
All endpoints return appropriate HTTP status: codes:  ,`;
- \`200\`: Success,`;
- \`400\`: Bad Request,`;
- \`401\`: Unauthorized,`;
- \`404\`: Not Found,`;
- \`500\`: Internal Server Error,
## Rate Limiting,
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,
Generated by Docs Generator on ${new Date().toISOString()},`;
      fs.writeFileSync('docs/API.md', docsContent),
        messag: e: 'API documentation generated successfully',
  getApiFiles(dir) {,
    const files = [],
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,)
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
        if (stat.isDirectory()) {,
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,
    scanDirectory(dir),
  extractApiEndpoint(filePath, content) {,
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ),
    const path = relativePath.replace(/\.(js|ts)$/, ).replace(/\/index$/, ) || '/',
    // Extract HTTP method from content,
    const method = content.includes('export default') ? 'GET' : 'POST',
    // Extract description from comments,
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),
    const description = commentMatch ? commentMatch[1].trim() : 'API endpoint',
      parameter: s: [],
      respons: e: {,
        dat: a: {}
  async generateComponentDocs() {,
<<<<<<< HEAD
    try {,
<<<<<<< HEAD
      this.log('🧩 Generating component documentation...'),
=======
      this.log(' Generating component documentation...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
=======
      this.log(' Generating component documentation...'),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const componentsDir = path.join(this.projectRoot, 'components'),
      const componentDocs = [],
      if (fs.existsSync(componentsDir)) {,
        const componentFiles = this.getComponentFiles(componentsDir),
        componentFiles.forEach(file => {,)
          const componentInfo = this.extractComponentInfo(file, content),
          if (componentInfo) {,
      const docsContent = `# Component Documentation,
This document describes all React components in the application.,
## Components,`;
${componentDocs.map(component => `,
### ${component.name},
${component.description},
**File**: \`${component.file}\`,
**Prop: s: **,)`;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},
**Usag: e: **,`;
\`\`\`jsx,
${component.usage},`;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),
        messag: e: 'Component documentation generated successfully',
  getComponentFiles(dir) {,
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,
  extractComponentInfo(filePath, content) {,
    const fileName = path.basename(filePath, path.extname(filePath)),
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),
    // Extract description from comments,
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),`;
    const description = commentMatch ? commentMatch[1].trim() : `${componentName} component`,
    // Extract props from interface or PropTypes,
    const props = [],
    const propMatch = content.match(/interface\s+\w+Props\s*{([\s\S]*?)}/),
    if (propMatch) {,
      const propLines = propMatch[1].split('\n'),
      propLines.forEach(line => {,)
        const propMatch = line.match(/(\w+)\s*:\s*(\w+)/),
          props.push({,
            nam: e: propMatch[1],
            typ: e: propMatch[2],
            descriptio: n: 'Component prop)
      fil: e: filePath.replace(this.projectRoot + '/', ),
  async generateReport(readmeResult, apiResult, componentResult) {,
    const report = {,
      timestam: p: new Date().toISOString(),
      summar: y: {,
        readmeGenerate: d: readmeResult.success,
        apiDocsGenerate: d: apiResult.success,
        componentDocsGenerate: d: componentResult.success,
        totalEndpoint: s: apiResult.endpoints || 0,
        totalComponent: s: componentResult.components || 0;
      detail: s: {,
        readm: e: readmeResult,
        ap: i: apiResult,
        component: s: componentResult;
      recommendation: s: []
    // Generate recommendations,
    if (!readmeResult.success) {,
      report.recommendations.push({,
        priorit: y: 'high',
        messag: e: 'README generation failed',
        actio: n: 'Check file permissions and try again)
    if (!apiResult.success) {,
        priorit: y: 'medium',
        messag: e: 'API documentation generation failed',
        actio: n: 'Check API route files and try again)
    if (!componentResult.success) {,
        messag: e: 'Component documentation generation failed',
        actio: n: 'Check component files and try again)
    if (report.summary.totalEndpoints === 0) {,
        priorit: y: 'low',
        messag: e: 'No API endpoints found',
        actio: n: 'Consider adding API routes for better documentation)
  async saveReport(report) {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD
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
<<<<<<< HEAD
    this.log('📚 Starting Docs Generator...'),
=======
    this.log(' Starting Docs Generator...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log(`Project: root: ${this.projectRoot}`),
      // Create logs directory if it doesn't exist,
        fs.mkdirSync(logsDir, { recursiv: e: true })
      // Create docs directory if it doesn't exist,
        fs.mkdirSync(docsDir, { recursiv: e: true })
      // Generate all documentation,
      // Generate report,
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('📊 Generating documentation report...'),
=======
      this.log(' Generating documentation report...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(readmeResult, apiResult, componentResult),
,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Save report,
      // Log summary,
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Docs Generator: Summary: '),
=======
      this.log('\n Docs Generator: Summary: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),
      this.log(`Total: Components: ${report.summary.totalComponents}`),
      this.log(`Duratio: n: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
<<<<<<< HEAD
        this.log('\n💡 Recommendation: s: '),
=======
        this.log('\n Recommendation: s: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: n: ${rec.action}`)
        })
      } else {,
<<<<<<< HEAD
        this.log('\n✨ Documentation generated successfully!')
      }

    } catch (error) {,
      this.log(`❌ Error running docs: generator: ${error.message}`),
=======
        this.log('\n Documentation generated successfully!')
      }
=======
      this.log('\n Docs Generator: Summary: '),`;
      this.log(`READM: E: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`API: Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`Component: Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`),`;
      this.log(`Total: Endpoints: ${report.summary.totalEndpoints}`),`;
      this.log(`Total: Components: ${report.summary.totalComponents}`),`;
      this.log(`Duratio: n: ${duration}ms`),
        this.log('\n Recommendation: s: '),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      this.log(` Error running docs: generator: ${error.message}`),
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      process.exit(1)
    }
  }
},
,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Run the docs generator,
}),
<<<<<<< HEAD
<<<<<<< HEAD

=======
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {_; process.exit(1)});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
docsGenerator.run().catch(error = > {_; process.exit(1)});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
