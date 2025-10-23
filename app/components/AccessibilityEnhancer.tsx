<<<<<<< HEAD
'use client';
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  useEffect(() => {
    // Announce route changes to screen readers
    const announceRouteChange = () => {
      const _title = document.title;
      const _announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Navigated to ${title}`;
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Listen for navigation changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.querySelector('title')) {
          announceRouteChange();
        }
      });
    });

    const _titleElement = document.querySelector('title');
    if (titleElement) {
      observer.observe(titleElement.parentNode as Node, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enableKeyboardNav) return;

<<<<<<< HEAD
    // Enhanced keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const _main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
          (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });
=======
<<<<<<< HEAD
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
=======
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AccessibilityEnhancer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AccessibilityEnhancer solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
          button, a {
            border: 2px solid currentColor !important;
          }
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95
        }
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const _nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
          (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Close modals/dropdowns with Escape
      if (e.key === 'Escape') {
        const _modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        modals.forEach((modal) => {
          const _closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }

      // Navigate through interactive elements with Tab (visual indicator)
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    // Remove keyboard navigation class on mouse use
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNav]);

  useEffect(() => {
    if (!enableFocusIndicators) return;

    // Add custom focus styles
    const _style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid #3B82F6 !important;
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
        border-width: 0;
      }

      .sr-only-focusable:focus,
      .sr-only-focusable:active {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }

      /* Skip link styles */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #3B82F6;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        font-weight: 600;
        border-radius: 0 0 4px 0;
      }

      .skip-link:focus {
        top: 0;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-width: 2px !important;
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
      }

      /* Focus visible polyfill */
      *:focus:not(:focus-visible) {
        outline: none;
      }

      *:focus-visible {
        outline: 3px solid #3B82F6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableFocusIndicators]);

  // Add skip links
  const skipLinks = enableSkipLinks ? (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#navigation" className="skip-link" style={{ left: '160px' }}>
        Skip to navigation
      </a>
      <a href="#footer" className="skip-link" style={{ left: '320px' }}>
        Skip to footer
      </a>
    </>
  ) : null;

  return (
    <>
      {skipLinks}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;