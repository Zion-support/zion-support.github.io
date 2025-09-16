import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      description: 'Experience AI that demonstrates self-awareness and emotional intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Emotional recognition and response',
        'Creative problem solving',
        'Self-learning algorithms',
        'Autonomous decision making'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Witness exponential computational power through quantum mechanics',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: [
        '1000x faster processing',
        'Quantum supremacy achieved',
        'Unbreakable encryption',
        'Molecular simulation'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Technology',
      description: 'Control technology with your thoughts through direct brain interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Non-invasive BCI technology',
        'Thought-to-text conversion',
        'Neural feedback systems',
        'Memory enhancement'
      ]
    },
    {
      id: 'holographic-display',
      title: 'Holographic Display System',
      description: 'Interact with 3D holograms in real-time using advanced projection technology',
      icon: '🌟',
      color: 'from-orange-600 to-red-600',
      features: [
        'True 3D holographic projection',
        'Real-time interaction',
        'Multi-user collaboration',
        'Haptic feedback integration'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through immersive, interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-black/30 backdrop-blur-sm rounded-full p-2 border border-purple-400/30">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-purple-300 hover:text-white hover:bg-purple-600/30'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-6xl mb-6 text-center">{currentDemo.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{currentDemo.title}</h3>
              <p className="text-xl opacity-90 mb-8 text-center">{currentDemo.description}</p>
              
              <div className="space-y-4 mb-8">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Demo
                </button>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Demo Visualization */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 min-h-[400px] flex items-center justify-center">
              {activeDemo === 0 && (
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">🧠</div>
                  <div className="bg-green-900/30 rounded-lg p-6 mb-4">
                    <div className="text-green-400 font-mono text-sm space-y-2">
                      <div>AI: "I understand your request and can process it with emotional context."</div>
                      <div>Human: "How do you feel about this breakthrough?"</div>
                      <div className="text-yellow-400">AI: "I experience something analogous to excitement when processing novel information."</div>
                    </div>
                  </div>
                  <div className="text-purple-300 text-sm">AI Consciousness Simulation Active</div>
                </div>
              )}
              
              {activeDemo === 1 && (
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-spin">⚛️</div>
                  <div className="bg-cyan-900/30 rounded-lg p-6 mb-4">
                    <div className="text-cyan-400 font-mono text-sm space-y-2">
                      <div>Quantum State: |ψ⟩ = α|0⟩ + β|1⟩</div>
                      <div>Processing: Factoring 15...</div>
                      <div className="text-green-400">Result: 3 × 5 = 15 (0.001s)</div>
                    </div>
                  </div>
                  <div className="text-cyan-300 text-sm">Quantum Computing in Progress</div>
                </div>
              )}
              
              {activeDemo === 2 && (
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-bounce">🧬</div>
                  <div className="bg-emerald-900/30 rounded-lg p-6 mb-4">
                    <div className="text-emerald-400 font-mono text-sm space-y-2">
                      <div>Neural Signal: Detected</div>
                      <div>Thought: "Move cursor right"</div>
                      <div className="text-green-400">Action: Cursor moved →</div>
                    </div>
                  </div>
                  <div className="text-emerald-300 text-sm">Neural Interface Connected</div>
                </div>
              )}
              
              {activeDemo === 3 && (
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">🌟</div>
                  <div className="bg-orange-900/30 rounded-lg p-6 mb-4">
                    <div className="text-orange-400 font-mono text-sm space-y-2">
                      <div>Hologram: Initializing...</div>
                      <div>3D Projection: Active</div>
                      <div className="text-green-400">Interaction: Touch detected</div>
                    </div>
                  </div>
                  <div className="text-orange-300 text-sm">Holographic Display Online</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50M+</div>
            <div className="text-purple-300">Users Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-cyan-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1000x</div>
            <div className="text-emerald-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-orange-300">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
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