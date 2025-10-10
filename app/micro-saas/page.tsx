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
      title: 'Business Intelligence Pro',
      description: 'Advanced analytics and reporting platform with AI-powered insights',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation',
        'Mobile app access',
        'White-label options'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot and live agents',
      features: [
        'Advanced AI chatbot with NLP',
        'Live chat with agent handoff',
        'Ticket management system',
        'Knowledge base integration',
        'Multi-language support (50+ languages)',
        'Sentiment analysis',
        'Performance analytics',
        'CRM integration'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Enterprise Security Suite',
      description: 'Comprehensive cybersecurity monitoring and threat response platform',
      features: [
        'Real-time threat detection',
        'AI-powered vulnerability scanning',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Automated incident response',
        'Security dashboard and alerts',
        'Penetration testing tools',
        'Employee security training',
        '24/7 security monitoring'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Complete cloud management and optimization platform',
      features: [
        'Multi-cloud support (AWS, Azure, GCP)',
        'Automated cost optimization',
        'Resource monitoring and scaling',
        'Disaster recovery automation',
        'Security compliance monitoring',
        'Performance optimization',
        'Cost analytics and forecasting',
        'Infrastructure as Code tools'
      ],
      price: '$249/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Cloud'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Application Performance Monitor',
      description: 'Advanced APM solution with AI-powered insights and optimization',
      features: [
        'Real-time performance monitoring',
        'AI-powered error detection',
        'Uptime monitoring (99.9% SLA)',
        'Performance optimization recommendations',
        'Custom alerting and notifications',
        'Distributed tracing',
        'Database performance monitoring',
        'Mobile app performance tracking'
      ],
      price: '$179/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with machine learning capabilities',
      features: [
        'Visual workflow builder',
        'AI-powered task automation',
        'Document processing automation',
        'Email and communication automation',
        'Integration with 500+ apps',
        'Custom AI model training',
        'Process optimization insights',
        'Compliance and audit trails'
      ],
      price: '$229/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-driven personalization',
      features: [
        'AI-powered email personalization',
        'Advanced segmentation and targeting',
        'A/B testing and optimization',
        'Behavioral trigger campaigns',
        'Email template builder',
        'Deliverability optimization',
        'Analytics and reporting',
        'CRM integration'
      ],
      price: '$99/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Financial Analytics Platform',
      description: 'Comprehensive financial management and forecasting solution',
      features: [
        'Real-time financial dashboards',
        'AI-powered financial forecasting',
        'Expense tracking and categorization',
        'Invoice generation and management',
        'Tax preparation assistance',
        'Investment portfolio tracking',
        'Compliance reporting',
        'Multi-currency support'
      ],
      price: '$159/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '👥',
      title: 'HR Management Suite',
      description: 'Complete human resources management with AI-powered insights',
      features: [
        'Employee onboarding automation',
        'Performance management system',
        'AI-powered candidate screening',
        'Time tracking and attendance',
        'Payroll integration',
        'Employee engagement analytics',
        'Learning management system',
        'Compliance tracking'
      ],
      price: '$189/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'HR'
    },
    {
      id: '10',
      icon: '📱',
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance',
      features: [
        'Drag-and-drop app builder',
        'AI-powered design suggestions',
        'Cross-platform deployment',
        'Real-time collaboration',
        'App store publishing assistance',
        'Analytics and crash reporting',
        'Push notification management',
        'Backend integration tools'
      ],
      price: '$279/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Development'
    },
    {
      id: '11',
      icon: '🛒',
      title: 'E-commerce Optimization',
      description: 'AI-powered e-commerce platform optimization and management',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management automation',
        'Customer behavior analytics',
        'Conversion rate optimization',
        'Multi-channel selling',
        'Payment processing integration',
        'Shipping and logistics management'
      ],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'E-commerce'
    },
    {
      id: '12',
      icon: '🎯',
      title: 'Lead Generation Engine',
      description: 'AI-powered lead generation and qualification platform',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Lead quality analysis',
        'Email sequence automation',
        'Social media lead generation',
        'Performance analytics'
      ],
      price: '$149/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Sales'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Cloud', 'Monitoring', 'AI', 'Marketing', 'Finance', 'HR', 'Development', 'E-commerce', 'Sales'];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group ${product.popular ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25' : ''}`}>
                {product.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <Users className="w-4 h-4 inline mr-1" />
                      {product.users}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Why Choose Our Micro SaaS?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;