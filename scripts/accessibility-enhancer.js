#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Accessibility enhancement script
async function enhanceAccessibility() {
  console.log('♿ Starting accessibility enhancements...');

  // 1. Add ARIA labels and roles
  await addARIALabels();
  
  // 2. Improve keyboard navigation
  await improveKeyboardNavigation();
  
  // 3. Add focus management
  await addFocusManagement();
  
  // 4. Enhance color contrast
  await enhanceColorContrast();
  
  console.log('✅ Accessibility enhancements completed!');
}

async function addARIALabels() {
  console.log('🏷️ Adding ARIA labels...');
  
  const navigationPath = 'app/components/Navigation.tsx';
  let content = fs.readFileSync(navigationPath, 'utf8');
  
  // Add ARIA labels to navigation
  content = content.replace(
    /<nav/g,
    '<nav role="navigation" aria-label="Main navigation"'
  );
  
  content = content.replace(
    /<button.*onClick.*toggleMenu/g,
    '<button aria-label="Toggle mobile menu" aria-expanded={isOpen} onClick={toggleMenu}'
  );
  
  content = content.replace(
    /<ul.*className.*menu/g,
    '<ul role="menubar" className="menu"'
  );
  
  fs.writeFileSync(navigationPath, content);
  console.log('✅ ARIA labels added to navigation');
}

async function improveKeyboardNavigation() {
  console.log('⌨️ Improving keyboard navigation...');
  
  const keyboardNav = `'use client';
import { useEffect, useRef } from 'react';

export default function KeyboardNavigation() {
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        event.preventDefault();
        mainContentRef.current?.focus();
      }
      
      // Escape key to close modals/menus
      if (event.key === 'Escape') {
        const openMenus = document.querySelectorAll('[aria-expanded="true"]');
        openMenus.forEach(menu => {
          const button = menu.querySelector('button');
          button?.click();
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      onClick={(e) => {
        e.preventDefault();
        mainContentRef.current?.focus();
      }}
    >
      Skip to main content
    </a>
  );
}`;
  
  fs.writeFileSync('app/components/KeyboardNavigation.tsx', keyboardNav);
  console.log('✅ Keyboard navigation enhanced');
}

async function addFocusManagement() {
  console.log('🎯 Adding focus management...');
  
  const focusManager = `'use client';
import { useEffect, useRef } from 'react';

export default function FocusManager() {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Store focus when modal opens
    const storeFocus = () => {
      previousFocusRef.current = document.activeElement as HTMLElement;
    };

    // Restore focus when modal closes
    const restoreFocus = () => {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    };

    // Listen for modal open/close events
    document.addEventListener('modal:open', storeFocus);
    document.addEventListener('modal:close', restoreFocus);

    return () => {
      document.removeEventListener('modal:open', storeFocus);
      document.removeEventListener('modal:close', restoreFocus);
    };
  }, []);

  return null;
}`;
  
  fs.writeFileSync('app/components/FocusManager.tsx', focusManager);
  console.log('✅ Focus management added');
}

async function enhanceColorContrast() {
  console.log('🎨 Enhancing color contrast...');
  
  const cssPath = 'app/globals.css';
  let content = fs.readFileSync(cssPath, 'utf8');
  
  // Add high contrast mode styles
  const highContrastCSS = `
/* High contrast mode support */
@media (prefers-contrast: high) {
  .cyber-text {
    color: #ffffff !important;
    text-shadow: 2px 2px 4px #000000 !important;
  }
  
  .neon-text {
    color: #00ffff !important;
    text-shadow: 0 0 10px #00ffff !important;
  }
  
  .cyber-button {
    background: #000000 !important;
    border: 2px solid #ffffff !important;
    color: #ffffff !important;
  }
  
  .cyber-card {
    background: #000000 !important;
    border: 2px solid #ffffff !important;
    color: #ffffff !important;
  }
}

/* Focus indicators */
*:focus {
  outline: 3px solid #4f46e5 !important;
  outline-offset: 2px !important;
}

*:focus:not(:focus-visible) {
  outline: none !important;
}

*:focus-visible {
  outline: 3px solid #4f46e5 !important;
  outline-offset: 2px !important;
}

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
}
`;
  
  content += highContrastCSS;
  fs.writeFileSync(cssPath, content);
  console.log('✅ Color contrast enhanced');
}

// Run accessibility enhancements
enhanceAccessibility().catch(console.error);