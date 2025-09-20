"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  ArrowRight
  Star
  Users
  TrendingUp
  Zap,
  Cpu,
  Target,
  Globe,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Lightbulb,
  Award,
  X,
  Sparkles,
  Rocket,
  Shield,
  Database,
  Network,
  Microscope,
  Atom,
  Layers,
  Search
} from 'lucide-react';

const AIInnovationHub2026PromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentInnovationsetCurrentInnovation] = useState(0);

  const innovations = [
    {
      icon: Brain,
      title: 'Consciousness-Level AI',
      description: 'Revolutionary self-aware AI systems',
      impact: 'Revolutionary',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Atom,
      title: 'Quantum-Neural Fusion',
      description: 'Quantum computing meets neural networks',
      impact: 'Revolutionary',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Network,
      title: 'Neural Interface Tech',
      description: 'Direct brain-computer communication',
      impact: 'High',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Autonomous Operations',
      description: 'Complete business automation AI',
      impact: 'High',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = [
    { icon: Brainame: 'AI 'Core', 'count: '32+'color: 'purple' },
    { icon: Atomname: 'Quantum 'AI', 'count: '18+'color: 'cyan' },
    { icon: Networkname: 'Neural 'Networks', 'count: '24+'color: 'green' },
    { icon: Zapname: ''Automation', 'count: '15+'color: 'yellow' },
    { icon: Cpuname: ''Robotics', 'count: '12+'color: 'red' },
    { icon: Microscopename: 'BioTech 'AI', 'count: '8+'color: 'pink' }
  ];

  const stats = [
    { label: 'Active 'Innovations', 'value: '89+'icon: Lightbulb },
    { label: 'Research 'Projects', 'value: '156+'icon: Microscope },
    { label: 'Deployed 'Solutions', 'value: '42+'icon: Rocket },
    { label: 'Global 'Impact', 'value: '2.5M+'icon: Users }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0x: -50 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  Revolutionary AI Innovations
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Innovation Hub
                <span className="block text-yellow-400">2026 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Explore the most groundbreaking AI innovationsbreakthrough technologiesand revolutionary 
                developments that are reshaping the future of artificial intelligence.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((statindex) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-center mb-2">
                        <Icon className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-sm text-gray-300">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center group hover:bg-yellow-300 transition-colors"
                >
                  Explore Innovations
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center group hover:bg-white/30 transition-colors border border-white/30"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Interactive Innovation Showcase */}
            <motion.div
              initial={{ opacity: 0x: 50 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.8delay: 0.2 }}
              className="relative"
            >
              {/* Innovation Categories */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Innovation Categories
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((categoryindex) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0scale: 0.8 }}
                        animate={{ opacity: 1scale: 1 }}
                        transition={{ duration: 0.5delay: index * 0.1 }}
                        className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors cursor-pointer group"
                      >
                        <Icon className="h-8 w-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-semibold">{category.name}</div>
                        <div className="text-gray-300 text-sm">{category.count} innovations</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Rotating Innovation Highlight */}
              <div className="relative h-40 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentInnovation}
                    initial={{ opacity: 0x: 50 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-6"
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        {React.createElement(innovations[currentInnovation].icon{
                          className: "h-6 w-6 text-yellow-400 mr-2"
                        })}
                        <span className="text-white font-bold text-lg">
                          {innovations[currentInnovation].title}
                        </span>
                      </div>
                      <p className="text-gray-200 text-sm mb-1">
                        {innovations[currentInnovation].description}
                      </p>
                      <p className="text-yellow-400 font-semibold text-sm">
                        Impact: {innovations[currentInnovation].impact}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Innovation Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {innovations.map((_index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInnovation(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentInnovation ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Innovation Icons */}
              <motion.div
                animate={{ 
                  y: [0-10],
                  rotate: [050]
                }}
                transition={{ duration: 4repeat: Infinityease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg"
              >
                <Brain className="h-6 w-6" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [010],
                  rotate: [0-50]
                }}
                transition={{ duration: 3repeat: Infinityease: "easeInOut"delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-pink-400 text-white p-3 rounded-full shadow-lg"
              >
                <Atom className="h-6 w-6" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0-150],
                  x: [050]
                }}
                transition={{ duration: 5repeat: Infinityease: "easeInOut"delay: 2 }}
                className="absolute top-1/2 -right-8 bg-blue-400 text-white p-2 rounded-full shadow-lg"
              >
                <Network className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIInnovationHub2026PromotionBanner;
