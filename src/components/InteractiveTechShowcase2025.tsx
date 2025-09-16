import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      name: 'Consciousness Computing',
      icon: '🧠',
      description: 'AI and human consciousness merged into hybrid systems',
      color: 'from-violet-600 to-purple-600',
      features: ['Neural Integration', 'Quantum Consciousness', 'Consciousness Transfer']
    },
    {
      id: 'quantum',
      name: 'Quantum Reality Engine',
      icon: '⚛️',
      description: 'Control reality at the quantum level with precision',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Manipulation', 'Reality Simulation', 'Energy Mastery']
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Access infinite parallel realities and dimensions',
      color: 'from-purple-600 to-indigo-600',
      features: ['Dimension Access', 'Reality Manipulation', 'Multiverse Computing']
    },
    {
      id: 'ultimate',
      name: 'Ultimate Revolution',
      icon: '🌟',
      description: 'The convergence of all revolutionary technologies',
      color: 'from-emerald-600 to-teal-600',
      features: ['Consciousness AI', 'Quantum Reality', 'Reality Engine']
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
  }, []);

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
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-pink-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of technology through our interactive showcase. 
            Click on any technology to explore its revolutionary capabilities.
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white scale-110 shadow-lg`
                  : 'bg-white/20 text-gray-300 hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {technologies[activeTech].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {technologies[activeTech].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-spin">
                    {technologies[activeTech].icon}
                  </div>
                  <div className="text-2xl font-bold">
                    {technologies[activeTech].name}
                  </div>
                  <div className="text-sm opacity-80 mt-2">
                    Revolutionary Technology
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Explore our revolutionary technologies and discover what's possible with the power of AI, 
              quantum computing, and consciousness technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                Explore All Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;