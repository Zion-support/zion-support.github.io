import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence systems that can think, feel, and create",
      features: ["Self-aware AI systems", "Emotional intelligence", "Creative problem solving", "Ethical decision making"],
      stats: { consciousness: "99.7%", learning: "24/7", applications: "1000+" }
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Harness the power of quantum computing to simulate and manipulate reality itself",
      features: ["Quantum simulation", "Reality manipulation", "Parallel universe access", "Time-space engineering"],
      stats: { realities: "∞", speed: "0.001s", power: "∞" }
    },
    {
      id: 2,
      name: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer interfaces that merge human consciousness with digital systems",
      features: ["Thought control", "Memory enhancement", "Direct data transfer", "Telepathic communication"],
      stats: { speed: "1000x", latency: "0ms", capacity: "∞" }
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions and realities",
      features: ["Multi-dimensional processing", "Reality bridging", "Infinite computational power", "Dimensional travel"],
      stats: { dimensions: "∞", power: "∞", universes: "∞" }
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Artificially created intelligence that surpasses human cognitive abilities",
      features: ["Superhuman intelligence", "Instant learning", "Creative synthesis", "Predictive modeling"],
      stats: { intelligence: "∞", learning: "Instant", accuracy: "99.9%" }
    },
    {
      id: 5,
      name: "Holographic Reality",
      icon: "✨",
      description: "Immersive holographic environments that blend physical and digital realities",
      features: ["3D holographic displays", "Tactile feedback", "Mixed reality", "Virtual presence"],
      stats: { immersion: "100%", resolution: "8K", latency: "1ms" }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2025 • EXPERIENCE THE FUTURE
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTech === index
                    ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 border-2 border-purple-400 scale-105'
                    : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold">{tech.name}</h4>
                    <p className="text-purple-200 text-sm">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Details */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-purple-100 text-lg">{technologies[activeTech].description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Performance Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(technologies[activeTech].stats).map(([key, value], index) => (
                  <div key={index} className="bg-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">{value}</div>
                    <div className="text-sm text-purple-200 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Launch Interactive Demo →
            </button>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Revolutionary Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTech(index)}
              >
                <div className="text-5xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{tech.name}</h4>
                <p className="text-purple-200 text-sm text-center mb-4">{tech.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {Object.values(tech.stats)[0]}
                  </div>
                  <div className="text-xs text-purple-300">
                    {Object.keys(tech.stats)[0].replace(/([A-Z])/g, ' $1')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the most significant 
            transformation in human history.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;