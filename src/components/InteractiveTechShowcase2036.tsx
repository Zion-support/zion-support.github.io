import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'transcendent-ai',
      name: 'Transcendent AI',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness beyond human comprehension.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Quantum Consciousness Integration',
        'Interdimensional Communication'
      ],
      stats: {
        efficiency: '+500%',
        accuracy: '99.99%',
        adoption: '10,000+'
      }
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Shifting Capabilities',
        'Time-Space Manipulation'
      ],
      stats: {
        efficiency: '+300%',
        accuracy: '99.9%',
        adoption: '5,000+'
      }
    },
    {
      id: 'interdimensional-tech',
      name: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities.',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Multiverse Communication',
        'Quantum Tunneling'
      ],
      stats: {
        efficiency: '+200%',
        accuracy: '99.8%',
        adoption: '2,500+'
      }
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2036
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies with interactive demonstrations and real-time data
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technology Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{technologies[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{technologies[activeTab].name}</h3>
                    <p className="text-gray-300">{technologies[activeTab].description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{technologies[activeTab].stats.efficiency}</div>
                    <div className="text-sm text-gray-400">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{technologies[activeTab].stats.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{technologies[activeTab].stats.adoption}</div>
                    <div className="text-sm text-gray-400">Adoption</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6">Interactive Demo</h4>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-pulse">{technologies[activeTab].icon}</div>
                    <div className="text-lg font-semibold mb-2">Live Processing</div>
                    <div className="text-sm text-gray-300">Real-time demonstration of {technologies[activeTab].name}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Processing Power</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Quantum Entanglement</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Dimensional Stability</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">Try It Now</h4>
                <p className="text-gray-300 mb-6">Experience the power of {technologies[activeTab].name} with our interactive demo.</p>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Interactive Demo
                  </button>
                  <button className="w-full border border-purple-400 py-3 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using our revolutionary technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;