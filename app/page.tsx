'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Rocket,
  Sparkles,
  Target,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export default function HomePage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing and SEO optimization',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection'],
      icon: FileText,
      path: '/ai-content-generator',
      marketPrice: '$500-800/month',
      benefits: ['50% faster content creation', 'SEO-optimized output', 'Multi-platform publishing']
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with advanced NLP',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Voice integration'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      marketPrice: '$800-1200/month',
      benefits: ['80% reduction in support tickets', 'Instant response time', 'Multi-language support']
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      marketPrice: '$600-1000/month',
      benefits: ['30% better decision making', 'Automated insights', 'Custom dashboards']
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for VR/AR applications',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Real-time rendering'],
      icon: Camera,
      path: '/ai-3d-generation',
      marketPrice: '$1200-2000/month',
      benefits: ['90% faster 3D creation', 'Professional quality output', 'VR/AR ready models']
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug design',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis'],
      icon: Brain,
      path: '/ai-drug-discovery-pro',
      marketPrice: '$5000-10000/month',
      benefits: ['60% faster drug discovery', 'Reduced R&D costs', 'Higher success rates']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Zero-day protection'],
      icon: Shield,
      path: '/ai-cybersecurity-suite',
      marketPrice: '$2000-4000/month',
      benefits: ['99.9% threat detection', 'Automated incident response', 'Compliance automation']
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support', 'Cost optimization'],
      icon: Cloud,
      path: '/cloud-migration',
      marketPrice: '$8000-15000',
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure']
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and infrastructure automation',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training', 'Security integration'],
      icon: Code,
      path: '/devops-solutions',
      marketPrice: '$5000-12000',
      benefits: ['80% faster deployments', 'Reduced errors', 'Automated scaling']
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment and implementation with ongoing monitoring',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response'],
      icon: Shield,
      path: '/cybersecurity',
      marketPrice: '$4000-8000',
      benefits: ['100% compliance', '24/7 monitoring', 'Rapid incident response']
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design',
      price: 'Starting at $8,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Maintenance support', 'Push notifications'],
      icon: Smartphone,
      path: '/mobile-development',
      marketPrice: '$12000-25000',
      benefits: ['Faster time to market', 'Cross-platform compatibility', 'App store optimization']
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and analytics',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Version control'],
      icon: Database,
      path: '/api-development',
      marketPrice: '$6000-12000',
      benefits: ['Scalable architecture', 'Comprehensive documentation', 'Real-time analytics']
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services with backup strategies',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Monitoring'],
      icon: Database,
      path: '/database-management',
      marketPrice: '$2500-5000',
      benefits: ['50% performance improvement', 'Zero data loss', 'Automated backups']
    }
  ];

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation',
      price: '$99/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Custom workflows'],
      icon: Users,
      path: '/ai-crm',
      marketPrice: '$150-300/month',
      benefits: ['40% increase in sales', 'Automated lead nurturing', 'Predictive analytics']
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights and automated reporting',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time alerts'],
      icon: TrendingUp,
      path: '/smart-analytics',
      marketPrice: '$200-500/month',
      benefits: ['Data-driven decisions', 'Automated insights', 'Custom visualizations']
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications with smart test generation',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting', 'Smart test cases'],
      icon: Cpu,
      path: '/ai-automated-testing',
      marketPrice: '$300-600/month',
      benefits: ['90% test coverage', 'Faster bug detection', 'Automated test generation']
    },
    {
      name: 'AI Content Management',
      description: 'AI-enhanced CMS with intelligent content optimization and SEO tools',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'AI writing assistant'],
      icon: FileText,
      path: '/ai-content-management',
      marketPrice: '$120-250/month',
      benefits: ['Better SEO rankings', 'Automated content optimization', 'Multi-language support']
    },
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization and advanced analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'AI subject lines'],
      icon: Mail,
      path: '/ai-email-marketing',
      marketPrice: '$200-400/month',
      benefits: ['40% higher open rates', 'Automated personalization', 'Advanced analytics']
    },
    {
      name: 'AI Social Media Manager',
      description: 'AI-powered social media management with content suggestions and engagement analytics',
      price: '$89/month',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Scheduling'],
      icon: MessageSquare,
      path: '/ai-social-media-manager',
      marketPrice: '$150-300/month',
      benefits: ['50% more engagement', 'Automated posting', 'Content optimization']
    }
  ];

  const fiveGServices = [
    {
      name: '5G Network Infrastructure',
      description: 'Complete 5G network design and implementation for ultra-fast connectivity',
      price: 'Starting at $50,000',
      features: ['Network planning', 'Equipment installation', 'Performance optimization', 'Maintenance support', 'Security integration'],
      icon: Wifi,
      path: '/5g-network-infrastructure',
      marketPrice: '$75000-150000',
      benefits: ['10x faster speeds', 'Ultra-low latency', 'Massive device connectivity']
    },
    {
      name: '5G Edge Computing',
      description: 'Edge computing solutions for ultra-low latency applications and real-time processing',
      price: 'Starting at $25,000',
      features: ['Edge server deployment', 'Latency optimization', 'Data processing', 'Monitoring tools', 'Security'],
      icon: Cpu,
      path: '/5g-edge-computing',
      marketPrice: '$40000-80000',
      benefits: ['Sub-1ms latency', 'Real-time processing', 'Reduced bandwidth costs']
    },
    {
      name: '5G IoT Solutions',
      description: 'Internet of Things implementation with 5G connectivity and real-time monitoring',
      price: 'Starting at $15,000',
      features: ['Device integration', 'Data collection', 'Real-time monitoring', 'Analytics dashboard', 'Predictive maintenance'],
      icon: Globe,
      path: '/5g-iot-solutions',
      marketPrice: '$25000-50000',
      benefits: ['Real-time insights', 'Predictive maintenance', 'Massive device support']
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: Rocket },
    { number: '99.8%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Globe },
    { number: '150+', label: 'Expert Team Members', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '48hr', label: 'Response Time', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions increased our efficiency by 300% and reduced costs by 50%.',
      rating: 5,
      role: 'CTO'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Their cloud infrastructure is rock-solid. We\'ve had zero downtime since implementation and our applications run 10x faster.',
      rating: 5,
      role: 'VP Engineering'
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'The cybersecurity services gave us peace of mind. Our data has never been more secure, and compliance is now automated.',
      rating: 5,
      role: 'Security Director'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge AI, cloud services, cybersecurity, and 5G solutions. 
                We deliver innovation that drives real results and measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                <Brain className="w-8 h-8 inline-block mr-3 text-cyan-400" />
                AI-Powered Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Cutting-edge artificial intelligence services that transform your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                <Code className="w-8 h-8 inline-block mr-3 text-purple-400" />
                IT Services & Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive IT infrastructure services to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                <Cpu className="w-8 h-8 inline-block mr-3 text-green-400" />
                Micro SAAS Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Specialized micro services designed for specific business needs and workflows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                <Wifi className="w-8 h-8 inline-block mr-3 text-yellow-400" />
                5G Implementation Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Next-generation connectivity solutions for ultra-fast, low-latency applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-cyan-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Get a free consultation and custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More About Us
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}