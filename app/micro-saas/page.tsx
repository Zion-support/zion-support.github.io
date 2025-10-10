'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      description: 'Comprehensive analytics and reporting dashboard for your business data',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Data export capabilities',
        'Multi-user access',
        'API integration'
      ],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'appointment-scheduler',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline your booking process with an intelligent scheduling system',
      features: [
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Multi-timezone support',
        'Custom booking forms'
      ],
      price: '$19/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: 'chat-analytics',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Analyze customer conversations and improve your support quality',
      features: [
        'Sentiment analysis',
        'Response time tracking',
        'Customer satisfaction scores',
        'Chat history analysis',
        'Performance metrics'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication'
    },
    {
      id: 'content-generator',
      icon: '✍️',
      title: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology',
      features: [
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Bulk content generation',
        'Content templates'
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
      description: 'Automate document processing and data extraction workflows',
      features: [
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Batch processing',
        'API integration'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Automation'
    },
    {
      id: 'email-marketing',
      icon: '📧',
      title: 'Email Marketing Suite',
      description: 'Create and manage effective email marketing campaigns',
      features: [
        'Drag-and-drop editor',
        'A/B testing',
        'Automation workflows',
        'Subscriber management',
        'Analytics and reporting'
      ],
      price: '$34/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Track and manage business expenses with intelligent categorization',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense reporting',
        'Budget tracking',
        'Team collaboration'
      ],
      price: '$24/month',
      users: 'Up to 12 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: 'inventory-management',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Streamline inventory tracking and management processes',
      features: [
        'Real-time inventory tracking',
        'Low stock alerts',
        'Barcode scanning',
        'Supplier management',
        'Reporting dashboard'
      ],
      price: '$44/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Operations'
    },
    {
      id: 'lead-scoring',
      icon: '🎯',
      title: 'Lead Scoring System',
      description: 'Identify and prioritize high-quality leads automatically',
      features: [
        'AI-powered scoring',
        'Lead qualification',
        'CRM integration',
        'Custom scoring rules',
        'Performance analytics'
      ],
      price: '$39/month',
      users: 'Up to 18 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: 'seo-optimizer',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Optimize your website for search engines with intelligent recommendations',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Ranking tracking'
      ],
      price: '$29/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'SEO'
    },
    {
      id: 'social-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Manage all your social media accounts from one platform',
      features: [
        'Multi-platform posting',
        'Content scheduling',
        'Engagement tracking',
        'Analytics dashboard',
        'Team collaboration'
      ],
      price: '$34/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Social Media'
    },
    {
      id: 'support-bot',
      icon: '🤖',
      title: 'AI Support Bot',
      description: 'Provide 24/7 customer support with an intelligent chatbot',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Human handoff',
        'Analytics and insights'
      ],
      price: '$49/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10,000+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Cloud className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations. Analytics, automation, and productivity tools." />
        <meta name="keywords" content="micro SaaS, business tools, analytics dashboard, automation, productivity software, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Request Custom Solution
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized business tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  product.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.users}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{product.features.length - 3} more features
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{product.price}</div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed and performance with minimal resource usage</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven</h3>
              <p className="text-gray-600">Comprehensive analytics and insights for informed decisions</p>
            </div>
            <div className="text-center">
              <Cloud className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud-Native</h3>
              <p className="text-gray-600">Built for the cloud with automatic scaling and updates</p>
            </div>
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Seamless integration with your existing tools and workflows</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Built-in collaboration features for team productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start using our micro SaaS solutions today and see the difference they can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;