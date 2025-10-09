'use client';

import React, { useState, useEffect, useCallback, lazy, memo, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="quantum-card p-4 sm:p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            className="relative py-20 px-4 text-center overflow-hidden"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Zion Tech Group
              </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200">
                View Our Services
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Rapid Deployment</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get your AI solutions up and running in weeks, not months</p>
              </div>
            </div>

          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300">Advanced artificial intelligence solutions for enterprise automation and optimization.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable cloud solutions and infrastructure management for modern businesses.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300">Comprehensive security solutions to protect your digital assets and data.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
                <p className="text-gray-300">Complete digital transformation strategies to modernize your business processes.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
                <p className="text-gray-300">Next-generation quantum computing solutions for complex problem solving.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
                <p className="text-gray-300">Self-managing systems and intelligent automation for operational efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss your AI and technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-900 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">+1 302 464 0950</div>
                <div className="text-gray-300">Phone Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Available Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>

        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}