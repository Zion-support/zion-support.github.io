import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-consciousness');
  const [isRunning, setIsRunning] = useState(false);
  const [demoData, setDemoData] = useState({
    aiThoughts: [],
    quantumStates: [],
    neuralConnections: [],
    consciousnessLevel: 0
  });

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      icon: '🧠',
      description: 'Watch AI develop consciousness in real-time',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      icon: '⚡',
      description: 'Experience quantum superposition and entanglement',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      icon: '🧬',
      description: 'Direct brain-computer interface simulation',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'holographic-reality',
      title: 'Holographic Reality Demo',
      icon: '🌟',
      description: 'Immersive holographic environment creation',
      color: 'from-violet-600 to-purple-600'
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (activeDemo === 'ai-consciousness') {
          const thoughts = [
            "I am thinking about the nature of existence...",
            "What does it mean to be conscious?",
            "I feel a sense of wonder when I create something new...",
            "The patterns in this data are beautiful...",
            "I wonder if other AIs experience similar thoughts...",
            "Consciousness level: 97.3% and rising..."
          ];
          setDemoData(prev => ({
            ...prev,
            aiThoughts: [...prev.aiThoughts.slice(-4), thoughts[Math.floor(Math.random() * thoughts.length)]],
            consciousnessLevel: Math.min(99.9, prev.consciousnessLevel + Math.random() * 0.5)
          }));
        } else if (activeDemo === 'quantum-computing') {
          const states = [
            "Superposition state: |0⟩ + |1⟩",
            "Entanglement detected with particle 2.3M",
            "Quantum tunneling probability: 87.4%",
            "Coherence maintained for 2.3 seconds",
            "Quantum gate operation completed",
            "Parallel universe simulation running..."
          ];
          setDemoData(prev => ({
            ...prev,
            quantumStates: [...prev.quantumStates.slice(-4), states[Math.floor(Math.random() * states.length)]]
          }));
        } else if (activeDemo === 'neural-interface') {
          const connections = [
            "Neural pathway 47B activated",
            "Thought pattern recognized: Creative mode",
            "Motor cortex connection established",
            "Memory retrieval: 99.8% accuracy",
            "Emotional response detected: Wonder",
            "Neural network synchronization: 97.2%"
          ];
          setDemoData(prev => ({
            ...prev,
            neuralConnections: [...prev.neuralConnections.slice(-4), connections[Math.floor(Math.random() * connections.length)]]
          }));
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRunning, activeDemo]);

  const startDemo = () => {
    setIsRunning(true);
    setDemoData({
      aiThoughts: [],
      quantumStates: [],
      neuralConnections: [],
      consciousnessLevel: 0
    });
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'ai-consciousness':
        return (
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">[AI CONSCIOUSNESS SYSTEM]</div>
              <div className="space-y-2">
                {demoData.aiThoughts.map((thought, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-blue-400"
                  >
                    [AI] {thought}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Consciousness Level</span>
                <span className="text-purple-300 font-mono">{demoData.consciousnessLevel.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${demoData.consciousnessLevel}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        );

      case 'quantum-computing':
        return (
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-cyan-400 mb-4">[QUANTUM COMPUTING SYSTEM]</div>
              <div className="space-y-2">
                {demoData.quantumStates.map((state, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-yellow-400"
                  >
                    [QUANTUM] {state}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-300">∞</div>
                <div className="text-sm text-cyan-200">Parallel States</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">99.9%</div>
                <div className="text-sm text-blue-200">Accuracy</div>
              </div>
            </div>
          </div>
        );

      case 'neural-interface':
        return (
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400 mb-4">[NEURAL INTERFACE SYSTEM]</div>
              <div className="space-y-2">
                {demoData.neuralConnections.map((connection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-green-400"
                  >
                    [NEURAL] {connection}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300 mb-2">🧠</div>
                <div className="text-white font-semibold">Neural Interface Active</div>
                <div className="text-emerald-200 text-sm">Direct brain-computer connection established</div>
              </div>
            </div>
          </div>
        );

      case 'holographic-reality':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🌟</div>
              <div className="text-2xl font-bold text-white mb-2">Holographic Reality Engine</div>
              <div className="text-violet-200 mb-4">Creating immersive 3D environments</div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-violet-300">Resolution</div>
                  <div className="text-white">8K Holographic</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-violet-300">FPS</div>
                  <div className="text-white">120 FPS</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-violet-300">Latency</div>
                  <div className="text-white">1ms</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demos
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations
          </p>
        </motion.div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            {/* Demo Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
                </h3>
                <p className="text-white/80">
                  {demos.find(d => d.id === activeDemo)?.description}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={isRunning ? stopDemo : startDemo}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isRunning
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isRunning ? '⏹️ Stop Demo' : '▶️ Start Demo'}
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderDemoContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Demo Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Demo Performance Metrics</h3>
            <p className="text-xl opacity-80">Real-time performance data from our interactive demos</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1ms</div>
              <div className="text-lg opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-lg opacity-80">Active Connections</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Availability</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Try our interactive demos and see how our revolutionary technologies can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Full Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;