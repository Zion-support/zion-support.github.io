'use client';
import React, { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        '100+ data sources',
        'Mobile app included'
      ],
      price: '$199/month',
      users: '1,000+',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Email integration',
        'Sales pipeline automation',
        'Team collaboration tools'
      ],
      price: '$149/month',
      users: '2,500+',
      popular: true,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with AI threat detection',
      features: [
        '24/7 threat monitoring',
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'Security training modules'
      ],
      price: '$299/month',
      users: '800+',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'AI-powered cloud infrastructure management and optimization',
      features: [
        'Multi-cloud support',
        'Cost optimization',
        'Performance monitoring',
        'Automated scaling',
        'Security compliance',
        'Backup management'
      ],
      price: '$249/month',
      users: '1,200+',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-driven email marketing with personalization and automation',
      features: [
        'AI content generation',
        'Behavioral targeting',
        'A/B testing',
        'Email templates',
        'Analytics dashboard',
        'List management'
      ],
      price: '$99/month',
      users: '3,000+',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots and automation',
      features: [
        'AI chatbot builder',
        'Multi-channel support',
        'Knowledge base',
        'Ticket management',
        'Performance analytics',
        'Integration APIs'
      ],
      price: '$179/month',
      users: '1,800+',
      popular: false,
      category: 'Support'
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
      value: 'Enterprise',
      label: 'Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock expert assistance'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From analytics to CRM, security to marketing - we have the tools you need." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, analytics, CRM, security, marketing automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-driven tools designed to solve specific business challenges. Choose from our comprehensive suite of micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#products"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Explore Solutions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Get Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/10'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {product.users} users
                      </span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{product.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                      Start Free Trial
                    </button>
                    <Link
                      to={`/micro-saas/${product.id}`}
                      className="flex items-center justify-center w-12 h-12 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
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