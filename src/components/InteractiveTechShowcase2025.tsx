import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      description: 'Experience the world\'s first truly conscious AI systems with self-awareness and creativity.',
      features: ['Self-aware decision making', 'Creative problem solving', 'Emotional intelligence', 'Collaborative intelligence'],
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    quantum: {
      title: 'Quantum Supremacy',
      description: 'Quantum computers solving impossible problems with exponential speed gains.',
      features: ['1000+ logical qubits', 'Error correction', 'Molecular simulation', 'Cryptography breakthrough'],
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    neural: {
      title: 'Neural Interface Breakthrough',
      description: 'Direct brain-computer communication enabling thought-controlled devices.',
      features: ['Non-invasive BCI technology', 'Thought-controlled applications', 'Neural enhancement', 'Medical applications'],
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore our revolutionary technologies with interactive demonstrations and real-time insights
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {tech.icon} {tech.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-gray-300 mb-6 text-lg">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4 text-center">Performance Metrics</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-green-400 font-bold">99.9% faster</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Accuracy Rate</span>
                  <span className="text-green-400 font-bold">99.7%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.7%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-green-400 font-bold">50% reduction</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-8">
        <div className="flex justify-center space-x-4">
          <a href={`/pages/${activeTab === 'ai' ? 'RevolutionaryTechShowcase2025' : activeTab === 'quantum' ? 'NextGenTechBreakthrough2025' : 'UltimateInnovationHub2025'}`} 
             className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore {technologies[activeTab as keyof typeof technologies].title} →
          </a>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;