'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Brain, Target, CheckCircle, ArrowRight, Users, BarChart, Clock, Globe, Settings } from 'lucide-react';

const AiEnergyGridManagementProPage: React.FC = () => {
  const features = [
    'Smart Grid Optimization',
    'Real-time Energy Monitoring',
    'Demand Response Management',
    'Renewable Energy Integration',
    'Load Balancing & Distribution',
    'Predictive Maintenance',
    'Energy Storage Optimization',
    'Grid Stability Analysis',
    'Peak Demand Management',
    'Carbon Footprint Tracking'
  ];

  const benefits = [
    'Reduce energy costs by 30%',
    'Improve grid efficiency by 45%',
    'Increase renewable energy usage',
    'Minimize power outages by 60%',
    'Optimize energy storage',
    'Lower carbon emissions'
  ];

  const pricingTiers = [
    {
      name: 'Grid Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for small utilities',
      features: [
        'Basic grid monitoring',
        'Energy consumption tracking',
        'Simple load balancing',
        'Email support',
        'Standard reporting'
      ]
    },
    {
      name: 'Grid Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for mid-size utilities',
      features: [
        'Advanced grid analytics',
        'AI-powered optimization',
        'Renewable integration',
        'Priority support',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Grid Enterprise',
      price: '$14,999',
      period: '/month',
      description: 'For large utility companies',
      features: [
        'Full smart grid suite',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support',
        'White-label options',
        'Regulatory compliance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Energy Grid Management Pro - Zion Tech Group | Smart Grid Solutions</title>
        <meta name="description" content="Revolutionary AI-powered smart grid management platform. Optimize energy distribution, integrate renewables, and reduce costs by 30% with intelligent grid technology." />
        <meta name="keywords" content="AI energy grid, smart grid, energy management, renewable energy, grid optimization, utility AI, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,179,8,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Smart Grid AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Energy Grid Management Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your energy infrastructure with our advanced AI-powered smart grid management platform. 
              Optimize energy distribution, integrate renewable sources, and reduce operational costs with intelligent grid technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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
              Revolutionize Energy Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-yellow-400" />
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
              Advanced Grid Intelligence
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
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
              Choose Your Grid Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-yellow-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600 text-white' 
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
              Ready to Modernize Your Grid?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading utilities using AI to transform their energy infrastructure. 
              Start your smart grid transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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

export default AiEnergyGridManagementProPage;