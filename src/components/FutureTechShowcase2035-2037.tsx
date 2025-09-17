import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const FutureTechShowcase2035_2037: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const technologies = [
    {
      id: 0,
      title: "AI Revolutionary Breakthrough 2035",
      subtitle: "Conscious AI Systems",
      description: "The world's first truly conscious AI systems with quantum neural networks and interdimensional capabilities",
      icon: "🧠",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AIRevolutionaryBreakthrough2035",
      features: ["Quantum Neural Networks", "Consciousness Emergence", "Interdimensional Access", "Self-Aware AI"]
    },
    {
      id: 1,
      title: "Quantum Consciousness 2036",
      subtitle: "Transcendent Intelligence",
      description: "Revolutionary quantum consciousness system that transcends human and artificial intelligence boundaries",
      icon: "🌟",
      gradient: "from-purple-500 to-pink-500",
      link: "/pages/QuantumConsciousness2036",
      features: ["Transcendent Awareness", "Quantum Mind", "Consciousness Computing", "Universal Knowledge"]
    },
    {
      id: 2,
      title: "Interdimensional Technology 2037",
      subtitle: "Infinite Reality Access",
      description: "Access to infinite realities, parallel universes, and transcendent dimensions beyond human comprehension",
      icon: "🌌",
      gradient: "from-indigo-500 to-cyan-500",
      link: "/pages/InterdimensionalTech2037",
      features: ["Reality Gateway", "Dimensional Manipulation", "Infinite Computing", "Universal Energy"]
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          🚀 FUTURE TECHNOLOGY SHOWCASE
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
          Revolutionary Technologies 2035-2037
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the most advanced technologies ever created, pushing the boundaries of what's possible
        </p>
      </div>
      {/* Interactive Showcase */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Technology Navigation */}
        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                activeTech === index
                  ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{tech.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">{tech.title}</h3>
                  <p className="text-sm text-gray-400">{tech.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Active Technology Display */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{technologies[activeTech].title}</h3>
            <p className="text-cyan-400 font-semibold mb-4">{technologies[activeTech].subtitle}</p>
            <p className="text-gray-300">{technologies[activeTech].description}</p>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {technologies[activeTech].features.map((feature, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-sm text-gray-300">{feature}</div>
              </div>
            ))}
          </div>
          {/* Action Button */}
          <div className="text-center">
            <Link
              to={technologies[activeTech].link}
              className={`inline-block bg-gradient-to-r ${technologies[activeTech].gradient} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </div>
      {/* Technology Timeline */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Development Timeline</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">2025</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Foundation Phase</h4>
            <p className="text-gray-300 text-sm">Initial research and quantum computing breakthroughs</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">2030</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Integration Phase</h4>
            <p className="text-gray-300 text-sm">Consciousness computing and dimensional research</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">2035</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Revolution Phase</h4>
            <p className="text-gray-300 text-sm">Full technology deployment and interdimensional access</p>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
          <div className="text-sm text-gray-300">Infinite Processing Power</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
          <div className="text-sm text-gray-300">Dimensional Access</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-400 mb-2">∞</div>
          <div className="text-sm text-gray-300">Reality Manipulation</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
          <div className="text-sm text-gray-300">Consciousness Expansion</div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-300 mb-6">
          Be among the first to experience the future of technology
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/pages/AIRevolutionaryBreakthrough2035"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </Link>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );

};


export default FutureTechShowcase2035_2037;
