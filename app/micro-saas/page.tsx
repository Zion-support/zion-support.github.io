'use client';
import React, { useState } from 'react';
import { Zap, CheckCircle, Star, Users, Clock, ArrowRight, Award, Shield, TrendingUp } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'security', name: 'Security' },
    { id: 'development', name: 'Development' }
  ];

  const microSaasProducts = [
    {
      id: 1,
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API access'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'analytics',
      popular: true,
      trial: '14 days free'
    },
    {
      id: 2,
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'productivity',
      popular: false,
      trial: '30 days free'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'security',
      popular: false,
      trial: '7 days free'
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Cost alerts'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'development',
      popular: true,
      trial: '14 days free'
    },
    {
      id: 5,
      icon: '📧',
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation with AI-powered personalization and optimization',
      features: ['Email automation', 'AI personalization', 'A/B testing', 'Analytics', 'Template library'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      category: 'marketing',
      popular: false,
      trial: '21 days free'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'AI-powered design tools for creating stunning graphics, logos, and marketing materials',
      features: ['AI image generation', 'Logo design', 'Template library', 'Brand kit', 'Export options'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'marketing',
      popular: false,
      trial: '14 days free'
    },
    {
      id: 7,
      icon: '💻',
      title: 'Code Assistant Pro',
      description: 'AI-powered coding assistant with intelligent code completion and debugging capabilities',
      features: ['Code completion', 'Bug detection', 'Code review', 'Documentation', 'Multi-language support'],
      price: '$39/month',
      users: 'Up to 10 developers',
      category: 'development',
      popular: false,
      trial: '30 days free'
    },
    {
      id: 8,
      icon: '📱',
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance and instant deployment',
      features: ['Drag & drop builder', 'AI assistance', 'Instant deployment', 'App store publishing', 'Analytics'],
      price: '$199/month',
      users: 'Up to 3 apps',
      category: 'development',
      popular: false,
      trial: '14 days free'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interfaces and pre-built templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance standards'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with confidence - our solutions scale from startup to enterprise'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to help you succeed with our solutions'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our collection of micro SAAS solutions designed for modern businesses. AI-powered tools for analytics, productivity, marketing, and more."
        keywords={['micro saas', 'business tools', 'AI solutions', 'productivity tools', 'analytics', 'marketing automation']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable AI-driven tools designed for modern businesses. 
              Choose from our collection of specialized solutions and scale as you grow.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`cyber-card hologram-card p-6 relative hover:scale-105 transition-all duration-300 ${
                    product.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm mb-2">{product.users}</div>
                    <div className="text-green-400 text-sm font-medium">{product.trial}</div>
                  </div>

                  <button className="w-full cyber-button text-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS products are designed with modern businesses in mind, offering powerful features at affordable prices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center"
                >
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;