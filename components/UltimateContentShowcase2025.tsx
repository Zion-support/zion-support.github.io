'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Target
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'Revolutionary AI Innovations 2025',
      subtitle: 'Discover the future of artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interfaces for seamless human-AI interaction',
          icon: Brain,
          stats: '95% accuracy rate'
        },
        {
          title: 'Quantum AI Processing',
          description: 'Quantum-enhanced machine learning algorithms',
          icon: Zap,
          stats: '1000x faster processing'
        },
        {
          title: 'Emotional Intelligence AI',
          description: 'AI systems that understand and respond to human emotions',
          icon: Users,
          stats: '99.7% emotion recognition'
        }
      ]
    },
    'automation': {
      title: 'Advanced Automation Solutions',
      subtitle: 'Transform your business operations',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      features: [
        {
          title: 'Autonomous Business Processes',
          description: 'Self-managing workflows that adapt and optimize automatically',
          icon: Target,
          stats: '85% efficiency increase'
        },
        {
          title: 'Intelligent Document Processing',
          description: 'AI-powered document analysis and data extraction',
          icon: Shield,
          stats: '99.9% accuracy'
        },
        {
          title: 'Predictive Maintenance',
          description: 'Anticipate and prevent equipment failures before they happen',
          icon: TrendingUp,
          stats: '60% cost reduction'
        }
      ]
    },
    'quantum': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'The next frontier of computing power',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      features: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Solving complex problems in seconds that would take years',
          icon: Globe,
          stats: '10^15 operations/second'
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption for ultimate security',
          icon: Shield,
          stats: '100% secure'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Revolutionary algorithms that learn exponentially faster',
          icon: Brain,
          stats: 'Exponential speedup'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI solutions transformed our entire operation. We saw 300% ROI in just 6 months.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLabs',
      content: 'Quantum computing capabilities gave us an unprecedented competitive advantage.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, FutureTech',
      content: 'The neural interface technology is truly revolutionary. It changed everything.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Businesses Transformed', value: '5,000+', icon: Users },
    { label: 'Cost Savings Generated', value: '$2.5B+', icon: TrendingUp },
    { label: 'Success Rate', value: '99.8%', icon: Award }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Technology Showcase 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Here</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced AI, automation, and quantum computing solutions that are reshaping industries and transforming the way we work.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <section.icon className="w-5 h-5 inline mr-2" />
                {section.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {contentSections[activeTab as keyof typeof contentSections].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {contentSections[activeTab as keyof typeof contentSections].subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contentSections[activeTab as keyof typeof contentSections].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${contentSections[activeTab as keyof typeof contentSections].color} mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="text-purple-400 font-medium">{feature.stats}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Industry Leaders Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;