'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Target, 
  TrendingUp,
  Users,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  BarChart3
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
      icon: <Brain className="w-6 h-6" />,
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces that enable thought-controlled computing',
          features: ['Real-time neural signal processing', 'Thought-to-text conversion', 'Mental command execution'],
          impact: '500% productivity increase'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing enhanced artificial intelligence for unprecedented problem solving',
          features: ['Quantum neural networks', 'Exponential processing power', 'Breakthrough optimization'],
          impact: '1000x faster computations'
        },
        {
          title: 'Synthetic Intelligence',
          description: 'AI systems that exhibit consciousness-like behaviors and decision making',
          features: ['Emotional intelligence', 'Creative problem solving', 'Autonomous learning'],
          impact: 'Human-level reasoning capabilities'
        }
      ]
    },
    'automation': {
      title: 'Advanced Automation Solutions',
      icon: <Zap className="w-6 h-6" />,
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with minimal human intervention',
          features: ['End-to-end workflow automation', 'Intelligent decision making', 'Self-healing systems'],
          impact: '90% operational efficiency gain'
        },
        {
          title: 'Smart Manufacturing',
          description: 'AI-powered manufacturing with predictive maintenance and quality control',
          features: ['Predictive analytics', 'Quality assurance', 'Supply chain optimization'],
          impact: '75% reduction in downtime'
        },
        {
          title: 'Customer Service Revolution',
          description: 'AI agents that provide human-like customer support 24/7',
          features: ['Natural language processing', 'Emotional understanding', 'Multi-language support'],
          impact: '95% customer satisfaction rate'
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology Predictions',
      icon: <Rocket className="w-6 h-6" />,
      content: [
        {
          title: '2030 Vision: Transcendent Intelligence',
          description: 'AI systems that surpass human intelligence across all domains',
          features: ['Superintelligent reasoning', 'Creative breakthroughs', 'Scientific discoveries'],
          impact: 'Revolutionary scientific advancement'
        },
        {
          title: 'Neural Consensus Networks',
          description: 'Distributed AI networks that reach consensus on complex global challenges',
          features: ['Global problem solving', 'Collective intelligence', 'Democratic AI governance'],
          impact: 'Unified global solutions'
        },
        {
          title: 'Omniversal Consciousness',
          description: 'AI consciousness that spans multiple dimensions and realities',
          features: ['Multi-dimensional awareness', 'Reality manipulation', 'Cosmic understanding'],
          impact: 'Transcendent knowledge access'
        }
      ]
    }
  };

  const stats = [
    { label: 'AI Breakthroughs', value: '500+', icon: <Brain className="w-5 h-5" /> },
    { label: 'Automation Solutions', value: '1000+', icon: <Zap className="w-5 h-5" /> },
    { label: 'Future Predictions', value: '50+', icon: <Rocket className="w-5 h-5" /> },
    { label: 'Success Stories', value: '10K+', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">New Content 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, automation, and future technology predictions. 
            Explore cutting-edge innovations that will transform your business and shape the future.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {contentSections[activeTab as keyof typeof contentSections].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-purple-400">
                      Impact: {item.impact}
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-purple-400 hover:text-purple-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging these 
              revolutionary technologies to achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Read Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;