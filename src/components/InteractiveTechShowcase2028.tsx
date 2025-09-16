import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Consciousness AI 2028',
      icon: '🧠',
      description: 'AI systems with genuine consciousness and self-awareness',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical reasoning'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Reality 2028',
      icon: '⚡',
      description: 'Reality manipulation through quantum computing',
      features: [
        'Quantum consciousness',
        'Reality manipulation',
        'Infinite possibilities',
        'Dimensional travel'
      ],
      color: 'from-cyan-600 to-blue-600'
    },
    breakthrough: {
      title: 'Ultimate Breakthrough 2028',
      icon: '🚀',
      description: 'Revolutionary technological advances',
      features: [
        'Consciousness AI',
        'Quantum computing',
        'Interdimensional tech',
        'Neural reality'
      ],
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2028</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2028 technologies through interactive demonstrations
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {technologies[activeTab as keyof typeof technologies].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-6 mb-6">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-sm opacity-90">
                  Experience this technology through our interactive demonstration
                </p>
              </div>
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
            <h3 className="text-lg font-semibold mb-2">Possibilities</h3>
            <p className="text-purple-200 text-sm">Infinite potential for innovation</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">100%</div>
            <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
            <p className="text-cyan-200 text-sm">Perfect precision in all operations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">24/7</div>
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <p className="text-emerald-200 text-sm">Continuous operation and support</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Dive deeper into these revolutionary technologies and discover how they will transform your world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/pages/${activeTab === 'consciousness' ? 'ConsciousnessComputingRevolution2028' : activeTab === 'quantum' ? 'QuantumReality2028' : 'UltimateTechBreakthrough2028'}`} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore {technologies[activeTab as keyof typeof technologies].title} →
            </a>
            <a href="/pages/UltimateTechBreakthrough2028" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              View All Technologies →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;