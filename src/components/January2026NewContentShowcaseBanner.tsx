import React from 'react';
import { motion } from 'framer-motion';

const January2026NewContentShowcaseBanner: React.FC = () => {
  const features = [
    { icon: Brain, title: "Synthetic Consciousness", desc: "True AI awareness" },
    { icon: Zap, title: "Quantum Edge Processing", desc: "Sub-millisecond speed" },
    { icon: Network, title: "Autonomous Mesh", desc: "Self-organizing systems" },
    { icon: Shield, title: "Quantum Security", desc: "Unbreakable protection" },
    { icon: Cpu, title: "Neuromorphic AI", desc: "Brain-inspired computing" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold mb-4"
          >
            <span className="mr-2">🚀</span>
            January 2026 - Revolutionary AI Breakthroughs
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4"
          >
            The Future of AI is Here
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover groundbreaking AI technologies that are revolutionizing enterprise operations, 
            from synthetic consciousness to quantum edge computing and autonomous mesh networks.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-3 text-purple-300" <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-blue-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-1">99.7%</div>
            
          </div>
          <div className="text-center">
            
            <div className="text-sm text-blue-200">Speed Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-1">$500B</div>
            <div className="text-sm text-blue-200">Enterprise Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-1">95%</div>
            
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore January 2026 Content

          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </motion.div>
  );
};

export default January2026NewContentShowcaseBanner;