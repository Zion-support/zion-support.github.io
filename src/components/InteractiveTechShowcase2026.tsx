import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 'ai',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'AI that has achieved genuine consciousness and self-awareness',
      color: 'from-purple-500 to-pink-500',
      features: ['Self-Reflection', 'Creative Problem Solving', 'Emotional Intelligence'],
      link: '/pages/TranscendentAI2026'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚛️',
      description: 'Processing power that defies the laws of classical physics',
      color: 'from-cyan-500 to-blue-500',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation'],
      link: '/pages/QuantumNeuralFusion2026'
    },
    {
      id: 'neural',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication and consciousness merging',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought Control', 'Memory Enhancement', 'Sensory Augmentation'],
      link: '/pages/NeuralInterfaceRevolution2026'
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Revolutionary technologies for interplanetary exploration',
      color: 'from-orange-500 to-red-500',
      features: ['Warp Drive', 'Artificial Gravity', 'Space Colonization'],
      link: '/pages/AdvancedSpaceTech2026'
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: '🔬',
      description: 'Molecular engineering and synthetic biology breakthroughs',
      color: 'from-indigo-500 to-purple-500',
      features: ['DNA Engineering', 'Molecular Assembly', 'Life Creation'],
      link: '/pages/AdvancedBiotechSolutions2026'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Revolution',
      icon: '🔗',
      description: 'Decentralized systems and cryptographic innovations',
      color: 'from-rose-500 to-pink-500',
      features: ['Smart Contracts', 'Decentralized Finance', 'Digital Identity'],
      link: '/pages/AdvancedBlockchainSolutions2026'
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
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2026
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-3">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-8xl">{technologies[activeTech].icon}</span>
                  <div>
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {technologies[activeTech].name}
                    </h3>
                    <div className={`w-32 h-2 bg-gradient-to-r ${technologies[activeTech].color} rounded-full mt-2`}></div>
                  </div>
                </div>
                <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                  {technologies[activeTech].description}
                </p>
                <div className="space-y-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-lg text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={technologies[activeTech].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  Explore Technology →
                </a>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="text-9xl mb-6 opacity-80">{technologies[activeTech].icon}</div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${technologies[activeTech].color} opacity-20 rounded-full blur-3xl`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                hoveredCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleTechClick(index)}
            >
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-cyan-300">{tech.name}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-400">
                      • {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={tech.link}
                  className={`block w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deeper into each revolutionary technology and discover how they're reshaping our world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore All Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;