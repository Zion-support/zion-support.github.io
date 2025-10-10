'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Shield, BarChart, Target, CheckCircle, ArrowRight, Star, Users, Globe, Database, Settings, Lock, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications.',
      benefits: ['Exponential speedup', 'Advanced optimization', 'Quantum machine learning', 'Cryptographic security']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning models for complex pattern recognition and data analysis.',
      benefits: ['Quantum neural networks', 'Enhanced pattern recognition', 'Faster training', 'Quantum advantage']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.',
      benefits: ['Unbreakable security', 'Quantum key distribution', 'Future-proof encryption', 'Zero-knowledge protocols']
    },
    {
      icon: BarChart,
      title: 'Quantum Optimization',
      description: 'Quantum annealing and variational algorithms for complex optimization problems.',
      benefits: ['NP-hard problem solving', 'Portfolio optimization', 'Supply chain optimization', 'Resource allocation']
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization, risk analysis, and fraud detection.',
      icon: TrendingUp,
      results: ['300% faster optimization', '40% better returns', '99.9% fraud detection accuracy']
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research.',
      icon: Target,
      results: ['50x faster molecular simulation', '90% reduction in R&D time', 'Breakthrough drug discoveries']
    },
    {
      title: 'Climate Modeling',
      description: 'Quantum computing for complex climate simulations and environmental optimization.',
      icon: Globe,
      results: ['1000x faster simulations', 'Accurate climate predictions', 'Carbon footprint optimization']
    },
    {
      title: 'Supply Chain',
      description: 'Quantum optimization for logistics, inventory management, and route planning.',
      icon: Database,
      results: ['60% cost reduction', '95% efficiency improvement', 'Real-time optimization']
    }
  ];

  const pricing = [
    {
      name: 'Quantum Research',
      price: '$50,000/month',
      description: 'Access to quantum simulators and development tools',
      features: ['Quantum simulator access', 'Algorithm development', 'Research support', 'Documentation'],
      popular: false
    },
    {
      name: 'Quantum Enterprise',
      price: '$150,000/month',
      description: 'Full quantum computing access with dedicated resources',
      features: ['Dedicated quantum hardware', 'Custom algorithm development', '24/7 support', 'Training programs'],
      popular: true
    },
    {
      name: 'Quantum Partnership',
      price: 'Custom Pricing',
      description: 'Long-term research partnerships and joint development',
      features: ['Joint research projects', 'IP sharing', 'Custom solutions', 'Strategic partnership'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions powered by AI. Solve complex problems with quantum algorithms, machine learning, and optimization." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum machine learning, quantum cryptography" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Quantum Computing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                the world's most complex problems. Our quantum solutions deliver exponential speedup 
                and breakthrough capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quantum Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Quantum Computing Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Quantum Computing Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white mb-2">Proven Results:</h4>
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-green-300">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Quantum Computing Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-2 px-4 rounded-lg mb-6 -mt-8">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution. Contact our quantum computing experts for a consultation 
                and discover how quantum AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Schedule Quantum Demo
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Email Our Quantum Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiQuantumComputingPage;