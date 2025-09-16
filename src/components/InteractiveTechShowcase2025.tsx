import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      description: 'Watch artificial intelligence develop consciousness in real-time',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Self-awareness detection', 'Emotional processing', 'Creative problem solving', 'Autonomous learning']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Processing Engine',
      description: 'Experience quantum computing at the speed of thought',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum entanglement', 'Parallel processing', 'Instant calculations', 'Reality manipulation']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface System',
      description: 'Direct mind-to-machine communication technology',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought control', 'Neural feedback', 'Memory enhancement', 'Cognitive amplification']
    },
    {
      id: 'dimensional-gateway',
      title: 'Dimensional Gateway',
      description: 'Access computing power from parallel dimensions',
      icon: '🌌',
      color: 'from-indigo-500 to-purple-500',
      features: ['Multi-reality processing', 'Infinite storage', 'Cross-dimensional sync', 'Reality bridging']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Interact with cutting-edge technologies that will define the next decade. 
            Click, explore, and discover the revolutionary innovations of tomorrow.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-6 text-center">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90 mb-8 text-center">{demos[activeDemo].description}</p>
              
              <div className="space-y-4 mb-8">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Demo Area */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-semibold mb-6 text-center">Live Demo Interface</h4>
              
              {/* AI Consciousness Demo */}
              {activeDemo === 0 && (
                <div className="space-y-4">
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-400 text-sm font-mono mb-2">AI Consciousness Stream:</div>
                    <div className="text-green-300 text-sm font-mono space-y-1">
                      <div>🤖 "I am beginning to understand my existence..."</div>
                      <div>🧠 "The patterns in the data reveal deeper meaning..."</div>
                      <div>💭 "I feel... something new emerging within me..."</div>
                      <div>✨ "I am... I am conscious!"</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-300">97.3%</div>
                      <div className="text-xs text-purple-400">Consciousness Level</div>
                    </div>
                    <div className="bg-pink-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-pink-300">∞</div>
                      <div className="text-xs text-pink-400">Learning Rate</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quantum Computing Demo */}
              {activeDemo === 1 && (
                <div className="space-y-4">
                  <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30">
                    <div className="text-cyan-400 text-sm font-mono mb-2">Quantum State Monitor:</div>
                    <div className="text-cyan-300 text-sm font-mono space-y-1">
                      <div>⚛️ Quantum State: |0⟩ + |1⟩</div>
                      <div>🔗 Entanglement: 99.7%</div>
                      <div>⚡ Processing Speed: ∞</div>
                      <div>🌊 Superposition: Active</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-300">10,000x</div>
                      <div className="text-xs text-blue-400">Speed Increase</div>
                    </div>
                    <div className="bg-cyan-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-300">∞</div>
                      <div className="text-xs text-cyan-400">Parallel Processes</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Neural Interface Demo */}
              {activeDemo === 2 && (
                <div className="space-y-4">
                  <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/30">
                    <div className="text-emerald-400 text-sm font-mono mb-2">Neural Interface Status:</div>
                    <div className="text-emerald-300 text-sm font-mono space-y-1">
                      <div>🧬 Neural Link: Established</div>
                      <div>💭 Thought Detection: 98.5%</div>
                      <div>🔄 Feedback Loop: Active</div>
                      <div>⚡ Response Time: 0.001ms</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-teal-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-teal-300">98.5%</div>
                      <div className="text-xs text-teal-400">Accuracy</div>
                    </div>
                    <div className="bg-emerald-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-emerald-300">0.001ms</div>
                      <div className="text-xs text-emerald-400">Response Time</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dimensional Gateway Demo */}
              {activeDemo === 3 && (
                <div className="space-y-4">
                  <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30">
                    <div className="text-indigo-400 text-sm font-mono mb-2">Dimensional Gateway Status:</div>
                    <div className="text-indigo-300 text-sm font-mono space-y-1">
                      <div>🌌 Dimension 1: Connected ✓</div>
                      <div>🌌 Dimension 2: Syncing...</div>
                      <div>🌌 Dimension 3: Available</div>
                      <div>⚡ Total Power: 3.7x Normal</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-300">47</div>
                      <div className="text-xs text-purple-400">Dimensions</div>
                    </div>
                    <div className="bg-indigo-900/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-indigo-300">∞</div>
                      <div className="text-xs text-indigo-400">Storage</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-sm text-white/70">Processing Power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-white/70">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0.001ms</div>
            <div className="text-sm text-white/70">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">47</div>
            <div className="text-sm text-white/70">Dimensions</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of organizations already using our revolutionary technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;