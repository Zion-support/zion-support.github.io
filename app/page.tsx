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
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'header_phone',
        value: 1
      });
    }
  }, []);

  // Stats data
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '5★', label: 'Client Rating' }
  ];

  // Features data
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain insights.',
      icon: Brain,
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      benefits: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits']
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: BarChart,
      benefits: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Business Intelligence']
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment processes.',
      icon: Settings,
      benefits: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Performance Optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      benefits: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps']
    }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 500+ Companies Worldwide
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                Advanced AI & IT Solutions
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                for the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, quantum computing, 
              and autonomous systems. We deliver enterprise-grade solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                aria-label="Get started with our services">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                aria-label="Call us at (302) 464-0950">
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business operations
              </p>
            </div>
            
            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="quantum-card p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-6 text-center cyber-scan-line">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center neon-text">AI Services</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <div className="text-center">
                    <a
                      href="/ai-services"
                      className="cyber-button text-sm px-6 py-3 inline-flex items-center space-x-2 group"
                      aria-label="Learn more about AI Services">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="quantum-card p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-6 text-center cyber-scan-line">⚙️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center neon-text">IT Services</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Complete IT infrastructure management, cloud solutions, cybersecurity, and technical support services.
                  </p>
                  <div className="text-center">
                    <a
                      href="/it-services"
                      className="cyber-button text-sm px-6 py-3 inline-flex items-center space-x-2 group"
                      aria-label="Learn more about IT Services">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="quantum-card p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-6 text-center cyber-scan-line">☁️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center neon-text">Micro SaaS</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Specialized software-as-a-service solutions for specific business needs and workflow optimization.
                  </p>
                  <div className="text-center">
                    <a
                      href="/micro-saas"
                      className="cyber-button text-sm px-6 py-3 inline-flex items-center space-x-2 group"
                      aria-label="Learn more about Micro SaaS">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="quantum-card p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-6 text-center cyber-scan-line">🔒</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center neon-text">Cybersecurity</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    Advanced security solutions to protect your digital assets and ensure compliance with industry standards.
                  </p>
                  <div className="text-center">
                    <a
                      href="/cybersecurity"
                      className="cyber-button text-sm px-6 py-3 inline-flex items-center space-x-2 group"
                      aria-label="Learn more about Cybersecurity">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {features.map((feature, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group" role="listitem">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2" role="list">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors">
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full cyber-button text-center py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                  aria-label="Contact us for a consultation">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                  aria-label="Call us at (302) 464-0950">
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;