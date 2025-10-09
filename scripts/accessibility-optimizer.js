#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Accessibility optimization configurations
const a11yConfig = {
  colors: {
    primary: '#00ffff',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    background: '#0a0a0a',
    surface: '#1a1a2e',
    text: '#ffffff',
    textSecondary: '#e2e8f0',
    textMuted: '#94a3b8',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6'
  },
  
  contrast: {
    minimum: 4.5,
    enhanced: 7.0,
    largeText: 3.0
  },
  
  typography: {
    baseSize: '16px',
    lineHeight: 1.6,
    fontFamily: 'Rajdhani, sans-serif',
    headingFont: 'Orbitron, monospace'
  },
  
  spacing: {
    base: '1rem',
    small: '0.5rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '3rem'
  },
  
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
};

// Generate accessibility report
function generateAccessibilityReport() {
  const report = {
    timestamp: new Date().toISOString(),
    config: a11yConfig,
    recommendations: [
      'Ensure all interactive elements are keyboard accessible',
      'Add proper ARIA labels and roles',
      'Implement skip navigation links',
      'Ensure sufficient color contrast ratios',
      'Add alt text to all images',
      'Use semantic HTML elements',
      'Implement focus management',
      'Add screen reader announcements',
      'Ensure form labels are properly associated',
      'Implement error handling and validation',
      'Add loading states and progress indicators',
      'Ensure responsive design works on all devices',
      'Test with screen readers and assistive technologies',
      'Implement high contrast mode support',
      'Add reduced motion preferences support'
    ],
    checklist: {
      keyboard: [
        'All interactive elements are keyboard accessible',
        'Tab order is logical and intuitive',
        'Focus indicators are visible and clear',
        'No keyboard traps exist',
        'Skip links are available'
      ],
      screenReader: [
        'Proper heading hierarchy (h1, h2, h3, etc.)',
        'ARIA labels and roles are used appropriately',
        'Form labels are properly associated',
        'Images have descriptive alt text',
        'Links have descriptive text'
      ],
      visual: [
        'Color contrast meets WCAG AA standards',
        'Text is readable at all zoom levels',
        'Focus indicators are visible',
        'Error states are clearly indicated',
        'Loading states are communicated'
      ],
      motor: [
        'Touch targets are at least 44px',
        'Interactive elements are not too close together',
        'Drag and drop alternatives are provided',
        'Time limits can be extended or disabled',
        'No seizure-inducing content'
      ],
      cognitive: [
        'Content is clear and easy to understand',
        'Navigation is consistent and predictable',
        'Error messages are helpful and clear',
        'Help text is available when needed',
        'Content is organized logically'
      ]
    },
    tools: [
      'axe-core for automated testing',
      'WAVE for visual accessibility testing',
      'Lighthouse for performance and accessibility',
      'Screen readers (NVDA, JAWS, VoiceOver)',
      'Keyboard-only navigation testing',
      'Color contrast analyzers',
      'Voice control testing'
    ]
  };
  
  return report;
}

// Generate accessibility utilities
function generateAccessibilityUtils() {
  return `import { useEffect, useRef, useState } from 'react';

// Focus management utilities
export const useFocusManagement = () => {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  const trapFocus = (element: HTMLElement) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0] as HTMLElement;
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  };
  
  const focusFirstElement = (element: HTMLElement) => {
    const focusableContent = element.querySelector(focusableElements) as HTMLElement;
    if (focusableContent) {
      focusableContent.focus();
    }
  };
  
  return { trapFocus, focusFirstElement };
};

// Screen reader announcements
export const useScreenReaderAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');
  
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  };
  
  return { announcement, announce };
};

// Skip link component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
    >
      {children}
    </a>
  );
};

// High contrast mode detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  
  useEffect(() => {
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };
    
    checkHighContrast();
  }, []);
  
  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', (e) => {
      setPrefersReducedMotion(e.matches);
    });
  }, []);
  
  return prefersReducedMotion;
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you'd use a proper color contrast library
  return 4.5; // Placeholder
};

// ARIA utilities
export const getAriaLabel = (element: HTMLElement): string => {
  return element.getAttribute('aria-label') || 
         element.getAttribute('aria-labelledby') || 
         element.textContent || 
         'Interactive element';
};

// Focus visible polyfill
export const useFocusVisible = () => {
  useEffect(() => {
    // Add focus-visible polyfill if needed
    if (!CSS.supports('selector(:focus-visible)')) {
      import('focus-visible');
    }
  }, []);
};

// Keyboard navigation utilities
export const useKeyboardNavigation = () => {
  const handleKeyDown = (e: KeyboardEvent, onEnter?: () => void, onEscape?: () => void) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        onEnter?.();
        break;
      case 'Escape':
        onEscape?.();
        break;
    }
  };
  
  return { handleKeyDown };
};

// Accessibility testing utilities
export const runAccessibilityTests = async () => {
  // This would integrate with axe-core or similar testing library
  console.log('Running accessibility tests...');
  return {
    violations: [],
    passes: [],
    incomplete: []
  };
};`;
}

// Generate accessibility CSS
function generateAccessibilityCSS() {
  return `/* Accessibility-focused CSS utilities */

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

/* Focus indicators */
.focus-visible {
  outline: 2px solid var(--primary-cyan);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --primary-cyan: #00ffff;
    --primary-purple: #8b5cf6;
    --primary-pink: #ec4899;
    --text-primary: #ffffff;
    --text-secondary: #ffffff;
    --text-muted: #ffffff;
    --bg-dark: #000000;
    --bg-darker: #000000;
  }
  
  .cyber-card,
  .hologram-card,
  .quantum-card {
    border: 2px solid var(--primary-cyan);
    background: var(--bg-dark);
  }
  
  .neon-text,
  .cyber-text,
  .holographic-text {
    color: var(--primary-cyan);
    text-shadow: none;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .cyber-text-3d {
    transform: none;
  }
  
  .quantum-field {
    animation: none;
  }
  
  .neon-pulse {
    animation: none;
  }
  
  .energy-pulse {
    animation: none;
  }
}

/* Touch target sizes */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-cyan);
  color: var(--bg-dark);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  font-weight: bold;
}

.skip-link:focus {
  top: 6px;
}

/* Error states */
.error {
  border-color: var(--error);
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.error-message {
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Success states */
.success {
  border-color: var(--success);
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

.success-message {
  color: var(--success);
  font-size: 0.875rem;
  margin-top: 0.25rem;
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
  border: 2px solid var(--primary-cyan);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Form accessibility */
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-cyan);
  border-radius: 4px;
  background: var(--bg-surface);
  color: var(--text-primary);
  font-size: 1rem;
}

.form-input:focus {
  outline: 2px solid var(--primary-cyan);
  outline-offset: 2px;
  border-color: var(--primary-cyan);
}

.form-input:invalid {
  border-color: var(--error);
}

.form-help {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Button accessibility */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  min-width: 44px;
}

.btn:focus {
  outline: 2px solid var(--primary-cyan);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--primary-cyan);
  color: var(--bg-dark);
}

.btn-primary:hover:not(:disabled) {
  background: #00e6e6;
}

.btn-secondary {
  background: transparent;
  color: var(--primary-cyan);
  border: 1px solid var(--primary-cyan);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--primary-cyan);
  color: var(--bg-dark);
}

/* Table accessibility */
.table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border-cyan);
}

.table th {
  background: var(--bg-surface);
  font-weight: 600;
  color: var(--text-primary);
}

.table tbody tr:hover {
  background: rgba(0, 255, 255, 0.1);
}

/* List accessibility */
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-cyan);
}

.list-item:last-child {
  border-bottom: none;
}

/* Modal accessibility */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-surface);
  border-radius: 8px;
  padding: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-close {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-close:hover {
  color: var(--primary-cyan);
}

/* Live region for announcements */
.live-region {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-only {
    display: block !important;
  }
  
  .cyber-grid,
  .neural-network-bg,
  .matrix-rain {
    background: none !important;
  }
  
  .neon-text,
  .cyber-text,
  .holographic-text {
    color: #000 !important;
    text-shadow: none !important;
  }
  
  .cyber-card,
  .hologram-card,
  .quantum-card {
    border: 1px solid #ccc !important;
    background: #fff !important;
    box-shadow: none !important;
  }
}`;
}

// Main execution
function main() {
  console.log('♿ Starting accessibility optimization...');
  
  // Generate accessibility report
  const report = generateAccessibilityReport();
  fs.writeFileSync(
    path.join(__dirname, '../accessibility-report.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('📊 Accessibility report generated');
  
  // Generate accessibility utilities
  const utils = generateAccessibilityUtils();
  fs.writeFileSync(
    path.join(__dirname, '../src/utils/accessibilityUtils.ts'),
    utils
  );
  console.log('🛠️  Accessibility utilities created');
  
  // Generate accessibility CSS
  const css = generateAccessibilityCSS();
  fs.writeFileSync(
    path.join(__dirname, '../src/styles/accessibility.css'),
    css
  );
  console.log('🎨 Accessibility CSS created');
  
  console.log('✅ Accessibility optimization complete!');
  console.log('📈 Check accessibility-report.json for detailed recommendations');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateAccessibilityReport, generateAccessibilityUtils, generateAccessibilityCSS };