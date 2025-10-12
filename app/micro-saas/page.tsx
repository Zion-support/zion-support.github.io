'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sparkles, BarChart, MessageCircle, Shield, Cloud, FileText, 
  Users, Target, Settings, Mail, Package, DollarSign, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Zap, Globe, Smartphone, Lock, Workflow, Eye, Mic,
  Calendar, Monitor, Code, Database, Heart, ShoppingCart
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards.',
      price: '$299/month',
      features: ['Real-time analytics', 'AI insights', 'Custom dashboards', 'Data visualization'],
      benefits: ['40% better decisions', 'Real-time insights', 'Easy setup', 'No coding required'],
      link: '/zion-analytics-pro',
      category: 'analytics',
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and 24/7 availability.',
      price: '$199/month',
      features: ['NLP processing', 'Multi-language', 'Voice integration', 'Custom training'],
      benefits: ['80% ticket reduction', '24/7 support', 'Instant responses', 'Easy integration'],
      link: '/zion-chat-ai',
      category: 'communication'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      price: '$399/month',
      features: ['Threat detection', 'Vulnerability scans', 'Incident response', 'Compliance reports'],
      benefits: ['99.8% threat detection', 'Automated response', 'Compliance ready', '24/7 monitoring'],
      link: '/zion-security-shield',
      category: 'security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore.',
      price: '$149/month',
      features: ['Automated backups', 'Instant restore', 'Cross-platform', 'Encryption'],
      benefits: ['Zero data loss', 'Instant recovery', 'Secure storage', 'Easy management'],
      link: '/zion-cloud-vault',
      category: 'storage'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      features: ['AI writing', 'SEO optimization', 'Multi-format', 'Brand voice'],
      benefits: ['10x content production', 'SEO optimized', 'Consistent voice', 'Time saving'],
      link: '/zion-content-studio',
      category: 'content'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      price: '$249/month',
      features: ['Lead scoring', 'Predictive analytics', 'Automation', 'Integration'],
      benefits: ['30% more sales', 'Better lead quality', 'Automated follow-ups', 'ROI tracking'],
      link: '/zion-crm-intelligence',
      category: 'crm'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Zion Lead Magnet',
      description: 'Lead generation platform with AI-powered lead scoring and automated nurturing campaigns.',
      price: '$179/month',
      features: ['Lead scoring', 'Email campaigns', 'Landing pages', 'Analytics'],
      benefits: ['50% more leads', 'Higher conversion', 'Automated nurturing', 'ROI tracking'],
      link: '/zion-lead-magnet',
      category: 'marketing'
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      title: 'Zion Workflow Automation',
      description: 'Business process automation platform that streamlines operations and reduces manual work.',
      price: '$199/month',
      features: ['Process automation', 'Custom workflows', 'Integration APIs', 'Monitoring'],
      benefits: ['75% efficiency gain', 'Error reduction', 'Cost savings', 'Scalable'],
      link: '/zion-workflow-automation',
      category: 'automation'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-400" />,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation.',
      price: '$129/month',
      features: ['AI personalization', 'Automation', 'A/B testing', 'Analytics'],
      benefits: ['40% higher open rates', 'Personalized content', 'Automated campaigns', 'Better ROI'],
      link: '/zion-email-automation',
      category: 'marketing'
    },
    {
      icon: <Package className="w-8 h-8 text-teal-400" />,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      price: '$159/month',
      features: ['Demand forecasting', 'Auto reordering', 'Multi-location', 'Analytics'],
      benefits: ['30% less stockouts', 'Reduced waste', 'Cost optimization', 'Real-time tracking'],
      link: '/zion-inventory-smart',
      category: 'inventory'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoicing and payment processing platform with automated follow-ups.',
      price: '$89/month',
      features: ['AI invoicing', 'Payment processing', 'Automated follow-ups', 'Analytics'],
      benefits: ['50% faster payments', 'Reduced errors', 'Automated reminders', 'Better cash flow'],
      link: '/zion-invoice-genius',
      category: 'finance'
    },
    {
      icon: <Monitor className="w-8 h-8 text-violet-400" />,
      title: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered alerting and insights.',
      price: '$199/month',
      features: ['Real-time monitoring', 'AI alerts', 'Performance insights', 'Custom dashboards'],
      benefits: ['99.9% uptime', 'Proactive alerts', 'Performance optimization', 'Cost savings'],
      link: '/zion-performance-monitor',
      category: 'monitoring'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart className="w-5 h-5" /> },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'storage', name: 'Storage', icon: <Cloud className="w-5 h-5" /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'crm', name: 'CRM', icon: <Users className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <Target className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Settings className="w-5 h-5" /> },
    { id: 'inventory', name: 'Inventory', icon: <Package className="w-5 h-5" /> },
    { id: 'finance', name: 'Finance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'monitoring', name: 'Monitoring', icon: <Monitor className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Sparkles className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '10,000+', label: 'Happy Customers', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        '10GB storage',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'AI-powered insights',
        '24/7 phone support',
        'Custom integrations',
        'Unlimited storage',
        'Advanced automation',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const filteredServices = activeTab === 'overview' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including analytics, CRM, automation, and more. Ready-to-use business tools with AI-powered features." />
        <meta name="keywords" content="micro SAAS, business tools, analytics, CRM, automation, AI solutions, software as a service" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Micro SAAS Solutions",
            "description": "Ready-to-use business tools and software solutions",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Sparkles className="w-4 h-4" />
              <span>Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Powerful{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SAAS
              </span>{' '}
              Solutions
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business tools powered by AI and automation. 
              No coding required - just sign up and start growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use business tools that solve real problems and drive growth
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-purple-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    >
                      Try Free for 14 Days
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our micro SAAS solutions to grow and scale efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Your Free Trial
                  </Link>
                  <Link 
                    to="/demo"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;