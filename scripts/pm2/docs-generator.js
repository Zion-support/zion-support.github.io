<<<<<<< HEAD
}};
; async generateReadme() {; try {; this.log('📝 Generating README.md...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const readmeContent = `# ${packageJson.name}}
=======
};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
  async generateReadme() {;
    try {;
      this.log('📝 Generating README.md...');
;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
<<<<<<< HEAD
=======
      const readmeContent = `# ${packageJson.name};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
;
${packageJson.description || 'A modern web application built with Next.js'};
;
## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version};
<<<<<<< HEAD
- npm ${execSync('npm --version', { encodin:g:'utf8' }).trim()};
=======
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
;
### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;
<<<<<<< HEAD
Open [htt:p://localhos:t:3000](htt:p://localhos:t:3000) with your browser to see the result.;
=======
Open [http: //localhost:3000](http://localhost:3000) with your browser to see the result.;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
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
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**:\`${value}\``).join('\n')};
;
## 📦 Dependencies;
### Production Dependencies;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
### Development Dependencies;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
;
## 🔧 Configuration;
<<<<<<< HEAD
<<<<<<< HEAD
This project uses Next.js with the following:configuration:;
=======
This project uses Next.js with the following: configuration: null,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
This project uses Next.js with the following configuration: ;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
<<<<<<< HEAD
<<<<<<< HEAD
The project includes automated monitoring with:PM2:;
=======
The project includes automated monitoring with: PM2: null,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
The project includes automated monitoring with PM2:;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
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
<<<<<<< HEAD
<<<<<<< HEAD
        succes:s:true;
        messag:e:'README.md generated successfully';
      ;
    } catch (error) {;
      return {;
        succes:s:false;
        erro:r:error.message;
=======
        success: true;
        message: 'README.md generated successfully';
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      ;
};
=======
        succes: s: true,
        messag: e: 'README.md generated successfully'
      
    } catch (error) {;
      return {;
        succes: s: false,
        erro: r: error.message
      
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
  async generateApiDocs() {;
    try {;
      this.log('🔌 Generating API documentation...');
;
      const apiDocs = {;
<<<<<<< HEAD
<<<<<<< HEAD
        titl:e:'API Documentation';
        versio:n:'1.0.0';
        descriptio:n:'API endpoints and documentation';
        baseUr:l:'htt:p://localhos:t:3000';
        endpoint:s:[];
        generatedA:t:new Date().toISOString();
      ;
;
=======
        titl: e: 'API Documentation';
        versio: n: '1.0.0';
        descriptio: n: 'API endpoints and documentation';
        baseUr: l: 'htt: p://localhos: t:3000';
        endpoint: s: [];
        generatedA: t: new Date().toISOString();
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        title: 'API Documentation';
        version: '1.0.0';
        description: 'API endpoints and documentation';
        baseUrl: 'http://localhost:3000';
        endpoints: [];
        generatedAt: new Date().toISOString();
      ;
;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      // Scan for API routes;
      const pagesDir = path.join(this.projectRoot, 'pages/api');
      if (fs.existsSync(pagesDir)) {;
        const apiFiles = this.getApiFiles(pagesDir);
;
        apiFiles.forEach(file => {;
          const content = fs.readFileSync(file, 'utf8');
          const endpoint = this.extractApiEndpoint(file, content);
          if (endpoint) {;
            apiDocs.endpoints.push(endpoint)
          }
        })
      };
;
      const docsContent = `# API Documentation;
## Overview;
- **Base URL**:${apiDocs.baseUrl};
- **Version**:${apiDocs.version};
- **Generated**:${apiDocs.generatedAt};
;
## Endpoints;
${apiDocs.endpoints.map(endpoint => `;
### ${endpoint.method} ${endpoint.path};
;
${endpoint.description};
;
<<<<<<< HEAD
**Parameter:s:**;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}):${param.description}`).join('\n')};
;
**Respons:e:**;
=======
**Parameters: **;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}): ${param.description}`).join('\n')};
;
**Response: **;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
\`\`\`json;
${JSON.stringify(endpoint.response, null, 2)};
\`\`\`;
`).join('\n')};
;
## Error Handling;
<<<<<<< HEAD
<<<<<<< HEAD
All endpoints return appropriate HTTP status:codes:;
- \`200\`:Success;
- \`400\`:Bad Request;
- \`401\`:Unauthorized;
- \`404\`:Not Found;
- \`500\`:Internal Server Error;
=======
All endpoints return appropriate HTTP status: codes: null,
=======
All endpoints return appropriate HTTP status codes: ;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
- \`200\`: Success;
- \`400\`: Bad Request;
- \`401\`: Unauthorized;
- \`404\`: Not Found;
- \`500\`: Internal Server Error;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
## Rate Limiting;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.;
---;
Generated by Docs Generator on ${new Date().toISOString();
`;
;
      fs.writeFileSync('docs/API.md', docsContent);
;
      return {;
<<<<<<< HEAD
<<<<<<< HEAD
        succes:s:true;
        messag:e:'API documentation generated successfully';
        endpoint:s:apiDocs.endpoints.length;
      ;
    } catch (error) {;
      return {;
        succes:s:false;
        erro:r:error.message;
=======
        success: true;
        message: 'API documentation generated successfully';
        endpoints: apiDocs.endpoints.length;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      ;
};
=======
        succes: s: true,
        messag: e: 'API documentation generated successfully';
        endpoint: s: apiDocs.endpoints.length
      
    } catch (error) {;
      return {;
        succes: s: false,
        erro: r: error.message
      
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {;
          files.push(fullPath)
        }
      })
};
;
    scanDirectory(dir);
    return files
};
;
  extractApiEndpoint(filePath, content) {;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', '');
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/';
;
    // Extract HTTP method from content;
    const method = content.includes('export default') ? 'GET' :'POST';
;
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
    const description = commentMatch ? commentMatch[1].trim() :'API endpoint';
;
    return {;
<<<<<<< HEAD
<<<<<<< HEAD
      metho:d:method;
      pat:h:path;
      descriptio:n:description;
      parameter:s:[];
      respons:e:{;
        succes:s:true;
        dat:a:{;
=======
      method: method;
      path: path;
      description: description;
      parameters: [];
      response: {;
        success: true;
        data: {;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      };
};
=======
      metho: d: method,
      pat: h: path,
      descriptio: n: description,
      parameter: s: [];
      respons: e: {;
        succes: s: true,
        dat: a: {
      }
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
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
            componentDocs.push(componentInfo)
          }
        })
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
<<<<<<< HEAD
**File**:\`${component.file}\`;
**Prop:s:**;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}):${prop.description}`).join('\n')};
;
**Usag:e:**;
=======
**File**: \`${component.file}\`;
**Props: **;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')};
;
**Usage: **;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
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
<<<<<<< HEAD
<<<<<<< HEAD
        succes:s:true;
        messag:e:'Component documentation generated successfully';
        component:s:componentDocs.length;
      ;
    } catch (error) {;
      return {;
        succes:s:false;
        erro:r:error.message;
=======
        success: true;
        message: 'Component documentation generated successfully';
        components: componentDocs.length;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      ;
};
=======
        succes: s: true,
        messag: e: 'Component documentation generated successfully';
        component: s: componentDocs.length
      
    } catch (error) {;
      return {;
        succes: s: false,
        erro: r: error.message
      
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
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
          scanDirectory(fullPath)
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {;
          files.push(fullPath)
        }
      })
};
;
    scanDirectory(dir);
    return files
};
;
  extractComponentInfo(filePath, content) {;
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
;
    // Extract description from comments;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
    const description = commentMatch ? commentMatch[1].trim() :`${componentName} component`;
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
<<<<<<< HEAD
<<<<<<< HEAD
            nam:e:propMatch[1];
            typ:e:propMatch[2];
            descriptio:n:'Component prop';
=======
            name: propMatch[1];
            type: propMatch[2];
            description: 'Component prop';
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          });
        };
      });
};
;
    return {;
<<<<<<< HEAD
      nam:e:componentName;
      fil:e:filePath.replace(this.projectRoot + '/', '');
      descriptio:n:description;
      prop:s:props;
      usag:e:`<${componentName} />`;
=======
      name: componentName;
      file: filePath.replace(this.projectRoot + '/', '');
      description: description;
      props: props;
      usage: `<${componentName} />`;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
=======
            nam: e: propMatch[1];
            typ: e: propMatch[2];
            descriptio: n: 'Component prop'
          })
        }
      })
};
;
    return {;
      nam: e: componentName,
      fil: e: filePath.replace(this.projectRoot + '/', '');
      descriptio: n: description,
      prop: s: props,
      usag: e: `<${componentName} />`
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
  async generateReport(readmeResult, apiResult, componentResult) {;
    const report = {;
<<<<<<< HEAD
      timestam:p:new Date().toISOString();
      summar:y:{;
        readmeGenerate:d:readmeResult.success;
        apiDocsGenerate:d:apiResult.success;
        componentDocsGenerate:d:componentResult.success;
        totalEndpoint:s:apiResult.endpoints || 0;
        totalComponent:s:componentResult.components || 0;
      ;
<<<<<<< HEAD
      detail:s:{;
        readm:e:readmeResult;
        ap:i:apiResult;
        component:s:componentResult;
      ;
      recommendation:s:[];
=======
      timestamp: new Date().toISOString();
      summary: {;
        readmeGenerated: readmeResult.success;
        apiDocsGenerated: apiResult.success;
        componentDocsGenerated: componentResult.success;
        totalEndpoints: apiResult.endpoints || 0;
        totalComponents: componentResult.components || 0;
      ;
      details: {;
        readme: readmeResult;
        api: apiResult;
        components: componentResult;
      ;
      recommendations: [];
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    ;
;
    // Generate recommendations;
    if (!readmeResult.success) {;
      report.recommendations.push({;
<<<<<<< HEAD
        priorit:y:'high';
        messag:e:'README generation failed';
        actio:n:'Check file permissions and try again';
      });
=======
      detail: s: {;
        readm: e: readmeResult,
        ap: i: apiResult,
        component: s: componentResult,
      ;
      recommendation: s: [];
    // Generate recommendations;
    if (!readmeResult.success) {;
      report.recommendations.push({;
        priorit: y: 'high';
        messag: e: 'README generation failed';
        actio: n: 'Check file permissions and try again'
      })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        priority: 'high';
        message: 'README generation failed';
        action: 'Check file permissions and try again';
      });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
    if (!apiResult.success) {;
      report.recommendations.push({;
<<<<<<< HEAD
<<<<<<< HEAD
        priorit:y:'medium';
        messag:e:'API documentation generation failed';
        actio:n:'Check API route files and try again';
      });
=======
        priorit: y: 'medium';
        messag: e: 'API documentation generation failed';
        actio: n: 'Check API route files and try again'
      })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        priority: 'medium';
        message: 'API documentation generation failed';
        action: 'Check API route files and try again';
      });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
    if (!componentResult.success) {;
      report.recommendations.push({;
<<<<<<< HEAD
<<<<<<< HEAD
        priorit:y:'medium';
        messag:e:'Component documentation generation failed';
        actio:n:'Check component files and try again';
      });
=======
        priorit: y: 'medium';
        messag: e: 'Component documentation generation failed';
        actio: n: 'Check component files and try again'
      })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        priority: 'medium';
        message: 'Component documentation generation failed';
        action: 'Check component files and try again';
      });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
    if (report.summary.totalEndpoints === 0) {;
      report.recommendations.push({;
<<<<<<< HEAD
<<<<<<< HEAD
        priorit:y:'low';
        messag:e:'No API endpoints found';
        actio:n:'Consider adding API routes for better documentation';
      });
=======
        priorit: y: 'low';
        messag: e: 'No API endpoints found';
        actio: n: 'Consider adding API routes for better documentation'
      })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        priority: 'low';
        message: 'No API endpoints found';
        action: 'Consider adding API routes for better documentation';
      });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
    return report
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving:report:${error.message}`);
=======
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
=======
        fs.mkdirSync(reportDir, { recursiv: e: true })
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {;
      this.log(`Error saving: report: ${error.message}`)
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
  async run() {;
    this.log('📚 Starting Docs Generator...');
<<<<<<< HEAD
    this.log(`Project:root:${this.projectRoot}`);
=======
    this.log(`Project root: ${this.projectRoot}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true });
=======
        fs.mkdirSync(logsDir, { recursiv: e: true })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        fs.mkdirSync(logsDir, { recursive: true });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      };
;
      // Create docs directory if it doesn't exist;
      const docsDir = path.join(this.projectRoot, 'docs');
      if (!fs.existsSync(docsDir)) {;
<<<<<<< HEAD
<<<<<<< HEAD
        fs.mkdirSync(docsDir, { recursiv:e:true });
=======
        fs.mkdirSync(docsDir, { recursiv: e: true })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        fs.mkdirSync(docsDir, { recursive: true });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
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
<<<<<<< HEAD
      this.log('\n📊 Docs Generator:Summary:');
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`);
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`);
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`);
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`);
      this.log(`Total:Components:${report.summary.totalComponents}`);
      this.log(`Duratio:n:${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendation:s:');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
<<<<<<< HEAD
          this.log(`    Actio:n:${rec.action}`);
=======
      this.log('\n📊 Docs Generator Summary: ');
      this.log(`README: ${report.summary.readmeGenerated ? 'Generated' : 'Failed'}`);
      this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated' : 'Failed'}`);
      this.log(`Total Endpoints: ${report.summary.totalEndpoints}`);
      this.log(`Total Components: ${report.summary.totalComponents}`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
=======
          this.log(`    Actio: n: ${rec.action}`)
        })
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      } else {;
        this.log('\n✨ Documentation generated successfully!')
      }

    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log(`❌ Error running docs:generator:${error.message}`);
=======
      this.log(`❌ Error running docs generator: ${error.message}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      process.exit(1);
};
};
=======
      this.log(`❌ Error running docs: generator: ${error.message}`);
      process.exit(1)
}
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error => {;
<<<<<<< HEAD
  process.exit(1);
<<<<<<< HEAD
});
    };
  };
,;
  async generateReadme() {,;
    try {,;
      this.log('📝 Generating README.md...'),;
,;
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
      const readmeContent = `# ${packageJson.name};
,;
${packageJson.description || 'A modern web application built with Next.js'};
,;
## 🚀 Getting Started,;
### Prerequisites,;
- Node.js ${process.version};
- npm ${execSync('npm --version', { encodin:g:'utf8' }).trim()};
,;
### Installation,;
\`\`\`bash,;
npm install,;
\`\`\`,;
### Development,;
\`\`\`bash,;
npm run dev,;
\`\`\`,;
Open [htt:p://localhos:t:3000](htt:p://localhos:t:3000) with your browser to see the result.,;
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
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- **${key}**:\`${value}\``).join('\n')};
,;
## 📦 Dependencies,;
### Production Dependencies,;
${Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n')};
,;
### Development Dependencies,;
${Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n')};
,;
## 🔧 Configuration,;
This project uses Next.js with the following:configuration: ,;
- TypeScript support,;
- ESLint for code quality,;
- Prettier for code formatting,;
- PM2 for process management,;
## 📊 Monitoring,;
The project includes automated monitoring with:PM2:,;
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
Generated on ${new Date().toISOString()};
`,;
,;
      fs.writeFileSync('README.md', readmeContent),;
,;
      return {,;
        succes:s:true,;
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
,;
      const apiDocs = {,;
        titl:e:'API Documentation',;
        versio:n:'1.0.0',;
        descriptio:n:'API endpoints and documentation',;
        baseUr:l:'htt:p://localhos:t:3000',;
        endpoint:s:[],;
        generatedA:t:new Date().toISOString(),;
      };
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
            apiDocs.endpoints.push(endpoint),;
          };
        }),;
      };
,;
      const docsContent = `# API Documentation,;
## Overview,;
- **Base URL**:${apiDocs.baseUrl};
- **Version**:${apiDocs.version};
- **Generated**:${apiDocs.generatedAt};
,;
## Endpoints,;
${apiDocs.endpoints.map(endpoint => `,;
### ${endpoint.method} ${endpoint.path};
,;
${endpoint.description};
,;
**Parameter:s:**,;
${endpoint.parameters.map(param => `- \`${param.name}\` (${param.type}):${param.description}`).join('\n')};
,;
**Respons:e:**,;
\`\`\`json,;
${JSON.stringify(endpoint.response, null, 2)};
\`\`\`,;
`).join('\n')};
,;
## Error Handling,;
All endpoints return appropriate HTTP status:codes: ,;
- \`200\`:Success,;
- \`400\`:Bad Request,;
- \`401\`:Unauthorized,;
- \`404\`:Not Found,;
- \`500\`:Internal Server Error,;
## Rate Limiting,;
API requests are rate limited to prevent abuse. Please respect the rate limits and implement appropriate retry logic.,;
---,;
Generated by Docs Generator on ${new Date().toISOString()};
`,;
,;
      fs.writeFileSync('docs/API.md', docsContent),;
,;
      return {,;
        succes:s:true,;
        messag:e:'API documentation generated successfully',;
        endpoint:s:apiDocs.endpoints.length,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
      };
    };
  };
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
          scanDirectory(fullPath),;
        } else if (item.endsWith('.js') || item.endsWith('.ts')) {,;
          files.push(fullPath),;
        };
      }),;
    };
,;
    scanDirectory(dir),;
    return files,;
  };
,;
  extractApiEndpoint(filePath, content) {,;
    const relativePath = filePath.replace(this.projectRoot + '/pages/api', ''),;
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/',;
,;
    // Extract HTTP method from content,;
    const method = content.includes('export default') ? 'GET' :'POST',;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() :'API endpoint',;
,;
    return {,;
      metho:d:method,;
      pat:h:path,;
      descriptio:n:description,;
      parameter:s:[],;
      respons:e:{,;
        succes:s:true,;
        dat:a:{};
      };
    };
  };
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
            componentDocs.push(componentInfo),;
          };
        }),;
      };
,;
      const docsContent = `# Component Documentation,;
## Overview,;
This document describes all React components in the application.,;
## Components,;
${componentDocs.map(component => `,;
### ${component.name};
,;
${component.description};
,;
**File**:\`${component.file}\`,;
**Prop:s:**,;
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}):${prop.description}`).join('\n')};
,;
**Usag:e:**,;
\`\`\`jsx,;
${component.usage};
\`\`\`,;
`).join('\n')};
,;
---,;
Generated by Docs Generator on ${new Date().toISOString()};
`,;
,;
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),;
,;
      return {,;
        succes:s:true,;
        messag:e:'Component documentation generated successfully',;
        component:s:componentDocs.length,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
      };
    };
  };
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
          scanDirectory(fullPath),;
        } else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {,;
          files.push(fullPath),;
        };
      }),;
    };
,;
    scanDirectory(dir),;
    return files,;
  };
,;
  extractComponentInfo(filePath, content) {,;
    const fileName = path.basename(filePath, path.extname(filePath)),;
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1),;
,;
    // Extract description from comments,;
    const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//),;
    const description = commentMatch ? commentMatch[1].trim() :`${componentName} component`,;
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
            nam:e:propMatch[1],;
            typ:e:propMatch[2],;
            descriptio:n:'Component prop',;
          }),;
        };
      }),;
    };
,;
    return {,;
      nam:e:componentName,;
      fil:e:filePath.replace(this.projectRoot + '/', ''),;
      descriptio:n:description,;
      prop:s:props,;
      usag:e:`<${componentName} />`,;
    };
  };
,;
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
      recommendation:s:[],;
    };
,;
    // Generate recommendations,;
    if (!readmeResult.success) {,;
      report.recommendations.push({,;
        priorit:y:'high',;
        messag:e:'README generation failed',;
        actio:n:'Check file permissions and try again',;
      }),;
    };
,;
    if (!apiResult.success) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'API documentation generation failed',;
        actio:n:'Check API route files and try again',;
      }),;
    };
,;
    if (!componentResult.success) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'Component documentation generation failed',;
        actio:n:'Check component files and try again',;
      }),;
    };
,;
    if (report.summary.totalEndpoints === 0) {,;
      report.recommendations.push({,;
        priorit:y:'low',;
        messag:e:'No API endpoints found',;
        actio:n:'Consider adding API routes for better documentation',;
      }),;
    };
,;
    return report,;
  };
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
      this.log(`Error saving:report:${error.message}`),;
    };
  };
,;
  async run() {,;
    this.log('📚 Starting Docs Generator...'),;
    this.log(`Project:root:${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
,;
      // Create docs directory if it doesn't exist,;
      const docsDir = path.join(this.projectRoot, 'docs'),;
      if (!fs.existsSync(docsDir)) {,;
        fs.mkdirSync(docsDir, { recursiv:e:true }),;
      };
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
      this.log('\n📊 Docs Generator:Summary:'),;
      this.log(`READM:E:${report.summary.readmeGenerated ? 'Generated' :'Failed'}`),;
      this.log(`API:Docs:${report.summary.apiDocsGenerated ? 'Generated' :'Failed'}`),;
      this.log(`Component:Docs:${report.summary.componentDocsGenerated ? 'Generated' :'Failed'}`),;
      this.log(`Total:Endpoints:${report.summary.totalEndpoints}`),;
      this.log(`Total:Components:${report.summary.totalComponents}`),;
      this.log(`Duratio:n:${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation:s:'),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio:n:${rec.action}`),;
        }),;
      } else {,;
        this.log('\n✨ Documentation generated successfully!'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running docs:generator:${error.message}`),;
      process.exit(1),;
    };
  };
};
,;
// Run the docs generator,;
const docsGenerator = new DocsGenerator(),;
docsGenerator.run().catch(error => {,;
  process.exit(1),;
}),;
=======
  process.exit(1)
})
    }
  };,
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
${this.projectRoot}/;
├── pages/ # Next.js pages;
├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;
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
This project uses Next.js with the following configuration: null,
- TypeScript support;
- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;
The project includes automated monitoring with PM2: null,
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
; fs.writeFileSync('README.md', readmeContent);
; return {_; success: true, message: 'README.md generated successfully'}} catch (error) {_; return {; success: false, error: error.message}}};
; async generateApiDocs() {_; try {; this.log('🔌 Generating API documentation...');
; const apiDocs = {; title: 'API Documentation'; version: '1.0.0'; description: 'API endpoints and documentation'; baseUrl: 'http: //localhost: 3000'; endpoints: []; generatedAt: new Date().toISOString()};
; // Scan for API routes; const pagesDir = path.join(this.projectRoot, 'pages/api'); if (fs.existsSync(pagesDir)) {_; const apiFiles = this.getApiFiles(pagesDir);
; apiFiles.forEach(file = > {; const content = fs.readFileSync(file, _'utf8'); const endpoint = this.extractApiEndpoint(file, content); if (endpoint) {; apiDocs.endpoints.push(endpoint)}})};
; const docsContent = `# API Documentation;
## Overview;
- npm ${execSync('npm --version', { encodin: g: 'utf8' }).trim()};,
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
- **Base URL**: ${apiDocs.baseUrl};
- **Version**: ${apiDocs.version};
- **Generated**: ${apiDocs.generatedAt};
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
${JSON.stringify(endpoint.response, null, 2)};\`\`\`;
`).join('\n')};
;
## Error Handling;
All endpoints return appropriate HTTP status codes: null,
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
; return {_; success: true, message: 'API documentation generated successfully'; endpoints: apiDocs.endpoints.length}} catch (error) {_; return {; success: false, error: error.message}}};
; getApiFiles(dir) {_; const files = [];
; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') || item.endsWith('.ts')) {_; files.push(fullPath)}})};
; scanDirectory(dir); return files};
; extractApiEndpoint(filePath, content) {_; const relativePath = filePath.replace(this.projectRoot + '/pages/api', _''); const path = relativePath.replace(/\.(js|ts)$/, _'').replace(/\/index$/, _'') || '/';
; // Extract HTTP method from content; const method = content.includes('export default') ? 'GET': 'POST';
; // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): 'API endpoint';
; return {; method: method, path: path, description: description, parameters: []; response: {; success: true, data: {}}}};
; async generateComponentDocs() {_; try {; this.log('🧩 Generating component documentation...');
; const componentsDir = path.join(this.projectRoot, _'components'); const componentDocs = [];
; if (fs.existsSync(componentsDir)) {; const componentFiles = this.getComponentFiles(componentsDir);
; componentFiles.forEach(file = > {; const content = fs.readFileSync(file, _'utf8'); const componentInfo = this.extractComponentInfo(file, content); if (componentInfo) {; componentDocs.push(componentInfo)}})};
; const docsContent = `# Component Documentation;
## Overview;
This document describes all React components in the application.;
## Components;
${componentDocs.map(component = > `;,
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
### ${component.name};
;
${component.description};
;
**File**: \`${component.file}\`;
**Props: **;
${component.props.map(prop = > `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')};
;
**Usage: **;
\`\`\`jsx;
,
**File**: \`${component.file}\`,
**Prop: s: **,
${component.props.map(prop => `- \`${prop.name}\` (${prop.type}): ${prop.description}`).join('\n')},
,
**Usag: e: **,
\`\`\`jsx,
${component.usage};\`\`\`;
`).join('\n')};
;
---;
Generated by Docs Generator on ${new Date().toISOString()};
`;
; fs.writeFileSync('docs/COMPONENTS.md', docsContent);
; return {_; success: true, message: 'Component documentation generated successfully'; components: componentDocs.length}} catch (error) {_; return {; success: false, error: error.message}}};
; getComponentFiles(dir) {_; const files = [];
; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.jsx') || item.endsWith('.tsx')) {_; files.push(fullPath)}})};
; scanDirectory(dir); return files};
; extractComponentInfo(filePath, content) {_; const fileName = path.basename(filePath, path.extname(filePath)); const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
; // Extract description from comments; const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//); const description = commentMatch ? commentMatch[1].trim(): `${componentName} component`;
; // Extract props from interface or PropTypes; const props = []; const propMatch = content.match(/interface\s+\w+Props\s*{_([\s\S]*?)}/); if (propMatch) {_; const propLines = propMatch[1].split('\n'); propLines.forEach(line = > {; const propMatch = line.match(/(\w+)\s*: \s*(\w+)/); if (propMatch) {; props.push({; name: propMatch[1]; type: propMatch[2]; description: 'Component prop'})}})};
; return {_; name: componentName, file: filePath.replace(this.projectRoot + '/', _''); description: description, props: props, usage: `<${componentName} />`}};
; async generateReport(readmeResult, apiResult, componentResult) {_; const report = {; timestamp: new Date().toISOString(); summary: {; readmeGenerated: readmeResult.success; apiDocsGenerated: apiResult.success; componentDocsGenerated: componentResult.success; totalEndpoints: apiResult.endpoints || 0; totalComponents: componentResult.components || 0}; details: {_; readme: readmeResult, api: apiResult, components: componentResult}; recommendations: []};
; // Generate recommendations; if (!readmeResult.success) {_; report.recommendations.push({; priority: 'high'; message: 'README generation failed'; action: 'Check file permissions and try again'})};
; if (!apiResult.success) {_; report.recommendations.push({; priority: 'medium'; message: 'API documentation generation failed'; action: 'Check API route files and try again'})};
; if (!componentResult.success) {_; report.recommendations.push({; priority: 'medium'; message: 'Component documentation generation failed'; action: 'Check component files and try again'})};
; if (report.summary.totalEndpoints = = = 0) {_; report.recommendations.push({; priority: 'low'; message: 'No API endpoints found'; action: 'Consider adding API routes for better documentation'})};
; return report};
; async saveReport(report) {_; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true})};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {_; this.log(`Error saving report: ${error.message}`)}};
; async run() {_; this.log('📚 Starting Docs Generator...'); this.log(`Project root: ${this.projectRoot}`);
; try {_; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true})};
; // Create docs directory if it doesn't exist; const docsDir = path.join(this.projectRoot, 'docs'); if (!fs.existsSync(docsDir)) {_; fs.mkdirSync(docsDir, _{ recursive: true})};
; // Generate all documentation; const readmeResult = await this.generateReadme(); const apiResult = await this.generateApiDocs(); const componentResult = await this.generateComponentDocs();
; // Generate report; this.log('📊 Generating documentation report...'); const report = await this.generateReport(readmeResult, apiResult, componentResult);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Docs Generator Summary: '); this.log(`README: ${report.summary.readmeGenerated ? 'Generated': 'Failed'}`); this.log(`API Docs: ${report.summary.apiDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Component Docs: ${report.summary.componentDocsGenerated ? 'Generated': 'Failed'}`); this.log(`Total Endpoints: ${report.summary.totalEndpoints}`); this.log(`Total Components: ${report.summary.totalComponents}`); this.log(`Duration: ${duration}ms`);
; if (report.recommendations.length > 0) {_; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {_; this.log('\n✨ Documentation generated successfully!')}
} catch (error) {_; this.log(`❌ Error running docs generator: ${error.message}`); process.exit(1)}}};
;
// Run the docs generator;
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {; process.exit(1)});`,
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
const docsGenerator = new DocsGenerator();
docsGenerator.run().catch(error = > {_; process.exit(1)});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
});
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
