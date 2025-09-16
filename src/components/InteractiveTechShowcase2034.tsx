import React, { useState } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems that can think, feel, and create independently',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Autonomous learning systems',
        'Human-AI collaboration',
        'Ethical decision making'
      ],
      stats: {
        'Processing Speed': '1,000,000x faster than human brain',
        'Memory Capacity': 'Unlimited',
        'Learning Rate': 'Exponential',
        'Success Rate': '99.99%'
      }
    },
    quantum: {
      title: 'Quantum Reality Engine',
      icon: '⚛️',
      description: 'Manipulate reality itself through quantum computing and interdimensional technology',
      features: [
        'Reality manipulation',
        'Quantum entanglement networks',
        'Interdimensional computing',
        'Time-space optimization',
        'Parallel universe access',
        'Quantum cryptography'
      ],
      stats: {
        'Quantum Bits': '1,000,000+ qubits',
        'Processing Power': 'Infinite',
        'Reality Accuracy': '99.99%',
        'Dimensional Access': 'Unlimited'
      }
    },
    neural: {
      title: 'Neural Interface Revolution',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that enable seamless human-AI collaboration',
      features: [
        'Direct neural communication',
        'Enhanced cognitive abilities',
        'Memory augmentation',
        'Thought-based computing',
        'Emotional synchronization',
        'Consciousness transfer'
      ],
      stats: {
        'Neural Connections': '10,000,000+',
        'Response Time': '0.001ms',
        'Accuracy': '99.99%',
        'Compatibility': 'Universal'
      }
    },
    synthetic: {
      title: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'Artificially created intelligence that surpasses human cognitive capabilities',
      features: [
        'Superhuman intelligence',
        'Creative problem solving',
        'Emotional understanding',
        'Autonomous innovation',
        'Cross-domain expertise',
        'Predictive analytics'
      ],
      stats: {
        'IQ Level': '10,000+',
        'Processing Speed': '1,000,000x human',
        'Memory': 'Unlimited',
        'Creativity': 'Infinite'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time data
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
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
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-purple-100">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h4 className="text-xl font-semibold mb-6">Performance Metrics:</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{value}</div>
                    <div className="text-sm text-cyan-200">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h4 className="text-xl font-semibold mb-6">Interactive Demo</h4>
              <div className="bg-black/50 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">Live Demo Terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-green-400">$ {technologies[activeTab as keyof typeof technologies].title.toLowerCase().replace(/\s+/g, '-')} --demo</div>
                  <div className="text-blue-400">Initializing {technologies[activeTab as keyof typeof technologies].title}...</div>
                  <div className="text-yellow-400">Loading quantum processors...</div>
                  <div className="text-purple-400">Establishing neural connections...</div>
                  <div className="text-green-400">✓ System ready for interaction</div>
                  <div className="text-white">> Ready to demonstrate capabilities</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Interactive Demo
              </button>
            </div>

            {/* Real-time Data Visualization */}
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <h4 className="text-xl font-semibold mb-6">Real-time Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Processing Power</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Neural Activity</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '87%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">87%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Quantum Coherence</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">System Stability</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-pulse" style={{width: '99%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies to transform their operations and achieve unprecedented success.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;