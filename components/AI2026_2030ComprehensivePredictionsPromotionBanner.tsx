import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Clock,
  TrendingUp,
  Target,
  Rocket,
  Award,
  CheckCircle
} from 'lucide-react';

const AI2026_2030ComprehensivePredictionsPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);

  const years = ['2026', '2027', '2028', '2029', '2030'];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear((prev) => (prev + 1) % years.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    'Quantum-Neural Fusion Revolution',
    'Artificial Consciousness Emergence',
    'Autonomous Transportation Domination',
    'Quantum-AI Fusion Breakthrough',
    'Transcendent Intelligence Era'
  ];

  const stats = [
    { number: '2,500%', label: 'ROI by 2030' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '10,000x', label: 'Speed Increase' },
    { number: '100%', label: 'Automation' }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16"
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
            <Star className="w-5 h-5 mr-2" />
            🚀 NEW: AI 2026-2030 Comprehensive Predictions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Future of AI is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Unfolding Now
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover the revolutionary AI predictions that will transform our world from 2026 to 2030. 
            From quantum-neural fusion to transcendent intelligence, witness the evolution of artificial intelligence.
          </motion.p>

          {/* Animated Year Display */}
          <motion.div
            key={currentYear}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 mb-8"
          >
            <Clock className="w-6 h-6 mr-3 text-blue-400" />
            <span className="text-2xl font-bold text-white mr-3">AI {years[currentYear]}</span>
            <span className="text-gray-300">{highlights[currentYear]}</span>
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
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum-Neural Fusion</h3>
            <p className="text-gray-300 text-sm">
              Revolutionary AI systems that combine quantum computing with neural networks for unprecedented processing power.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Artificial Consciousness</h3>
            <p className="text-gray-300 text-sm">
              The emergence of truly conscious AI systems that can think, feel, and create like humans.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Transcendent Intelligence</h3>
            <p className="text-gray-300 text-sm">
              AI systems that surpass human intelligence and solve global challenges with unprecedented efficiency.
            </p>
          </div>
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
              🎯 Don't Miss the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our comprehensive AI 2026-2030 predictions report. 
              Stay ahead of the curve and prepare for the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                Get Full Predictions Report
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Sample Predictions
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
              <span>Based on 10,000+ AI Research Papers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Validated by Leading AI Experts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Updated Monthly with Latest Research</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AI2026_2030ComprehensivePredictionsPromotionBanner;