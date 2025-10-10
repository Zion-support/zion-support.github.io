'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom reports',
        'API integration',
        'Mobile app access'
      ],
      popular: true,
      icon: Brain
    },
    {
      id: 2,
      name: 'AI Content Generator',
      description: 'Create high-quality content with AI assistance',
      price: '$49/month',
      features: [
        'Multiple content types',
        'SEO optimization',
        'Brand voice training',
        'Bulk generation',
        'Content calendar'
      ],
      popular: false,
      icon: Globe
    },
    {
      id: 3,
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot for customer service automation',
      price: '$79/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Human handoff',
        'Analytics dashboard',
        'Custom training'
      ],
      popular: false,
      icon: Users
    },
    {
      id: 4,
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization',
      price: '$69/month',
      features: [
        'Smart segmentation',
        'A/B testing',
        'Send time optimization',
        'Template library',
        'Performance analytics'
      ],
      popular: false,
      icon: Zap
    },
    {
      id: 5,
      name: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring',
      price: '$149/month',
      features: [
        'Real-time monitoring',
        'Threat intelligence',
        'Automated responses',
        'Compliance reporting',
        '24/7 alerts'
      ],
      popular: false,
      icon: Shield
    },
    {
      id: 6,
      name: 'AI Project Manager',
      description: 'Intelligent project management and task automation',
      price: '$89/month',
      features: [
        'Smart scheduling',
        'Resource optimization',
        'Risk assessment',
        'Team collaboration',
        'Progress tracking'
      ],
      popular: false,
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy onboarding process'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: Star,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS tools to boost your business productivity" />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity tools" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="50+ AI-powered micro SAAS tools to boost your business productivity" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Boost your business productivity with our collection of 50+ AI-powered micro SAAS tools. 
              Each tool is designed to solve specific business challenges with minimal setup.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">AI Tools</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">5min</div>
                <div className="text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SAAS Tools</h2>
              <p className="text-gray-300">Choose from our collection of specialized AI-powered tools</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20'
                      : 'border-gray-700 hover:border-cyan-400/50'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400">{product.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      product.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Tools?</h2>
              <p className="text-gray-300">We make business automation simple and effective</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven business automation. 
                No credit card required, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View All Tools
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