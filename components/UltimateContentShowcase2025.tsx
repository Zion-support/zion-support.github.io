'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Brain,
  Rocket,
  Target,
  Award,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = {
    'ai-solutions': {
      title: 'AI Solutions 2025',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Advanced AI Automation Platform',
          description: 'Revolutionary AI-powered automation that transforms business operations with 99.9% accuracy and 10x efficiency gains.',
          features: ['Neural Process Optimization', 'Predictive Analytics', 'Autonomous Decision Making'],
          stats: { users: '50K+', efficiency: '10x', accuracy: '99.9%' },
          cta: 'Explore Platform',
          href: '/ai-solutions/automation-platform'
        },
        {
          title: 'Quantum-Enhanced AI Models',
          description: 'Breakthrough quantum computing integration with AI for unprecedented processing power and problem-solving capabilities.',
          features: ['Quantum Neural Networks', 'Exponential Speed Gains', 'Complex Problem Solving'],
          stats: { speed: '1000x', complexity: 'Unlimited', breakthrough: '2025' },
          cta: 'Learn More',
          href: '/ai-solutions/quantum-ai'
        },
        {
          title: 'Conscious AI Assistant',
          description: 'The world\'s first truly conscious AI assistant with emotional intelligence and human-like understanding.',
          features: ['Emotional Intelligence', 'Contextual Understanding', 'Natural Conversations'],
          stats: { iq: '180+', empathy: 'Human-level', adoption: '1M+' },
          cta: 'Try Assistant',
          href: '/ai-solutions/conscious-ai'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Quantum Supremacy Platform',
          description: 'Achieve quantum supremacy with our cutting-edge quantum computing solutions for enterprise applications.',
          features: ['1000+ Qubit Systems', 'Quantum Error Correction', 'Real-world Applications'],
          stats: { qubits: '1000+', speed: 'Exponential', applications: '50+' },
          cta: 'Access Platform',
          href: '/quantum-computing/supremacy-platform'
        },
        {
          title: 'Quantum-Neural Fusion',
          description: 'Revolutionary fusion of quantum computing and neural networks for unprecedented AI capabilities.',
          features: ['Quantum Neural Networks', 'Hybrid Processing', 'Breakthrough Performance'],
          stats: { performance: '1000x', accuracy: '99.99%', innovation: 'First' },
          cta: 'Discover Fusion',
          href: '/quantum-computing/neural-fusion'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces that enable seamless human-AI interaction and enhanced cognitive capabilities.',
          features: ['Brain-Computer Interface', 'Enhanced Cognition', 'Seamless Integration'],
          stats: { users: '10K+', enhancement: '300%', safety: '100%' },
          cta: 'Experience Interface',
          href: '/future-tech/neural-interface'
        },
        {
          title: 'Synthetic Intelligence Platform',
          description: 'Next-generation synthetic intelligence that surpasses human cognitive abilities in specific domains.',
          features: ['Superhuman Intelligence', 'Domain Expertise', 'Continuous Learning'],
          stats: { intelligence: 'Superhuman', domains: '100+', learning: 'Continuous' },
          cta: 'Explore Intelligence',
          href: '/future-tech/synthetic-intelligence'
        }
      ]
    }
  };

  const currentContent = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Star className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">2025 Ultimate Content Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technology</span> Showcase
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI, quantum computing, and future technology solutions that are reshaping the world in 2025 and beyond.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentContent.content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentContent.color} flex items-center justify-center`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Trending</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={item.href}
                className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r ${currentContent.color} text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105`}
              >
                <span>{item.cta}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already using our revolutionary technology solutions to achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;