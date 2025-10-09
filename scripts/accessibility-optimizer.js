#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Accessibility Optimizer for Zion Tech Group Website
 * Improves WCAG compliance and accessibility features
 */

class AccessibilityOptimizer {
  constructor() {
    this.optimizations = {
      ariaLabelsAdded: 0,
      semanticElementsFixed: 0,
      colorContrastImproved: 0,
      keyboardNavigationEnhanced: 0,
      filesProcessed: 0
    };
  }

  async optimize() {
    try {
      // Find all component files
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      // Generate accessibility report
      this.generateReport();
      
      } catch (error) {
      console.error('❌ Error during accessibility optimization:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Add ARIA labels
      content = this.addAriaLabels(content);
      
      // Fix semantic elements
      content = this.fixSemanticElements(content);
      
      // Improve color contrast
      content = this.improveColorContrast(content);
      
      // Enhance keyboard navigation
      content = this.enhanceKeyboardNavigation(content);
      
      // Add focus management
      content = this.addFocusManagement(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.optimizations.filesProcessed++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  addAriaLabels(content) {
    // Add aria-label to buttons without text
    const buttonPattern = /<button([^>]*?)>(\s*<[^>]+>\s*)?<\/button>/g;
    content = content.replace(buttonPattern, (match, attrs, icon) => {
      if (!attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
        this.optimizations.ariaLabelsAdded++;
        return match.replace('<button', '<button aria-label="Button"');
      }
      return match;
    });

    // Add aria-label to images without alt text
    const imgPattern = /<img([^>]*?)(?<!alt=)(?<!aria-label=)([^>]*?)>/g;
    content = content.replace(imgPattern, (match, attrs1, attrs2) => {
      this.optimizations.ariaLabelsAdded++;
      return match.replace('<img', '<img aria-label="Image"');
    });

    // Add aria-label to links without text
    const linkPattern = /<a([^>]*?)>(\s*<[^>]+>\s*)?<\/a>/g;
    content = content.replace(linkPattern, (match, attrs, icon) => {
      if (!attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
        this.optimizations.ariaLabelsAdded++;
        return match.replace('<a', '<a aria-label="Link"');
      }
      return match;
    });

    // Add role attributes
    const rolePatterns = [
      { pattern: /<nav([^>]*?)(?<!role=)/g, replacement: '<nav$1 role="navigation"' },
      { pattern: /<main([^>]*?)(?<!role=)/g, replacement: '<main$1 role="main"' },
      { pattern: /<footer([^>]*?)(?<!role=)/g, replacement: '<footer$1 role="contentinfo"' },
      { pattern: /<header([^>]*?)(?<!role=)/g, replacement: '<header$1 role="banner"' },
      { pattern: /<aside([^>]*?)(?<!role=)/g, replacement: '<aside$1 role="complementary"' }
    ];

    rolePatterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        this.optimizations.ariaLabelsAdded++;
      }
    });

    return content;
  }

  fixSemanticElements(content) {
    // Replace div with proper semantic elements where appropriate
    const semanticReplacements = [
      // Navigation
      { pattern: /<div([^>]*?)className="[^"]*nav[^"]*"([^>]*?)>/g, replacement: '<nav$1$2>' },
      { pattern: /<\/div>\s*<!--\s*nav\s*-->/g, replacement: '</nav>' },
      
      // Header
      { pattern: /<div([^>]*?)className="[^"]*header[^"]*"([^>]*?)>/g, replacement: '<header$1$2>' },
      { pattern: /<\/div>\s*<!--\s*header\s*-->/g, replacement: '</header>' },
      
      // Main content
      { pattern: /<div([^>]*?)className="[^"]*main[^"]*"([^>]*?)>/g, replacement: '<main$1$2>' },
      { pattern: /<\/div>\s*<!--\s*main\s*-->/g, replacement: '</main>' },
      
      // Footer
      { pattern: /<div([^>]*?)className="[^"]*footer[^"]*"([^>]*?)>/g, replacement: '<footer$1$2>' },
      { pattern: /<\/div>\s*<!--\s*footer\s*-->/g, replacement: '</footer>' },
      
      // Section
      { pattern: /<div([^>]*?)className="[^"]*section[^"]*"([^>]*?)>/g, replacement: '<section$1$2>' },
      { pattern: /<\/div>\s*<!--\s*section\s*-->/g, replacement: '</section>' },
      
      // Article
      { pattern: /<div([^>]*?)className="[^"]*article[^"]*"([^>]*?)>/g, replacement: '<article$1$2>' },
      { pattern: /<\/div>\s*<!--\s*article\s*-->/g, replacement: '</article>' }
    ];

    semanticReplacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        this.optimizations.semanticElementsFixed++;
      }
    });

    return content;
  }

  improveColorContrast(content) {
    // Improve color contrast by updating Tailwind classes
    const contrastImprovements = [
      // Improve text contrast
      { pattern: /text-gray-400/g, replacement: 'text-gray-600' },
      { pattern: /text-gray-500/g, replacement: 'text-gray-700' },
      { pattern: /text-gray-300/g, replacement: 'text-gray-500' },
      
      // Improve background contrast
      { pattern: /bg-gray-100/g, replacement: 'bg-gray-50' },
      { pattern: /bg-gray-200/g, replacement: 'bg-gray-100' },
      
      // Ensure sufficient contrast for interactive elements
      { pattern: /text-blue-400/g, replacement: 'text-blue-600' },
      { pattern: /text-green-400/g, replacement: 'text-green-600' },
      { pattern: /text-red-400/g, replacement: 'text-red-600' }
    ];

    contrastImprovements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        this.optimizations.colorContrastImproved++;
      }
    });

    return content;
  }

  enhanceKeyboardNavigation(content) {
    // Add keyboard navigation support
    const keyboardEnhancements = [
      // Add tabIndex to interactive elements
      { pattern: /<div([^>]*?)onClick/g, replacement: '<div$1tabIndex={0} onClick' },
      { pattern: /<span([^>]*?)onClick/g, replacement: '<span$1tabIndex={0} onClick' },
      
      // Add keyboard event handlers
      { pattern: /onClick=\{([^}]+)\}/g, replacement: 'onClick={$1} onKeyDown={(e) => e.key === \'Enter\' && $1(e)}' },
      
      // Add focus styles
      { pattern: /focus:outline-none/g, replacement: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' }
    ];

    keyboardEnhancements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        this.optimizations.keyboardNavigationEnhanced++;
      }
    });

    return content;
  }

  addFocusManagement(content) {
    // Add focus management utilities
    const focusManagementCode = `
// Focus management utility
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Skip to main content functionality
const skipToMain = () => {
  const main = document.querySelector('main');
  if (main) {
    focusElement(main);
  }
};
`;

    // Add focus management if not present
    if (!content.includes('focusElement') && content.includes('export')) {
      content = content.replace(/export/, `${focusManagementCode}\n\nexport`);
    }

    // Add skip to main content link
    if (!content.includes('skip-to-main') && content.includes('<body')) {
      const skipLink = `
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          onClick={(e) => { e.preventDefault(); skipToMain(); }}
        >
          Skip to main content
        </a>
      `;
      content = content.replace('<body', `${skipLink}\n<body`);
    }

    return content;
  }

  generateReport() {
    );
    }
}

// Run the accessibility optimizer
const accessibilityOptimizer = new AccessibilityOptimizer();
accessibilityOptimizer.optimize().catch(console.error);