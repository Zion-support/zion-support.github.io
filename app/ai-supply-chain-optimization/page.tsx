'use client';
import React from 'react';
import { Truck, Package, TrendingUp, Globe, CheckCircle, ArrowRight, Star, Users, Clock, Shield, BarChart, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISupplyChainOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Route Optimization',
      description: 'AI-powered route planning that reduces transportation costs and delivery times by up to 30%.',
      benefits: ['30% cost reduction', 'Real-time routing', 'Multi-modal optimization']
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Inventory Management',
      description: 'Intelligent inventory forecasting and management to prevent stockouts and reduce carrying costs.',
      benefits: ['95% accuracy forecasting', 'Automated reordering', 'Demand prediction']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Demand Forecasting',
      description: 'Advanced ML models that predict demand patterns and optimize supply chain planning.',
      benefits: ['Predictive analytics', 'Seasonal adjustments', 'Market trend analysis']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Visibility',
      description: 'End-to-end supply chain visibility with real-time tracking and monitoring capabilities.',
      benefits: ['Real-time tracking', 'Risk assessment', 'Performance metrics']
    }
  ];

  const solutions = [
    {
      title: 'Retail & E-commerce',
      description: 'Optimize inventory, fulfillment, and last-mile delivery for maximum efficiency and customer satisfaction.',
      icon: <Package className="w-8 h-8 text-blue-500" />,
      metrics: '25% inventory reduction, 40% faster delivery'
    },
    {
      title: 'Manufacturing',
      description: 'Streamline raw material procurement, production planning, and distribution networks.',
      icon: <Truck className="w-8 h-8 text-green-500" />,
      metrics: '20% cost savings, 35% efficiency gain'
    },
    {
      title: 'Healthcare & Pharma',
      description: 'Ensure critical supplies reach patients on time with temperature-controlled logistics.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      metrics: '99.9% delivery accuracy, 50% waste reduction'
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable goods with AI-powered freshness prediction and cold chain optimization.',
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      metrics: '60% waste reduction, 30% shelf life extension'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'For small to medium businesses',
      features: [
        'Up to 5 supply chain nodes',
        'Basic optimization algorithms',
        'Standard reporting',
        'Email support',
        'Monthly analytics',
        'Basic forecasting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'For growing businesses with complex needs',
      features: [
        'Up to 25 supply chain nodes',
        'Advanced AI optimization',
        'Real-time monitoring',
        'Priority support',
        'Custom dashboards',
        'Advanced forecasting',
        'API integration',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with global operations',
      features: [
        'Unlimited supply chain nodes',
        'Custom AI model development',
        '24/7 monitoring & support',
        'Dedicated account manager',
        'White-label solutions',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce supply chain costs by 20-30% through optimized planning and resource allocation.',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      value: '25%'
    },
    {
      title: 'Faster Delivery',
      description: 'Improve delivery times by 30-40% with optimized routing and inventory placement.',
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      value: '35%'
    },
    {
      title: 'Inventory Optimization',
      description: 'Reduce inventory levels by 20-25% while maintaining service levels through better forecasting.',
      icon: <Package className="w-6 h-6 text-purple-400" />,
      value: '22%'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate supply chain risks before they impact your business operations.',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      value: '90%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform Your Supply Chain with Intelligent AI Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Optimize your entire supply chain with AI-powered solutions that reduce costs, 
              improve efficiency, and enhance visibility. From demand forecasting to route optimization, 
              our advanced algorithms deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Truck className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Analysis
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Proven Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Industry Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                  {solution.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
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
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry leaders using AI to transform their supply chain operations, 
              reduce costs, and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Truck className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISupplyChainOptimizationPage;