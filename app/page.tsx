'use client';
import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone, MapPin, BarChart3, MessageSquare as MessageSquareIcon, Headphones, PieChart, Activity, Layers, RefreshCw, Search, Filter, ChevronDown } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 text-center">
    <p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today! Get 30% off your first month.
    </p>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000-10,000/month'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4,000-15,000/month'
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,000-12,000/month'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services'],
      price: 'Starting at $3,000/month',
      marketPrice: '$5,000-20,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const aiServices = [
    { name: 'AI Chatbots', description: 'Advanced conversational AI with NLP', icon: MessageCircle, price: '$299/month' },
    { name: 'AI Analytics', description: 'Business intelligence with AI insights', icon: BarChart3, price: '$399/month' },
    { name: 'AI Automation', description: 'Intelligent process automation', icon: Workflow, price: '$349/month' },
    { name: 'AI Computer Vision', description: 'Image and video analysis solutions', icon: Eye, price: '$599/month' },
    { name: 'AI Content Generation', description: 'AI-powered content creation', icon: FileText, price: '$199/month' },
    { name: 'AI Cybersecurity', description: 'AI-powered threat detection', icon: Shield, price: '$799/month' }
  ];

  const itServices = [
    { name: 'Cloud Migration', description: 'Seamless cloud infrastructure migration', icon: Cloud, price: '$2,500/month' },
    { name: 'DevOps', description: 'Continuous integration and deployment', icon: Settings, price: '$2,200/month' },
    { name: 'Cybersecurity', description: 'Comprehensive security solutions', icon: Shield, price: '$1,800/month' },
    { name: 'Database Management', description: 'Optimized database solutions', icon: Database, price: '$1,200/month' },
    { name: 'API Development', description: 'RESTful and GraphQL APIs', icon: Code, price: '$2,000/project' },
    { name: 'System Integration', description: 'Connect and optimize your systems', icon: Globe, price: '$3,400/month' }
  ];

  const microSaasProducts = [
    { name: 'Zion Analytics Pro', description: 'AI-powered business intelligence', icon: BarChart3, price: '$89/month' },
    { name: 'Zion Chat AI', description: 'Advanced customer support AI', icon: MessageCircle, price: '$149/month' },
    { name: 'Zion Security Shield', description: 'Cybersecurity monitoring', icon: Shield, price: '$199/month' },
    { name: 'Zion Content Studio', description: 'AI content creation suite', icon: FileText, price: '$99/month' },
    { name: 'Zion CRM Intelligence', description: 'AI-enhanced CRM system', icon: Users, price: '$79/month' },
    { name: 'Zion Project Master', description: 'AI project management', icon: Calendar, price: '$69/month' }
  ];

  const testimonials = [
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
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechCompany",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Technology",
            "services": [
              "AI Solutions",
              "Cloud Services",
              "Cybersecurity",
              "Digital Transformation",
              "IT Consulting",
              "Micro SaaS Solutions"
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
        <Navigation />
        
        <main id="main-content" className="flex-1" role="main">
          {/* Content Promotion Banner */}
          <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
            <ContentPromotionBanner />
          </Suspense>

          {/* Hero Section */}
          <section 
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto px-4 py-20">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  🚀 Trusted by 500+ Companies Worldwide
                </span>
              </div>
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
                data-text="Zion Tech Group"
              >
                Transform Your Business with 
                <span className="block text-6xl md:text-8xl mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
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
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
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
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto px-4">
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
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
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
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
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

          {/* AI Services Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                AI Services
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-cyan-400">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                IT Services
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure and drive business growth
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-green-400">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SaaS Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Ready-to-use business tools with AI and automation
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaasProducts.map((product, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <product.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {product.description}
                    </p>
                    <div className="text-lg font-bold text-purple-400">
                      {product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-cyan-400">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20 mx-4 mb-16">
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
                  onClick={handlePhoneClick}
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