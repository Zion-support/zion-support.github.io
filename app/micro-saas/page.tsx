'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead scoring', 'Email automation', 'Sales pipeline', 'Customer insights'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false
    },
    {
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered content generation and optimization',
      features: ['AI content generation', 'A/B testing', 'Advanced segmentation', 'Analytics'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      popular: false
    },
    {
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tool with AI-powered recommendations',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis'],
      price: '$59/month',
      users: 'Up to 25 websites',
      popular: false
    },
    {
      icon: '📱',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation and scheduling capabilities',
      features: ['Content creation', 'Post scheduling', 'Analytics', 'Multi-platform support'],
      price: '$89/month',
      users: 'Up to 15 accounts',
      popular: false
    },
    {
      icon: '💰',
      title: 'Invoice Generator',
      description: 'Automated invoice creation and payment tracking with AI-powered insights',
      features: ['Auto-invoicing', 'Payment tracking', 'Financial reports', 'Client portal'],
      price: '$39/month',
      users: 'Unlimited invoices',
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive setup process and pre-built templates.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Scalable Solutions',
      description: 'Start small and scale as your business grows. Flexible pricing and feature sets.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, productivity software, automation tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven business tools designed to streamline your operations 
              and boost productivity. Start small, scale big.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Micro SaaS Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`cyber-card hologram-card p-6 relative ${product.popular ? 'border-2 border-cyan-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full cyber-button py-3 mb-3">
                    Start Free Trial
                  </button>
                  
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
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
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
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