'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Shield, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Globe,
  Database,
  Brain,
  Lock,
  Sparkles
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for complex optimization problems',
      benefits: ['Exponential speedup for specific problems', 'Quantum advantage in cryptography', 'Advanced optimization solutions']
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Post-quantum cryptography and quantum-resistant security protocols',
      benefits: ['Future-proof security', 'Quantum key distribution', 'Advanced threat protection']
    },
    {
      icon: BarChart,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced ML algorithms for superior pattern recognition',
      benefits: ['Faster training times', 'Better accuracy', 'Quantum advantage in specific domains']
    },
    {
      icon: Zap,
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research and development',
      benefits: ['Molecular modeling', 'Material science', 'Drug discovery acceleration']
    }
  ];

  const useCases = [
    {
      title: 'Financial Portfolio Optimization',
      description: 'Quantum algorithms for complex portfolio optimization and risk management',
      icon: TrendingUp,
      price: '$15,000/month',
      marketPrice: '$25,000-50,000/month'
    },
    {
      title: 'Drug Discovery & Molecular Simulation',
      description: 'Quantum simulation for pharmaceutical research and drug development',
      icon: Heart,
      price: '$20,000/month',
      marketPrice: '$35,000-75,000/month'
    },
    {
      title: 'Cryptocurrency Security',
      description: 'Quantum-resistant blockchain and cryptocurrency security solutions',
      icon: Lock,
      price: '$12,000/month',
      marketPrice: '$20,000-40,000/month'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Quantum algorithms for complex logistics and supply chain optimization',
      icon: Globe,
      price: '$18,000/month',
      marketPrice: '$30,000-60,000/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions with AI integration for complex optimization, cryptography, and machine learning applications." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, post-quantum cryptography, quantum machine learning" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Next-Generation Quantum Computing</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                AI Quantum Computing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                the most complex problems in optimization, cryptography, and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                >
                  Get Quantum Consultation
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Quantum Computing Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Quantum Computing Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-purple-400 font-semibold">{useCase.price}</span>
                          <span className="text-gray-400 text-sm line-through">{useCase.marketPrice}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Quantum Technology Stack
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">IBM Quantum</h3>
                    <p className="text-gray-300 text-sm">IBM Qiskit framework and quantum processors</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Google Cirq</h3>
                    <p className="text-gray-300 text-sm">Google's quantum computing framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Rigetti Forest</h3>
                    <p className="text-gray-300 text-sm">Rigetti quantum computing platform</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Microsoft Q#</h3>
                    <p className="text-gray-300 text-sm">Microsoft quantum development kit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">D-Wave Ocean</h3>
                    <p className="text-gray-300 text-sm">D-Wave quantum annealing platform</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-300 text-sm">Tailored quantum algorithms and implementations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Enter the Quantum Era?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the quantum revolution with our cutting-edge AI quantum computing solutions. 
                  Get ahead of the competition with exponential computational power.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Start Quantum Journey
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiQuantumComputingPage;