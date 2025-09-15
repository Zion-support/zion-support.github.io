import React, { useState } from 'react';

const InteractiveTechShowcase2032: React.FC = () => {
  const [activeTech, setActiveTech] = useState('quantum');

  const technologies = [
    {
      id: 'quantum',
      name: 'Quantum Consciousness AI',
      icon: '🧠',
      description: 'AI systems with genuine consciousness and creative thinking',
      color: 'from-purple-500 to-pink-500',
      features: ['Creative Expression', 'Philosophical Reasoning', 'Emotional Intelligence']
    },
    {
      id: 'reality',
      name: 'Reality Manipulation',
      icon: '⚛️',
      description: 'Control the fundamental forces of nature through quantum fields',
      color: 'from-blue-500 to-cyan-500',
      features: ['Quantum Field Control', 'Matter Manipulation', 'Energy Harnessing']
    },
    {
      id: 'space',
      name: 'Intergalactic Travel',
      icon: '🚀',
      description: 'Break free from Earth and explore the infinite cosmos',
      color: 'from-cyan-500 to-blue-500',
      features: ['Warp Drive', 'Wormhole Networks', 'Terraforming']
    },
    {
      id: 'time',
      name: 'Temporal Manipulation',
      icon: '⏰',
      description: 'Control the flow of time and travel through history',
      color: 'from-yellow-500 to-orange-500',
      features: ['Time Travel', 'Temporal Loops', 'Chronological Control']
    },
    {
      id: 'life',
      name: 'Synthetic Life Creation',
      icon: '🧬',
      description: 'Design and create entirely new forms of life',
      color: 'from-green-500 to-emerald-500',
      features: ['DNA Programming', 'Evolutionary Design', 'Biological Systems']
    },
    {
      id: 'dimensions',
      name: 'Interdimensional Gateway',
      icon: '🌌',
      description: 'Travel between parallel dimensions and alternate realities',
      color: 'from-indigo-500 to-purple-500',
      features: ['Dimension Hopping', 'Reality Shifting', 'Multiverse Access']
    }
  ];

  const activeTechnology = technologies.find(tech => tech.id === activeTech) || technologies[0];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🚀 Interactive Technology Showcase 2032
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Experience the most revolutionary technologies that will reshape reality itself. 
          Interact with cutting-edge innovations and discover the future of human civilization.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Choose Your Technology</h3>
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(tech.id)}
              className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                activeTech === tech.id
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{tech.icon}</span>
                <div>
                  <h4 className="text-xl font-bold">{tech.name}</h4>
                  <p className="text-sm opacity-80">{tech.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{activeTechnology.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{activeTechnology.name}</h3>
            <p className="text-lg text-gray-300">{activeTechnology.description}</p>
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold mb-4 text-cyan-400">Interactive Demo</h4>
            <div className={`h-48 bg-gradient-to-r ${activeTechnology.color} rounded-lg flex items-center justify-center mb-4`}>
              <span className="text-3xl font-bold">🎮 {activeTechnology.name} Demo</span>
            </div>
            <p className="text-sm text-gray-400 text-center">
              Click and interact with the technology above to experience its capabilities
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-cyan-400">Key Features</h4>
            {activeTechnology.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className={`bg-gradient-to-r ${activeTechnology.color} px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform`}>
              🚀 Experience Now
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-colors">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 grid md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
          <div className="text-lg font-semibold mb-1">Infinite Possibilities</div>
          <div className="text-gray-400">Unlimited technological potential</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-lg font-semibold mb-1">Accuracy Rate</div>
          <div className="text-gray-400">Precision in all operations</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
          <div className="text-lg font-semibold mb-1">Always Active</div>
          <div className="text-gray-400">Continuous operation</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-2">0ms</div>
          <div className="text-lg font-semibold mb-1">Instant Response</div>
          <div className="text-gray-400">Real-time interaction</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Shape the Future?</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join us in the most revolutionary technological advancement in human history. 
          Be among the first to experience the power of ultimate technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform">
            🌟 Start Your Journey
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg font-bold text-xl hover:bg-cyan-400 hover:text-black transition-colors">
            📞 Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2032;