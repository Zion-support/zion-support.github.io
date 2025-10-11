import React from 'react';
import { CheckCircle, ArrowRight, Atom, Cpu, Shield, Zap, Brain, Database, Globe, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIQuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      icon: <Atom className="w-12 h-12 text-blue-500" />,
      title: 'Quantum Machine Learning',
      description: 'Revolutionary quantum algorithms for machine learning that can process exponentially larger datasets and solve complex optimization problems.',
      features: [
        'Quantum neural networks',
        'Exponential speedup for ML algorithms',
        'Quantum feature mapping',
        'Quantum optimization',
        'Hybrid classical-quantum models',
        'Quantum data encoding'
      ],
      pricing: '$15,000/month',
      popular: true,
      link: '/ai-quantum-ml',
      category: 'Quantum ML'
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms for ultimate data security.',
      features: [
        'Quantum key distribution (QKD)',
        'Quantum random number generation',
        'Post-quantum cryptography',
        'Quantum digital signatures',
        'Secure quantum communication',
        'Quantum-resistant algorithms'
      ],
      pricing: '$12,000/month',
      popular: false,
      link: '/ai-quantum-crypto',
      category: 'Security'
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems in logistics, finance, and operations using quantum annealing and variational algorithms.',
      features: [
        'Quantum annealing optimization',
        'Variational quantum eigensolver',
        'Portfolio optimization',
        'Supply chain optimization',
        'Route optimization',
        'Resource allocation'
      ],
      pricing: '$10,000/month',
      popular: true,
      link: '/ai-quantum-optimization',
      category: 'Optimization'
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-500" />,
      title: 'Quantum AI Simulation',
      description: 'Simulate complex molecular and material systems using quantum computers for drug discovery and materials science.',
      features: [
        'Molecular simulation',
        'Drug discovery acceleration',
        'Materials design',
        'Chemical reaction modeling',
        'Protein folding simulation',
        'Quantum chemistry calculations'
      ],
      pricing: '$18,000/month',
      popular: false,
      link: '/ai-quantum-simulation',
      category: 'Simulation'
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: 'Quantum Data Processing',
      description: 'Process massive datasets using quantum algorithms for pattern recognition, clustering, and data analysis.',
      features: [
        'Quantum data clustering',
        'Pattern recognition',
        'Quantum principal component analysis',
        'Quantum support vector machines',
        'Quantum neural networks',
        'Quantum data compression'
      ],
      pricing: '$8,000/month',
      popular: false,
      link: '/ai-quantum-data',
      category: 'Data Processing'
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-500" />,
      title: 'Quantum Cloud Services',
      description: 'Access quantum computing power through our cloud platform with pre-built quantum algorithms and APIs.',
      features: [
        'Quantum cloud access',
        'Pre-built quantum algorithms',
        'Quantum API integration',
        'Quantum development tools',
        'Quantum job scheduling',
        'Quantum result visualization'
      ],
      pricing: '$5,000/month',
      popular: true,
      link: '/ai-quantum-cloud',
      category: 'Cloud'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'Quantum Algorithms' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '100x', label: 'Speed Improvement' },
    { number: '24/7', label: 'Quantum Access' }
  ];

  const useCases = [
    {
      industry: 'Finance',
      applications: ['Portfolio optimization', 'Risk analysis', 'Fraud detection', 'Algorithmic trading'],
      icon: '💰'
    },
    {
      industry: 'Healthcare',
      applications: ['Drug discovery', 'Protein folding', 'Medical imaging', 'Genomic analysis'],
      icon: '🏥'
    },
    {
      industry: 'Logistics',
      applications: ['Route optimization', 'Supply chain', 'Inventory management', 'Delivery scheduling'],
      icon: '🚚'
    },
    {
      industry: 'Energy',
      applications: ['Grid optimization', 'Renewable energy', 'Battery design', 'Carbon capture'],
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI quantum computing services for machine learning, optimization, cryptography, and simulation. Access cutting-edge quantum algorithms and cloud services." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum machine learning, quantum cryptography, quantum optimization, quantum cloud" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum computing with AI to solve the most complex problems in optimization, 
              machine learning, cryptography, and simulation. Experience exponential speedup and breakthrough capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Use Cases by Industry */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Quantum AI Use Cases by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quantum Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Quantum AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Quantum AI */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our Quantum AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Advantage</h3>
                <p className="text-gray-300">Exponential speedup for complex problems that are intractable for classical computers.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Future-Proof Security</h3>
                <p className="text-gray-300">Quantum-resistant cryptography and unbreakable encryption for ultimate data protection.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">Access to the latest quantum hardware and algorithms from leading providers.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness Quantum AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution and solve problems that were previously impossible with classical computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Quantum Journey
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIQuantumComputingPage;