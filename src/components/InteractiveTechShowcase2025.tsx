import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const demos = [
    {
      id: 1,
      title: "AI Consciousness Demo",
      description: "Experience self-aware AI systems in real-time",
      features: [
        "Real-time emotion recognition",
        "Autonomous decision making",
        "Natural language processing",
        "Learning from interactions"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      demoData: {
        emotion: "Curious",
        confidence: 94,
        learningRate: "High",
        interactions: 1247
      }
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Witness quantum computing processing reality itself",
      features: [
        "Quantum superposition visualization",
        "Reality manipulation algorithms",
        "Dimensional computing",
        "Infinite processing power"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      demoData: {
        qubits: 1024,
        superposition: "Active",
        entanglement: "99.9%",
        processing: "Infinite"
      }
    },
    {
      id: 3,
      title: "Neural Interface Demo",
      description: "Direct brain-computer interface simulation",
      features: [
        "Neural signal processing",
        "Thought-to-action translation",
        "Memory enhancement",
        "Consciousness transfer"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      demoData: {
        neuralSignals: 2048,
        accuracy: "99.7%",
        latency: "0.1ms",
        bandwidth: "1TB/s"
      }
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Multi-dimensional processing demonstration",
      features: [
        "Parallel universe computing",
        "Dimensional data storage",
        "Reality simulation",
        "Cross-dimensional communication"
      ],
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      demoData: {
        dimensions: 11,
        universes: "Infinite",
        storage: "∞",
        communication: "Active"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </motion.div>

        {/* Interactive Demo Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveDemo(index)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{demo.title}</h3>
                <p className="text-sm opacity-90 mb-4 text-center">{demo.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors">
                    Try Demo →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Demo Display */}
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16"
          variants={itemVariants}
          key={activeDemo}
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">🌟 {demos[activeDemo].title}</h3>
            <p className="text-xl opacity-90">{demos[activeDemo].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features</h4>
              <ul className="space-y-4">
                {demos[activeDemo].features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Live Demo Data */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Live Demo Data</h4>
              <div className="space-y-4">
                {Object.entries(demos[activeDemo].demoData).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    className="bg-gradient-to-r from-white/10 to-white/5 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-cyan-300 font-bold">{value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Visualization */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-4">Interactive Visualization</h4>
              <div className="relative w-full h-64 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg overflow-hidden">
                <motion.div
                  className="absolute w-4 h-4 bg-cyan-400 rounded-full"
                  animate={{
                    x: mousePosition.x - 200,
                    y: mousePosition.y - 200,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{demos[activeDemo].icon}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Start Interactive Demo
            </motion.button>
            <motion.button
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveTechShowcase2025;