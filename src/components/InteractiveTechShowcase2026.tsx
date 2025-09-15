import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [particlePositions, setParticlePositions] = useState<Array<{x: number, y: number, delay: number}>>([]);

  // Generate floating particles
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticlePositions(particles);
  }, []);

  const techDemos = [
    {
      id: 'quantum',
      title: 'Quantum Computing Simulator',
      description: 'Experience quantum superposition and entanglement in real-time',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum Gates', 'Superposition States', 'Entanglement Effects']
    },
    {
      id: 'neural',
      title: 'Neural Interface Demo',
      description: 'Try our brain-computer interface simulation',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Thought Control', 'Neural Patterns', 'Mind Reading']
    },
    {
      id: 'ai',
      title: 'Synthetic Intelligence Chat',
      description: 'Chat with our advanced AI system',
      icon: '🤖',
      color: 'from-emerald-500 to-teal-500',
      features: ['Natural Language', 'Creative Responses', 'Emotional AI']
    },
    {
      id: 'space',
      title: 'Space Travel Simulator',
      description: 'Experience interplanetary travel technology',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      features: ['Warp Drive', 'Planetary Landing', 'Space Colonies']
    }
  ];

  const handleDemoStart = (demoId: string) => {
    setActiveDemo(demoId);
    // Simulate demo loading
    setTimeout(() => {
      setActiveDemo(null);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((particle, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🎮</span>
            <span className="text-cyan-300 font-semibold ml-2">INTERACTIVE TECHNOLOGY SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Experience the Future
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interact with revolutionary technologies through our immersive demonstrations. 
            Touch, explore, and experience the future of human innovation.
          </p>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {techDemos.map((demo, index) => (
            <div
              key={demo.id}
              className={`relative bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 transition-all duration-500 cursor-pointer group ${
                hoveredCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleDemoStart(demo.id)}
            >
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {demo.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {demo.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {demo.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${demo.color} rounded-full`}></div>
                      <span className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105 transform`}
                  disabled={activeDemo === demo.id}
                >
                  {activeDemo === demo.id ? '🔄 Loading...' : '🚀 Start Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Status */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-spin">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Demo Loading...</h3>
              <p className="text-gray-300 mb-6">
                Initializing {techDemos.find(d => d.id === activeDemo)?.title}...
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Interactive Features</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">👆</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Touch & Gesture Control</h4>
                  <p className="text-gray-300 text-sm">Control interfaces with natural gestures and touch</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">🎤</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Voice Commands</h4>
                  <p className="text-gray-300 text-sm">Interact using natural language and voice</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">👁️</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Eye Tracking</h4>
                  <p className="text-gray-300 text-sm">Control interfaces with eye movement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔮 Future Technologies</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">🧠</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Mind Control</h4>
                  <p className="text-gray-300 text-sm">Direct neural interface control</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">🌐</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Holographic UI</h4>
                  <p className="text-gray-300 text-sm">3D holographic interfaces</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="text-lg font-bold text-white">Quantum Interface</h4>
                  <p className="text-gray-300 text-sm">Quantum-enhanced interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="bg-gradient-to-br from-gray-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">📊 Live Technology Stats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2.3M+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">847K+</div>
              <div className="text-gray-300 text-sm">Demos Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of users who are already exploring the revolutionary technologies of tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Start Interactive Demo
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

export default InteractiveTechShowcase2026;