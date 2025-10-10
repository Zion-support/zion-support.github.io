'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

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
      import('./components/ContentPromotionBanner')
      import('./components/ContentCarousel')
    }, 100)
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = memo(() => {
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
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
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
          '@type': 'Organization',
          'name': 'Zion Tech Group',
          'url': 'https://ziontechgroup.com',
          'logo': 'https://ziontechgroup.com/favicon.svg',
          'description': 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'sales',
            'email': 'info@ziontechgroup.com',
            'telephone': '+1-302-464-0950'
          },
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '364 E Main St STE 1008',
            'addressLocality': 'Middletown',
            'addressRegion': 'DE',
            'postalCode': '19709',
            'addressCountry': 'US'
          },
          'sameAs': [
            'https://www.linkedin.com/company/ziontechgroup'
          ]
        }}
      />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Advanced AI & IT Solutions
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    for the Future
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
                  We deliver enterprise-grade solutions that drive innovation and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    aria-label="Get started with our AI and IT solutions"
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 w-5 h-5" aria-hidden="true" />
                  </button>
                  <a 
                    href="tel:+13024640950" 
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your digital transformation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Brain className="w-8 h-8" />,
                    title: "AI Solutions",
                    description: "Machine learning, natural language processing, and predictive analytics to automate and optimize your business processes.",
                    features: ["Machine Learning", "NLP", "Predictive Analytics", "Automation"]
                  },
                  {
                    icon: <Cpu className="w-8 h-8" />,
                    title: "Quantum Computing",
                    description: "Next-generation computing solutions leveraging quantum mechanics for complex problem-solving and optimization.",
                    features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Autonomous Systems",
                    description: "Self-managing systems that adapt and optimize themselves without human intervention for maximum efficiency.",
                    features: ["Self-Healing", "Auto-Scaling", "Predictive Maintenance", "Smart Automation"]
                  },
                  {
                    icon: <Cloud className="w-8 h-8" />,
                    title: "Cloud Infrastructure",
                    description: "Scalable, secure, and reliable cloud solutions that grow with your business needs.",
                    features: ["Multi-Cloud", "DevOps", "Security", "Monitoring"]
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Cybersecurity",
                    description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
                    features: ["Threat Detection", "Compliance", "Penetration Testing", "Security Audits"]
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Digital Transformation",
                    description: "Complete digital overhaul of your business processes to improve efficiency and customer experience.",
                    features: ["Process Automation", "Data Migration", "System Integration", "Change Management"]
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "50+", label: "Enterprise Clients" },
                  { number: "99.9%", label: "Uptime Guarantee" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                  <Calendar className="inline-block ml-2 w-5 h-5" aria-hidden="true" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <Phone className="inline-block mr-2 w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;