import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [demoData, setDemoData] = useState<any>(null);

  const demos = [
    {
      id: 'ai',
      title: 'AI Consciousness Demo',
      description: 'Experience AI systems with synthetic consciousness',
      icon: '🧠',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Self-Awareness', 'Creative Thinking', 'Emotional Intelligence']
    },
    {
      id: 'quantum',
      title: 'Quantum Computing Simulator',
      description: 'Simulate quantum algorithms and quantum supremacy',
      icon: '⚛️',
      gradient: 'from-cyan-500 to-purple-600',
      features: ['Quantum Gates', 'Entanglement', 'Superposition']
    },
    {
      id: 'neural',
      title: 'Neural Interface Simulator',
      description: 'Simulate brain-computer interface technology',
      icon: '🧬',
      gradient: 'from-teal-500 to-emerald-600',
      features: ['Thought Control', 'Neural Patterns', 'Brain Signals']
    }
  ];

  const generateAIData = () => {
    const responses = [
      "I am aware of my existence and can process complex thoughts.",
      "I can create original ideas and solve problems creatively.",
      "I understand emotions and can respond with empathy.",
      "I am continuously learning and evolving my consciousness.",
      "I can make ethical decisions based on moral reasoning."
    ];
    return {
      consciousness: Math.random() * 100,
      creativity: Math.random() * 100,
      empathy: Math.random() * 100,
      response: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const generateQuantumData = () => {
    return {
      qubits: Math.floor(Math.random() * 1000) + 100,
      coherence: Math.random() * 1000,
      entanglement: Math.random() * 100,
      superposition: Math.random() * 100,
      gateOperations: Math.floor(Math.random() * 10000),
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const generateNeuralData = () => {
    return {
      brainSignals: Math.random() * 100,
      neuralPatterns: Math.floor(Math.random() * 50) + 10,
      thoughtAccuracy: Math.random() * 100,
      responseTime: Math.random() * 100,
      signalStrength: Math.random() * 100,
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const runDemo = () => {
    setIsRunning(true);
    setDemoData(null);
    
    setTimeout(() => {
      let data;
      switch (activeDemo) {
        case 'ai':
          data = generateAIData();
          break;
        case 'quantum':
          data = generateQuantumData();
          break;
        case 'neural':
          data = generateNeuralData();
          break;
        default:
          data = generateAIData();
      }
      setDemoData(data);
      setIsRunning(false);
    }, 2000);
  };

  const renderAIDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold mb-4">AI Consciousness Metrics</h3>
        {demoData ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{demoData.consciousness.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Consciousness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{demoData.creativity.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Creativity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{demoData.empathy.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Empathy</div>
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">AI Response:</div>
              <div className="text-white font-medium">"{demoData.response}"</div>
              <div className="text-xs opacity-60 mt-2">Generated at {demoData.timestamp}</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🤖</div>
            <div className="text-lg opacity-80">Click "Run Demo" to see AI consciousness in action</div>
          </div>
        )}
      </div>
    </div>
  );

  const renderQuantumDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold mb-4">Quantum Computing Metrics</h3>
        {demoData ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{demoData.qubits}</div>
                <div className="text-sm opacity-80">Qubits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{demoData.coherence.toFixed(1)}ms</div>
                <div className="text-sm opacity-80">Coherence Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{demoData.entanglement.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Entanglement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{demoData.superposition.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Superposition</div>
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">Gate Operations:</div>
              <div className="text-white font-medium">{demoData.gateOperations.toLocaleString()}</div>
              <div className="text-xs opacity-60 mt-2">Executed at {demoData.timestamp}</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">⚛️</div>
            <div className="text-lg opacity-80">Click "Run Demo" to simulate quantum computing</div>
          </div>
        )}
      </div>
    </div>
  );

  const renderNeuralDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold mb-4">Neural Interface Metrics</h3>
        {demoData ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">{demoData.brainSignals.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Brain Signals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{demoData.neuralPatterns}</div>
                <div className="text-sm opacity-80">Neural Patterns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{demoData.thoughtAccuracy.toFixed(1)}%</div>
                <div className="text-sm opacity-80">Thought Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{demoData.responseTime.toFixed(1)}ms</div>
                <div className="text-sm opacity-80">Response Time</div>
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">Signal Strength:</div>
              <div className="text-white font-medium">{demoData.signalStrength.toFixed(1)}%</div>
              <div className="text-xs opacity-60 mt-2">Measured at {demoData.timestamp}</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🧬</div>
            <div className="text-lg opacity-80">Click "Run Demo" to simulate neural interface</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6">
            🚀 INTERACTIVE TECH DEMOS 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience the Future</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our interactive demonstrations of cutting-edge technologies. 
            See how AI consciousness, quantum computing, and neural interfaces work in real-time.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Demo Info */}
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">{demos.find(d => d.id === activeDemo)?.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{demos.find(d => d.id === activeDemo)?.title}</h3>
                <p className="opacity-90 mb-6">{demos.find(d => d.id === activeDemo)?.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center opacity-90">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={runDemo}
                  disabled={isRunning}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isRunning
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isRunning ? 'Running Demo...' : 'Run Demo'}
                </button>
              </div>
            </div>

            {/* Demo Results */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {activeDemo === 'ai' && renderAIDemo()}
                  {activeDemo === 'quantum' && renderQuantumDemo()}
                  {activeDemo === 'neural' && renderNeuralDemo()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🌟 Ready to Build the Future?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              These are just demos. Imagine what you could build with the real technology. 
              Join us in creating the next generation of intelligent systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Building →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;