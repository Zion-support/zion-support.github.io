import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      name: 'Quantum Consciousness',
      icon: '🧠',
      description: 'Experience the fusion of quantum mechanics and consciousness',
      color: 'from-slate-600 to-gray-600',
      features: ['Synthetic Awareness', 'Quantum Coherence', 'Consciousness Transfer', 'Universal Mind']
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Access parallel dimensions and alternate realities',
      color: 'from-indigo-600 to-pink-600',
      features: ['Portal Networks', 'Reality Scanning', 'Dimensional Storage', 'Parallel Communication']
    },
    {
      id: 'advanced',
      name: 'Advanced Technology',
      icon: '🚀',
      description: 'Revolutionary breakthroughs in technology',
      color: 'from-violet-600 to-fuchsia-600',
      features: ['Consciousness Transfer', 'Quantum Reality', 'Molecular Assembly', 'Time Dilation']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🎮 Interactive Technology Experience 2027</h2>
        <p className="text-xl text-gray-300">Explore revolutionary technologies through immersive interactions</p>
      </div>

      {/* Technology Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        {technologies.map((tech, index) => (
          <button
            key={tech.id}
            onClick={() => handleTechClick(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTech === index
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.name}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="relative">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-xl p-8 text-white`}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-bounce">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{technologies[activeTech].name}</h3>
              <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
            </div>

            {/* Interactive Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technologies[activeTech].features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-black/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-sm">{feature}</h4>
                </div>
              ))}
            </div>

            {/* Interactive Demo Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
                🎮 Interactive Demo
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
                📚 Learn More
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
                🚀 Experience Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white text-center mb-6">⏰ Technology Evolution Timeline</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          
          {[
            { year: '2025', tech: 'AI Consciousness', status: 'Completed' },
            { year: '2026', tech: 'Quantum Neural Fusion', status: 'In Progress' },
            { year: '2027', tech: 'Interdimensional Access', status: 'Next' },
            { year: '2028', tech: 'Universal Consciousness', status: 'Planned' }
          ].map((item, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white">{item.tech}</h4>
                  <p className="text-gray-300 text-sm">{item.year}</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    item.status === 'Completed' ? 'bg-green-600 text-white' :
                    item.status === 'In Progress' ? 'bg-yellow-600 text-white' :
                    item.status === 'Next' ? 'bg-blue-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-cyan-100 mb-6">Join us in exploring these revolutionary technologies</p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/AdvancedTechShowcase2027" className="bg-white text-cyan-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Technologies
            </a>
            <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;