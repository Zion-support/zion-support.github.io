'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  BarChart3,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions 2026',
      subtitle: 'Transform Your Business with Next-Generation AI',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interfaces for seamless human-AI collaboration',
          features: ['Real-time thought processing', 'Enhanced cognitive abilities', 'Seamless integration'],
          icon: Brain,
          stats: '95% efficiency boost'
        },
        {
          title: 'Quantum AI Processing',
          description: 'Quantum-powered AI that processes data at unprecedented speeds',
          features: ['Quantum neural networks', 'Exponential processing power', 'Breakthrough algorithms'],
          icon: Cpu,
          stats: '1000x faster processing'
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing AI systems that run your business operations',
          features: ['Self-healing infrastructure', 'Predictive maintenance', 'Autonomous decision making'],
          icon: Shield,
          stats: '99.9% uptime guarantee'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'Unlock the Power of Quantum Mechanics',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Breakthrough quantum computers solving previously impossible problems',
          features: ['Quantum error correction', 'Scalable quantum systems', 'Commercial applications'],
          icon: Zap,
          stats: '10^15 operations/second'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'AI algorithms running on quantum hardware for superior performance',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum cryptography'],
          icon: Brain,
          stats: 'Exponential speedup'
        },
        {
          title: 'Quantum Cloud Services',
          description: 'Access quantum computing power through our cloud platform',
          features: ['On-demand quantum access', 'Hybrid classical-quantum', 'Global quantum network'],
          icon: Cloud,
          stats: '24/7 availability'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology Predictions',
      subtitle: 'What\'s Coming in 2026 and Beyond',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Synthetic Intelligence',
          description: 'AI systems that surpass human intelligence in all domains',
          features: ['General artificial intelligence', 'Creative problem solving', 'Emotional intelligence'],
          icon: Lightbulb,
          stats: 'AGI achieved by 2026'
        },
        {
          title: 'Neural Implants',
          description: 'Brain-computer interfaces for enhanced human capabilities',
          features: ['Memory enhancement', 'Direct communication', 'Augmented reality integration'],
          icon: Target,
          stats: '10x cognitive enhancement'
        },
        {
          title: 'Omniversal Computing',
          description: 'Computing across multiple dimensions and realities',
          features: ['Multi-dimensional processing', 'Reality simulation', 'Consciousness transfer'],
          icon: Globe,
          stats: 'Infinite possibilities'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI solutions from Zion Tech Group have revolutionized our entire operation. We\'ve seen a 300% increase in efficiency.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'CEO, FutureTech',
      content: 'Their quantum computing platform is years ahead of the competition. We\'re solving problems we never thought possible.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Research Director, Quantum Labs',
      content: 'The neural interface technology is groundbreaking. It\'s like having a supercomputer in your mind.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Quantum Qubits', value: '1M+', icon: Zap },
    { label: 'Global Users', value: '50M+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">2026 Ultimate Technology Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future is
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the most advanced AI, quantum computing, and future technology solutions 
              that will transform your business and reshape the world.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <stat.icon className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(contentSections).map(([key, section]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <section.icon className="w-5 h-5 mr-3" />
                {section.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} mb-6`}>
                  <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {contentSections[activeTab].title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {contentSections[activeTab].subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contentSections[activeTab].color} flex items-center justify-center mr-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-sm text-blue-400 font-semibold">{item.stats}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our revolutionary technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center border border-white/20"
              >
                <Clock className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;