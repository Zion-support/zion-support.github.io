#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('♿ Starting Accessibility Enhancement...\n');

// 1. Create accessibility utilities
const accessibilityUtils = `// Accessibility utilities and components
import React, { useEffect, useRef, useState } from 'react';

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
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
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Skip to main content link
  createSkipLink: () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50"
    >
      Skip to main content
    </a>
  ),

  // Announce changes to screen readers
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};

// Keyboard navigation hook
export const useKeyboardNavigation = (onEscape?: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);
};

// Accessible button component
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${className}\`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
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

// Accessible modal component
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
  className = ''
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useKeyboardNavigation(() => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      if (modalRef.current) {
        focusManagement.trapFocus(modalRef.current);
      }
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          ref={modalRef}
          className={\`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full \${className}\`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <AccessibleButton onClick={onClose} className="w-full sm:w-auto sm:ml-3">
              Close
            </AccessibleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

// Accessible form field component
interface AccessibleFormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactElement;
  className?: string;
}

export const AccessibleFormField: React.FC<AccessibleFormFieldProps> = ({
  label,
  error,
  required = false,
  children,
  className = ''
}) => {
  const fieldId = React.useId();
  const errorId = \`\${fieldId}-error\`;

  return (
    <div className={\`mb-4 \${className}\`}>
      <label
        htmlFor={fieldId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      {React.cloneElement(children, {
        id: fieldId,
        'aria-describedby': error ? errorId : undefined,
        'aria-invalid': error ? 'true' : 'false',
        required
      })}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// High contrast mode detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Screen reader only text component
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Skip link component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  >
    {children}
  </a>
);
`;

const accessibilityUtilsPath = path.join(__dirname, '..', 'utils', 'accessibilityUtils.ts');
fs.writeFileSync(accessibilityUtilsPath, accessibilityUtils);
console.log('✅ Accessibility utilities created');

// 2. Create accessibility testing utilities
const accessibilityTesting = `// Accessibility testing utilities
export const accessibilityTests = {
  // Check for proper heading hierarchy
  checkHeadingHierarchy: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const issues = [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (index === 0 && level !== 1) {
        issues.push('First heading should be h1');
      }
      
      if (level > previousLevel + 1) {
        issues.push(\`Heading \${heading.tagName} skips level after h\${previousLevel}\`);
      }
      
      previousLevel = level;
    });

    return issues;
  },

  // Check for proper alt text on images
  checkImageAltText: () => {
    const images = document.querySelectorAll('img');
    const issues = [];

    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(\`Image \${index + 1} missing alt text\`);
      }
    });

    return issues;
  },

  // Check for proper form labels
  checkFormLabels: () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    const issues = [];

    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledby = input.getAttribute('aria-labelledby');
      const label = id ? document.querySelector(\`label[for="\${id}"]\`) : null;

      if (!label && !ariaLabel && !ariaLabelledby) {
        issues.push(\`Form input \${index + 1} missing label\`);
      }
    });

    return issues;
  },

  // Check for proper color contrast
  checkColorContrast: () => {
    // This would need a more sophisticated implementation
    // For now, return a placeholder
    return ['Color contrast check requires manual testing'];
  },

  // Check for keyboard navigation
  checkKeyboardNavigation: () => {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const issues = [];

    interactiveElements.forEach((element, index) => {
      if (element.getAttribute('tabindex') === '0' && !element.getAttribute('role')) {
        issues.push(\`Element \${index + 1} has tabindex="0" but no role\`);
      }
    });

    return issues;
  },

  // Run all accessibility tests
  runAllTests: () => {
    const results = {
      headingHierarchy: accessibilityTests.checkHeadingHierarchy(),
      imageAltText: accessibilityTests.checkImageAltText(),
      formLabels: accessibilityTests.checkFormLabels(),
      colorContrast: accessibilityTests.checkColorContrast(),
      keyboardNavigation: accessibilityTests.checkKeyboardNavigation()
    };

    const totalIssues = Object.values(results).flat().length;
    
    console.log('Accessibility Test Results:', results);
    console.log(\`Total Issues Found: \${totalIssues}\`);
    
    return { results, totalIssues };
  }
};

// Initialize accessibility testing
export const initAccessibilityTesting = () => {
  if (process.env.NODE_ENV === 'development') {
    // Run tests in development mode
    setTimeout(() => {
      accessibilityTests.runAllTests();
    }, 1000);
  }
};
`;

const accessibilityTestingPath = path.join(__dirname, '..', 'utils', 'accessibilityTesting.ts');
fs.writeFileSync(accessibilityTestingPath, accessibilityTesting);
console.log('✅ Accessibility testing utilities created');

// 3. Create enhanced CSS for accessibility
const accessibilityCSS = `
/* Enhanced accessibility styles */
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
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
  z-index: 1000;
}

/* Focus styles */
.focus-visible:focus {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-gradient-to-r {
    background: #000000 !important;
    color: #ffffff !important;
  }
  
  .text-gray-300 {
    color: #ffffff !important;
  }
  
  .border-cyan-500 {
    border-color: #00ffff !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .animate-pulse,
  .animate-spin,
  .animate-bounce {
    animation: none !important;
  }
}

/* Skip link styles */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
  border-radius: 4px;
}

.skip-link:focus {
  top: 6px;
}

/* Focus trap styles */
.focus-trap {
  position: relative;
}

.focus-trap::before,
.focus-trap::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}

/* Screen reader announcements */
.sr-announcement {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* High contrast mode indicators */
.high-contrast {
  filter: contrast(150%) brightness(120%);
}

/* Focus indicators for all interactive elements */
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus,
[tabindex]:focus {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Remove focus outline for mouse users */
a:focus:not(:focus-visible),
button:focus:not(:focus-visible),
input:focus:not(:focus-visible),
select:focus:not(:focus-visible),
textarea:focus:not(:focus-visible),
[tabindex]:focus:not(:focus-visible) {
  outline: none;
}

/* Ensure sufficient color contrast */
.text-low-contrast {
  color: #6b7280; /* gray-500 */
}

.text-high-contrast {
  color: #1f2937; /* gray-800 */
}

/* Error states */
.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 1px #ef4444;
}

.error:focus {
  outline-color: #ef4444;
}

/* Success states */
.success {
  border-color: #10b981;
  box-shadow: 0 0 0 1px #10b981;
}

.success:focus {
  outline-color: #10b981;
}

/* Loading states */
.loading {
  position: relative;
  pointer-events: none;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid #f3f4f6;
  border-top: 2px solid #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Print styles for accessibility */
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
  
  .sr-only {
    position: static !important;
    width: auto !important;
    height: auto !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    clip: auto !important;
    white-space: normal !important;
  }
}
`;

// Append to existing CSS
const cssPath = path.join(__dirname, '..', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent += accessibilityCSS;
fs.writeFileSync(cssPath, cssContent);
console.log('✅ Accessibility CSS added');

// 4. Update package.json with accessibility scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'accessibility:test': 'node -e "require(\'./utils/accessibilityTesting\').initAccessibilityTesting()"',
  'accessibility:enhance': 'node scripts/accessibility-enhancer.cjs',
  'accessibility:check': 'npm run accessibility:enhance && npm run build'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Package.json accessibility scripts updated');

console.log('\n🎉 Accessibility Enhancement Complete!');
console.log('\n📋 Next Steps:');
console.log('  1. Run: npm run accessibility:enhance');
console.log('  2. Import accessibility utilities in components');
console.log('  3. Test with screen readers and keyboard navigation');
console.log('  4. Run: npm run accessibility:test');
console.log('  5. Check color contrast and focus indicators');