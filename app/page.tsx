'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, Eye, Mic } from 'lucide-react';

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
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization for your business needs.',
      price: 'Starting at $299/month',
      link: '/ai-consulting',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      price: 'Starting at $399/month',
      link: '/ai-automation',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      price: 'Starting at $599/month',
      link: '/ai-cybersecurity',
      color: 'red'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI infrastructure and cloud-based AI services.',
      price: 'Starting at $499/month',
      link: '/ai-cloud',
      color: 'green'
    }
  ];

  const itServices = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications.',
      price: 'Starting at $199/hour',
      link: '/custom-development',
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      price: 'Starting at $149/hour',
      link: '/database-management',
      color: 'orange'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      price: 'Starting at $299/hour',
      link: '/mobile-development',
      color: 'indigo'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications.',
      price: 'Starting at $99/hour',
      link: '/web-development',
      color: 'teal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI and IT Solutions for the Future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence solutions to transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                  <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4 text-center">
                      <service.icon className="mx-auto text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 mb-2">
                        {service.price}
                      </div>
                      <a
                        href={service.link}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                      >
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                  <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4 text-center">
                      <service.icon className="mx-auto text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600 mb-2">
                        {service.price}
                      </div>
                      <a
                        href={service.link}
                        className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
                      >
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your AI and IT needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                onClick={handlePhoneClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;