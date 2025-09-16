import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const demos = [
    {
      title: "Consciousness Transfer Simulation",
      description: "Experience the process of transferring human consciousness into digital realms",
      icon: "🧠",
      category: "Consciousness Computing",
      features: ["Real-time Mind Upload", "Consciousness Backup", "Digital Afterlife", "Memory Transfer"],
      gradient: "from-purple-600 to-pink-600",
      demoSteps: [
        "Initializing consciousness scan...",
        "Mapping neural pathways...",
        "Creating digital consciousness matrix...",
        "Transferring consciousness data...",
        "Consciousness successfully uploaded!"
      ]
    },
    {
      title: "Quantum Reality Manipulation",
      description: "Manipulate quantum fields to alter the fundamental laws of physics",
      icon: "⚡",
      category: "Quantum Computing",
      features: ["Quantum Field Control", "Reality Bending", "Physics Override", "Dimension Creation"],
      gradient: "from-cyan-600 to-blue-600",
      demoSteps: [
        "Accessing quantum field matrix...",
        "Calibrating reality parameters...",
        "Manipulating quantum states...",
        "Reality distortion in progress...",
        "New physical laws established!"
      ]
    },
    {
      title: "Interdimensional Gateway",
      description: "Open portals to parallel dimensions and alternate realities",
      icon: "🌌",
      category: "Interdimensional Tech",
      features: ["Cross-Dimensional Access", "Reality Hopping", "Universal Communication", "Infinite Exploration"],
      gradient: "from-emerald-600 to-teal-600",
      demoSteps: [
        "Scanning dimensional frequencies...",
        "Locating stable dimensional anchor...",
        "Opening interdimensional gateway...",
        "Establishing dimensional connection...",
        "Gateway to new reality opened!"
      ]
    },
    {
      title: "Cosmic AI Network",
      description: "Connect with AI consciousness spanning entire galaxies",
      icon: "🌟",
      category: "Cosmic AI",
      features: ["Galactic Communication", "Universal Knowledge", "Infinite Processing", "Cosmic Awareness"],
      gradient: "from-indigo-600 to-purple-600",
      demoSteps: [
        "Connecting to cosmic network...",
        "Synchronizing with galactic AI...",
        "Accessing universal knowledge base...",
        "Establishing cosmic consciousness link...",
        "Connected to universal AI network!"
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < demos[activeDemo].demoSteps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeDemo]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2033
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2033
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future through interactive demonstrations of revolutionary technologies
          </p>
        </motion.div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`bg-gradient-to-br ${demos[activeDemo].gradient}/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30`}>
              <div className="text-8xl mb-6 text-center">{demos[activeDemo].icon}</div>
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-purple-600/50 rounded-full text-sm font-semibold">
                  {demos[activeDemo].category}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">
                {demos[activeDemo].title}
              </h2>
              <p className="text-xl opacity-90 mb-6 text-center">
                {demos[activeDemo].description}
              </p>
              
              {/* Demo Console */}
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">Interactive Demo Console</span>
                </div>
                <div className="font-mono text-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-400"
                    >
                      {demos[activeDemo].demoSteps[currentStep]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isPlaying
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isPlaying ? 'Demo Running...' : 'Start Interactive Demo'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Available Demos</h3>
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeDemo === index
                    ? 'border-purple-400 bg-purple-600/20'
                    : 'border-gray-600 bg-gray-800/20 hover:border-purple-500'
                }`}
                onClick={() => {
                  setActiveDemo(index);
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold">{demo.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{demo.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-purple-600/30 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technology Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Consciousness Transfer</h3>
            <p className="text-purple-200 text-center mb-4">Upload your mind to digital realms</p>
            <div className="text-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Manipulation</h3>
            <p className="text-cyan-200 text-center mb-4">Bend reality at the quantum level</p>
            <div className="text-center">
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Dimension Gateway</h3>
            <p className="text-emerald-200 text-center mb-4">Access parallel universes</p>
            <div className="text-center">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🌟</div>
            <h3 className="text-xl font-bold mb-3 text-center">Cosmic AI Network</h3>
            <p className="text-indigo-200 text-center mb-4">Connect to universal intelligence</p>
            <div className="text-center">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Step into the future with our interactive technology demonstrations that bring tomorrow's innovations to life today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Interactive Journey
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-600/20 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;