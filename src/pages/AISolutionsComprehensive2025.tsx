import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🌟' },
    { id: 'enterprise', name: 'Enterprise AI', icon: '🏢' },
    { id: 'autonomous', name: 'Autonomous Systems', icon: '🤖' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' }
  ];

  const solutions = [
    {
      id: 1,
      title: "AI Enterprise Copilot 2025",
      category: "enterprise",
      description: "Revolutionary AI assistant that understands your business context and provides intelligent recommendations for growth and optimization.",
      features: [
        "Natural language business analysis",
        "Automated decision support",
        "Real-time market intelligence",
        "Predictive business modeling"
      ],
      pricing: "Starting at $2,999/month",
      icon: "🧭",
      color: "from-blue-600 to-indigo-600",
      stats: { efficiency: "+300%", roi: "500%", satisfaction: "99.2%" }
    },
    {
      id: 2,
      title: "Autonomous AI Agents",
      category: "autonomous",
      description: "Self-managing AI agents that operate independently, making decisions and taking actions to achieve business objectives.",
      features: [
        "Fully autonomous operation",
        "Self-learning capabilities",
        "Multi-agent collaboration",
        "Real-time adaptation"
      ],
      pricing: "Custom pricing",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      stats: { autonomy: "100%", efficiency: "+400%", uptime: "99.9%" }
    },
    {
      id: 3,
      title: "Quantum AI Processing",
      category: "quantum",
      description: "Breakthrough quantum-enhanced AI that leverages quantum computing for exponential processing power and problem-solving capabilities.",
      features: [
        "Quantum neural networks",
        "Exponential processing speed",
        "Quantum machine learning",
        "Unlimited scalability"
      ],
      pricing: "Starting at $5,999/month",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: { speed: "∞", accuracy: "100%", capacity: "Unlimited" }
    },
    {
      id: 4,
      title: "Neural Interface AI",
      category: "neural",
      description: "Direct brain-computer AI interface that enables seamless communication between human consciousness and artificial intelligence.",
      features: [
        "Thought-to-AI communication",
        "Consciousness integration",
        "Enhanced cognitive abilities",
        "Real-time neural feedback"
      ],
      pricing: "Starting at $9,999/month",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      stats: { integration: "99.8%", speed: "Real-time", accuracy: "97.5%" }
    },
    {
      id: 5,
      title: "AI Content Factory",
      category: "enterprise",
      description: "Automated content creation system that generates high-quality, personalized content at scale using advanced AI models.",
      features: [
        "Multi-format content generation",
        "Brand voice consistency",
        "SEO optimization",
        "Real-time personalization"
      ],
      pricing: "Starting at $1,999/month",
      icon: "📝",
      color: "from-orange-600 to-red-600",
      stats: { output: "10x faster", quality: "95%", engagement: "+250%" }
    },
    {
      id: 6,
      title: "AI Cybersecurity Fortress",
      category: "enterprise",
      description: "Advanced AI-powered cybersecurity system that provides real-time threat detection and automated response capabilities.",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Predictive security analytics",
        "Zero-trust architecture"
      ],
      pricing: "Starting at $3,999/month",
      icon: "🛡️",
      color: "from-red-600 to-pink-600",
      stats: { protection: "99.9%", response: "<1ms", threats: "0" }
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              AI Solutions Comprehensive 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Transform your business with our cutting-edge AI solutions designed for the future
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container mx-auto px-4 pb-16"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredSolutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{solution.icon}</div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{solution.stats.efficiency}</div>
                      <div className="text-sm opacity-80">Efficiency</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-lg opacity-90 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold">{solution.stats.roi || solution.stats.autonomy || solution.stats.speed || solution.stats.integration || solution.stats.quality || solution.stats.protection}</div>
                      <div className="text-xs opacity-80">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{solution.stats.satisfaction || solution.stats.uptime || solution.stats.accuracy || solution.stats.speed || solution.stats.engagement || solution.stats.response}</div>
                      <div className="text-xs opacity-80">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">∞</div>
                      <div className="text-xs opacity-80">Potential</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white/90">{solution.pricing}</div>
                  </div>
                  
                  <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl opacity-80">Join thousands of organizations transforming with AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500%</div>
              <div className="text-lg opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80">Support</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our AI experts and discover how our solutions can revolutionize your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;