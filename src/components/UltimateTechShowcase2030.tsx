import React, { useState } from 'react';

const UltimateTechShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      title: "Consciousness Computing",
      icon: "🧠",
      description: "Direct neural interfaces enabling thought-based computing and consciousness transfer",
      features: ["Neural-to-Digital Transfer", "Collective Consciousness", "Digital Immortality"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Quantum-powered reality simulation creating indistinguishable virtual worlds",
      features: ["Infinite Simulation", "Quantum Networks", "Parallel Universe Access"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Interdimensional Technology",
      icon: "🌌",
      description: "Breakthrough technology enabling travel across multiple dimensions",
      features: ["Dimensional Portals", "Cross-Reality Communication", "Multiverse Access"],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2030
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the convergence of consciousness computing, quantum reality engines, 
            and interdimensional technology that will reshape human existence
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-purple-300">
                {technologies[activeTab].title}
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                {technologies[activeTab].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-4 text-purple-300">Technical Specifications</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-600/20 rounded-lg">
                  <span className="text-purple-200">Processing Power</span>
                  <span className="text-purple-300 font-semibold">Infinite</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-600/20 rounded-lg">
                  <span className="text-purple-200">Latency</span>
                  <span className="text-purple-300 font-semibold">&lt;1ms</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-600/20 rounded-lg">
                  <span className="text-purple-200">Reliability</span>
                  <span className="text-purple-300 font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-600/20 rounded-lg">
                  <span className="text-purple-200">Safety Rating</span>
                  <span className="text-purple-300 font-semibold">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-cyan-300">Interactive Technology Demo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                🧠
              </div>
              <h4 className="text-xl font-bold mb-2 text-cyan-300">Consciousness Transfer</h4>
              <p className="text-cyan-100 mb-4">Experience digital consciousness transfer in real-time</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Try Demo
              </button>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                ⚛️
              </div>
              <h4 className="text-xl font-bold mb-2 text-purple-300">Quantum Simulation</h4>
              <p className="text-purple-100 mb-4">Explore infinite virtual realities powered by quantum computing</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Enter Reality
              </button>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                🌌
              </div>
              <h4 className="text-xl font-bold mb-2 text-emerald-300">Dimensional Portal</h4>
              <p className="text-emerald-100 mb-4">Step through portals to explore parallel dimensions</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Open Portal
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready for the Ultimate Revolution?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the select few who will experience the future of human existence. 
            Be among the first to transcend physical limitations and enter the digital realm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Begin Your Journey
            </button>
            <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2030;