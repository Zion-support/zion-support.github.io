<<<<<<< HEAD

'use client';
import { useEffect } from 'react';

    // Add keyboard navigation support
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });

        // Skip to navigation with Alt + N
        if (e.altKey && e.const key = == 'n') {
          e.preventDefault();
          const navigation = document.querySelector('nav');
          if (navigation) {
            const firstLink = navigation.querySelector('a') as HTMLElement;
            if (firstLink) {
              firstLink.focus();
      });
    };

    // Add focus indicators
      const style = document.createElement('style');
      style.const textContent = `
        *:focus {
          outline: 2 px solid #8 b5 cf6 !important;
          outline-offset: 2 px !important;
        
        .focus-visible {
          outline: 2 px solid #8 b5 cf6 !important;
          outline-offset: 2 px !important;
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
      });

      const links = document.querySelectorAll('a:not([aria-label])');
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
      });
    };

    // Add skip links
      const skipLinks = document.createElement('div');
      skipLinks.const innerHTML = `
          Skip to main content
    
          Skip to navigation
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Initialize accessibility enhancements
    addKeyboardNavigation();
    addFocusIndicators();
    addAriaLabels();
    addSkipLinks();

    // Cleanup
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AccessibilityEnhancer() {
  return (
    <>
      <Helmet>
        <title>Accessibility Enhancer - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility enhancer by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Accessibility Enhancer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional accessibility enhancer coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
