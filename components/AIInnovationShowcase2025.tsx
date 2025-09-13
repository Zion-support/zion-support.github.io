'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Database,
  Shield
} from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Neural Architecture Revolution",
      description: "Advanced AI models with 1000x processing power",
      stats: "99.9% Accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum AI Fusion",
      description: "Quantum computing meets artificial intelligence",
      stats: "10x Faster Processing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market trends with unprecedented accuracy",
      stats: "95% Prediction Rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaborative AI",
      description: "AI systems that work seamlessly with human teams",
      stats: "50% Productivity Boost",
      color: "from-orange-500 to-red-500"
    }
  ];

  const innovations = [
    {
      category: "Machine Learning",
      title: "Self-Improving Algorithms",
      description: "AI systems that continuously evolve and optimize themselves",
      icon: Cpu,
      impact: "Revolutionary"
    },
    {
      category: "Natural Language Processing",
      title: "Contextual Understanding",
      description: "AI that understands context, emotion, and nuance",
      icon: Brain,
      impact: "Breakthrough"
    },
    {
      category: "Computer Vision",
      title: "Real-time Analysis",
      description: "Instant visual recognition and processing capabilities",
      icon: Eye,
      impact: "Game-changing"
    },
    {
      category: "Data Science",
      title: "Intelligent Insights",
      description: "Automated discovery of patterns and correlations",
      icon: Database,
      impact: "Transformative"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI Innovation Showcase 2025
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover revolutionary AI technologies that are transforming industries and reshaping the digital landscape
          </p>
        </motion.div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Revolutionary Features
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 ${
                    currentFeature === index ? 'scale-105 bg-white/20' : 'hover:bg-white/15'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col justify-center items-center text-center"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} mb-6`}>
                    <features[currentFeature].icon className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    {features[currentFeature].description}
                  </p>
                  <div className="text-4xl font-bold text-white">
                    {features[currentFeature].stats}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Innovation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Innovations
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the latest breakthroughs in AI technology that are setting new industry standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <innovation.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-purple-300 text-sm font-semibold">
                      {innovation.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {innovation.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {innovation.impact}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI innovations to achieve unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025;