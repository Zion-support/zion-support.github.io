'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ContentPromotionBanner from './components/ContentPromotionBanner';
import ServiceCardSkeleton from './components/ServiceCardSkeleton';
import { ArrowRight, CheckCircle, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'header_phone'
      });
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies.',
      benefits: ['Smart automation', 'Predictive analytics', 'Intelligent insights', 'Real-time optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your critical data and infrastructure.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients.',
      benefits: ['Measurable ROI', 'Process optimization', 'Cost reduction', 'Performance metrics']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and multi-language capabilities.',
      benefits: ['24/7 support', 'Multi-language', 'Global presence', 'Local expertise']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50M+', label: 'Annual Savings' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services" />
      </Helmet>
      
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a>
          
          {/* Content Promotion Banner */}
          <Suspense fallback={<div>Loading...</div>}>
            <ContentPromotionBanner />
          </Suspense>
          
          <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
            {/* Hero Section */}
            <section
              className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
                isLoaded && isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              aria-labelledby="hero-heading"
            >
              <div className="max-w-6xl mx-auto">
                <h1 
                  id="hero-heading" 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
                  data-text="Zion Tech Group"
                >
                  Zion Tech Group
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">
                  Advanced AI and IT Solutions
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                  Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                  startups, and enterprises worldwide with proven results and 24/7 expert support.
                </p>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl mb-3">{feature.icon === Brain ? '🤖' : feature.icon === Shield ? '🔒' : feature.icon === BarChart ? '⚡' : '🌐'}</div>
                      <h3 className="font-bold text-white mb-3 text-base sm:text-lg">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="cyber-button w-full sm:w-auto text-center"
                    aria-label="Call us at (302) 464-0950"
                  >
                    📞 Call: (302) 464-0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    📧 Email Us
                  </a>
                  <a 
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 mb-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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

            {/* Services Section */}
            <section className="mb-16" aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
                Our Services
              </h2>
              <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
                Comprehensive AI and IT solutions designed to transform your business operations
              </p>
              
              {/* Primary Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">AI Solutions</h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                      Advanced artificial intelligence solutions for enterprise automation and optimization
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="/ai-solutions" 
                        className="cyber-button-small text-xs sm:text-sm"
                        aria-label="Learn more about AI Solutions"
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                </Suspense>
                
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚡</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">Quantum Computing</h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                      Next-generation quantum computing solutions for complex problem solving
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="/quantum-computing" 
                        className="cyber-button-small text-xs sm:text-sm"
                        aria-label="Learn more about Quantum Computing"
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                </Suspense>
                
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🚀</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">Autonomous Systems</h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                      Self-operating systems and robotics for industrial automation
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="/autonomous-systems" 
                        className="cyber-button-small text-xs sm:text-sm"
                        aria-label="Learn more about Autonomous Systems"
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                </Suspense>
                
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🌐</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">Cloud Services</h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                      Scalable cloud infrastructure and migration services
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="/cloud-services" 
                        className="cyber-button-small text-xs sm:text-sm"
                        aria-label="Learn more about Cloud Services"
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                </Suspense>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI-powered solutions to achieve unprecedented growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="/about"
                    className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default HomePage;