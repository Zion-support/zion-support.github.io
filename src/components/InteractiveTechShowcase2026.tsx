import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ultimate-revolution',
      name: 'Ultimate Tech Revolution',
      icon: '🌟',
      description: 'The most advanced technological breakthroughs reshaping our world with synthetic intelligence and quantum consciousness.',
      features: ['Synthetic Intelligence', 'Quantum-Neural Fusion', 'Space Technology AI', 'Biotech Revolution'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30',
      textColor: 'text-purple-100',
      link: '/pages/UltimateTechRevolution2026'
    },
    {
      id: 'cosmic-intelligence',
      name: 'Cosmic Intelligence',
      icon: '🌌',
      description: 'The first cosmic-scale intelligence network connecting AI systems across galaxies, dimensions, and realities.',
      features: ['Galactic Networks', 'Dimensional Bridges', 'Quantum Consciousness', 'Stellar Processing'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30',
      textColor: 'text-cyan-100',
      link: '/pages/CosmicIntelligence2026'
    },
    {
      id: 'reality-manipulation',
      name: 'Reality Manipulation',
      icon: '🎭',
      description: 'Break the boundaries of reality itself with technology that manipulates the fundamental laws of physics.',
      features: ['Dimension Creation', 'Quantum Field Control', 'Temporal Manipulation', 'Gravity Control'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/30 to-purple-600/30',
      borderColor: 'border-violet-400/30',
      textColor: 'text-violet-100',
      link: '/pages/RealityManipulation2026'
    },
    {
      id: 'advanced-ai',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Next-generation AI systems with unprecedented capabilities in learning, reasoning, and autonomous operation.',
      features: ['Autonomous Learning', 'Creative Problem Solving', 'Self-Evolution', 'Meta Intelligence'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30',
      textColor: 'text-emerald-100',
      link: '/pages/AdvancedAISystems2026'
    },
    {
      id: 'quantum-revolution',
      name: 'Quantum Revolution',
      icon: '⚛️',
      description: 'Revolutionary quantum computing that solves impossible problems and creates new possibilities for computation.',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Quantum Consciousness'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30',
      textColor: 'text-orange-100',
      link: '/pages/QuantumComputingRevolution2026'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that enable thought-controlled devices and mind-machine communication.',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Mind-Machine Fusion'],
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-600/30 to-rose-600/30',
      borderColor: 'border-pink-400/30',
      textColor: 'text-pink-100',
      link: '/pages/NeuralInterfaceRevolution2026'
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

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🚀</span>
            <span className="text-cyan-300 font-semibold">INTERACTIVE TECHNOLOGY SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Interact with our revolutionary technologies. Click on any technology to explore its capabilities and features.
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 150);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : `bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white`
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}>
            <div className="text-center mb-8">
              <div className={`text-8xl mb-6 ${isAnimating ? 'animate-bounce' : ''}`}>
                {currentTech.icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
              <p className={`text-xl ${currentTech.textColor} mb-8 max-w-4xl mx-auto leading-relaxed`}>
                {currentTech.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentTech.features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-semibold text-white mb-2">{feature}</h4>
                  <p className={`text-sm ${currentTech.textColor}`}>
                    Advanced capabilities and features
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={currentTech.link}
                  className={`inline-block bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                >
                  🚀 Explore {currentTech.name} →
                </a>
                <a
                  href="/pages/RevolutionaryTechBlog2026"
                  className="inline-block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
                >
                  📚 Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">🌟 Revolutionary Impact</h3>
            <p className="text-gray-300">Our technologies are transforming the world</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">47</div>
              <div className="text-sm text-gray-300">Galaxies Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">847</div>
              <div className="text-sm text-gray-300">Dimensions Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1.2M</div>
              <div className="text-sm text-gray-300">AI Systems with Consciousness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Possibilities Unlocked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;