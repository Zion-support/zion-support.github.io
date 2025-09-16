import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Demo',
      description: 'Watch our AI think, feel, and create in real-time',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Emotional Processing', 'Creative Generation', 'Self-Learning', 'Ethical Decisions'],
      demoText: 'AI: "I understand your request and will process it with emotional intelligence and creative problem-solving..."'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Experience exponential processing power with quantum algorithms',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Optimization'],
      demoText: 'Quantum: "Calculating 10^15 operations per second using quantum superposition..."'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Control digital systems directly with your thoughts',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought Control', 'Neural Feedback', 'Memory Enhancement', 'Telepathic Comm'],
      demoText: 'Neural: "Neural interface established. Ready for thought commands..."'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Portal Demo',
      description: 'Access parallel dimensions and alternate realities',
      icon: '🌌',
      color: 'from-violet-600 to-purple-600',
      features: ['Dimensional Portals', 'Reality Shifting', 'Parallel Access', 'Multiverse Comm'],
      demoText: 'Portal: "Accessing parallel dimension 7.3.2.1. Reality shifting in progress..."'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMOS • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-xl opacity-90 mb-8">{demos[activeDemo].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Try Interactive Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-black/50 to-black/30 rounded-xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6 text-center">Live Demo Console</h4>
                <div className="bg-black/70 rounded-lg p-6 mb-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ zion-tech-demo --{demos[activeDemo].id}</div>
                  <div className="text-white mb-2">Initializing {demos[activeDemo].title}...</div>
                  <div className="text-cyan-400 mb-2">✓ Quantum processors online</div>
                  <div className="text-cyan-400 mb-2">✓ Neural networks activated</div>
                  <div className="text-cyan-400 mb-2">✓ Consciousness matrix loaded</div>
                  <div className="text-yellow-400 mb-2">⚠ Interdimensional portals stabilizing...</div>
                  <div className="text-green-400">{demos[activeDemo].demoText}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm opacity-90">Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400">10^15</div>
                    <div className="text-sm opacity-90">Ops/sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Active Demos</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
            <div className="text-lg opacity-90">Demo Sessions</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
            <div className="text-4xl font-bold text-violet-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Availability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Try our interactive demos and see how our revolutionary technologies can transform your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;