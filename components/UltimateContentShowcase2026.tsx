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
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSections = {
    'ai-innovations': {
      title: 'Revolutionary AI Innovations 2026',
      subtitle: 'Discover the future of artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces that transform how we interact with technology',
          features: ['Real-time thought processing', 'Enhanced cognitive abilities', 'Seamless human-AI integration'],
          image: '/api/placeholder/400/300',
          category: 'Breakthrough Technology'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with artificial intelligence for unprecedented processing power',
          features: ['Exponential speed improvements', 'Complex problem solving', 'Advanced pattern recognition'],
          image: '/api/placeholder/400/300',
          category: 'Quantum Computing'
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing business operations powered by advanced AI algorithms',
          features: ['Automated decision making', 'Predictive analytics', 'Self-optimizing processes'],
          image: '/api/placeholder/400/300',
          category: 'Business Automation'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology Predictions',
      subtitle: 'What to expect in the next decade',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: '2030 Vision: Transcendent Intelligence',
          description: 'AI systems that surpass human cognitive capabilities across all domains',
          features: ['Superintelligent reasoning', 'Creative problem solving', 'Ethical decision making'],
          image: '/api/placeholder/400/300',
          category: 'AI Evolution'
        },
        {
          title: 'Neural Architecture Revolution',
          description: 'Next-generation neural networks inspired by biological brain structures',
          features: ['Biological-inspired algorithms', 'Enhanced learning capabilities', 'Improved efficiency'],
          image: '/api/placeholder/400/300',
          category: 'Neural Networks'
        },
        {
          title: 'Multimodal AI Systems',
          description: 'AI that seamlessly processes and understands multiple data types simultaneously',
          features: ['Text, image, and audio processing', 'Contextual understanding', 'Cross-modal learning'],
          image: '/api/placeholder/400/300',
          category: 'Multimodal AI'
        }
      ]
    },
    'business-solutions': {
      title: 'Enterprise AI Solutions',
      subtitle: 'Transform your business with cutting-edge AI',
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'AI-Powered Business Automation',
          description: 'Complete business process automation using advanced AI systems',
          features: ['End-to-end automation', 'Intelligent workflow optimization', 'Real-time monitoring'],
          image: '/api/placeholder/400/300',
          category: 'Business Automation'
        },
        {
          title: 'Predictive Analytics Platform',
          description: 'Advanced forecasting and trend analysis for strategic decision making',
          features: ['Market trend prediction', 'Customer behavior analysis', 'Risk assessment'],
          image: '/api/placeholder/400/300',
          category: 'Analytics'
        },
        {
          title: 'Intelligent Customer Service',
          description: 'AI-powered customer support that provides personalized assistance',
          features: ['Natural language processing', 'Emotional intelligence', '24/7 availability'],
          image: '/api/placeholder/400/300',
          category: 'Customer Experience'
        }
      ]
    }
  };

  const tabs = [
    { id: 'ai-innovations', label: 'AI Innovations', icon: Brain },
    { id: 'future-tech', label: 'Future Tech', icon: Rocket },
    { id: 'business-solutions', label: 'Business Solutions', icon: Target }
  ];

  const currentSection = contentSections[activeTab as keyof typeof contentSections];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentSection.content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, currentSection.content.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {currentSection.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentSection.subtitle}
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
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content Carousel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {currentSection.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <currentSection.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors group">
                      <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Learn More
                    </button>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {currentSection.content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking businesses already transforming their operations with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                Start Your Journey
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;