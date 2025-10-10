// Accessibility enhancer utility functions

export interface AccessibilityEnhancement {
  type: 'keyboard' | 'screenreader' | 'visual' | 'motor';
  element: string;
  enhancement: string;
  applied: boolean;
}

export const enhanceAccessibility = (): AccessibilityEnhancement[] => {
  const enhancements: AccessibilityEnhancement[] = [];

  // Add skip links
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  enhancements.push({
    type: 'keyboard',
    element: 'body',
    enhancement: 'Added skip link for keyboard navigation',
    applied: true
  });

  // Enhance form controls
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${index}`);
        if (!label.id) {
          label.id = `label-${index}`;
        }
      }
    }
    
    if (input.hasAttribute('required')) {
      input.setAttribute('aria-required', 'true');
    }
    
    if (input.hasAttribute('invalid')) {
      input.setAttribute('aria-invalid', 'true');
    }
  });

  enhancements.push({
    type: 'screenreader',
    element: 'form controls',
    enhancement: 'Enhanced form controls with ARIA attributes',
    applied: true
  });

  // Add focus indicators
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6 !important;
      outline-offset: 2px !important;
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
    
    .focus\\:not-sr-only:focus {
      position: static;
      width: auto;
      height: auto;
      padding: 0.5rem;
      margin: 0;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  `;
  document.head.appendChild(style);

  enhancements.push({
    type: 'visual',
    element: 'all focusable elements',
    enhancement: 'Added visible focus indicators',
    applied: true
  });

  // Enhance images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      img.alt = `Image ${index + 1}`;
      img.setAttribute('aria-hidden', 'true');
    }
  });

  enhancements.push({
    type: 'screenreader',
    element: 'images',
    enhancement: 'Added alt text to images without descriptions',
    applied: true
  });

  // Add landmark roles
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('role', 'main');
  }

  const nav = document.querySelector('nav');
  if (nav) {
    nav.setAttribute('role', 'navigation');
  }

  const header = document.querySelector('header');
  if (header) {
    header.setAttribute('role', 'banner');
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.setAttribute('role', 'contentinfo');
  }

  enhancements.push({
    type: 'screenreader',
    element: 'landmarks',
    enhancement: 'Added landmark roles for better navigation',
    applied: true
  });

  // Enhance buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button, index) => {
    if (!button.getAttribute('type')) {
      button.setAttribute('type', 'button');
    }
    
    if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', `Button ${index + 1}`);
    }
  });

  enhancements.push({
    type: 'screenreader',
    element: 'buttons',
    enhancement: 'Enhanced button accessibility',
    applied: true
  });

  // Add live regions for dynamic content
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'live-region';
  document.body.appendChild(liveRegion);

  enhancements.push({
    type: 'screenreader',
    element: 'dynamic content',
    enhancement: 'Added live region for dynamic content announcements',
    applied: true
  });

  return enhancements;
};

export const announceToScreenReader = (message: string): void => {
  const liveRegion = document.getElementById('live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
  }
};

export const enhanceKeyboardNavigation = (): void => {
  // Add keyboard event listeners for common patterns
  document.addEventListener('keydown', (event) => {
    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
      openDropdowns.forEach(dropdown => {
        (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
      });
    }
    
    // Enter key to activate buttons
    if (event.key === 'Enter' && event.target instanceof HTMLElement) {
      if (event.target.tagName === 'BUTTON' || event.target.getAttribute('role') === 'button') {
        event.target.click();
      }
    }
  });
};

export const generateAccessibilityEnhancementReport = (): string => {
  const enhancements = enhanceAccessibility();
  
  let reportText = `Accessibility Enhancement Report\n`;
  reportText += `==============================\n\n`;
  reportText += `Enhancements Applied: ${enhancements.length}\n\n`;
  
  enhancements.forEach((enhancement, index) => {
    reportText += `${index + 1}. [${enhancement.type.toUpperCase()}] ${enhancement.element}\n`;
    reportText += `   Enhancement: ${enhancement.enhancement}\n`;
    reportText += `   Applied: ${enhancement.applied ? 'Yes' : 'No'}\n\n`;
  });
  
  return reportText;
};