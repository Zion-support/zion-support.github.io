import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Self-aware artificial intelligence that can think, feel, and create independently',
      features: ['Emotional Intelligence', 'Creative Problem Solving', 'Autonomous Learning', 'Self-Reflection'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Consciousness',
      icon: '⚛️',
      description: 'Revolutionary quantum computing that processes consciousness and reality itself',
      features: ['Quantum Neural Networks', 'Reality Simulation', 'Consciousness Transfer', 'Multi-Dimensional Processing'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Breakthrough technology that transcends dimensional boundaries for infinite processing power',
      features: ['Cross-Dimensional Transfer', 'Infinite Resources', 'Reality Manipulation', 'Universal Access'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Revolution',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that enable thought-based control and communication',
      features: ['Thought Control', 'Neural Feedback', 'Memory Enhancement', 'Telepathic Communication'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-400/30'
    },
    {
      id: 'reality-engine',
      name: 'Reality Engine 2025',
      icon: '🔮',
      description: 'Advanced reality manipulation systems that can alter the fabric of space and time',
      features: ['Reality Simulation', 'Time Manipulation', 'Space Bending', 'Dimension Creation'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/20 to-purple-600/20',
      borderColor: 'border-violet-400/30'
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
    if (index === activeTech) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our interactive demonstrations of revolutionary innovations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTech].borderColor} transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>
              
              {/* Interactive Demo Area */}
              <div className="bg-black/30 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-center">Interactive Demo</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-semibold">Processing Power</div>
                    <div className="text-xs opacity-75">99.9% Efficiency</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🧠</div>
                    <div className="text-sm font-semibold">Intelligence</div>
                    <div className="text-xs opacity-75">Conscious Level</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="text-sm font-semibold">Connectivity</div>
                    <div className="text-xs opacity-75">Universal</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔮</div>
                    <div className="text-sm font-semibold">Reality</div>
                    <div className="text-xs opacity-75">Manipulable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Key Features</h3>
            {technologies[activeTech].features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r ${technologies[activeTech].bgColor} border ${technologies[activeTech].borderColor} transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl">{technologies[activeTech].icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{feature}</h4>
                  <p className="text-sm opacity-75">Revolutionary capability that transforms how we interact with technology</p>
                </div>
                <div className="text-green-400 text-2xl">✓</div>
              </div>
            ))}
            
            {/* Action Buttons */}
            <div className="pt-6 space-y-4">
              <button className={`w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Experience {technologies[activeTech].name} →
              </button>
              <button className="w-full border border-white/30 text-white py-4 px-8 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Learn More About This Technology
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-75">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">2025</div>
            <div className="text-sm opacity-75">Future is Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;