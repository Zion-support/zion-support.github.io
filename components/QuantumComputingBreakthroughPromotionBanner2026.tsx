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
  ArrowRight, 
  Star, 
  Clock,
  TrendingUp,
  Target,
  Rocket,
  Award,
  CheckCircle,
  Brain,
  Layers
} from 'lucide-react';

const QuantumComputingBreakthroughPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: 'Quantum Supremacy 2.0',
      description: '10,000x faster problem solving',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Error-Corrected Quantum',
      description: '99.9% accuracy in operations',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Quantum Internet',
      description: '100% secure communication',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Quantum-AI Hybrid',
      description: 'Exponential AI performance',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '1,000+', label: 'Qubits' },
    { number: '99.9%', label: 'Fidelity' },
    { number: '10,000x', label: 'Speed' },
    { number: '100%', label: 'Security' }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6"
          >
            <Atom className="w-5 h-5 mr-2" />
            🚀 NEW: Quantum Computing Breakthroughs 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Quantum Revolution is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Unfolding
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Witness the most significant quantum computing breakthroughs of 2026. 
            From quantum supremacy to error-corrected systems, the future of computing is quantum.
          </motion.p>

          {/* Animated Breakthrough Display */}
          <motion.div
            key={currentBreakthrough}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 mb-8"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} flex items-center justify-center mr-4`}>
              {breakthroughs[currentBreakthrough].icon}
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-white">{breakthroughs[currentBreakthrough].title}</div>
              <div className="text-gray-300 text-sm">{breakthroughs[currentBreakthrough].description}</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {breakthroughs.map((breakthrough, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${breakthrough.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {breakthrough.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{breakthrough.title}</h3>
              <p className="text-gray-300 text-sm">{breakthrough.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ⚛️ Experience the Quantum Future
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our quantum computing breakthrough report. 
              Discover how these revolutionary technologies will transform your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Access Quantum Report
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              >
                <Award className="w-5 h-5 mr-2" />
                View Live Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Validated by Quantum Experts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Based on Latest Research</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Real-World Applications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputingBreakthroughPromotionBanner2026;