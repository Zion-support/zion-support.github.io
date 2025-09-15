import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState('quantum');

  const technologies = {
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Experience exponential processing power with 1000+ qubit quantum processors',
      features: ['1000+ Logical Qubits', 'Quantum Supremacy', 'Molecular Simulation', 'Quantum AI Integration'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    neural: {
      title: 'Neural Interface',
      icon: '🧬',
      description: 'Bridge mind and machine with direct brain-computer communication',
      features: ['Non-invasive BCI', 'Thought Control', 'Neural Feedback', 'Medical Applications'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    ai: {
      title: 'Advanced AI',
      icon: '🤖',
      description: 'Create AI agents with synthetic consciousness and autonomous capabilities',
      features: ['Autonomous Agents', 'Synthetic Consciousness', 'Collective Intelligence', 'Creative Synthesis'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      description: 'AI-powered space exploration and satellite technology',
      features: ['Space Exploration', 'Satellite Technology', 'Planetary Missions', 'Space AI'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive features and real-time demonstrations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTech(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTech === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`bg-gradient-to-br ${technologies[activeTech as keyof typeof technologies].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTech as keyof typeof technologies].borderColor}`}>
              <div className="text-8xl mb-6 text-center">
                {technologies[activeTech as keyof typeof technologies].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4 text-center">
                {technologies[activeTech as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 text-center mb-8">
                {technologies[activeTech as keyof typeof technologies].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4">🎯 Key Capabilities</h4>
              <ul className="space-y-3">
                {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech as keyof typeof technologies].color}`}></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4">📊 Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm opacity-80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-sm opacity-80">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm opacity-80">Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm opacity-80">Scalability</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech as keyof typeof technologies].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Try Interactive Demo →
              </button>
              <button className="flex-1 border border-white/30 text-white py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">🔍 Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} cursor-pointer hover:scale-105 transition-all duration-300 ${
                  activeTech === key ? 'ring-2 ring-white/50' : ''
                }`}
                onClick={() => setActiveTech(key)}
              >
                <div className="text-4xl mb-3 text-center">{tech.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">{tech.title}</h4>
                <p className="text-sm opacity-80 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users already experiencing our revolutionary technology solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;