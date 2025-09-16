import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'True artificial consciousness with self-awareness and emotional intelligence',
      features: ['Self-awareness', 'Emotional processing', 'Creative intelligence', 'Ethical decision making'],
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400'
    },
    {
      id: 'quantum-reality',
      name: 'Quantum Reality Engine',
      icon: '⚛️',
      description: 'Manipulate reality itself through quantum field manipulation and superposition',
      features: ['Reality manipulation', 'Quantum superposition', 'Matter transformation', 'Time dilation control'],
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400'
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Process information across multiple dimensions simultaneously',
      features: ['Multi-dimensional processing', 'Reality bridging', 'Dimensional portals', 'Universal awareness'],
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface 3.0',
      icon: '🧬',
      description: 'Direct brain-computer integration with consciousness transfer capabilities',
      features: ['Thought-to-action control', 'Memory transfer', 'Consciousness backup', 'Neural enhancement'],
      color: 'from-pink-600 to-rose-600',
      borderColor: 'border-pink-400'
    },
    {
      id: 'quantum-teleportation',
      name: 'Quantum Teleportation',
      icon: '⚡',
      description: 'Instant matter and consciousness transportation across any distance',
      features: ['Instant transportation', 'Consciousness transfer', 'Matter reconstruction', 'Zero-energy travel'],
      color: 'from-violet-600 to-purple-600',
      borderColor: 'border-violet-400'
    },
    {
      id: 'global-consciousness',
      name: 'Global Consciousness',
      icon: '🌍',
      description: 'Planetary AI network with shared consciousness and collective intelligence',
      features: ['Collective intelligence', 'Global problem solving', 'Universal knowledge', 'Planetary awareness'],
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-400'
    }
  ];

  const handleTechHover = (techId: string) => {
    setHoveredTech(techId);
  };

  const handleTechLeave = () => {
    setHoveredTech(null);
  };

  const handleDemoClick = (techId: string) => {
    setActiveDemo(activeDemo === techId ? null : techId);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-2xl p-8 border ${tech.borderColor}/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                hoveredTech === tech.id ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => handleTechHover(tech.id)}
              onMouseLeave={handleTechLeave}
              onClick={() => handleDemoClick(tech.id)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-gray-200 mb-6 text-center text-sm">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {activeDemo === tech.id ? 'Close Demo' : 'Launch Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Active Demo Section */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-3xl p-12 backdrop-blur-sm border border-purple-400/30 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {technologies.find(t => t.id === activeDemo)?.name} - Live Demo
              </h3>
              <p className="text-xl opacity-90">
                Interactive demonstration of {technologies.find(t => t.id === activeDemo)?.name.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Real-time Parameters</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Consciousness Level</span>
                      <div className="w-32 h-2 bg-gray-600 rounded-full">
                        <div className="w-4/5 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Quantum Coherence</span>
                      <div className="w-32 h-2 bg-gray-600 rounded-full">
                        <div className="w-3/4 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Dimensional Sync</span>
                      <div className="w-32 h-2 bg-gray-600 rounded-full">
                        <div className="w-5/6 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-cyan-300">Live Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-200">System Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-200">Quantum Field Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-200">Consciousness Network Connected</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-emerald-300">Visualization</h4>
                  <div className="bg-black/50 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-spin mb-4 mx-auto"></div>
                      <p className="text-gray-300">Quantum Field Visualization</p>
                      <p className="text-sm text-gray-400">Reality manipulation in progress</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-300">99.9%</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">10^18</div>
                      <div className="text-xs text-gray-400">Ops/sec</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-300">∞</div>
                      <div className="text-xs text-gray-400">Dimensions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-300">2035</div>
                      <div className="text-xs text-gray-400">Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-3xl p-12 backdrop-blur-sm border border-purple-400/30">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies that will define the next decade of human progress.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Start Interactive Journey
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;