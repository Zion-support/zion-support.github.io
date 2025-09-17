import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2026 = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Quantum AI Consciousness",
      description: "Breakthrough in artificial consciousness that processes information at quantum speeds while maintaining human-like reasoning patterns.",
      impact: "500% faster decision making",
      color: "from-purple-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Neural Energy Optimization",
      description: "Revolutionary energy management system that adapts to user behavior patterns, reducing computational overhead by 70%.",
      impact: "70% energy reduction",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Brain,
      title: "Distributed Intelligence Mesh",
      description: "Next-generation computing architecture that creates a mesh network of AI agents working in perfect synchronization.",
      impact: "10x processing power",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Adaptive Security Protocols",
      description: "Self-evolving security system that learns from threats in real-time and automatically updates defense mechanisms.",
      impact: "99.9% threat detection",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Consciousness Network",
      description: "Worldwide AI network that enables instant knowledge sharing and collaborative problem-solving across all connected systems.",
      impact: "Global connectivity",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Space-Time Computing",
      description: "Revolutionary computing model that processes data across multiple dimensions, enabling unprecedented computational capabilities.",
      impact: "Infinite scalability",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "50,000+", icon: Brain },
    { label: "Global Reach", value: "180+ Countries", icon: Globe },
    { label: "Processing Speed", value: "1M+ Ops/sec", icon: Zap },
    { label: "Success Rate", value: "99.7%", icon: Brain }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary technologies are making a measurable difference across the globe.
            </p>
          </motion.div>

        {/* Interactive Tech Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {revolutionaryTechs.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                <span className="font-semibold">{tech.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tech Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{revolutionaryTechs[activeTech].icon}</span>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{revolutionaryTechs[activeTech].title}</h3>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${revolutionaryTechs[activeTech].gradient} rounded-full text-sm font-semibold`}>
                      BREAKTHROUGH TECHNOLOGY
                    </div>
                  </div>
                </div>
                
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {revolutionaryTechs[activeTech].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {revolutionaryTechs[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${revolutionaryTechs[activeTech].gradient} rounded-full`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={revolutionaryTechs[activeTech].link}
                    className={`bg-gradient-to-r ${revolutionaryTechs[activeTech].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${revolutionaryTechs[activeTech].gradient} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-6 animate-pulse">
                    {revolutionaryTechs[activeTech].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Revolutionary Impact</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">∞</div>
                      <div className="text-sm opacity-80">Possibilities</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Innovation</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">∞</div>
                      <div className="text-sm opacity-80">Potential</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">∞</div>
                      <div className="text-sm opacity-80">Future</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🌟 All Revolutionary Technologies</h3>
            <p className="text-lg opacity-80">Explore our complete collection of breakthrough technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in the most significant technological revolution in human history. 
            Transform your reality with our breakthrough technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-lg"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;
