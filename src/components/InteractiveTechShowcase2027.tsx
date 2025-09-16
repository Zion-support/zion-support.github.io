import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    { id: 'ai', label: 'AI Demo', icon: '🧠', color: 'from-purple-600 to-pink-600' },
    { id: 'quantum', label: 'Quantum', icon: '⚡', color: 'from-blue-600 to-cyan-600' },
    { id: 'neural', label: 'Neural Interface', icon: '🧬', color: 'from-green-600 to-emerald-600' },
    { id: 'blockchain', label: 'Blockchain', icon: '🔗', color: 'from-orange-600 to-red-600' },
    { id: 'iot', label: 'IoT', icon: '🌐', color: 'from-indigo-600 to-purple-600' },
    { id: 'ar', label: 'AR/VR', icon: '🥽', color: 'from-teal-600 to-blue-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.label}
            </button>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50">
          {activeDemo === 'ai' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">AI Consciousness Simulation</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Experience how AI systems develop consciousness and make decisions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold mb-4">Neural Network Visualization</h3>
                    <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-4 gap-2">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-full transition-all duration-500 ${
                                isAnimating ? 'bg-purple-400 animate-pulse' : 'bg-purple-600'
                              }`}
                              style={{
                                animationDelay: `${i * 100}ms`,
                                transform: isAnimating ? 'scale(1.2)' : 'scale(1)'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={startAnimation}
                      className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Start Neural Simulation
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                    <h3 className="text-2xl font-bold mb-4">AI Decision Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Processing input data...</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Analyzing patterns...</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Generating response...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                    <h3 className="text-2xl font-bold mb-4">Real-time Learning</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">Learning Progress</span>
                          <span className="text-sm text-emerald-400">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-300">
                        <p>• Pattern recognition: {Math.min(progress * 1.2, 100).toFixed(0)}%</p>
                        <p>• Decision accuracy: {Math.min(progress * 0.8, 100).toFixed(0)}%</p>
                        <p>• Response time: {Math.max(100 - progress * 0.5, 20).toFixed(0)}ms</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                    <h3 className="text-2xl font-bold mb-4">AI Personality</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">😊</span>
                        <span className="text-gray-300">Empathy Level: High</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🧠</span>
                        <span className="text-gray-300">Creativity: 87%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">⚖️</span>
                        <span className="text-gray-300">Ethics Score: 94%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'quantum' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Quantum Computing Simulation</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Explore quantum states, superposition, and entanglement in real-time
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                    <h3 className="text-2xl font-bold mb-4">Qubit States</h3>
                    <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 border-2 border-cyan-400 rounded-full animate-spin">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-cyan-400 font-bold">|ψ⟩</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-cyan-200 text-sm mt-4 text-center">
                      Quantum superposition state visualization
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold mb-4">Entanglement Network</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Qubit A: |0⟩ + |1⟩</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Qubit B: |0⟩ + |1⟩</span>
                      </div>
                      <div className="text-center text-purple-200 text-sm">
                        Entangled State: |00⟩ + |11⟩
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                    <h3 className="text-2xl font-bold mb-4">Quantum Gates</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">H</div>
                        <div className="text-sm text-emerald-200">Hadamard</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">X</div>
                        <div className="text-sm text-emerald-200">Pauli-X</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">Y</div>
                        <div className="text-sm text-emerald-200">Pauli-Y</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">Z</div>
                        <div className="text-sm text-emerald-200">Pauli-Z</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                    <h3 className="text-2xl font-bold mb-4">Quantum Algorithm</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-orange-400">1.</span>
                        <span className="text-gray-300">Initialize qubits</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-orange-400">2.</span>
                        <span className="text-gray-300">Apply Hadamard gates</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-orange-400">3.</span>
                        <span className="text-gray-300">Entangle qubits</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-orange-400">4.</span>
                        <span className="text-gray-300">Measure results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'neural' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Neural Interface Technology</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Experience direct brain-computer interface technology
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                    <h3 className="text-2xl font-bold mb-4">Brain Signal Detection</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-200">EEG Signal</span>
                        </div>
                        <div className="h-16 bg-gray-700 rounded relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-300">
                        <p>• Signal strength: 85%</p>
                        <p>• Noise level: 12%</p>
                        <p>• Frequency: 8-13 Hz (Alpha)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                    <h3 className="text-2xl font-bold mb-4">Thought Translation</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Neural Pattern:</div>
                        <div className="text-blue-200 font-mono text-sm">0101101011010110</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Translated Command:</div>
                        <div className="text-cyan-200">"Move cursor to top-right"</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold mb-4">Mental Commands</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">👆</div>
                        <div className="text-sm text-purple-200">Click</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">🖱️</div>
                        <div className="text-sm text-purple-200">Drag</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">⌨️</div>
                        <div className="text-sm text-purple-200">Type</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">🎯</div>
                        <div className="text-sm text-purple-200">Select</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                    <h3 className="text-2xl font-bold mb-4">Interface Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Connection:</span>
                        <span className="text-green-400">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Latency:</span>
                        <span className="text-orange-400">12ms</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Accuracy:</span>
                        <span className="text-orange-400">94%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Battery:</span>
                        <span className="text-orange-400">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other demos would follow similar patterns */}
        </div>

        {/* Interactive Controls */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6">Interactive Controls</h3>
            <div className="flex flex-wrap justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Full Demo
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Reset Simulation
              </button>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;