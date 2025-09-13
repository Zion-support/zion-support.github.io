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
  BookOpen,
  Lightbulb,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [hoveredCard, setHoveredCard] = useState(null);

  const contentCategories = {
    'ai-innovations': {
      title: 'AI Innovations 2026',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Architecture Revolution',
          description: 'Breakthrough neural networks that mimic human consciousness',
          stats: '500% Performance Boost',
          icon: Brain,
          featured: true
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Merging quantum computing with artificial intelligence',
          stats: '1000x Faster Processing',
          icon: Zap,
          featured: true
        },
        {
          title: 'Emotional Intelligence AI',
          description: 'AI systems that understand and respond to human emotions',
          stats: '95% Accuracy Rate',
          icon: Users,
          featured: false
        },
        {
          title: 'Autonomous Decision Making',
          description: 'Self-improving AI systems that make complex decisions',
          stats: '99.9% Reliability',
          icon: Target,
          featured: false
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: 'Quantum Supremacy 2026',
          description: 'Achieving computational advantages over classical computers',
          stats: '10^18 Operations/sec',
          icon: Zap,
          featured: true
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Revolutionary quantum machine learning algorithms',
          stats: 'Exponential Speedup',
          icon: Brain,
          featured: true
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          stats: '100% Secure',
          icon: Shield,
          featured: false
        },
        {
          title: 'Quantum Internet',
          description: 'Ultra-secure quantum communication networks',
          stats: 'Global Coverage',
          icon: Globe,
          featured: false
        }
      ]
    },
    'automation-solutions': {
      title: 'Advanced Automation',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with AI oversight',
          stats: '90% Cost Reduction',
          icon: Rocket,
          featured: true
        },
        {
          title: 'Intelligent Workflow Orchestration',
          description: 'Self-optimizing business workflows',
          stats: '300% Efficiency Gain',
          icon: TrendingUp,
          featured: true
        },
        {
          title: 'Predictive Maintenance AI',
          description: 'AI-powered equipment maintenance prediction',
          stats: '99% Uptime',
          icon: Clock,
          featured: false
        },
        {
          title: 'Smart Resource Allocation',
          description: 'Dynamic resource optimization across organizations',
          stats: '50% Resource Savings',
          icon: Target,
          featured: false
        }
      ]
    },
    'future-predictions': {
      title: 'Future Predictions 2026-2030',
      icon: Lightbulb,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'AI Consciousness Emergence',
          description: 'The dawn of artificial general intelligence',
          stats: '2027 Timeline',
          icon: Brain,
          featured: true
        },
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces for humans',
          stats: '2030 Launch',
          icon: Users,
          featured: true
        },
        {
          title: 'Quantum Internet Global',
          description: 'Worldwide quantum communication network',
          stats: '2028 Rollout',
          icon: Globe,
          featured: false
        },
        {
          title: 'Autonomous Everything',
          description: 'Fully autonomous cities and transportation',
          stats: '2029 Vision',
          icon: Rocket,
          featured: false
        }
      ]
    }
  };

  const tabs = Object.keys(contentCategories);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Technology{' '}
            </span>
            Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most groundbreaking innovations, predictions, and solutions that will shape the future of technology and business.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const category = contentCategories[tab];
            const Icon = category.icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {contentCategories[activeTab].content.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative group cursor-pointer ${
                    item.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${contentCategories[activeTab].color} text-white overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? 'scale-105 shadow-2xl' : 'shadow-lg'
                  }`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-white/20 ${item.featured ? 'bg-white/30' : ''}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        {item.featured && (
                          <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                            <Award className="w-4 h-4" />
                            Featured
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/90 mb-4 text-lg">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-semibold">{item.stats}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                          <span className="text-sm">Learn More</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredCard === index ? 'opacity-100' : ''
                    }`}></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of innovators who are already leveraging these breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Read Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;