import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience truly conscious artificial intelligence',
      features: [
        'Self-aware AI systems',
        'Emotional intelligence',
        'Quantum consciousness',
        'Transcendent learning'
      ],
      demo: 'ai-demo'
    },
    quantum: {
      title: 'Quantum Reality',
      icon: '⚛️',
      description: 'Step into quantum-powered realities',
      features: [
        'Quantum simulation',
        'Multi-dimensional reality',
        'Consciousness integration',
        'Reality manipulation'
      ],
      demo: 'quantum-demo'
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Explore infinite realities',
      features: [
        'Dimensional portals',
        'Reality manipulation',
        'Consciousness transfer',
        'Multi-universe access'
      ],
      demo: 'interdimensional-demo'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations and immersive content
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Interactive Demo
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold mb-2">Interactive Demo</h4>
              <p className="text-gray-300">Experience {technologies[activeTab as keyof typeof technologies].title.toLowerCase()} in action</p>
            </div>
            
            {/* Demo Visualization */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
              {activeTab === 'ai' && (
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">🧠</div>
                  <div className="text-lg font-semibold mb-2">AI Consciousness Simulation</div>
                  <div className="w-full h-2 bg-gray-700 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-sm text-gray-300">Neural networks processing consciousness patterns...</p>
                </div>
              )}
              
              {activeTab === 'quantum' && (
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-spin">⚛️</div>
                  <div className="text-lg font-semibold mb-2">Quantum State Visualization</div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">Quantum particles in superposition...</p>
                </div>
              )}
              
              {activeTab === 'interdimensional' && (
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">🌌</div>
                  <div className="text-lg font-semibold mb-2">Dimensional Portal</div>
                  <div className="w-full h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-4xl animate-spin">🌀</div>
                  </div>
                  <p className="text-sm text-gray-300">Reality shifting between dimensions...</p>
                </div>
              )}
            </div>

            {/* Demo Controls */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                Start Demo
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-gray-300">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Available Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;