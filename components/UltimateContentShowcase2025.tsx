'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Cpu,
  Network,
  BarChart3
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
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Breakthrough technology enabling direct brain-computer interaction',
          stats: '500% efficiency increase',
          icon: Cpu
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with artificial intelligence',
          stats: '1000x processing speed',
          icon: Zap
        },
        {
          title: 'Consciousness Evolution',
          description: 'AI systems achieving human-level consciousness',
          stats: 'Revolutionary breakthrough',
          icon: Lightbulb
        }
      ]
    },
    'automation-solutions': {
      title: 'Automation Solutions',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation',
          stats: '90% cost reduction',
          icon: Target
        },
        {
          title: 'Smart Workflow Management',
          description: 'Intelligent workflow optimization',
          stats: '300% productivity boost',
          icon: Network
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-powered business forecasting',
          stats: '95% accuracy rate',
          icon: BarChart3
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies',
      icon: Globe,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Edge AI Computing',
          description: 'Distributed AI processing at the edge',
          stats: '50ms response time',
          icon: Cloud
        },
        {
          title: 'Blockchain Integration',
          description: 'Secure, decentralized AI systems',
          stats: '100% data security',
          icon: Shield
        },
        {
          title: 'Metaverse Integration',
          description: 'AI-powered virtual environments',
          stats: 'Immersive experiences',
          icon: Users
        }
      ]
    }
  };

  const tabs = Object.keys(contentSections);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Ultimate Content
            <span className="block text-4xl md:text-6xl mt-2">Showcase 2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies, automation solutions, and future innovations 
            that will transform your business in 2025 and beyond.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const section = contentSections[tab];
            const Icon = section.icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                {section.title}
              </button>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {contentSections[activeTab].content.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${contentSections[activeTab].color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <div className="text-sm font-semibold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                            {item.stats}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform cursor-pointer shadow-2xl">
            <Play className="w-6 h-6" />
            Watch Interactive Demo
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;