import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setDemoProgress((prev) => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos = {
    ai: {
      title: "AI Consciousness Demo",
      description: "Experience how AI systems think, learn, and make decisions in real-time",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: [
        "Real-time learning algorithms",
        "Emotional intelligence processing",
        "Creative content generation",
        "Decision-making visualization"
      ]
    },
    quantum: {
      title: "Quantum Computing Demo",
      description: "Explore quantum algorithms and their exponential computational power",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Quantum state visualization",
        "Superposition demonstrations",
        "Entanglement experiments",
        "Quantum algorithm execution"
      ]
    },
    neural: {
      title: "Neural Interface Demo",
      description: "Control digital systems directly with your thoughts and emotions",
      icon: "🔗",
      color: "from-green-500 to-emerald-500",
      features: [
        "Thought-to-text conversion",
        "Emotional state detection",
        "Neural pattern recognition",
        "Brain-computer interaction"
      ]
    }
  };

  const currentDemo = demos[activeDemo as keyof typeof demos];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 mb-12 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 text-white animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto">
            Experience the future of technology through hands-on interactive demonstrations
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex flex-wrap gap-2">
            {Object.keys(demos).map((demo) => (
              <button
                key={demo}
                onClick={() => setActiveDemo(demo)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeDemo === demo
                    ? `bg-gradient-to-r ${demos[demo as keyof typeof demos].color} text-white shadow-lg transform scale-105`
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{demos[demo as keyof typeof demos].icon}</span>
                  <span>{demos[demo as keyof typeof demos].title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          {/* Demo Description */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">{currentDemo.icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentDemo.title}</h3>
                <p className="text-xl text-blue-100">{currentDemo.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Interactive Features:</h4>
              <ul className="space-y-3">
                {currentDemo.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentDemo.color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Live Demo Status:</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Processing Progress</span>
                  <span className="text-sm font-semibold">{demoProgress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    className={`h-3 bg-gradient-to-r ${currentDemo.color} rounded-full`}
                    style={{ width: `${demoProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  {demoProgress < 30 && "Initializing systems..."}
                  {demoProgress >= 30 && demoProgress < 60 && "Loading neural networks..."}
                  {demoProgress >= 60 && demoProgress < 90 && "Processing data streams..."}
                  {demoProgress >= 90 && "Ready for interaction!"}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Visualization */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h4 className="text-2xl font-semibold mb-6 text-center">Live Visualization</h4>
            <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              
              {/* Demo-specific Visualizations */}
              {activeDemo === 'ai' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🧠</div>
                    <div className="text-lg font-semibold">AI Processing</div>
                    <div className="text-sm text-gray-300">Neural networks active</div>
                  </div>
                </div>
              )}
              
              {activeDemo === 'quantum' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-spin">⚛️</div>
                    <div className="text-lg font-semibold">Quantum States</div>
                    <div className="text-sm text-gray-300">Superposition active</div>
                  </div>
                </div>
              )}
              
              {activeDemo === 'neural' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">🔗</div>
                    <div className="text-lg font-semibold">Neural Interface</div>
                    <div className="text-sm text-gray-300">Brain signals detected</div>
                  </div>
                </div>
              )}

              {/* Interactive Elements */}
              <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  🎮 Start Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Try our interactive demos and see how revolutionary technology can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              🚀 Start Full Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              📚 Learn More
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              💼 Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;