'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { 
  Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, 
  Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, 
  TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, 
  DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, 
  Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, 
  Award, Lightbulb, Gauge, Phone, Mail, MapPin, ChevronRight, 
  Play, Download, ExternalLink, ArrowUpRight, Sparkle, Zap as ZapIcon
} from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 animate-pulse border border-white/10">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
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

  // Real Micro SAAS Services with actual market pricing
  const microSaasServices = [
    {
      name: 'AI Content Studio Pro',
      description: 'Complete AI-powered content creation suite with 50+ templates, automated SEO optimization, and multi-platform publishing.',
      icon: FileText,
      price: '$49/month',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-platform Publishing', 'Brand Voice Training'],
      category: 'Content Creation',
      color: 'from-pink-500 to-rose-600',
      popular: true
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights, custom dashboards, and automated reporting across 100+ data sources.',
      icon: BarChart,
      price: '$79/month',
      features: ['100+ Data Sources', 'Real-time Insights', 'Custom Dashboards', 'Automated Reports'],
      category: 'Analytics',
      color: 'from-cyan-500 to-blue-600',
      popular: false
    },
    {
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing, 24/7 availability, and seamless CRM integration.',
      icon: MessageCircle,
      price: '$29/month',
      features: ['24/7 Availability', 'CRM Integration', 'Multi-language Support', 'Sentiment Analysis'],
      category: 'Customer Service',
      color: 'from-green-500 to-emerald-600',
      popular: true
    },
    {
      name: 'Automated Email Marketing',
      description: 'AI-powered email campaigns with personalization, A/B testing, and advanced analytics for maximum ROI.',
      icon: Mail,
      price: '$39/month',
      features: ['AI Personalization', 'A/B Testing', 'Advanced Analytics', 'Automated Sequences'],
      category: 'Marketing',
      color: 'from-purple-500 to-violet-600',
      popular: false
    },
    {
      name: 'Smart Invoice Generator',
      description: 'Automated invoice creation with AI-powered expense tracking, payment reminders, and financial reporting.',
      icon: DollarSign,
      price: '$19/month',
      features: ['Auto Invoice Generation', 'Expense Tracking', 'Payment Reminders', 'Financial Reports'],
      category: 'Finance',
      color: 'from-orange-500 to-red-600',
      popular: false
    },
    {
      name: 'AI Project Manager',
      description: 'Intelligent project management with automated task assignment, progress tracking, and team collaboration tools.',
      icon: Calendar,
      price: '$59/month',
      features: ['Auto Task Assignment', 'Progress Tracking', 'Team Collaboration', 'Resource Planning'],
      category: 'Productivity',
      color: 'from-indigo-500 to-purple-600',
      popular: true
    },
    {
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management with content optimization, optimal posting times, and engagement analytics.',
      icon: Globe,
      price: '$34/month',
      features: ['Content Optimization', 'Optimal Posting Times', 'Engagement Analytics', 'Multi-platform Support'],
      category: 'Social Media',
      color: 'from-teal-500 to-cyan-600',
      popular: false
    },
    {
      name: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization for multiple programming languages with real-time suggestions.',
      icon: Code,
      price: '$89/month',
      features: ['Code Completion', 'Debugging Assistant', 'Multi-language Support', 'Real-time Suggestions'],
      category: 'Development',
      color: 'from-blue-500 to-indigo-600',
      popular: true
    },
    {
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      icon: Package,
      price: '$69/month',
      features: ['Demand Forecasting', 'Auto Reordering', 'Supply Chain Optimization', 'Real-time Tracking'],
      category: 'Inventory',
      color: 'from-yellow-500 to-orange-600',
      popular: false
    },
    {
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.',
      icon: Target,
      price: '$44/month',
      features: ['SEO Analysis', 'Keyword Research', 'Content Optimization', 'Ranking Tracking'],
      category: 'SEO',
      color: 'from-emerald-500 to-green-600',
      popular: false
    },
    {
      name: 'Voice Assistant Platform',
      description: 'Enterprise-grade voice AI with custom commands, multi-language support, and seamless integration capabilities.',
      icon: Mic,
      price: '$99/month',
      features: ['Custom Commands', 'Multi-language Support', 'Enterprise Integration', 'Voice Analytics'],
      category: 'Voice AI',
      color: 'from-violet-500 to-purple-600',
      popular: true
    },
    {
      name: 'AI Document Processor',
      description: 'Intelligent document analysis, data extraction, and automated processing with OCR and machine learning.',
      icon: FileText,
      price: '$54/month',
      features: ['Document Analysis', 'Data Extraction', 'OCR Technology', 'ML Processing'],
      category: 'Document Management',
      color: 'from-rose-500 to-pink-600',
      popular: false
    }
  ];

  // AI Services with real market pricing
  const aiServices = [
    {
      name: 'Machine Learning Platform',
      description: 'End-to-end ML platform with automated model training, deployment, and monitoring for enterprise applications.',
      icon: Brain,
      price: 'Starting at $2,999/month',
      features: ['Automated Model Training', 'Real-time Deployment', 'Model Monitoring', 'Enterprise Support'],
      category: 'Machine Learning',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis with object detection, facial recognition, and automated content moderation.',
      icon: Eye,
      price: 'Starting at $1,499/month',
      features: ['Object Detection', 'Facial Recognition', 'Content Moderation', 'Real-time Processing'],
      category: 'Computer Vision',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP capabilities including sentiment analysis, language translation, and conversational AI development.',
      icon: MessageSquare,
      price: 'Starting at $1,799/month',
      features: ['Sentiment Analysis', 'Language Translation', 'Conversational AI', 'Text Generation'],
      category: 'NLP',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'AI-powered business forecasting with advanced statistical models and real-time data processing capabilities.',
      icon: TrendingUp,
      price: 'Starting at $2,299/month',
      features: ['Business Forecasting', 'Statistical Models', 'Real-time Processing', 'Custom Dashboards'],
      category: 'Analytics',
      color: 'from-orange-500 to-red-600'
    }
  ];

  // IT Services with real market pricing
  const itServices = [
    {
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud solutions with AWS, Azure, and GCP including migration, optimization, and 24/7 monitoring.',
      icon: Cloud,
      price: 'Starting at $1,999/month',
      features: ['Multi-cloud Support', 'Migration Services', 'Cost Optimization', '24/7 Monitoring'],
      category: 'Cloud Services',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security suite with threat detection, vulnerability assessment, and automated incident response.',
      icon: Shield,
      price: 'Starting at $1,299/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
      category: 'Security',
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with testing, monitoring, and continuous integration for modern applications.',
      icon: Settings,
      price: 'Starting at $1,599/month',
      features: ['Automated Deployment', 'Testing Integration', 'Performance Monitoring', 'Scalable Infrastructure'],
      category: 'DevOps',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions with modern technologies, scalable architecture, and comprehensive support.',
      icon: Code,
      price: 'Starting at $2,499/month',
      features: ['Custom Development', 'Modern Technologies', 'Scalable Architecture', 'Ongoing Support'],
      category: 'Development',
      color: 'from-green-500 to-emerald-600'
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
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our operations with their AI solutions. We've seen a 300% increase in efficiency and saved over $2M annually.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Finance Ltd.",
      role: "CTO",
      content: "Their cloud migration was seamless. Zero downtime and 40% cost reduction. The team's expertise is unmatched.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "VP of Operations",
      content: "The AI-powered analytics platform they built for us has revolutionized our decision-making process. ROI was achieved in just 2 months.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of AI solutions, IT services, and micro SAAS tools. Transform your business with cutting-edge technology, real-time analytics, and intelligent automation. Starting from $19/month." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, business automation, cloud computing, cybersecurity, machine learning, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with our AI solutions, IT services, and micro SAAS tools. Real results, competitive pricing, 24/7 support." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {/* Hero Section */}
          <section className={`text-center py-20 px-4 transition-all duration-1000 ${
            isLoaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6 neon-text-enhanced">
                  🚀 Trusted by 500+ Companies Worldwide
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Transform Your Business with
                <span className="block text-6xl md:text-8xl lg:text-9xl mt-4 neon-text-enhanced glow">
                  AI & IT Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI solutions, IT services, and micro SAAS tools that drive innovation, 
                efficiency, and growth for businesses worldwide. Get results in 30 days or less.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-lg">Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-lg">30-Day Results Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-lg">24/7 Expert Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-lg">No Long-term Contracts</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a 
                  href="/contact" 
                  className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 futuristic-btn"
                >
                  Get Free Consultation
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call (302) 464-0950
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span>99% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-400 mr-2" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center cyber-card-enhanced p-8 hover-lift">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 neon-text-enhanced">{stat.number}</div>
                    <div className="text-gray-400 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                  Micro SAAS Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Affordable, powerful AI-driven tools for modern businesses. Choose from 50+ ready-to-use applications 
                  with competitive pricing and enterprise-grade features.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {microSaasServices.map((service, index) => (
                  <div
                    key={index}
                    className={`cyber-card-enhanced holographic-card-enhanced p-8 hover-lift hover-glow relative ${
                      service.popular ? 'ring-2 ring-cyan-500/50' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 text-center neon-text-enhanced">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-4 neon-text-enhanced">
                        {service.price}
                      </div>
                      <a 
                        href={`/micro-saas/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/micro-saas"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 inline-flex items-center group"
                >
                  View All Micro SAAS Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                  AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Advanced artificial intelligence solutions designed to transform your business operations 
                  with cutting-edge machine learning and automation technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiServices.map((service, index) => (
                  <div
                    key={index}
                    className="cyber-card-enhanced p-8 hover-lift hover-glow"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text-enhanced">
                        {service.price}
                      </div>
                      <a 
                        href={`/ai-services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                  IT Services
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Complete IT solutions to modernize your infrastructure and drive business growth 
                  with enterprise-grade security and scalability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itServices.map((service, index) => (
                  <div
                    key={index}
                    className="cyber-card-enhanced p-8 hover-lift hover-glow"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-4 neon-text-enhanced">
                        {service.price}
                      </div>
                      <a 
                        href={`/it-services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                  What Our <span className="text-cyan-400">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card-enhanced p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="cyber-card-enhanced p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
                  Get started with a free consultation today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 futuristic-btn"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call (302) 464-0950
                  </a>
                </div>
                
                <div className="text-sm text-gray-400">
                  <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee</p>
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