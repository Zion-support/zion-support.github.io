'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Code,
  Settings
} from 'lucide-react';

const UltimateContentShowcase2027 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'AI Innovations 2027',
      subtitle: 'Revolutionary AI Technologies Transforming Industries',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Architecture Revolution',
          description: 'Breakthrough neural networks achieving 99.7% accuracy in complex reasoning tasks',
          stats: '500% Performance Boost',
          icon: Cpu
        },
        {
          title: 'Quantum-AI Fusion',
          description: 'First successful integration of quantum computing with AI algorithms',
          stats: '1000x Speed Increase',
          icon: Zap
        },
        {
          title: 'Conscious AI Systems',
          description: 'AI systems demonstrating self-awareness and emotional intelligence',
          stats: '95% Human-like Responses',
          icon: Brain
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing 2027',
      subtitle: 'Next-Generation Quantum Solutions for Enterprise',
      icon: Atom,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: '1000-Qubit Processors',
          description: 'Commercial quantum processors with unprecedented computational power',
          stats: '10^15 Operations/sec',
          icon: Cpu
        },
        {
          title: 'Quantum Internet',
          description: 'Ultra-secure quantum communication networks',
          stats: '100% Hack-Proof',
          icon: Shield
        },
        {
          title: 'Quantum Machine Learning',
          description: 'ML algorithms running on quantum hardware',
          stats: 'Exponential Speedup',
          icon: Brain
        }
      ]
    },
    'automation-solutions': {
      title: 'Automation Solutions 2027',
      subtitle: 'Complete Business Process Automation',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Autonomous Operations',
          description: 'Self-managing business processes with minimal human intervention',
          stats: '90% Cost Reduction',
          icon: Settings
        },
        {
          title: 'Intelligent Workflows',
          description: 'AI-powered workflow optimization and execution',
          stats: '300% Efficiency Gain',
          icon: TrendingUp
        },
        {
          title: 'Predictive Maintenance',
          description: 'Proactive system maintenance using AI predictions',
          stats: '99.9% Uptime',
          icon: Shield
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies 2027',
      subtitle: 'Cutting-Edge Technologies Shaping Tomorrow',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Neural Interfaces',
          description: 'Direct brain-computer interfaces for seamless interaction',
          stats: 'Real-time Control',
          icon: Brain
        },
        {
          title: 'Holographic Displays',
          description: '3D holographic interfaces for immersive experiences',
          stats: '4K Resolution',
          icon: Globe
        },
        {
          title: 'Edge AI Computing',
          description: 'AI processing at the edge for instant responses',
          stats: '1ms Latency',
          icon: Zap
        }
      ]
    }
  };

  const features = [
    {
      icon: Star,
      title: 'Industry-Leading Innovation',
      description: 'Cutting-edge technology solutions'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: '500+ successful implementations'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and scientists'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored to your specific needs'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Ultimate Content Showcase 2027
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the future of technology with our comprehensive showcase of revolutionary innovations, 
            breakthrough solutions, and cutting-edge developments that will transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <feature.icon className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <section.icon className="w-5 h-5" />
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {activeTab && contentSections[activeTab] && (
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} mb-6`}>
                    <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {contentSections[activeTab].title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {contentSections[activeTab].subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {contentSections[activeTab].content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <span className="text-sm text-purple-400 font-medium">{item.stats}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-3">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-400/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our cutting-edge solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <BookOpen className="w-5 h-5" />
                Download Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;