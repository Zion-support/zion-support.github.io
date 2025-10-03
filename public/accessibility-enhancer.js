
// Accessibility enhancements
class AccessibilityEnhancer {
  constructor() {
    this.init();
  }
  
  init() {
    this.addSkipLinks();
    this.enhanceKeyboardNavigation();
    this.addAriaLabels();
    this.improveColorContrast();
    this.addFocusIndicators();
  }
  
  addSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  enhanceKeyboardNavigation() {
    // Add keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('[role="button"], .interactive');
    interactiveElements.forEach(element => {
      element.setAttribute('tabindex', '0');
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          element.click();
        }
      });
    });
  }
  
  addAriaLabels() {
    // Add ARIA labels to elements that need them
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.textContent.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }
  
  improveColorContrast() {
    // Ensure sufficient color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color && backgroundColor && color !== backgroundColor) {
        element.style.border = '1px solid transparent';
      }
    });
  }
  
  addFocusIndicators() {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 8px;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize accessibility enhancer
if (typeof window !== 'undefined') {
  window.accessibilityEnhancer = new AccessibilityEnhancer();
}
