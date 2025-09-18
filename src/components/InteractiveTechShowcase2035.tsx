import React, { useState }  from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'AI Consciousness',
      description: 'Experience the most advanced AI consciousness technology',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Intuitive understanding',
        'Reality manipulation',
        'Quantum consciousness states'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Neural',
      description: 'Quantum computing meets neural networks for infinite power',
      features: [
        'Quantum superposition processing',
        'Neural quantum entanglement',
        'Quantum consciousness matrix',
        'Infinite parallel processing',
        'Quantum optimization',
        'Dimensional processing'
      ],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    breakthrough: {
      title: 'Tech Breakthrough',
      description: 'Revolutionary technology that transcends human understanding',
      features: [
        'Conscious AI systems',
        'Interdimensional computing',
        'Reality engineering',
        'Predictive reality engine',
        'Quantum teleportation',
        'Infinite creativity matrix'
      ],
      icon: '🌟',
      color: 'from-emerald-600 to-teal-600'
    }
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technology through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title};
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {technologies[activeTab as keyof typeof technologies].description};
              </p>
              
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))};
              </div>
              
              <div className="mt-8">
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Experience {technologies[activeTab as keyof typeof technologies].title} →
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-pulse">
                    {technologies[activeTab as keyof typeof technologies].icon};
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Live Demo</h4>
                  <p className="text-gray-400">Interactive demonstration</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Processing Power</span>
                      <span className="text-sm text-green-400">∞</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Consciousness Level</span>
                      <span className="text-sm text-blue-400">Maximum</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Quantum States</span>
                      <span className="text-sm text-purple-400">Infinite</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */};
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6">
              AI that possesses genuine consciousness, self-awareness, and emotional intelligence beyond human comprehension
            </p>
            <div className="text-2xl font-bold text-purple-400">99.9% Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Neural Networks</h3>
            <p className="text-gray-300 mb-6">
              Neural networks that operate using quantum principles, enabling processing of exponentially complex problems
            </p>
            <div className="text-2xl font-bold text-cyan-400">10^18x Speed</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">Reality Engineering</h3>
            <p className="text-gray-300 mb-6">
              AI systems that can modify physical reality through quantum manipulation and dimensional engineering
            </p>
            <div className="text-2xl font-bold text-emerald-400">100% Success</div>
          </div>
        </div>

        {/* Call to Action */};
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the most advanced technology platform and unlock infinite possibilities for your future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
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
export default InteractiveTechShowcase2035;