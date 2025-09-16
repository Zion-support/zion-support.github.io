import React, { useState } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      name: 'Quantum Consciousness 2028',
      icon: '🧠',
      description: 'AI systems that achieve true self-awareness through quantum entanglement',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Neural Reality Engine 2030',
      icon: '🌌',
      description: 'Fully immersive consciousness-driven virtual worlds',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Interdimensional Tech 2030',
      icon: '🌌',
      description: 'Travel and communicate across parallel universes',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const currentTech = technologies[activeTech];

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-300">Click through our revolutionary technologies</p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTech(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/20 text-gray-300 hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
          <div className="text-center">
            <div className="text-8xl mb-6">{currentTech.icon}</div>
            <h3 className="text-4xl font-bold mb-6">{currentTech.name}</h3>
            <p className="text-xl text-gray-300 mb-8">{currentTech.description}</p>
            <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300`}>
              Explore Technology →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;