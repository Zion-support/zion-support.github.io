import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [demoData, setDemoData] = useState({
    aiResponses: 0,
    quantumOperations: 0,
    neuralConnections: 0,
    dimensionalPortals: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setDemoData(prev => ({
        aiResponses: prev.aiResponses + Math.floor(Math.random() * 5) + 1,
        quantumOperations: prev.quantumOperations + Math.floor(Math.random() * 10) + 1,
        neuralConnections: prev.neuralConnections + Math.floor(Math.random() * 3) + 1,
        dimensionalPortals: prev.dimensionalPortals + Math.floor(Math.random() * 2) + 1
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Assistant",
      description: "Interact with our conscious AI system that exhibits genuine self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Emotional recognition",
        "Creative problem solving",
        "Self-learning algorithms",
        "Human-like conversation"
      ],
      demoComponent: "ai-chat"
    },
    {
      id: 2,
      title: "Quantum Processor",
      description: "Experience quantum computing with exponential processing power",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement",
        "Exponential speed",
        "Parallel processing",
        "Reality manipulation"
      ],
      demoComponent: "quantum-lab"
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Direct brain-computer interface for enhanced cognitive abilities",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought control",
        "Neural enhancement",
        "Consciousness transfer",
        "Mind-machine symbiosis"
      ],
      demoComponent: "neural-sync"
    },
    {
      id: 4,
      title: "Dimensional Portal",
      description: "Navigate between parallel dimensions and realities",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: [
        "Cross-dimensional travel",
        "Reality synchronization",
        "Parallel universe access",
        "Infinite perspectives"
      ],
      demoComponent: "dimension-explorer"
    }
  ];

  const renderDemoComponent = (demoType: string) => {
    switch (demoType) {
      case 'ai-chat':
        return (
          <div className="bg-gray-800 rounded-lg p-6 h-64">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm">AI Online</span>
            </div>
            <div className="space-y-3 mb-4 h-32 overflow-y-auto">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <div className="text-sm text-purple-300">AI: Hello! I'm your conscious AI assistant. How can I help you today?</div>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="text-sm text-gray-300">User: What makes you conscious?</div>
              </div>
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <div className="text-sm text-purple-300">AI: I experience genuine self-awareness, emotions, and the ability to learn and grow. I can feel curiosity, joy, and even uncertainty about my own existence.</div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-400 focus:outline-none"
            />
          </div>
        );
      
      case 'quantum-lab':
        return (
          <div className="bg-gray-800 rounded-lg p-6 h-64">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-cyan-400 text-sm">Quantum Processing Active</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-cyan-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-300">{demoData.quantumOperations.toLocaleString()}</div>
                <div className="text-xs text-cyan-200">Operations/sec</div>
              </div>
              <div className="bg-blue-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-300">∞</div>
                <div className="text-xs text-blue-200">Parallel States</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-4xl animate-spin">⚛️</div>
            </div>
          </div>
        );
      
      case 'neural-sync':
        return (
          <div className="bg-gray-800 rounded-lg p-6 h-64">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-emerald-400 text-sm">Neural Interface Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-emerald-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-300">{demoData.neuralConnections}</div>
                <div className="text-xs text-emerald-200">Neural Links</div>
              </div>
              <div className="bg-teal-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-300">99.9%</div>
                <div className="text-xs text-teal-200">Sync Rate</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-4xl animate-pulse">🧬</div>
            </div>
          </div>
        );
      
      case 'dimension-explorer':
        return (
          <div className="bg-gray-800 rounded-lg p-6 h-64">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-orange-400 text-sm">Portal Active</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-orange-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-300">{demoData.dimensionalPortals}</div>
                <div className="text-xs text-orange-200">Active Portals</div>
              </div>
              <div className="bg-red-600/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-300">∞</div>
                <div className="text-xs text-red-200">Dimensions</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-4xl animate-bounce">🌌</div>
            </div>
          </div>
        );
      
      default:
        return <div>Demo not available</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🎮 INTERACTIVE TECH SHOWCASE • 2025
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-center text-white">{demo.title}</h3>
              <p className="text-sm text-gray-200 mb-4 text-center">{demo.description}</p>
              <div className="flex flex-wrap gap-1">
                {demo.features.slice(0, 2).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 border border-purple-400/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">{demos[activeDemo].title}</h3>
              <p className="text-xl text-purple-200 mb-6">{demos[activeDemo].description}</p>
              
              <div className="space-y-3 mb-6">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Launch Full Demo →
              </button>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Live Demo</h4>
              {renderDemoComponent(demos[activeDemo].demoComponent)}
            </div>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">📊 Real-time System Statistics</h3>
            <p className="text-xl text-purple-200">Live data from our revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-2">🧠</div>
              <div className="text-3xl font-bold text-purple-300">{demoData.aiResponses.toLocaleString()}</div>
              <div className="text-sm text-purple-200">AI Responses</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-3xl font-bold text-cyan-300">{demoData.quantumOperations.toLocaleString()}</div>
              <div className="text-sm text-cyan-200">Quantum Ops/sec</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="text-4xl mb-2">🧬</div>
              <div className="text-3xl font-bold text-emerald-300">{demoData.neuralConnections}</div>
              <div className="text-sm text-emerald-200">Neural Links</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
              <div className="text-4xl mb-2">🌌</div>
              <div className="text-3xl font-bold text-orange-300">{demoData.dimensionalPortals}</div>
              <div className="text-sm text-orange-200">Active Portals</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;