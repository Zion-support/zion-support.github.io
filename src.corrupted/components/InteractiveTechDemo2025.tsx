import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demos = [
    {
      title: "AI Content Generator",
      description: "Watch our AI create revolutionary content in real-time",
      icon: "🧠",
      color: "purple",
      steps: [
        "Analyzing input parameters...",
        "Generating consciousness-aware content...",
        "Applying quantum optimization...",
        "Finalizing multi-dimensional output..."
      ]
    },
    {
      title: "Quantum Processor",
      description: "Experience quantum computing power solving complex problems",
      icon: "⚡",
      color: "cyan",
      steps: [
        "Initializing quantum state...",
        "Creating quantum entanglement...",
        "Executing quantum algorithm...",
        "Collapsing quantum state..."
      ]
    },
    {
      title: "Neural Interface",
      description: "Connect your mind directly to our AI systems",
      icon: "🧬",
      color: "emerald",
      steps: [
        "Calibrating neural sensors...",
        "Establishing mind-machine link...",
        "Processing neural signals...",
        "Generating thought-based output..."
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        button: "from-purple-500 to-pink-500",
        accent: "text-purple-400"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        button: "from-cyan-500 to-blue-500",
        accent: "text-cyan-400"
      },
      emerald: {
        bg: "from-emerald-600/30 to-teal-600/30",
        border: "border-emerald-400/30",
        button: "from-emerald-500 to-teal-500",
        accent: "text-emerald-400"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isRunning, demos.length]);

  const startDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 12000);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2025
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">Choose Your Demo</h3>
            <div className="space-y-4">
              {demos.map((demo, index) => {
                const colors = getColorClasses(demo.color);
                return (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`w-full p-6 rounded-xl border transition-all duration-300 text-left ${
                      activeDemo === index
                        ? `bg-gradient-to-br ${colors.bg} ${colors.border} border-2`
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{demo.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{demo.title}</h4>
                        <p className="text-white/70 text-sm">{demo.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={startDemo}
              disabled={isRunning}
              className={`w-full py-4 px-8 rounded-lg font-semibold transition-all duration-300 ${
                isRunning
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg'
              }`}
            >
              {isRunning ? 'Demo Running...' : 'Start Interactive Demo'}
            </button>
          </motion.div>

          {/* Demo Display */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${getColorClasses(demos[activeDemo].color).bg} backdrop-blur-sm rounded-2xl p-8 border ${getColorClasses(demos[activeDemo].color).border}`}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-white/80">{demos[activeDemo].description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Live Processing Status:</h4>
                {demos[activeDemo].steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: isRunning ? (index <= (activeDemo * 4 + 3) % 4 ? 1 : 0.3) : 0.3 
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      isRunning && index <= (activeDemo * 4 + 3) % 4
                        ? 'bg-green-400 animate-pulse'
                        : 'bg-white/30'
                    }`}></div>
                    <span className="text-white/80">{step}</span>
                  </motion.div>
                ))}
              </div>

              {isRunning && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {demos[activeDemo].title === "AI Content Generator" && "∞"}
                      {demos[activeDemo].title === "Quantum Processor" && "∞"}
                      {demos[activeDemo].title === "Neural Interface" && "100%"}
                    </div>
                    <div className="text-sm text-white/70">
                      {demos[activeDemo].title === "AI Content Generator" && "Content Generated"}
                      {demos[activeDemo].title === "Quantum Processor" && "Quantum Speedup"}
                      {demos[activeDemo].title === "Neural Interface" && "Neural Sync"}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Our Demos Are Revolutionary</h3>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Experience technology that goes beyond current limitations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Real-Time Processing",
                description: "See results instantly as our systems process complex algorithms"
              },
              {
                icon: "🧠",
                title: "Consciousness Integration",
                description: "AI systems that demonstrate self-awareness and creative thinking"
              },
              {
                icon: "🌌",
                title: "Multi-Dimensional Output",
                description: "Content and solutions that exist across multiple dimensions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;