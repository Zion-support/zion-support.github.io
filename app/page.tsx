<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Zap, Shield, Cloud, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
import { ArrowRight, CheckCircle, Zap, Shield, Cloud, Database, Smartphone, Star, Sparkles, Rocket, Cpu, Globe } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions for your business',
      link: '/ai-services'
    },
    {
<<<<<<< HEAD
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      link: '/cloud-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      link: '/data-analytics'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage the latest AI technology to automate and optimize your business processes.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Solutions that grow with your business and adapt to your changing needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your sensitive data and systems.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Outstanding service and support. Their cloud migration was seamless and efficient.',
=======
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
=======
      icon: <Brain className="w-12 h-12 text-neon-cyan" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services',
      pricing: 'Starting at $99/month',
      popular: true
    },
    {
      icon: <Cpu className="w-12 h-12 text-neon-green" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management'],
      link: '/it-services',
      pricing: 'Starting at $1,500/month',
      popular: true
    },
    {
      icon: <Smartphone className="w-12 h-12 text-neon-pink" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and workflows.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective'],
      link: '/micro-saas-services',
      pricing: 'Starting at $29/month',
      popular: false
    },
    {
      icon: <Zap className="w-12 h-12 text-neon-yellow" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization for enhanced connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
      link: '/5g-implementation',
      pricing: 'Starting at $5,000/month',
      popular: false
    },
    {
      icon: <Cloud className="w-12 h-12 text-neon-orange" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services',
      pricing: 'Starting at $2,500/month',
      popular: true
    },
    {
      icon: <Database className="w-12 h-12 text-neon-purple" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy'],
      link: '/digital-transformation',
      pricing: 'Starting at $3,000/month',
      popular: false
=======
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generation - $500/month', 'Chatbot Development - $1,200', 'Process Automation - $2,000/month', 'AI Analytics - $800/month'],
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cpu className="w-8 h-8 text-yellow-400" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Micro SAAS Services',
      description: 'Powerful micro software solutions designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5,
      avatar: 'ER'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
    }
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Data Analytics Pro',
      description: 'Advanced business intelligence and data visualization',
      pricing: '$199/month',
      link: '/data-analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions and monitoring',
      pricing: '$299/month',
      link: '/cybersecurity'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'AI Consulting',
      description: 'Expert guidance on AI implementation',
      pricing: '$150/hour',
      link: '/consulting'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      pricing: '$2,000/project',
      link: '/web-development'
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      title: 'Blockchain Solutions',
      description: 'Secure blockchain implementation',
      pricing: '$5,000/project',
      link: '/blockchain'
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs',
      pricing: '$1,500/project',
      link: '/api-development'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
    }
  ];

<<<<<<< HEAD
=======
  const stats = [
<<<<<<< HEAD
    { number: '1,200+', label: 'Projects Completed' },
    { number: '99.8%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '150+', label: 'Expert Team Members' },
    { number: '50+', label: 'Countries Served' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '48hr', label: 'Response Time' }
=======
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Cpu className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> }
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
  ]

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
<<<<<<< HEAD
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
=======
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
      rating: 5
    },
    {
      name: 'Michael Chen',
<<<<<<< HEAD
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and expertise. Their cloud migration saved us $50,000 annually while improving performance.',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
<<<<<<< HEAD
<<<<<<< HEAD
      company: 'InnovateLab',
      content: 'The cybersecurity solutions provided excellent protection for our digital infrastructure.',
=======
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Helmet>
<<<<<<< HEAD
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, data analytics, digital transformation" />
=======
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The micro SaaS solutions they developed for us are game-changers. Highly recommend their services.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-futuristic-dark relative">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | 300% ROI Guaranteed</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, cloud services, digital transformation, Zion Tech Group, micro SaaS, cybersecurity, data analytics" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}AI & IT Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of artificial intelligence, cybersecurity, and digital transformation services. 
            Empower your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wider animate-neon-pulse">
                ✨ Trusted by 1,200+ Companies Worldwide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green text-transparent bg-clip-text">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 animate-slide-up">
              Transform your business with cutting-edge artificial intelligence and information technology solutions designed to accelerate growth and efficiency. 
              <span className="text-neon-cyan font-semibold"> 300% ROI guaranteed or your money back.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-8 py-4 rounded-lg font-bold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 flex items-center justify-center shadow-neon-cyan/50 hover:shadow-neon-pink/50 hover:scale-105 transform animate-neon-pulse"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:text-futuristic-dark transition-all duration-300 shadow-neon-cyan/30 hover:shadow-neon-cyan/50"
=======
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation" />
      </Helmet>
      
      {/* Hero Section with Futuristic Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Next-Generation Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
              Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-neon-cyan hover:text-neon-pink transition-colors">+1 302 464 0950</a></p>
              <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-neon-cyan hover:text-neon-pink transition-colors">kleber@ziontechgroup.com</a></p>
            </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
          </div>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {stats.map((stat, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
=======
              <div key={index} className="text-center group">
                <div className="bg-futuristic-light/20 backdrop-blur-sm rounded-xl p-4 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-neon-cyan/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2 animate-neon-pulse">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm group-hover:text-neon-cyan/80 transition-colors duration-300">
                    {stat.label}
                  </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
          {/* Stats Section with Neon Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-transparent bg-clip-text">
                Our Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs with guaranteed ROI.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
=======
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="bg-futuristic-light/10 backdrop-blur-lg rounded-2xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-hologram animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  {feature.popular && (
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-3 py-1 rounded-full text-xs font-bold animate-neon-pulse">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-neon-cyan/80 transition-colors">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-neon-cyan">{feature.pricing}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-neon-cyan group-hover:text-neon-pink transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
=======
      {/* Features Section with Futuristic Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 inline-block`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                </div>
              </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
=======
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-pink to-neon-green text-transparent bg-clip-text">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for specific business needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-futuristic-light/5 backdrop-blur-sm rounded-xl p-6 border border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 group hover:shadow-neon-pink/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="text-sm font-semibold text-neon-pink">{service.pricing}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-pink transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan text-transparent bg-clip-text">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-futuristic-light/10 backdrop-blur-lg rounded-2xl p-6 border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 group">
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
<<<<<<< HEAD
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">"{testimonial.content}"</p>
                <div className="border-t border-neon-green/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-neon-green">{testimonial.role}, {testimonial.company}</div>
=======
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
=======
          <div className="bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-overlay animate-hologram"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-futuristic-dark mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-futuristic-dark/80 mb-8 max-w-2xl mx-auto">
                Join 1,200+ companies that trust Zion Tech Group for their AI and IT solutions. 
                <span className="font-bold"> 300% ROI guaranteed or your money back.</span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
                </Link>
              </div>
=======
                  className="bg-futuristic-dark text-neon-cyan px-8 py-4 rounded-lg font-bold hover:bg-futuristic-darker transition-all duration-300 shadow-neon-cyan/50 hover:shadow-neon-cyan/70 hover:scale-105 transform"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-futuristic-dark text-futuristic-dark px-8 py-4 rounded-lg font-semibold hover:bg-futuristic-dark hover:text-neon-cyan transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-8 text-futuristic-dark/70">
                <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-futuristic-dark transition-colors">+1 302 464 0950</a></p>
                <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-futuristic-dark transition-colors">kleber@ziontechgroup.com</a></p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
            </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
      {/* CTA Section with Futuristic Design */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
