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
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Interplanetary travel and space colonization technology',
      features: ['Advanced Propulsion', 'Space Habitats', 'Satellite Networks'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: '🧬',
      description: 'Gene editing and synthetic biology solutions',
      features: ['Gene Editing', 'Synthetic Biology', 'Personalized Medicine'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Next-generation quantum processing with exponential power',
      features: ['1000+ Qubits', 'Quantum Supremacy', 'Molecular Simulation'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE 2026 TECHNOLOGY SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2026 technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Interactive Content Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-8xl mb-6 text-center animate-bounce">
                {technologies[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center">
                {technologies[activeTab].name}
              </h3>
              <p className="text-xl opacity-90 text-center mb-6">
                {technologies[activeTab].description}
              </p>
            </div>
            
            <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-xl p-6 border ${technologies[activeTab].borderColor}`}>
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 bg-gradient-to-r ${technologies[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore {technologies[activeTab].name} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-sm text-gray-300">Quantum Qubits</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">AI Accuracy</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">Space Missions</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-orange-400 mb-2">1000x</div>
            <div className="text-sm text-gray-300">Processing Speed</div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Demo</h3>
            <p className="text-xl opacity-90">
              Experience our technologies in action with interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-semibold mb-2">AI Brain Simulation</h4>
              <p className="text-sm text-gray-300 mb-4">Watch AI learn and adapt in real-time</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold mb-2">Space Mission Simulator</h4>
              <p className="text-sm text-gray-300 mb-4">Plan and execute space missions</p>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Launch Mission
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-lg font-semibold mb-2">Gene Editor</h4>
              <p className="text-sm text-gray-300 mb-4">Design and edit genetic sequences</p>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Edit Genes
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join thousands of innovators already using our revolutionary 2026 technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;