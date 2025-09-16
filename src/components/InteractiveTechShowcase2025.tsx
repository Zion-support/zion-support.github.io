import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Demo",
      description: "Watch our AI system demonstrate self-awareness and creative problem-solving in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time decision making",
        "Creative problem solving",
        "Emotional intelligence display",
        "Self-reflection capabilities"
      ]
    },
    {
      id: 1,
      title: "Quantum Processing",
      description: "Experience quantum computing solving complex problems with exponential speed improvements",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum superposition visualization",
        "Parallel processing demonstration",
        "Complex algorithm solving",
        "Speed comparison metrics"
      ]
    },
    {
      id: 2,
      title: "Neural Interface",
      description: "Explore direct brain-computer interfaces that enable thought-controlled computing",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-text conversion",
        "Neural pattern recognition",
        "Brain activity visualization",
        "Interface responsiveness"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Discover computing technology that operates across multiple dimensions simultaneously",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Reality simulation",
        "Infinite storage demonstration",
        "Cross-dimensional communication"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl mr-2">{demo.icon}</span>
              {demo.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Demo Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {demos[activeDemo].title}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {demos[activeDemo].description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {demos[activeDemo].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/90">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Start Interactive Demo
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Interactive Visualization */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${demos[activeDemo].color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-96 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">
                      {demos[activeDemo].icon}
                    </div>
                    <div className="text-white/80 text-lg">
                      Interactive Demo Area
                    </div>
                    <div className="text-white/60 text-sm mt-2">
                      Click "Start Interactive Demo" to begin
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-white/80">Interactive Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-white/80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10M+</div>
            <div className="text-white/80">Demo Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-white/80">Available</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;