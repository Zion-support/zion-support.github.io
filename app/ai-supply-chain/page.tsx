'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Brain, Zap, Shield, TrendingUp, Globe, CheckCircle, ArrowRight, Star, Clock, Phone, Mail, Truck } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns with 95% accuracy using advanced machine learning',
      benefits: ['95% forecast accuracy', 'Multi-factor analysis', 'Seasonal adjustments', 'Real-time updates']
    },
    {
      icon: BarChart,
      title: 'Inventory Optimization',
      description: 'Optimize inventory levels to reduce costs while maintaining service levels',
      benefits: ['Reduce carrying costs by 30%', 'Prevent stockouts', 'Minimize waste', 'ABC analysis']
    },
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'AI-powered logistics planning for efficient delivery and transportation',
      benefits: ['Reduce fuel costs by 25%', 'Faster deliveries', 'Dynamic routing', 'Multi-modal transport']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate supply chain risks before they impact operations',
      benefits: ['Risk scoring', 'Early warnings', 'Alternative suppliers', 'Contingency planning']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize raw material procurement and production scheduling',
      icon: TrendingUp,
      benefits: ['Reduce material costs by 20%', 'Improve production efficiency', 'Minimize waste', 'Better supplier relationships']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Manage inventory across multiple channels and locations',
      icon: Globe,
      benefits: ['Omnichannel inventory', 'Demand-driven replenishment', 'Reduced markdowns', 'Improved customer satisfaction']
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies are always available',
      icon: Shield,
      benefits: ['Prevent stockouts', 'Compliance tracking', 'Cold chain management', 'Emergency preparedness']
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable goods with optimal freshness and minimal waste',
      icon: Zap,
      benefits: ['Reduce food waste', 'Optimize freshness', 'Temperature monitoring', 'Shelf-life management']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$899/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Inventory optimization',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 locations',
        'Advanced AI forecasting',
        'Route optimization',
        'Risk management',
        'Priority support',
        'API integrations',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '30%', label: 'Cost Reduction', description: 'Average reduction in supply chain costs' },
    { value: '95%', label: 'Forecast Accuracy', description: 'AI-powered demand prediction accuracy' },
    { value: '50%', label: 'Inventory Reduction', description: 'Reduction in excess inventory' },
    { value: '25%', label: 'Delivery Speed', description: 'Faster order fulfillment' }
  ];

  const benefits = [
    'Reduce supply chain costs by up to 30%',
    'Improve forecast accuracy to 95%',
    'Optimize inventory levels and reduce carrying costs',
    'Minimize supply chain disruptions',
    'Enhance supplier relationships',
    'Improve customer satisfaction',
    'Reduce environmental impact',
    'Increase operational efficiency'
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group | Intelligent Supply Chain Management</title>
        <meta name="description" content="Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI supply chain, demand forecasting, inventory optimization, logistics AI, supply chain management, procurement optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. Reduce costs and improve efficiency with intelligent supply chain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Analysis
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View ROI Calculator
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Supply Chain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by advanced AI algorithms and real-time data analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results across multiple industries and supply chain types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Supply Chain
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Achieve measurable results with AI-powered supply chain optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <p className="text-gray-400">per month</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free supply chain analysis and discover how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Analysis
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainPage;