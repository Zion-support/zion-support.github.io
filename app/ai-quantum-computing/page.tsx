'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Zap, Brain, Target, Shield, Database, Clock, Users, Award, Star, TrendingUp, Globe, Lock, Settings, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Sparkles, Cpu as QuantumIcon } from 'lucide-react';

const AIQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: QuantumIcon,
      title: 'Quantum Algorithm Optimization',
      description: 'Leverage quantum computing to solve complex optimization problems exponentially faster than classical computers',
      benefits: ['1000x faster optimization', 'Complex problem solving', 'Real-time processing', 'Scalable solutions']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Revolutionary quantum machine learning algorithms for pattern recognition and data analysis',
      benefits: ['Quantum neural networks', 'Enhanced pattern recognition', 'Faster training', 'Better accuracy']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable quantum encryption for ultimate data security and communication protection',
      benefits: ['Unbreakable encryption', 'Quantum key distribution', 'Future-proof security', 'Zero vulnerabilities']
    },
    {
      icon: Database,
      title: 'Quantum Database Search',
      description: 'Lightning-fast database searches using quantum algorithms for massive datasets',
      benefits: ['Exponential speedup', 'Massive scale handling', 'Real-time results', 'Cost efficiency']
    }
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description: 'Complex portfolio optimization and risk analysis using quantum algorithms',
      price: '$15,000/month',
      icon: DollarSign
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and drug compound analysis for pharmaceutical research',
      price: '$25,000/month',
      icon: Heart
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Multi-variable optimization for logistics and supply chain management',
      price: '$12,000/month',
      icon: Package
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced climate prediction and environmental impact analysis',
      price: '$18,000/month',
      icon: Globe
    }
  ];

  const pricing = [
    {
      name: 'Quantum Starter',
      price: '$5,000',
      period: '/month',
      description: 'Perfect for small-scale quantum experiments',
      features: [
        'Basic quantum algorithms',
        'Up to 10 qubits',
        'Standard support',
        'Basic documentation',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$15,000',
      period: '/month',
      description: 'Advanced quantum computing for growing businesses',
      features: [
        'Advanced quantum algorithms',
        'Up to 50 qubits',
        'Priority support',
        'Full documentation',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$50,000',
      period: '/month',
      description: 'Full-scale quantum computing for enterprise applications',
      features: [
        'Custom quantum algorithms',
        'Unlimited qubits',
        '24/7 dedicated support',
        'Custom documentation',
        'Full API access',
        'White-label solutions',
        'Dedicated quantum team'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI quantum computing solutions for complex optimization, machine learning, and cryptography. Transform your business with quantum-powered AI." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum machine learning, quantum cryptography, optimization" />
        <meta property="og:title" content="AI Quantum Computing Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI quantum computing solutions for complex optimization and machine learning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Quantum Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                complex problems that are impossible for classical computers. Experience exponential 
                speedup and revolutionary capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Quantum Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Quantum Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum computing solutions combine the power of quantum mechanics with advanced AI 
                to deliver unprecedented computational capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum AI Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum AI can transform your industry and solve previously impossible problems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{useCase.price}</div>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect quantum computing plan for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`bg-gray-800 rounded-xl p-8 h-full ${plan.popular ? 'border-2 border-purple-500' : 'border border-gray-700'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our quantum computing experts to discuss how quantum AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Quantum Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQuantumComputingPage;