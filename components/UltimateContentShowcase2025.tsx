'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      subtitle: 'Transform Your Business with Cutting-Edge AI',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Advanced Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Decision Making',
        'Real-time Intelligence'
      ],
      stats: [
        { label: 'ROI Increase', value: '300%' },
        { label: 'Efficiency Gain', value: '85%' },
        { label: 'Cost Reduction', value: '60%' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Breakthrough',
      subtitle: 'Next-Generation Computing Power',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      features: [
        'Quantum Supremacy Achieved',
        'Exponential Processing Speed',
        'Advanced Cryptography',
        'Optimization Algorithms',
        'Quantum Machine Learning',
        'Secure Communications'
      ],
      stats: [
        { label: 'Processing Speed', value: '1000x' },
        { label: 'Security Level', value: '99.9%' },
        { label: 'Efficiency', value: '95%' }
      ]
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      subtitle: 'Direct Brain-Computer Integration',
      icon: Globe,
      color: 'from-pink-600 to-rose-600',
      features: [
        'Brain-Computer Interfaces',
        'Thought-Controlled Systems',
        'Enhanced Cognitive Abilities',
        'Memory Augmentation',
        'Sensory Enhancement',
        'Telepathic Communication'
      ],
      stats: [
        { label: 'Response Time', value: '0.1ms' },
        { label: 'Accuracy', value: '99.8%' },
        { label: 'User Adoption', value: '75%' }
      ]
    },
    {
      id: 'automation-mastery',
      title: 'Automation Mastery',
      subtitle: 'Complete Business Process Automation',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: [
        'End-to-End Automation',
        'Intelligent Workflow Design',
        'Self-Healing Systems',
        'Adaptive Learning',
        'Cross-Platform Integration',
        'Real-time Monitoring'
      ],
      stats: [
        { label: 'Process Automation', value: '90%' },
        { label: 'Error Reduction', value: '95%' },
        { label: 'Time Savings', value: '80%' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2025
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Revolutionary Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI, quantum computing, and neural interface technologies 
            that will transform your business in 2025 and beyond.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {section.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
          >
            {contentSections[activeTab] && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                      {React.createElement(contentSections[activeTab].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">
                        {contentSections[activeTab].title}
                      </h2>
                      <p className="text-xl text-gray-300">
                        {contentSections[activeTab].subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {contentSections[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Technology
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-6">
                  {contentSections[activeTab].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-300">
                        {stat.label}
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
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technology 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UltimateContentShowcase2025;