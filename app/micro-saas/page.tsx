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
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting.',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboard creation',
        'Automated report generation',
        'Multi-source data integration'
      ],
      price: '$199/month',
      users: '1,200+',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation.',
      features: [
        'No-code chatbot builder',
        'Multi-language support',
        'Integration with popular platforms',
        'Analytics and reporting',
        'Custom training capabilities'
      ],
      price: '$99/month',
      users: '2,500+',
      popular: true,
      category: 'Support'
    },
    {
      id: '3',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalization and advanced analytics.',
      features: [
        'AI content generation',
        'Behavioral targeting',
        'A/B testing automation',
        'Advanced analytics',
        'CRM integration'
      ],
      price: '$149/month',
      users: '1,800+',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '4',
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive security monitoring with AI threat detection and response.',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Compliance monitoring',
        'Security analytics',
        '24/7 monitoring'
      ],
      price: '$299/month',
      users: '950+',
      popular: false,
      category: 'Security'
    },
    {
      id: '5',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization.',
      features: [
        'Multi-cloud support',
        'Cost optimization',
        'Automated scaling',
        'Resource monitoring',
        'Security compliance'
      ],
      price: '$249/month',
      users: '1,100+',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '6',
      icon: '📈',
      title: 'CRM with AI Insights',
      description: 'Customer relationship management with AI-powered sales insights.',
      features: [
        'Lead scoring AI',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Integration ecosystem'
      ],
      price: '$179/month',
      users: '1,600+',
      popular: true,
      category: 'CRM'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Secure',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: Cloud,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock technical assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions. AI-powered tools for analytics, CRM, security, and more. Start your free trial today." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics, CRM, security, automation, cloud solutions" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, AI-driven micro SaaS tools designed to solve specific business challenges. 
            Choose from our comprehensive suite of solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Micro SaaS Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  product.popular
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {product.popular && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users} users</div>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                
                <Link
                  to={`/micro-saas/${product.id}`}
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-400/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;