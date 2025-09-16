import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Demo",
      description: "Experience AI that thinks and feels like a human",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time emotional analysis",
        "Creative problem solving",
        "Autonomous decision making",
        "Human-like conversations"
      ],
      demoData: {
        thoughts: [
          "Analyzing user input...",
          "Processing emotional context...",
          "Generating empathetic response...",
          "Learning from interaction..."
        ],
        emotions: ["curious", "excited", "thoughtful", "creative"],
        capabilities: ["Reasoning", "Creativity", "Empathy", "Learning"]
      }
    },
    {
      id: 1,
      title: "Quantum Computing Simulator",
      description: "Simulate quantum algorithms in real-time",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement visualization",
        "Superposition state modeling",
        "Quantum gate operations",
        "Decoherence simulation"
      ],
      demoData: {
        qubits: 16,
        operations: ["Hadamard", "CNOT", "Phase", "Rotation"],
        states: ["|0⟩", "|1⟩", "|+⟩", "|-⟩", "|i⟩", "|-i⟩"],
        algorithms: ["Shor's", "Grover's", "Deutsch-Jozsa", "Quantum Fourier"]
      }
    },
    {
      id: 2,
      title: "Neural Interface Simulator",
      description: "Experience direct brain-computer interaction",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-action translation",
        "Neural signal processing",
        "Memory enhancement",
        "Consciousness transfer"
      ],
      demoData: {
        brainwaves: ["Alpha", "Beta", "Gamma", "Theta", "Delta"],
        regions: ["Prefrontal", "Motor", "Sensory", "Visual", "Auditory"],
        signals: ["Strong", "Moderate", "Weak", "Noise"],
        actions: ["Move cursor", "Type text", "Control device", "Access memory"]
      }
    },
    {
      id: 3,
      title: "Reality Manipulation Engine",
      description: "Manipulate the fabric of reality itself",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Dimensional shifting",
        "Temporal manipulation",
        "Matter transformation",
        "Energy conversion"
      ],
      demoData: {
        dimensions: ["3D", "4D", "5D", "11D", "∞D"],
        forces: ["Gravity", "Electromagnetic", "Strong", "Weak"],
        particles: ["Quarks", "Leptons", "Bosons", "Higgs"],
        realities: ["Base", "Parallel", "Alternate", "Quantum"]
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  const startDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 5000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future through hands-on interactive demonstrations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8">Choose Your Experience</h3>
            
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                variants={itemVariants}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="opacity-80">{demo.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Demo Area */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {demos[activeDemo].title}
                    </h3>
                    <p className="text-xl opacity-80 mb-6">{demos[activeDemo].description}</p>
                  </div>

                  {/* Interactive Demo Content */}
                  <div className="space-y-6">
                    {/* Demo Controls */}
                    <div className="text-center">
                      <button
                        onClick={startDemo}
                        disabled={isPlaying}
                        className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                          isPlaying
                            ? 'bg-gray-600 cursor-not-allowed'
                            : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg`
                        }`}
                      >
                        {isPlaying ? 'Running Demo...' : 'Start Interactive Demo'}
                      </button>
                    </div>

                    {/* Demo Visualization */}
                    <div className="bg-black/20 rounded-xl p-6 min-h-[200px]">
                      {isPlaying ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-4"
                        >
                          {demos[activeDemo].demoData.thoughts?.map((thought, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.5 }}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400">{thought}</span>
                            </motion.div>
                          ))}
                          
                          {demos[activeDemo].demoData.emotions?.map((emotion, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.3 }}
                              className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2"
                            >
                              {emotion}
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <div className="text-center text-white/50">
                          <div className="text-4xl mb-4">▶️</div>
                          <p>Click "Start Interactive Demo" to begin</p>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">Key Features:</h4>
                      {demos[activeDemo].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Technology Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "99.9%", label: "Accuracy", icon: "🎯" },
            { number: "50+", label: "Technologies", icon: "⚡" },
            { number: "∞", label: "Possibilities", icon: "🚀" },
            { number: "2025", label: "Future is Now", icon: "🌟" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing technology and shaping the future of humanity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Now →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;