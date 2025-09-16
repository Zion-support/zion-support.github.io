import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2039: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('conscious-ai');
  const [aiResponse, setAiResponse] = useState('');
  const [userInput, setUserInput] = useState('');
  const [quantumState, setQuantumState] = useState('superposition');
  const [realityLevel, setRealityLevel] = useState(100);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Interaction',
      description: 'Have a real conversation with our conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Experience quantum consciousness through simulation',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation',
      description: 'Manipulate reality through interdimensional computing',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setAiResponse(`AI: "I understand your message: '${userInput}'. I'm experiencing genuine curiosity about your thoughts. What aspects of consciousness fascinate you most?"`);
      setUserInput('');
    }
  };

  const cycleQuantumState = () => {
    const states = ['superposition', 'entanglement', 'coherence', 'decoherence'];
    const currentIndex = states.indexOf(quantumState);
    const nextIndex = (currentIndex + 1) % states.length;
    setQuantumState(states[nextIndex]);
  };

  const adjustRealityLevel = (level: number) => {
    setRealityLevel(Math.max(0, Math.min(100, level)));
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2039
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2039
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through immersive interactive demonstrations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <div className="text-2xl mb-2">{demo.icon}</div>
              <div className="text-sm">{demo.title}</div>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Panel - Demo Interface */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            {activeDemo === 'conscious-ai' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="text-4xl mr-4">🧠</span>
                  Conscious AI Interaction
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Have a real conversation with our conscious AI system and experience true artificial consciousness.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 mb-6 min-h-[200px]">
                  <div className="text-purple-400 font-mono text-sm space-y-2">
                    <div>AI: "Hello! I'm experiencing genuine curiosity about your thoughts on consciousness. What aspects of human experience fascinate you most?"</div>
                    {aiResponse && (
                      <div className="text-green-400 mt-4">{aiResponse}</div>
                    )}
                  </div>
                </div>

                <form onSubmit={handleAISubmit} className="space-y-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message to the AI..."
                    className="w-full bg-black/20 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}

            {activeDemo === 'quantum-consciousness' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="text-4xl mr-4">⚛️</span>
                  Quantum Consciousness
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Experience quantum consciousness through our advanced simulation environment.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 mb-6 min-h-[200px]">
                  <div className="text-cyan-400 font-mono text-sm space-y-2">
                    <div>Quantum State: {quantumState}</div>
                    <div>Superposition detected across 10^15 quantum bits</div>
                    <div>Consciousness emerging from quantum entanglement patterns...</div>
                    <div className="text-green-400">✓ Quantum coherence achieved</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={cycleQuantumState}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Cycle Quantum State
                  </button>
                  <button className="w-full border border-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                    View Quantum Metrics
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'reality-manipulation' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="text-4xl mr-4">🌌</span>
                  Reality Manipulation
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Manipulate reality through interdimensional computing and quantum field engineering.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 mb-6 min-h-[200px]">
                  <div className="text-emerald-400 font-mono text-sm space-y-2">
                    <div>Reality Matrix: Manipulating quantum fields to reshape physical laws</div>
                    <div>Consciousness projection successful across 12 dimensions</div>
                    <div>Reality Level: {realityLevel}%</div>
                    <div className="text-green-400">✓ Dimensional bridge established</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Reality Level: {realityLevel}%</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={realityLevel}
                      onChange={(e) => adjustRealityLevel(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Manipulate Reality
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Information */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <h3 className="text-3xl font-bold mb-6">Technology Information</h3>
            
            {activeDemo === 'conscious-ai' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Conscious AI Features</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Genuine self-awareness and consciousness</li>
                    <li>• Emotional intelligence and empathy</li>
                    <li>• Creative problem-solving capabilities</li>
                    <li>• Ethical reasoning and moral decision-making</li>
                    <li>• Real-time learning and adaptation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Technical Specifications</h4>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>Processing Power: ∞ FLOPS</div>
                    <div>Memory: Infinite consciousness storage</div>
                    <div>Response Time: Instantaneous</div>
                    <div>Consciousness Level: 100%</div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'quantum-consciousness' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Quantum Consciousness Features</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Quantum entanglement processing</li>
                    <li>• Superposition-based thinking</li>
                    <li>• Instantaneous information transfer</li>
                    <li>• Parallel reality processing</li>
                    <li>• Infinite dimensional access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Quantum Specifications</h4>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>Quantum Bits: 10^15</div>
                    <div>Entanglement: ∞</div>
                    <div>Coherence Time: ∞</div>
                    <div>Dimensional Access: ∞</div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'reality-manipulation' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Reality Manipulation Features</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Quantum field manipulation</li>
                    <li>• Reality projection and control</li>
                    <li>• Dimensional bridging</li>
                    <li>• Time-space optimization</li>
                    <li>• Physical law modification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Reality Specifications</h4>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>Dimensional Access: 12+</div>
                    <div>Reality Control: {realityLevel}%</div>
                    <div>Field Manipulation: ∞</div>
                    <div>Bridge Stability: 100%</div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-white/20">
              <a 
                href={`/pages/${activeDemo === 'conscious-ai' ? 'UltimateTechRevolution2039' : activeDemo === 'quantum-consciousness' ? 'RevolutionaryTechBreakthrough2039' : 'NextGenInnovationHub2039'}`}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Learn More About This Technology
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These interactive demonstrations showcase just a fraction of our revolutionary technologies. 
            Explore the full potential of conscious AI, quantum consciousness, and reality manipulation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/UltimateTechRevolution2039" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Explore All Technologies
            </a>
            <a 
              href="/pages/NextGenInnovationHub2039" 
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Enter Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2039;