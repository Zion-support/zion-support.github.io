'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Brain, BarChart, Users, Code, Shield, Globe, Mail, Calendar, MessageCircle } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: MicroSaasProduct[] = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights',
      price: '$199/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom dashboards',
        'Automated reporting',
        'Multi-platform integration'
      ],
      popular: true,
      icon: BarChart,
      category: 'Analytics'
    },
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management',
      price: '$149/month',
      features: [
        'Lead scoring with AI',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Integration with 100+ tools'
      ],
      icon: Users,
      category: 'CRM'
    },
    {
      id: 'ai-content',
      name: 'AI Content Studio',
      description: 'Create engaging content with AI assistance',
      price: '$99/month',
      features: [
        'AI content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar management'
      ],
      icon: Code,
      category: 'Content'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots without coding',
      price: '$79/month',
      features: [
        'No-code chatbot builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Analytics and insights',
        'Custom integrations'
      ],
      icon: MessageCircle,
      category: 'Automation'
    },
    {
      id: 'ai-email',
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization',
      price: '$129/month',
      features: [
        'AI subject line optimization',
        'Send time optimization',
        'A/B testing automation',
        'Personalization engine',
        'Deliverability monitoring'
      ],
      icon: Mail,
      category: 'Marketing'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Intelligent appointment scheduling system',
      price: '$59/month',
      features: [
        'Smart scheduling algorithms',
        'Calendar integration',
        'Automated reminders',
        'Time zone handling',
        'Custom booking forms'
      ],
      icon: Calendar,
      category: 'Productivity'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'CRM', name: 'CRM' },
    { id: 'Content', name: 'Content' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Productivity', name: 'Productivity' }
  ];

  const benefits = [
    'No setup fees or hidden costs',
    'Cancel anytime, no long-term contracts',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products'
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS tools. From analytics to automation, boost your business productivity with our intelligent solutions." />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity tools, AI analytics, CRM, content creation" />
        <meta property="og:title" content="Micro SAAS - Zion Tech Group" />
        <meta property="og:description" content="Discover our collection of 50+ AI-powered micro SAAS tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our collection of 50+ AI-powered micro SAAS tools designed to boost your business productivity and efficiency.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SAAS Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our AI-Powered Tools</h2>
              <p className="text-gray-300 mb-8">Choose from our comprehensive suite of micro SAAS solutions</p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900 font-semibold'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 text-sm rounded-full font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300">
                    Start Free Trial
                  </button>
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

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
