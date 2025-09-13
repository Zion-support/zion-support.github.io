'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Globe,
  Shield,
  Target
} from 'lucide-react';

const NewContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2025',
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
          title: 'Emotional AI Systems',
          description: 'AI that understands and responds to human emotions with 99.9% accuracy',
          impact: 'Revolutionary user experience',
          status: 'Coming Soon'
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with zero human intervention',
          impact: '90% cost reduction',
          status: 'Deployed'
        },
        {
          title: 'Smart Workflow Orchestration',
          description: 'AI-powered workflow management that adapts and optimizes in real-time',
          impact: '300% efficiency boost',
          status: 'Live Now'
        },
        {
          title: 'Predictive Maintenance AI',
          description: 'Prevent equipment failures before they happen with advanced ML models',
          impact: '99.9% uptime achieved',
          status: 'Pilot Program'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Breakthrough quantum algorithms solving previously impossible problems',
          impact: 'Exponential speed gains',
          status: 'Revolutionary'
        },
        {
          title: 'Quantum Security Networks',
          description: 'Unbreakable encryption using quantum key distribution',
          impact: '100% secure communications',
          status: 'Production Ready'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'ML algorithms running on quantum processors for superior performance',
          impact: 'Breakthrough insights',
          status: 'Research Phase'
        }
      ]
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Holographic Interfaces',
          description: '3D holographic displays for immersive user experiences',
          impact: 'Next-gen interaction',
          status: 'Prototype Ready'
        },
        {
          title: 'Neural Implants',
          description: 'Brain-computer interfaces for enhanced cognitive abilities',
          impact: 'Human augmentation',
          status: 'Clinical Trials'
        },
        {
          title: 'Time Crystal Computing',
          description: 'Revolutionary computing using time crystals for infinite processing',
          impact: 'Unlimited potential',
          status: 'Theoretical'
        }
      ]
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2.5M+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Global Reach', value: '150+', icon: Globe },
    { label: 'Awards Won', value: '47', icon: Award }
  ];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            New Content 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technologies and innovations that are reshaping our world in 2025. 
            From AI breakthroughs to quantum computing, explore the future today.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <section.icon className="w-5 h-5" />
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                <contentSections[activeTab].icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {contentSections[activeTab].title}
                </h3>
                <p className="text-gray-300">
                  Explore the latest innovations in {contentSections[activeTab].title.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contentSections[activeTab].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Live Now' || item.status === 'Deployed' || item.status === 'Production Ready'
                        ? 'bg-green-500/20 text-green-400'
                        : item.status === 'Beta Testing' || item.status === 'Pilot Program'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-purple-400 font-medium">
                    <Target className="w-4 h-4" />
                    {item.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging these revolutionary technologies. 
              Get early access to our latest innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Star className="w-5 h-5" />
                Get Early Access
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;