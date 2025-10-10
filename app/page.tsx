'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import StructuredData from './components/StructuredData';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));

// Performance optimization: Debounce scroll events
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// ServiceCardSkeleton is imported from EnhancedLoadingStates

// Performance-optimized HomePage component
const HomePage: React.FC = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentYear] = useState(new Date().getFullYear());

  // Performance optimization: Memoized callback for phone click
  const handlePhoneClick = useCallback(() => {
    // Track phone click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number',
        value: 1
      });
    }
  }, []);

  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section id="main-content" className="relative pt-20 pb-16 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Advanced AI and IT Solutions for the Future
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, quantum computing, 
                and autonomous systems. We deliver innovative solutions that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button 
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  Call Now: (302) 464-0950
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg">
                  Schedule Consultation
                </button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">99%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16 text-white">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                  <Brain className="w-16 h-16 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    AI-Powered Solutions
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Advanced artificial intelligence and machine learning solutions tailored to your business needs.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                  <Cloud className="w-16 h-16 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Cloud Infrastructure
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Scalable and secure cloud solutions for modern businesses.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-pink-400 transition-all duration-300 hover:transform hover:scale-105">
                  <Shield className="w-16 h-16 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Cybersecurity
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Comprehensive security solutions to protect your digital assets.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105">
                  <Code className="w-16 h-16 text-green-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Custom Development
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Bespoke software solutions designed specifically for your requirements.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
                  <BarChart className="w-16 h-16 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Data Analytics
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Transform your data into actionable insights with our analytics solutions.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-indigo-400 transition-all duration-300 hover:transform hover:scale-105">
                  <Users className="w-16 h-16 text-indigo-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Team Collaboration
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Enhance productivity with our collaboration and communication tools.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl font-bold mb-8 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can help your business grow and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-5 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-lg"
                >
                  Call Now: (302) 464-0950
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>

          {/* Enhanced Structured Data */}
          <StructuredData type="Organization" />
          <StructuredData type="WebSite" />
          <StructuredData type="WebPage" />
          <StructuredData type="Service" />
          <StructuredData type="LocalBusiness" />
        </div>
      </AccessibilityEnhancer>
    </React.Fragment>
  );
});

HomePage.displayName = 'HomePage';
export default HomePage;