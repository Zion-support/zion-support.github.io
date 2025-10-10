'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Target, BarChart3, Shield, CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp, Globe, Cpu, Database, Settings } from 'lucide-react';

const AIQuantumOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Quantum-Classical Hybrid AI',
      description: 'Revolutionary AI that combines quantum computing with classical machine learning for unprecedented optimization capabilities.',
      benefits: ['Quantum advantage', 'Exponential speedup', 'Complex problem solving', 'Real-time optimization']
    },
    {
      icon: Zap,
      title: 'Quantum Neural Networks',
      description: 'Next-generation neural networks that leverage quantum entanglement for superior pattern recognition and learning.',
      benefits: ['Quantum entanglement', 'Enhanced learning', 'Faster convergence', 'Better accuracy']
    },
    {
      icon: Target,
      title: 'Quantum Optimization Algorithms',
      description: 'Advanced optimization algorithms that solve NP-hard problems in polynomial time using quantum principles.',
      benefits: ['NP-hard problem solving', 'Polynomial time complexity', 'Global optimization', 'Constraint satisfaction']
    },
    {
      icon: BarChart3,
      title: 'Quantum Data Analytics',
      description: 'Process massive datasets with quantum speedup, enabling real-time analysis of petabytes of data.',
      benefits: ['Massive data processing', 'Real-time analytics', 'Quantum speedup', 'Scalable solutions']
    }
  ];

  const benefits = [
    'Solve optimization problems 1000x faster than classical computers',
    'Process massive datasets in real-time with quantum speedup',
    'Achieve global optimization solutions previously impossible',
    'Reduce computational costs by 90% for complex problems',
    'Enable breakthrough discoveries in drug discovery and materials science'
  ];

  const pricing = [
    {
      name: 'Quantum Starter',
      price: '$2,999/month',
      features: [
        'Basic quantum optimization',
        'Up to 10 qubits',
        'Standard algorithms',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$9,999/month',
      features: [
        'Advanced quantum optimization',
        'Up to 50 qubits',
        'Custom algorithms',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom Pricing',
      features: [
        'Full quantum capabilities',
        'Unlimited qubits',
        'Custom quantum circuits',
        '24/7 dedicated support',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Portfolio Optimization',
      description: 'Optimize investment portfolios with quantum algorithms that consider thousands of variables and constraints.',
      icon: TrendingUp,
      results: '300% better returns, 50% risk reduction'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize complex supply chains with quantum algorithms for maximum efficiency and minimum cost.',
      icon: Globe,
      results: '40% cost reduction, 60% efficiency improvement'
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate drug discovery by simulating molecular interactions with quantum precision.',
      icon: Brain,
      results: '10x faster discovery, 80% accuracy improvement'
    },
    {
      title: 'Logistics & Routing',
      description: 'Solve complex routing problems with quantum optimization for delivery and transportation.',
      icon: Target,
      results: '35% fuel savings, 25% time reduction'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Quantum Optimization - Zion Tech Group | Revolutionary Quantum AI Solutions</title>
        <meta name="description" content="Revolutionary AI quantum optimization solutions that combine quantum computing with artificial intelligence for unprecedented problem-solving capabilities. Solve complex optimization problems 1000x faster." />
        <meta name="keywords" content="quantum AI, quantum optimization, quantum computing, AI quantum, quantum algorithms, optimization solutions, quantum machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Quantum <span className="text-cyan-400">Optimization</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that combine quantum computing with artificial intelligence to solve complex optimization problems 1000x faster than classical computers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Quantum Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum AI technology that revolutionizes optimization and problem-solving
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
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
                Why Choose Quantum AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary advantages that transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven quantum AI solutions across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {useCase.results}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum AI solution that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">per month</p>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Quantum AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with revolutionary quantum AI optimization. Contact our quantum experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Quantum Demo
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Quantum Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AIQuantumOptimizationPage;