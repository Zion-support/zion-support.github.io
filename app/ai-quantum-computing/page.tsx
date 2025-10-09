'use client';
import React from 'react';
import { Cpu, Brain, Zap, Shield, CheckCircle, Phone, Star, Users, Award, Globe, Lock, BarChart } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for optimization, cryptography, and machine learning',
      benefits: ['Exponential speedup', 'Quantum advantage', 'Custom algorithm development']
    },
    {
      icon: Cpu,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning models for complex data analysis',
      benefits: ['Quantum neural networks', 'Quantum feature maps', 'Quantum optimization']
    },
    {
      icon: Zap,
      title: 'Optimization Problems',
      description: 'Solve complex optimization problems with quantum computing power',
      benefits: ['Combinatorial optimization', 'Portfolio optimization', 'Supply chain optimization']
    },
    {
      icon: Lock,
      title: 'Quantum Cryptography',
      description: 'Ultra-secure quantum encryption and communication protocols',
      benefits: ['Quantum key distribution', 'Post-quantum cryptography', 'Quantum security']
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$5,000',
      period: '/month',
      description: 'For research institutions and academic projects',
      features: [
        'Access to quantum simulators',
        'Basic quantum algorithms',
        'Research support',
        'Documentation and tutorials',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For enterprise applications and production use',
      features: [
        'Real quantum hardware access',
        'Custom algorithm development',
        'Dedicated support team',
        'Integration services',
        'Performance optimization',
        'SLA guarantees'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      description: 'Tailored solutions for specific quantum computing needs',
      features: [
        'Custom quantum solutions',
        'Dedicated quantum team',
        '24/7 support',
        'White-label options',
        'Training and certification',
        'Long-term partnerships'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, and fraud detection',
      icon: BarChart
    },
    {
      title: 'Pharmaceuticals',
      description: 'Drug discovery, molecular simulation, and protein folding',
      icon: Brain
    },
    {
      title: 'Logistics',
      description: 'Route optimization, supply chain management, and scheduling',
      icon: Globe
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum encryption, secure communications, and threat detection',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Advanced AI Service
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Quantum Computing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Harness the power of quantum computing with our advanced AI-powered quantum algorithms and solutions. 
            Solve complex problems exponentially faster with quantum advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Quantum Access</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Quantum Algorithms</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Quantum Computing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
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

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Quantum Computing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
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
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
              Ready to Harness Quantum Computing?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the quantum revolution with our cutting-edge AI-powered quantum computing solutions. 
              Solve problems that are impossible with classical computers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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

export default AIQuantumComputingPage;