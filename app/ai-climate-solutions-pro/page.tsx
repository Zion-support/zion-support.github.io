'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Brain, Zap, Target, CheckCircle, ArrowRight, Users, BarChart, Clock, Leaf } from 'lucide-react';

const AiClimateSolutionsProPage: React.FC = () => {
  const features = [
    'Climate Data Analysis & Prediction',
    'Carbon Footprint Optimization',
    'Renewable Energy Forecasting',
    'Environmental Impact Assessment',
    'Smart Grid Management',
    'Weather Pattern Analysis',
    'Emission Reduction Strategies',
    'Sustainability Reporting',
    'Green Technology Integration',
    'Climate Risk Assessment'
  ];

  const benefits = [
    'Reduce carbon emissions by 40%',
    'Optimize energy consumption by 35%',
    'Improve renewable energy efficiency',
    'Lower operational costs by 25%',
    'Enhanced sustainability compliance',
    'Better climate risk management'
  ];

  const pricingTiers = [
    {
      name: 'Climate Starter',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic carbon tracking',
        'Energy consumption analysis',
        'Sustainability reporting',
        'Email support',
        'Standard dashboards'
      ]
    },
    {
      name: 'Climate Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for mid-size organizations',
      features: [
        'Advanced climate modeling',
        'Renewable energy optimization',
        'Custom sustainability metrics',
        'Priority support',
        'API integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Climate Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large corporations and governments',
      features: [
        'Full climate intelligence suite',
        'Custom AI models',
        'Global climate monitoring',
        '24/7 dedicated support',
        'White-label solutions',
        'Regulatory compliance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group | Environmental AI Platform</title>
        <meta name="description" content="Advanced AI-powered climate solutions for environmental sustainability. Reduce carbon emissions by 40%, optimize renewable energy, and achieve climate goals with cutting-edge AI technology." />
        <meta name="keywords" content="AI climate solutions, environmental AI, carbon reduction, renewable energy, sustainability, climate tech, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Environmental AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Climate Solutions Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Combat climate change with our advanced AI-powered environmental solutions. 
              Optimize energy consumption, reduce carbon emissions, and accelerate your path to net-zero with intelligent climate technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Transform Your Climate Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Comprehensive Climate Intelligence
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Climate Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking organizations using AI to achieve their climate goals. 
              Start your sustainability transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiClimateSolutionsProPage;