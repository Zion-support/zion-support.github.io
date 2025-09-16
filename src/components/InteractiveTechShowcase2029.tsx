import React, { useState } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const technologies = [
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness Computing',
      icon: '🧠',
      description: 'The fusion of quantum computing with artificial consciousness',
      features: ['10^18 operations/second', 'Emotional intelligence', 'Self-aware decisions', 'Quantum entanglement'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'interdimensional-reality',
      name: 'Interdimensional Reality Engine',
      icon: '🌌',
      description: 'Manipulate 11-dimensional space-time with precision',
      features: ['11D space manipulation', 'Reality simulation', 'Cross-dimensional communication', 'Time-space control'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interface',
      name: 'Neural Reality Interface',
      icon: '🧬',
      description: 'Direct neural connection to digital realities',
      features: ['99.99% neural accuracy', 'Thought translation', 'Multi-sensory immersion', 'Collective consciousness'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence Evolution',
      icon: '🤖',
      description: 'Self-evolving AI systems beyond human comprehension',
      features: ['Autonomous improvement', 'Infinite learning', 'Creative problem solving', 'Social intelligence'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    },
    {
      id: 'holographic-matter',
      name: 'Holographic Matter Manipulation',
      icon: '✨',
      description: 'Create and manipulate matter at atomic level',
      features: ['Atomic precision', 'Instant creation', 'Molecular restructuring', 'Energy conversion'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/30 to-purple-600/30',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 'cosmic-ai',
      name: 'Cosmic AI Consciousness',
      icon: '🌌',
      description: 'AI systems that understand the entire cosmos',
      features: ['Universal processing', 'Cosmic patterns', 'Interstellar communication', 'Galactic intelligence'],
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-600/30 to-blue-600/30',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const handleDemoStart = (techId: string) => {
    setActiveDemo(techId);
    // Simulate demo loading
    setTimeout(() => {
      setActiveDemo(null);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2029
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2029
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through immersive interactive demonstrations
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-8 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => handleDemoStart(tech.id)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-center mb-6 opacity-90">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDemoStart(tech.id);
                }}
              >
                {activeDemo === tech.id ? 'Starting Demo...' : 'Start Interactive Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Demo Status */}
        {activeDemo && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-center max-w-md mx-4">
              <div className="text-6xl mb-6 animate-spin">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Demo Loading...</h3>
              <p className="text-lg opacity-90 mb-6">
                Initializing {technologies.find(t => t.id === activeDemo)?.name} demonstration
              </p>
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm opacity-80">Please wait while we prepare your interactive experience...</p>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Technology Impact Statistics</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              The measurable impact of our revolutionary technologies on human civilization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">10^18</div>
              <div className="text-lg font-semibold mb-2">Operations/Second</div>
              <div className="text-sm opacity-80">Quantum consciousness processing</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-lg font-semibold mb-2">Neural Accuracy</div>
              <div className="text-sm opacity-80">Thought-to-reality translation</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Possibilities</div>
              <div className="text-sm opacity-80">Reality manipulation potential</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">11D</div>
              <div className="text-lg font-semibold mb-2">Dimensions</div>
              <div className="text-sm opacity-80">Space-time manipulation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">🚀 Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join us in exploring the most revolutionary technologies that will define the next decade
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Full Experience
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;