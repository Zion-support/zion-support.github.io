'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  BarChart3, 
  Shield, 
  Globe, 
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

const InteractiveAIToolsShowcase2025 = () => {
  const [activeTool, setActiveTool] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTool((prev) => (prev + 1) % tools.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tools = [
    {
      id: 1,
      name: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide real-time insights and predictive analytics for your business operations.",
      icon: BarChart3,
      features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "Automated reporting"],
      color: "from-blue-500 to-purple-600",
      stats: "98% accuracy"
    },
    {
      id: 2,
      name: "Neural Network Builder",
      description: "Drag-and-drop interface for creating custom neural networks without coding knowledge.",
      icon: Brain,
      features: ["Visual network design", "Pre-trained models", "Auto-optimization", "Cloud deployment"],
      color: "from-green-500 to-teal-600",
      stats: "10x faster development"
    },
    {
      id: 3,
      name: "Quantum Computing Interface",
      description: "Access quantum computing power through our intuitive interface for complex problem solving.",
      icon: Cpu,
      features: ["Quantum algorithms", "Hybrid computing", "Secure processing", "Scalable resources"],
      color: "from-purple-500 to-pink-600",
      stats: "1000x speedup"
    },
    {
      id: 4,
      name: "Smart Data Pipeline",
      description: "Automated data ingestion, processing, and transformation with intelligent error handling.",
      icon: Database,
      features: ["Auto-scaling", "Real-time processing", "Data validation", "Error recovery"],
      color: "from-orange-500 to-red-600",
      stats: "99.9% uptime"
    },
    {
      id: 5,
      name: "AI Security Suite",
      description: "Comprehensive security solutions powered by AI to protect your digital assets.",
      icon: Shield,
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Compliance monitoring"],
      color: "from-red-500 to-orange-600",
      stats: "Zero breaches"
    },
    {
      id: 6,
      name: "Global AI Network",
      description: "Distributed AI processing across multiple regions for optimal performance and reliability.",
      icon: Globe,
      features: ["Edge computing", "Load balancing", "Geographic distribution", "Low latency"],
      color: "from-cyan-500 to-blue-600",
      stats: "Global coverage"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Interactive AI Tools 2025</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Tools
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              for the Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of AI-powered tools designed to transform how you work, 
            create, and innovate in 2025 and beyond.
          </p>
        </motion.div>

        {/* Interactive Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className={`relative group cursor-pointer ${
                activeTool === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setActiveTool(index)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${tool.color} backdrop-blur-sm border border-white/20 transition-all duration-500 ${
                activeTool === index ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg'
              }`}>
                {/* Glow effect for active tool */}
                {activeTool === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <tool.icon className="w-12 h-12 text-white" />
                    <span className="text-sm font-bold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {tool.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tool.name}
                  </h3>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white/60"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Try Our Interactive Demo
            </h3>
            <p className="text-gray-300 text-lg">
              Experience the power of our AI tools with this live demonstration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Performance Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-green-400">+250%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Accuracy Rate</span>
                  <span className="text-green-400">98.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-green-400">-60%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <Users className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">User Impact</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Active Users</span>
                  <span className="text-green-400">50K+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Satisfaction</span>
                  <span className="text-green-400">4.9/5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Time Saved</span>
                  <span className="text-green-400">40hrs/week</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Business Goals</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">ROI Increase</span>
                  <span className="text-green-400">+300%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Efficiency</span>
                  <span className="text-green-400">+180%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Innovation</span>
                  <span className="text-green-400">+400%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Start Your AI Journey Today
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveAIToolsShowcase2025;