import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation Hub',
      description: 'Experience the power of 500+ AI models working together',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Synthetic Intelligence Processing',
        'Quantum Neural Networks',
        'Autonomous AI Agents',
        'Real-time Learning Systems'
      ]
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Transcend reality with quantum consciousness technology',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Superposition States',
        'Consciousness Entanglement',
        'Reality Manipulation',
        'Time Transcendence'
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Tech Revolution',
      description: 'Pioneer the cosmos with revolutionary space technology',
      icon: '🚀',
      color: 'from-slate-600 to-blue-600',
      features: [
        'Quantum Propulsion Systems',
        'AI-Powered Spacecraft',
        'Terraforming Technology',
        'Interstellar Navigation'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      description: 'Connect mind and machine with direct neural interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Brain-Computer Communication',
        'Thought-Controlled Systems',
        'Neural Pattern Recognition',
        'Cognitive Enhancement'
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
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Experience our revolutionary technologies in action with interactive demos and real-time simulations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Demo Selection */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-6">Choose Your Technology Experience</h3>
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
              className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} shadow-2xl scale-105`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{demo.icon}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                  <p className="text-sm opacity-90">{demo.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Demo Display */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{currentDemo.icon}</div>
            <h3 className="text-3xl font-bold mb-2">{currentDemo.title}</h3>
            <p className="text-lg opacity-90">{currentDemo.description}</p>
          </div>

          {/* Animated Demo Interface */}
          <div className={`bg-black/30 rounded-xl p-6 mb-6 transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-green-400 font-mono text-sm space-y-2">
              <div className="animate-pulse">⚡ Initializing {currentDemo.title}...</div>
              <div className="animate-pulse">🔧 Loading quantum processors...</div>
              <div className="animate-pulse">🧠 Neural networks synchronizing...</div>
              <div className="animate-pulse">✨ {currentDemo.title} systems online</div>
              <div className="animate-pulse">🚀 Ready for interactive demonstration</div>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold mb-4">Key Features:</h4>
            {currentDemo.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Interactive Controls */}
          <div className="mt-8 space-y-4">
            <button className={`w-full bg-gradient-to-r ${currentDemo.color} text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold`}>
              🚀 Launch {currentDemo.title} Demo
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold">
                📊 View Analytics
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold">
                🔧 Configure Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stats */}
      <div className="mt-12 grid md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
          <div className="text-sm opacity-90">AI Models</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-sm opacity-90">Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
          <div className="text-sm opacity-90">Operation</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
          <div className="text-sm opacity-90">Possibilities</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;