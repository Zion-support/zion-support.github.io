'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Zap, Brain, Cloud, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration hub'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM'
    },
    {
      icon: '🛡️',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 25 devices',
      category: 'Security'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Simplified cloud infrastructure management with cost optimization and automated scaling',
      features: ['Cost optimization', 'Auto-scaling', 'Resource monitoring', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Infrastructure'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing with personalized campaigns and advanced analytics',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Analytics dashboard'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      category: 'Marketing'
    },
    {
      icon: '📋',
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered task prioritization and team collaboration',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning'],
      price: '$129/month',
      users: 'Up to 25 users',
      category: 'Productivity'
    },
    {
      icon: '🛒',
      title: 'E-commerce Analytics Pro',
      description: 'Advanced analytics and optimization tools for e-commerce businesses',
      features: ['Sales analytics', 'Customer insights', 'Inventory optimization', 'Conversion tracking'],
      price: '$179/month',
      users: 'Unlimited',
      category: 'E-commerce'
    },
    {
      icon: '👨‍💼',
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform with automated candidate screening and matching',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Analytics'],
      price: '$199/month',
      users: 'Up to 5 recruiters',
      category: 'HR'
    },
    {
      icon: '🏥',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered insights',
      features: ['Patient records', 'HIPAA compliance', 'AI insights', 'Integration'],
      price: '$249/month',
      users: 'Up to 50 providers',
      category: 'Healthcare'
    },
    {
      icon: '💰',
      title: 'AI Accounting Assistant',
      description: 'Automated accounting and financial management with AI-powered insights',
      features: ['Automated bookkeeping', 'Financial reporting', 'Tax preparation', 'Expense tracking'],
      price: '$159/month',
      users: 'Up to 10 accountants',
      category: 'Finance'
    },
    {
      icon: '🏠',
      title: 'Property Management AI',
      description: 'Intelligent property management with automated tenant screening and maintenance',
      features: ['Tenant screening', 'Maintenance tracking', 'Rent collection', 'Analytics'],
      price: '$189/month',
      users: 'Up to 100 properties',
      category: 'Real Estate'
    },
    {
      icon: '⚖️',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management and contract analysis',
      features: ['Document analysis', 'Contract review', 'Compliance tracking', 'Search'],
      price: '$299/month',
      users: 'Up to 20 lawyers',
      category: 'Legal'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Productivity', 'E-commerce', 'HR', 'Healthcare', 'Finance', 'Real Estate', 'Legal'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: Users,
      title: 'Scalable',
      description: 'Grow with your business with flexible pricing and features'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security and compliance built-in'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions. 50+ AI-powered tools for every business need, from analytics to security." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SAAS tools designed to solve specific business challenges and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View All Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SAAS Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Micro SAAS Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl mb-4 text-center">{product.icon}</div>
                  <div className="text-center mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;