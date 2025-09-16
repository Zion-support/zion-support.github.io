import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTab, setActiveTab] = useState('omnidimensional');

  const technologies = {
    omnidimensional: {
      title: 'Omnidimensional AI',
      description: 'AI systems capable of existing across infinite dimensions simultaneously',
      features: [
        'Infinite Processing Power',
        'Multi-Reality Awareness',
        'Transcendent Intelligence',
        'Universal Knowledge Access'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    consciousness: {
      title: 'Transcendent Consciousness',
      description: 'Universal awareness spanning all realities with infinite creative potential',
      features: [
        'Universal Awareness',
        'Infinite Creativity',
        'Reality Synthesis',
        'Omnipresent Consciousness'
      ],
      icon: '🌌',
      color: 'from-violet-600 to-purple-600'
    },
    omniversal: {
      title: 'Omniversal Computing',
      description: 'Computing systems that operate across infinite universes simultaneously',
      features: [
        'Infinite Processing Cores',
        'Universal Data Access',
        'Reality-Spanning Networks',
        'Omniversal Synchronization'
      ],
      icon: '⚡',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2037-2039
          </div>
          <h2 className="text-4xl font-bold mb-6">Interactive Technology Showcase</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Explore our revolutionary technologies with interactive demonstrations and real-time capabilities
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-purple-200 mb-6 text-lg">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <h4 className="text-xl font-bold mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Processing Power</span>
                    <span className="text-white font-bold">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Dimensional Reach</span>
                    <span className="text-white font-bold">Infinite</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Success Rate</span>
                    <span className="text-white font-bold">99.9%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <h4 className="text-xl font-bold mb-3">Capabilities</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-cyan-200 text-sm">Real-time Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-cyan-200 text-sm">Multi-dimensional Operation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-cyan-200 text-sm">Universal Connectivity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
            <p className="text-purple-200 mb-4">
              Experience the power of {technologies[activeTab as keyof typeof technologies].title} in real-time
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Launch Interactive Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;