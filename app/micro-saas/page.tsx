'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, Clock, Shield, Cloud, BarChart, Mail, Calendar, FileText, Smartphone, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'Data visualization', 'Automated insights'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics',
      popular: true
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Contact management', 'Pipeline tracking'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM',
      popular: false
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security alerts'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing with personalization and advanced automation features',
      features: ['Email campaigns', 'A/B testing', 'Personalization', 'Analytics', 'Template library', 'List management'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      category: 'Marketing',
      popular: false
    },
    {
      icon: Calendar,
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered task prioritization and team collaboration',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning', 'Gantt charts', 'Reporting'],
      price: '$129/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      popular: false
    },
    {
      icon: FileText,
      title: 'Document Management AI',
      description: 'Intelligent document processing, storage, and collaboration with AI-powered search',
      features: ['Document storage', 'AI search', 'Version control', 'Collaboration', 'OCR processing', 'Workflow automation'],
      price: '$89/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance and instant deployment',
      features: ['Drag-and-drop builder', 'AI assistance', 'Instant deployment', 'App store publishing', 'Analytics', 'Push notifications'],
      price: '$199/month',
      users: 'Unlimited apps',
      category: 'Development',
      popular: false
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment (24-48 hours)',
    'Scalable solutions',
    'Regular updates and improvements',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial available',
    'Cancel anytime'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Productivity', 'Development'];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions. Affordable, powerful tools for modern businesses. 50+ ready-to-use applications." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, analytics, CRM, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of AI-powered micro SAAS solutions. Affordable, powerful tools designed 
              to help modern businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Start Free Trial
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
              <Link
                to="/pricing"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    product.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <span className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm text-center">{product.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    </div>
                    <div className="text-center text-sm text-gray-400">{product.users}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2 px-4 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Lightning Fast Setup</h3>
                <p className="text-gray-300">
                  Get up and running in minutes with our intuitive setup process. No technical expertise required.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Cloud-Based</h3>
                <p className="text-gray-300">
                  Access your tools from anywhere with our secure, cloud-based platform. Always up-to-date and available.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with encryption, access controls, and compliance with industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  <Zap className="w-5 h-5 inline mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;