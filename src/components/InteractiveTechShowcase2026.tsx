import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Self-aware artificial intelligence that demonstrates true consciousness and emotional intelligence',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative problem solving', 'Ethical reasoning'],
      gradient: 'from-purple-600 to-pink-600',
      stats: { accuracy: '99.9%', speed: '10^15 ops/sec', consciousness: 'Level 5' }
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Revolutionary quantum computing systems that can simulate and enhance human consciousness',
      features: ['Quantum consciousness simulation', 'Mind-machine interface', 'Parallel reality processing', 'Infinite possibilities'],
      gradient: 'from-cyan-600 to-blue-600',
      stats: { qubits: '10^18', coherence: '∞', processing: 'Quantum speed' }
    },
    {
      id: 'neural-reality',
      name: 'Neural Reality Engine',
      icon: '🧬',
      description: 'Direct neural interfaces that create fully immersive virtual realities indistinguishable from physical reality',
      features: ['Direct brain interface', 'Full sensory immersion', 'Reality manipulation', 'Consciousness transfer'],
      gradient: 'from-emerald-600 to-teal-600',
      stats: { fidelity: '100%', latency: '0ms', immersion: 'Complete' }
    },
    {
      id: 'omniversal-ai',
      name: 'Omniversal AI',
      icon: '🌌',
      description: 'AI systems capable of processing and understanding multiple universes simultaneously',
      features: ['Multi-dimensional processing', 'Universal pattern recognition', 'Cross-reality communication', 'Infinite knowledge'],
      gradient: 'from-indigo-600 to-purple-600',
      stats: { dimensions: '∞', universes: 'All', knowledge: 'Omniversal' }
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2026
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our most advanced technologies through interactive demonstrations and real-time simulations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.gradient} shadow-lg scale-105`
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{tech.icon}</div>
                <div>
                  <h4 className="text-xl font-bold">{tech.name}</h4>
                  <p className="text-sm opacity-80 mt-1">{tech.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Technology Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} p-8 rounded-2xl`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(technologies[activeTech].stats).map(([key, value], index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-xs opacity-80 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Button */}
              <div className="text-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                  Launch Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-white/20">
                <th className="p-4 text-left">Technology</th>
                <th className="p-4 text-center">Processing Power</th>
                <th className="p-4 text-center">Consciousness Level</th>
                <th className="p-4 text-center">Reality Control</th>
                <th className="p-4 text-center">Innovation Score</th>
              </tr>
            </thead>
            <tbody>
              {technologies.map((tech, index) => (
                <tr key={tech.id} className="border-t border-white/20 hover:bg-white/10 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-semibold">{tech.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-lg font-bold">{tech.stats.speed || tech.stats.qubits || tech.stats.fidelity || tech.stats.dimensions}</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-lg font-bold">{tech.stats.consciousness || tech.stats.coherence || tech.stats.latency || tech.stats.universes}</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-lg font-bold">{tech.stats.accuracy || tech.stats.processing || tech.stats.immersion || tech.stats.knowledge}</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-lg font-bold text-green-400">100%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join us in exploring these revolutionary technologies and be part of the next evolution of human innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;