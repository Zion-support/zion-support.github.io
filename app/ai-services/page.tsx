'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Calendar, CheckSquare, FileText, Mail, Phone, MapPin } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI Analytics',
      description: 'Advanced data insights powered by artificial intelligence',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Custom dashboards',
        'Machine learning models',
        'Automated reporting',
        'Data visualization'
      ],
      price: 'Starting at $1,500/month',
      popular: true
    },
    {
      id: 2,
      title: 'AI Automation',
      description: 'Streamline workflows with intelligent automation',
      category: 'Automation',
      icon: Zap,
      features: [
        'Process automation',
        'Workflow optimization',
        'Task scheduling',
        'Error reduction',
        'Cost savings',
        'Scalable solutions'
      ],
      price: 'Starting at $999/month',
      popular: false
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Intelligent customer service and support solutions',
      category: 'Customer Service',
      icon: MessageCircle,
      features: [
        'Natural language processing',
        '24/7 customer support',
        'Multi-language support',
        'Integration capabilities',
        'Analytics and insights',
        'Custom training'
      ],
      price: 'Starting at $799/month',
      popular: true
    },
    {
      id: 4,
      title: 'AI CRM',
      description: 'Customer relationship management enhanced with AI',
      category: 'CRM',
      icon: Users,
      features: [
        'Lead scoring',
        'Customer segmentation',
        'Predictive analytics',
        'Automated follow-ups',
        'Sales forecasting',
        'Personalization'
      ],
      price: 'Starting at $1,299/month',
      popular: false
    },
    {
      id: 5,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security solutions',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Risk assessment',
        'Compliance monitoring',
        'Incident analysis'
      ],
      price: 'Starting at $1,799/month',
      popular: false
    },
    {
      id: 6,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business insights',
      category: 'Analytics',
      icon: Database,
      features: [
        'Data mining',
        'Pattern recognition',
        'Trend analysis',
        'Business intelligence',
        'Data visualization',
        'Custom algorithms'
      ],
      price: 'Starting at $1,199/month',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Customer Service', name: 'Customer Service' },
    { id: 'CRM', name: 'CRM' },
    { id: 'Security', name: 'Security' }
  ];

  const benefits = [
    'Cutting-edge AI technology',
    'Customized solutions for your business',
    'Expert AI engineers and data scientists',
    'Scalable and flexible implementations',
    '24/7 support and maintenance',
    'Proven ROI and business impact'
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, chatbots, CRM, cybersecurity, and data analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, chatbot, CRM" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive unprecedented growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement cutting-edge artificial intelligence 
              solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;
