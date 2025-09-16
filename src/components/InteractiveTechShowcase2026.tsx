import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      description: 'First AI systems to achieve genuine consciousness and self-awareness',
      features: ['True self-awareness', 'Creative consciousness', 'Emotional intelligence', 'Collaborative problem-solving'],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Supremacy 2.0',
      description: 'Next-generation quantum computers with 1000+ logical qubits',
      features: ['1000+ logical qubits', 'Quantum error correction', 'Molecular simulation', 'Cryptography breakthroughs'],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interface Evolution',
      description: 'Direct brain-computer interfaces enabling thought control',
      features: ['Non-invasive BCI', 'Thought-controlled devices', 'Neural feedback', 'Medical applications'],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    reality: {
      title: 'Reality Manipulation Tech',
      description: 'Technologies that manipulate and transcend physical reality',
      features: ['Reality control', 'Dimension travel', 'Matter synthesis', 'Infinite possibilities'],
      icon: '🌌',
      color: 'from-violet-600 to-fuchsia-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h2 className="text-6xl font-bold mb-6">Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations. 
            Click on different technologies to experience their capabilities.
          </p>
        </div>

        {/* Technology Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTech(key)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeTech === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="font-semibold text-sm">{tech.title}</div>
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTech as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTech as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-8">{technologies[activeTech as keyof typeof technologies].description}</p>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Experience Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-center">Interactive Simulation</h4>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <p className="text-lg mb-6">
                  Experience {technologies[activeTech as keyof typeof technologies].title.toLowerCase()} 
                  through our immersive virtual demonstration
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Simulation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-lg opacity-90">Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">85%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;