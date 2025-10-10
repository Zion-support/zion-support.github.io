'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Users, BarChart, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and scheduling',
      price: '$29/month',
      features: ['AI content generation', 'Auto scheduling', 'Analytics dashboard', 'Multi-platform support'],
      href: '/ai-social-media-manager'
    },
    {
      name: 'AI Email Marketing Automation',
      description: 'Transform your email marketing with intelligent automation and personalization',
      price: '$49/month',
      features: ['AI content creation', 'Smart segmentation', 'Automated workflows', 'Advanced analytics'],
      href: '/ai-email-marketing-automation'
    },
    {
      name: 'AI Customer Support Chatbot',
      description: 'Provide 24/7 customer support with intelligent AI chatbots',
      price: '$99/month',
      features: ['Natural language processing', 'Multi-channel support', 'Human handoff', 'Analytics'],
      href: '/ai-customer-support-chatbot'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Get real-time business insights with AI-powered analytics',
      price: '$199/month',
      features: ['Real-time analytics', 'Custom dashboards', 'AI insights', 'Automated reporting'],
      href: '/ai-analytics-dashboard'
    },
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights',
      price: '$149/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Integration'],
      href: '/ai-crm'
    },
    {
      name: 'AI Content Studio',
      description: 'Create engaging content with AI-powered writing and design tools',
      price: '$79/month',
      features: ['AI writing assistant', 'Content templates', 'Brand voice training', 'Multi-format support'],
      href: '/ai-content-studio'
    }
  ];

  const benefits = [
    'Affordable monthly pricing',
    'No long-term contracts',
    'Easy setup and integration',
    '24/7 customer support',
    'Regular feature updates',
    'Scalable solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group | AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions. Affordable, easy-to-use tools for businesses of all sizes." />
        <meta name="keywords" content="micro saas, AI tools, business software, automation, affordable solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Micro SAAS
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover our collection of AI-powered micro SAAS solutions. Affordable, easy-to-use tools designed to help businesses of all sizes grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#products"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Custom Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Micro SAAS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of AI-powered tools designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={product.href}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS products are designed with small to medium businesses in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't see what you're looking for? We can create a custom micro SAAS solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Request Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;