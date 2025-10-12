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
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-analytics'
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-content-generation'
    },
    {
      title: 'AI Customer Support',
      description: '24/7 intelligent customer service with natural language processing',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-chatbot-builder'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      link: '/ai-workflow-automation'
    },
    {
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis with machine learning',
      price: '$349/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing'],
      icon: Eye,
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-computer-vision'
    },
    {
      title: 'AI Voice Solutions',
      description: 'Speech recognition and synthesis for voice-enabled applications',
      price: '$279/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      icon: Mic,
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-voice-solutions'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnostics, treatment planning, and patient care',
      price: '$499/month',
      features: ['Medical imaging', 'Diagnostic assistance', 'Treatment recommendations', 'HIPAA compliance'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      link: '/ai-healthcare'
    },
    {
      title: 'AI Financial Services',
      description: 'AI-powered financial analysis, fraud detection, and trading',
      price: '$399/month',
      features: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Regulatory compliance'],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-financial-services'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      link: '/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      link: '/mobile-development'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      price: 'Starting at $4,000',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Performance optimization'],
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      link: '/devops-cicd'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $3,500',
      features: ['RESTful APIs', 'GraphQL endpoints', 'API documentation', 'Rate limiting'],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      link: '/api-development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      price: 'Starting at $2,500',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Security hardening'],
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      link: '/database-management'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and system maintenance',
      price: 'Starting at $1,500/month',
      features: ['24/7 support', 'System monitoring', 'Proactive maintenance', 'Incident response'],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      link: '/it-support'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI insights',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      link: '/zion-analytics-pro'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking'],
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      link: '/zion-content-studio'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-crm-intelligence'
    },
    {
      title: 'Zion AI Video Editor',
      description: 'Professional video editing with AI-powered automation',
      price: '$89/month',
      features: ['Auto-editing', 'Smart transitions', 'Voice enhancement', '4K export'],
      icon: Monitor,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-video-editor'
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing with AI personalization',
      price: '$59/month',
      features: ['AI subject lines', 'Behavioral triggers', 'A/B testing', 'Analytics dashboard'],
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      link: '/zion-email-automation'
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration',
      price: '$119/month',
      features: ['Smart scheduling', 'Resource optimization', 'Risk prediction', 'Team insights'],
      icon: CheckSquare,
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-project-master'
    },
    {
      title: 'Zion Data Sync',
      description: 'Seamless data synchronization across all platforms',
      price: '$69/month',
      features: ['Real-time sync', 'Data validation', 'Conflict resolution', 'API integration'],
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      link: '/zion-data-sync'
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="absolute inset-0 plasma-effect"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-cyberpunk">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
                cybersecurity, and custom software development services to businesses worldwide.
                <br />
                <span className="text-purple-400 font-semibold">Experience the future of technology today.</span>
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 btn-quantum text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 neon-glow"
                >
                  View Demo
                </Link>
              </div>
              <div className={`mt-8 text-sm text-gray-400 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p>Trusted by 500+ companies worldwide • 99% client satisfaction • 24/7 support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900 data-stream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 neon-glow pulse-glow group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-advanced">{stat.number}</div>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 scan-lines">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
                Our innovative approach ensures your success in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="holographic-card p-6 h-full hover-lift">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4 neon-glow`}>
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
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 plasma-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
                Our cutting-edge AI solutions deliver measurable results and competitive advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="holographic-card p-6 h-full hover-lift">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 neon-glow`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4 neon-purple">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 btn-quantum text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore All AI Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 holographic-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                IT Infrastructure & Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure.
                From cloud migration to custom development, we deliver enterprise-grade solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="holographic-card p-6 h-full hover-lift">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 neon-glow`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-cyan">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 btn-quantum text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/it-services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore All IT Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SAAS Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 quantum-field">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges with minimal setup.
                Transform your business with our innovative micro SAAS products.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="holographic-card p-6 h-full hover-lift">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4 neon-glow`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4 neon-green">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={product.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 btn-quantum text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/micro-saas"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Micro SAAS Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 quantum-field">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how our AI and IT solutions can drive your success.
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 btn-quantum text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 neon-glow"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 neon-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 neon-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 neon-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
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