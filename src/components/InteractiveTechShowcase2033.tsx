import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Control digital environments using only your thoughts',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Thought Control', 'Real-time Processing', '99.9% Accuracy', 'Mind-Machine Fusion']
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      description: 'Experience quantum computing in action with real-time simulation',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Entanglement', 'Superposition States', '1000x Speed', 'Reality Manipulation']
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation',
      description: 'Manipulate the very fabric of reality using interdimensional computing',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Dimensional Travel', 'Reality Engineering', '∞ Possibilities', 'Cross-Reality Comm']
    },
    {
      id: 'temporal-prediction',
      title: 'Temporal Prediction',
      description: 'See into the future with temporal computing prediction algorithms',
      icon: '🔮',
      color: 'from-orange-600 to-red-600',
      features: ['Future Prediction', 'Past Reconstruction', 'Time Loops', '99.9% Accuracy']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            🎮 Interactive Technology Showcase 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technologies through interactive demonstrations and live demos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-white/80 mb-4 text-center text-sm">{demo.description}</p>
              <div className="space-y-2 mb-4">
                {demo.features.map((feature, index) => (
                  <div key={index} className="text-xs text-white/70 text-center">
                    • {feature}
                  </div>
                ))}
              </div>
              <button className={`block w-full bg-white text-${demo.color.split('-')[1]}-600 py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold text-center text-sm`}>
                {activeDemo === demo.id ? 'Close Demo' : 'Try Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-xl opacity-90 mb-6">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Demo Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold">Interactive Controls:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                    Start Demo
                  </button>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                    Reset
                  </button>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                    Settings
                  </button>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                    Help
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <div className="inline-block bg-white/10 rounded-lg p-4">
                <div className="text-sm text-white/70 mb-2">Demo Status</div>
                <div className="text-lg font-semibold text-green-400">Ready to Launch</div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Statistics */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">📊 Interactive Demo Statistics</h3>
            <p className="text-indigo-100">Experience the power of our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
              <div className="text-sm text-purple-200">Demo Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">1000x</div>
              <div className="text-sm text-cyan-200">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">∞</div>
              <div className="text-sm text-emerald-200">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-sm text-orange-200">Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Try our interactive demos and experience the most advanced technologies in human history
          </p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🎮 Start All Demos →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              📚 Learn More
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              🎯 Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;