'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface EnhancedCTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  secondaryButton?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  urgency?: boolean;
  socialProof?: {
    text: string;
    count: number;
  };
  className?: string;
}

const EnhancedCTA: React.FC<EnhancedCTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  urgency = false,
  socialProof,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    // Track time on page for urgency
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeOnPage(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const ctaElement = document.getElementById('enhanced-cta');
    if (ctaElement) {
      observer.observe(ctaElement);
    }

    return () => {
      clearInterval(interval);
      if (ctaElement) {
        observer.unobserve(ctaElement);
      }
    };
  }, []);

  const getButtonClasses = (variant: string = 'primary') => {
    const baseClasses = 'inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${baseClasses} bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 focus:ring-green-500 shadow-lg hover:shadow-xl`;
      case 'outline':
        return `${baseClasses} border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500`;
      default:
        return baseClasses;
    }
  };

  const getUrgencyText = () => {
    if (timeOnPage > 60) {
      return "⚡ Limited time offer - Don't miss out!";
    } else if (timeOnPage > 30) {
      return "🔥 Join 500+ companies already transforming with AI!";
    }
    return "✨ Start your AI transformation today!";
  };

  return (
    <section 
      id="enhanced-cta"
      className={`py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency indicator */}
        {urgency && isVisible && (
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 animate-pulse">
              {getUrgencyText()}
            </span>
          </div>
        )}

        {/* Social proof */}
        {socialProof && (
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {socialProof.text} • <span className="font-semibold text-blue-600">{socialProof.count.toLocaleString()}+ companies</span>
            </p>
          </div>
        )}

        {/* Main content */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryButton.href}
            className={getButtonClasses(primaryButton.variant)}
            data-cta="primary"
            onClick={() => {
              // Track CTA click
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  cta_text: primaryButton.text,
                  cta_type: 'primary',
                  cta_location: 'enhanced_cta',
                  time_on_page: timeOnPage
                });
              }
            }}
          >
            {primaryButton.text}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className={getButtonClasses(secondaryButton.variant)}
              data-cta="secondary"
              onClick={() => {
                // Track CTA click
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    cta_text: secondaryButton.text,
                    cta_type: 'secondary',
                    cta_location: 'enhanced_cta',
                    time_on_page: timeOnPage
                  });
                }
              }}
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            500%+ ROI Guaranteed
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free Consultation
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No Setup Fees
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTA;