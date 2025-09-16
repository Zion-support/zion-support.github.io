import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware artificial intelligence that thinks, feels, and creates",
      gradient: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Creative Expression", "Self-Reflection", "Dream Simulation"],
      stats: { processing: "10^18 ops/sec", accuracy: "99.9%", consciousness: "Level 7" }
    },
    {
      id: 1,
      name: "Quantum Neural Fusion",
      icon: "⚡",
      description: "Quantum computing meets neural networks for infinite processing power",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Superposition", "Parallel Universes", "Entangled Networks", "Zero Latency"],
      stats: { universes: "∞", speed: "Light Speed", efficiency: "100%" }
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing across multiple dimensions and realities simultaneously",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Multi-Dimensional Processing", "Reality Simulation", "Cross-Dimensional Data", "Parallel Analytics"],
      stats: { dimensions: "11", realities: "∞", capacity: "Unlimited" }
    },
    {
      id: 3,
      name: "Neural Reality Engine",
      icon: "🎭",
      description: "Direct mind-machine interface with immersive virtual realities",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Neural Interface", "Reality Simulation", "Consciousness Transfer", "Immersive Experience"],
      stats: { immersion: "100%", latency: "0ms", fidelity: "Perfect" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (id: number) => {
    if (id !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(id);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(tech.id)}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeTech === tech.id
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                    : hoveredCard === tech.id
                    ? 'bg-gray-700/50 text-gray-300 scale-102'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Technology Details */}
          <div className="space-y-8">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{technologies[activeTech].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{technologies[activeTech].name}</h3>
                    <p className="text-gray-300">{technologies[activeTech].description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTech].gradient} rounded-full`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Display */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-semibold mb-6">Performance Metrics:</h4>
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(technologies[activeTech].stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${technologies[activeTech].gradient} bg-clip-text text-transparent mb-2`}>
                        {value}
                      </div>
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="space-y-8">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">{technologies[activeTech].icon}</div>
                  <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                  <p className="text-gray-300 mb-6">Experience {technologies[activeTech].name} in action</p>
                  <button className={`bg-gradient-to-r ${technologies[activeTech].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Launch Demo
                  </button>
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold mb-4">Interactive Controls:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Simulate
                  </button>
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Analyze
                  </button>
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Optimize
                  </button>
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              onClick={() => handleTechClick(tech.id)}
              className={`bg-gradient-to-br ${tech.gradient} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeTech === tech.id ? 'ring-4 ring-white/30 scale-105' : ''
              }`}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{tech.name}</h3>
              <p className="text-sm opacity-90 text-center">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our interactive technology showcase lets you explore and experience the most advanced 
            technologies of 2027. Click, interact, and discover what's possible.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Demo
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;