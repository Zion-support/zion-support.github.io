import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Accessibility audit script
class AccessibilityAuditor {
  constructor() {
    this.issues = [];
    this.score = 100;
    this.recommendations = [];
  }

  // Check for alt attributes on images
  checkImageAltText(content) {
    const imgRegex = /<img[^>]*>/g;
    const images = content.match(imgRegex) || [];
    
    images.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.addIssue('error', 'Images', `Image ${index + 1} missing alt attribute`, 'high');
      } else if (img.includes('alt=""')) {
        this.addIssue('warning', 'Images', `Image ${index + 1} has empty alt attribute`, 'medium');
      }
    });
  }

  // Check for heading hierarchy
  checkHeadingHierarchy(content) {
    const headingRegex = /<h([1-6])[^>]*>.*?<\/h[1-6]>/g;
    const headings = content.match(headingRegex) || [];
    const headingLevels = headings.map(h => parseInt(h.match(/<h([1-6])/)[1]));
    
    let previousLevel = 0;
    headingLevels.forEach((level, index) => {
      if (level > previousLevel + 1) {
        this.addIssue('warning', 'Headings', `Heading hierarchy skipped from h${previousLevel} to h${level}`, 'medium');
      }
      previousLevel = level;
    });
  }

  // Check for form labels
  checkFormLabels(content) {
    const inputRegex = /<input[^>]*>/g;
    const inputs = content.match(inputRegex) || [];
    
    inputs.forEach((input, index) => {
      if (input.includes('type="text"') || input.includes('type="email"') || input.includes('type="password"')) {
        if (!input.includes('aria-label=') && !input.includes('aria-labelledby=')) {
          // Check if there's a label element nearby
          const hasLabel = content.includes(`for="input-${index}"`) || content.includes(`<label`);
          if (!hasLabel) {
            this.addIssue('error', 'Forms', `Input ${index + 1} missing label or aria-label`, 'high');
          }
        }
      }
    });
  }

  // Check for color contrast (basic check)
  checkColorContrast(content) {
    const colorRegex = /color:\s*#([0-9a-fA-F]{6})/g;
    const colors = content.match(colorRegex) || [];
    
    // Basic contrast check for common problematic colors
    const problematicColors = ['#000000', '#ffffff', '#cccccc', '#999999'];
    colors.forEach(color => {
      if (problematicColors.some(problematic => color.toLowerCase().includes(problematic))) {
        this.addIssue('warning', 'Color Contrast', `Potentially low contrast color: ${color}`, 'medium');
      }
    });
  }

  // Check for keyboard navigation
  checkKeyboardNavigation(content) {
    const interactiveElements = ['<button', '<a', '<input', '<select', '<textarea'];
    
    interactiveElements.forEach(element => {
      const regex = new RegExp(element + '[^>]*>', 'g');
      const elements = content.match(regex) || [];
      
      elements.forEach((el, index) => {
        if (!el.includes('tabindex=') && !el.includes('href=') && !el.includes('type=')) {
          this.addIssue('warning', 'Keyboard Navigation', `Interactive element may not be keyboard accessible`, 'medium');
        }
      });
    });
  }

  // Check for ARIA attributes
  checkARIA(content) {
    const ariaRegex = /aria-([a-z-]+)=/g;
    const ariaAttributes = content.match(ariaRegex) || [];
    
    // Check for proper ARIA usage
    if (content.includes('role=') && !content.includes('aria-label=') && !content.includes('aria-labelledby=')) {
      this.addIssue('warning', 'ARIA', 'Elements with role should have accessible names', 'medium');
    }
  }

  // Check for focus management
  checkFocusManagement(content) {
    if (content.includes('onClick=') && !content.includes('onKeyDown=') && !content.includes('onKeyPress=')) {
      this.addIssue('warning', 'Focus Management', 'Click handlers should have keyboard equivalents', 'medium');
    }
  }

  // Add issue to the list
  addIssue(type, category, message, impact) {
    this.issues.push({
      type,
      category,
      message,
      impact,
      timestamp: new Date().toISOString()
    });
    
    // Deduct points based on impact
    if (impact === 'high') this.score -= 10;
    else if (impact === 'medium') this.score -= 5;
    else if (impact === 'low') this.score -= 2;
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [
      {
        category: 'Images',
        message: 'Add descriptive alt text to all images',
        priority: 'high'
      },
      {
        category: 'Headings',
        message: 'Maintain proper heading hierarchy (h1 → h2 → h3)',
        priority: 'medium'
      },
      {
        category: 'Forms',
        message: 'Associate labels with form inputs',
        priority: 'high'
      },
      {
        category: 'Color',
        message: 'Ensure sufficient color contrast (4.5:1 for normal text)',
        priority: 'high'
      },
      {
        category: 'Keyboard',
        message: 'Ensure all interactive elements are keyboard accessible',
        priority: 'high'
      },
      {
        category: 'ARIA',
        message: 'Use ARIA attributes to enhance accessibility',
        priority: 'medium'
      },
      {
        category: 'Focus',
        message: 'Provide visible focus indicators',
        priority: 'medium'
      },
      {
        category: 'Testing',
        message: 'Test with screen readers and keyboard navigation',
        priority: 'high'
      }
    ];

    this.recommendations = recommendations;
  }

  // Audit a file
  auditFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      console.log(`🔍 Auditing: ${path.basename(filePath)}`);
      
      this.checkImageAltText(content);
      this.checkHeadingHierarchy(content);
      this.checkFormLabels(content);
      this.checkColorContrast(content);
      this.checkKeyboardNavigation(content);
      this.checkARIA(content);
      this.checkFocusManagement(content);
      
    } catch (error) {
      console.error(`❌ Error reading file ${filePath}:`, error.message);
    }
  }

  // Audit all files in directory
  auditDirectory(dirPath) {
    const files = this.getAllFiles(dirPath);
    const reactFiles = files.filter(file => 
      file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')
    );

    console.log(`📁 Found ${reactFiles.length} files to audit\n`);

    reactFiles.forEach(file => {
      this.auditFile(file);
    });
  }

  // Get all files recursively
  getAllFiles(dir) {
    let files = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(this.getAllFiles(fullPath));
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    });

    return files;
  }

  // Generate report
  generateReport() {
    this.generateRecommendations();

    const report = {
      timestamp: new Date().toISOString(),
      score: Math.max(0, this.score),
      totalIssues: this.issues.length,
      issues: this.issues,
      recommendations: this.recommendations,
      summary: {
        errors: this.issues.filter(i => i.type === 'error').length,
        warnings: this.issues.filter(i => i.type === 'warning').length,
        info: this.issues.filter(i => i.type === 'info').length
      }
    };

    const reportPath = path.join(__dirname, '../accessibility-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('\n📊 Accessibility Audit Results:');
    console.log(`   Score: ${report.score}/100`);
    console.log(`   Total Issues: ${report.totalIssues}`);
    console.log(`   Errors: ${report.summary.errors}`);
    console.log(`   Warnings: ${report.summary.warnings}`);
    console.log(`   Info: ${report.summary.info}`);

    console.log('\n🎯 Issues Found:');
    this.issues.forEach((issue, index) => {
      const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : '💡';
      console.log(`   ${index + 1}. ${icon} [${issue.category}] ${issue.message}`);
    });

    console.log('\n💡 Recommendations:');
    this.recommendations.forEach((rec, index) => {
      const priority = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
      console.log(`   ${index + 1}. ${priority} [${rec.category}] ${rec.message}`);
    });

    console.log(`\n📄 Full report saved to: ${reportPath}`);

    return report;
  }

  // Run the audit
  run() {
    console.log('♿ Starting Accessibility Audit...\n');
    
    const srcPath = path.join(__dirname, '../src');
    const appPath = path.join(__dirname, '../app');
    
    if (fs.existsSync(srcPath)) {
      this.auditDirectory(srcPath);
    }
    
    if (fs.existsSync(appPath)) {
      this.auditDirectory(appPath);
    }
    
    const report = this.generateReport();
    
    console.log('\n✅ Accessibility audit complete!');
    
    return report;
  }
}

// Run the accessibility auditor
const auditor = new AccessibilityAuditor();
auditor.run();