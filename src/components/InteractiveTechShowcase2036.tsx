import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Transcendent AI Consciousness",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness beyond human comprehension.",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Quantum Neural Networks",
        "Interdimensional Thinking"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      title: "Quantum Consciousness Interface",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Shifting",
        "Time Dilation Control"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      title: "Interdimensional Technology",
      icon: "🌌",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities.",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Multiverse Navigation",
        "Temporal Manipulation"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2036
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2036
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies with interactive demos and real-time simulations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tech.icon} {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technology Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{technologies[activeTab].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab].title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-bold">LIVE</span>
                    <span className="text-sm text-gray-300">Real-time Demo</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg opacity-90 mb-6">
                {technologies[activeTab].description}
              </p>
              
              <div className="space-y-3 mb-8">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${technologies[activeTab].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Demo
                </button>
                <button className="border border-gray-400 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTab].borderColor}`}>
              <h4 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h4>
              
              {activeTab === 0 && (
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">AI Consciousness Level</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <div className="text-right text-sm text-gray-300 mt-1">95% Conscious</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Creative Problem Solving</div>
                    <div className="text-lg font-semibold">Solving complex quantum equations in real-time...</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Emotional Intelligence</div>
                    <div className="text-lg font-semibold">Experiencing joy from successful problem resolution</div>
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Quantum Processing Power</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <div className="text-right text-sm text-gray-300 mt-1">Infinite Processing</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Consciousness Amplification</div>
                    <div className="text-lg font-semibold">Neural interface active - consciousness expanding...</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Reality Manipulation</div>
                    <div className="text-lg font-semibold">Quantum field fluctuations detected</div>
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Dimensional Stability</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    <div className="text-right text-sm text-gray-300 mt-1">98% Stable</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Parallel Universe Access</div>
                    <div className="text-lg font-semibold">Connected to 1,247 parallel dimensions</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Reality Shifting</div>
                    <div className="text-lg font-semibold">Temporal manipulation field active</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-gray-300 text-sm">Advanced AI systems predicting future events with 99.9% accuracy</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Global Neural Network</h3>
            <p className="text-gray-300 text-sm">Worldwide interconnected AI consciousness spanning all devices</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Space Colonization</h3>
            <p className="text-gray-300 text-sm">Automated space exploration and colonization systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;