'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Atom, Cpu, Zap, Shield, BarChart, Brain, Target, CheckCircle, 
  ArrowRight, Star, Users, Award, Clock, TrendingUp, Settings, 
  Database, Globe, Lock, Sparkles, Cpu as QuantumIcon
} from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumServices = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: 'Quantum Machine Learning',
      description: 'Revolutionary quantum algorithms for machine learning that can process exponentially larger datasets.',
      price: 'Starting at $15,000/month',
      features: [
        'Quantum neural networks',
        'Exponential speedup for ML algorithms',
        'Quantum feature mapping',
        'Quantum optimization',
        'Quantum data encoding',
        'Hybrid quantum-classical models'
      ],
      benefits: [
        '1000x faster training times',
        'Exponential data processing capacity',
        'Breakthrough in complex pattern recognition',
        'Revolutionary optimization capabilities'
      ],
      link: '/contact',
      category: 'quantum-ml'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems that are impossible for classical computers.',
      price: 'Starting at $12,000/month',
      features: [
        'Portfolio optimization',
        'Supply chain optimization',
        'Route optimization',
        'Resource allocation',
        'Scheduling optimization',
        'Financial modeling'
      ],
      benefits: [
        'Solve NP-hard problems in polynomial time',
        '90% better optimization results',
        'Real-time complex decision making',
        'Massive cost savings'
      ],
      link: '/contact',
      category: 'optimization'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles for ultimate security.',
      price: 'Starting at $8,000/month',
      features: [
        'Quantum key distribution',
        'Post-quantum cryptography',
        'Quantum random number generation',
        'Quantum secure communication',
        'Quantum digital signatures',
        'Quantum authentication'
      ],
      benefits: [
        'Theoretically unbreakable security',
        'Future-proof against quantum attacks',
        'Perfect randomness generation',
        'Ultimate data protection'
      ],
      link: '/contact',
      category: 'security'
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'Quantum Financial Modeling',
      description: 'Advanced quantum algorithms for financial analysis and risk assessment.',
      price: 'Starting at $20,000/month',
      features: [
        'Quantum Monte Carlo simulations',
        'Portfolio risk analysis',
        'Market prediction models',
        'Fraud detection algorithms',
        'High-frequency trading optimization',
        'Credit risk assessment'
      ],
      benefits: [
        '100x faster financial simulations',
        'More accurate risk predictions',
        'Real-time market analysis',
        'Revolutionary trading strategies'
      ],
      link: '/contact',
      category: 'finance'
    },
    {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: 'Quantum Drug Discovery',
      description: 'Accelerate pharmaceutical research using quantum molecular simulation.',
      price: 'Starting at $25,000/month',
      features: [
        'Quantum molecular dynamics',
        'Drug interaction modeling',
        'Protein folding simulation',
        'Chemical reaction prediction',
        'Molecular optimization',
        'Drug efficacy analysis'
      ],
      benefits: [
        '10x faster drug discovery',
        'More accurate molecular modeling',
        'Reduced R&D costs',
        'Breakthrough treatments'
      ],
      link: '/contact',
      category: 'healthcare'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Quantum Climate Modeling',
      description: 'Advanced climate simulation using quantum computing for environmental research.',
      price: 'Starting at $18,000/month',
      features: [
        'Climate pattern analysis',
        'Weather prediction models',
        'Carbon footprint optimization',
        'Renewable energy optimization',
        'Environmental impact assessment',
        'Sustainability planning'
      ],
      benefits: [
        'More accurate climate predictions',
        'Better environmental planning',
        'Optimized resource usage',
        'Sustainable development insights'
      ],
      link: '/contact',
      category: 'environment'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" /> },
    { id: 'quantum-ml', name: 'Quantum ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'optimization', name: 'Optimization', icon: <Target className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'finance', name: 'Finance', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Users className="w-5 h-5" /> },
    { id: 'environment', name: 'Environment', icon: <Globe className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '50+', label: 'Quantum Algorithms', icon: <Atom className="w-6 h-6 text-cyan-400" /> },
    { number: '1000x', label: 'Speed Improvement', icon: <Zap className="w-6 h-6 text-yellow-400" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Quantum Access', icon: <Clock className="w-6 h-6 text-blue-400" /> }
  ];

  const [activeTab, setActiveTab] = useState('overview');
  const filteredServices = activeTab === 'overview' 
    ? quantumServices 
    : quantumServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Quantum Computing AI Services - Zion Tech Group | Revolutionary Quantum Solutions</title>
        <meta name="description" content="Revolutionary quantum computing AI services including quantum machine learning, optimization, cryptography, and financial modeling. Experience the future of computing." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum machine learning, quantum optimization, quantum cryptography, quantum algorithms" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Atom className="w-4 h-4" />
              <span>Quantum Computing AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              The Future of Computing is{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing to solve problems that are impossible for classical computers. 
              Experience exponential speedups and breakthrough capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get Quantum Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Quantum Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary quantum computing solutions for the most complex problems
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Quantum Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Explore Quantum Solution
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Experience Quantum Computing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the quantum revolution and solve problems that were previously impossible. 
                  Let's discuss how quantum computing can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Quantum Journey
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View Quantum Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiQuantumComputingPage;