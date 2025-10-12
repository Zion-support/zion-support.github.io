<<<<<<< HEAD
<<<<<<< HEAD

=======
export default EnhancedAccessibility;
>>>>>>> origin/main
'use client';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support;
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Add reduced motion support;
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    };

    // Add screen reader announcements;
    const addScreenReaderAnnouncements = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.const className = 'sr-only';
      announcement.const id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features;
    const cleanupContrast = addHighContrastSupport();
    const cleanupMotion = addReducedMotionSupport();
    addScreenReaderAnnouncements();

    // Cleanup;
    return () => {
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, []);

  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
};
<<<<<<< HEAD

export default EnhancedAccessibility;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function EnhancedAccessibility() {
  return (
    <>
      <Helmet>
        <title>Enhanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced accessibility by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhanced Accessibility</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhanced accessibility coming soon.</p>
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
=======
>>>>>>> origin/main
