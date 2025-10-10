'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Cpu, Zap, Shield, Brain, Globe, Database, Target, Users, BarChart, Settings, Lock, Cloud, Code, FileText, MessageSquare, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, TrendingUp, Calendar, CheckSquare, Award, Rocket, Layers, BarChart3, Headphones, Smartphone, HardDrive, Printer, Router } from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications'
    },
    {
      icon: Zap,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced ML models for pattern recognition and data analysis'
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms'
    },
    {
      icon: Database,
      title: 'Quantum Database Optimization',
      description: 'Quantum algorithms for database query optimization and data processing'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Quantum AI Model Training',
      description: 'Train machine learning models using quantum computing for superior performance',
      price: '$15,000/month',
      marketPrice: '$25,000-50,000/month',
      features: [
        'Quantum neural network training',
        'Quantum feature selection',
        'Quantum optimization algorithms',
        'Hybrid classical-quantum models',
        'Quantum data encoding',
        'Quantum error correction'
      ],
      benefits: [
        'Exponential speedup in training',
        'Better pattern recognition',
        'Reduced computational complexity',
        'Enhanced model accuracy'
      ],
      category: 'Quantum AI',
      popular: true
    },
    {
      icon: Target,
      title: 'Quantum Optimization Solutions',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms',
      price: '$12,000/month',
      marketPrice: '$20,000-40,000/month',
      features: [
        'Portfolio optimization',
        'Supply chain optimization',
        'Route optimization',
        'Resource allocation',
        'Scheduling optimization',
        'Financial modeling'
      ],
      benefits: [
        'Find optimal solutions faster',
        'Handle large-scale problems',
        'Reduce operational costs',
        'Improve decision making'
      ],
      category: 'Optimization',
      popular: true
    },
    {
      icon: Lock,
      title: 'Quantum Security Solutions',
      description: 'Next-generation security using quantum cryptography and quantum-resistant encryption',
      price: '$18,000/month',
      marketPrice: '$30,000-60,000/month',
      features: [
        'Quantum key distribution (QKD)',
        'Quantum random number generation',
        'Post-quantum cryptography',
        'Quantum digital signatures',
        'Quantum secure communication',
        'Quantum threat detection'
      ],
      benefits: [
        'Unbreakable encryption',
        'Future-proof security',
        'Quantum threat protection',
        'Enhanced data privacy'
      ],
      category: 'Security',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Quantum Financial Modeling',
      description: 'Advanced financial analysis using quantum algorithms for risk assessment and trading',
      price: '$20,000/month',
      marketPrice: '$35,000-70,000/month',
      features: [
        'Quantum Monte Carlo simulation',
        'Portfolio risk analysis',
        'Option pricing models',
        'Market volatility prediction',
        'Credit risk assessment',
        'Algorithmic trading strategies'
      ],
      benefits: [
        'More accurate risk models',
        'Faster financial calculations',
        'Better investment decisions',
        'Reduced computational time'
      ],
      category: 'Finance',
      popular: true
    },
    {
      icon: Database,
      title: 'Quantum Database Systems',
      description: 'Quantum-enhanced database systems for ultra-fast data processing and retrieval',
      price: '$14,000/month',
      marketPrice: '$25,000-45,000/month',
      features: [
        'Quantum search algorithms',
        'Quantum data compression',
        'Quantum indexing systems',
        'Quantum join operations',
        'Quantum data clustering',
        'Quantum query optimization'
      ],
      benefits: [
        'Exponential search speedup',
        'Reduced storage requirements',
        'Faster data retrieval',
        'Improved query performance'
      ],
      category: 'Database',
      popular: false
    },
    {
      icon: Globe,
      title: 'Quantum Simulation Services',
      description: 'Complex system simulation using quantum computers for scientific and industrial applications',
      price: '$16,000/month',
      marketPrice: '$28,000-55,000/month',
      features: [
        'Molecular simulation',
        'Material science modeling',
        'Drug discovery simulation',
        'Climate modeling',
        'Financial market simulation',
        'Quantum chemistry calculations'
      ],
      benefits: [
        'Accurate complex simulations',
        'Faster research cycles',
        'Better scientific insights',
        'Reduced computational costs'
      ],
      category: 'Simulation',
      popular: true
    }
  ];

  const benefits = [
    'Exponential computational speedup for complex problems',
    'Quantum advantage in optimization and machine learning',
    'Unbreakable quantum cryptography for ultimate security',
    'Revolutionary approach to data processing and analysis',
    'Future-proof technology for next-generation applications',
    'Access to cutting-edge quantum hardware and software',
    'Expert quantum algorithm development and optimization',
    '24/7 quantum computing support and maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions for AI, optimization, cryptography, and data processing. Transform your business with quantum advantage." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum cryptography, quantum optimization, quantum machine learning, quantum algorithms" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Computing
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing to solve complex problems with exponential speedup. 
              Our quantum solutions deliver unprecedented computational advantages for AI, optimization, and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Quantum Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum solutions leverage the principles of quantum mechanics to deliver unprecedented computational power.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions designed to solve your most complex challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a 
                    href="/contact"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary advantages of quantum computing for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our quantum computing experts to discuss how quantum solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiQuantumComputingPage;