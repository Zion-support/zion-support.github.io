'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Brain, Globe, Shield } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-innovations',
      title: 'AI Innovations 2025',
      description: 'Revolutionary AI solutions transforming industries',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling unprecedented human-AI collaboration',
          stats: '99.7% accuracy',
          featured: true
        },
        {
          title: 'Quantum AI Processing',
          description: 'Quantum-enhanced AI algorithms solving previously impossible problems',
          stats: '1000x faster',
          featured: true
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing AI systems that optimize operations without human intervention',
          stats: '85% cost reduction',
          featured: false
        },
        {
          title: 'Predictive Analytics 2.0',
          description: 'Next-generation predictive models with 99.9% accuracy',
          stats: '99.9% accuracy',
          featured: false
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Breakthrough quantum solutions for enterprise',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Hybrid quantum-classical neural networks for superior performance',
          stats: '10x speedup',
          featured: true
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          stats: '100% secure',
          featured: true
        },
        {
          title: 'Quantum Optimization',
          description: 'Solving complex optimization problems in seconds',
          stats: '1000x faster',
          featured: false
        },
        {
          title: 'Quantum Machine Learning',
          description: 'ML algorithms running on quantum hardware',
          stats: 'Exponential speedup',
          featured: false
        }
      ]
    },
    {
      id: 'automation',
      title: 'Advanced Automation',
      description: 'Intelligent automation for modern businesses',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Hyper-Automation Platform',
          description: 'End-to-end business process automation with AI',
          stats: '95% efficiency',
          featured: true
        },
        {
          title: 'Intelligent Document Processing',
          description: 'AI-powered document understanding and processing',
          stats: '99% accuracy',
          featured: true
        },
        {
          title: 'Autonomous Decision Making',
          description: 'AI systems making complex business decisions',
          stats: '80% faster',
          featured: false
        },
        {
          title: 'Smart Workflow Orchestration',
          description: 'Intelligent workflow management and optimization',
          stats: '90% time saved',
          featured: false
        }
      ]
    },
    {
      id: 'security',
      title: 'Advanced Security',
      description: 'Next-generation cybersecurity solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      content: [
        {
          title: 'AI-Powered Threat Detection',
          description: 'Real-time threat detection using advanced AI',
          stats: '99.9% detection',
          featured: true
        },
        {
          title: 'Zero-Trust Architecture',
          description: 'Comprehensive zero-trust security implementation',
          stats: '100% coverage',
          featured: true
        },
        {
          title: 'Quantum-Safe Encryption',
          description: 'Future-proof encryption resistant to quantum attacks',
          stats: 'Quantum-safe',
          featured: false
        },
        {
          title: 'Behavioral Analytics',
          description: 'AI-driven user behavior analysis for security',
          stats: 'Real-time',
          featured: false
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">2025 Ultimate Showcase</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI, quantum computing, and automation solutions 
            that are reshaping the future of business and technology.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{section.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Featured Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {contentSections[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {contentSections[activeTab].description}
                </p>
                
                <div className="space-y-4">
                  {contentSections[activeTab].content
                    .filter(item => item.featured)
                    .map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-300 mb-3">
                              {item.description}
                            </p>
                          </div>
                          <div className="ml-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                            <span className="text-white font-medium text-sm">
                              {item.stats}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Additional Content Grid */}
              <div className="grid grid-cols-2 gap-4">
                {contentSections[activeTab].content
                  .filter(item => !item.featured)
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h5>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="text-xs text-purple-300 font-medium">
                        {item.stats}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UltimateContentShowcase2025;