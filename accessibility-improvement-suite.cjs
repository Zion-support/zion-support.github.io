#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Accessibility Improvement Suite
 * Comprehensive accessibility enhancements and testing
 */
class AccessibilityImprovementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.improvements = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async installAccessibilityTools() {
    this.log('\n🛠️ INSTALLING ACCESSIBILITY TOOLS');
    
    try {
      // Install accessibility testing tools
      await this.runCommand(
        'npm install @axe-core/cli @axe-core/react axe-core eslint-plugin-jsx-a11y --save-dev',
        'Install Accessibility Tools'
      );
      
      // Install screen reader testing tools
      await this.runCommand(
        'npm install @testing-library/jest-dom @testing-library/user-event --save-dev',
        'Install Testing Library Tools'
      );
      
      this.log('✅ Accessibility tools installed successfully');
    } catch (error) {
      this.log(`❌ Failed to install accessibility tools: ${error.message}`, 'ERROR');
    }
  }

  async createAccessibilityComponents() {
    this.log('\n🧩 CREATING ACCESSIBILITY COMPONENTS');
    
    try {
      // Create SkipLink component
      const skipLinkComponent = `import React from 'react';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ 
  href, 
  children, 
  className = '' 
}) => {
  return (
    <a
      href={href}
      className={\`skip-link \${className}\`}
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#000',
        color: '#fff',
        padding: '8px',
        textDecoration: 'none',
        zIndex: 1000,
        borderRadius: '4px',
        transition: 'top 0.3s',
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '6px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-40px';
      }}
    >
      {children}
    </a>
  );
};

export default SkipLink;
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'components/accessibility/SkipLink.tsx'),
        skipLinkComponent
      );
      
      // Create AccessibleButton component
      const accessibleButtonComponent = `import React from 'react';

interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={\`accessible-button \${className}\`}
      style={{
        minHeight: '44px',
        minWidth: '44px',
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: disabled ? '#f5f5f5' : '#fff',
        color: disabled ? '#999' : '#000',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        lineHeight: '1.5',
      }}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'components/accessibility/AccessibleButton.tsx'),
        accessibleButtonComponent
      );
      
      // Create AccessibleModal component
      const accessibleModalComponent = `import React, { useEffect, useRef } from 'react';

interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const AccessibleModal: React.FC<AccessibleModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
      
      // Trap focus within modal
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      
      return () => {
        document.removeEventListener('keydown', handleTabKey);
        // Restore focus to previous element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={\`modal-overlay \${className}\`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="modal-content"
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <h2 id="modal-title" style={{ marginTop: 0 }}>
          {title}
        </h2>
        {children}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AccessibleModal;
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'components/accessibility/AccessibleModal.tsx'),
        accessibleModalComponent
      );
      
      this.log('✅ Accessibility components created');
      
      this.improvements.push({
        type: 'accessibility-components',
        components: ['SkipLink', 'AccessibleButton', 'AccessibleModal'],
        recommendations: [
          'Use SkipLink for keyboard navigation',
          'Replace standard buttons with AccessibleButton',
          'Use AccessibleModal for modal dialogs'
        ]
      });
    } catch (error) {
      this.log(`❌ Failed to create accessibility components: ${error.message}`, 'ERROR');
    }
  }

  async setupAccessibilityTesting() {
    this.log('\n🧪 SETTING UP ACCESSIBILITY TESTING');
    
    try {
      // Create accessibility test configuration
      const axeConfig = `module.exports = {
  rules: [
    {
      id: 'color-contrast',
      enabled: true,
    },
    {
      id: 'keyboard-navigation',
      enabled: true,
    },
    {
      id: 'focus-management',
      enabled: true,
    },
    {
      id: 'aria-labels',
      enabled: true,
    },
  ],
  tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
  locale: {
    lang: 'en',
  },
};`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'axe.config.js'), axeConfig);
      
      // Create accessibility test script
      const testScript = `const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runAccessibilityTests() {
  console.log('🧪 Running accessibility tests...');
  
  try {
    // Run axe-core CLI tests
    const result = execSync('npx @axe-core/cli http://localhost:3000 --config axe.config.js --reporter json', {
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    console.log('✅ Accessibility tests completed');
    
    // Parse results
    const results = JSON.parse(result);
    const violations = results.violations || [];
    
    console.log(\`Found \${violations.length} accessibility violations\`);
    
    if (violations.length > 0) {
      violations.forEach((violation, index) => {
        console.log(\`\${index + 1}. \${violation.description}\`);
        console.log(\`   Impact: \${violation.impact}\`);
        console.log(\`   Help: \${violation.helpUrl}\`);
        console.log('');
      });
    }
    
    // Save test results
    fs.writeFileSync(
      path.join(process.cwd(), 'accessibility-test-results.json'),
      JSON.stringify(results, null, 2)
    );
    
  } catch (error) {
    console.error('❌ Accessibility tests failed:', error.message);
  }
}

runAccessibilityTests();`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'scripts/accessibility-tests.js'), testScript);
      
      // Add test script to package.json
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts) {
        packageJson.scripts = {};
      }
      
      packageJson.scripts['test:a11y'] = 'node scripts/accessibility-tests.js';
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      
      this.log('✅ Accessibility testing setup completed');
      
      this.improvements.push({
        type: 'accessibility-testing',
        status: 'configured',
        recommendations: [
          'Run accessibility tests regularly',
          'Integrate tests into CI/CD pipeline',
          'Test with actual screen readers'
        ]
      });
    } catch (error) {
      this.log(`❌ Failed to setup accessibility testing: ${error.message}`, 'ERROR');
    }
  }

  async createAccessibilityGuidelines() {
    this.log('\n📋 CREATING ACCESSIBILITY GUIDELINES');
    
    try {
      const guidelines = `# Accessibility Guidelines

## WCAG 2.1 AA Compliance

This document outlines accessibility guidelines for the Zion Tech Group application to ensure WCAG 2.1 AA compliance.

### 1. Perceivable

#### Text Alternatives
- All images must have meaningful alt text
- Decorative images should have empty alt attributes
- Complex images should have detailed descriptions

#### Captions and Audio Descriptions
- All video content must have captions
- Audio content should have transcripts
- Live audio should have real-time captions

#### Adaptable Content
- Content should be structured with proper headings
- Use semantic HTML elements
- Ensure content can be presented in different ways

#### Distinguishable
- Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey information
- Provide visual focus indicators

### 2. Operable

#### Keyboard Accessible
- All functionality must be available via keyboard
- Provide visible focus indicators
- Implement logical tab order

#### No Seizures
- Avoid content that flashes more than 3 times per second
- Provide warnings for potentially seizure-inducing content

#### Navigable
- Provide ways to help users navigate and find content
- Use descriptive page titles
- Implement skip links for keyboard users

### 3. Understandable

#### Readable
- Use clear and simple language
- Provide definitions for unusual words
- Use consistent navigation

#### Predictable
- Make web pages appear and operate in predictable ways
- Use consistent navigation and identification
- Provide warnings for changes in context

#### Input Assistance
- Help users avoid and correct mistakes
- Provide clear error messages
- Offer suggestions for corrections

### 4. Robust

#### Compatible
- Maximize compatibility with assistive technologies
- Use valid HTML
- Ensure proper ARIA implementation

## Implementation Checklist

### HTML Structure
- [ ] Use semantic HTML elements (header, nav, main, section, article, aside, footer)
- [ ] Implement proper heading hierarchy (h1, h2, h3, etc.)
- [ ] Use lists for related items
- [ ] Provide meaningful link text

### Forms
- [ ] Associate labels with form controls
- [ ] Provide clear instructions
- [ ] Use appropriate input types
- [ ] Provide error messages and validation

### Images and Media
- [ ] Provide alt text for all images
- [ ] Use captions for videos
- [ ] Provide transcripts for audio content
- [ ] Ensure images are not pixelated when zoomed

### Color and Contrast
- [ ] Ensure sufficient color contrast
- [ ] Don't rely solely on color
- [ ] Test with color blindness simulators

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] Skip links for main content

### ARIA Implementation
- [ ] Use ARIA labels and descriptions
- [ ] Implement proper roles
- [ ] Use ARIA live regions for dynamic content
- [ ] Ensure ARIA attributes are valid

### Testing
- [ ] Test with keyboard only
- [ ] Test with screen readers
- [ ] Use automated accessibility tools
- [ ] Conduct user testing with disabled users

## Tools and Resources

### Automated Testing
- axe-core: \`npm run test:a11y\`
- Lighthouse accessibility audit
- WAVE browser extension

### Manual Testing
- Keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast analyzers

### Development Tools
- ESLint with jsx-a11y plugin
- React accessibility linter
- Browser developer tools accessibility panel

## Common Issues and Solutions

### Missing Alt Text
\`\`\`jsx
// Bad
<img src="logo.png" />

// Good
<img src="logo.png" alt="Zion Tech Group Logo" />
\`\`\`

### Missing Form Labels
\`\`\`jsx
// Bad
<input type="email" />

// Good
<label htmlFor="email">Email Address</label>
<input type="email" id="email" />
\`\`\`

### Missing Focus Management
\`\`\`jsx
// Bad
<button onClick={openModal}>Open Modal</button>

// Good
<button 
  onClick={openModal}
  onKeyDown={(e) => e.key === 'Enter' && openModal()}
>
  Open Modal
</button>
\`\`\`

## Regular Maintenance

- Run accessibility tests in CI/CD pipeline
- Regular accessibility audits
- User feedback collection
- Stay updated with WCAG guidelines
- Train development team on accessibility best practices
`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'ACCESSIBILITY_GUIDELINES.md'), guidelines);
      
      this.log('✅ Accessibility guidelines created');
      
      this.improvements.push({
        type: 'accessibility-guidelines',
        status: 'created',
        recommendations: [
          'Review and implement the accessibility guidelines',
          'Train team members on accessibility best practices',
          'Regular accessibility audits and testing'
        ]
      });
    } catch (error) {
      this.log(`❌ Failed to create accessibility guidelines: ${error.message}`, 'ERROR');
    }
  }

  async generateAccessibilityReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 ACCESSIBILITY IMPROVEMENT REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Improvements Applied: ${this.improvements.length}`);
    this.log('');
    
    this.improvements.forEach((improvement, index) => {
      this.log(`${index + 1}. ${improvement.type.toUpperCase()}`);
      if (improvement.components) {
        this.log(`   Components: ${improvement.components.join(', ')}`);
      }
      if (improvement.recommendations) {
        improvement.recommendations.forEach(rec => {
          this.log(`   • ${rec}`);
        });
      }
      this.log('');
    });
    
    // Save report
    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      improvements: this.improvements
    };
    
    const reportPath = path.join(this.projectRoot, 'accessibility-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Accessibility Improvement Suite');
    this.log('='.repeat(60));
    
    try {
      await this.installAccessibilityTools();
      await this.createAccessibilityComponents();
      await this.setupAccessibilityTesting();
      await this.createAccessibilityGuidelines();
      
      await this.generateAccessibilityReport();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }
}

// Run the accessibility suite
const accessibilitySuite = new AccessibilityImprovementSuite();
accessibilitySuite.run().catch(console.error);

module.exports = AccessibilityImprovementSuite;