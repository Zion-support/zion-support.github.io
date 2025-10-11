'use client';
import React, { useState, useEffect, Suspense, memo, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Mail, Code, Cloud, Smartphone } from 'lucide-react';

// Memoized loading skeleton component
const ServiceCardSkeleton = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

// Memoized content promotion banner
const ContentPromotionBanner = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
    <p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today!
    </p>
  </div>
));

ContentPromotionBanner.displayName = 'ContentPromotionBanner';

// Memoized accessibility enhancer
const AccessibilityEnhancer = memo(({ 
  enableKeyboardNavigation, 
  enableScreenReaderSupport, 
  enableHighContrast, 
  enableFocusManagement 
}: {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
}) => {
  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    if (enableFocusManagement) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    }
  }, [enableHighContrast, enableFocusManagement]);

  return null;
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

// Memoized service card component
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
    <service.icon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-3">
      {service.name}
    </h3>
    <p className="text-gray-300">
      {service.description}
    </p>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

// Memoized stats component
const StatsSection = memo(() => {
  const stats = useMemo(() => [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Delivered' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5★', label: 'Client Rating' }
  ], []);

  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Memoized services section
const ServicesSection = memo(() => {
  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Brain, description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Automated Email Campaigns' },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Settings, description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Target, description: 'Automated SEO Tools' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Code, description: 'AI Design Tools' }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android' },
    { name: 'API Development', href: '/api-development', icon: Database, description: 'API solutions' }
  ], []);

  return (
    <>
      {/* AI Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          AI Services
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive AI solutions designed to transform your business operations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* IT Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          IT Services
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Complete IT solutions to modernize your infrastructure and drive business growth
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
});

ServicesSection.displayName = 'ServicesSection';

// Main optimized homepage component
const OptimizedHomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoized phone click handler
  const handlePhoneClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'tel:+13024640950';
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Helmet>
      
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg-enhanced matrix-rain-enhanced futuristic-bg-enhanced">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
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
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-4">
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced w-full sm:w-auto text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <StatsSection />

          {/* Services Section */}
          <Suspense fallback={<ServiceCardSkeleton />}>
            <ServicesSection />
          </Suspense>

          {/* CTA Section */}
          <section className="mb-16" aria-labelledby="cta-heading">
            <div className="cyber-card-enhanced hologram-card-enhanced p-8 text-center">
              <h2 id="cta-heading" className="text-2xl font-bold text-white mb-6 neon-text-enhanced">Get Free Consultation</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Contact our experts for a free consultation and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

OptimizedHomePage.displayName = 'OptimizedHomePage';
export default OptimizedHomePage;