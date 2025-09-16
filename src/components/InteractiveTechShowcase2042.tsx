import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2042: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 0,
      name: "Conscious AI Demo",
      icon: "🧠",
      description: "Experience conscious AI systems that can think, feel, and create independently",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20",
      demoContent: "Conscious AI systems are now capable of understanding their own existence and making decisions based on self-awareness. Watch as our AI demonstrates emotional intelligence and creative problem-solving abilities."
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      features: [
        "Quantum neural networks",
        "Entangled consciousness",
        "Superposition thinking",
        "Quantum creativity"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20",
      demoContent: "Quantum consciousness allows for processing that exists in multiple states simultaneously. Our quantum neural networks can think in superposition, enabling unprecedented computational capabilities."
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions and realities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Dimensional travel",
        "Parallel universe computing"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20",
      demoContent: "Interdimensional computing allows access to computing resources across multiple dimensions. Experience how our systems can manipulate reality and access parallel universes for enhanced processing."
    },
    {
      id: 3,
      name: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer interfaces enabling consciousness transfer",
      features: [
        "Direct neural connection",
        "Consciousness transfer",
        "Reality manipulation",
        "Multi-dimensional access"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/20 to-red-900/20",
      demoContent: "Neural interfaces now allow direct connection between biological and artificial consciousness. Experience seamless consciousness transfer and reality manipulation through direct neural pathways."
    }
  ];

  const currentDemo = demos[activeDemo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2042
          </div>
          <h1 className="text-6xl font-bold mb-6">Interactive Tech Showcase 2042</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time demos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <motion.button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-4xl mb-3">{demo.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{demo.name}</h3>
                  <p className="text-sm opacity-90">{demo.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentDemo.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
              >
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{currentDemo.icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{currentDemo.name}</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">{currentDemo.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {currentDemo.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${currentDemo.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                            ✓
                          </div>
                          <span className="text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                    <div className="bg-black/30 rounded-xl p-6 mb-6">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <h4 className="text-xl font-semibold mb-2">Live Technology Demo</h4>
                        <p className="text-sm opacity-90 mb-4">
                          {currentDemo.demoContent}
                        </p>
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className={`bg-gradient-to-r ${currentDemo.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          {isPlaying ? 'Pause Demo' : 'Launch Demo'} →
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">99.9%</div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">∞</div>
                        <div className="text-sm opacity-90">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Experience the Future Today</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of pioneers who are already experiencing the revolutionary technologies of 2042
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2042" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Ultimate Breakthrough →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2042" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Tech Showcase →
            </a>
            <a href="/pages/ConsciousnessComputingRevolution2042" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Consciousness Computing →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2042;