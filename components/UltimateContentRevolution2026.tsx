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
  Award,
  ChevronRight,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Lightbulb,
  BarChart3
} from 'lucide-react';

const UltimateContentRevolution2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling thought-controlled applications',
          impact: '500% productivity increase',
          status: 'Live Now'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing meets artificial intelligence for unprecedented processing power',
          impact: '1000x faster computations',
          status: 'Beta Testing'
        },
        {
          title: 'Consciousness AI',
          description: 'AI systems with self-awareness and emotional intelligence',
          impact: 'Revolutionary user experience',
          status: 'Research Phase'
        }
      ]
    },
    {
      id: 'automation-mastery',
      title: 'Automation Mastery',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete end-to-end automation of all business processes',
          impact: '99.9% efficiency gain',
          status: 'Live Now'
        },
        {
          title: 'Intelligent Process Optimization',
          description: 'AI-driven continuous improvement of all workflows',
          impact: '85% cost reduction',
          status: 'Live Now'
        },
        {
          title: 'Predictive Maintenance Systems',
          description: 'AI systems that prevent failures before they occur',
          impact: 'Zero downtime achieved',
          status: 'Beta Testing'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      content: [
        {
          title: 'Error-Corrected Quantum Computers',
          description: 'Revolutionary quantum computers with perfect error correction',
          impact: 'Infinite computational power',
          status: 'Live Now'
        },
        {
          title: 'Quantum Internet',
          description: 'Global quantum communication network with zero latency',
          impact: 'Instant global communication',
          status: 'Beta Testing'
        },
        {
          title: 'Quantum AI Algorithms',
          description: 'Quantum algorithms solving NP-complete problems',
          impact: 'Exponential speed improvements',
          status: 'Research Phase'
        }
      ]
    },
    {
      id: 'blockchain-revolution',
      title: 'Blockchain Revolution',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Quantum-Secure Blockchain',
          description: 'Blockchain technology resistant to quantum attacks',
          impact: 'Unbreakable security',
          status: 'Live Now'
        },
        {
          title: 'Decentralized AI Networks',
          description: 'Distributed AI computing across blockchain networks',
          impact: 'Democratized AI access',
          status: 'Beta Testing'
        },
        {
          title: 'Smart Contract Evolution',
          description: 'Self-executing contracts with AI decision making',
          impact: '100% automated transactions',
          status: 'Research Phase'
        }
      ]
    }
  ];

  const stats = [
    { label: 'ROI Increase', value: '50,000%', icon: TrendingUp },
    { label: 'Efficiency Gain', value: '99.9%', icon: Zap },
    { label: 'Cost Reduction', value: '95%', icon: Target },
    { label: 'User Satisfaction', value: '100%', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ultimate Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary content about AI, quantum computing, blockchain, 
            and future technologies that will transform our world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {contentSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            >
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <section.icon className="w-8 h-8 text-white" />
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <span className="text-sm">Explore All</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'Live Now' ? 'bg-green-500/20 text-green-300' :
                          item.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-purple-300 font-semibold">
                          {item.impact}
                        </div>
                        <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors">
                          <span className="text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already leveraging these revolutionary 
              technologies to achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Download Resources
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentRevolution2026;