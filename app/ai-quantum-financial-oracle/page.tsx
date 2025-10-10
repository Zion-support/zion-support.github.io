'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, TrendingUp, Shield, Zap, Star, CheckCircle, ArrowRight, BarChart3, Target, Globe, Users, Settings } from 'lucide-react';

const AiQuantumFinancialOraclePage: React.FC = () => {
  const features = [
    'Quantum-enhanced market analysis',
    'Real-time risk assessment',
    'Portfolio optimization algorithms',
    'Predictive financial modeling',
    'Multi-asset correlation analysis',
    'Advanced pattern recognition'
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$299/month',
      description: 'For individual investors',
      features: [
        'Basic quantum analysis',
        '5 portfolio optimizations/month',
        'Standard risk metrics',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$799/month',
      description: 'For financial advisors',
      features: [
        'Advanced quantum algorithms',
        'Unlimited optimizations',
        'Real-time market data',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom risk models'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$2,499/month',
      description: 'For institutional investors',
      features: [
        'Full quantum computing power',
        'Custom algorithm development',
        'White-label solutions',
        '24/7 dedicated support',
        'Advanced compliance tools',
        'Multi-tenant architecture',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Quantum Computing',
      description: 'Leverage quantum algorithms for complex financial calculations and optimization problems'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Market Prediction',
      description: 'Advanced AI models predict market movements with unprecedented accuracy'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment using quantum-enhanced Monte Carlo simulations'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Portfolio Optimization',
      description: 'Quantum algorithms find optimal portfolio allocations in seconds'
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      value: '47%',
      label: 'Average Return Improvement',
      description: 'Compared to traditional methods'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      value: '23%',
      label: 'Risk Reduction',
      description: 'Lower portfolio volatility'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      value: '1000x',
      label: 'Faster Processing',
      description: 'Quantum speed advantage'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      value: '500+',
      label: 'Financial Institutions',
      description: 'Trust our technology'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Financial Oracle - Zion Tech Group | Next-Gen Investment Intelligence</title>
        <meta name="description" content="Revolutionary AI-powered quantum financial oracle for advanced investment analysis, portfolio optimization, and market prediction." />
        <meta name="keywords" content="quantum computing, financial AI, investment analysis, portfolio optimization, market prediction, quantum algorithms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Cpu className="w-4 h-4" />
              Quantum AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Financial Oracle</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              The world's first quantum-enhanced AI financial oracle. Revolutionize your investment strategy with unprecedented computational power and predictive accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Revolutionary Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum computing and AI to transform your financial decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Technical Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge quantum computing and AI technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Quantum-Powered Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access the future of financial technology with our quantum-enhanced solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300`}
                >
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
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
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
              Ready to Revolutionize Your Investment Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution in financial technology. Experience the future of investment intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiQuantumFinancialOraclePage;
