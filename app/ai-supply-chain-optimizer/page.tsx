'use client';
import React from 'react';
import { Package, TrendingUp, MapPin, BarChart, Shield, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Star, Truck, Globe, Zap } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Demand Forecasting',
      description: 'AI-powered demand forecasting using machine learning and historical data analysis',
      benefits: ['95% accuracy rate', 'Real-time predictions', 'Seasonal adjustments']
    },
    {
      icon: Package,
      title: 'Inventory Optimization',
      description: 'Smart inventory management with automated reorder points and stock level optimization',
      benefits: ['30% inventory reduction', 'Zero stockouts', 'Cost optimization']
    },
    {
      icon: Truck,
      title: 'Route Planning',
      description: 'Advanced route optimization for logistics and transportation efficiency',
      benefits: ['35% fuel savings', '50% faster delivery', 'Real-time tracking']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies for supply chain disruptions',
      benefits: ['Risk identification', 'Mitigation strategies', 'Continuity planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Inventory optimization',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with complex supply chains',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Route optimization',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large enterprises with global supply chains',
      features: [
        'Unlimited SKUs',
        'AI-powered risk assessment',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label options',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '30% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs'
    },
    {
      icon: Clock,
      title: '50% Faster Delivery',
      description: 'Streamlined logistics and route optimization'
    },
    {
      icon: Shield,
      title: '99% Stock Accuracy',
      description: 'Prevent stockouts and overstock situations'
    },
    {
      icon: Globe,
      title: 'Global Visibility',
      description: 'End-to-end supply chain visibility and tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            Micro SAAS Solution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Supply Chain Optimizer
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionize your supply chain with AI-powered demand forecasting, inventory optimization, and logistics management. 
            Reduce costs by 30% and improve delivery times by 50%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
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
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join industry leaders who trust our AI-powered supply chain solutions for better efficiency and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISupplyChainOptimizerPage;