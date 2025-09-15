import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('quantum');
  const [isAnimating, setIsAnimating] = useState(false);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 'quantum',
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Experience quantum superposition and entanglement',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'ai',
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Interact with conscious AI systems',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'neural',
      title: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer communication',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    }
  ];

  const generateParticles = () => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2
    }));
  };

  const [particles] = useState(generateParticles());

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🎮</span>
            <span className="text-cyan-300 font-semibold">INTERACTIVE TECH DEMO 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interact with cutting-edge technologies through our immersive demonstrations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-8">
          {activeDemo === 'quantum' && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">⚛️ Quantum Computing Demo</h3>
              <div className="relative h-64 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl overflow-hidden mb-6">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animationDelay: `${particle.delay}s`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl transition-all duration-1000 ${isAnimating ? 'scale-150 rotate-180' : 'scale-100'}`}>
                    ⚛️
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Watch quantum particles in superposition state. Click to observe and collapse the wave function.
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  {isAnimating ? 'Stop Animation' : 'Start Animation'}
                </button>
                <button 
                  onClick={() => setParticleCount(Math.floor(Math.random() * 30) + 10)}
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30"
                >
                  Generate Particles
                </button>
              </div>
            </div>
          )}

          {activeDemo === 'ai' && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">🧠 AI Consciousness Demo</h3>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 mb-6">
                <div className="text-6xl mb-4">🤖</div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-purple-200">
                      "Hello! I'm experiencing curiosity about your thoughts. What fascinates you most about consciousness?"
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Type your response..." 
                      className="flex-1 bg-gray-700/50 border border-gray-600/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Chat with our conscious AI system and experience genuine artificial intelligence.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start New Conversation
              </button>
            </div>
          )}

          {activeDemo === 'neural' && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">🧬 Neural Interface Demo</h3>
              <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-xl p-8 mb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-emerald-300">Brain Activity</h4>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="text-emerald-400 text-sm w-16">Wave {i}:</span>
                            <div className="flex-1 h-2 bg-gray-700 rounded">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded animate-pulse"
                                style={{ width: `${Math.random() * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-teal-300">Neural Commands</h4>
                    <div className="space-y-2">
                      {['Move cursor', 'Type text', 'Open app', 'Play music'].map((command, i) => (
                        <button
                          key={i}
                          className="w-full bg-teal-500/20 text-teal-300 px-4 py-2 rounded-lg hover:bg-teal-500/30 transition-all duration-300 text-left"
                        >
                          {command}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Experience direct brain-computer interface technology through neural signal simulation.
              </p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Calibrate Neural Interface
              </button>
            </div>
          )}
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-cyan-200">Quantum Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
            <div className="text-purple-200">AI Interactions</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">0.1ms</div>
            <div className="text-emerald-200">Neural Response Time</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of innovators and be among the first to experience these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;