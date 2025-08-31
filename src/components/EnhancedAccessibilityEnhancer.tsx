import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Type,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Settings,
  Palette,
  Smartphone,
  Globe,
  Languages
} from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
  wcagCriteria: string;
  fix: string;
}

interface AccessibilityMetrics {
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  score: number;
  contrastIssues: number;
  focusIssues: number;
  semanticIssues: number;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showIssues?: boolean;
  autoFix?: boolean;
  highlightIssues?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showIssues = false,
  autoFix = true,
  highlightIssues = true
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    totalIssues: 0,
    errors: 0,
    warnings: 0,
    info: 0,
    score: 100,
    contrastIssues: 0,
    focusIssues: 0,
    semanticIssues: 0
  });
  const [isScanning, setIsScanning] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const highlightedElements = useRef<Set<HTMLElement>>(new Set());

  // Check color contrast
  const checkColorContrast = useCallback((element: HTMLElement): AccessibilityIssue[] => {
    const issues: AccessibilityIssue[] = [];
    const style = window.getComputedStyle(element);
    const backgroundColor = style.backgroundColor;
    const color = style.color;

    // Simple contrast check (this could be enhanced with a proper contrast calculation library)
    if (backgroundColor === 'rgba(0, 0, 0, 0)' || color === 'rgba(0, 0, 0, 0)') {
      issues.push({
        id: `contrast-${element.tagName}-${Date.now()}`,
        type: 'warning',
        message: 'Element may have insufficient color contrast',
        element,
        severity: 'medium',
        wcagCriteria: 'WCAG 2.1 AA - 1.4.3',
        fix: 'Ensure sufficient contrast ratio between text and background colors'
      });
    }

    return issues;
  }, []);

  // Check focus management
  const checkFocusManagement = useCallback((element: HTMLElement): AccessibilityIssue[] => {
    const issues: AccessibilityIssue[] = [];
    
    // Check if interactive elements are focusable
    if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'INPUT') {
      if (element.getAttribute('tabindex') === '-1') {
        issues.push({
          id: `focus-${element.tagName}-${Date.now()}`,
          type: 'error',
          message: 'Interactive element is not focusable',
          element,
          severity: 'high',
          wcagCriteria: 'WCAG 2.1 AA - 2.1.1',
          fix: 'Remove tabindex="-1" or ensure element is focusable through other means'
        });
      }
    }

    // Check for proper focus indicators
    const style = window.getComputedStyle(element);
    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
      const outline = style.outline;
      const boxShadow = style.boxShadow;
      if (outline === 'none' && !boxShadow.includes('0 0 0')) {
        issues.push({
          id: `focus-indicator-${element.tagName}-${Date.now()}`,
          type: 'warning',
          message: 'Element lacks visible focus indicator',
          element,
          severity: 'medium',
          wcagCriteria: 'WCAG 2.1 AA - 2.4.7',
          fix: 'Add visible focus indicator (outline, box-shadow, or background color change)'
        });
      }
    }

    return issues;
  }, []);

  // Check semantic HTML
  const checkSemanticHTML = useCallback((element: HTMLElement): AccessibilityIssue[] => {
    const issues: AccessibilityIssue[] = [];
    
    // Check for proper heading structure
    if (element.tagName.match(/^H[1-6]$/)) {
      const level = parseInt(element.tagName.charAt(1));
      const previousHeadings = document.querySelectorAll(`h1, h2, h3, h4, h5, h6`);
      let previousLevel = 0;
      
      for (let i = 0; i < previousHeadings.length; i++) {
        if (previousHeadings[i] === element) break;
        const prevLevel = parseInt(previousHeadings[i].tagName.charAt(1));
        if (prevLevel > 0) previousLevel = prevLevel;
      }
      
      if (level - previousLevel > 1) {
        issues.push({
          id: `heading-${element.tagName}-${Date.now()}`,
          type: 'warning',
          message: 'Heading level skipped',
          element,
          severity: 'medium',
          wcagCriteria: 'WCAG 2.1 AA - 1.3.1',
          fix: 'Use proper heading hierarchy (h1 → h2 → h3, etc.)'
        });
      }
    }

    // Check for proper form labels
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      const id = element.getAttribute('id');
      const label = element.getAttribute('aria-label');
      const labeledBy = element.getAttribute('aria-labelledby');
      
      if (!id && !label && !labeledBy) {
        issues.push({
          id: `label-${element.tagName}-${Date.now()}`,
          type: 'error',
          message: 'Form control lacks accessible label',
          element,
          severity: 'high',
          wcagCriteria: 'WCAG 2.1 AA - 3.3.2',
          fix: 'Add id attribute and associate with <label> element, or use aria-label'
        });
      }
    }

    // Check for proper alt text on images
    if (element.tagName === 'IMG') {
      const alt = element.getAttribute('alt');
      const role = element.getAttribute('role');
      
      if (!alt && role !== 'presentation' && role !== 'decorative') {
        issues.push({
          id: `alt-${element.tagName}-${Date.now()}`,
          type: 'error',
          message: 'Image lacks alt text',
          element,
          severity: 'high',
          wcagCriteria: 'WCAG 2.1 AA - 1.1.1',
          fix: 'Add alt attribute with descriptive text or role="presentation" for decorative images'
        });
      }
    }

    return issues;
  }, []);

  // Check ARIA attributes
  const checkARIA = useCallback((element: HTMLElement): AccessibilityIssue[] => {
    const issues: AccessibilityIssue[] = [];
    
    // Check for invalid ARIA attributes
    const ariaAttributes = Array.from(element.attributes).filter(attr => attr.name.startsWith('aria-'));
    
    ariaAttributes.forEach(attr => {
      // Check for common ARIA mistakes
      if (attr.name === 'aria-label' && attr.value.trim() === '') {
        issues.push({
          id: `aria-empty-${attr.name}-${Date.now()}`,
          type: 'error',
          message: 'ARIA label is empty',
          element,
          severity: 'medium',
          wcagCriteria: 'WCAG 2.1 AA - 4.1.2',
          fix: 'Provide meaningful text for aria-label or remove the attribute'
        });
      }
      
      if (attr.name === 'aria-hidden' && attr.value === 'true') {
        // Check if hidden element contains focusable content
        const focusableElements = element.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
          issues.push({
            id: `aria-hidden-focusable-${Date.now()}`,
            type: 'error',
            message: 'Hidden element contains focusable content',
            element,
            severity: 'high',
            wcagCriteria: 'WCAG 2.1 AA - 2.1.1',
            fix: 'Remove focusable elements from hidden container or remove aria-hidden'
          });
        }
      }
    });

    return issues;
  }, []);

  // Comprehensive accessibility scan
  const performAccessibilityScan = useCallback(() => {
    if (!enabled) return;

    setIsScanning(true);
    const allIssues: AccessibilityIssue[] = [];
    
    try {
      // Scan all elements
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          // Check color contrast
          allIssues.push(...checkColorContrast(element));
          
          // Check focus management
          allIssues.push(...checkFocusManagement(element));
          
          // Check semantic HTML
          allIssues.push(...checkSemanticHTML(element));
          
          // Check ARIA attributes
          allIssues.push(...checkARIA(element));
        }
      });

      setIssues(allIssues);
      
      // Calculate metrics
      const errors = allIssues.filter(issue => issue.type === 'error').length;
      const warnings = allIssues.filter(issue => issue.type === 'warning').length;
      const info = allIssues.filter(issue => issue.type === 'info').length;
      
      const score = Math.max(0, 100 - (errors * 10) - (warnings * 5) - (info * 2));
      
      setMetrics({
        totalIssues: allIssues.length,
        errors,
        warnings,
        info,
        score,
        contrastIssues: allIssues.filter(issue => issue.message.includes('contrast')).length,
        focusIssues: allIssues.filter(issue => issue.message.includes('focus')).length,
        semanticIssues: allIssues.filter(issue => issue.message.includes('semantic') || issue.message.includes('heading') || issue.message.includes('label')).length
      });

    } catch (error) {
      console.error('Accessibility scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  }, [enabled, checkColorContrast, checkFocusManagement, checkSemanticHTML, checkARIA]);

  // Auto-fix accessibility issues
  const autoFixIssues = useCallback(() => {
    if (!autoFix || issues.length === 0) return;

    setIsFixing(true);
    
    try {
      issues.forEach(issue => {
        if (issue.element && issue.severity === 'low') {
          // Auto-fix low severity issues
          if (issue.message.includes('alt text')) {
            issue.element.setAttribute('alt', 'Image description');
          } else if (issue.message.includes('focus indicator')) {
            issue.element.style.outline = '2px solid #3b82f6';
            issue.element.style.outlineOffset = '2px';
          }
        }
      });

      // Re-scan after fixes
      setTimeout(performAccessibilityScan, 1000);
      
    } catch (error) {
      console.error('Auto-fix failed:', error);
    } finally {
      setIsFixing(false);
    }
  }, [autoFix, issues, performAccessibilityScan]);

  // Highlight issues on the page
  const highlightIssuesOnPage = useCallback(() => {
    if (!highlightIssues || issues.length === 0) return;

    // Clear previous highlights
    highlightedElements.current.forEach(element => {
      element.style.outline = '';
      element.style.outlineOffset = '';
    });
    highlightedElements.current.clear();

    // Add new highlights
    issues.forEach(issue => {
      if (issue.element) {
        const color = issue.type === 'error' ? '#ef4444' : issue.type === 'warning' ? '#f59e0b' : '#3b82f6';
        issue.element.style.outline = `3px solid ${color}`;
        issue.element.style.outlineOffset = '2px';
        highlightedElements.current.add(issue.element);
      }
    });
  }, [highlightIssues, issues]);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-500';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }, [enabled]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enabled) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enabled]);

  // Initialize accessibility enhancements
  useEffect(() => {
    if (!enabled) return;

    // Perform initial scan
    const timer = setTimeout(performAccessibilityScan, 2000);
    
    // Enhance keyboard navigation
    enhanceKeyboardNavigation();
    
    // Announce page load to screen readers
    announceToScreenReader('Page loaded successfully');

    return () => {
      clearTimeout(timer);
      // Clean up highlights
      highlightedElements.current.forEach(element => {
        element.style.outline = '';
        element.style.outlineOffset = '';
      });
    };
  }, [enabled, performAccessibilityScan, enhanceKeyboardNavigation, announceToScreenReader]);

  // Highlight issues when they change
  useEffect(() => {
    if (highlightIssues) {
      highlightIssuesOnPage();
    }
  }, [highlightIssues, highlightIssuesOnPage]);

  if (!enabled) return null;

  return (
    <>
      {showIssues && (
        <div className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
          <div className="font-semibold mb-2 text-cyan-400">Accessibility</div>
          
          {isScanning && (
            <div className="text-cyan-400 text-xs animate-pulse mb-2">
              Scanning...
            </div>
          )}
          
          {metrics.score > 0 && (
            <div className="mb-2">
              <span className="text-gray-300">Score: </span>
              <span className={`font-bold ${metrics.score >= 90 ? 'text-green-400' : metrics.score >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                {metrics.score}/100
              </span>
            </div>
          )}
          
          <div className="space-y-1 text-xs">
            <div>Errors: {metrics.errors}</div>
            <div>Warnings: {metrics.warnings}</div>
            <div>Info: {metrics.info}</div>
          </div>
          
          {issues.length > 0 && (
            <button
              onClick={autoFixIssues}
              disabled={isFixing}
              className="mt-2 w-full px-3 py-1 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs rounded transition-colors"
            >
              {isFixing ? 'Fixing...' : 'Auto-Fix Issues'}
            </button>
          )}
        </div>
      )}
    </>
  );
};