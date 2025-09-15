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
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const UltimateContentShowcase2028 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSections = {
    'ai-innovations': {
      title: 'AI Innovations 2028',
      subtitle: 'Revolutionary AI Technologies Transforming Business',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling unprecedented human-AI collaboration',
          features: ['Real-time thought processing', 'Enhanced cognitive abilities', 'Seamless AI integration'],
          icon: Brain,
          stats: '500% efficiency boost'
        },
        {
          title: 'Quantum AI Processing',
          description: 'Quantum-enhanced AI algorithms solving previously impossible problems',
          features: ['Exponential speed improvements', 'Complex pattern recognition', 'Advanced optimization'],
          icon: Zap,
          stats: '1000x faster processing'
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing AI systems that run entire business operations',
          features: ['Complete automation', 'Self-optimization', 'Predictive maintenance'],
          icon: Rocket,
          stats: '99.9% uptime'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'Next-Generation Computing Power',
      icon: Globe,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Practical quantum computers solving real-world business problems',
          features: ['Cryptographic security', 'Optimization algorithms', 'Simulation capabilities'],
          icon: Shield,
          stats: 'Unbreakable encryption'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'AI models running on quantum hardware for unprecedented insights',
          features: ['Quantum neural networks', 'Enhanced pattern recognition', 'Faster training'],
          icon: Target,
          stats: 'Exponential learning speed'
        },
        {
          title: 'Quantum Cloud Services',
          description: 'Access quantum computing power through cloud infrastructure',
          features: ['On-demand quantum access', 'Scalable resources', 'Global availability'],
          icon: Cloud,
          stats: '24/7 quantum access'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies 2030+',
      subtitle: 'Cutting-Edge Innovations Shaping Tomorrow',
      icon: Star,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Synthetic Intelligence',
          description: 'AI systems with consciousness-like capabilities and emotional intelligence',
          features: ['Emotional understanding', 'Creative problem solving', 'Ethical decision making'],
          icon: Lightbulb,
          stats: 'Human-level consciousness'
        },
        {
          title: 'Omniversal Computing',
          description: 'Computing across multiple dimensions and realities',
          features: ['Multi-dimensional processing', 'Reality simulation', 'Infinite scalability'],
          icon: Globe,
          stats: 'Infinite computing power'
        },
        {
          title: 'Transcendent Interfaces',
          description: 'Beyond-screen interfaces using thought, gesture, and presence',
          features: ['Thought control', 'Gesture recognition', 'Presence detection'],
          icon: Smartphone,
          stats: 'Zero-touch interaction'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI innovations from Zion Tech Group have revolutionized our entire business model. We\'ve seen 500% efficiency improvements.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'CEO, Quantum Solutions',
      content: 'Their quantum computing solutions have given us a competitive edge that was previously impossible to achieve.',
      avatar: 'MJ',
      rating: 5
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Research Director, Future Labs',
      content: 'The synthetic intelligence platform has opened doors to research possibilities we never imagined possible.',
      avatar: 'ER',
      rating: 5
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Quantum Operations', value: '1M+', icon: Zap },
    { label: 'Global Enterprises', value: '500+', icon: Globe },
    { label: 'Success Rate', value: '99.9%', icon: Award }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ultimate Content Showcase 2028
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most advanced AI, quantum computing, and future technology innovations 
              that are reshaping the world of business and human potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <Play className="inline-block mr-2" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <BookOpen className="inline-block mr-2" />
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Innovations</h2>
            <p className="text-xl text-gray-300">Choose a category to discover groundbreaking technologies</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(contentSections).map(([key, section]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <section.icon className="inline-block mr-2" />
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {contentSections[activeTab].title}
                </h3>
                <p className="text-xl text-gray-300">
                  {contentSections[activeTab].subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contentSections[activeTab].color} rounded-2xl mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-purple-400 font-semibold text-lg">
                      {item.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentSlide].name}</h4>
                    <p className="text-gray-400">{testimonials[currentSlide].role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic">"{testimonials[currentSlide].content}"</p>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our cutting-edge technologies to achieve unprecedented success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2028;