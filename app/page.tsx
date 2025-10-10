'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceCardSkeleton } from './components/LoadingStates';

// Lazy load components for better performance
const Navigation = lazy(() => import('./components/Navigation'));
const Footer = lazy(() => import('./components/Footer'));
const EnhancedSEOHead = lazy(() => import('./components/EnhancedSEOHead'));

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Suspense fallback={<ServiceCardSkeleton />}>
          <Navigation />
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Services</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                    <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📢</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Marketing</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                    <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚙️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Automation</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Intelligent automation of business processes with decision-making capabilities and exception handling.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $399/month</div>
                    <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </section>
        </main>

        <Suspense fallback={<ServiceCardSkeleton />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;