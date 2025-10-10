'use client';

import React, { useState, useEffect, Suspense, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ContentPromotionBanner } from './components/ContentPromotionBanner';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"> </div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300">
                  Next-Generation AI & IT Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
            </div>
          </div>
        </section>

        {/* Micro SAAS Solutions Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Affordable, powerful AI-driven tools for modern businesses. 100+ ready-to-use applications with real market value.
          </p>
          
          {/* Productivity Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8 text-center">
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">AI Task Manager Pro</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Intelligent task management with AI-powered prioritization and automated scheduling.
                </p>
                <div className="text-blue-400 font-semibold">$29/month</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">AI Expense Tracker</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Smart expense tracking with receipt scanning and automated categorization.
                </p>
                <div className="text-blue-400 font-semibold">$19/month</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">AI Time Tracker</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced time tracking with productivity insights and automated reporting.
                </p>
                <div className="text-blue-400 font-semibold">$24/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16" aria-labelledby="contact-heading">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 id="contact-heading" className="text-3xl font-bold text-white mb-8 text-center">
              Ready to Transform Your Business?
            </h2>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our experts to discuss your project requirements and discover how our AI solutions can drive your success.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={handlePhoneClick}
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+1-555-0123"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  onClick={handlePhoneClick}
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default HomePage;