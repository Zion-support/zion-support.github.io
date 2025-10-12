<<<<<<< HEAD
'use client';

import React, { Suspense } from 'react';


import { Brain, ArrowRight, MessageSquare } from 'lucide-react';
import FuturisticBackground from './components/FuturisticBackground';
import FuturisticCard from './components/FuturisticCard';
import FuturisticButton from './components/FuturisticButton';

// Note: Lazy loading components will be implemented in future iterations

export default function HomePage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Users className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageSquare className="w-6 h-6" /> }
  ];
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, Wifi, Smartphone, Monitor, Server, Cpu2, CircuitBoard, Atom, Satellite, Wrench, Settings, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation with cutting-edge machine learning algorithms.',
      price: 'Starting at $299/month',
      link: '/ai-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-emerald-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs with 99.99% uptime guarantee.',
      price: 'Starting at $199/month',
      link: '/it-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data with real-time threat detection.',
      price: 'Starting at $399/month',
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform and AI-driven predictions.',
      price: 'Starting at $249/month',
      link: '/business-intelligence'
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-orange-400" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity and IoT integration.',
      price: 'Starting at $599/month',
      link: '/5g-implementation'
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      title: 'Micro SAAS Solutions',
      description: 'Ready-to-deploy micro software solutions that scale with your business growth and needs.',
      price: 'Starting at $99/month',
      link: '/micro-saas'
    }
  ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a

  const microSaasServices = [
    {
<<<<<<< HEAD
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generator',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $99/month'
    },
    {
      title: 'AI CRM Assistant',
      description: 'Boost sales by 45% with AI-powered lead scoring, email automation, and predictive analytics.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      link: '/ai-crm-assistant',
      features: ['AI lead scoring', 'Email automation', 'Predictive analytics'],
      price: 'Starting at $49/month'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Increase engagement by 200% with AI-powered social media automation and content generation.',
      icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
      link: '/ai-social-media-manager',
      features: ['AI content generation', 'Smart scheduling', 'Analytics insights'],
      price: 'Starting at $29/month'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Protect your business with 99.9% threat detection accuracy using advanced AI security.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/ai-cybersecurity-suite',
      features: ['AI threat detection', 'Zero trust security', 'Automated response'],
      price: 'Starting at $199/month'
    },
    {
      title: 'AI Smart City Solutions',
      description: 'Transform urban infrastructure with AI-powered smart city technologies and IoT integration.',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      link: '/ai-smart-city-solutions',
      features: ['Traffic optimization', 'Energy management', 'IoT integration'],
      price: 'Starting at $50,000/project'
    },
    {
      title: '5G Implementation',
      description: 'Leverage the power of 5G technology for ultra-fast connectivity and IoT solutions.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-implementation',
      features: ['Ultra-fast speeds', 'IoT connectivity', 'Edge computing'],
      price: 'Starting at $5,000/project'
=======
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      price: '$149/month',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'API integration'],
      link: '/micro-saas/analytics-dashboard'
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-400" />,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with automated reminders and calendar integration.',
      price: '$79/month',
      features: ['Auto-scheduling', 'Calendar sync', 'SMS/Email reminders', 'Payment processing'],
      link: '/micro-saas/appointment-scheduler'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      title: 'AI Chat Analytics',
      description: 'Advanced chat analytics with sentiment analysis and customer insights.',
      price: '$129/month',
      features: ['Sentiment analysis', 'Response optimization', 'Customer insights', 'Live monitoring'],
      link: '/micro-saas/chat-analytics'
    },
    {
      icon: <Edit className="w-6 h-6 text-purple-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      price: '$99/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates'],
      link: '/micro-saas/content-generator'
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-400" />,
      title: 'Document Processor',
      description: 'Automated document processing with OCR and intelligent data extraction.',
      price: '$179/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      link: '/micro-saas/document-processor'
    },
    {
      icon: <Mail className="w-6 h-6 text-pink-400" />,
      title: 'Email Marketing Suite',
      description: 'Complete email marketing solution with AI-powered personalization.',
      price: '$119/month',
      features: ['AI personalization', 'A/B testing', 'Automation workflows', 'Analytics dashboard'],
      link: '/micro-saas/email-marketing'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      price: '$69/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Multi-currency'],
      link: '/micro-saas/expense-tracker'
    },
    {
      icon: <Package className="w-6 h-6 text-indigo-400" />,
      title: 'Inventory Management',
      description: 'Advanced inventory management with predictive analytics and automation.',
      price: '$199/month',
      features: ['Real-time tracking', 'Predictive analytics', 'Automated reordering', 'Multi-location'],
      link: '/micro-saas/inventory-management'
    }
  ]

  const aiServices = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service and sales automation.',
      price: '$199/month',
      features: ['No-code builder', 'Multi-language', 'Integration APIs', 'Analytics'],
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart className="w-6 h-6 text-emerald-400" />,
      title: 'AI Automated Reporting',
      description: 'Automated business reports with AI insights and data visualization.',
      price: '$249/month',
      features: ['Auto-generation', 'Custom templates', 'Real-time data', 'Scheduled delivery'],
      link: '/ai-automated-reporting'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations.',
      price: '$89/month',
      features: ['AI security scan', 'Auto-generation', 'Breach monitoring', 'Team sharing'],
      link: '/ai-password-manager'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI prioritization and automation.',
      price: '$79/month',
      features: ['AI prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration'],
      link: '/ai-task-manager'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
    }
  ];

<<<<<<< HEAD

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Their cloud infrastructure is rock-solid. We\'ve had zero downtime since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'The cybersecurity services gave us peace of mind. Our data has never been more secure.',
      rating: 5
    }
  ];
=======
  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Layers className="w-6 h-6 text-orange-400" /> },
    { number: '30+', label: 'AI Services', icon: <Brain className="w-6 h-6 text-pink-400" /> }
  ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group: Premier AI solutions, IT services, 5G implementation & micro SAAS platforms. 99.8% client satisfaction, 24/7 support. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms.",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Dr. Kleber Santos"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup",
              "https://github.com/ziontechgroup"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "50+",
              "lowPrice": "99",
              "highPrice": "2999",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
<<<<<<< HEAD
      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section id="main-content" className="pt-20 px-4 py-12 sm:py-16 lg:py-20" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
                Join 1,200+ satisfied clients with 99.8% satisfaction rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/about', '_blank')}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Get Started
                </FuturisticButton>
=======
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3)_0%,transparent_60%)] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Sparkles className="w-4 h-4" />
            <span>Next-Generation Technology Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading the future of technology with cutting-edge AI solutions, 
            robust IT infrastructure, and innovative digital transformation services.
            <br />
            <span className="text-cyan-400 font-semibold">Transforming businesses through intelligent automation.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions power businesses worldwide with proven results and exceptional performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation and growth for your business. 
              Our comprehensive suite of services covers everything from AI automation to enterprise infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {feature.price}
                  </span>
                  <Link 
                    to={feature.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <Layers className="w-4 h-4" />
              <span>Micro SAAS Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready-to-Deploy <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Powerful, scalable micro software solutions that integrate seamlessly with your existing workflow. 
              No complex setup, just instant value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {service.price}
                  </div>
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-purple-400/30">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and transform your business operations with cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {service.price}
                  </div>
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  >
                    Explore AI
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Business?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss how our cutting-edge technology solutions can help you achieve your business goals. 
                  From AI automation to enterprise infrastructure, we have everything you need to succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
              </div>
            </div>

            {/* Stats Section */}
            <Suspense fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="text-center px-2">
                    <div className="animate-pulse">
                      <div className="h-8 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20" role="region" aria-label="Company statistics">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-2" role="img" aria-label={`${stat.number} ${stat.label}`}>
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-pulse">
                    <div className="h-8 w-8 bg-gray-600 rounded mb-4"></div>
                    <div className="h-6 bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-600 rounded mb-6"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {services.map((service, index) => (
                  <FuturisticCard
                    key={index}
                    variant="service"
                    className="h-full"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="mb-4" aria-hidden="true">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold mb-4 text-sm">
                      {service.price}
                    </div>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center text-blue-400">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5" role="region" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="testimonials-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20 animate-pulse">
                    <div className="flex items-center mb-4">
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard
                    key={index}
                    variant="testimonial"
                    className="h-full"
                  >
                    <div className="flex items-center mb-4" role="img" aria-label={`${testimonial.rating} star rating`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-4 italic">
                      <p>"{testimonial.content}"</p>
                    </blockquote>
                    <footer>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </footer>
                  </FuturisticCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="cta-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <FuturisticCard variant="feature" className="text-center">
                <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started Today
                  </FuturisticButton>
                  <FuturisticButton
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('/about', '_blank')}
                  >
                    Learn More
                  </FuturisticButton>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free consultation • ✓ 24/7 support • ✓ 99.8% satisfaction rate</p>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}