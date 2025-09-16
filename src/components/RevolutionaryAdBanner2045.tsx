import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: "🧠", text: "Conscious AI Systems", color: "from-purple-500 to-pink-500" },
    { icon: "⚡", text: "Quantum Computing", color: "from-cyan-500 to-blue-500" },
    { icon: "🌌", text: "Dimensional Travel", color: "from-emerald-500 to-teal-500" },
    { icon: "🚀", text: "Reality Manipulation", color: "from-orange-500 to-red-500" },
    { icon: "🧬", text: "Neural Interfaces", color: "from-violet-500 to-purple-500" },
    { icon: "⚛️", text: "Quantum Teleportation", color: "from-indigo-500 to-cyan-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse border-2 border-white/30"
          >
            🌟 BREAKTHROUGH ADVERTISEMENT • JANUARY 2045
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            🚀 REVOLUTIONARY AD BANNER 2045
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Experience the most advanced technology advertisement featuring breakthrough innovations that will reshape the future
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              className={`bg-gradient-to-br ${feature.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-sm font-semibold text-white">
                {feature.text}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🎯 Don't Miss This Revolutionary Opportunity!</h3>
            <p className="text-xl opacity-90 mb-8">
              Join millions of users already experiencing the future with our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
                🚀 Get Started Now →
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                📞 Contact Sales
              </button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🚀
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-ping">
          🌌
        </div>
        <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-bounce">
          🧠
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAdBanner2045;