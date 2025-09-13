'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  ArrowUp, 
  Crosshair, 
  TrendingUp,
  Users,
  Award,
  Globe,
  Shield,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Star
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
          title: 'Revolutionary AI Consciousness Platform',
          description: 'Experience the next generation of AI that understands context, emotion, and intent like never before.',
          features: ['Emotional Intelligence', 'Contextual Understanding', 'Predictive Analytics'],
          image: '/api/placeholder/400/300',
          badge: 'BREAKTHROUGH'
        },
        {
          title: 'Quantum-Neural Fusion Technology',
          description: 'Combining quantum computing with neural networks for unprecedented processing power.',
          features: ['Quantum Processing', 'Neural Optimization', 'Real-time Learning'],
          image: '/api/placeholder/400/300',
          badge: 'EXCLUSIVE'
        },
        {
          title: 'Autonomous Business Intelligence',
          description: 'AI systems that make complex business decisions autonomously with human-level reasoning.',
          features: ['Strategic Planning', 'Risk Assessment', 'Market Analysis'],
          image: '/api/placeholder/400/300',
          badge: 'NEW'
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Automation Solutions',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Enterprise Workflow Automation',
          description: 'Streamline complex business processes with intelligent automation that adapts to your needs.',
          features: ['Process Optimization', 'Smart Routing', 'Performance Analytics'],
          image: '/api/placeholder/400/300',
          badge: 'POPULAR'
        },
        {
          title: 'AI-Powered Customer Service',
          description: 'Revolutionary customer service automation that provides human-like interactions at scale.',
          features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-channel Support'],
          image: '/api/placeholder/400/300',
          badge: 'TRENDING'
        },
        {
          title: 'Intelligent Document Processing',
          description: 'Automatically extract, analyze, and process documents with 99.9% accuracy.',
          features: ['OCR Technology', 'Data Extraction', 'Smart Classification'],
          image: '/api/placeholder/400/300',
          badge: 'FEATURED'
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
          title: 'Neural Interface Development',
          description: 'Direct brain-computer interfaces that enable seamless human-AI collaboration.',
          features: ['Brain Signal Processing', 'Thought-to-Text', 'Enhanced Cognition'],
          image: '/api/placeholder/400/300',
          badge: 'FUTURE'
        },
        {
          title: 'Edge AI Computing',
          description: 'Distributed AI processing that brings intelligence to every device and sensor.',
          features: ['Real-time Processing', 'Low Latency', 'Privacy-First'],
          image: '/api/placeholder/400/300',
          badge: 'INNOVATIVE'
        },
        {
          title: 'Synthetic Intelligence Platform',
          description: 'Creating artificial minds that can think, learn, and create independently.',
          features: ['Creative Problem Solving', 'Independent Learning', 'Ethical AI'],
          image: '/api/placeholder/400/300',
          badge: 'REVOLUTIONARY'
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Businesses Transformed', value: '5,000+', icon: Users },
    { label: 'Automation Efficiency', value: '95%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, automation, and future technologies that are reshaping industries and transforming the way we work.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <section.icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {contentSections[activeTab].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.badge === 'BREAKTHROUGH' ? 'bg-red-500 text-white' :
                        item.badge === 'EXCLUSIVE' ? 'bg-purple-500 text-white' :
                        item.badge === 'NEW' ? 'bg-green-500 text-white' :
                        item.badge === 'POPULAR' ? 'bg-blue-500 text-white' :
                        item.badge === 'TRENDING' ? 'bg-orange-500 text-white' :
                        item.badge === 'FEATURED' ? 'bg-pink-500 text-white' :
                        item.badge === 'FUTURE' ? 'bg-indigo-500 text-white' :
                        item.badge === 'INNOVATIVE' ? 'bg-teal-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our revolutionary AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;