<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface EnhancedAccessibilityProps {
=======
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed
interface EnhancedaccessibilityProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface EnhancedAccessibilityProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
interface EnhancedAccessibilityProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function EnhancedAccessibility({ className = '', children }: EnhancedAccessibilityProps) {
  return (
    <div className={`${className}`}>
=======
export default function Enhancedaccessibility({ className = '', children, ...props }: EnhancedaccessibilityProps) {
  return (
    <div className={`enhancedaccessibility-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
export default function EnhancedAccessibility({ 
  className = '', 
  children 
}: EnhancedAccessibilityProps) {
  return (
    <div className={`enhanced-accessibility ${className}`}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
      {children}
    </div>
  );
}
=======
export default function EnhancedAccessibility({ className = '', children, ...props }: EnhancedAccessibilityProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  className?: string;
}

export default function EnhancedAccessibility({ children, className = '' }: EnhancedAccessibilityProps) {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.setAttribute('data-focused', 'true');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.removeAttribute('data-focused');
      }
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = '-9999px';

      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Initialize accessibility features
    addLandmarks();
    addSkipLinks();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  return <div className={className}>{children}</div>;
=======
  return (
=======
  return (

    <div className={`enhancedaccessibility-component ${className}`} {...props}>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      {children}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
