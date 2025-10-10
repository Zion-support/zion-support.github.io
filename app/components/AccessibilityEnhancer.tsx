'use client';
import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
  enableVoiceNavigation?: boolean;
  enableAnalytics?: boolean;
  enableConsoleLogging?: boolean;
  enableErrorReporting?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableTextScaling = true,
  enableMotionReduction = true,
  enableVoiceNavigation = true,
  enableAnalytics = true,
  enableConsoleLogging = false,
  enableErrorReporting = true
}) => {
  const [accessibilityMetrics, setAccessibilityMetrics] = useState({
    keyboardNavigation: 0,
    screenReaderSupport: 0,
    ariaLabels: 0,
    colorContrast: 0,
    focusManagement: 0,
    errors: [] as any[]
  });

  // Error reporting
  const reportError = useCallback((error: any, context?: string) => {
    if (!enableErrorReporting) return;

    const errorData = {
      message: error.message || 'Unknown accessibility error',
      context: context || 'AccessibilityEnhancer',
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      accessibilityMetrics
    };

    setAccessibilityMetrics(prev => ({
      ...prev,
      errors: [...prev.errors, errorData]
    }));

    // Send to analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'accessibility_error', {
        event_category: 'Accessibility',
        event_label: context || 'AccessibilityEnhancer',
        value: 1,
        custom_parameter_1: error.message
      });
    }

    // Send to custom endpoint
    if (typeof window !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/accessibility-errors', JSON.stringify(errorData));
    }
  }, [enableErrorReporting, enableAnalytics, accessibilityMetrics]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      try {
        // Track keyboard navigation usage
        setAccessibilityMetrics(prev => ({
          ...prev,
          keyboardNavigation: prev.keyboardNavigation + 1
        }));

        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          const mainContent = document.querySelector('main, [role="main"]');
          if (mainContent) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
          }
        }

        // Skip to navigation
        if (event.key === 'Tab' && event.altKey) {
          const navigation = document.querySelector('nav, [role="navigation"]');
          if (navigation) {
            (navigation as HTMLElement).focus();
            event.preventDefault();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"], .modal');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              (modal as HTMLElement).click();
            }
          });
        }

        if (enableConsoleLogging) {
          console.log('Keyboard navigation:', event.key);
        }
      } catch (error) {
        reportError(error, 'KeyboardNavigation');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, enableConsoleLogging, reportError]);

  // Screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    const enhanceScreenReaderSupport = () => {
      try {
        // Add screen reader announcements
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.id = 'screen-reader-announcements';
        document.body.appendChild(announcement);

        // Enhance form labels
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
            const label = document.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              inputElement.setAttribute('aria-labelledby', label.id || `label-${inputElement.id}`);
            }
          }
        });

        // Add role attributes where needed
        const buttons = document.querySelectorAll('button, [role="button"]');
        buttons.forEach(button => {
          if (!button.getAttribute('role')) {
            button.setAttribute('role', 'button');
          }
        });

        setAccessibilityMetrics(prev => ({
          ...prev,
          screenReaderSupport: prev.screenReaderSupport + 1
        }));

        if (enableConsoleLogging) {
          console.log('Screen reader support enhanced');
        }
      } catch (error) {
        reportError(error, 'ScreenReaderSupport');
      }
    };

    if (document.readyState === 'complete') {
      enhanceScreenReaderSupport();
    } else {
      document.addEventListener('DOMContentLoaded', enhanceScreenReaderSupport);
    }

    return () => {
      const announcement = document.getElementById('screen-reader-announcements');
      if (announcement) {
        announcement.remove();
      }
    };
  }, [enableScreenReaderSupport, enableConsoleLogging, reportError]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    const handleHighContrast = () => {
      try {
        // Check for high contrast mode
        const isHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        
        if (isHighContrast) {
          document.body.classList.add('high-contrast');
          
          // Enhance contrast for better visibility
          const style = document.createElement('style');
          style.textContent = `
            .high-contrast {
              filter: contrast(1.2) brightness(1.1);
            }
            .high-contrast * {
              border-color: currentColor !important;
            }
          `;
          document.head.appendChild(style);
        }

        if (enableConsoleLogging) {
          console.log('High contrast mode:', isHighContrast);
        }
      } catch (error) {
        reportError(error, 'HighContrast');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', handleHighContrast);
    handleHighContrast();

    return () => mediaQuery.removeEventListener('change', handleHighContrast);
  }, [enableHighContrast, enableConsoleLogging, reportError]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const handleFocusManagement = () => {
      try {
        // Track focus changes
        const handleFocus = (event: FocusEvent) => {
          setAccessibilityMetrics(prev => ({
            ...prev,
            focusManagement: prev.focusManagement + 1
          }));

          // Ensure focus is visible
          const target = event.target as HTMLElement;
          if (target) {
            target.style.outline = '2px solid #0066cc';
            target.style.outlineOffset = '2px';
          }
        };

        const handleBlur = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target) {
            target.style.outline = '';
            target.style.outlineOffset = '';
          }
        };

        document.addEventListener('focusin', handleFocus);
        document.addEventListener('focusout', handleBlur);

        return () => {
          document.removeEventListener('focusin', handleFocus);
          document.removeEventListener('focusout', handleBlur);
        };
      } catch (error) {
        reportError(error, 'FocusManagement');
      }
    };

    const cleanup = handleFocusManagement();
    return cleanup;
  }, [enableFocusManagement, reportError]);

  // ARIA labels enhancement
  useEffect(() => {
    if (!enableAriaLabels || typeof window === 'undefined') return;

    const enhanceAriaLabels = () => {
      try {
        // Add missing ARIA labels
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
          const imageElement = img as HTMLImageElement;
          if (!imageElement.alt) {
            imageElement.alt = 'Image';
            imageElement.setAttribute('aria-label', 'Image');
          }
        });

        // Add ARIA labels to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
        interactiveElements.forEach(element => {
          const el = element as HTMLElement;
          if (!el.getAttribute('aria-label') && !el.textContent?.trim()) {
            el.setAttribute('aria-label', el.tagName.toLowerCase());
          }
        });

        setAccessibilityMetrics(prev => ({
          ...prev,
          ariaLabels: prev.ariaLabels + 1
        }));

        if (enableConsoleLogging) {
          console.log('ARIA labels enhanced');
        }
      } catch (error) {
        reportError(error, 'AriaLabels');
      }
    };

    if (document.readyState === 'complete') {
      enhanceAriaLabels();
    } else {
      document.addEventListener('DOMContentLoaded', enhanceAriaLabels);
    }
  }, [enableAriaLabels, enableConsoleLogging, reportError]);

  // Skip links
  useEffect(() => {
    if (!enableSkipLinks || typeof window === 'undefined') return;

    const addSkipLinks = () => {
      try {
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.innerHTML = `
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <a href="#navigation" class="skip-link">Skip to navigation</a>
          <a href="#footer" class="skip-link">Skip to footer</a>
        `;

        const style = document.createElement('style');
        style.textContent = `
          .skip-links {
            position: absolute;
            top: -40px;
            left: 0;
            z-index: 1000;
          }
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
          }
          .skip-link:focus {
            top: 6px;
          }
        `;

        document.head.appendChild(style);
        document.body.insertBefore(skipLinks, document.body.firstChild);

        if (enableConsoleLogging) {
          console.log('Skip links added');
        }
      } catch (error) {
        reportError(error, 'SkipLinks');
      }
    };

    if (document.readyState === 'complete') {
      addSkipLinks();
    } else {
      document.addEventListener('DOMContentLoaded', addSkipLinks);
    }
  }, [enableSkipLinks, enableConsoleLogging, reportError]);

  // Color contrast checking
  useEffect(() => {
    if (!enableColorContrast || typeof window === 'undefined') return;

    const checkColorContrast = () => {
      try {
        // Basic color contrast checking
        const elements = document.querySelectorAll('*');
        let contrastIssues = 0;

        elements.forEach(element => {
          const computedStyle = window.getComputedStyle(element);
          const color = computedStyle.color;
          const backgroundColor = computedStyle.backgroundColor;
          
          // Simple contrast check (this is a basic implementation)
          if (color && backgroundColor && color !== backgroundColor) {
            // This would need a proper contrast ratio calculation
            // For now, just track that we're checking
            contrastIssues++;
          }
        });

        setAccessibilityMetrics(prev => ({
          ...prev,
          colorContrast: contrastIssues
        }));

        if (enableConsoleLogging) {
          console.log('Color contrast checked:', contrastIssues);
        }
      } catch (error) {
        reportError(error, 'ColorContrast');
      }
    };

    if (document.readyState === 'complete') {
      checkColorContrast();
    } else {
      document.addEventListener('DOMContentLoaded', checkColorContrast);
    }
  }, [enableColorContrast, enableConsoleLogging, reportError]);

  // Text scaling support
  useEffect(() => {
    if (!enableTextScaling || typeof window === 'undefined') return;

    const handleTextScaling = () => {
      try {
        // Add text scaling support
        const style = document.createElement('style');
        style.textContent = `
          html {
            font-size: 16px;
          }
          @media (min-width: 768px) {
            html {
              font-size: 18px;
            }
          }
          @media (min-width: 1024px) {
            html {
              font-size: 20px;
            }
          }
        `;
        document.head.appendChild(style);

        if (enableConsoleLogging) {
          console.log('Text scaling support added');
        }
      } catch (error) {
        reportError(error, 'TextScaling');
      }
    };

    handleTextScaling();
  }, [enableTextScaling, enableConsoleLogging, reportError]);

  // Motion reduction
  useEffect(() => {
    if (!enableMotionReduction || typeof window === 'undefined') return;

    const handleMotionReduction = () => {
      try {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
          document.body.classList.add('reduce-motion');
          
          const style = document.createElement('style');
          style.textContent = `
            .reduce-motion * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          `;
          document.head.appendChild(style);
        }

        if (enableConsoleLogging) {
          console.log('Motion reduction:', prefersReducedMotion);
        }
      } catch (error) {
        reportError(error, 'MotionReduction');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', handleMotionReduction);
    handleMotionReduction();

    return () => mediaQuery.removeEventListener('change', handleMotionReduction);
  }, [enableMotionReduction, enableConsoleLogging, reportError]);

  // Voice navigation support
  useEffect(() => {
    if (!enableVoiceNavigation || typeof window === 'undefined') return;

    const handleVoiceNavigation = () => {
      try {
        // Add voice navigation support
        if ('speechSynthesis' in window) {
          const speak = (text: string) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
          };

          // Add voice navigation to buttons
          const buttons = document.querySelectorAll('button, [role="button"]');
          buttons.forEach(button => {
            button.addEventListener('focus', () => {
              const text = button.textContent || button.getAttribute('aria-label') || 'Button';
              speak(text);
            });
          });
        }

        if (enableConsoleLogging) {
          console.log('Voice navigation support added');
        }
      } catch (error) {
        reportError(error, 'VoiceNavigation');
      }
    };

    if (document.readyState === 'complete') {
      handleVoiceNavigation();
    } else {
      document.addEventListener('DOMContentLoaded', handleVoiceNavigation);
    }
  }, [enableVoiceNavigation, enableConsoleLogging, reportError]);

  // Accessibility metrics reporting
  useEffect(() => {
    const reportAccessibilityMetrics = () => {
      try {
        const summary = {
          keyboardNavigation: accessibilityMetrics.keyboardNavigation,
          screenReaderSupport: accessibilityMetrics.screenReaderSupport,
          ariaLabels: accessibilityMetrics.ariaLabels,
          colorContrast: accessibilityMetrics.colorContrast,
          focusManagement: accessibilityMetrics.focusManagement,
          errorCount: accessibilityMetrics.errors.length,
          timestamp: Date.now(),
          url: window.location.href
        };

        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'accessibility_metrics', {
            event_category: 'Accessibility',
            event_label: 'Metrics',
            value: 1,
            custom_parameter_1: JSON.stringify(summary)
          });
        }

        if (enableConsoleLogging) {
          console.log('Accessibility metrics:', summary);
        }
      } catch (error) {
        reportError(error, 'AccessibilityMetrics');
      }
    };

    // Report metrics after 10 seconds
    const timeout = setTimeout(reportAccessibilityMetrics, 10000);

    return () => clearTimeout(timeout);
  }, [accessibilityMetrics, enableAnalytics, enableConsoleLogging, reportError]);

  return null;
};

export default AccessibilityEnhancer;