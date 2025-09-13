'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Globe,
  Award,
  Star,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Shield,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'AI Innovations 2025',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Breakthrough technology enabling direct brain-computer interaction',
          stats: '95% accuracy in thought-to-text conversion',
          icon: Brain
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with artificial intelligence',
          stats: '1000x faster processing speeds',
          icon: Zap
        },
        {
          title: 'Consciousness Simulation',
          description: 'Advanced AI systems with self-awareness capabilities',
          stats: '99.7% human-like responses',
          icon: Sparkles
        }
      ]
    },
    'automation': {
      title: 'Advanced Automation',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with minimal human intervention',
          stats: '85% reduction in operational costs',
          icon: Target
        },
        {
          title: 'Smart Workflow Orchestration',
          description: 'Intelligent task management and resource allocation',
          stats: '300% increase in productivity',
          icon: TrendingUp
        },
        {
          title: 'Predictive Maintenance Systems',
          description: 'AI-powered equipment monitoring and maintenance scheduling',
          stats: '90% reduction in downtime',
          icon: Shield
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Breakthrough in quantum computational power',
          stats: '10^18 operations per second',
          icon: Zap
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Revolutionary algorithms for pattern recognition',
          stats: 'Exponential speedup in training',
          icon: Brain
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption for secure communications',
          stats: '100% quantum-safe security',
          icon: Shield
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      content: [
        {
          title: 'Holographic Displays',
          description: '3D holographic interfaces for immersive experiences',
          stats: '4K resolution at 120fps',
          icon: Globe
        },
        {
          title: 'Teleportation Research',
          description: 'Quantum entanglement for instant matter transport',
          stats: '99.9% matter integrity preservation',
          icon: Rocket
        },
        {
          title: 'Time Dilation Technology',
          description: 'Controlled time manipulation for enhanced processing',
          stats: '10x time compression achieved',
          icon: Clock
        }
      ]
    }
  };

  const tabs = Object.entries(contentSections).map(([key, section]) => ({
    key,
    ...section
  }));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Ultimate Content Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary technologies and innovations that will shape the future of humanity
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center text-yellow-400">
              <Star className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">5.0 Rating</span>
            </div>
            <div className="flex items-center text-green-400">
              <Users className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">1M+ Users</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Award className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Industry Leader</span>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentSections[activeTab as keyof typeof contentSections].content.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${contentSections[activeTab as keyof typeof contentSections].color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                      {item.stats}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 group">
                      <span className="mr-1">Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join millions of innovators, entrepreneurs, and visionaries who are already transforming their businesses with cutting-edge AI and automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;