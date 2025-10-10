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
      description: 'Real-time analytics and reporting for your business metrics',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Automated alerts',
        'Multi-platform integration',
        'Export capabilities'
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
      description: 'Streamline your scheduling with automated booking and reminders',
      features: [
        'Online booking system',
        'Automated reminders',
        'Calendar integration',
        'Payment processing',
        'Multi-timezone support'
      ],
      price: '$19/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'chat-analytics',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Analyze customer conversations and improve engagement',
      features: [
        'Message sentiment analysis',
        'Response time tracking',
        'Customer satisfaction scores',
        'Team performance metrics',
        'Custom dashboards'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: 'content-generator',
      icon: '✍️',
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
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
      description: 'Automate document processing and data extraction',
      features: [
        'OCR text extraction',
        'Automated data entry',
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
      title: 'Email Marketing',
      description: 'Create and manage email campaigns with advanced automation',
      features: [
        'Drag-and-drop editor',
        'Automated workflows',
        'A/B testing',
        'Advanced segmentation',
        'Performance analytics'
      ],
      price: '$34/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Track and manage business expenses with receipt scanning',
      features: [
        'Receipt scanning',
        'Expense categorization',
        'Approval workflows',
        'Budget tracking',
        'Tax reporting'
      ],
      price: '$24/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: 'inventory-management',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Track inventory levels and automate reordering',
      features: [
        'Real-time inventory tracking',
        'Automated reordering',
        'Barcode scanning',
        'Multi-location support',
        'Reporting and analytics'
      ],
      price: '$44/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Operations'
    },
    {
      id: 'lead-scoring',
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Automatically score and prioritize leads for better conversion',
      features: [
        'Automated lead scoring',
        'Behavioral tracking',
        'Custom scoring models',
        'CRM integration',
        'Performance analytics'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: 'seo-optimizer',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Optimize your website for search engines with AI-powered insights',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Ranking tracking'
      ],
      price: '$54/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'social-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Schedule and manage social media posts across platforms',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Analytics and insights',
        'Automated posting',
        'Engagement tracking'
      ],
      price: '$29/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'support-bot',
      icon: '🤖',
      title: 'Support Bot',
      description: 'AI-powered customer support bot for instant responses',
      features: [
        'AI-powered responses',
        'Multi-language support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics and insights'
      ],
      price: '$49/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const benefits = [
    'Quick setup and deployment',
    'No complex infrastructure needed',
    'Affordable monthly pricing',
    'Regular updates and improvements',
    '24/7 customer support',
    'Easy integration with existing tools',
    'Scalable as your business grows',
    'No long-term contracts required'
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Affordable, easy-to-use tools for modern businesses." />
        <meta name="keywords" content="micro saas, saas tools, business software, productivity tools, automation software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of specialized micro SaaS tools designed to solve specific business problems with simple, affordable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Browse Products
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-400/50 group ${
                  product.popular ? 'border-cyan-400/30' : 'border-white/10'
                }`}>
                  {product.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cyan-400 font-semibold">{product.price}</span>
                      <span className="text-gray-400">{product.users}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-cyan-400 text-slate-900 font-semibold py-2 px-4 rounded-xl hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Micro SaaS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Browse All Products
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
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