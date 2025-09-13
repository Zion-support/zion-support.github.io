'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  ChevronRight
} from 'lucide-react';

const UltimateContentShowcase2029 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2029',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Conscious AI Systems',
          description: 'Revolutionary AI that demonstrates self-awareness and emotional intelligence',
          impact: '500% productivity increase',
          category: 'Breakthrough'
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Next-generation AI powered by quantum computing principles',
          impact: '1000x processing speed',
          category: 'Innovation'
        },
        {
          title: 'Autonomous Business AI',
          description: 'AI systems that can run entire business operations independently',
          impact: '90% cost reduction',
          category: 'Transformation'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Practical quantum computers solving real-world problems',
          impact: 'Exponential speed gains',
          category: 'Revolution'
        },
        {
          title: 'Quantum Internet',
          description: 'Ultra-secure quantum communication networks',
          impact: 'Unbreakable security',
          category: 'Security'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'AI systems enhanced by quantum computing power',
          impact: 'Unprecedented capabilities',
          category: 'Fusion'
        }
      ]
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Brain-Computer Integration',
          description: 'Direct neural interfaces for seamless human-AI interaction',
          impact: 'Thought-to-action control',
          category: 'Integration'
        },
        {
          title: 'Consciousness Upload',
          description: 'Digital preservation of human consciousness',
          impact: 'Digital immortality',
          category: 'Transcendence'
        },
        {
          title: 'Neural Enhancement',
          description: 'Cognitive augmentation through neural interfaces',
          impact: 'Superhuman abilities',
          category: 'Enhancement'
        }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology 2029',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Mars Colonization',
          description: 'First permanent human settlements on Mars',
          impact: 'Multi-planetary species',
          category: 'Exploration'
        },
        {
          title: 'Space Manufacturing',
          description: 'Zero-gravity manufacturing facilities in orbit',
          impact: 'Revolutionary materials',
          category: 'Industry'
        },
        {
          title: 'Interstellar Probes',
          description: 'AI-powered probes exploring nearby star systems',
          impact: 'Galactic exploration',
          category: 'Discovery'
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Breakthroughs', value: '500+', icon: Brain },
    { label: 'Quantum Innovations', value: '100+', icon: Zap },
    { label: 'Neural Interfaces', value: '50+', icon: Users },
    { label: 'Space Missions', value: '25+', icon: Rocket }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
              'linear-gradient(225deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
              'linear-gradient(315deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2029
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore groundbreaking technologies and innovations that will reshape our world in 2029 and beyond
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <section.icon className="w-5 h-5" />
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
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                  <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {contentSections[activeTab].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {item.impact}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join us in building the technologies that will define the next decade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2029;