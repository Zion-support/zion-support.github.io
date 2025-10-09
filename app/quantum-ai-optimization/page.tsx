'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Zap, Shield, Brain, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, DollarSign, Clock, Award, TrendingUp, BarChart, Globe, Lock, Atom, CircuitBoard, Database, Layers, Target, Gauge, Sparkles, CpuIcon } from 'lucide-react';

const QuantumAIOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Neural Networks',
      description: 'Leverage quantum computing power to accelerate AI model training and inference',
      benefits: ['1000x faster training', 'Exponential speedup', 'Quantum advantage', 'Parallel processing']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Solve complex optimization problems using quantum algorithms and quantum annealing',
      benefits: ['Combinatorial optimization', 'Quantum annealing', 'Quantum sampling', 'Hybrid algorithms']
    },
    {
      icon: Zap,
      title: 'Quantum Speedup',
      description: 'Achieve exponential speedup for specific AI workloads using quantum algorithms',
      benefits: ['Grover\'s algorithm', 'Quantum Fourier Transform', 'Quantum search', 'Quantum simulation']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Implement quantum-resistant cryptography and quantum key distribution',
      benefits: ['Post-quantum cryptography', 'Quantum key distribution', 'Quantum random numbers', 'Future-proof security']
    }
  ];

  const applications = [
    {
      title: 'Financial Modeling',
      description: 'Optimize portfolio management and risk assessment using quantum algorithms',
      icon: BarChart,
      examples: ['Portfolio optimization', 'Risk analysis', 'Fraud detection', 'Algorithmic trading']
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate molecular simulation and drug design with quantum computing',
      icon: Atom,
      examples: ['Molecular simulation', 'Drug design', 'Protein folding', 'Chemical reactions']
    },
    {
      title: 'Supply Chain',
      description: 'Optimize complex logistics and supply chain management problems',
      icon: CircuitBoard,
      examples: ['Route optimization', 'Inventory management', 'Resource allocation', 'Scheduling']
    },
    {
      title: 'Climate Modeling',
      description: 'Model complex climate systems and environmental data using quantum simulation',
      icon: Globe,
      examples: ['Climate prediction', 'Weather modeling', 'Carbon optimization', 'Renewable energy']
    }
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$2,999',
      period: '/month',
      description: 'Entry-level quantum AI optimization for small projects',
      features: [
        'Up to 10 quantum circuits',
        '5 hours quantum compute time/month',
        'Basic quantum algorithms',
        'Standard support',
        'API access',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$7,999',
      period: '/month',
      description: 'Advanced quantum AI solutions for growing businesses',
      features: [
        'Up to 50 quantum circuits',
        '25 hours quantum compute time/month',
        'Advanced quantum algorithms',
        'Priority support',
        'Custom quantum circuits',
        'Hybrid classical-quantum workflows',
        'Performance analytics',
        'Training and consultation'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale quantum AI solutions for large organizations',
      features: [
        'Unlimited quantum circuits',
        'Dedicated quantum hardware access',
        'Custom quantum algorithms',
        '24/7 dedicated support',
        'On-premise quantum deployment',
        'White-label solutions',
        'SLA guarantees',
        'Research partnerships',
        'Quantum team augmentation'
      ],
      popular: false
    }
  ];

  const quantumAdvantages = [
    {
      metric: '1000x',
      description: 'Faster AI Training',
      icon: Zap
    },
    {
      metric: 'Exponential',
      description: 'Speedup Potential',
      icon: TrendingUp
    },
    {
      metric: '99.9%',
      description: 'Accuracy Rate',
      icon: Target
    },
    {
      metric: 'Future-Proof',
      description: 'Technology',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Quantum AI Optimization - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum AI optimization services. Leverage quantum computing to accelerate AI model training, solve complex optimization problems, and achieve exponential speedup." />
        <meta name="keywords" content="quantum AI, quantum computing, quantum machine learning, quantum optimization, quantum algorithms, quantum neural networks" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Atom className="w-4 h-4" />
            <span>Quantum AI Technology</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Quantum AI Optimization
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of quantum computing to revolutionize AI. Achieve exponential speedup, solve complex optimization problems, and unlock new possibilities in machine learning.
          </p>

          {/* Quantum Advantages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <advantage.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{advantage.metric}</div>
                <div className="text-gray-300">{advantage.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Quantum AI Optimization Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Cpu className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Quantum AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Quantum AI Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <application.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300 mb-4">{application.description}</p>
                <ul className="space-y-2">
                  {application.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Quantum Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <CircuitBoard className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Hardware</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  IBM Quantum Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Google Quantum AI
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  IonQ Quantum Computers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Rigetti Quantum Cloud
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <Layers className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Software</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Qiskit Framework
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Cirq (Google)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  PennyLane
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  TensorFlow Quantum
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <Brain className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Integration</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Quantum Neural Networks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Hybrid Algorithms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Quantum ML Models
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Classical-Quantum Workflows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Quantum AI Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock exponential AI capabilities. Contact us to explore quantum AI solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIOptimizationPage;
