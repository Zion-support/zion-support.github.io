import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      description: 'Revolutionary AI systems that think, learn, and adapt',
      features: [
        'Conscious AI Processing',
        'Neural Network Optimization',
        'Predictive Analytics',
        'Autonomous Decision Making'
      ],
      demo: 'Try our AI demo to see how it can analyze your data and provide insights'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Exponential computational power through quantum mechanics',
      features: [
        'Quantum Supremacy',
        'Parallel Processing',
        'Cryptographic Security',
        'Molecular Simulation'
      ],
      demo: 'Experience quantum computing with our interactive quantum simulator'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless interaction',
      features: [
        'Thought Control',
        'Neural Feedback',
        'Memory Enhancement',
        'Cognitive Amplification'
      ],
      demo: 'Test our neural interface with simple thought-controlled applications'
    },
    blockchain: {
      title: 'Blockchain Technology',
      icon: '🔗',
      description: 'Decentralized, secure, and transparent systems',
      features: [
        'Smart Contracts',
        'Decentralized Finance',
        'NFT Marketplaces',
        'Supply Chain Tracking'
      ],
      demo: 'Explore our blockchain solutions with live transaction demonstrations'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🚀 Interactive Technology Showcase
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our cutting-edge technologies with interactive demonstrations and live demos
        </p>
      </div>

      {/* Technology Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <p className="text-xl opacity-90">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold mb-2">🎮 Interactive Demo</h4>
              <p className="text-gray-300 mb-4">
                {technologies[activeTab as keyof typeof technologies].demo}
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch Demo
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-600/30">
            <h4 className="text-xl font-semibold mb-4 text-center">Live Performance Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Speed</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">95%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Accuracy Rate</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '99.8%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">99.8%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Efficiency</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">92%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Uptime</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">Technology Comparison</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                activeTab === key
                  ? 'border-blue-400 bg-blue-600/20'
                  : 'border-gray-600 bg-gray-800/20 hover:border-gray-500'
              }`}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{tech.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{tech.description}</p>
                <div className="text-xs text-gray-500">
                  {tech.features.length} features available
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Try our interactive demos and see how our technologies can transform your business
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;