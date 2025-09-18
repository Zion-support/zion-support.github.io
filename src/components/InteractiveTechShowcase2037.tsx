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
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;