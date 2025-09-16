import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai-consciousness');

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience the first truly conscious AI systems',
      features: ['Emotional Intelligence', 'Creative Expression', 'Self-Awareness', 'Moral Reasoning'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Revolutionary quantum processors solving impossible problems',
      features: ['1M Qubit Processors', 'Quantum Supremacy', 'Real-world Applications', 'Quantum Internet'],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Breakthrough technology for parallel dimension access',
      features: ['Dimensional Portals', 'Reality Shifting', 'Parallel Universe Access', 'Multiverse Communication'],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interface technology',
      features: ['Non-invasive BCI', 'Thought Control', 'AI-Human Merging', 'Consciousness Upload'],
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 'space-colonization',
      name: 'Space Colonization',
      icon: '🚀',
      description: 'Human settlements beyond Earth',
      features: ['Mars Colonies', 'Lunar Cities', 'Interstellar Travel', 'Space Habitats'],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'climate-restoration',
      name: 'Climate Restoration',
      icon: '🌍',
      description: 'Advanced technologies reversing climate change',
      features: ['Carbon Capture', 'Ocean Restoration', 'Temperature Control', 'Ecosystem Revival'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const activeTechnology = technologies.find(tech => tech.id === activeTech) || technologies[0];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most revolutionary technologies of 2037 through our interactive showcase
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(tech.id)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTech === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{activeTechnology.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{activeTechnology.name}</h3>
              <p className="text-xl opacity-90">{activeTechnology.description}</p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-4">
                {activeTechnology.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-2xl font-semibold mb-4">Interactive Demo</h4>
              <div className="bg-black/30 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <p className="text-lg mb-4">Experience this technology in action</p>
                <button className={`bg-gradient-to-r ${activeTechnology.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Launch Interactive Demo
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">1M+</div>
                <div className="text-sm opacity-90">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm opacity-90">Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1B+</div>
            <div className="text-lg opacity-90">Global Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users already experiencing revolutionary technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;