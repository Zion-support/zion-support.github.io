/**
 * Advanced accessibility utilities for enhanced user experience
 */

export interface AccessibilityConfig {
  enableScreenReader: boolean,
  enableKeyboardNavigation: boolean,
  enableHighContrast: boolean,
  enableReducedMotion: boolean,
  fontSize: 'small' | 'medium' | 'large' | 'extra-large',
  colorScheme: 'light' | 'dark' | 'auto',
}

export class AccessibilityManager {
  private config: AccessibilityConfig,
  private announcementElement: HTMLElement | null = null,

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableScreenReader: true,
      enableKeyboardNavigation: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      fontSize: 'medium',
      colorScheme: 'auto',
      ...config,
    };

    if (typeof window !== 'undefined') {
      this.initializeAccessibility();
    }
  }

  private initializeAccessibility() {
    this.createAnnouncementElement();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupColorScheme();
    this.setupMotionPreferences();
  }

  private createAnnouncementElement() {
    if (typeof document !== 'undefined') {
      this.announcementElement = document.createElement('div');
      this.announcementElement.setAttribute('aria-live', 'polite');
      this.announcementElement.setAttribute('aria-atomic', 'true');
      this.announcementElement.style.position = 'absolute';
      this.announcementElement.style.left = '-10000px';
      this.announcementElement.style.width = '1px';
      this.announcementElement.style.height = '1px';
      this.announcementElement.style.overflow = 'hidden';
      document.body.appendChild(this.announcementElement);
    }
  }

  private setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) : any => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey === false && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          this.closeModal(modal as HTMLElement);
        }
      }
    });
  }

  private setupFocusManagement() {
    // Focus trap for modals
    document.addEventListener('focusin', (event) : any => {
      const modal = (event.target as Element).closest('[role="dialog"]');
      if (modal && !modal.hasAttribute('aria-hidden')) {
        this.trapFocus(modal as HTMLElement);
      }
    });
  }

  private setupColorScheme() {
    if (this.config.colorScheme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'),
      this.applyColorScheme(mediaQuery.matches ? 'dark' : 'light');
      
      mediaQuery.addEventListener('change', (e) : any => {
        this.applyColorScheme(e.matches ? 'dark' : 'light');
      });
    } else {
      this.applyColorScheme(this.config.colorScheme);
    }
  }

  private setupMotionPreferences() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)'),
    this.applyMotionPreferences(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', (e) : any => {
      this.applyMotionPreferences(e.matches);
    });
  }

  private applyColorScheme(scheme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-color-scheme', scheme);
    document.documentElement.classList.toggle('dark', scheme === 'dark');
  }

  private applyMotionPreferences(reduced: boolean) {
    document.documentElement.classList.toggle('reduced-motion', reduced);
    if (reduced) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }
  }

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    if (this.announcementElement) {
      this.announcementElement.setAttribute('aria-live', priority);
      this.announcementElement.textContent = message;
      
      // Clear the message after announcement
      setTimeout(() => {
        if (this.announcementElement) {
          this.announcementElement.textContent = '';
        }
      }, 1000);
    }
  }

  public trapFocus(element: HTMLElement) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    element.addEventListener('keydown', (event) : any => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    });
  }

  public closeModal(modal: HTMLElement) {
    modal.setAttribute('aria-hidden', 'true');
    const trigger = document.querySelector(`[aria-controls="${modal.id}"]`);
    if (trigger) {
      (trigger as HTMLElement).focus();
    }
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>) {
    this.config = { ...this.config, ...newConfig };
    
    if (typeof window !== 'undefined') {
      this.setupColorScheme();
      this.setupMotionPreferences();
    }
  }

  public getConfig(): AccessibilityConfig {
    return { ...this.config };
  }

  public cleanup() {
    if (this.announcementElement && this.announcementElement.parentNode) {
      this.announcementElement.parentNode.removeChild(this.announcementElement);
    }
  }
}

export const accessibilityUtils = {
  // Generate accessible color contrast
  generateColorContrast: (foreground: string, background: string): number : any => {
    const getLuminance = (color: string): number : any => {
      const rgb = color.match(/\d+/g),
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    
    return (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
  },

  // Generate accessible focus styles
  generateFocusStyles: (color: string = '#0066cc') => ({
    outline: `2px solid ${color}`,
    outlineOffset: '2px',
    boxShadow: `0 0 0 4px ${color}20`,
  }),

  // Generate skip links
  generateSkipLinks: (targets: Array<{ label: string, href: string }>) : any => {
    return targets.map(target => 
      `<a href="${target.href}" class="skip-link" tabindex="1">${target.label}</a>`
    ).join('\n');
  },

  // Generate accessible form labels
  generateFormLabels: (fields: Array<{ id: string, label: string, required?: boolean, description?: string }>) : any => {
    return fields.map(field => `
      <label for="${field.id}" class="form-label">
        ${field.label}${field.required ? ' <span aria-label="required">*</span>' : ''}
      </label>
      ${field.description ? `<div id="${field.id}-description" class="form-description">${field.description}</div>` : ''}
    `).join('\n');
  },

  // Generate accessible table markup
  generateAccessibleTable: (headers: string[], rows: string[][]) : any => {
    const headerRow = `<tr>${headers.map(header => `<th scope="col">${header}</th>`).join('')}</tr>`,
    const dataRows = rows.map(row => 
      `<tr>${row.map((cell, index) => `<td>${cell}</td>`).join('')}</tr>`
    ).join('');

    return `
      <table role="table" aria-label="Data table">
        <thead>${headerRow}</thead>
        <tbody>${dataRows}</tbody>
      </table>
    `;
  },

  // Generate accessible button markup
  generateAccessibleButton: (text: string, options: {
    variant?: 'primary' | 'secondary' | 'danger',
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    ariaLabel?: string;
    ariaDescribedBy?: string;
  } = {}) : any => {
    const {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      loading = false,
      ariaLabel,
      ariaDescribedBy
    } = options;

    const classes = [
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      loading ? 'btn-loading' : '',
      disabled ? 'btn-disabled' : ''
    ].filter(Boolean).join(' ');

    const attributes = [
      disabled ? 'disabled' : '',
      loading ? 'aria-busy="true"' : '',
      ariaLabel ? `aria-label="${ariaLabel}"` : '',
      ariaDescribedBy ? `aria-describedby="${ariaDescribedBy}"` : ''
    ].filter(Boolean).join(' ');

    return `
      <button class="${classes}" ${attributes}>
        ${loading ? '<span class="spinner" aria-hidden="true"></span>' : ''}
        <span class="btn-text">${text}</span>
      </button>
    `;
  },
};

export const generateAccessibilityReport = (element: HTMLElement) : any => {
  const issues: string[] = [],

  // Check for missing alt text
  const images = element.querySelectorAll('img');
  images.forEach(img => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Image missing alt text: ${img.src}`);
};
  });

  // Check for missing labels
  const inputs = element.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    const id = input.id;
    const label = id ? document.querySelector(`label[for="${id}"]`) : null;
    if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      issues.push(`Form control missing label: ${input.tagName}`);
};
  });

  // Check for heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push(`Heading hierarchy skip: ${heading.tagName} follows h${lastLevel}`);
};
    lastLevel = level;
  });

  // Check for color contrast
  const textElements = element.querySelectorAll('p, span, div, a, button');
  textElements.forEach(el => {
    const style = window.getComputedStyle(el);
    const color = style.color;
    const backgroundColor = style.backgroundColor;
    
    if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)') {
      const contrast = accessibilityUtils.generateColorContrast(color, backgroundColor);
      if (contrast < 4.5) {
        issues.push(`Low color contrast (${contrast.toFixed(2)}:1): ${el.textContent?.substring(0, 50)}`);
      }
    }
  });

  return {
    timestamp: new Date().toISOString(),
    totalIssues: issues.length,
    issues,
    score: Math.max(0, 100 - (issues.length * 5)),
    recommendations: issues.length > 0 ? [
      'Add alt text to all images',
      'Ensure all form controls have labels',
      'Maintain proper heading hierarchy',
      'Improve color contrast ratios'
    ] : ['No accessibility issues detected']
  };
};