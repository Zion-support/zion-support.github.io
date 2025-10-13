import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Zap, Globe, Smartphone, Activity, Cpu, Server } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const QuantumComputingSolutions = () => {
  const features = [
    'Quantum Algorithm Development',
    'Quantum Circuit Optimization',
    'Quantum Error Correction',
    'Quantum Machine Learning',
    'Quantum Cryptography',
    'Quantum Simulation',
    'Quantum Cloud Access',
    'Quantum Software Development',
    'Quantum Hardware Integration',
    'Quantum Performance Monitoring',
    'Quantum Security Solutions',
    'Quantum Consulting Services'
  ];

  const pricingTiers = [
    {
      name: 'Explorer',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for research institutions',
      features: [
        'Basic quantum access',
        '5 quantum hours/month',
        'Standard algorithms',
        'Email support',
        '1 user account',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/month',
      description: 'Ideal for enterprises',
      features: [
        'Advanced quantum access',
        '50 quantum hours/month',
        'Custom algorithms',
        'Priority support',
        'Up to 10 user accounts',
        'Advanced monitoring',
        'Custom development',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited quantum access',
        'Dedicated quantum resources',
        'Custom quantum solutions',
        'Dedicated support',
        'Unlimited users',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const quantumFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Quantum Algorithms',
      description: 'Develop and optimize quantum algorithms for complex computational problems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Quantum Hardware',
      description: 'Access to cutting-edge quantum computers and quantum processing units.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Speedup',
      description: 'Exponential speedup for specific computational problems using quantum mechanics.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum key distribution and quantum cryptography.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems and molecular interactions with unprecedented accuracy.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Quantum Cloud',
      description: 'Access quantum computing resources through our secure cloud platform.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const applications = [
    'Drug Discovery',
    'Financial Modeling',
    'Cryptography',
    'Optimization Problems',
    'Machine Learning',
    'Climate Modeling',
    'Material Science',
    'Logistics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Quantum Computing Solutions - Advanced Quantum Technology | Zion Tech Group"
        description="Revolutionary quantum computing solutions for enterprises and research institutions. Quantum algorithms, hardware access, and consulting services. Starting at $2,999/month."
        keywords="quantum computing, quantum algorithms, quantum hardware, quantum cryptography, quantum simulation, quantum cloud"
        canonical="https://ziontechgroup.com/quantum-computing-solutions"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Brain className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-400 text-sm font-medium">Quantum Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Quantum Computing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum computing solutions for enterprises and research institutions. 
            Access cutting-edge quantum hardware, develop quantum algorithms, and solve complex problems with quantum speedup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">1000x</div>
              <div className="text-gray-300 text-sm">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Quantum Algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Quantum Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge quantum computing technology for solving the world's most complex problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Quantum Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for quantum computing development and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary applications across multiple industries and research fields.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {applications.map((application, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors font-semibold">
                  {application}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your quantum computing needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-indigo-500/50 shadow-indigo-500/20' 
                    : 'border-white/20 hover:border-indigo-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-indigo-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                      : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Enter the Quantum Era
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations using quantum computing to solve complex problems 
            and drive innovation. Start your quantum journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions;