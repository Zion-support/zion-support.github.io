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
  Code,
  Shield,
  Target,
  Lightbulb
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling thought-controlled computing',
          type: 'Video',
          duration: '12 min',
          views: '2.3M',
          rating: 4.9
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Merging quantum computing with artificial intelligence for unprecedented processing power',
          type: 'Article',
          duration: '8 min read',
          views: '1.8M',
          rating: 4.8
        },
        {
          title: 'Synthetic Intelligence Evolution',
          description: 'Next-generation AI systems that think and learn like biological organisms',
          type: 'Interactive Demo',
          duration: '15 min',
          views: '3.1M',
          rating: 4.9
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Automation Solutions',
      icon: Zap,
      color: 'from-green-600 to-teal-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with zero human intervention',
          type: 'Case Study',
          duration: '10 min read',
          views: '1.5M',
          rating: 4.7
        },
        {
          title: 'Intelligent Workflow Orchestration',
          description: 'AI-powered workflow management that adapts and optimizes in real-time',
          type: 'Tutorial',
          duration: '20 min',
          views: '2.1M',
          rating: 4.8
        },
        {
          title: 'Predictive Process Optimization',
          description: 'Machine learning algorithms that predict and prevent process bottlenecks',
          type: 'Webinar',
          duration: '45 min',
          views: '950K',
          rating: 4.6
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Revolutionary computing architecture combining quantum mechanics with neural processing',
          type: 'Research Paper',
          duration: '25 min read',
          views: '1.2M',
          rating: 4.9
        },
        {
          title: 'Quantum Supremacy Applications',
          description: 'Practical applications of quantum computing in real-world scenarios',
          type: 'Interactive Lab',
          duration: '30 min',
          views: '800K',
          rating: 4.7
        },
        {
          title: 'Quantum-Enhanced AI',
          description: 'AI systems powered by quantum computing for exponential performance gains',
          type: 'Demo',
          duration: '18 min',
          views: '1.6M',
          rating: 4.8
        }
      ]
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Star,
      color: 'from-pink-600 to-purple-600',
      content: [
        {
          title: 'Consciousness Upload Technology',
          description: 'Digital consciousness transfer and preservation technology',
          type: 'Documentary',
          duration: '60 min',
          views: '4.2M',
          rating: 4.9
        },
        {
          title: 'Omniversal Computing',
          description: 'Computing across multiple dimensions and realities',
          type: 'Concept Video',
          duration: '22 min',
          views: '2.8M',
          rating: 4.8
        },
        {
          title: 'Temporal AI Systems',
          description: 'AI that operates across different time dimensions',
          type: 'Interactive Experience',
          duration: '35 min',
          views: '1.9M',
          rating: 4.7
        }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return Play;
      case 'Article': return BookOpen;
      case 'Interactive Demo': return Code;
      case 'Case Study': return Target;
      case 'Tutorial': return Lightbulb;
      case 'Webinar': return Users;
      case 'Research Paper': return Globe;
      case 'Interactive Lab': return Shield;
      case 'Demo': return Rocket;
      case 'Documentary': return Play;
      case 'Concept Video': return Sparkles;
      case 'Interactive Experience': return Brain;
      default: return BookOpen;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Content Universe
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the most advanced AI, quantum computing, and future technology content 
            that's reshaping our understanding of what's possible.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" />
                  {category.title}
                </div>
                
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
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
            {contentCategories[activeTab].content.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  {/* Content Type Badge */}
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-4">
                    <TypeIcon className="w-4 h-4" />
                    {item.type}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {item.views}
                      </span>
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {item.rating}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    Explore Content
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of innovators, researchers, and visionaries who are already 
              experiencing the next generation of content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;