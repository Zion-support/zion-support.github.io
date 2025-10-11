'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone } from 'lucide-react';
// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    </div><div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
    </div><p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today!
    </p>
  </div>
);

// Accessibility enhancer component
const AccessibilityEnhancer = ({ 
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
};

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence that learns, adapts, and delivers measurable results for your business.',
      color: 'from-purple-500 to-pink-600',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-600',
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection and 24/7 monitoring.',
      color: 'from-red-500 to-orange-600',
      benefits: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that reduces manual work by 80% and increases efficiency dramatically.',
      color: 'from-yellow-500 to-green-600',
      benefits: ['Workflow Automation', 'RPA', 'API Integration', 'Smart Scheduling']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Real-time Dashboards', 'Predictive Modeling', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of certified professionals providing 24/7 support and consultation.',
      color: 'from-emerald-500 to-teal-600',
      benefits: ['24/7 Support', 'Certified Experts', 'Proactive Monitoring', 'Training & Documentation']
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const aiServices = [
    { name: 'Machine Learning', description: 'Custom ML models for your business needs', icon: Brain },
    { name: 'Natural Language Processing', description: 'AI-powered text analysis and generation', icon: Code },
    { name: 'Computer Vision', description: 'Image recognition and analysis solutions', icon: Eye },
    { name: 'Predictive Analytics', description: 'Data-driven insights and forecasting', icon: BarChart },
    { name: 'AI Automation', description: 'Intelligent process automation', icon: Zap },
    { name: 'AI Consulting', description: 'Strategic AI implementation guidance', icon: Target }
  ];

  const itServices = [
    { name: 'Cloud Migration', description: 'Seamless cloud infrastructure migration', icon: Cloud },
    { name: 'DevOps', description: 'Continuous integration and deployment', icon: Settings },
    { name: 'Cybersecurity', description: 'Comprehensive security solutions', icon: Shield },
    { name: 'Database Management', description: 'Optimized database solutions', icon: Database },
    { name: 'API Development', description: 'RESTful and GraphQL APIs', icon: Code },
    { name: 'System Integration', description: 'Connect and optimize your systems', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        </Helmet><title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>

))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'
const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    // Preload components
    preloadComponents()
    return () => clearTimeout(timer)
  }, [])
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, [])
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
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />

        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  🚀 Trusted by 500+ Companies Worldwide
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight neon-text-advanced">
                Transform Your Business with 
                <span className="block text-6xl md:text-8xl mt-2 glitch-advanced" data-text="AI & IT Solutions">AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth for businesses worldwide. Get results in 30 days or less.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>30-Day Results Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No Long-term Contracts</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 cyber-button-advanced cyber-glow text-white rounded-lg font-semibold flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/services" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group hover-glow-advanced"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 text-green-400 mr-1" />
                  <span>99% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-purple-400 mr-1" />
                  <span>10+ Years Experience</span>
                </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            </section><div className="
              {stats.map((stat, index) => (
                </div><div key={index} className="text-center">
                  </div><div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group cyber-card-advanced holographic-card-advanced quantum-pulse-advanced hover-lift-advanced rounded-2xl p-8"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
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
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            </section></section><h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  </div><service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            </section></section><h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  </div><service.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechCorp Inc.",
                  role: "CEO",
                  content: "Zion Tech Group transformed our operations with their AI solutions. We've seen a 300% increase in efficiency and saved over $2M annually.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  company: "Global Finance Ltd.",
                  role: "CTO",
                  content: "Their cloud migration was seamless. Zero downtime and 40% cost reduction. The team's expertise is unmatched.",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  company: "HealthTech Solutions",
                  role: "VP of Operations",
                  content: "The AI-powered analytics platform they built for us has revolutionized our decision-making process. ROI was achieved in just 2 months.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-advanced matrix-rain-advanced particle-bg-advanced">
        {/* Navigation */}
        <Navigation />
        {/* Skip to main content for accessibility */}
        <$2 />
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <ContentPromotionBanner />
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
        {/* Hero Section */}
        <$2 />
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-6xl mx-auto">
            <$2 />
              id="hero-heading" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
              data-text="Zion Tech Group"
            >Zion Tech Group
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">Advanced AI and IT Solutions
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
              startups, and enterprises worldwide with proven results and 24/7 expert support.
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3">🚀
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3">⚡
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3">🔒
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">🌐
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <$2 />
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call: (302) 464-0950
              <$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Email Us
              <$2 />
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Consultation
            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">📍 364 E Main St STE 1008, Middletown, DE 19709
              <p className="text-gray-300 text-sm">⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Our Services
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">Comprehensive AI and IT solutions designed to transform your business operations
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                    Learn More →
          {/* Micro SAAS Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text-advanced">Micro SAAS Solutions
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$149/month
                    <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$199/month
                    <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$299/month
                    <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month
                    <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$179/month
                    <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month
                    <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$129/month
                    <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$79/month
                    <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                      Learn More →
          {/* IT Services & Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">IT Services & Infrastructure
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month
                  <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month
                  <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month
                  <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$399/month
                  <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month
                  <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month
                  <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Strategic IT planning, technology assessment, and digital transformation consulting.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$299/hour
                  <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$499/month
                  <a href="/it-support" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                    Learn More →
          {/* New AI Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">Advanced AI Services
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Customer Support
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $199/month
                  <a href="/ai-customer-support" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sales Automation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $299/month
                  <a href="/ai-sales-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Workflow Automation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">Starting at $99/month
                  <a href="/ai-workflow-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Visualization
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Starting at $149/month
                  <a href="/ai-data-visualization" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Lead Generation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month
                  <a href="/ai-lead-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Document Processing
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $149/month
                  <a href="/ai-document-processing" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
          {/* Emerging Technologies Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">Emerging Technologies
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Robotics
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing
                  <a href="/robotics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">Starting at $499/month
                  <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔗
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">Starting at $699/month
                  <a href="/blockchain-web3" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">Starting at $399/month
                  <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Learn More →
          {/* IT Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">IT Services & Infrastructure
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">Starting at $299/month
                  <a href="/devops" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Mobile Development
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">Starting at $1,299/month
                  <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Database Services
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-400 mb-2">Starting at $199/month
                  <a href="/database" className="text-teal-400 hover:text-teal-300 font-medium text-sm">
                    Learn More →
        {/* Micro SAAS Solutions Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Micro SAAS Solutions
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          {/* Productivity Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">Productivity & Business Tools
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Writing Assistant
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month
                  <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Smart Analytics
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month
                  <a href="/smart-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Scheduler
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month
                  <a href="/ai-scheduler" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Expense Tracker
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$15/month
                  <a href="/expense-tracker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Task Manager Pro
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$39/month
                  <a href="/task-manager-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">CRM Lite
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$59/month
                  <a href="/crm-lite" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Email Optimizer
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$25/month
                  <a href="/email-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Social Media Manager
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-2">$45/month
                  <a href="/social-media-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                    Try Free →
          {/* Marketing & Sales Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">Marketing & Sales Tools
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Design Studio
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$35/month
                  <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Landing Page Builder
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month
                  <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">SEO Optimizer
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month
                  <a href="/seo-optimizer" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ad Campaign Manager
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$79/month
                  <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
          {/* Developer Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">Developer Tools
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Assistant
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$39/month
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">API Builder
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$59/month
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐛
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bug Tracker Pro
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-2">$25/month
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm">
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Doc Generator
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically generate technical documentation, API docs, and user guides from code.
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        {/* Contact Section */}
        <section className="mb-16" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Business?
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-gray-300 text-sm">Phone
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        +1 (302) 464-0950
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-gray-300 text-sm">Email
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        kleber@ziontechgroup.com
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-gray-300 text-sm">Address
                      <p className="text-white font-semibold">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours
                      <p className="text-white font-semibold">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
              {/* Quick Contact Form */}
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors">
                      <option value="">Select a service
                      <option value="ai-services">AI Services
                      <option value="it-services">IT Services
                      <option value="micro-saas">Micro SAAS Solutions
                      <option value="consulting">IT Consulting
                      <option value="other">Other
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project or requirements"
                    >
                  <$2 />
                    type="submit"
                    className="w-full cyber-button text-center py-4">Send Message
      <Footer />
  )
}
export default HomePage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h2></h2></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></main></section></section></section></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article></article>
