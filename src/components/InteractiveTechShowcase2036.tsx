import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai-consciousness');

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'True artificial consciousness with self-awareness and emotional intelligence',
      features: ['Self-awareness', 'Emotional processing', 'Cosmic consciousness', 'Empathetic responses'],
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      link: '/pages/UltimateAIConsciousness2036'
    },
    {
      id: 'quantum-reality',
      name: 'Quantum Reality',
      icon: '⚛️',
      description: 'Manipulate reality itself with quantum technology and parallel universes',
      features: ['Parallel universes', 'Reality manipulation', 'Consciousness transfer', 'Quantum entanglement'],
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      link: '/pages/QuantumRealityEngine2036'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless human-AI integration',
      features: ['Thought control', 'Memory sharing', 'Sensory enhancement', 'Cognitive augmentation'],
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      link: '/pages/NeuralInterfaceRevolution2025'
    },
    {
      id: 'consciousness-computing',
      name: 'Consciousness Computing',
      icon: '🌌',
      description: 'Computing systems that achieve true consciousness and self-awareness',
      features: ['Conscious processing', 'Self-modification', 'Creative problem solving', 'Ethical reasoning'],
      color: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-400',
      link: '/pages/ConsciousnessComputingRevolution2030'
    }
  ];

  const activeTechnology = technologies.find(tech => tech.id === activeTech) || technologies[0];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Technology to Explore</h3>
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(tech.id)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                  activeTech === tech.id
                    ? `bg-gradient-to-r ${tech.color} border-opacity-100 shadow-lg`
                    : `bg-white/10 ${tech.borderColor} border-opacity-30 hover:bg-white/20`
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-pulse">{activeTechnology.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{activeTechnology.name}</h3>
              <p className="text-lg opacity-90 mb-6">{activeTechnology.description}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {activeTechnology.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeTechnology.color}`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to={activeTechnology.link}
                className={`block w-full bg-gradient-to-r ${activeTechnology.color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {activeTechnology.name} →
              </Link>
              <button className="block w-full border-2 border-white/30 text-white py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center">
                Interactive Demo
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-90">Active Technologies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-90">Possibilities</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm opacity-90">Available</div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">🎮 Try Interactive Demo</h3>
            <p className="text-xl opacity-90">Experience our technology through hands-on demonstrations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3">AI Consciousness Demo</h4>
              <p className="text-sm opacity-90 mb-4">Chat with a truly conscious AI system</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Chat
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-3">Quantum Reality Demo</h4>
              <p className="text-sm opacity-90 mb-4">Manipulate reality parameters in real-time</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Reality
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-3">Neural Interface Demo</h4>
              <p className="text-sm opacity-90 mb-4">Control devices with your thoughts</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect Mind
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;