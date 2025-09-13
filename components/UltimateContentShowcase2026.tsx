'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling thought-controlled computing',
          impact: 'Transform how humans interact with technology',
          metrics: '95% accuracy in neural signal processing'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with artificial intelligence for unprecedented processing power',
          impact: 'Solve complex problems 1000x faster',
          metrics: 'Exponential speed improvements in optimization'
        },
        {
          title: 'Consciousness Simulation',
          description: 'Advanced AI systems that simulate human consciousness and emotional intelligence',
          impact: 'More empathetic and understanding AI assistants',
          metrics: '99.7% emotional recognition accuracy'
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Automation Solutions',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with minimal human intervention',
          impact: 'Reduce operational costs by 80%',
          metrics: '24/7 automated decision making'
        },
        {
          title: 'Intelligent Workflow Orchestration',
          description: 'AI-powered workflow management that adapts and optimizes in real-time',
          impact: 'Increase productivity by 300%',
          metrics: 'Dynamic process optimization'
        },
        {
          title: 'Predictive Maintenance Systems',
          description: 'AI systems that predict and prevent equipment failures before they occur',
          impact: 'Reduce downtime by 90%',
          metrics: '99.5% failure prediction accuracy'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Hybrid quantum-classical neural networks for superior pattern recognition',
          impact: 'Revolutionize machine learning capabilities',
          metrics: 'Exponential processing improvements'
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          impact: 'Ultimate data security and privacy',
          metrics: 'Theoretically unbreakable encryption'
        },
        {
          title: 'Quantum Optimization',
          description: 'Solving complex optimization problems in seconds instead of years',
          impact: 'Transform logistics and supply chain management',
          metrics: '1000x faster optimization algorithms'
        }
      ]
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Star,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Space Technology Integration',
          description: 'Terrestrial and space-based technology solutions for global connectivity',
          impact: 'Universal internet access and communication',
          metrics: 'Global coverage with 1ms latency'
        },
        {
          title: 'Biotech-AI Fusion',
          description: 'Combining biotechnology with AI for personalized medicine and treatments',
          impact: 'Revolutionize healthcare and longevity',
          metrics: 'Personalized treatment optimization'
        },
        {
          title: 'Sustainable Tech Solutions',
          description: 'AI-powered solutions for climate change and environmental sustainability',
          impact: 'Accelerate green technology adoption',
          metrics: '50% reduction in carbon footprint'
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Automation Solutions', value: '5,000+', icon: Zap },
    { label: 'Quantum Algorithms', value: '500+', icon: Rocket },
    { label: 'Global Enterprises', value: '1,000+', icon: Globe }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Technology
            </span>
            <br />
            Showcase
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI, automation, and quantum computing solutions 
            that will transform your business and shape the future of technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <section.icon className="w-5 h-5" />
                  {section.title}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 h-full border border-white/10 group-hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contentSections[activeTab].color} rounded-xl flex items-center justify-center`}>
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">Impact: {item.impact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Metrics: {item.metrics}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of enterprises already leveraging our revolutionary technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20">
                <BookOpen className="w-5 h-5" />
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;