'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react';

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
      title: "AI Automation",
      description: "Intelligent automation of business processes with decision-making capabilities and exception handling.",
      price: "Starting at $399/month",
      link: "/ai-automation",
      color: "blue"
    },
    {
      icon: Cloud,
      title: "AI Cloud Solutions",
      description: "Scalable AI infrastructure and cloud-based machine learning services for enterprise applications.",
      price: "Starting at $599/month",
      link: "/ai-cloud-solutions",
      color: "cyan"
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI application development with advanced machine learning and deep learning capabilities.",
      price: "Starting at $799/month",
      link: "/ai-development",
      color: "green"
    },
    {
      icon: BarChart,
      title: "AI Analytics",
      description: "Advanced data analytics and business intelligence powered by artificial intelligence.",
      price: "Starting at $499/month",
      link: "/ai-analytics",
      color: "purple"
    }
  ];

  return (
    <React.Fragment>
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24 quantum-energy-field" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line holographic-card-enhanced quantum-pulse-enhanced ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch-enhanced neon-text-enhanced"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text-enhanced neon-glow" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our AI Services
            </h2>
            
            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              {aiServices.map((service, index) => (
                <Suspense key={service.title} fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
                      <service.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <div className={`text-lg sm:text-2xl font-bold text-${service.color}-400 mb-2 neon-text`}>
                        {service.price}
                      </div>
                      <a 
                        href={service.link} 
                        className={`text-${service.color}-400 hover:text-${service.color}-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow`}
                      >
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
            </div>

            {/* Secondary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                    <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                    <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Next-generation quantum computing capabilities for complex problem solving and optimization.
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                    <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1-555-0123"
                onClick={handlePhoneClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
                aria-label="Call us at +1-555-0123"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                +1-555-0123
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
                aria-label="Email us at info@ziontechgroup.com"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                info@ziontechgroup.com
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomePage;