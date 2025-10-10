'use client';
import React from 'react';
'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
// Dynamically import heavy components for better performance;
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));
// Preload critical components;
const preloadComponents = (;
  if (typeof window !== 'undefined') {;
    // Preload critical components after initial render;
    setTimeout(() => {;
      import('./components/ContentPromotionBanner');) => {
  return (
    $3
  );
};
      import('./components/ContentCarousel');}
    }, 100);
  }
};
// Loading skeleton component;
const ServiceCardSkeleton: React.FC = memo(() => (;
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>;
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>;
    <div className="h-4 bg-gray-200 rounded mb-2"></div>;
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>;
  </div>;
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';
const HomePage: React.FC = memo(() => {;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
    setIsLoaded(true);
    // Trigger visibility animation;
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components;
    preloadComponents();
    return () => clearTimeout(timer);}
  }, []);
  // Analytics tracking for phone clicks - optimized;
  const handlePhoneClick = useCallback(() => {;
    if (typeof window !== 'undefined' && 'gtag' in window) {;
      (window as any).gtag('event', 'phone_click', {;
        event_category: 'engagement',;
        event_label: 'main_phone_number';}
      });
    }
  }, []);
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com";
        structuredData={{;
          '@context': 'https://schema.org',;
          '@type': 'TechCompany',;
          name: 'Zion Tech Group',;
          url: 'https://ziontechgroup.com',;
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',;
          foundingDate: '2020',;
          numberOfEmployees: '50-100',;
          industry: 'Technology',;
          services: [;
            'AI Solutions',;
            'Quantum Computing',;
            'Autonomous Systems',;
            'Digital Transformation',;
            'Cloud Services',;
            'Automation',;
            'Business Intelligence';
          ],;
          contactPoint: {;
            '@type': 'ContactPoint',;
            telephone: '+1-302-464-0950',;
            contactType: 'Customer Service',;
            areaServed: 'US',;
            availableLanguage: 'en';}
          },;
          address: {;
            '@type': 'PostalAddress',;
            streetAddress: '364 E Main St STE 1008',;
            addressLocality: 'Middletown',;
            addressRegion: 'DE',;
            postalCode: '19709',;
            addressCountry: 'US';}
          }
        }}
      />;
      <PerformanceOptimizer;
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />;
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableSkipLinks={true}
        enableARIALabels={true}
      />;
      <Analytics;
        enableGoogleAnalytics={true}
        enablePerformanceMonitoring={true}
        enableErrorTracking={true}
        enableUserBehaviorTracking={true}
      />;
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
        enableContentTypeSniffingProtection={true}
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain"></div>;
        {/* Navigation */}</div>;
        <Navigation />;
        {/* Skip to main content for accessibility */}
      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>;
        <ContentPromotionBanner />;
      </Suspense>;
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main"></main>;
        {/* Hero Section */}
        <section;
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${;
            isLoaded && isVisible;
              ? 'opacity-100 translate-y-0';
              : 'opacity-0 translate-y-8';}
          }`}
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"></div>;
              <a;
                href="tel:+13024640950";
                onClick={handlePhoneClick}
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12"></div>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month</div>;
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month</div>;
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Intelligent automation of business processes with decision-making capabilities and exception handling.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month</div>;
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
          </div>;
          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12"></div>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>;
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>;
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
            <Suspense fallback={<ServiceCardSkeleton />}>;
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>;
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>;
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>;
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">;
                  Next-generation quantum computing capabilities for complex problem solving and optimization.;
                </p>;
                <div className="text-center"></div>;
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>;
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">;
                    Learn More →;
                  </a>;
                </div>;
              </article>;
            </Suspense>;
          </div>;
          {/* Micro SAAS Services Grid */}
        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>;
          <ContentStatistics />;
        </Suspense>;
        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>;
          <ContentCarousel />;
        </Suspense>;
        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>;
          <DynamicContentShowcase />;
        </Suspense>;
        {/* Newsletter Signup */}
HomePage.displayName = 'HomePage';
export default HomePage;
  </button>
  </label>
  </label>
  </label>
  </label>
  </label>
  </p>
  </p>
  </a>
  </a>
  </h3>
  </h3>
  </h3>
  </h2>
  </h3>
  </h3>
  </h3>
  </h3>
  </h3>
  </p>
  </h2>
  </a>
  </a>
  </p>
  </a>
  </SecurityEnhancer>
  </Analytics>
  </AccessibilityEnhancer>
  </PerformanceOptimizer>
  </SEOOptimizer>