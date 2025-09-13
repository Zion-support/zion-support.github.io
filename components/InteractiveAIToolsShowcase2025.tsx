'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Users, 
  Lightbulb,
  Target,
  Rocket,
  ChevronRight,
  Play,
  Download,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const InteractiveAIToolsShowcase2025 = () => {
  const [activeTool, setActiveTool] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiTools = [
    {
      id: 'neural-interface',
      name: 'Neural Interface Pro',
      category: 'AI Development',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      description: 'Direct brain-computer interface for seamless AI interaction',
      features: [
        'Real-time neural signal processing',
        'Thought-to-code conversion',
        'Enhanced cognitive augmentation',
        'Secure neural data encryption'
      ],
      stats: {
        efficiency: '500%',
        accuracy: '99.9%',
        speed: '10x faster'
      },
      demo: 'Watch live neural interface demo'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Engine',
      category: 'Quantum Computing',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      description: 'Quantum-powered AI processing for unprecedented computational power',
      features: [
        'Quantum neural networks',
        'Parallel universe processing',
        'Quantum error correction',
        'Exponential speed improvements'
      ],
      stats: {
        efficiency: '1000x',
        accuracy: '99.99%',
        speed: 'Light speed'
      },
      demo: 'Experience quantum AI processing'
    },
    {
      id: 'consciousness-ai',
      name: 'Consciousness AI',
      category: 'Advanced AI',
      icon: Lightbulb,
      color: 'from-orange-600 to-red-600',
      description: 'AI systems with human-level consciousness and emotional intelligence',
      features: [
        'Emotional intelligence processing',
        'Creative problem solving',
        'Self-awareness capabilities',
        'Ethical decision making'
      ],
      stats: {
        efficiency: '300%',
        accuracy: '95%',
        speed: 'Real-time'
      },
      demo: 'Meet conscious AI assistant'
    },
    {
      id: 'automation-master',
      name: 'Automation Master Pro',
      category: 'Business Automation',
      icon: Rocket,
      color: 'from-blue-600 to-indigo-600',
      description: 'Complete business process automation with intelligent decision making',
      features: [
        'End-to-end process automation',
        'Intelligent workflow optimization',
        'Predictive business analytics',
        'Self-healing systems'
      ],
      stats: {
        efficiency: '400%',
        accuracy: '98%',
        speed: '24/7 operation'
      },
      demo: 'See automation in action'
    },
    {
      id: 'security-ai',
      name: 'AI Security Suite',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      description: 'Advanced AI-powered security system with threat prediction',
      features: [
        'Predictive threat detection',
        'Real-time security monitoring',
        'Automated incident response',
        'Zero-trust architecture'
      ],
      stats: {
        efficiency: '200%',
        accuracy: '99.8%',
        speed: 'Instant response'
      },
      demo: 'Test security capabilities'
    },
    {
      id: 'data-insights',
      name: 'Data Insights AI',
      category: 'Analytics',
      icon: BarChart3,
      color: 'from-teal-600 to-cyan-600',
      description: 'Intelligent data analysis with predictive insights and recommendations',
      features: [
        'Advanced pattern recognition',
        'Predictive analytics',
        'Automated reporting',
        'Business intelligence'
      ],
      stats: {
        efficiency: '600%',
        accuracy: '97%',
        speed: 'Real-time insights'
      },
      demo: 'Explore data insights'
    }
  ];

  const categories = [...new Set(aiTools.map(tool => tool.category))];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Interactive AI Tools
            <span className="block text-4xl md:text-6xl mt-2">Showcase 2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI tools and technologies that will transform 
            how you work, create, and innovate in 2025.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                     onClick={() => setActiveTool(index)}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${tool.color} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                        <div className="text-sm font-semibold text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                          {tool.category}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(tool.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      <Play className="w-5 h-5" />
                      <span>{tool.demo}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Tool Details */}
        <AnimatePresence>
          {activeTool !== null && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${aiTools[activeTool].color} shadow-lg`}>
                      <aiTools[activeTool].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{aiTools[activeTool].name}</h3>
                      <div className="text-lg font-semibold text-blue-400 bg-blue-400/20 px-4 py-2 rounded-full">
                        {aiTools[activeTool].category}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    {aiTools[activeTool].description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {aiTools[activeTool].features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Performance Stats</h4>
                      <div className="space-y-4">
                        {Object.entries(aiTools[activeTool].stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-300 capitalize">{key}:</span>
                            <span className="text-2xl font-bold text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 text-center">
                    <h4 className="text-xl font-bold text-white mb-4">Try It Now</h4>
                    <p className="text-gray-300 mb-6">
                      Experience {aiTools[activeTool].name} with our interactive demo
                    </p>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                        <Play className="w-5 h-5" />
                        Start Demo
                      </button>
                      <button className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform cursor-pointer shadow-2xl">
            <Star className="w-6 h-6" />
            Explore All AI Tools
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveAIToolsShowcase2025;