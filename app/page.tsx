'use client';
import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone, Play, Pause, RefreshCw, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Menu, X, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-pulse" role="status" aria-label="Loading service card">
    <div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-8 bg-gray-600 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded w-5/6"></div>
  </div>
);

// Futuristic Background Component
const FuturisticBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div className="absolute inset-0 cyber-grid"></div>
    <div className="absolute inset-0 neural-network-bg"></div>
    <div className="absolute inset-0 matrix-rain"></div>
    
    {/* Animated particles */}
    <div className="particle-system">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
    
    {/* Floating geometric shapes */}
    <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-lg rotate-45 animate-pulse"></div>
    <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 rounded-full animate-bounce"></div>
    <div className="absolute bottom-40 left-20 w-40 h-40 border border-pink-400/20 rounded-lg rotate-12 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-28 h-28 border border-green-400/20 rounded-full animate-bounce"></div>
  </div>
);

// Enhanced Accessibility enhancer component
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence that learns, adapts, and delivers measurable results for your business.',
      color: 'from-purple-500 to-pink-600',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision'],
      stats: '40% efficiency increase'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-600',
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization'],
      stats: '60% cost reduction'
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection and 24/7 monitoring.',
      color: 'from-red-500 to-orange-600',
      benefits: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Audits'],
      stats: '99.9% threat prevention'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that reduces manual work by 80% and increases efficiency dramatically.',
      color: 'from-yellow-500 to-green-600',
      benefits: ['Workflow Automation', 'RPA', 'API Integration', 'Smart Scheduling'],
      stats: '80% time savings'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Real-time Dashboards', 'Predictive Modeling', 'Custom Reports', 'Data Visualization'],
      stats: '25% revenue increase'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of certified professionals providing 24/7 support and consultation.',
      color: 'from-emerald-500 to-teal-600',
      benefits: ['24/7 Support', 'Certified Experts', 'Proactive Monitoring', 'Training & Documentation'],
      stats: '4.9/5 rating'
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $2,999/month',
      popular: true
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation'],
      price: 'Starting at $1,999/month',
      popular: false
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $2,499/month',
      popular: true
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services'],
      price: 'Starting at $3,999/month',
      popular: false
    }
  ];

  const microSaasProducts = [
    {
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform',
      price: '$99/month',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'Zion AI Chat',
      description: 'Intelligent customer support chatbot',
      price: '$79/month',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring',
      price: '$149/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: false
    },
    {
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform',
      price: '$69/month',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      popular: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Target },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '10+', label: 'Years Experience', icon: Award }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. We increased efficiency by 40% and reduced costs by 30% in just 6 months.',
      rating: 5,
      avatar: '👩‍💼',
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, GrowthCo',
      content: 'The cloud infrastructure they built for us is rock-solid. We\'ve had 99.9% uptime and our applications run faster than ever.',
      rating: 5,
      avatar: '👨‍💻',
      company: 'GrowthCo'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, RetailPlus',
      content: 'Their cybersecurity solutions gave us peace of mind. We sleep better knowing our data is protected by their advanced AI monitoring.',
      rating: 5,
      avatar: '👩‍💼',
      company: 'RetailPlus'
    },
    {
      name: 'David Kim',
      role: 'Founder, DataFlow',
      content: 'The analytics platform they developed helped us identify new revenue streams worth $2M annually. ROI was achieved in 3 months.',
      rating: 5,
      avatar: '👨‍💼',
      company: 'DataFlow'
    }
  ];

  const aiServices = [
    { name: 'Machine Learning', description: 'Custom ML models for your business needs', icon: Brain, price: '$1,999/month' },
    { name: 'Natural Language Processing', description: 'AI-powered text analysis and generation', icon: Code, price: '$1,499/month' },
    { name: 'Computer Vision', description: 'Image recognition and analysis solutions', icon: Eye, price: '$2,299/month' },
    { name: 'Predictive Analytics', description: 'Data-driven insights and forecasting', icon: BarChart, price: '$1,799/month' },
    { name: 'AI Automation', description: 'Intelligent process automation', icon: Zap, price: '$2,499/month' },
    { name: 'AI Consulting', description: 'Strategic AI implementation guidance', icon: Target, price: '$299/hour' }
  ];

  const itServices = [
    { name: 'Cloud Migration', description: 'Seamless cloud infrastructure migration', icon: Cloud, price: '$3,999/project' },
    { name: 'DevOps', description: 'Continuous integration and deployment', icon: Settings, price: '$2,999/month' },
    { name: 'Cybersecurity', description: 'Comprehensive security solutions', icon: Shield, price: '$2,499/month' },
    { name: 'Database Management', description: 'Optimized database solutions', icon: Database, price: '$1,999/month' },
    { name: 'API Development', description: 'RESTful and GraphQL APIs', icon: Code, price: '$1,499/project' },
    { name: 'System Integration', description: 'Connect and optimize your systems', icon: Globe, price: '$2,999/project' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, cloud infrastructure, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity, machine learning, automation, business intelligence" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for enterprise transformation." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechCompany",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "description": "Leading provider of AI-powered enterprise solutions, cloud infrastructure, and digital transformation services.",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Technology",
            "services": [
              "AI Solutions",
              "Cloud Infrastructure",
              "Cybersecurity",
              "Digital Transformation",
              "Machine Learning",
              "Automation",
              "Business Intelligence"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <FuturisticBackground />
        <Navigation />
        
        <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4 neon-text">
                    🚀 Trusted by 500+ Companies Worldwide
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight neon-text-enhanced">
                  Transform Your Business with 
                  <span className="block text-6xl md:text-8xl mt-2">AI & IT Solutions</span>
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
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 cyber-button"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    onClick={handlePhoneClick}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group cyber-button-secondary"
                  >
                    Call Now: +1 302 464 0950
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="text-cyan-400 neon-text-enhanced">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cyber-card"
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
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    
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
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-purple-400 neon-text-enhanced">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions tailored to your business needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 cyber-card"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.popular && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="text-lg font-semibold text-purple-400 mb-4">{service.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="/contact" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SaaS Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Micro <span className="text-cyan-400 neon-text-enhanced">SaaS Solutions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready-to-use AI-powered tools that solve specific business challenges
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {microSaasProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                    
                    <div className="text-lg font-semibold text-cyan-400 mb-4">{product.price}</div>
                    
                    {product.popular && (
                      <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="/micro-saas" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group cyber-button"
                >
                  View All Micro SaaS Tools
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI <span className="text-green-400 neon-text-enhanced">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to transform your business operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    
                    <div className="text-sm font-semibold text-green-400">{service.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  IT <span className="text-blue-400 neon-text-enhanced">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Complete IT infrastructure and support solutions for modern businesses
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    
                    <div className="text-sm font-semibold text-blue-400">{service.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-yellow-400 neon-text-enhanced">Clients</span> Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses that trust Zion Tech Group
                </p>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-500 ${
                        index === currentTestimonial 
                          ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/10 scale-105' 
                          : 'border-white/10 hover:border-yellow-400/30'
                      } cyber-card`}
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                          <p className="text-gray-500 text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-yellow-400 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center backdrop-blur-sm hologram-card">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Get a free consultation and discover how our AI and IT solutions can drive your business forward. 
                  No commitment required, just results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 cyber-button"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    onClick={handlePhoneClick}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group cyber-button-secondary"
                  >
                    Call Now: +1 302 464 0950
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
                  </p>
                  <p>
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
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