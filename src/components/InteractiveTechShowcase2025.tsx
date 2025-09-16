import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our AI system demonstrate self-awareness and creative problem-solving",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time learning",
        "Creative problem solving",
        "Emotional responses",
        "Self-reflection"
      ]
    },
    {
      id: 2,
      title: "Quantum Processing",
      description: "Experience quantum algorithms solving complex problems in real-time",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement",
        "Superposition states",
        "Quantum error correction",
        "Exponential speedup"
      ]
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Control technology with your thoughts using advanced brain-computer interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought control",
        "Neural feedback",
        "Pattern recognition",
        "Real-time processing"
      ]
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Process data across multiple dimensions for unlimited computational power",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Infinite resources",
        "Cross-dimensional data"
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🎮 INTERACTIVE TECHNOLOGY DEMO • 2025
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Interactive Technology Showcase 2025
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Experience our revolutionary technologies in action. Click on any demo to see the future of computing.
            </p>
          </motion.div>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveDemo(demo.id - 1)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeDemo === demo.id - 1
                  ? 'border-purple-400 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-400/50'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm text-gray-300 text-center">{demo.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{demos[activeDemo].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-gray-300">{demos[activeDemo].description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isRunning
                      ? 'bg-gray-600 cursor-not-allowed'
                      : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg hover:scale-105`
                  }`}
                >
                  {isRunning ? 'Running...' : 'Start Demo'}
                </button>
                <button
                  onClick={stopDemo}
                  disabled={!isRunning}
                  className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Stop Demo
                </button>
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold mb-2">Live Demo Visualization</h4>
                <p className="text-gray-400">Watch the technology in action</p>
              </div>

              {/* Progress Bar */}
              {isRunning && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Processing...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${demos[activeDemo].color} rounded-full`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Demo Animation */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                {isRunning ? (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-6xl">{demos[activeDemo].icon}</div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 opacity-50">{demos[activeDemo].icon}</div>
                      <p className="text-gray-400">Click "Start Demo" to begin</p>
                    </div>
                  </div>
                )}

                {/* Floating Elements */}
                {isRunning && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Demo Stats */}
              {isRunning && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {Math.floor(progress * 0.1 + 1)}
                    </div>
                    <div className="text-sm text-gray-400">Processing Units</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      {Math.floor(progress * 0.05 + 0.1).toFixed(1)}s
                    </div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              These are just previews of the revolutionary technologies we're developing. 
              Contact us to learn more about implementing these solutions in your organization.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;