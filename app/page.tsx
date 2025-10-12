'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

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

  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time predictive insights and machine learning models',
      price: '$499/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration', 'Advanced ML algorithms', 'Custom reporting'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-analytics-dashboard-pro'
    },
    {
      title: 'AI Content Studio Pro',
      description: 'Enterprise-grade content creation with multi-modal AI for text, images, and video',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Video generation', 'Image creation'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-content-studio-pro'
    },
    {
      title: 'AI Customer Service Pro',
      description: 'Advanced 24/7 intelligent customer service with sentiment analysis and escalation',
      price: '$599/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Voice integration', 'CRM integration'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-customer-service-pro'
    },
    {
      title: 'AI Workflow Automation Pro',
      description: 'Enterprise workflow automation with AI-powered decision making and process optimization',
      price: '$399/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring', 'AI decision trees', 'Custom triggers'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      link: '/ai-workflow-automation-pro'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and response with AI-powered security analytics',
      price: '$799/month',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Compliance reporting', 'Real-time monitoring', 'AI forensics'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/ai-cybersecurity-monitor'
    },
    {
      title: 'AI Financial Forecasting',
      description: 'Predictive financial modeling and risk assessment with advanced AI algorithms',
      price: '$899/month',
      features: ['Financial modeling', 'Risk assessment', 'Market analysis', 'Portfolio optimization', 'Fraud detection', 'Regulatory compliance'],
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      link: '/ai-financial-forecasting'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure setup with AWS, Azure, or Google Cloud Platform',
      price: 'Starting at $15,000',
      features: ['Multi-cloud architecture', 'Auto-scaling setup', 'Security compliance', 'Cost optimization', '24/7 monitoring', 'Disaster recovery'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring',
      price: 'Starting at $8,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training', 'Incident response', 'Compliance audit'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      title: 'Enterprise Web Development',
      description: 'Scalable web applications with modern architecture and performance optimization',
      price: 'Starting at $25,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support', 'API development', 'Database optimization'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      link: '/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with advanced features',
      price: 'Starting at $35,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications', 'Offline functionality', 'Analytics integration'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      link: '/mobile-development'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps setup with automated deployment and monitoring',
      price: 'Starting at $12,000',
      features: ['CI/CD pipeline', 'Container orchestration', 'Monitoring setup', 'Automated testing', 'Infrastructure as code', 'Performance optimization'],
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      link: '/devops-cicd'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions with advanced analytics and reporting',
      price: 'Starting at $18,000',
      features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'Predictive analytics', 'Real-time reporting', 'Data visualization'],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      link: '/data-analytics-bi'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',
      price: '$199/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration', 'API integration', 'Advanced ML models'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      link: '/zion-analytics-pro'
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and response',
      price: '$299/month',
      features: ['AI threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Real-time monitoring', 'Forensic analysis'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      title: 'Zion Content Studio Pro',
      description: 'AI-powered content creation platform with multi-modal generation capabilities',
      price: '$149/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking', 'Video creation', 'Image generation'],
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      link: '/zion-content-studio'
    },
    {
      title: 'Zion CRM Intelligence Pro',
      description: 'Smart customer relationship management with advanced AI insights and automation',
      price: '$249/month',
      features: ['AI lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows', 'Predictive analytics', 'Integration hub'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-crm-intelligence'
    },
    {
      title: 'Zion AI Video Editor',
      description: 'Professional AI-powered video editing and production platform',
      price: '$179/month',
      features: ['AI video editing', 'Auto-captioning', 'Voice synthesis', 'Background removal', 'Color grading', 'Export optimization'],
      icon: Monitor,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-video-editor'
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation service with context-aware language processing',
      price: '$99/month',
      features: ['100+ languages', 'Context awareness', 'Document translation', 'Voice translation', 'API access', 'Custom models'],
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-ai-translator-pro'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review and quality assurance platform for development teams',
      price: '$129/month',
      features: ['Automated code review', 'Security scanning', 'Performance analysis', 'Best practices', 'Team collaboration', 'Integration tools'],
      icon: Code,
      color: 'from-orange-500 to-red-500',
      link: '/zion-ai-code-reviewer'
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting transcription, analysis, and action item tracking',
      price: '$89/month',
      features: ['Live transcription', 'Meeting summaries', 'Action items', 'Sentiment analysis', 'Integration tools', 'Team collaboration'],
      icon: Mic,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-ai-meeting-assistant'
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

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform Your Business with
                <span className="block text-cyberpunk-advanced neon-advanced-glow">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
                cybersecurity, and custom software development services to businesses worldwide.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="btn-quantum-advanced inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover-glow"
                >
                  View Demo
                </Link>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to={service.link || "/contact"}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        Get Quote
                      </Link>
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to={service.link || "/contact"}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        Get Quote
                      </Link>
                    </div>
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
                  <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to={product.link || "/contact"}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm"
                      >
                        Try Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead with cutting-edge technologies that will shape the future of business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
                  <p className="text-gray-300 mb-4 text-sm">Revolutionary quantum computing solutions for complex problem solving and optimization.</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Quantum algorithm development
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Optimization problems
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Cryptography solutions
                    </li>
                  </ul>
                  <Link
                    to="/quantum-computing"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="group">
                <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">AR/VR Solutions</h3>
                  <p className="text-gray-300 mb-4 text-sm">Immersive augmented and virtual reality experiences for training, marketing, and collaboration.</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">Starting at $25,000</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      VR training simulations
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      AR marketing experiences
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Metaverse development
                    </li>
                  </ul>
                  <Link
                    to="/ar-vr-solutions"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="group">
                <div className="holographic-card-advanced bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <Wifi className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">5G Implementation</h3>
                  <p className="text-gray-300 mb-4 text-sm">Next-generation 5G network implementation for ultra-fast connectivity and IoT solutions.</p>
                  <div className="text-2xl font-bold text-green-400 mb-4">Starting at $50,000</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Network infrastructure
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      IoT integration
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Edge computing
                    </li>
                  </ul>
                  <Link
                    to="/5g-implementation"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Email Us
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                  <p className="text-sm text-gray-400">24/7 Support Available</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">Response within 2 hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-green-400 mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008</p>
                  <p className="text-gray-300">Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;