'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap } from 'lucide-react'

<<<<<<< HEAD
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
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'analytics-dashboard',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business metrics',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-platform integration',
        'Automated alerts',
        'Export capabilities'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'appointment-scheduler',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Smart scheduling system with automated reminders and calendar sync',
      features: [
        'Calendar integration',
        'Automated reminders',
        'Time zone handling',
        'Custom booking forms',
        'Payment processing'
      ],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: 'chat-analytics',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Advanced analytics for your chat and messaging platforms',
      features: [
        'Message sentiment analysis',
        'Response time tracking',
        'Customer satisfaction metrics',
        'Team performance insights',
        'Custom dashboards'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: 'content-generator',
      icon: '✍️',
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing',
      features: [
        'AI content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar'
      ],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Content'
    },
    {
      id: 'document-processor',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automated document processing and data extraction tool',
      features: [
        'OCR text extraction',
        'Data validation',
        'Batch processing',
        'Custom templates',
        'API integration'
      ],
      price: '$59/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'email-marketing',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Complete email marketing solution with automation and analytics',
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'A/B testing',
        'Subscriber management',
        'Detailed analytics'
      ],
      price: '$39/month',
      users: 'Up to 5,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Simple and effective expense tracking for individuals and small teams',
      features: [
        'Receipt scanning',
        'Category management',
        'Expense reports',
        'Budget tracking',
        'Team collaboration'
      ],
      price: '$15/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: 'inventory-management',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Streamlined inventory tracking and management system',
      features: [
        'Stock level monitoring',
        'Low stock alerts',
        'Supplier management',
        'Purchase orders',
        'Reporting dashboard'
      ],
      price: '$45/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Inventory'
    },
    {
      id: 'lead-scoring',
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring and qualification system',
      features: [
        'Behavioral tracking',
        'Scoring algorithms',
        'Lead nurturing',
        'CRM integration',
        'Performance analytics'
      ],
      price: '$35/month',
      users: 'Up to 7 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: 'seo-optimizer',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tool',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'Content optimization',
        'Rank tracking'
      ],
      price: '$29/month',
      users: 'Up to 3 websites',
      popular: false,
      category: 'SEO'
    },
    {
      id: 'social-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'All-in-one social media management and scheduling platform',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Engagement tracking',
        'Hashtag research',
        'Team collaboration'
      ],
      price: '$25/month',
      users: 'Up to 5 accounts',
      popular: false,
      category: 'Social Media'
    },
    {
      id: 'support-bot',
      icon: '🤖',
      title: 'Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics dashboard'
      ],
      price: '$49/month',
      users: 'Unlimited',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our pre-built solutions and easy integration.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our services.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our cloud-based infrastructure.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Scalable',
      description: 'Grow with your business - easily upgrade or add more features as needed.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations. Analytics, scheduling, content generation, and more." />
        <meta name="keywords" content="micro SaaS, business tools, analytics dashboard, appointment scheduler, content generator, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready-to-use business tools that solve specific problems and boost productivity. No complex setup, just instant value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Products
              </a>
              <a
                href="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Micro SaaS Products
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-yellow-600">Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{product.users}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      {product.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link
                      to={`/micro-saas/${product.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and experience the power of our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
=======
const MicroSaaSPage: React.FC = () => {
  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Built-in analytics and monitoring',
    'Custom branding options',
    'API integration capabilities',
    'Multi-tenant support',
    'Automated billing and subscriptions',
    '24/7 technical support'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our pre-built micro-SaaS platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in weeks, not months.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

export default MicroSaaSPage