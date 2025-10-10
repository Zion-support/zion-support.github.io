'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Zap, BarChart3, Calendar, Shield, Clock, Target, TrendingUp, Brain, Settings, Globe, Smartphone, Package, Truck, AlertTriangle, DollarSign } from 'lucide-react';

const AIInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['Accurate demand prediction', 'Seasonal trend analysis', 'Market intelligence', 'Automated reorder points']
    },
    {
      icon: Package,
      title: 'Smart Inventory Tracking',
      description: 'Real-time inventory tracking with barcode scanning, RFID integration, and automated stock level monitoring.',
      benefits: ['Real-time tracking', 'Barcode scanning', 'RFID integration', 'Automated alerts']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive inventory analytics with insights on turnover rates, carrying costs, and optimization opportunities.',
      benefits: ['Turnover analysis', 'Cost optimization', 'Performance metrics', 'Predictive insights']
    },
    {
      icon: Zap,
      title: 'Automated Reordering',
      description: 'Intelligent automated reordering system that maintains optimal stock levels and prevents stockouts.',
      benefits: ['Auto reordering', 'Stockout prevention', 'Supplier integration', 'Cost optimization']
    }
  ];

  const industries = [
    { name: 'Retail', icon: '🛍️', description: 'Multi-location retail chains' },
    { name: 'E-commerce', icon: '🛒', description: 'Online marketplaces' },
    { name: 'Manufacturing', icon: '🏭', description: 'Production facilities' },
    { name: 'Healthcare', icon: '🏥', description: 'Medical supplies' },
    { name: 'Food & Beverage', icon: '🍕', description: 'Restaurants & grocery' },
    { name: 'Automotive', icon: '🚗', description: 'Parts & accessories' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        '1 warehouse location'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with multiple locations',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Advanced analytics',
        'Priority support',
        'Multi-location support',
        'API access',
        'Custom integrations',
        '5 warehouse locations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex inventory needs',
      features: [
        'Unlimited SKUs',
        'Full AI capabilities',
        'Custom development',
        '24/7 dedicated support',
        'Advanced security',
        'White-label options',
        'Custom integrations',
        'Unlimited locations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Inc.',
      content: 'AI Inventory Manager reduced our stockouts by 80% and improved our inventory turnover by 35%. Incredible results!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Supply Chain Director',
      company: 'TechSupply Co.',
      content: 'The AI forecasting and automated reordering features have transformed our inventory management. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      company: 'Fashion Forward',
      content: 'The analytics and insights help us make better inventory decisions and reduce carrying costs by 25%.',
      rating: 5
    }
  ];

  const stats = [
    { value: '80%', label: 'Stockout Reduction', description: 'Prevent lost sales with better forecasting' },
    { value: '35%', label: 'Turnover Improvement', description: 'Optimize inventory rotation' },
    { value: '25%', label: 'Cost Reduction', description: 'Lower carrying costs' },
    { value: '99.9%', label: 'Accuracy Rate', description: 'Reliable inventory tracking' }
  ];

  const integrations = [
    { name: 'Shopify', icon: '🛍️', description: 'E-commerce platform' },
    { name: 'WooCommerce', icon: '🛒', description: 'WordPress e-commerce' },
    { name: 'Amazon', icon: '📦', description: 'Marketplace integration' },
    { name: 'QuickBooks', icon: '💰', description: 'Accounting software' },
    { name: 'SAP', icon: '🏢', description: 'ERP system' },
    { name: 'Oracle', icon: '🔮', description: 'Enterprise software' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'Microsoft Dynamics', icon: '🪟', description: 'Business applications' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Inventory Manager - Zion Tech Group | Intelligent Inventory Management & Demand Forecasting</title>
        <meta name="description" content="Revolutionary AI-powered inventory management platform with demand forecasting, automated reordering, and real-time tracking. Reduce stockouts by 80% and improve turnover by 35%." />
        <meta name="keywords" content="AI inventory management, demand forecasting, automated reordering, inventory tracking, stock optimization, supply chain management" />
        <meta property="og:title" content="AI Inventory Manager - Zion Tech Group" />
        <meta property="og:description" content="Intelligent inventory management with AI-powered forecasting and automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-inventory-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Inventory Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your inventory management with AI-powered demand forecasting, automated reordering, 
              and real-time tracking. Reduce stockouts by 80% and improve turnover by 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300">
                Our AI inventory management solution works across all industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered inventory management platform combines cutting-edge technology with 
                intuitive design to optimize your supply chain operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing business systems and platforms for a unified inventory management experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors duration-300">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your inventory management needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20 scale-105' 
                    : 'border-white/20 hover:border-green-500/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have optimized their inventory with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-12 border border-green-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven inventory management. 
                No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIInventoryManagerPage;