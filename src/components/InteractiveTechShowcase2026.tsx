import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai-systems',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Revolutionary AI with autonomous learning and quantum processing',
      features: ['Autonomous Learning', 'Quantum AI Processing', 'Distributed Intelligence'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Next-generation quantum computers solving impossible problems',
      features: ['Quantum Supremacy', 'Error Correction', 'Quantum Algorithms'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication technology',
      features: ['Non-invasive BCI', 'Thought Control', 'Neural Feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Advanced space exploration and colonization systems',
      features: ['Interstellar Travel', 'Space Habitats', 'Asteroid Mining'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30'
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: '🧬',
      description: 'Revolutionary biotech solutions for human enhancement',
      features: ['Gene Editing', 'Regenerative Medicine', 'Longevity Research'],
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-600/30 to-emerald-600/30'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: '🛡️',
      description: 'Advanced security systems and quantum cryptography',
      features: ['Quantum Cryptography', 'AI-Powered Security', 'Zero-Trust Architecture'],
      color: 'from-red-600 to-pink-600',
      bgColor: 'from-red-600/30 to-pink-600/30'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Interactive Technology Showcase 2026</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge technologies through interactive demonstrations and immersive features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-8 border border-gray-600/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{tech.name}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore {tech.name} →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">🎮 Interactive Demos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">AI Consciousness Simulator</h4>
              <p className="text-gray-300 mb-4">Experience AI consciousness and decision-making</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Demo →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Quantum Computing Lab</h4>
              <p className="text-gray-300 mb-4">Run quantum algorithms and simulations</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Lab →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Neural Interface Demo</h4>
              <p className="text-gray-300 mb-4">Try brain-computer communication</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;