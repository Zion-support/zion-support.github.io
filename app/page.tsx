import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Lock, Smartphone, Wifi, BarChart3, Users, Target, Rocket, Star, Sparkles, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice matching.',
      price: '$29/month',
      features: ['SEO-Optimized Content', 'Brand Voice Matching', 'Multi-Language Support', 'Content Analytics'],
      link: '/micro-saas/ai-content-generator'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and insights for data-driven decision making.',
      price: '$49/month',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Automated Reports'],
      link: '/micro-saas/analytics-dashboard'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Lead Scoring Engine',
      description: 'AI-powered lead qualification and scoring to maximize conversion rates.',
      price: '$39/month',
      features: ['AI Lead Scoring', 'Behavioral Analysis', 'CRM Integration', 'Conversion Tracking'],
      link: '/micro-saas/lead-scoring'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'SEO Optimizer Suite',
      description: 'Comprehensive SEO tools for keyword research, content optimization, and ranking tracking.',
      price: '$59/month',
      features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis'],
      link: '/micro-saas/seo-optimizer'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Document Processor AI',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      price: '$79/month',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'API Integration'],
      link: '/micro-saas/document-processor'
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-400" />,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling system with timezone handling and automated reminders.',
      price: '$19/month',
      features: ['Smart Scheduling', 'Timezone Handling', 'Automated Reminders', 'Calendar Integration'],
      link: '/micro-saas/appointment-scheduler'
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence services to transform your business operations.',
      price: 'Starting at $2,500/month',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Custom AI Development'],
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions to protect your digital infrastructure and data.',
      price: 'Starting at $1,800/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Compliance Management', 'Incident Response'],
      link: '/cybersecurity-suite'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with 99.9% uptime guarantee.',
      price: 'Starting at $1,200/month',
      features: ['Cloud Migration', 'Infrastructure Management', 'Auto-scaling', 'Disaster Recovery', '24/7 Monitoring'],
      link: '/cloud-infrastructure'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions for ultra-fast, low-latency operations.',
      price: 'Starting at $3,500/month',
      features: ['5G Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization', 'Future-proofing'],
      link: '/5g-implementation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Smartphone className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of AI-powered solutions, micro SAAS services, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, micro SAAS, 5G implementation, IT services, digital transformation, enterprise technology, business intelligence, cybersecurity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Next-Gen Technology Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, micro SAAS services, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/micro-saas" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                Explore Micro SAAS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/10">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6">
              <Star className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-300 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Powerful Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, scalable micro SAAS solutions designed to solve specific business challenges with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-emerald-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Brain className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Enterprise AI Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Advanced AI & IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive enterprise solutions powered by artificial intelligence and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;