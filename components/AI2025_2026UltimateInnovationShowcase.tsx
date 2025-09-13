'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';

const AI2025_2026UltimateInnovationShowcase = () => {
  const [activeTab, setActiveTab] = useState('ai-breakthroughs');
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
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2025-2026',
      icon: Brain,
      description: 'Revolutionary AI technologies transforming industries',
      color: 'from-purple-600 to-blue-600',
      content: {
        highlights: [
          'Neural Architecture Revolution',
          'Quantum-AI Fusion Technology',
          'Consciousness-Level AI Systems',
          'Autonomous Decision Making',
          'Real-time Learning Algorithms'
        ],
        stats: [
          { label: 'Performance Increase', value: '5000%', icon: TrendingUp },
          { label: 'Processing Speed', value: '100x Faster', icon: Zap },
          { label: 'Accuracy Rate', value: '99.9%', icon: Target },
          { label: 'Energy Efficiency', value: '90% Less', icon: Shield }
        ]
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      icon: Cpu,
      description: 'Next-generation quantum processors and algorithms',
      color: 'from-cyan-600 to-teal-600',
      content: {
        highlights: [
          '1000-Qubit Processors',
          'Quantum Error Correction',
          'Quantum Machine Learning',
          'Quantum Cryptography',
          'Quantum Simulation'
        ],
        stats: [
          { label: 'Qubit Count', value: '1000+', icon: Cpu },
          { label: 'Coherence Time', value: '100ms', icon: Clock },
          { label: 'Gate Fidelity', value: '99.99%', icon: CheckCircle },
          { label: 'Speed Advantage', value: '10^15x', icon: Rocket }
        ]
      }
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      icon: Users,
      description: 'Direct brain-computer interfaces and neural networks',
      color: 'from-pink-600 to-rose-600',
      content: {
        highlights: [
          'Brain-Computer Interfaces',
          'Neural Signal Processing',
          'Thought-to-Text Conversion',
          'Memory Enhancement',
          'Cognitive Augmentation'
        ],
        stats: [
          { label: 'Signal Resolution', value: '1μV', icon: BarChart3 },
          { label: 'Response Time', value: '50ms', icon: Zap },
          { label: 'Accuracy', value: '95%', icon: Target },
          { label: 'User Adoption', value: '1M+', icon: Users }
        ]
      }
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      icon: Rocket,
      description: 'Intelligent automation systems for enterprise',
      color: 'from-green-600 to-emerald-600',
      content: {
        highlights: [
          'Autonomous Operations',
          'Intelligent Workflows',
          'Predictive Maintenance',
          'Smart Resource Allocation',
          'Self-Healing Systems'
        ],
        stats: [
          { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
          { label: 'Cost Reduction', value: '60%', icon: DollarSign },
          { label: 'Uptime', value: '99.9%', icon: Shield },
          { label: 'ROI', value: '500%', icon: BarChart3 }
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI breakthroughs from 2025-2026 have completely transformed our operations. We\'ve seen a 5000% increase in processing efficiency.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO, Quantum Solutions',
      content: 'The quantum computing integration has revolutionized our data processing capabilities. It\'s like having a supercomputer in every device.',
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Neuroscientist, BrainTech',
      content: 'The neural interface technology has opened up possibilities we never thought possible. It\'s the future of human-computer interaction.',
      avatar: '👩‍🔬'
    }
  ];

  const currentFeatureData = features.find(f => f.id === activeTab) || features[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            AI Innovation Showcase 2025-2026
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            Ultimate AI Innovation
            <br />
            <span className="text-4xl md:text-6xl">Showcase 2025-2026</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            Experience the most revolutionary AI technologies, quantum computing breakthroughs, 
            and neural interface innovations that will define the future of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Explore Innovations
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${
                  activeTab === feature.id
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  {currentFeatureData.title}
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  {currentFeatureData.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {currentFeatureData.content.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {currentFeatureData.content.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Industry Leaders Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of organizations already leveraging these revolutionary AI technologies 
            to drive unprecedented growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AI2025_2026UltimateInnovationShowcase;