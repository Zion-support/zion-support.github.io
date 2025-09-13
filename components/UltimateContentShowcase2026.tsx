'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  TrendingUp,
  Users,
  Globe,
  Code,
  Database,
  Cloud,
  Cpu,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'AI Innovations 2026',
      subtitle: 'Revolutionary AI Technologies Transforming Industries',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration',
          features: ['Real-time thought processing', 'Enhanced cognitive abilities', 'Seamless data transfer'],
          impact: '300% productivity increase'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing meets artificial intelligence for unprecedented processing power',
          features: ['Exponential speed improvements', 'Complex problem solving', 'Advanced pattern recognition'],
          impact: '1000x faster computations'
        },
        {
          title: 'Autonomous AI Systems',
          description: 'Self-evolving AI systems that adapt and improve without human intervention',
          features: ['Self-learning algorithms', 'Autonomous decision making', 'Continuous optimization'],
          impact: '90% reduction in manual oversight'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      subtitle: 'Next-Generation Computing Power for Complex Problems',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Practical quantum computers solving real-world problems at scale',
          features: ['Cryptographic security', 'Drug discovery acceleration', 'Climate modeling'],
          impact: '10,000x faster than classical computers'
        },
        {
          title: 'Quantum Cloud Services',
          description: 'Accessible quantum computing through cloud platforms',
          features: ['Pay-per-use quantum access', 'Scalable quantum resources', 'Developer-friendly APIs'],
          impact: 'Democratized quantum computing'
        },
        {
          title: 'Quantum AI Integration',
          description: 'Seamless integration of quantum and classical computing systems',
          features: ['Hybrid algorithms', 'Quantum machine learning', 'Optimized data processing'],
          impact: 'Revolutionary problem-solving capabilities'
        }
      ]
    },
    'automation-solutions': {
      title: 'Advanced Automation Solutions',
      subtitle: 'Intelligent Automation for Every Business Process',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Hyper-Intelligent Workflows',
          description: 'AI-powered automation that learns and adapts to your business needs',
          features: ['Process optimization', 'Predictive maintenance', 'Intelligent routing'],
          impact: '85% process efficiency improvement'
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing business systems that operate independently',
          features: ['Automated decision making', 'Resource optimization', 'Performance monitoring'],
          impact: '24/7 autonomous operations'
        },
        {
          title: 'Smart Integration Platform',
          description: 'Seamlessly connect and automate across all your business tools',
          features: ['Universal API connectivity', 'Real-time synchronization', 'Intelligent data mapping'],
          impact: 'Unified business ecosystem'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology Trends',
      subtitle: 'Emerging Technologies Shaping Tomorrow',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Extended Reality (XR) Revolution',
          description: 'Immersive experiences blending physical and digital worlds',
          features: ['Virtual workspaces', 'Augmented reality interfaces', 'Holographic displays'],
          impact: 'Transformative user experiences'
        },
        {
          title: 'Edge AI Computing',
          description: 'AI processing at the edge for real-time responsiveness',
          features: ['Low-latency processing', 'Privacy-preserving AI', 'Offline capabilities'],
          impact: 'Sub-millisecond response times'
        },
        {
          title: 'Synthetic Biology Integration',
          description: 'Biological computing systems for sustainable technology',
          features: ['Bio-computing processors', 'Sustainable materials', 'Self-healing systems'],
          impact: 'Eco-friendly technology solutions'
        }
      ]
    }
  };

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Quantum Qubits', value: '1M+', icon: Cpu },
    { label: 'Automated Processes', value: '50,000+', icon: Zap },
    { label: 'Global Impact', value: '99%', icon: Globe }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI innovations from Zion Tech Group have revolutionized our entire product development cycle. We\'ve seen a 400% improvement in efficiency.',
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, Quantum Solutions',
      content: 'Their quantum computing solutions have enabled us to solve problems that were previously impossible. The ROI has been incredible.',
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of R&D, Future Labs',
      content: 'The automation solutions have transformed our operations. We now operate with 90% less manual intervention while maintaining quality.',
      avatar: 'EW'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">2026 Technology Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Showcase</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI, quantum computing, and automation solutions 
            that are reshaping industries and creating unprecedented opportunities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} mb-4`}>
                  <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{contentSections[activeTab].title}</h3>
                <p className="text-gray-300 text-lg">{contentSections[activeTab].subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {item.impact}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Industry Leaders Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our cutting-edge technology 
              to revolutionize their operations and achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;