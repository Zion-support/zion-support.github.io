#!/usr/bin/env node

/**
 * Front Index Advertiser - Promotes new content on the homepage
 * Automatically updates the main page with new promotional content
 */

const fs = require('fs');
const path = require('path');

class FrontIndexAdvertiser {
  constructor() {
    this.mainPagePath = path.join(__dirname, '../app/page.tsx');
    this.componentsPath = path.join(__dirname, '../components');
    this.logFile = path.join(__dirname, '../automation/logs/front-advertiser.log');
  }

  async initialize() {
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      this.log('Front Index Advertiser initialized');
      return true;
    } catch (error) {
      console.error('Failed to initialize Front Index Advertiser:', error);
      return false;
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
    
    console.log(`[Front Advertiser] ${message}`);
  }

  async advertiseNewContent() {
    try {
      this.log('Starting new content advertisement process');

      // Check if main page exists
      if (!fs.existsSync(this.mainPagePath)) {
        this.log('Main page not found, skipping advertisement');
        return false;
      }

      // Read current main page content
      let mainPageContent = fs.readFileSync(this.mainPagePath, 'utf8');
      
      // Check for new promotional components
      const newComponents = this.findNewPromotionalComponents();
      
      if (newComponents.length === 0) {
        this.log('No new promotional components found');
        return false;
      }

      this.log(`Found ${newComponents.length} new promotional components: ${newComponents.join(', ')}`);

      // Add new components to main page
      const updatedContent = this.integrateNewComponents(mainPageContent, newComponents);
      
      if (updatedContent !== mainPageContent) {
        // Backup original content
        const backupPath = `${this.mainPagePath}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, mainPageContent);
        this.log(`Created backup: ${backupPath}`);

        // Write updated content
        fs.writeFileSync(this.mainPagePath, updatedContent);
        this.log('Successfully updated main page with new promotional content');
        
        return true;
      } else {
        this.log('No changes needed to main page');
        return false;
      }

    } catch (error) {
      this.log(`Error during content advertisement: ${error.message}`);
      return false;
    }
  }

  findNewPromotionalComponents() {
    const newComponents = [];
    
    // Look for AI 2027 promotional components
    const ai2027Components = [
      'AI2027UltimateBreakthroughBanner',
      'AI2027ContentShowcaseBanner'
    ];

    for (const component of ai2027Components) {
      const componentPath = path.join(this.componentsPath, `${component}.tsx`);
      if (fs.existsSync(componentPath)) {
        newComponents.push(component);
      }
    }

    return newComponents;
  }

  integrateNewComponents(content, newComponents) {
    let updatedContent = content;

    // Add imports for new components
    for (const component of newComponents) {
      const importStatement = `import ${component} from '../components/${component}';`;
      
      // Check if import already exists
      if (!updatedContent.includes(`import ${component} from`)) {
        // Find the last import statement and add after it
        const lastImportIndex = updatedContent.lastIndexOf('import ');
        const nextLineIndex = updatedContent.indexOf('\n', lastImportIndex) + 1;
        
        updatedContent = updatedContent.slice(0, nextLineIndex) + 
                        importStatement + '\n' + 
                        updatedContent.slice(nextLineIndex);
        
        this.log(`Added import for ${component}`);
      }
    }

    // Add component usage in the JSX
    for (const component of newComponents) {
      const componentUsage = `        {/* ${component} - NEW CONTENT */}\n        <${component} />\n`;
      
      // Check if component is already being used
      if (!updatedContent.includes(`<${component} />`)) {
        // Add after the opening div
        const divIndex = updatedContent.indexOf("<div className='min-h-screen bg-white'>");
        const nextLineIndex = updatedContent.indexOf('\n', divIndex) + 1;
        
        updatedContent = updatedContent.slice(0, nextLineIndex) + 
                        componentUsage + 
                        updatedContent.slice(nextLineIndex);
        
        this.log(`Added ${component} to main page layout`);
      }
    }

    return updatedContent;
  }

  async generateContentReport() {
    try {
      this.log('Generating content advertisement report');

      const report = {
        timestamp: new Date().toISOString(),
        newComponents: this.findNewPromotionalComponents(),
        mainPageExists: fs.existsSync(this.mainPagePath),
        componentsDirectory: this.componentsPath,
        status: 'active'
      };

      const reportPath = path.join(__dirname, '../automation/logs/front-advertiser-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Content report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Error generating content report: ${error.message}`);
      return null;
    }
  }

  async run() {
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        return false;
      }

      // Advertise new content
      const advertised = await this.advertiseNewContent();
      
      // Generate report
      await this.generateContentReport();

      this.log(`Front advertisement process completed. New content advertised: ${advertised}`);
      return advertised;

    } catch (error) {
      this.log(`Front advertisement process failed: ${error.message}`);
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const advertiser = new FrontIndexAdvertiser();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'advertise':
      advertiser.run().then(success => {
        process.exit(success ? 0 : 1);
      });
      break;
      
    case 'report':
      advertiser.generateContentReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      });
      break;
      
    default:
      console.log('Usage: node front-index-advertiser.cjs [advertise|report]');
      process.exit(1);
  }
}

module.exports = FrontIndexAdvertiser;