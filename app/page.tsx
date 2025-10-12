'use client';
import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Phone, Mail, MapPin, Clock } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const aiServices = [
    { name: 'AI Chatbot Development', description: 'Custom AI chatbots for customer service', icon: Brain, price: '$2,500/month', features: ['24/7 Support', 'Multi-language', 'CRM Integration'] },
    { name: 'AI Content Generation', description: 'Automated content creation and marketing', icon: Code, price: '$1,200/month', features: ['Blog Posts', 'Social Media', 'Email Campaigns'] },
    { name: 'AI Data Analytics', description: 'Advanced business intelligence and insights', icon: BarChart, price: '$3,000/month', features: ['Real-time Dashboards', 'Predictive Models', 'Custom Reports'] },
    { name: 'AI Computer Vision', description: 'Image and video analysis solutions', icon: Globe, price: '$2,800/month', features: ['Object Detection', 'Facial Recognition', 'Quality Control'] },
    { name: 'AI Voice Solutions', description: 'Speech recognition and synthesis', icon: Zap, price: '$1,800/month', features: ['Voice Commands', 'Text-to-Speech', 'Call Analytics'] },
    { name: 'AI Workflow Automation', description: 'Intelligent process automation', icon: Target, price: '$2,200/month', features: ['RPA Integration', 'Smart Scheduling', 'Document Processing'] }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', description: 'AWS, Azure, GCP cloud solutions', icon: Cloud, price: '$1,500/month', features: ['Auto-scaling', '99.9% Uptime', 'Cost Optimization'] },
    { name: 'DevOps & CI/CD', description: 'Automated deployment pipelines', icon: Code, price: '$2,000/month', features: ['Git Integration', 'Docker Containers', 'Monitoring'] },
    { name: 'Cybersecurity Solutions', description: 'Advanced threat protection', icon: Shield, price: '$2,500/month', features: ['24/7 Monitoring', 'Penetration Testing', 'Compliance'] },
    { name: 'Database Management', description: 'Optimized database solutions', icon: BarChart, price: '$1,800/month', features: ['Performance Tuning', 'Backup & Recovery', 'Security'] },
    { name: 'API Development', description: 'RESTful and GraphQL APIs', icon: Code, price: '$1,200/month', features: ['Documentation', 'Rate Limiting', 'Authentication'] },
    { name: 'System Integration', description: 'Connect and optimize your systems', icon: Globe, price: '$2,200/month', features: ['Legacy Integration', 'Real-time Sync', 'Data Migration'] }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', description: 'Advanced business intelligence platform', icon: BarChart, price: '$299/month', features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization'], category: 'Analytics' },
    { name: 'Zion Chat AI', description: 'AI-powered customer support chatbot', icon: Brain, price: '$199/month', features: ['24/7 Support', 'Multi-language', 'CRM Integration'], category: 'AI' },
    { name: 'Zion Security Shield', description: 'Comprehensive cybersecurity monitoring', icon: Shield, price: '$399/month', features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports'], category: 'Security' },
    { name: 'Zion Cloud Vault', description: 'Secure cloud backup and recovery', icon: Cloud, price: '$149/month', features: ['Automated Backups', 'Version Control', 'Disaster Recovery'], category: 'Storage' },
    { name: 'Zion Content Studio', description: 'AI-powered content creation platform', icon: Code, price: '$249/month', features: ['Blog Generation', 'Social Media', 'SEO Optimization'], category: 'Content' },
    { name: 'Zion CRM Intelligence', description: 'AI-enhanced customer relationship management', icon: Users, price: '$349/month', features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Analytics'], category: 'CRM' },
    { name: 'Zion Email Automation', description: 'Smart email marketing platform', icon: Mail, price: '$179/month', features: ['Drip Campaigns', 'A/B Testing', 'Analytics'], category: 'Marketing' },
    { name: 'Zion Project Master', description: 'AI-powered project management', icon: Calendar, price: '$229/month', features: ['Task Automation', 'Resource Planning', 'Progress Tracking'], category: 'Productivity' },
    { name: 'Zion Invoice Genius', description: 'Automated invoicing and billing', icon: DollarSign, price: '$129/month', features: ['Auto-generation', 'Payment Tracking', 'Tax Calculations'], category: 'Finance' },
    { name: 'Zion Social Scheduler', description: 'AI social media management', icon: Globe, price: '$199/month', features: ['Content Scheduling', 'Engagement Analytics', 'Multi-platform'], category: 'Social Media' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  🚀 Trusted by 500+ Companies Worldwide
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Transform Your Business with 
                <span className="block text-6xl md:text-8xl mt-2">AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth for businesses worldwide. Get results in 30 days or less.
                <br />
                <span className="text-cyan-400 font-semibold">Trusted by 500+ companies • 99% success rate • 24/7 support</span>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
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
          </section>

          {/* Services Section */}
          <section className="mb-16">
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
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2">starting</span>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2">starting</span>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Ready-to-use business tools with AI and automation built-in. Start with a free trial.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400 text-xs ml-1">/month</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="/contact" 
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm group"
                    >
                      Start Free Trial
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href={`/micro-saas#${service.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="px-3 py-2 border border-green-400 text-green-400 rounded-lg font-medium hover:bg-green-400 hover:text-slate-900 transition-all duration-300 text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="/micro-saas" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
              >
                View All Micro SAAS Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((testimonial, index) => (
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
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
                Get started with a free consultation today.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    +1 302 464 0950
                  </a>
                  <p className="text-gray-400 text-sm mt-1">24/7 Support Available</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Response within 2 hours</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-green-400 font-medium">364 E Main St STE 1008</p>
                  <p className="text-gray-400 text-sm mt-1">Middletown DE 19709</p>
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
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee • ✓ 24/7 support</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;