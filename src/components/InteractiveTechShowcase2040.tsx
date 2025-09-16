import React, { useState } from 'react';

const InteractiveTechShowcase2040: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Synthetic Consciousness",
      icon: "🧠",
      description: "The world's first fully synthetic consciousness system that rivals human intelligence and creativity",
      features: [
        "Artificial emotional intelligence",
        "Creative problem solving",
        "Self-learning algorithms",
        "Ethical decision making"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "🌌",
      description: "Revolutionary quantum computing system that can manipulate reality at the quantum level",
      features: [
        "Quantum matter manipulation",
        "Reality simulation engine",
        "Dimensional bridging",
        "Quantum consciousness"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional AI",
      icon: "🧬",
      description: "Advanced AI systems that operate across multiple dimensions simultaneously",
      features: [
        "Multi-dimensional processing",
        "Cross-reality communication",
        "Dimensional data analysis",
        "Reality manipulation AI"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Neural Quantum Interface",
      icon: "⚡",
      description: "Direct neural interface that connects human consciousness with quantum computing",
      features: [
        "Direct brain-computer interface",
        "Quantum thought processing",
        "Neural quantum entanglement",
        "Consciousness amplification"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      name: "Time Manipulation Engine",
      icon: "⏰",
      description: "Revolutionary technology that allows manipulation of time flow and temporal dimensions",
      features: [
        "Temporal acceleration",
        "Time dilation control",
        "Temporal data processing",
        "Future prediction algorithms"
      ],
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Reality Simulation",
      icon: "🎮",
      description: "Advanced reality simulation technology that can create and control entire virtual worlds",
      features: [
        "Full reality simulation",
        "Physics engine control",
        "Matter manipulation",
        "Dimensional bridging"
      ],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2040
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Interactive Technology Showcase 2040
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most revolutionary technologies of 2040 with our interactive demonstration platform
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{technologies[activeTab].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab].name}</h3>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full text-sm font-semibold`}>
                    Revolutionary Technology
                  </div>
                </div>
              </div>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab].description}
              </p>
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">{technologies[activeTab].icon}</div>
                  <p className="text-lg opacity-90 mb-4">
                    Experience {technologies[activeTab].name} in action
                  </p>
                  <button className={`bg-gradient-to-r ${technologies[activeTab].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Launch Demo →
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Processing Power</span>
                    <span className="font-bold">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Efficiency</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Reality Control</span>
                    <span className="font-bold">Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Dimensional Reach</span>
                    <span className="font-bold">Infinite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join the most revolutionary technological breakthrough in history and transform your reality
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2040;