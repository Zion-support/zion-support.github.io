import React, { useState } from 'react';

const InteractiveTechShowcase2030: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'consciousness',
      title: 'Consciousness Computing Demo',
      description: 'Experience direct neural interface technology',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time thought-to-action conversion',
        'Neural pattern visualization',
        'Consciousness transfer simulation',
        'AI-human mind fusion'
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality through quantum computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum state manipulation',
        'Reality simulation controls',
        'Matter creation interface',
        'Time-space continuum access'
      ]
    },
    {
      id: 'synthetic',
      title: 'Synthetic Intelligence Lab',
      description: 'Interact with advanced AI consciousness',
      icon: '🤖',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'AI consciousness interaction',
        'Synthetic emotion display',
        'Creative AI collaboration',
        'Intelligence evolution tracking'
      ]
    },
    {
      id: 'dimensional',
      title: 'Interdimensional Portal',
      description: 'Access parallel universes and alternate realities',
      icon: '🌌',
      color: 'from-violet-600 to-purple-600',
      features: [
        'Multi-dimensional navigation',
        'Parallel universe exploration',
        'Reality comparison tools',
        'Universal consciousness network'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY DEMO • 2030
          </div>
          <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Showcase 2030</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future through our immersive interactive demonstrations. 
            Control technology with your thoughts, manipulate reality, and explore new dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-5xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-sm opacity-90 text-center mb-4">{demo.description}</p>
              <button className={`w-full bg-gradient-to-r ${demo.color} px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                {activeDemo === demo.id ? '🔄 Active' : '▶️ Launch Demo'}
              </button>
            </div>
          ))}
        </div>

        {activeDemo && (
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-lg opacity-90">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold mb-4">🎯 Demo Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold mb-4">🎮 Interactive Controls:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    🧠 Neural Input
                  </button>
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    ⚛️ Quantum Control
                  </button>
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    🤖 AI Interface
                  </button>
                  <button className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    🌌 Dimension Shift
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-slate-700/50 to-purple-700/50 rounded-lg p-6 border border-white/10">
                <h4 className="text-lg font-bold mb-4">📊 Real-time Status</h4>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold">99.9%</div>
                    <div className="opacity-70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold">0.001s</div>
                    <div className="opacity-70">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold">∞</div>
                    <div className="opacity-70">Capabilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-400 font-bold">24/7</div>
                    <div className="opacity-70">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">🎯 Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6">
            Select a demo above to begin your journey into the technological revolution of 2030
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              🚀 Start Full Demo
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2030;