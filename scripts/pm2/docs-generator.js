#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class DocumentationGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/docs-generator.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/docs-report.json');
    this.startTime = Date.now();
    
    this.config = {
      autoGenerate: process.env.AUTO_GENERATE === 'true',
      updateReadme: process.env.UPDATE_README === 'true',
      apiDocs: process.env.API_DOCS === 'true',
      componentDocs: process.env.COMPONENT_DOCS === 'true'
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async generateComponentDocumentation() {
    this.log('📝 Generating component documentation...');
    
    const components = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      this.scanForComponents(srcDir, components);
    }
    
    return components;
  }

  scanForComponents(dir, components) {
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanForComponents(fullPath, components);
        } else if (this.isComponentFile(fullPath)) {
          components.push(this.analyzeComponent(fullPath));
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
  }

  isComponentFile(filePath) {
    const componentExtensions = ['.jsx', '.tsx', '.vue'];
    return componentExtensions.some(ext => filePath.endsWith(ext));
  }

  analyzeComponent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath, path.extname(filePath));
      
      return {
        name: fileName,
        path: filePath.replace(this.projectRoot, ''),
        size: fs.statSync(filePath).size,
        lines: content.split('\n').length,
        hasProps: content.includes('props') || content.includes('Props'),
        hasState: content.includes('useState') || content.includes('useReducer'),
        hasEffects: content.includes('useEffect') || content.includes('useLayoutEffect'),
        hasHooks: content.includes('use') && content.includes('('),
        imports: this.extractImports(content)
      };
    } catch (error) {
      this.log(`Error analyzing component ${filePath}: ${error.message}`, 'ERROR');
      return { name: path.basename(filePath), error: error.message };
    }
  }

  extractImports(content) {
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
    
    return imports;
  }

  async generateReport(components) {
    this.log('📊 Generating documentation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      components: components,
      summary: {
        totalComponents: components.length,
        totalLines: components.reduce((sum, comp) => sum + (comp.lines || 0), 0),
        totalSize: components.reduce((sum, comp) => sum + (comp.size || 0), 0)
      }
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Documentation report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting Documentation Generator...');
    
    try {
      // 1. Generate component documentation
      const components = await this.generateComponentDocumentation();
      
      // 2. Generate comprehensive report
      const report = await this.generateReport(components);
      
      // 3. Log summary
      this.log('\n📊 Documentation Generation Summary:');
      this.log(`Total components: ${components.length}`);
      this.log(`Total lines of code: ${report.summary.totalLines}`);
      this.log(`Total size: ${(report.summary.totalSize / 1024).toFixed(2)}KB`);
      
      this.log('✅ Documentation generation completed successfully!');
      
      return report;
      
    } catch (error) {
      this.log(`❌ Documentation generation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the documentation generator
if (require.main === module) {
  const generator = new DocumentationGenerator();
  generator.run().catch(error => {
    console.error('Documentation generator failed:', error);
    process.exit(1);
  });
}

module.exports = DocumentationGenerator;