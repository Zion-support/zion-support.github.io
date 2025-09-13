'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Shield, 
  TrendingUp,
  Users,
  Code,
  Database,
  Cloud,
  Cpu,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const NewContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'Revolutionary AI Innovations 2026',
      subtitle: 'Discover the future of artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Breakthrough in quantum-enhanced AI processing',
          features: ['10x faster processing', 'Quantum entanglement', 'Advanced pattern recognition'],
          link: '/ai-2026-quantum-neural-fusion'
        },
        {
          title: 'Consciousness AI Systems',
          description: 'AI that exhibits self-awareness and emotional intelligence',
          features: ['Emotional understanding', 'Self-reflection', 'Creative problem solving'],
          link: '/ai-2026-consciousness-systems'
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Fully automated business processes with minimal human intervention',
          features: ['End-to-end automation', 'Intelligent decision making', 'Self-optimization'],
          link: '/ai-2026-autonomous-operations'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'Unlock the power of quantum mechanics',
      icon: Cpu,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Solving problems impossible for classical computers',
          features: ['Exponential speedup', 'Complex optimization', 'Cryptographic security'],
          link: '/quantum-computing-2026'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Revolutionary algorithms for quantum-enhanced ML',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum data processing'],
          link: '/quantum-ml-2026'
        },
        {
          title: 'Quantum Cloud Infrastructure',
          description: 'Scalable quantum computing as a service',
          features: ['Global quantum network', 'Hybrid classical-quantum', 'Real-time processing'],
          link: '/quantum-cloud-2026'
        }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interface Revolution',
      subtitle: 'Direct brain-computer communication',
      icon: Zap,
      color: 'from-pink-600 to-rose-600',
      content: [
        {
          title: 'Brain-Computer Interfaces',
          description: 'Direct neural control of digital systems',
          features: ['Thought-based control', 'Neural data streaming', 'Cognitive enhancement'],
          link: '/neural-interfaces-2026'
        },
        {
          title: 'Neural Implants',
          description: 'Advanced biocompatible neural enhancement devices',
          features: ['Memory augmentation', 'Sensory expansion', 'Cognitive acceleration'],
          link: '/neural-implants-2026'
        },
        {
          title: 'Collective Intelligence Networks',
          description: 'Human-AI collaborative thinking systems',
          features: ['Shared cognition', 'Distributed problem solving', 'Enhanced creativity'],
          link: '/collective-intelligence-2026'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology Visions',
      subtitle: 'Glimpse into 2030 and beyond',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Singularity Preparation',
          description: 'Preparing for the technological singularity',
          features: ['AGI development', 'Superintelligence research', 'Ethical frameworks'],
          link: '/singularity-preparation-2030'
        },
        {
          title: 'Transhumanism Technologies',
          description: 'Enhancing human capabilities through technology',
          features: ['Biological augmentation', 'Digital immortality', 'Enhanced cognition'],
          link: '/transhumanism-2030'
        },
        {
          title: 'Omniversal Computing',
          description: 'Computing across multiple dimensions and realities',
          features: ['Multidimensional processing', 'Reality simulation', 'Cosmic-scale computing'],
          link: '/omniversal-computing-2035'
        }
      ]
    }
  };

  const tabs = Object.keys(contentSections);

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW CONTENT SHOWCASE 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Content Hub
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the most advanced technological breakthroughs, AI innovations, and future visions 
            that will reshape our world in 2026 and beyond.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const section = contentSections[tab as keyof typeof contentSections];
            const Icon = section.icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentSections[activeTab as keyof typeof contentSections].content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contentSections[activeTab as keyof typeof contentSections].color} flex items-center justify-center ml-4`}>
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link
                href={item.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators, researchers, and technology enthusiasts 
              who are already exploring these revolutionary technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-hub-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Globe className="w-5 h-5 mr-2" />
                Browse All Content
              </Link>
              <Link
                href="/newsletter-signup"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;