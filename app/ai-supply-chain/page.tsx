'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Brain, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Truck, Shield, Globe } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const features = [
    'Demand Forecasting AI',
    'Inventory Optimization',
    'Supplier Risk Assessment',
    'Route Optimization',
    'Cost Reduction Analytics',
    'Supply Chain Visibility',
    'Predictive Maintenance',
    'Quality Control AI',
    'Sustainability Tracking',
    'Real-time Monitoring'
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce supply chain costs by 25%',
      icon: TrendingUp,
      value: '25%'
    },
    {
      title: 'Efficiency',
      description: 'Improve operational efficiency by 40%',
      icon: Clock,
      value: '40%'
    },
    {
      title: 'Accuracy',
      description: '95% accuracy in demand forecasting',
      icon: BarChart,
      value: '95%'
    },
    {
      title: 'Visibility',
      description: 'Real-time supply chain visibility',
      icon: Globe,
      value: '100%'
    }
  ];

  const industries = [
    'Manufacturing',
    'Retail & E-commerce',
    'Healthcare',
    'Food & Beverage',
    'Automotive',
    'Pharmaceuticals',
    'Logistics',
    'Aerospace'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'For small businesses',
      features: [
        'Up to 10 suppliers',
        'Basic forecasting',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$899',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Up to 50 suppliers',
        'Advanced forecasting',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited suppliers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group</title>
        <meta name="description" content="AI-powered supply chain optimization with demand forecasting, inventory management, and cost reduction. Reduce costs by 25%. Starting at $399/month." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, inventory management, logistics AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-8">
                <BarChart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize your supply chain with AI-powered demand forecasting, inventory management, 
                and cost reduction. Transform your logistics operations for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Optimize Your Supply Chain
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI supply chain platform delivers measurable improvements in efficiency and cost savings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="bg-cyan-500/20 p-4 rounded-lg w-fit mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Supply Chain AI
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI tools for every aspect of supply chain management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform serves various industries with specialized supply chain solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your supply chain complexity and business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-cyan-500' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of supply chain management.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:+13024640950" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    (302) 464-0950
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainPage;