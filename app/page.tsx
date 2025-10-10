'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
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

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
));

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Phone Number',
        value: 1
      });
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions tailored to your business needs.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions designed specifically for your requirements.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance productivity with our collaboration and communication tools.'
    }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        keywords="AI solutions, IT services, cybersecurity, cloud computing, digital transformation"
        image="/images/og-image.jpg"
        url="https://ziontechgroup.com"
        type="website"
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <PerformanceOptimizer
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section id="main-content" className="relative pt-20 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Leading AI & IT Solutions Provider
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Transform Your Business with
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      AI & Technology
                    </span>
                  </h1>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="tel:+13024640950" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    onClick={handlePhoneClick}
                    aria-label="Call us at +1 302 464 0950"
                  >
                    Call +1 302 464 0950
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                    aria-label="Email us at kleber@ziontechgroup.com"
                  >
                    Email Us
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  We combine cutting-edge technology with industry expertise to deliver solutions that drive real business value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                  onClick={handlePhoneClick}
                  aria-label="Call us at +1 302 464 0950"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>

          {/* Structured Data */}
          <StructuredData />
        </div>
      </PerformanceOptimizer>
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;