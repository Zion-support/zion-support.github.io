import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'Direct quantum-enhanced consciousness communication',
      features: ['Neural quantum interfaces', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence'],
      stats: { users: '2.3M+', efficiency: '99.7%', innovation: 'Revolutionary' }
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      description: 'Beyond artificial intelligence - synthetic consciousness',
      features: ['Self-evolving networks', 'Emotional intelligence', 'Creative problem solving', 'Autonomous decisions'],
      stats: { users: '156K+', efficiency: '98.9%', innovation: 'Breakthrough' }
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Direct brain-computer communication and enhancement',
      features: ['Non-invasive interfaces', 'Thought control', 'Memory enhancement', 'Telepathic communication'],
      stats: { users: '847K+', efficiency: '97.3%', innovation: 'Advanced' }
    },
    {
      id: 'quantum-neural-fusion',
      name: 'Quantum-Neural Fusion',
      icon: '⚡',
      color: 'from-orange-600 to-red-600',
      description: 'Ultimate convergence of quantum computing and neural networks',
      features: ['Quantum neural processing', 'Consciousness amplification', 'Reality manipulation', 'Transcendent intelligence'],
      stats: { users: '23K+', efficiency: '99.1%', innovation: 'Experimental' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🎮</span>
            <span className="text-cyan-300 font-semibold ml-2">INTERACTIVE TECH SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technologies through interactive demonstrations, 
            real-time simulations, and hands-on experiences
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 mb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Technology Details */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-8xl">{technologies[activeTech].icon}</span>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {technologies[activeTech].name}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {technologies[activeTech].description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <span className="text-cyan-200 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">{technologies[activeTech].stats.users}</div>
                  <div className="text-sm text-gray-300">Active Users</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">{technologies[activeTech].stats.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-400">{technologies[activeTech].stats.innovation}</div>
                  <div className="text-sm text-gray-300">Innovation Level</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}>
                  🚀 Try Demo
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-6 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold">
                  📚 Learn More
                </button>
              </div>
            </div>

            {/* Interactive Visual */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105`}>
                <div className="text-9xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  {technologies[activeTech].name}
                </h4>
                <div className="space-y-2">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="text-white/90 text-sm">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                hoveredCard === index ? 'scale-110 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleTechClick(index)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-white/80 text-sm mb-4">{tech.description}</p>
                <div className="space-y-1">
                  {tech.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="text-white/70 text-xs">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join millions of users worldwide who are already experiencing the revolutionary technologies of 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📞 Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;