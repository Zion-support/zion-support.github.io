'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular?: boolean;
  icon: React.ComponentType<any>;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'AI Project Manager',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      price: '$29/month',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      category: 'Productivity',
      popular: true,
      icon: BarChart3
    },
    {
      id: '2',
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and automated reporting.',
      price: '$49/month',
      features: ['Real-time dashboards', 'AI insights', 'Custom reports', 'Data visualization'],
      category: 'Analytics',
      icon: TrendingUp
    },
    {
      id: '3',
      name: 'AI Content Creator',
      description: 'Automated content generation for blogs, social media, and marketing materials.',
      price: '$39/month',
      features: ['Content generation', 'SEO optimization', 'Multi-platform posting', 'Brand voice training'],
      category: 'Content',
      icon: MessageSquare
    },
    {
      id: '4',
      name: 'Secure File Manager',
      description: 'Enterprise-grade file management with advanced security and collaboration features.',
      price: '$19/month',
      features: ['Secure storage', 'Access controls', 'Version history', 'Team sharing'],
      category: 'Security',
      icon: Shield
    },
    {
      id: '5',
      name: 'Cloud Backup Pro',
      description: 'Automated cloud backup with intelligent scheduling and disaster recovery.',
      price: '$24/month',
      features: ['Automated backups', 'Cross-platform sync', 'Version control', 'Disaster recovery'],
      category: 'Storage',
      icon: Cloud
    },
    {
      id: '6',
      name: 'Team Communication Hub',
      description: 'Streamlined team communication with video calls, chat, and file sharing.',
      price: '$34/month',
      features: ['Video conferencing', 'Team chat', 'File sharing', 'Screen sharing'],
      category: 'Communication',
      icon: Users
    }
  ];

  const categories = [
    { name: 'All', count: microSaasProducts.length },
    { name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { name: 'Storage', count: microSaasProducts.filter(p => p.category === 'Storage').length },
    { name: 'Communication', count: microSaasProducts.filter(p => p.category === 'Communication').length }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless teamwork'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Grows with your business needs and requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our collection of powerful micro SAAS solutions designed to streamline your business operations. AI-powered tools for productivity, analytics, and more." />
        <meta name="keywords" content="micro saas, business tools, productivity software, AI tools, business automation, cloud applications" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SAAS solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable business tools designed to streamline your operations and boost productivity. Choose from our collection of AI-powered micro applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                Browse Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-cyan-500 hover:text-white"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 ${
                  product.popular ? 'border-cyan-400/50' : 'border-white/20'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                  <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Pay only for what you use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$19<span className="text-lg text-gray-300">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small teams getting started</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Up to 5 users
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  10GB storage
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Basic support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Core features
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-cyan-400/50 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$49<span className="text-lg text-gray-300">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Up to 25 users
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  100GB storage
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Priority support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Advanced features
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  API access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$99<span className="text-lg text-gray-300">/month</span></div>
              <p className="text-gray-300 mb-6">For large organizations</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  1TB storage
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  All features
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;