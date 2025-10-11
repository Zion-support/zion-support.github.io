'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business',
      features: ['Real-time data visualization', 'Custom reports', 'Data export', 'Team collaboration'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline booking and scheduling for your business',
      features: ['Calendar integration', 'Automated reminders', 'Payment processing', 'Multi-timezone support'],
      price: '$19/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '3',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Analyze customer conversations and improve support',
      features: ['Sentiment analysis', 'Response time tracking', 'Customer satisfaction', 'Team performance'],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication'
    },
    {
      id: '4',
      icon: '📝',
      title: 'Content Generator',
      description: 'AI-powered content creation for marketing and social media',
      features: ['AI writing assistant', 'Multiple content types', 'Brand voice training', 'SEO optimization'],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '5',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automate document processing and data extraction',
      features: ['OCR technology', 'Data extraction', 'Form processing', 'Batch operations'],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '6',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Create and manage email campaigns with advanced automation',
      features: ['Drag-and-drop editor', 'Automation workflows', 'A/B testing', 'Detailed analytics'],
      price: '$34/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '7',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Track and manage business expenses with smart categorization',
      features: ['Receipt scanning', 'Automatic categorization', 'Expense reports', 'Integration with accounting'],
      price: '$24/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '8',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Streamline inventory tracking and management',
      features: ['Real-time tracking', 'Low stock alerts', 'Barcode scanning', 'Multi-location support'],
      price: '$44/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Inventory'
    },
    {
      id: '9',
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Automatically score and prioritize leads for better conversion',
      features: ['AI-powered scoring', 'Behavioral tracking', 'Lead nurturing', 'CRM integration'],
      price: '$39/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: '10',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Improve your website\'s search engine rankings',
      features: ['Keyword research', 'On-page optimization', 'Competitor analysis', 'Rank tracking'],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'SEO'
    },
    {
      id: '11',
      icon: '📱',
      title: 'Social Manager',
      description: 'Manage all your social media accounts from one platform',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement tracking', 'Team collaboration'],
      price: '$34/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Social Media'
    },
    {
      id: '12',
      icon: '🤖',
      title: 'Support Bot',
      description: 'AI-powered customer support chatbot',
      features: ['Natural language processing', 'Multi-language support', 'Integration with helpdesk', 'Analytics dashboard'],
      price: '$49/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Communication', 'Content', 'Productivity', 'Marketing', 'Finance', 'Inventory', 'Sales', 'SEO', 'Social Media', 'Support'];

  const benefits = [
    'Quick setup and deployment',
    'No long-term contracts',
    'Regular updates and new features',
    '24/7 customer support',
    'Secure and reliable infrastructure',
    'Easy integration with existing tools',
    'Scalable pricing plans',
    'Money-back guarantee'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Ready-to-use tools with no setup required." />
        <meta name="keywords" content="micro SaaS, business tools, ready-to-use software, productivity tools, business automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Ready-to-use business tools and micro SaaS solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready-to-use business tools that solve specific problems. No setup required, just sign up and start using.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg text-white hover:bg-white/20 transition-colors border border-white/20"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Collection</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully curated collection of business tools designed to solve specific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  product.popular
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                    : 'border-white/20 hover:border-purple-300'
                }`}
              >
                {product.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-white mb-1">{product.price}</div>
                  <div className="text-gray-400 text-sm">{product.users}</div>
                </div>

                <div className="text-center">
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      product.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'border border-white text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS tools are designed to be simple, effective, and immediately useful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Choose from our collection of micro SaaS solutions and start solving business problems today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;