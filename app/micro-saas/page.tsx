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
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'analytics-dashboard',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics and insights for your business data',
      features: [
        'Real-time data visualization',
        'Custom reports and metrics',
        'Data export capabilities',
        'Team collaboration tools',
        'Mobile responsive design'
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
      description: 'Streamline your booking process with automated scheduling',
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
      description: 'Analyze customer conversations and improve support quality',
      features: [
        'Sentiment analysis',
        'Response time tracking',
        'Customer satisfaction scores',
        'Team performance metrics',
        'Integration with popular chat platforms'
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
      description: 'Generate high-quality content using artificial intelligence',
      features: [
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Content templates',
        'Bulk content generation'
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
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Batch processing',
        'API integration'
      ],
      price: '$79/month',
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
        'Email automation',
        'A/B testing',
        'Subscriber management',
        'Analytics and reporting'
      ],
      price: '$35/month',
      users: 'Up to 1,000 subscribers',
      popular: false,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Communication', 'Content', 'Automation', 'Marketing'];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with cloud infrastructure'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Comprehensive analytics and reporting for all tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Business Tools</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS solutions designed to solve specific business problems efficiently." />
        <meta name="keywords" content="micro SaaS, business tools, specialized software, productivity tools, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of specialized micro SaaS tools designed to solve specific 
            business problems efficiently and cost-effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions that focus on solving specific business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized business tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 ${
                  product.popular ? 'border-purple-400/50 ring-2 ring-purple-400/20' : 'border-slate-700'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{product.users}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                    Try Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border border-slate-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Micro SaaS Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can create a specialized tool tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Discuss Your Needs
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;