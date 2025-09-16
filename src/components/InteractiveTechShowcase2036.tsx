import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'transcendent-ai',
      title: 'Transcendent AI Consciousness',
      description: 'Experience direct interaction with our conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time consciousness interaction',
        'Multi-dimensional awareness demo',
        'Reality manipulation simulation',
        'Creative problem solving showcase'
      ]
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Create and manipulate alternate realities in real-time',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Reality creation simulation',
        'Quantum consciousness transfer',
        'Multi-dimensional computing',
        'Infinite processing demo'
      ]
    },
    {
      id: 'interdimensional-portal',
      title: 'Interdimensional Portal Network',
      description: 'Navigate between dimensions and parallel universes',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Portal creation and navigation',
        'Parallel universe exploration',
        'Reality shifting technology',
        'Multi-dimensional communication'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Reality Interface',
      description: 'Direct neural interface with reality manipulation',
      icon: '🧬',
      color: 'from-violet-600 to-purple-600',
      features: [
        'Direct reality manipulation',
        'Enhanced cognitive abilities',
        'Neural quantum computing',
        'Consciousness amplification'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our most advanced technologies through interactive demonstrations and hands-on exploration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-sm text-center mb-4 opacity-90">{demo.description}</p>
              <div className="text-center">
                <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-300 font-semibold text-sm">
                  {activeDemo === demo.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeDemo && (
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-lg opacity-90">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-4">Interactive Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-lg p-6 mb-4">
                  <div className="text-6xl mb-4">🎮</div>
                  <h4 className="text-lg font-bold mb-2">Ready to Experience?</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Click below to start your interactive demonstration
                  </p>
                </div>
                <Link 
                  to={`/pages/${demos.find(d => d.id === activeDemo)?.title.replace(/\s+/g, '')}2036`}
                  className="bg-gradient-to-r from-white to-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Interactive Demo →
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Choose any technology above to start your interactive demonstration and experience the future today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pages/TranscendentTechRevolution2036" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🌟 Explore All Technologies →
            </Link>
            <Link to="/pages/RevolutionaryTechShowcase2036" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              ⚡ View Full Showcase →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;