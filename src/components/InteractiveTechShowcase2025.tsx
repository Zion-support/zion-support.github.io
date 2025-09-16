import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience AI that thinks and feels like humans',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative thinking', 'Autonomous decisions'],
      stats: { accuracy: '99.9%', efficiency: '+500%', learning: 'Continuous' }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Simulator',
      description: 'See quantum processors solve impossible problems',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: ['Exponential speed', 'Quantum cryptography', 'Molecular simulation', 'Optimization'],
      stats: { speed: '10,000x', power: 'Unlimited', precision: '99.99%' }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Experience',
      description: 'Control devices with your thoughts',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought control', 'Enhanced memory', 'Neural feedback', 'Mind-machine sync'],
      stats: { latency: '0.1ms', precision: '99.8%', range: 'Full spectrum' }
    },
    {
      id: 'holographic-display',
      title: 'Holographic Display Demo',
      description: 'Interact with true 3D holographic content',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
      features: ['True 3D visualization', 'Immersive experiences', 'Interactive holograms', 'Spatial computing'],
      stats: { resolution: '8K', depth: '360°', refresh: '120Hz' }
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

  const handleDemoClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECH SHOWCASE 2025 • LIVE DEMOS
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          Experience the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Future</span> Live
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Interact with our revolutionary technologies through live demonstrations and see the future in action.
        </p>
      </div>

      {/* Demo Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => handleDemoClick(index)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDemo === index
                ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl">{demo.icon}</span>
            <span>{demo.title}</span>
          </button>
        ))}
      </div>

      {/* Active Demo Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{demos[activeDemo].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-gray-300 text-lg">{demos[activeDemo].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(demos[activeDemo].stats).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}>
                  Try Live Demo →
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-400/30">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Live Demo</h4>
                <p className="text-gray-300">Interactive demonstration in progress...</p>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="text-green-400 font-mono text-sm mb-2">$ {demos[activeDemo].id}-demo --live</div>
                <div className="text-white font-mono text-sm">
                  <div className="animate-pulse">Initializing {demos[activeDemo].title}...</div>
                  <div className="animate-pulse">Loading neural networks...</div>
                  <div className="animate-pulse">Establishing quantum connections...</div>
                  <div className="text-green-400">✓ Demo ready! Click to interact</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">Live</div>
                  <div className="text-sm text-gray-400">Status</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Interactive Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-white mb-2">Personalized Experience</h3>
          <p className="text-gray-300 text-sm mb-4">
            AI adapts the demo to your interests and expertise level
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            Customize Demo →
          </button>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
          <p className="text-gray-300 text-sm mb-4">
            See live performance metrics and impact data
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            View Analytics →
          </button>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
          <p className="text-gray-300 text-sm mb-4">
            Connect with our technology experts during the demo
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            Get Expert Help →
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book a personalized demo session with our technology experts and see how our innovations can transform your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105">
            Book Personal Demo →
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
            Download Demo Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
