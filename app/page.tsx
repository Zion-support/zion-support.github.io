'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                  <p className="text-gray-300">
                    Advanced artificial intelligence solutions for enterprise applications.
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Cloud Services</h3>
                  <p className="text-gray-300">
                    Comprehensive cloud infrastructure and migration services.
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                  <p className="text-gray-300">
                    Advanced security solutions to protect your digital assets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI and IT solutions can help your organization.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomePage;