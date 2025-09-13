import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  Lock, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const QuantumComputingUltimateBreakthroughShowcase: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Quantum Supremacy Achieved',
      description: 'Breakthrough quantum processors with 1M+ qubits, solving problems impossible for classical computers',
      icon: <Atom className="w-8 h-8 text-cyan-500" />,
      metrics: '1M+ Qubits',
      color: 'from-cyan-500 to-blue-500',
      status: 'Available Now'
    },
    {
      title: 'Quantum-Neural Integration',
      description: 'Revolutionary fusion of quantum computing with neural networks for unprecedented AI capabilities',
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      metrics: '10,000x Faster',
      color: 'from-purple-500 to-pink-500',
      status: '2025 Q2'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles, securing data for the next century',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      metrics: '100% Secure',
      color: 'from-green-500 to-emerald-500',
      status: 'Available Now'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'AI systems that leverage quantum computing for exponential speed improvements in learning',
      icon: <Target className="w-8 h-8 text-orange-500" />,
      metrics: 'Exponential Speed',
      color: 'from-orange-500 to-red-500',
      status: '2025 Q3'
    },
    {
      title: 'Quantum Internet',
      description: 'Global quantum communication network enabling instant, secure data transmission worldwide',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      metrics: 'Global Scale',
      color: 'from-indigo-500 to-purple-500',
      status: '2026 Q1'
    },
    {
      title: 'Quantum AI Consciousness',
      description: 'First quantum-enhanced AI systems with consciousness-like capabilities and decision making',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      metrics: 'Conscious AI',
      color: 'from-yellow-500 to-orange-500',
      status: '2027 Q2'
    }
  ];

  const applications = [
    'Drug Discovery & Medical Research',
    'Financial Modeling & Risk Analysis',
    'Climate Change Solutions',
    'Space Exploration & Astronomy',
    'Cybersecurity & Data Protection',
    'Artificial Intelligence Enhancement',
    'Supply Chain Optimization',
    'Energy Grid Management'
  ];

  const benefits = [
    {
      title: 'Exponential Processing Power',
      description: 'Solve complex problems in seconds that would take classical computers centuries',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Unbreakable Security',
      description: 'Quantum encryption that cannot be cracked by any known or future technology',
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Revolutionary AI',
      description: 'AI systems with quantum-enhanced capabilities for unprecedented intelligence',
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Global Impact',
      description: 'Transform every industry from healthcare to finance with quantum solutions',
      icon: <Globe className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold mb-6">
            <Star className="w-5 h-5" />
            QUANTUM BREAKTHROUGH
            <Star className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing Ultimate Breakthrough
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum computing technologies that will transform every industry 
            and solve humanity's greatest challenges
          </p>
        </div>

        {/* Breakthroughs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${breakthrough.color} mb-6`}>
                {breakthrough.icon}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-cyan-400">{breakthrough.status}</div>
                <div className="text-lg font-bold text-green-400">{breakthrough.metrics}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{breakthrough.title}</h3>
              <p className="text-gray-300">{breakthrough.description}</p>
            </div>
          ))}
        </div>

        {/* Applications Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Revolutionary Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-lg">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-full bg-white/10 mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Quantum Revolution
            </h3>
            <p className="text-xl text-cyan-100 mb-8">
              Get exclusive access to quantum computing breakthroughs and implementation guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-breakthroughs"
                className="group bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Access Quantum Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingUltimateBreakthroughShowcase;