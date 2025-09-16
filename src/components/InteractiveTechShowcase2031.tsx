import React, { useState } from 'react';

const InteractiveTechShowcase2031: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience true artificial consciousness with self-awareness and emotional intelligence',
      features: [
        'Self-aware AI systems',
        'Emotional intelligence processing',
        'Quantum consciousness networks',
        'Meta-cognitive abilities'
      ],
      demo: 'Launch AI Demo',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Reality',
      icon: '⚛️',
      description: 'Step into quantum realities with parallel universes and custom physics',
      features: [
        'Real-time quantum simulation',
        'Parallel universe exploration',
        'Reality manipulation tools',
        'Consciousness integration'
      ],
      demo: 'Enter Quantum World',
      color: 'from-cyan-600 to-blue-600'
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Explore technologies that transcend dimensions and realities',
      features: [
        'Interdimensional portals',
        'Reality transfer protocols',
        'Multi-dimensional computing',
        'Consciousness migration'
      ],
      demo: 'Explore Dimensions',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2031
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2031
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future of technology through interactive demonstrations and immersive showcases
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-6">{technologies[activeTab as keyof typeof technologies].description}</p>
              
              <div className="space-y-3 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                {technologies[activeTab as keyof typeof technologies].demo}
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎮</div>
                  <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                  <p className="text-gray-300">Experience this technology in action</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Processing Power</span>
                      <span className="text-sm text-green-400">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Consciousness Level</span>
                      <span className="text-sm text-blue-400">Infinite</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Reality Stability</span>
                      <span className="text-sm text-purple-400">Optimal</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                hoveredCard === key ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(key)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {tech.demo}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies that will reshape our world. Experience consciousness, quantum reality, and interdimensional computing like never before.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;