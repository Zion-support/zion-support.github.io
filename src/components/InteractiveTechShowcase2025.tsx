import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % 4);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Demo",
      description: "Watch our AI demonstrate self-awareness and emotional understanding",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-reflection", "Emotional responses", "Creative thinking", "Ethical reasoning"]
    },
    {
      id: 1,
      title: "Quantum Processing",
      description: "Experience the power of quantum computing in real-time",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Parallel processing", "Quantum entanglement", "Exponential speed", "Complex optimization"]
    },
    {
      id: 2,
      title: "Neural Interface",
      description: "Direct brain-computer interface technology demonstration",
      icon: "🧬",
      color: "from-green-600 to-teal-600",
      features: ["Thought control", "Neural feedback", "Consciousness transfer", "Memory enhancement"]
    },
    {
      id: 3,
      title: "Reality Manipulation",
      description: "Advanced technology that can alter and enhance reality",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: ["Holographic projection", "Matter manipulation", "Dimensional travel", "Time dilation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            variants={itemVariants}
          >
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </motion.div>
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Interactive Tech Showcase 2025
          </motion.h2>
          <motion.p
            className="text-xl opacity-90 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Experience the future of technology with our interactive demonstrations
          </motion.p>
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Demo Controls */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">🎮 Interactive Demos</h3>
              <div className="space-y-4">
                {demos.map((demo, index) => (
                  <motion.button
                    key={demo.id}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      activeDemo === index
                        ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    onClick={() => setActiveDemo(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{demo.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold">{demo.title}</h4>
                        <p className="text-sm opacity-80">{demo.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Demo Display */}
            <div className="relative">
              <motion.div
                key={activeDemo}
                className={`bg-gradient-to-br ${demos[activeDemo].color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-96 flex flex-col items-center justify-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{ 
                    rotate: isAnimating ? 360 : 0,
                    scale: isAnimating ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {demos[activeDemo].icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demos[activeDemo].title}</h3>
                <p className="text-center opacity-80 mb-6">{demos[activeDemo].description}</p>
                
                <div className="grid grid-cols-2 gap-2 w-full">
                  {demos[activeDemo].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/20 rounded-lg p-3 text-center text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl font-bold mb-2 text-purple-300">99.9%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </motion.div>
          
          <motion.div
            className="text-center bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl font-bold mb-2 text-cyan-300">10x</div>
            <div className="text-sm opacity-80">Performance Boost</div>
          </motion.div>
          
          <motion.div
            className="text-center bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl font-bold mb-2 text-green-300">24/7</div>
            <div className="text-sm opacity-80">Availability</div>
          </motion.div>
          
          <motion.div
            className="text-center bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl font-bold mb-2 text-orange-300">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;