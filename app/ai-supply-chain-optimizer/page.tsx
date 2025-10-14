import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Email support',
        'Standard analytics',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 warehouses',
        'Advanced AI forecasting',
        '24/7 phone support',
        'Real-time analytics',
        'Weekly reports',
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
        'Unlimited warehouses',
        'AI-powered optimization',
        'Dedicated support',
        'Custom analytics',
        'Daily reports',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Forecasting',
      description: 'Advanced machine learning algorithms predict demand with 95% accuracy'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Inventory Optimization',
      description: 'Automatically optimize stock levels to reduce costs and prevent stockouts'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Supply Chain',
      description: 'Manage complex multi-country supply chains with real-time visibility'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of your entire supply chain with instant alerts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered forecasting, inventory management, and real-time monitoring solutions." />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered forecasting, inventory optimization, 
              and real-time monitoring. Reduce costs by up to 40% and improve efficiency.
            </p>
            <FuturisticButton className="text-lg px-8 py-4">
              Get Started
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI to optimize every aspect of your supply chain
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your supply chain needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-400 text-black text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton className="w-full">
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}