#!/usr/bin/env node

/**
 * Accessibility Enhancement Script
 * Automatically enhances accessibility across the application
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('♿ Starting accessibility enhancement...');

// 1. Create accessibility utilities
function createAccessibilityUtils() {
  console.log('🛠️ Creating accessibility utilities...');
  
  const accessibilityUtils = `// Accessibility utilities for enhanced user experience

export const ARIA_LABELS = {
  // Navigation
  MAIN_NAV: 'Main navigation',
  MOBILE_MENU: 'Mobile menu',
  SKIP_TO_CONTENT: 'Skip to main content',
  
  // Buttons
  CLOSE_MENU: 'Close menu',
  OPEN_MENU: 'Open menu',
  LOAD_MORE: 'Load more content',
  SUBMIT_FORM: 'Submit form',
  
  // Forms
  REQUIRED_FIELD: 'Required field',
  OPTIONAL_FIELD: 'Optional field',
  FORM_ERROR: 'Form error',
  FORM_SUCCESS: 'Form submitted successfully',
  
  // Content
  LOADING: 'Loading content',
  ERROR_MESSAGE: 'Error message',
  SUCCESS_MESSAGE: 'Success message',
  WARNING_MESSAGE: 'Warning message',
  
  // Interactive elements
  EXPAND_SECTION: 'Expand section',
  COLLAPSE_SECTION: 'Collapse section',
  PLAY_VIDEO: 'Play video',
  PAUSE_VIDEO: 'Pause video',
  MUTE_AUDIO: 'Mute audio',
  UNMUTE_AUDIO: 'Unmute audio'
};

export const KEYBOARD_SHORTCUTS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End'
};

export const FOCUS_MANAGEMENT = {
  // Focus trap for modals and dropdowns
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handleKeyDown);
    
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },
  
  // Focus restoration
  restoreFocus: (element: HTMLElement) => {
    const previousActiveElement = document.activeElement as HTMLElement;
    element.focus();
    
    return () => {
      previousActiveElement?.focus();
    };
  },
  
  // Skip to content functionality
  addSkipToContent: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.cssText = \`
      position: absolute;
      top: -40px;
      left: 6px;
      background: #2563eb;
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s;
    \`;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

export const SCREEN_READER_SUPPORT = {
  // Announce changes to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  // Create screen reader only text
  srOnly: (text: string) => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  }
};

export const COLOR_CONTRAST = {
  // Check if color combination meets WCAG standards
  checkContrast: (foreground: string, background: string): boolean => {
    // This is a simplified version - in production, use a proper color contrast library
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    
    return contrast >= 4.5; // WCAG AA standard
  }
};

export const MOTION_PREFERENCES = {
  // Respect user's motion preferences
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Apply motion preferences to animations
  applyMotionPreferences: (element: HTMLElement) => {
    if (this.prefersReducedMotion()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  }
};

export const HIGH_CONTRAST = {
  // Check if user prefers high contrast
  prefersHighContrast: (): boolean => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },
  
  // Apply high contrast styles
  applyHighContrast: () => {
    if (this.prefersHighContrast()) {
      document.documentElement.classList.add('high-contrast');
    }
  }
};

export default {
  ARIA_LABELS,
  KEYBOARD_SHORTCUTS,
  FOCUS_MANAGEMENT,
  SCREEN_READER_SUPPORT,
  COLOR_CONTRAST,
  MOTION_PREFERENCES,
  HIGH_CONTRAST
};`;

  const utilsDir = path.join(__dirname, '..', 'src', 'utils');
  fs.writeFileSync(path.join(utilsDir, 'accessibilityUtils.ts'), accessibilityUtils);
  console.log('✅ Accessibility utilities created');
}

// 2. Create accessible form components
function createAccessibleFormComponents() {
  console.log('📝 Creating accessible form components...');
  
  const accessibleForm = `import React, { useState, useRef, useEffect } from 'react';
import { ARIA_LABELS, SCREEN_READER_SUPPORT } from '../utils/accessibilityUtils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'textarea';
  required?: boolean;
  error?: string;
  helpText?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  error,
  helpText,
  placeholder,
  value,
  onChange,
  onBlur
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const errorId = \`\${name}-error\`;
  const helpId = \`\${name}-help\`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="form-field">
      <label 
        htmlFor={name}
        className={\`block text-sm font-medium text-gray-700 mb-1 \${error ? 'text-red-600' : ''}\`}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label={ARIA_LABELS.REQUIRED_FIELD}>
            *
          </span>
        )}
      </label>
      
      <InputComponent
        ref={inputRef as any}
        id={name}
        name={name}
        type={type === 'textarea' ? undefined : type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        required={required}
        aria-describedby={\`\${helpText ? helpId : ''} \${error ? errorId : ''}\`.trim()}
        aria-invalid={error ? 'true' : 'false'}
        className={\`
          w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          \${error ? 'border-red-300 text-red-900 placeholder-red-300' : 'border-gray-300'}
          \${isFocused ? 'ring-2 ring-blue-500' : ''}
        \`}
      />
      
      {helpText && (
        <p id={helpId} className="mt-1 text-sm text-gray-500">
          {helpText}
        </p>
      )}
      
      {error && (
        <p 
          id={errorId} 
          className="mt-1 text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  ariaLabel,
  type = 'button'
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled && !loading) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-pressed={isPressed}
      className={\`
        \${baseClasses}
        \${variantClasses[variant]}
        \${sizeClasses[size]}
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${isPressed ? 'transform scale-95' : ''}
      \`}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};

export { FormField, AccessibleButton };`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'AccessibleForm.tsx'), accessibleForm);
  console.log('✅ Accessible form components created');
}

// 3. Create accessible navigation components
function createAccessibleNavigation() {
  console.log('🧭 Creating accessible navigation components...');
  
  const accessibleNavigation = `import React, { useState, useRef, useEffect } from 'react';
import { ARIA_LABELS, FOCUS_MANAGEMENT, KEYBOARD_SHORTCUTS } from '../utils/accessibilityUtils';

interface AccessibleMenuProps {
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    children?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const AccessibleMenu: React.FC<AccessibleMenuProps> = ({
  items,
  orientation = 'horizontal',
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case KEYBOARD_SHORTCUTS.ESCAPE:
          setIsOpen(false);
          setActiveIndex(null);
          break;
        case KEYBOARD_SHORTCUTS.ARROW_DOWN:
          e.preventDefault();
          setActiveIndex(prev => 
            prev === null ? 0 : Math.min(prev + 1, items.length - 1)
          );
          break;
        case KEYBOARD_SHORTCUTS.ARROW_UP:
          e.preventDefault();
          setActiveIndex(prev => 
            prev === null ? items.length - 1 : Math.max(prev - 1, 0)
          );
          break;
        case KEYBOARD_SHORTCUTS.HOME:
          e.preventDefault();
          setActiveIndex(0);
          break;
        case KEYBOARD_SHORTCUTS.END:
          e.preventDefault();
          setActiveIndex(items.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  const handleItemClick = (item: typeof items[0], index: number) => {
    if (item.onClick) {
      item.onClick();
    }
    setActiveIndex(index);
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, item: typeof items[0], index: number) => {
    if (e.key === KEYBOARD_SHORTCUTS.ENTER || e.key === KEYBOARD_SHORTCUTS.SPACE) {
      e.preventDefault();
      handleItemClick(item, index);
    }
  };

  return (
    <nav 
      className={\`\${orientation === 'horizontal' ? 'flex' : 'flex-col'} \${className}\`}
      role="navigation"
      aria-label={ARIA_LABELS.MAIN_NAV}
    >
      <ul 
        ref={menuRef}
        className={\`\${orientation === 'horizontal' ? 'flex space-x-4' : 'space-y-2'}\`}
        role="menubar"
      >
        {items.map((item, index) => (
          <li key={index} role="none">
            {item.href ? (
              <a
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => handleItemKeyDown(e, item, index)}
              >
                {item.label}
              </a>
            ) : (
              <button
                ref={el => itemRefs.current[index] = el}
                onClick={() => handleItemClick(item, index)}
                onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                role="menuitem"
                tabIndex={0}
                aria-expanded={item.children ? isOpen : undefined}
                aria-haspopup={item.children ? 'menu' : undefined}
              >
                {item.label}
              </button>
            )}
            
            {item.children && isOpen && activeIndex === index && (
              <ul
                className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10"
                role="menu"
                aria-label={\`\${item.label} submenu\`}
              >
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} role="none">
                    <a
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      role="menuitem"
                      tabIndex={0}
                    >
                      <div className="font-medium">{child.label}</div>
                      {child.description && (
                        <div className="text-xs text-gray-500">{child.description}</div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface AccessibleBreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}

const AccessibleBreadcrumb: React.FC<AccessibleBreadcrumbProps> = ({
  items,
  className = ''
}) => {
  return (
    <nav 
      className={\`\${className}\`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span 
                className="text-sm font-medium text-gray-900"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { AccessibleMenu, AccessibleBreadcrumb };`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'AccessibleNavigation.tsx'), accessibleNavigation);
  console.log('✅ Accessible navigation components created');
}

// 4. Create accessibility audit script
function createAccessibilityAuditScript() {
  console.log('🔍 Creating accessibility audit script...');
  
  const accessibilityAuditScript = `import fs from 'fs';
import path from 'path';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  file?: string;
  line?: number;
  code?: string;
}

class AccessibilityAuditor {
  private issues: AccessibilityIssue[] = [];

  auditFile(filePath: string, content: string) {
    const fileName = path.basename(filePath);
    
    // Check for missing alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.addIssue('error', \`Image \${index + 1} missing alt attribute\`, fileName);
      }
    });
    
    // Check for missing form labels
    const inputTags = content.match(/<input[^>]*>/g) || [];
    inputTags.forEach((input, index) => {
      if (!input.includes('aria-label') && !content.includes(\`for="\${this.extractId(input)}"\`)) {
        this.addIssue('error', \`Input \${index + 1} missing label or aria-label\`, fileName);
      }
    });
    
    // Check for missing heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    if (headings.length > 0) {
      const headingLevels = headings.map(h => parseInt(h.match(/<h([1-6])/)?.[1] || '0'));
      for (let i = 1; i < headingLevels.length; i++) {
        if (headingLevels[i] > headingLevels[i-1] + 1) {
          this.addIssue('warning', \`Heading hierarchy skipped from h\${headingLevels[i-1]} to h\${headingLevels[i]}\`, fileName);
        }
      }
    }
    
    // Check for missing focus management
    if (content.includes('onClick') && !content.includes('onKeyDown') && !content.includes('onKeyPress')) {
      this.addIssue('warning', 'Interactive elements should be keyboard accessible', fileName);
    }
    
    // Check for missing ARIA labels
    const interactiveElements = content.match(/<(button|a|input|select|textarea)[^>]*>/g) || [];
    interactiveElements.forEach((element, index) => {
      if (!element.includes('aria-label') && !element.includes('aria-labelledby') && !element.includes('>')) {
        this.addIssue('info', \`Interactive element \${index + 1} could benefit from ARIA label\`, fileName);
      }
    });
    
    // Check for color contrast (simplified)
    const colorClasses = content.match(/text-\\w+-\\d+|bg-\\w+-\\d+/g) || [];
    if (colorClasses.length > 0) {
      this.addIssue('info', 'Consider checking color contrast ratios', fileName);
    }
    
    // Check for missing skip links
    if (!content.includes('skip') && !content.includes('Skip')) {
      this.addIssue('info', 'Consider adding skip navigation links', fileName);
    }
  }

  private extractId(input: string): string {
    const idMatch = input.match(/id="([^"]*)"/);
    return idMatch ? idMatch[1] : '';
  }

  private addIssue(type: AccessibilityIssue['type'], message: string, file?: string, line?: number, code?: string) {
    this.issues.push({ type, message, file, line, code });
  }

  generateReport(): string {
    const errors = this.issues.filter(issue => issue.type === 'error');
    const warnings = this.issues.filter(issue => issue.type === 'warning');
    const infos = this.issues.filter(issue => issue.type === 'info');
    
    let report = '# Accessibility Audit Report\\n\\n';
    report += \`## Summary\\n\`;
    report += \`- Errors: \${errors.length}\\n\`;
    report += \`- Warnings: \${warnings.length}\\n\`;
    report += \`- Info: \${infos.length}\\n\\n\`;
    
    if (errors.length > 0) {
      report += '## Errors (Must Fix)\\n\\n';
      errors.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
      report += '\\n';
    }
    
    if (warnings.length > 0) {
      report += '## Warnings (Should Fix)\\n\\n';
      warnings.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
      report += '\\n';
    }
    
    if (infos.length > 0) {
      report += '## Info (Consider Fixing)\\n\\n';
      infos.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
    }
    
    report += '\\n## WCAG Guidelines\\n\\n';
    report += 'This audit checks for compliance with WCAG 2.1 AA standards:\\n\\n';
    report += '- **Perceivable**: Images have alt text, content is readable\\n';
    report += '- **Operable**: Interactive elements are keyboard accessible\\n';
    report += '- **Understandable**: Content is clear and navigation is consistent\\n';
    report += '- **Robust**: Code is valid and compatible with assistive technologies\\n';
    
    return report;
  }

  getIssues(): AccessibilityIssue[] {
    return this.issues;
  }
}

// Run accessibility audit
const auditor = new AccessibilityAuditor();

// Audit main pages
const pagesDir = path.join(process.cwd(), 'src');
const pages = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .filter(file => !file.includes('node_modules'))
  .filter(file => !file.includes('.test.'))
  .filter(file => !file.includes('.spec.'));

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  const content = fs.readFileSync(filePath, 'utf8');
  auditor.auditFile(filePath, content);
});

// Generate report
const report = auditor.generateReport();
fs.writeFileSync('accessibility-audit-report.md', report);

console.log('✅ Accessibility audit completed');
console.log(\`Found \${auditor.getIssues().length} issues\`);

export default AccessibilityAuditor;`;

  const scriptsDir = path.join(__dirname, '..', 'scripts');
  fs.writeFileSync(path.join(scriptsDir, 'accessibility-audit.js'), accessibilityAuditScript);
  console.log('✅ Accessibility audit script created');
}

// 5. Create accessibility CSS
function createAccessibilityCSS() {
  console.log('🎨 Creating accessibility CSS...');
  
  const accessibilityCSS = `/* Accessibility-focused CSS enhancements */

/* Screen reader only content */
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

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Focus management */
.focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .high-contrast {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
  }
  
  .high-contrast .bg-white {
    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  }
  
  .high-contrast .text-gray-900 {
    color: rgb(0 0 0 / var(--tw-text-opacity)) !important;
  }
  
  .high-contrast .border-gray-300 {
    border-color: rgb(0 0 0 / var(--tw-border-opacity)) !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #2563eb;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Focus indicators */
.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-ring:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Button states */
.button {
  position: relative;
  transition: all 0.2s ease-in-out;
}

.button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.button:active {
  transform: scale(0.98);
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Form field states */
.form-field {
  position: relative;
}

.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-color: #2563eb;
}

.form-field input:invalid,
.form-field textarea:invalid,
.form-field select:invalid {
  border-color: #dc2626;
}

.form-field input:invalid:focus,
.form-field textarea:invalid:focus,
.form-field select:invalid:focus {
  outline-color: #dc2626;
}

/* Error states */
.error-message {
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.error-message[role="alert"] {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Loading states */
.loading {
  position: relative;
  overflow: hidden;
}

.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* ARIA live regions */
[aria-live] {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .high-contrast {
    filter: contrast(1.5);
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-only {
    display: block !important;
  }
  
  a[href]:after {
    content: " (" attr(href) ")";
  }
  
  a[href^="#"]:after {
    content: "";
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .dark-mode {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
  }
  
  .dark-mode .bg-white {
    background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
  }
  
  .dark-mode .text-gray-900 {
    color: rgb(243 244 246 / var(--tw-text-opacity)) !important;
  }
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .responsive-text {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 641px) {
  .responsive-text {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

/* Touch target sizing */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Keyboard navigation */
.keyboard-nav:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Screen reader announcements */
.sr-announce {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}`;

  const stylesDir = path.join(__dirname, '..', 'src', 'styles');
  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(stylesDir, 'accessibility.css'), accessibilityCSS);
  console.log('✅ Accessibility CSS created');
}

// Run all accessibility enhancements
async function runAccessibilityEnhancements() {
  try {
    createAccessibilityUtils();
    createAccessibleFormComponents();
    createAccessibleNavigation();
    createAccessibilityAuditScript();
    createAccessibilityCSS();
    
    console.log('🎉 Accessibility enhancement completed successfully!');
    console.log('📈 Key improvements:');
    console.log('  • Accessibility utilities for consistent implementation');
    console.log('  • Accessible form components with proper labeling');
    console.log('  • Accessible navigation with keyboard support');
    console.log('  • Accessibility audit script for ongoing monitoring');
    console.log('  • Accessibility CSS for visual enhancements');
    
  } catch (error) {
    console.error('❌ Error during accessibility enhancement:', error);
    process.exit(1);
  }
}

runAccessibilityEnhancements();