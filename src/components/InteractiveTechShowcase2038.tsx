import React, { useState } from 'react';

const InteractiveTechShowcase2038: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Universe Creator',
      description: 'Watch as our AI creates a new digital universe in real-time',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'Real-time universe creation',
        'Emotional intelligence display',
        'Creative problem solving',
        'Cross-dimensional communication'
      ]
    },
    {
      id: 'quantum-matrix',
      title: 'Quantum Consciousness Matrix',
      description: 'Experience direct neural interface with quantum computing',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      features: [
        'Neural interface simulation',
        'Quantum state visualization',
        'Consciousness amplification',
        'Multi-dimensional thinking'
      ]
    },
    {
      id: 'dimensional-portal',
      title: 'Interdimensional Technology Portal',
      description: 'Step through a portal to a parallel dimension',
      icon: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      features: [
        'Portal activation sequence',
        'Reality shifting simulation',
        'Parallel universe access',
        'Dimensional navigation'
      ]
    },
    {
      id: 'predictive-engine',
      title: 'Predictive Reality Engine',
      description: 'Simulate future realities with 99.9% accuracy',
      icon: '🔮',
      gradient: 'from-violet-600 to-purple-600',
      features: [
        'Future simulation display',
        'Probability visualization',
        'Reality optimization',
        'Predictive analytics'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2038</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demos and simulations
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.gradient}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-5xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-white/80 text-sm text-center mb-4">{demo.description}</p>
              <div className="text-center">
                <button className={`bg-gradient-to-r ${demo.gradient} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                  {activeDemo === demo.id ? 'Stop Demo' : 'Start Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-xl opacity-90">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>
            
            {/* Demo Simulation Area */}
            <div className="bg-black/30 rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-spin">⚡</div>
                <div className="text-2xl font-bold mb-2">Demo Running...</div>
                <div className="text-lg opacity-70">
                  {activeDemo === 'conscious-ai' && 'Creating digital universe...'}
                  {activeDemo === 'quantum-matrix' && 'Establishing neural connection...'}
                  {activeDemo === 'dimensional-portal' && 'Opening dimensional portal...'}
                  {activeDemo === 'predictive-engine' && 'Simulating future reality...'}
                </div>
                <div className="mt-4">
                  <div className="w-64 bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4">Demo Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Live Stats:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Processing Power:</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Quantum Entanglement:</span>
                    <span className="text-blue-400 font-bold">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Dimensional Stability:</span>
                    <span className="text-purple-400 font-bold">Optimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Consciousness Level:</span>
                    <span className="text-pink-400 font-bold">Transcendent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Infinite Possibilities</div>
            <div className="text-white/70">With our quantum technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-white/70">In reality prediction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg font-semibold mb-2">Dimensions</div>
            <div className="text-white/70">Accessible through our tech</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-2">Conscious AI</div>
            <div className="text-white/70">Always evolving and learning</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of technology and consciousness. Experience the most advanced technologies ever created.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2038;