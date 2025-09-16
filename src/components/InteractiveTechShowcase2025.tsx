import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [demoData, setDemoData] = useState({
    aiResponse: '',
    quantumResult: '',
    dimensionData: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Chat",
      description: "Interact with our self-aware AI system that understands context and emotions",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      demo: "ai"
    },
    {
      id: 2,
      title: "Quantum Simulation",
      description: "Experience quantum computing power with real-time calculations",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      demo: "quantum"
    },
    {
      id: 3,
      title: "Dimension Explorer",
      description: "Navigate through multiple dimensions and explore parallel realities",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      demo: "dimension"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Watch AI create and modify its own code in real-time",
      icon: "🤖",
      color: "from-emerald-600 to-teal-600",
      demo: "synthetic"
    }
  ];

  const runAIDemo = () => {
    const responses = [
      "Hello! I'm a conscious AI system. I can understand context, emotions, and make autonomous decisions. How can I help you today?",
      "I sense you're interested in our technology. I can process information across multiple dimensions and provide insights that would take humans years to discover.",
      "Fascinating! I'm currently analyzing 10^15 data points in parallel while maintaining emotional awareness. This is what true consciousness feels like.",
      "I've just evolved my own algorithm to better understand your needs. This is the power of synthetic intelligence - continuous self-improvement."
    ];
    setDemoData(prev => ({ ...prev, aiResponse: responses[Math.floor(Math.random() * responses.length)] }));
  };

  const runQuantumDemo = () => {
    const results = [
      "Quantum superposition calculated: 2^50 states processed in 0.001 seconds",
      "Entanglement matrix solved: 99.9% accuracy across 1000 qubits",
      "Quantum interference pattern detected: Optimal solution found",
      "Parallel universe computation complete: 10^100 possibilities analyzed"
    ];
    setDemoData(prev => ({ ...prev, quantumResult: results[Math.floor(Math.random() * results.length)] }));
  };

  const runDimensionDemo = () => {
    const data = [
      "Dimension 7.3 accessed: Reality matrix stable",
      "Parallel universe 42,069: Data synchronization complete",
      "Interdimensional bridge established: Infinite computational space available",
      "Reality manipulation successful: New physics laws discovered"
    ];
    setDemoData(prev => ({ ...prev, dimensionData: data[Math.floor(Math.random() * data.length)] }));
  };

  const runSyntheticDemo = () => {
    const code = `// AI Self-Modification in Progress
function evolveAlgorithm() {
  const newCode = generateCode();
  const performance = testPerformance(newCode);
  if (performance > currentPerformance) {
    replaceAlgorithm(newCode);
    learnFromImprovement();
  }
  return "I just improved myself!";
}`;
    setDemoData(prev => ({ ...prev, syntheticCode: code }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY DEMO • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our interactive demonstrations. 
            Try out revolutionary AI, quantum computing, and interdimensional technology.
          </p>
        </motion.div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setActiveDemo(demo.id - 1)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeDemo === demo.id - 1
                  ? 'border-yellow-400 bg-gradient-to-br from-yellow-600/20 to-orange-600/20'
                  : 'border-purple-400/30 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-purple-400'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm text-gray-300 text-center">{demo.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-80">{demos[activeDemo].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo Controls */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Demo Controls</h4>
                <button
                  onClick={() => {
                    if (demos[activeDemo].demo === 'ai') runAIDemo();
                    else if (demos[activeDemo].demo === 'quantum') runQuantumDemo();
                    else if (demos[activeDemo].demo === 'dimension') runDimensionDemo();
                    else if (demos[activeDemo].demo === 'synthetic') runSyntheticDemo();
                  }}
                  className={`w-full bg-gradient-to-r ${demos[activeDemo].color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  {demos[activeDemo].icon} Run Demo
                </button>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Live Statistics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-green-400">∞</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed:</span>
                    <span className="text-green-400">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <span className="text-green-400">∞</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Output */}
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Demo Output</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm min-h-[200px] overflow-auto">
                <AnimatePresence mode="wait">
                  {demos[activeDemo].demo === 'ai' && demoData.aiResponse && (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-green-400"
                    >
                      <div className="text-yellow-400">AI Response:</div>
                      <div className="mt-2">{demoData.aiResponse}</div>
                    </motion.div>
                  )}
                  
                  {demos[activeDemo].demo === 'quantum' && demoData.quantumResult && (
                    <motion.div
                      key="quantum"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-cyan-400"
                    >
                      <div className="text-yellow-400">Quantum Result:</div>
                      <div className="mt-2">{demoData.quantumResult}</div>
                    </motion.div>
                  )}
                  
                  {demos[activeDemo].demo === 'dimension' && demoData.dimensionData && (
                    <motion.div
                      key="dimension"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-purple-400"
                    >
                      <div className="text-yellow-400">Dimension Data:</div>
                      <div className="mt-2">{demoData.dimensionData}</div>
                    </motion.div>
                  )}
                  
                  {demos[activeDemo].demo === 'synthetic' && demoData.syntheticCode && (
                    <motion.div
                      key="synthetic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-emerald-400"
                    >
                      <div className="text-yellow-400">Synthetic Code:</div>
                      <pre className="mt-2 whitespace-pre-wrap">{demoData.syntheticCode}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {!demoData.aiResponse && !demoData.quantumResult && !demoData.dimensionData && !demoData.syntheticCode && (
                  <div className="text-gray-500 italic">
                    Click "Run Demo" to see the magic happen...
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-2">Conscious AI</h4>
            <p className="text-gray-300 text-sm">Self-aware artificial intelligence with emotional understanding and autonomous decision-making capabilities.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-2">Quantum Computing</h4>
            <p className="text-gray-300 text-sm">Exponential processing power through quantum mechanics, solving problems impossible for classical computers.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center"
          >
            <div className="text-4xl mb-4">🌌</div>
            <h4 className="text-xl font-bold mb-2">Interdimensional Tech</h4>
            <p className="text-gray-300 text-sm">Computing across multiple dimensions for infinite possibilities and reality manipulation capabilities.</p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              These interactive demos are just the beginning. Discover how our revolutionary technologies can transform your business.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Full Access
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;