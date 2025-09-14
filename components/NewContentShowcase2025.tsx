'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Zap, 
  Brain, 
  Rocket,
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
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
      id: 'ai-innovations',
      title: 'AI Innovations 2025',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Revolutionary AI Breakthroughs',
          description: 'Discover the latest AI technologies that are transforming industries worldwide.',
          stats: '500+ New AI Models',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Quantum AI Integration',
          description: 'Explore how quantum computing is enhancing AI capabilities.',
          stats: '10x Performance Boost',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Neural Interface Technology',
          description: 'The future of human-AI interaction through advanced neural interfaces.',
          stats: '95% Accuracy Rate',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Enterprise Automation',
          description: 'Complete automation solutions for modern businesses.',
          stats: '60% Cost Reduction',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'AI-Powered Analytics',
          description: 'Advanced analytics powered by artificial intelligence.',
          stats: '300% ROI Increase',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Smart Workflow Management',
          description: 'Intelligent workflow optimization for maximum efficiency.',
          stats: '80% Time Savings',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Edge Computing Revolution',
          description: 'Next-generation edge computing for real-time processing.',
          stats: '50ms Response Time',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Blockchain Integration',
          description: 'Secure and transparent blockchain solutions.',
          stats: '99.9% Uptime',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'IoT Smart Systems',
          description: 'Intelligent Internet of Things solutions.',
          stats: '1M+ Connected Devices',
          image: '/api/placeholder/400/300'
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

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            New Content 2025
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge innovations, breakthrough technologies, and transformative solutions 
            that are shaping the future of business and technology.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12" variants={itemVariants}>
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {contentSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentSections[activeTab].content.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                whileHover={{ y: -5, scale: 1.02 }}
                variants={itemVariants}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} flex items-center justify-center mb-4`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.stats}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Play className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <BookOpen className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already using our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContentShowcase2025;