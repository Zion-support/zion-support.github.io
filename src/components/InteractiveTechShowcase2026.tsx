import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Truly conscious AI systems with self-awareness and creativity',
      color: 'from-indigo-600 to-purple-600',
      features: ['Self-Awareness', 'Creative Intelligence', 'Emotional Processing', 'Metacognitive Abilities']
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing across multiple dimensions simultaneously',
      color: 'from-cyan-600 to-blue-600',
      features: ['6-Dimensional Processing', 'Reality Manipulation', 'Quantum Bridges', 'Temporal Computing']
    },
    {
      id: 'quantum-neural',
      name: 'Quantum-Neural Fusion',
      icon: '⚛️',
      description: 'Revolutionary fusion of quantum computing and neural networks',
      color: 'from-purple-600 to-pink-600',
      features: ['1000+ Qubits', 'Neural Entanglement', 'Exponential Speed', 'Consciousness Simulation']
    },
    {
      id: 'synthetic',
      name: 'Synthetic Intelligence',
      icon: '🤖',
      description: 'AI agents with synthetic consciousness and autonomy',
      color: 'from-emerald-600 to-teal-600',
      features: ['Autonomous Agents', 'Synthetic Consciousness', 'Collective Intelligence', 'Creative Synthesis']
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

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2026 TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through an interactive showcase. 
            Click on different technologies to discover their capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} shadow-lg scale-105`
                    : 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-slate-700/50 hover:to-slate-600/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTech].color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4 animate-bounce">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                    >
                      <div className="text-sm font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href={`/pages/${technologies[activeTech].id === 'consciousness' ? 'AdvancedConsciousnessComputing2026' : 
                            technologies[activeTech].id === 'interdimensional' ? 'InterdimensionalTechRevolution2026' :
                            technologies[activeTech].id === 'quantum-neural' ? 'QuantumNeuralFusion2026' :
                            'SyntheticIntelligence2026'}`}
                    className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore {technologies[activeTech].name} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
            <div className="text-white font-semibold">Dimensions</div>
            <div className="text-gray-400 text-sm">Simultaneous processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-white font-semibold">Accuracy</div>
            <div className="text-gray-400 text-sm">Consciousness rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-white font-semibold">Scalability</div>
            <div className="text-gray-400 text-sm">Infinite potential</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">0ms</div>
            <div className="text-white font-semibold">Latency</div>
            <div className="text-gray-400 text-sm">Instantaneous response</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deeper into our revolutionary technologies and discover how they can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/RevolutionaryTechShowcase2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              View All Technologies
            </a>
            <a href="/pages/AdvancedConsciousnessComputing2026" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Start with Consciousness
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;