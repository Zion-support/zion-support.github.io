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

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      id: 'ai-innovations',
      title: 'AI Innovations 2026',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Breakthrough brain-computer interfaces enabling direct neural communication',
          type: 'Video',
          duration: '15 min',
          views: '2.3M',
          rating: 4.9
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Revolutionary quantum computing integration with artificial intelligence',
          type: 'Article',
          duration: '8 min read',
          views: '1.8M',
          rating: 4.8
        },
        {
          title: 'Consciousness AI Systems',
          description: 'Next-generation AI with self-awareness and emotional intelligence',
          type: 'Interactive',
          duration: '25 min',
          views: '3.1M',
          rating: 4.9
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
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with zero human intervention',
          type: 'Case Study',
          duration: '12 min read',
          views: '1.5M',
          rating: 4.7
        },
        {
          title: 'Smart Manufacturing 4.0',
          description: 'AI-powered manufacturing with predictive maintenance and optimization',
          type: 'Video',
          duration: '20 min',
          views: '2.1M',
          rating: 4.8
        },
        {
          title: 'Intelligent Workflow Automation',
          description: 'Dynamic workflow optimization using machine learning algorithms',
          type: 'Tutorial',
          duration: '30 min',
          views: '1.9M',
          rating: 4.6
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
          title: 'Quantum Computing Breakthroughs',
          description: 'Revolutionary quantum algorithms solving previously impossible problems',
          type: 'Research',
          duration: '45 min read',
          views: '1.2M',
          rating: 4.9
        },
        {
          title: 'Space Technology Integration',
          description: 'AI systems for space exploration and interplanetary communication',
          type: 'Documentary',
          duration: '60 min',
          views: '2.8M',
          rating: 4.8
        },
        {
          title: 'Biotech AI Convergence',
          description: 'Artificial intelligence revolutionizing biotechnology and medicine',
          type: 'Interactive',
          duration: '35 min',
          views: '1.7M',
          rating: 4.7
        }
      ]
    }
  ];

  const activeCategory = contentCategories.find(cat => cat.id === activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Content Hub
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI innovations, automation solutions, and future technologies 
            that are reshaping our world in 2026 and beyond.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeCategory?.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Content Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/60" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {item.duration}
                  </div>
                </div>

                {/* Content Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{item.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators, entrepreneurs, and visionaries who are already 
              leveraging these revolutionary technologies to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Journey
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
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

export default UltimateContentShowcase2026;