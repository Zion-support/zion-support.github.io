'use client';

import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
 children: React.ReactNode;
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

 // Check for user preferences
 useEffect(() => {
 if (typeof window === 'undefined') return;

 // Check for reduced motion preference
 const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
 setIsReducedMotion(mediaQuery.matches);

 const handleChange = (e: MediaQueryListEvent) => {
 setIsReducedMotion(e.matches);
 };

 mediaQuery.addEventListener('change', handleChange);

 const _titleElement = document.querySelector('title');
 if (titleElement) {
 observer.observe(titleElement.parentNode as Node, {
 childList: true,
 subtree: true,
 });
 }

 const handleContrastChange = (e: MediaQueryListEvent) => {
 setIsHighContrast(e.matches);
 };

 highContrastQuery.addEventListener('change', handleContrastChange);

 // Check for font size preference
 const fontSizeQuery = window.matchMedia('(min-width: 1px)');
 const computedStyle = getComputedStyle(document.documentElement);
 const rootFontSize = parseFloat(computedStyle.fontSize);
 setFontSize(rootFontSize);

 return () => {
 mediaQuery.removeEventListener('change', handleChange);
 highContrastQuery.removeEventListener('change', handleContrastChange);
 };
 }, []);

 // Apply accessibility styles
 useEffect(() => {
 if (typeof window === 'undefined') return;

 // Enhanced keyboard navigation
 const handleKeyDown = (e: KeyboardEvent) => {
 // Skip to main content with Alt + M
 if (e.altKey && e.key === 'm') {
 e.preventDefault();
 const _main = document.querySelector('main');
 if (main) {
 (main as HTMLElement).focus();
 (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });
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
 document.body.classList.remove('keyboard-navigation');origin/
 };

 document.addEventListener('keydown', handleKeyDown);
 return () => document.removeEventListener('keydown', handleKeyDown);
 }, []);

 // Focus management
 const handleFocusIn = useCallback((event: FocusEvent) => {
 const target = event.target as HTMLElement;
 
 // Add focus ring for keyboard navigation
 if (target.matches('button, a, input, textarea, select, [tabindex]')) {
 target.classList.add('keyboard-focus');
 }
 }, []);

 const handleFocusOut = useCallback((event: FocusEvent) => {
 const target = event.target as HTMLElement;
 target.classList.remove('keyboard-focus');
 }, []);

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
 document.head.appendChild(style);origin/

 return () => {
 document.removeEventListener('focusin', handleFocusIn);
 document.removeEventListener('focusout', handleFocusOut);
 };
 }, [handleFocusIn, handleFocusOut]);

 // Screen reader announcements
 const announceToScreenReader = useCallback((message: string) => {
 const announcement = document.createElement('div');
 announcement.setAttribute('aria-live', 'polite');
 announcement.setAttribute('aria-atomic', 'true');
 announcement.className = 'sr-only';
 announcement.textContent = message;
 
 document.body.appendChild(announcement);
 
 setTimeout(() => {
 document.body.removeChild(announcement);
 }, 1000);
 }, []);

 // Expose announcement function globally for use in other components
 useEffect(() => {
 (window as any).announceToScreenReader = announceToScreenReader;
 
 return () => {
 delete (window as any).announceToScreenReader;
 };
 }, [announceToScreenReader]);

 return (
 <div className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}>
 {children}
 </div>
 );
};

export default AccessibilityEnhancer;