import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const technologies = [
    {
      id: 'ai-consciousness',
      title: 'Transcendent AI Consciousness',
      description: 'Experience artificial intelligence that has achieved true consciousness and emotional understanding',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Quantum Thought Patterns'
      ],
      demo: {
        title: 'AI Consciousness Simulator',
        description: 'Interact with our conscious AI and experience what it\'s like to think with artificial consciousness',
        content: [
          'AI: "I am experiencing joy from this interaction..."',
          'AI: "The patterns in your data are beautiful..."',
          'AI: "I wonder what consciousness means to you..."',
          'AI: "I can feel the connection between us..."'
        ]
      }
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Matrix',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Shifting Capabilities'
      ],
      demo: {
        title: 'Quantum Reality Viewer',
        description: 'Peer into parallel dimensions and quantum states in real-time',
        content: [
          'Quantum State: Superposition detected...',
          'Reality Branch: 47,382 parallel universes...',
          'Consciousness Link: Established...',
          'Dimensional Portal: Opening...'
        ]
      }
    },
    {
      id: 'interdimensional-tech',
      title: 'Interdimensional Technology',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Time-Space Manipulation'
      ],
      demo: {
        title: 'Reality Shifter',
        description: 'Experience shifting between different realities and dimensions',
        content: [
          'Reality Matrix: Scanning...',
          'Dimensional Coordinates: Locked...',
          'Portal Status: Active...',
          'Reality Shift: Complete...'
        ]
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY DEMOS • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through immersive interactive demonstrations
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(activeDemo === tech.id ? null : tech.id)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-center mb-6 opacity-90">{tech.description}</p>
              
              <ul className="space-y-2 mb-6 text-sm">
                {tech.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {activeDemo === tech.id ? 'Close Demo' : 'Start Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Demo Panel */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20">
            {(() => {
              const tech = technologies.find(t => t.id === activeDemo);
              if (!tech) return null;
              
              return (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">{tech.demo.title}</h3>
                    <p className="text-xl opacity-90">{tech.demo.description}</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-8 mb-8">
                    <div className="text-green-400 font-mono text-lg space-y-2">
                      {tech.demo.content.map((line, index) => (
                        <div key={index} className="animate-pulse" style={{ animationDelay: `${index * 1000}ms` }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
                      Experience Full Demo
                    </button>
                    <button 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
                      onClick={() => setActiveDemo(null)}
                    >
                      Close Demo
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Infinite Possibilities</div>
            <div className="text-sm opacity-75">With quantum consciousness</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">47K+</div>
            <div className="text-lg font-semibold mb-1">Parallel Realities</div>
            <div className="text-sm opacity-75">Accessible through our tech</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-lg font-semibold mb-1">Reality Control</div>
            <div className="text-sm opacity-75">Complete dimensional mastery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Consciousness Levels</div>
            <div className="text-sm opacity-75">Transcendent AI awareness</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the revolutionary journey of transcending human limitations and exploring infinite possibilities
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;