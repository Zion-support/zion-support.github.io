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
    if (typeof window !== 'undefined' && (window as any).gtag) {
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
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Leading AI & IT Solutions Provider
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                    Transform Your Business with
                    <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                      AI & Technology
                    </span>
                  </h1>
                  <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                    Unlock the power of artificial intelligence and cutting-edge technology. We deliver enterprise-grade solutions that drive real business value, increase efficiency by 300%, and accelerate your digital transformation journey.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
                  <a 
                    href="tel:+13024640950" 
                    className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-blue-500/25"
                    onClick={handlePhoneClick}
                    aria-label="Call us at +1 302 464 0950"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call Now: (302) 464-0950
                  </a>
                  <a 
                    href="/contact" 
                    className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
      </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
      </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-700">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-cyan-100 text-lg mb-8">
                Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project Today
                </a>
                <a 
                  href="/case-studies" 
                  className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </a>
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
      </PerformanceOptimizer>
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;