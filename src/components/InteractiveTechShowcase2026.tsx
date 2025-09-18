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
      description: 'Exponential computing power for complex problem solving',
      features: ['Quantum Supremacy', 'Cryptography', 'Optimization'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for enhanced capabilities',
      features: ['BCI Technology', 'Thought Control', 'Neural Feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that are reshaping our world through interactive demonstrations and real-time showcases.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4 text-center animate-pulse">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-center opacity-90 mb-6">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className={`bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore {tech.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;