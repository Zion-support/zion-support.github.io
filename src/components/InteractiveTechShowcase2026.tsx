import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 0,
      name: "Quantum AI",
      icon: "🧠",
      description: "Revolutionary quantum computing combined with artificial intelligence",
      features: ["Quantum neural networks", "Exponential processing power", "Quantum machine learning", "Quantum consciousness"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Synthetic Biology",
      icon: "🧬",
      description: "Programmable biological systems and synthetic organisms",
      features: ["DNA programming", "Synthetic organisms", "Bio-computing", "Living materials"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 2,
      name: "Space Technology",
      icon: "🚀",
      description: "Advanced space exploration and colonization technologies",
      features: ["Quantum propulsion", "Terraforming", "Space habitats", "Interstellar travel"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless communication",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Mind-machine sync"],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2026</h2>
        <p className="text-xl opacity-90">Explore cutting-edge technologies with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {technologies.map((tech, index) => (
          <button
            key={tech.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.name}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="text-8xl mb-4 text-center">{technologies[activeTab].icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center">{technologies[activeTab].name}</h3>
            <p className="text-lg opacity-90 text-center mb-6">{technologies[activeTab].description}</p>
          </div>
          
          <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h4 className="text-xl font-bold mb-4">Key Features:</h4>
            <ul className="space-y-3">
              {technologies[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"></span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-6 bg-gradient-to-r ${technologies[activeTab].color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Learn More About {technologies[activeTab].name} →
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">99.9%</div>
          <div className="text-sm opacity-80">Accuracy</div>
        </div>
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">1000x</div>
          <div className="text-sm opacity-80">Faster</div>
        </div>
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">∞</div>
          <div className="text-sm opacity-80">Possibilities</div>
        </div>
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-indigo-400">2026</div>
          <div className="text-sm opacity-80">Future</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;