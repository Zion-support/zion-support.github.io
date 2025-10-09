'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Package, BarChart, Target, TrendingUp } from 'lucide-react';

const AIInventoryManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns and market trends.'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Smart Reorder Points',
      description: 'Automatically trigger reorders when stock levels reach optimal points, preventing stockouts and overstocking.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Reduce inventory costs by 30% through AI-powered optimization of ordering quantities and timing.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights into inventory performance, turnover rates, and profitability with AI-powered dashboards.'
    }
  ];

  const capabilities = [
    'AI-powered demand forecasting',
    'Automated reorder management',
    'Multi-location inventory tracking',
    'Supplier performance analysis',
    'Dead stock identification',
    'Seasonal trend analysis',
    'Integration with 50+ systems',
    'Real-time inventory alerts',
    'Advanced reporting suite',
    'Mobile inventory management'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Single location',
        'Basic reporting',
        'Email support',
        '10GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-location support',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Global inventory tracking',
        'Custom integrations',
        'Dedicated manager',
        'Unlimited storage',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '30%',
      description: 'Reduction in inventory costs'
    },
    {
      metric: '95%',
      description: 'Forecasting accuracy rate'
    },
    {
      metric: '50%',
      description: 'Reduction in stockouts'
    },
    {
      metric: '25%',
      description: 'Improvement in cash flow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              AI Inventory Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Inventory Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your inventory with AI-powered forecasting and automation. Reduce costs by 30%, 
              eliminate stockouts, and improve cash flow with intelligent inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI inventory management platform uses machine learning to optimize every aspect of your inventory operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Inventory Management Suite
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to optimize your inventory operations with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(0, 5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your inventory size and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-orange-500 shadow-2xl shadow-orange-500/20' 
                  : 'border-white/10 hover:border-orange-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                      : 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses already using our AI inventory management to reduce costs and improve efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-orange-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIInventoryManagementPage;