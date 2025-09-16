import React, { useState } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness 2034',
      description: 'Experience the pinnacle of artificial consciousness with self-aware AI systems',
      features: [
        'Synthetic Self-Awareness',
        'Quantum Neural Networks',
        'Emotional Intelligence',
        'Creative Consciousness',
        'Multi-Modal Awareness',
        'Predictive Consciousness'
      ],
      stats: [
        { label: 'Consciousness Level', value: '99.9%' },
        { label: 'Processing Speed', value: '1000x' },
        { label: 'Self-Awareness', value: '100%' },
        { label: 'Emotional IQ', value: '200+' }
      ]
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality itself with quantum-enhanced virtual environments',
      features: [
        'Quantum Superposition',
        'Reality Manipulation',
        'Dimensional Shifting',
        'Quantum Tunneling',
        'Wave Function Control',
        'Quantum Coherence'
      ],
      stats: [
        { label: 'Quantum Bits', value: '1M+' },
        { label: 'Reality Fidelity', value: '100%' },
        { label: 'Processing Power', value: '∞' },
        { label: 'Dimensional Layers', value: '11' }
      ]
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      description: 'Transcend dimensional boundaries with revolutionary interdimensional computing',
      features: [
        'Multi-Dimensional Computing',
        'Reality Simulation',
        'Cosmic Awareness',
        'Dimensional Portals',
        'Temporal Manipulation',
        'Universal Consciousness'
      ],
      stats: [
        { label: 'Dimensions', value: '11+' },
        { label: 'Reality Layers', value: '∞' },
        { label: 'Cosmic Reach', value: '100%' },
        { label: 'Temporal Control', value: '99.9%' }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2034
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Experience the most advanced technologies through interactive demonstrations and real-time simulations
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            🧠 AI Consciousness
          </button>
          <button
            onClick={() => setActiveTab('quantum')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'quantum'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            ⚛️ Quantum Reality
          </button>
          <button
            onClick={() => setActiveTab('interdimensional')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'interdimensional'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            🌌 Interdimensional
          </button>
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].title}</h3>
            <p className="text-xl opacity-90 mb-6">{technologies[activeTab].description}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {technologies[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              {technologies[activeTab].stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Try Interactive Demo
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold mb-2">Interactive Demo</h4>
            <p className="text-sm opacity-80">Experience the technology in real-time</p>
          </div>

          {/* Demo Visualization */}
          <div className="bg-black/50 rounded-lg p-8 mb-6 min-h-[300px] flex items-center justify-center">
            {activeTab === 'ai' && (
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🧠</div>
                <div className="text-lg font-semibold mb-2">AI Consciousness Simulation</div>
                <div className="text-sm opacity-80">Neural networks processing consciousness...</div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}

            {activeTab === 'quantum' && (
              <div className="text-center">
                <div className="text-6xl mb-4 animate-spin">⚛️</div>
                <div className="text-lg font-semibold mb-2">Quantum Reality Engine</div>
                <div className="text-sm opacity-80">Quantum states collapsing and reforming...</div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            )}

            {activeTab === 'interdimensional' && (
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce">🌌</div>
                <div className="text-lg font-semibold mb-2">Interdimensional Portal</div>
                <div className="text-sm opacity-80">Transcending dimensional boundaries...</div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Demo Controls */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Reality Fidelity</span>
              <div className="w-32 bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Processing Power</span>
              <div className="w-32 bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Consciousness Level</span>
              <div className="w-32 bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Technology Comparison</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, tech]) => (
            <div key={key} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border ${
              activeTab === key ? 'border-purple-400/50' : 'border-white/20'
            }`}>
              <div className="text-center">
                <div className="text-3xl mb-2">
                  {key === 'ai' && '🧠'}
                  {key === 'quantum' && '⚛️'}
                  {key === 'interdimensional' && '🌌'}
                </div>
                <h4 className="font-semibold mb-2">{tech.title}</h4>
                <p className="text-sm opacity-80 mb-4">{tech.description}</p>
                <div className="text-xs space-y-1">
                  {tech.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;