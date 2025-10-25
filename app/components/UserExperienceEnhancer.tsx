<<<<<<< HEAD
"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  enableHoverEffects?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableAccessibility?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  enableAnimations = true,
  enableHoverEffects = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableAccessibility = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Apply accessibility enhancements
    if (enableAccessibility) {
      document.documentElement.setAttribute('data-accessibility-enhanced', 'true');
      
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
      
      if (isReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableAccessibility, enableKeyboardNavigation, isHighContrast, isReducedMotion]);

  // Add CSS classes for enhanced UX
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .ux-enhanced {
        ${enableAnimations && !isReducedMotion ? 'transition: all 0.3s ease;' : ''}
      }
      
      .ux-enhanced button:hover {
        ${enableHoverEffects ? 'transform: translateY(-2px);' : ''}
        ${enableHoverEffects ? 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);' : ''}
      }
      
      .ux-enhanced input:focus,
      .ux-enhanced textarea:focus,
      .ux-enhanced select:focus {
        ${enableFocusManagement ? 'outline: 2px solid #3b82f6;' : ''}
        ${enableFocusManagement ? 'outline-offset: 2px;' : ''}
      }
      
      .keyboard-navigation *:focus {
        ${enableKeyboardNavigation ? 'outline: 2px solid #3b82f6;' : ''}
        ${enableKeyboardNavigation ? 'outline-offset: 2px;' : ''}
      }
      
      .high-contrast {
        filter: contrast(150%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableAnimations, enableHoverEffects, enableFocusManagement, enableKeyboardNavigation, isReducedMotion]);
>>>>>>> origin/main

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
              404
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>
          
          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our support team is here to help you navigate our services and find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Send Email
              </a>
            </div>
          </div>
          
          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400">Fun Fact: </span> Even our AI gets
              confused sometimes. That's why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default enhanceUserExperience;
=======
    <div className="ux-enhanced">
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;
>>>>>>> origin/main
