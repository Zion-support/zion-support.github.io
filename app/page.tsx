'use client';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const services = [
    {
<<<<<<< HEAD
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics',
      price: 'Starting at $2,500/month',
      features: ['Real-time data processing', 'Predictive analytics models', 'Custom dashboards', 'Natural language queries'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation that learns and adapts',
      price: 'Starting at $1,800/month',
      features: ['Process automation', 'Document processing', 'Email automation', 'Custom integrations'],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Chatbot & Conversational AI',
      description: 'Build intelligent chatbots with natural language processing and context awareness',
      price: 'Starting at $1,200/month',
      features: ['Multi-language support', 'Sentiment analysis', 'Voice integration', 'Custom training'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning algorithms',
      price: 'Starting at $3,500/month',
      features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with cost optimization',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
=======
      title: 'AI Services',
      description: 'Machine learning, natural language processing, computer vision, and more',
      icon: Brain,
      link: '/ai-services',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'IT Solutions',
      description: 'Cloud infrastructure, cybersecurity, web development, and mobile apps',
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
      icon: Cloud,
      link: '/it-services',
      color: 'from-cyan-600 to-blue-600'
    },
    {
<<<<<<< HEAD
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and monitoring',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Blockchain & IoT Development',
      description: 'Custom blockchain solutions and IoT applications for modern businesses',
      price: 'Starting at $15,000',
      features: ['Smart contracts', 'DApp development', 'IoT connectivity', 'Security auditing'],
      icon: LinkIcon,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automatic scene detection and smart transitions',
      price: '$89/month',
      features: ['Auto scene detection', 'Smart color correction', 'AI transitions', 'Cloud rendering'],
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review with automated bug detection and security analysis',
      price: '$149/month',
      features: ['Automated code review', 'Bug detection', 'Security scanning', 'Performance optimization'],
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection with machine learning models and real-time monitoring',
      price: '$179/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert system'],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
=======
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions for immediate business needs',
      icon: Zap,
      link: '/micro-saas',
      color: 'from-green-600 to-emerald-600'
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services." />
        <meta name="keywords" content="AI solutions, cloud infrastructure, cybersecurity, software development, technology consulting" />
      </Helmet>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Zion Tech Group
              </span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
              cybersecurity, and custom software development services to businesses worldwide.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;