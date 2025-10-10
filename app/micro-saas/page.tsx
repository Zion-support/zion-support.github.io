'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Zap, Brain, Code, Users, BarChart, Shield, Globe, Phone, Mail } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Analytics Dashboard',
      price: '$199',
      period: '/month',
      description: 'Real-time business intelligence with AI-powered insights and custom dashboards',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboard creation',
        'Automated reporting',
        '100+ data source integrations',
        'Mobile app included'
      ],
      popular: true,
      icon: <BarChart className="w-8 h-8 text-blue-400" />
    },
    {
      name: 'AI-Powered CRM',
      price: '$149',
      period: '/month',
      description: 'Intelligent customer relationship management with AI insights and automation',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Email integration',
        'Sales pipeline automation',
        'Custom workflows'
      ],
      popular: false,
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      name: 'AI Content Studio',
      price: '$299',
      period: '/month',
      description: 'Complete content creation suite with AI writing, image generation, and social media automation',
      features: [
        'AI content generation',
        'Image and video creation',
        'Social media automation',
        'SEO optimization',
        'Brand voice training',
        'Multi-language support'
      ],
      popular: false,
      icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
      name: 'AI Chatbot Builder',
      price: '$99',
      period: '/month',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation',
      features: [
        'No-code chatbot builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Integration with 50+ platforms',
        'Analytics and insights',
        'Custom training data'
      ],
      popular: false,
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      name: 'AI Email Marketing',
      price: '$179',
      period: '/month',
      description: 'Automated email campaigns with AI optimization and personalization',
      features: [
        'AI subject line optimization',
        'Send time optimization',
        'A/B testing automation',
        'Personalization engine',
        'Advanced analytics',
        'Unlimited emails'
      ],
      popular: false,
      icon: <Mail className="w-8 h-8 text-pink-400" />
    },
    {
      name: 'AI Voice Assistant',
      price: '$199',
      period: '/month',
      description: 'Revolutionary AI voice assistant with natural language processing and multi-language support',
      features: [
        'Natural language processing',
        '50+ language support',
        'Context awareness',
        'Real-time processing',
        'Enterprise security',
        'Custom voice training'
      ],
      popular: false,
      icon: <Phone className="w-8 h-8 text-orange-400" />
    },
    {
      name: 'AI Predictive Maintenance',
      price: '$299',
      period: '/month',
      description: 'AI-powered predictive maintenance solution to reduce downtime and optimize costs',
      features: [
        'Machine learning algorithms',
        'Real-time monitoring',
        'Performance analytics',
        'Preventive actions',
        'IoT integration',
        'Customizable alerts'
      ],
      popular: false,
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      name: 'AI Recruitment Assistant',
      price: '$199',
      period: '/month',
      description: 'AI-powered recruitment platform to streamline hiring and find the best talent',
      features: [
        'AI candidate screening',
        'Intelligent job matching',
        'Resume analysis',
        'Sourcing automation',
        'Analytics dashboard',
        'Interview scheduling'
      ],
      popular: false,
      icon: <Users className="w-8 h-8 text-indigo-400" />
    }
  ];

  const benefits = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface',
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'No Coding Required',
      description: 'Build powerful solutions without technical expertise',
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs',
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS solutions. From analytics dashboards to voice assistants, transform your business with affordable, powerful tools." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, AI dashboard, CRM, chatbot builder, email marketing, voice assistant" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our collection of 50+ AI-powered micro SAAS solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of 50+ AI-powered micro SAAS solutions. 
            Affordable, powerful tools designed to transform your business operations.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {microSaasProducts.map((product, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:border-blue-400/50 ${
                product.popular ? 'border-blue-400/50 scale-105' : 'border-white/20'
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-gray-400 ml-1">{product.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  product.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Choose from our collection of 50+ AI-powered micro SAAS solutions. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;