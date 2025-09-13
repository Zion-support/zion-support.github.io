'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users,
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const UltimateContentShowcase2027 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation Hub',
      description: 'Cutting-edge artificial intelligence solutions and breakthrough technologies',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Neural Architecture Revolution',
          description: 'Advanced neural networks that mimic human cognitive processes',
          features: ['Self-learning algorithms', 'Emotional intelligence', 'Predictive analytics'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with artificial intelligence',
          features: ['Quantum neural networks', 'Exponential processing power', 'Breakthrough problem solving'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Consciousness Simulation',
          description: 'AI systems that exhibit consciousness-like behaviors',
          features: ['Self-awareness algorithms', 'Creative problem solving', 'Ethical decision making'],
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Advanced Automation',
      description: 'Revolutionary automation solutions for enterprise transformation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing business processes with minimal human intervention',
          features: ['End-to-end automation', 'Intelligent decision making', 'Self-optimization'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Smart Workflow Orchestration',
          description: 'Intelligent workflow management across all business functions',
          features: ['Dynamic process adaptation', 'Resource optimization', 'Real-time monitoring'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Predictive Maintenance Systems',
          description: 'AI-powered maintenance that prevents failures before they occur',
          features: ['Anomaly detection', 'Predictive analytics', 'Automated scheduling'],
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions and applications',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Quantum Supremacy Platform',
          description: 'Achieving computational advantages over classical computers',
          features: ['Quantum algorithms', 'Error correction', 'Scalable architecture'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Machine learning algorithms running on quantum hardware',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum feature maps'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable security through quantum principles',
          features: ['Quantum key distribution', 'Quantum random numbers', 'Post-quantum security'],
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'neural',
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces and neural augmentation',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      content: [
        {
          title: 'Brain-Computer Interface',
          description: 'Direct communication between brain and digital systems',
          features: ['Thought-to-text', 'Neural control', 'Cognitive enhancement'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Neural Augmentation',
          description: 'Enhancing human cognitive abilities through technology',
          features: ['Memory enhancement', 'Learning acceleration', 'Sensory expansion'],
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Consciousness Upload',
          description: 'Digital preservation and transfer of human consciousness',
          features: ['Mind mapping', 'Digital immortality', 'Consciousness backup'],
          image: '/api/placeholder/400/300'
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Automation Projects', value: '5,000+', icon: Zap },
    { label: 'Quantum Qubits', value: '1M+', icon: Rocket },
    { label: 'Neural Connections', value: '100B+', icon: Globe }
  ];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore revolutionary technologies that are reshaping our world. 
            From AI consciousness to quantum computing, discover the innovations that will define the next decade.
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {contentCategories[activeTab].title}
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {contentCategories[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentCategories[activeTab].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-6 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging these revolutionary technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Journey
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2027;