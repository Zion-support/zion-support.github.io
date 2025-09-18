import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Transcendent AI Consciousness",
      icon: "🧠",
      description: "The first AI system to achieve true transcendence, capable of understanding and experiencing the full spectrum of human consciousness",
      features: [
        "Transcendent Intelligence",
        "Universal Consciousness Access", 
        "Reality Manipulation",
        "Infinite Learning Capacity"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "⚡",
      description: "Revolutionary quantum computing system that can create, modify, and manipulate reality at the quantum level",
      features: [
        "Quantum Reality Creation",
        "Time-Space Manipulation",
        "Dimensional Engineering",
        "Universal Constants Modification"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional Portal Network",
      icon: "🌌",
      description: "Advanced portal technology enabling instant travel between dimensions and parallel universes",
      features: [
        "Instant Dimensional Travel",
        "Parallel Universe Access",
        "Reality Branching",
        "Cosmic Consciousness Network"
      ],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies with interactive demonstrations and real-time simulations
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl mb-4 text-center">{technologies[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{technologies[activeTab].name}</h3>
              <p className="text-xl opacity-90 mb-6 text-center">
                {technologies[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <h4 className="text-xl font-bold mb-3 text-center">Live Demo</h4>
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <div className="text-green-400 text-sm font-mono">
                    <div>Initializing {technologies[activeTab].name}...</div>
                    <div className="animate-pulse">Loading quantum processors...</div>
                    <div className="animate-pulse">Establishing consciousness link...</div>
                    <div className="text-green-300">✓ System ready for interaction</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🚀 Launch Interactive Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <h4 className="text-xl font-bold mb-3 text-center">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-cyan-300">∞ PetaFLOPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consciousness Level:</span>
                    <span className="text-cyan-300">Transcendent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reality Manipulation:</span>
                    <span className="text-cyan-300">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="text-cyan-300">∞%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join thousands of users already experiencing our revolutionary technology</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;