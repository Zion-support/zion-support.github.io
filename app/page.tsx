'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, BarChart } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with predictive insights and real-time monitoring',
      price: '$2,999/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration', 'Advanced reporting', 'Machine learning insights'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      marketPrice: '$3,500/month',
      savings: 'Save $6,000/year'
    },
    {
      title: 'AI Content Generator Enterprise',
      description: 'Automated content creation for blogs, social media, marketing, and technical documentation',
      price: '$1,999/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Plagiarism detection', 'A/B testing'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      marketPrice: '$2,500/month',
      savings: 'Save $6,000/year'
    },
    {
      title: 'AI Customer Support Suite',
      description: '24/7 intelligent customer service with natural language processing and sentiment analysis',
      price: '$3,499/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Voice integration', 'CRM integration'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      marketPrice: '$4,200/month',
      savings: 'Save $8,400/year'
    },
    {
      title: 'AI Workflow Automation Pro',
      description: 'Streamline business processes with intelligent automation and decision-making',
      price: '$2,499/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring', 'Custom triggers', 'Error handling'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      marketPrice: '$3,000/month',
      savings: 'Save $6,000/year'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and prevention using machine learning algorithms',
      price: '$4,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring', 'Incident response', 'Security analytics'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      marketPrice: '$6,000/month',
      savings: 'Save $12,000/year'
    },
    {
      title: 'AI Computer Vision Pro',
      description: 'Image and video analysis for quality control, surveillance, and automation',
      price: '$3,999/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing', 'Custom models', 'API access'],
      icon: Eye,
      color: 'from-indigo-500 to-purple-500',
      marketPrice: '$4,800/month',
      savings: 'Save $9,600/year'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Optimization',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with cost optimization',
      price: 'Starting at $15,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support', 'Performance tuning', 'Disaster recovery'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      marketPrice: 'Starting at $25,000',
      savings: 'Save up to $10,000'
    },
    {
      title: 'Cybersecurity Audit & Implementation',
      description: 'Comprehensive security assessment and implementation with ongoing monitoring',
      price: 'Starting at $8,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training', 'Compliance audit', 'Ongoing monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      marketPrice: 'Starting at $12,000',
      savings: 'Save up to $4,000'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built to scale with latest technologies',
      price: 'Starting at $25,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support', 'Mobile optimization', 'Progressive Web App'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      marketPrice: 'Starting at $35,000',
      savings: 'Save up to $10,000'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with backend integration',
      price: 'Starting at $35,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications', 'Backend integration', 'Analytics integration'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      marketPrice: 'Starting at $50,000',
      savings: 'Save up to $15,000'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines and infrastructure as code',
      price: 'Starting at $12,000',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Security scanning', 'Automated testing', 'Deployment automation'],
      icon: Settings,
      color: 'from-yellow-500 to-orange-500',
      marketPrice: 'Starting at $18,000',
      savings: 'Save up to $6,000'
    },
    {
      title: 'Database Design & Optimization',
      description: 'High-performance database solutions with optimization and scaling',
      price: 'Starting at $8,000',
      features: ['Database design', 'Performance optimization', 'Scaling solutions', 'Backup strategies', 'Security hardening', 'Monitoring setup'],
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      marketPrice: 'Starting at $12,000',
      savings: 'Save up to $4,000'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI insights and real-time dashboards',
      price: '$299/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration', 'API access', 'White-label options'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      marketPrice: '$399/month',
      savings: 'Save $1,200/year',
      trial: '14-day free trial'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      price: '$499/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security training', '24/7 monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      marketPrice: '$699/month',
      savings: 'Save $2,400/year',
      trial: '30-day free trial'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform with brand consistency',
      price: '$199/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking', 'Team collaboration', 'Content calendar'],
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      marketPrice: '$299/month',
      savings: 'Save $1,200/year',
      trial: '7-day free trial'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights and automation',
      price: '$399/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows', 'Email marketing', 'Analytics dashboard'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      marketPrice: '$599/month',
      savings: 'Save $2,400/year',
      trial: '21-day free trial'
    },
    {
      title: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization for increased conversions and sales',
      price: '$249/month',
      features: ['Conversion optimization', 'A/B testing', 'Customer behavior analysis', 'Product recommendations', 'Inventory management', 'Sales forecasting'],
      icon: ShoppingCart,
      color: 'from-yellow-500 to-orange-500',
      marketPrice: '$399/month',
      savings: 'Save $1,800/year',
      trial: '14-day free trial'
    },
    {
      title: 'Zion Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      price: '$179/month',
      features: ['Project tracking', 'Resource management', 'Risk assessment', 'Automated reporting', 'Team collaboration', 'Time tracking'],
      icon: Calendar,
      color: 'from-indigo-500 to-blue-500',
      marketPrice: '$299/month',
      savings: 'Save $1,440/year',
      trial: '14-day free trial'
    }
  ];

  // New Advanced AI Services
  const advancedAiServices = [
    {
      title: 'AI Financial Analytics Suite',
      description: 'Advanced financial modeling and risk assessment with machine learning',
      price: '$4,999/month',
      features: ['Risk modeling', 'Fraud detection', 'Investment analysis', 'Regulatory compliance', 'Real-time monitoring', 'Custom algorithms'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      marketPrice: '$6,500/month',
      savings: 'Save $18,000/year'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'Medical data analysis and diagnostic assistance with AI-powered insights',
      price: '$7,999/month',
      features: ['Medical imaging analysis', 'Diagnostic assistance', 'Patient monitoring', 'Drug interaction checking', 'Compliance tracking', 'HIPAA compliance'],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      marketPrice: '$10,000/month',
      savings: 'Save $24,000/year'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      price: '$5,999/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Risk assessment', 'Cost optimization', 'Sustainability tracking'],
      icon: Package,
      color: 'from-amber-500 to-yellow-500',
      marketPrice: '$8,000/month',
      savings: 'Save $24,000/year'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Automated legal document analysis and contract review with AI',
      price: '$3,999/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document summarization', 'Legal research', 'Due diligence'],
      icon: FileText,
      color: 'from-slate-500 to-gray-500',
      marketPrice: '$5,500/month',
      savings: 'Save $18,000/year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Mouse-following glow effect */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Sparkles className="w-4 h-4" />
              <span>Advanced AI & IT Solutions</span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Advanced AI & IT Solutions
              </span>
            </h1>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
              cybersecurity, and custom software development services to businesses worldwide.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/ai-services"
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure & Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges with minimal setup.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
