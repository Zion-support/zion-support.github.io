"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Cpu
  Database
  Cloud
  Shield
  Zap
  Target
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Star,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AI2025_2026UltimateTechnologyShowcase = () => {
  const [activeTabsetActiveTab] = useState('ai-2025');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const technologies = {
    'ai-2025': {
      title: 'AI 2025 Revolutionary Breakthroughs',
      subtitle: 'Transform Your Business with Next-Generation AI Solutions',
      features: [
        {
          icon: Brain,
          title: 'Neural Consciousness AI',
          description: 'Advanced AI systems with self-awareness and emotional intelligence',
          benefits: ['300% faster decision making'95% accuracy in 'predictions', 'Real-time adaptation']
        },
        {
          icon: Cpu,
          title: 'Quantum-Neural Fusion',
          description: 'Revolutionary computing that combines quantum and neural processing',
          benefits: ['10x processing 'speed', 'Unlimited 'scalability', 'Zero latency responses']
        },
        {
          icon: Database,
          title: 'Autonomous Data Intelligence',
          description: 'Self-managing data systems that optimize and secure themselves',
          benefits: ['99.9% 'uptime', 'Auto-'optimization', 'Predictive maintenance']
        }
      ]
    },
    'ai-2026': {
      title: 'AI 2026 Future Vision',
      subtitle: 'Prepare for the Next Decade of AI Innovation',
      features: [
        {
          icon: Globe,
          title: 'Global AI Ecosystem',
          description: 'Worldwide AI network connecting businesses and individuals',
          benefits: ['Global 'connectivity', 'Cross-platform 'integration', 'Universal AI access']
        },
        {
          icon: Rocket,
          title: 'Space-Age AI Computing',
          description: 'AI systems designed for space exploration and interplanetary communication',
          benefits: ['Space-grade 'reliability', 'Interplanetary 'communication', 'Zero-gravity optimization']
        },
        {
          icon: Star,
          title: 'Conscious AI Beings',
          description: 'AI entities with full consciousness and creative capabilities',
          benefits: ['Creative problem 'solving', 'Emotional 'intelligence', 'Autonomous innovation']
        }
      ]
    }
  };

  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [010],
                scale: [010],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 2025-2026
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Ultimate Technology Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of artificial intelligence with our revolutionary 2025-2026 technology suite. 
            Transform your business with cutting-edge AI solutions that were once science fiction.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
              Explore Solutions
            </motion.button>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('ai-2025')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ai-2025'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 2025
            </button>
            <button
              onClick={() => setActiveTab('ai-2026')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ai-2026'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 2026
            </button>
          </div>
        </motion.div>

        {/* Technology Features */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0x: 50 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentTech.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {currentTech.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {currentTech.features.map((featureindex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.2 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Proven Results</h3>
            <p className="text-gray-300 text-lg">Real-world impact from our AI solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+'label: 'Enterprise Clients' },
              { number: '99.9%'label: 'Uptime Guarantee' },
              { number: '300%'label: 'ROI Increase' },
              { number: '24/7'label: 'AI Support' }
            ].map((statindex) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0scale: 0.8 }}
                animate={isVisible ? { opacity: 1scale: 1 } : {}}
                transition={{ duration: 0.6delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our AI solutions to revolutionize their operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-6 h-6" />
                Start Your AI Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2025_2026UltimateTechnologyShowcase;