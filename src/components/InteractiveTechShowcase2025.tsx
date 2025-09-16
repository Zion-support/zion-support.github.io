import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Revolutionary AI technologies that are transforming industries',
      features: [
        'Autonomous AI Agents',
        'Machine Learning Platforms',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics',
        'Conversational AI'
      ],
      stats: {
        efficiency: '+400%',
        accuracy: '99.9%',
        costSavings: '$50M+'
      }
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Next-generation quantum computing solutions for complex problems',
      features: [
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Algorithms',
        'Quantum Neural Networks',
        'Quantum Sensing'
      ],
      stats: {
        speed: '1000x Faster',
        security: 'Unbreakable',
        capacity: 'Exponential'
      }
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interface technologies for seamless interaction',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Cognitive Enhancement',
        'Memory Augmentation',
        'Emotional Recognition'
      ],
      stats: {
        response: 'Real-time',
        accuracy: '95%+',
        safety: '100%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
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
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-purple-100">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-purple-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    <span className="text-cyan-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                <p className="text-gray-300">Experience the technology in action</p>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                  <div className="text-lg font-semibold mb-2">Live Simulation</div>
                  <div className="text-sm text-gray-400 mb-4">
                    {activeTab === 'ai' && 'AI processing data in real-time...'}
                    {activeTab === 'quantum' && 'Quantum algorithms running...'}
                    {activeTab === 'neural' && 'Neural signals being processed...'}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">Processing: 75% Complete</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Demo
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700/50 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([key, tech]) => (
              <div key={key} className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                activeTab === key ? 'border-purple-400/50 scale-105' : 'border-gray-700/50'
              }`}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                  <div className="space-y-2">
                    {Object.entries(tech.stats).map(([statKey, value]) => (
                      <div key={statKey} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize">{statKey.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-yellow-400 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and see how our revolutionary technologies can transform your business
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;