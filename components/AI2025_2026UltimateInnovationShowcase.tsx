'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Sparkles
} from 'lucide-react';

interface InnovationCard {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  status: 'Released' | 'Beta' | 'Coming Soon';
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  metrics: {
    efficiency: number;
    accuracy: number;
    adoption: number;
  };
}

const AI2025_2026UltimateInnovationShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovation, setSelectedInnovation] = useState<InnovationCard | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const innovations: InnovationCard[] = [
    {
      id: 'neural-synthesis',
      title: 'Neural Synthesis Engine 2026',
      description: 'Revolutionary AI that can synthesize human-like consciousness and creativity, enabling unprecedented levels of artificial general intelligence.',
      category: 'Consciousness',
      impact: 'Transformative',
      status: 'Beta',
      features: [
        'Self-aware decision making',
        'Creative problem solving',
        'Emotional intelligence integration',
        'Cross-domain knowledge transfer'
      ],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-600 to-pink-600',
      metrics: { efficiency: 95, accuracy: 98, adoption: 75 }
    },
    {
      id: 'quantum-neural',
      title: 'Quantum Neural Networks',
      description: 'Breakthrough quantum computing integration with neural networks, delivering exponential processing power for complex AI tasks.',
      category: 'Quantum',
      impact: 'Revolutionary',
      status: 'Coming Soon',
      features: [
        'Quantum superposition processing',
        'Exponential speed improvements',
        'Quantum error correction',
        'Hybrid classical-quantum algorithms'
      ],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      metrics: { efficiency: 99, accuracy: 99, adoption: 25 }
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Business Systems',
      description: 'Self-managing AI systems that can run entire business operations without human intervention, optimizing processes in real-time.',
      category: 'Automation',
      impact: 'High',
      status: 'Released',
      features: [
        'End-to-end process automation',
        'Real-time decision making',
        'Self-healing capabilities',
        'Continuous optimization'
      ],
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-green-600 to-emerald-600',
      metrics: { efficiency: 92, accuracy: 96, adoption: 85 }
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics 2026',
      description: 'Advanced predictive models that can forecast business trends, market movements, and customer behavior with unprecedented accuracy.',
      category: 'Analytics',
      impact: 'High',
      status: 'Released',
      features: [
        'Multi-dimensional forecasting',
        'Real-time trend analysis',
        'Behavioral pattern recognition',
        'Risk assessment algorithms'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-orange-600 to-red-600',
      metrics: { efficiency: 88, accuracy: 94, adoption: 90 }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces that enable seamless communication between human thought and AI systems.',
      category: 'Interface',
      impact: 'Transformative',
      status: 'Beta',
      features: [
        'Thought-to-text conversion',
        'Mental command execution',
        'Enhanced cognitive augmentation',
        'Secure neural data transmission'
      ],
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-indigo-600 to-purple-600',
      metrics: { efficiency: 85, accuracy: 92, adoption: 40 }
    },
    {
      id: 'ai-security',
      title: 'AI Security Fortress',
      description: 'Advanced AI-powered security systems that can detect and prevent cyber threats in real-time using machine learning.',
      category: 'Security',
      impact: 'Critical',
      status: 'Released',
      features: [
        'Threat detection algorithms',
        'Automated response systems',
        'Behavioral anomaly detection',
        'Zero-trust architecture'
      ],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-600 to-pink-600',
      metrics: { efficiency: 96, accuracy: 99, adoption: 95 }
    }
  ];

  const categories = ['all', 'Consciousness', 'Quantum', 'Automation', 'Analytics', 'Interface', 'Security'];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              AI 2025-2026
            </h1>
            <Sparkles className="w-12 h-12 text-yellow-400 ml-4" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ultimate Innovation Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI technologies that will transform industries and reshape the future of human-AI collaboration.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Innovations' : category}
            </button>
          ))}
        </motion.div>

        {/* Innovation Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredInnovations.map((innovation) => (
            <motion.div
              key={innovation.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedInnovation(innovation)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    innovation.status === 'Released' 
                      ? 'bg-green-500/20 text-green-400'
                      : innovation.status === 'Beta'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {innovation.status}
                  </span>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${innovation.gradient}`}>
                    {innovation.icon}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {innovation.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Efficiency</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${innovation.metrics.efficiency}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-semibold">{innovation.metrics.efficiency}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Accuracy</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${innovation.metrics.accuracy}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-semibold">{innovation.metrics.accuracy}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Adoption</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${innovation.metrics.adoption}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-semibold">{innovation.metrics.adoption}%</span>
                    </div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {innovation.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {innovation.features.length > 2 && (
                    <div className="text-sm text-gray-400">
                      +{innovation.features.length - 2} more features
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 capitalize">{innovation.category}</span>
                  <div className="flex items-center text-yellow-400 group-hover:text-white transition-colors">
                    <span className="text-sm font-semibold mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Detail Modal */}
        <AnimatePresence>
          {selectedInnovation && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInnovation(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedInnovation.gradient} mr-6`}>
                      {selectedInnovation.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedInnovation.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          selectedInnovation.status === 'Released' 
                            ? 'bg-green-500/20 text-green-400'
                            : selectedInnovation.status === 'Beta'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {selectedInnovation.status}
                        </span>
                        <span className="text-gray-400 capitalize">{selectedInnovation.category}</span>
                        <span className="text-yellow-400 font-semibold">{selectedInnovation.impact} Impact</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedInnovation(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-8">
                  {selectedInnovation.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedInnovation.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Performance Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-lg">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        {selectedInnovation.metrics.efficiency}%
                      </div>
                      <div className="text-gray-300">Efficiency</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-lg">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {selectedInnovation.metrics.accuracy}%
                      </div>
                      <div className="text-gray-300">Accuracy</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {selectedInnovation.metrics.adoption}%
                      </div>
                      <div className="text-gray-300">Adoption</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                  <button className="flex-1 bg-white/10 text-white py-4 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <Award className="w-5 h-5 mr-2" />
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already leveraging these revolutionary AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your AI Journey
            </button>
            <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2025_2026UltimateInnovationShowcase;