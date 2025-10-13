'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Brain } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots without coding',
      shortDescription: 'No-code AI chatbot platform',
      icon: '🤖',
      price: '$29/month',
      originalPrice: '$99/month',
      features: ['Drag & drop builder', 'Multi-language support', 'Analytics dashboard', 'API integration'],
      benefits: ['24/7 customer support', 'Reduce support costs', 'Improve response time', 'Scale automatically'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'AI & Automation'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Transform data into actionable insights',
      shortDescription: 'Smart business intelligence',
      icon: '📊',
      price: '$49/month',
      originalPrice: '$199/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Optimize performance', 'Save time on reporting'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'ai-lead-generation',
      title: 'AI Lead Generation',
      description: 'Automatically find and qualify leads',
      shortDescription: 'Smart lead generation tool',
      icon: '🎯',
      price: '$39/month',
      originalPrice: '$149/month',
      features: ['Lead scoring', 'Email automation', 'CRM integration', 'Lead tracking'],
      benefits: ['Increase lead quality', 'Save time on prospecting', 'Boost conversion rates', 'Scale lead generation'],
      link: '/ai-lead-generation',
      popular: false,
      category: 'Sales & Marketing'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Create high-quality content at scale',
      shortDescription: 'Automated content creation',
      icon: '✍️',
      price: '$19/month',
      originalPrice: '$79/month',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization'],
      benefits: ['Save time on writing', 'Maintain consistency', 'Scale content production', 'Improve SEO'],
      link: '/ai-content-generator',
      popular: false,
      category: 'Content & Marketing'
    },
    {
      id: 'ai-email-assistant',
      title: 'AI Email Assistant',
      description: 'Smart email management and automation',
      shortDescription: 'Intelligent email tool',
      icon: '📧',
      price: '$24/month',
      originalPrice: '$89/month',
      features: ['Email scheduling', 'Smart replies', 'Priority sorting', 'Template library'],
      benefits: ['Increase productivity', 'Never miss important emails', 'Professional responses', 'Time management'],
      link: '/ai-email-assistant',
      popular: false,
      category: 'Productivity'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Analytics', 'Sales & Marketing', 'Content & Marketing', 'Productivity'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS services. AI-powered tools for businesses of all sizes." />
        <meta name="keywords" content="micro saas, saas tools, AI tools, business software, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our innovative micro SAAS solutions designed to solve specific business challenges 
              with powerful, easy-to-use tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 text-sm line-through ml-2">{service.originalPrice}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our range of micro SAAS services and start transforming your business today.
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
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;