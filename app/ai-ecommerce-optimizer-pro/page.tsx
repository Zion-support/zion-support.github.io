'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3, TrendingUp, Target } from 'lucide-react';

const AIEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior and optimize your e-commerce performance.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Real-time Insights',
      description: 'Get instant insights into sales trends, customer preferences, and conversion optimization opportunities.'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Conversion Optimization',
      description: 'Automatically optimize product pages, checkout flows, and marketing campaigns for maximum conversions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Revenue Growth',
      description: 'Increase your revenue by up to 40% with our proven AI-driven optimization strategies.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small e-commerce stores',
      features: [
        'Up to 1,000 products',
        'Basic AI analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 products',
        'Advanced AI optimization',
        'Priority support',
        'Custom integrations',
        'A/B testing tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large e-commerce platforms',
      features: [
        'Unlimited products',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered e-commerce optimization platform that increases conversions and revenue by up to 40%." />
        <meta name="keywords" content="AI e-commerce, conversion optimization, analytics, revenue growth, Zion Tech Group" />
        <meta property="og:title" content="AI E-commerce Optimizer Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered e-commerce optimization platform that increases conversions and revenue by up to 40%." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              AI E-commerce <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Optimizer Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your e-commerce business with our advanced AI platform that optimizes conversions, 
              increases revenue, and provides actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides comprehensive e-commerce optimization tools to maximize your business potential.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Simple Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your e-commerce business. All plans include our core AI optimization features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/50 scale-105' 
                  : 'border-gray-700/50 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your E-commerce?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI platform to maximize their e-commerce potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEcommerceOptimizerProPage;