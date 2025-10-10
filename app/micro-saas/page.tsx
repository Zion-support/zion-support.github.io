'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics'
    },
    {
      icon: Users,
      title: 'Customer Relationship Manager',
      description: 'AI-powered CRM with automated lead scoring and personalized customer interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure'
    },
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Automated content creation for marketing, social media, and documentation',
      features: ['Content templates', 'Multi-language support', 'SEO optimization', 'Brand consistency'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Content'
    },
    {
      icon: Database,
      title: 'Data Pipeline Manager',
      description: 'Automated data collection, processing, and analysis for business intelligence',
      features: ['Data connectors', 'ETL processes', 'Real-time processing', 'Data visualization'],
      price: '$179/month',
      users: 'Up to 75 users',
      category: 'Data'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless team coordination'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your tools from anywhere with our cloud-based platform'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Affordable AI Tools</title>
        <meta name="description" content="Discover our range of micro SAAS solutions - affordable, powerful AI-driven tools that transform your business operations without breaking the bank." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, affordable solutions, small business tools, Zion Tech Group" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, affordable AI-driven tools that transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
=======
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Affordable, scalable AI and IT tools designed for growing businesses. 
              Start with low monthly costs and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/pricing"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Compare Plans</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-white font-semibold">Features</th>
                    <th className="pb-4 text-white font-semibold text-center">AI Analytics</th>
                    <th className="pb-4 text-white font-semibold text-center">CRM</th>
                    <th className="pb-4 text-white font-semibold text-center">Security Suite</th>
                    <th className="pb-4 text-white font-semibold text-center">Cloud Manager</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr>
                    <td className="py-3 text-gray-300">Users</td>
                    <td className="py-3 text-gray-300 text-center">Up to 50</td>
                    <td className="py-3 text-gray-300 text-center">Up to 100</td>
                    <td className="py-3 text-gray-300 text-center">Up to 200</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">Storage</td>
                    <td className="py-3 text-gray-300 text-center">100GB</td>
                    <td className="py-3 text-gray-300 text-center">500GB</td>
                    <td className="py-3 text-gray-300 text-center">1TB</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">API Access</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">24/7 Support</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Affordable, powerful, and easy-to-use tools that deliver real business value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="text-gray-400 text-sm">{product.users}</div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Try Free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for ease of use
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Built for Modern Businesses
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our micro SAAS solutions are designed to help small and medium businesses 
                  compete with enterprise-level tools at a fraction of the cost.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Choose Your Solution</h4>
                      <p className="text-gray-300 text-sm">Select the micro SAAS tool that fits your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Sign Up & Setup</h4>
                      <p className="text-gray-300 text-sm">Create your account and configure your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Start Using</h4>
                      <p className="text-gray-300 text-sm">Begin leveraging AI-powered features immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose the plan that works best for your business size and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    tier.popular
                      ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <span>{tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
=======
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the micro SaaS solution that fits your business needs. 
              Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Plans
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;