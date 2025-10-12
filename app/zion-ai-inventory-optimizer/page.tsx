'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, Target, Brain, Zap, BarChart3, CheckCircle, ArrowRight, Star, Users, Award, Calendar, PieChart, LineChart } from 'lucide-react';

const ZionAiInventoryOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns with 94% accuracy using machine learning and historical data analysis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Smart Reorder Points',
      description: 'Automated reorder suggestions based on lead times, demand patterns, and supplier reliability',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Inventory Analytics',
      description: 'Comprehensive analytics dashboard showing stock levels, turnover rates, and optimization opportunities',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Minimize carrying costs while maintaining optimal stock levels to meet customer demand',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$179',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 500 SKUs',
        'Basic demand forecasting',
        'Email support',
        'Standard reporting',
        '1 user account',
        'Monthly optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$449',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 5,000 SKUs',
        'Advanced AI forecasting',
        'Real-time optimization',
        'Custom dashboards',
        'Up to 5 user accounts',
        'API access',
        'Priority support',
        'Supplier integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '30%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '94%', label: 'Forecast Accuracy', icon: Target },
    { number: '50%', label: 'Stockout Reduction', icon: Package },
    { number: '150+', label: 'Happy Customers', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Inventory Optimizer - Reduce Costs by 30% | Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory optimization platform. Reduce costs by 30% with smart demand forecasting, automated reorder points, and advanced analytics. Starting at $179/month." />
        <meta name="keywords" content="inventory optimization, demand forecasting, stock management, supply chain, inventory analytics, cost reduction" />
        <meta property="og:title" content="Zion AI Inventory Optimizer - Reduce Costs by 30%" />
        <meta property="og:description" content="AI-powered inventory optimization platform with 94% forecast accuracy. Reduce costs by 30% and minimize stockouts with smart inventory management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-inventory-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                  Zion AI Inventory Optimizer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Optimize your inventory with AI-powered demand forecasting. Reduce costs by 30% and eliminate stockouts with 94% accuracy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Inventory Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI to optimize your inventory levels and reduce costs while maintaining customer satisfaction
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Scalable Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your inventory size. All plans include our core AI optimization engine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-blue-400/60 ring-2 ring-blue-400/20' : 'border-slate-700/50'} hover:border-blue-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700' 
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-blue-500/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize Your Inventory Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 150+ companies already using Zion AI Inventory Optimizer to reduce costs by 30% and eliminate stockouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiInventoryOptimizerPage;