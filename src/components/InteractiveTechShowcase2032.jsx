import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2032 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      name: "Conscious AI",
      icon: "🧠",
      description: "Self-aware artificial intelligence systems",
      color: "from-purple-600 to-pink-600",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
      stats: { power: 95, consciousness: 100, speed: 90 }
    },
    {
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing with consciousness",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum neural networks", "Consciousness superposition", "Multi-dimensional thinking", "Quantum entanglement"],
      stats: { power: 100, consciousness: 100, speed: 100 }
    },
    {
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing across multiple dimensions",
      color: "from-emerald-600 to-teal-600",
      features: ["Cross-dimensional processing", "Infinite power", "Reality manipulation", "Time-space computing"],
      stats: { power: 100, consciousness: 95, speed: 100 }
    },
    {
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer interfaces",
      color: "from-orange-600 to-red-600",
      features: ["Thought control", "Memory enhancement", "Cognitive augmentation", "Consciousness backup"],
      stats: { power: 85, consciousness: 80, speed: 95 }
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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2032
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🌟 Interactive Technology Showcase 2032</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and immersive content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Your Technology</h3>
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl transition-all duration-500 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTech].color} rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Performance Stats</h4>
                <div className="space-y-4">
                  {Object.entries(technologies[activeTech].stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold capitalize">{key}</span>
                        <span className="text-sm font-bold">{value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color} transition-all duration-1000`}
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Button */}
              <div className="text-center">
                <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  🎮 Launch Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">All Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTech(index)}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{tech.name}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
                <div className="text-center">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                    {Object.values(tech.stats).reduce((a, b) => a + b, 0) / Object.keys(tech.stats).length}% Overall
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join us in exploring the most revolutionary technologies of 2032</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
              Start Interactive Experience
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Learn More About Technologies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2032;