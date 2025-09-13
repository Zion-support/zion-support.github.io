'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Cpu, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % innovations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const innovations = [
    {
      id: 1,
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing meets artificial intelligence for unprecedented processing power and speed.",
      icon: Brain,
      features: ["Quantum entanglement processing", "Exponential speed improvements", "Advanced pattern recognition", "Secure quantum communication"],
      color: "from-purple-500 to-pink-600",
      impact: "1000x faster processing",
      category: "Quantum AI"
    },
    {
      id: 2,
      title: "Autonomous AI Agents",
      description: "Self-learning AI systems that can independently make decisions and adapt to new environments.",
      icon: Cpu,
      features: ["Self-optimization", "Autonomous decision making", "Continuous learning", "Multi-domain adaptation"],
      color: "from-blue-500 to-cyan-600",
      impact: "95% automation rate",
      category: "Autonomous Systems"
    },
    {
      id: 3,
      title: "Emotional Intelligence AI",
      description: "AI systems that understand and respond to human emotions for more natural interactions.",
      icon: Lightbulb,
      features: ["Emotion recognition", "Contextual understanding", "Empathetic responses", "Human-AI collaboration"],
      color: "from-green-500 to-emerald-600",
      impact: "300% better engagement",
      category: "Human-AI Interaction"
    },
    {
      id: 4,
      title: "Edge AI Computing",
      description: "Distributed AI processing at the edge for real-time decision making and reduced latency.",
      icon: Zap,
      features: ["Real-time processing", "Low latency", "Offline capabilities", "Scalable architecture"],
      color: "from-orange-500 to-red-600",
      impact: "50ms response time",
      category: "Edge Computing"
    },
    {
      id: 5,
      title: "AI-Powered Cybersecurity",
      description: "Advanced AI systems that predict and prevent cyber threats before they occur.",
      icon: Shield,
      features: ["Threat prediction", "Automated response", "Behavioral analysis", "Zero-day protection"],
      color: "from-red-500 to-pink-600",
      impact: "99.9% threat prevention",
      category: "Cybersecurity"
    },
    {
      id: 6,
      title: "Global AI Network",
      description: "Worldwide distributed AI infrastructure for seamless global operations and collaboration.",
      icon: Globe,
      features: ["Global distribution", "Load balancing", "Multi-region deployment", "Seamless connectivity"],
      color: "from-cyan-500 to-blue-600",
      impact: "Global coverage",
      category: "Infrastructure"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "10,000+", icon: Brain },
    { label: "Global Users", value: "2.5M+", icon: Users },
    { label: "Processing Power", value: "500 PetaFLOPS", icon: Zap },
    { label: "Success Rate", value: "99.7%", icon: Target }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">AI Innovation Showcase 2025</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Innovations
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shaping Tomorrow
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge AI technologies that are revolutionizing industries 
            and transforming the way we live, work, and interact with technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              className={`relative group cursor-pointer ${
                activeInnovation === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setActiveInnovation(index)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${innovation.color} backdrop-blur-sm border border-white/20 transition-all duration-500 ${
                activeInnovation === index ? 'shadow-2xl shadow-blue-500/25' : 'shadow-lg'
              }`}>
                {/* Glow effect for active innovation */}
                {activeInnovation === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <innovation.icon className="w-12 h-12 text-white" />
                    <span className="text-xs font-bold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {innovation.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {innovation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                      {innovation.impact}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Innovation Detail */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Featured Innovation: {innovations[activeInnovation].title}
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {innovations[activeInnovation].description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <div className="space-y-3">
                  {innovations[activeInnovation].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Impact Metrics</h4>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {innovations[activeInnovation].impact}
                    </div>
                    <div className="text-gray-300">
                      Performance Improvement
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Category</h4>
                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="text-center text-lg font-semibold text-white">
                    {innovations[activeInnovation].category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our AI technologies 
              to transform their businesses and create extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Innovation Journey
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
              
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIInnovationShowcase2025;