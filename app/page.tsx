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
        event_label: 'header_phone'
      });
    }
  }, []);

  // Data arrays
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '5★', label: 'Client Rating' }
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      icon: Brain,
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'DevOps Automation', 'Container Orchestration', 'Auto-scaling']
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      icon: BarChart,
      benefits: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      benefits: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      benefits: ['iOS/Android Apps', 'React Native', 'Flutter', 'Progressive Web Apps']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      icon: Code,
      benefits: ['React/Next.js', 'Node.js', 'TypeScript', 'Performance Optimization']
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'DevOps Automation', 'Container Orchestration', 'Auto-scaling']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      icon: BarChart,
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
    }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of experience',
      icon: Users,
      points: ['Certified Engineers', 'Industry Expertise', 'Continuous Learning', 'Best Practices']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      icon: Clock,
      points: ['Instant Response', 'Proactive Monitoring', 'Regular Updates', 'Emergency Support']
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-proof solutions that grow with your business',
      icon: TrendingUp,
      points: ['Modular Architecture', 'Easy Scaling', 'Technology Updates', 'Long-term Support']
    }
  ];

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-8 cyber-text">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Advanced AI and IT Solutions for Modern Businesses
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <div className="text-sm sm:text-base text-gray-300">Fast Delivery</div>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <div className="text-sm sm:text-base text-gray-300">High Performance</div>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <div className="text-sm sm:text-base text-gray-300">Secure Solutions</div>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <div className="text-sm sm:text-base text-gray-300">Global Reach</div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  aria-label="Call us for a free consultation"
                >
                  Get Free Consultation
                </button>
                <button
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  aria-label="View our portfolio and case studies"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center">
                  AI Development
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 text-center">
                  Custom AI solutions tailored to your business needs
                </p>
                <div className="text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Advanced AI Solutions
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Machine Learning</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Natural Language Processing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Computer Vision</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                    <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                      Get Quote
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                      <div className="text-sm text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                      <div className="text-sm text-gray-300">Uptime Guarantee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5★</div>
                      <div className="text-sm text-gray-300">Client Rating</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Grid Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your digital transformation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {features.map((feature, index) => (
                  <article key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group" role="listitem">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
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

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI and IT solutions can accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    aria-label="Call us for a free consultation"
                  >
                    Get Free Consultation
                  </button>
                  <button
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                    aria-label="View our portfolio and case studies"
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to start your digital transformation journey? Contact us today for a free consultation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="cyber-card group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We deliver exceptional results through cutting-edge technology and expert guidance
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="cyber-card group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="space-y-2">
                        {benefit.points.map((point, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from our satisfied clients
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      JS
                    </div>
                    <div>
                      <div className="text-white font-semibold">John Smith</div>
                      <div className="text-sm text-gray-400">CEO, TechCorp</div>
                    </div>
                  </div>
                </div>
                <div className="cyber-card">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "Outstanding service and support. They delivered our project ahead of schedule and exceeded expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      MJ
                    </div>
                    <div>
                      <div className="text-white font-semibold">Maria Johnson</div>
                      <div className="text-sm text-gray-400">CTO, InnovateLabs</div>
                    </div>
                  </div>
                </div>
                <div className="cyber-card">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "The team's expertise in AI and machine learning helped us build a competitive advantage in our market."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      DW
                    </div>
                    <div>
                      <div className="text-white font-semibold">David Wilson</div>
                      <div className="text-sm text-gray-400">VP Engineering, DataFlow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their digital transformation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+13024640950" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                  Email kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;