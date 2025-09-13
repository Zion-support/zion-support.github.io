import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Lock, 
  Network,
  TrendingUp,
  Target,
  Rocket,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Database,
  Brain,
  Layers
} from 'lucide-react';

const QuantumComputingBreakthroughShowcase2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBreakthrough, setActiveBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: 'Quantum Supremacy 2.0',
      description: 'Achieved quantum advantage in practical applications beyond classical simulation',
      impact: '10,000x faster problem solving',
      applications: ['Drug Discovery', 'Financial Modeling', 'Climate Simulation', 'Cryptography'],
      icon: <Atom className="w-12 h-12" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Error-Corrected Quantum Computers',
      description: 'First commercially viable quantum computers with logical qubits',
      impact: '99.9% accuracy in quantum operations',
      applications: ['Quantum Machine Learning', 'Optimization', 'Simulation', 'Cryptography'],
      icon: <Shield className="w-12 h-12" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Quantum Internet',
      description: 'Global quantum communication network enabling unbreakable encryption',
      impact: '100% secure global communication',
      applications: ['Secure Banking', 'Government Communications', 'Healthcare Data', 'IoT Security'],
      icon: <Globe className="w-12 h-12" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Quantum-AI Hybrid Systems',
      description: 'Integration of quantum computing with artificial intelligence',
      impact: 'Exponential AI performance boost',
      applications: ['Pattern Recognition', 'Decision Making', 'Creative AI', 'Predictive Analytics'],
      icon: <Brain className="w-12 h-12" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Exponential Speed',
      description: 'Solve complex problems in seconds that would take classical computers years'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Unbreakable Security',
      description: 'Quantum encryption provides absolute security for sensitive data'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Perfect Accuracy',
      description: 'Achieve 99.9% accuracy in quantum operations with error correction'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future-Ready',
      description: 'Prepare for the quantum revolution that will transform every industry'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'Qubits in Latest Systems' },
    { number: '99.9%', label: 'Quantum Gate Fidelity' },
    { number: '10,000x', label: 'Speed Improvement' },
    { number: '100%', label: 'Security Guarantee' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6"
          >
            <Atom className="w-5 h-5 mr-2" />
            Quantum Computing Breakthroughs 2026
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Quantum Revolution is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Witness the most significant quantum computing breakthroughs of 2026. 
            From quantum supremacy to error-corrected systems, the future of computing is quantum.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Breakthrough */}
        <motion.div
          key={activeBreakthrough}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${breakthroughs[activeBreakthrough].color} mb-6`}>
                {breakthroughs[activeBreakthrough].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {breakthroughs[activeBreakthrough].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {breakthroughs[activeBreakthrough].description}
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {breakthroughs[activeBreakthrough].impact}
                </div>
                <div className="text-gray-300 text-sm">
                  Performance Impact
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Applications</h4>
              <div className="grid grid-cols-2 gap-3">
                {breakthroughs[activeBreakthrough].applications.map((app, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-gray-300 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Breakthroughs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {breakthroughs.map((breakthrough, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer ${
                activeBreakthrough === index ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setActiveBreakthrough(index)}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${breakthrough.color} mb-4`}>
                {breakthrough.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {breakthrough.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {breakthrough.description}
              </p>
              <div className="text-blue-400 text-sm font-semibold">
                {breakthrough.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for the Quantum Future?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the quantum revolution. Get access to our comprehensive quantum computing 
            solutions and be among the first to leverage these breakthrough technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Explore Quantum Solutions
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
              <Award className="w-5 h-5 mr-2" />
              Download Report
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputingBreakthroughShowcase2026;