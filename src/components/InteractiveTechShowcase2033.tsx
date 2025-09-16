import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Consciousness Transfer Demo",
      description: "Experience the transfer of consciousness into digital realms",
      features: [
        "Real-time consciousness mapping",
        "Emotional state preservation",
        "Memory transfer protocols",
        "Digital existence simulation"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      id: 2,
      title: "Reality Manipulation Lab",
      description: "Manipulate the fundamental laws of physics in real-time",
      features: [
        "Gravity field adjustment",
        "Time dilation control",
        "Matter creation simulation",
        "Dimensional folding demo"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80"
    },
    {
      id: 3,
      title: "Universal Translation Matrix",
      description: "Translate any form of communication across species and dimensions",
      features: [
        "Multi-language processing",
        "Cross-species communication",
        "Emotional context analysis",
        "Dimensional language support"
      ],
      icon: "🌐",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    },
    {
      id: 4,
      title: "Temporal Navigation Simulator",
      description: "Navigate through time and space with precision control",
      features: [
        "Timeline visualization",
        "Temporal event manipulation",
        "Paradox resolution algorithms",
        "Causality preservation checks"
      ],
      icon: "⏰",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/80 to-red-900/80"
    }
  ];

  const stats = [
    { label: "Active Demos", value: "50+", icon: "🎮" },
    { label: "Users Online", value: "10K+", icon: "👥" },
    { label: "Success Rate", value: "99.9%", icon: "✅" },
    { label: "Real-time Processing", value: "0.001s", icon: "⚡" }
  ];

  const handleDemoStart = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 5000);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through immersive, interactive demonstrations
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Demo Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                    <p className="text-lg opacity-80">{demos[activeDemo].description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleDemoStart}
                  className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  {isPlaying ? "Demo Running..." : "Start Interactive Demo →"}
                </button>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">
                      {demos[activeDemo].icon}
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      {isPlaying ? "Demo in Progress..." : "Interactive Demo"}
                    </div>
                    <div className="text-sm opacity-70">
                      {isPlaying ? "Processing..." : "Click to start"}
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-5xl mb-4 text-center">🎮</div>
            <h4 className="text-2xl font-bold mb-4 text-center">Virtual Reality Mode</h4>
            <p className="opacity-80 mb-6 text-center">
              Experience technologies in fully immersive VR environments with haptic feedback
            </p>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Enter VR Mode →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h4 className="text-2xl font-bold mb-4 text-center">AI Assistant</h4>
            <p className="opacity-80 mb-6 text-center">
              Get personalized guidance and explanations from our conscious AI systems
            </p>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Chat with AI →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
            <div className="text-5xl mb-4 text-center">📊</div>
            <h4 className="text-2xl font-bold mb-4 text-center">Real-time Analytics</h4>
            <p className="opacity-80 mb-6 text-center">
              Monitor technology performance and impact metrics in real-time
            </p>
            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Analytics →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-2xl opacity-90 mb-8">
              Join thousands of users exploring the most advanced technologies ever created
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105">
                Start Exploring →
              </button>
              <button className="border border-purple-400 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;