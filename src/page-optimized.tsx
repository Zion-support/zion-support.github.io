'use client';
import React, { lazy } from 'react';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Fallback component
const EmptyComponent = () => null;

// Lazy load heavy components - these may not exist, so make them optional
const UnifiedBanner = lazy(() =>
  import('./components/NewestContent2025Banner').catch(() =>
    import('./components/EmptyComponent').catch(() => ({ default: EmptyComponent }))
  )
);

const ContentPromotion = lazy(() =>
  import('./components/UltimateBusinessIntelligence2025Banner').catch(() => {
    return { default: EmptyComponent } as { default: React.ComponentType };
  })
);

const ContentShowcase = lazy(() =>
  import('./components/UltimateBusinessIntelligenceShowcase2025').catch(() => ({
    default: EmptyComponent
  }))
);

export default function OptimizedHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer />
      <AccessibilityEnhancer enableKeyboardNavigation enableScreenReaderSupport enableHighContrast enableFocusManagement enableSkipLinks>
        <div />
      </AccessibilityEnhancer>
      <PerformanceMonitor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="cyber-grid h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="neon-text-advanced block mb-4">
                  AI Enterprise
                </span>
                <span className="holographic-text text-4xl md:text-6xl lg:text-7xl">
                  Transformation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your enterprise with cutting-edge AI solutions that deliver 
                <span className="text-cyan-400 font-semibold"> 300% ROI</span>, 
                <span className="text-purple-400 font-semibold"> 70% cost reduction</span>, and 
                <span className="text-pink-400 font-semibold"> 90% efficiency gains</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold group"
                >
                  <span className="relative z-10">Get Your Free AI Assessment</span>
                </a>
                <a
                  href="/case-studies"
                  className="quantum-button px-8 py-4 text-lg font-semibold group"
                >
                  <span className="relative z-10">View Success Stories</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                  <div className="text-gray-300">Efficiency Gains</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="neon-text-advanced">AI-Powered Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to revolutionize your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="quantum-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Advanced AI solutions including chatbots, automation, and machine learning models
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Explore AI Services →
                </a>
              </div>

              {/* IT Services */}
              <div className="quantum-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="text-purple-400 text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure, cloud solutions, and cybersecurity services
                </p>
                <a href="/it-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Explore IT Services →
                </a>
              </div>

              {/* Digital Transformation */}
              <div className="quantum-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="text-pink-400 text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6">
                  End-to-end digital transformation strategies and implementation
                </p>
                <a href="/services" className="text-pink-400 hover:text-pink-300 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI solutions to drive growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Your Journey
              </a>
              <a
                href="/about"
                className="quantum-button px-8 py-4 text-lg font-semibold"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}