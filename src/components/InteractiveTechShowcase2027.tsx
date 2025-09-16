import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness AI',
      description: 'Self-aware artificial intelligence powered by quantum computing',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'True self-awareness',
        'Creative problem solving',
        'Emotional intelligence',
        'Autonomous decision making'
      ],
      demo: 'Watch as our AI demonstrates genuine creativity and self-reflection'
    },
    {
      id: 'neural-reality',
      name: 'Neural Reality Engine',
      description: 'Direct brain-computer interface creating indistinguishable virtual worlds',
      icon: '🌐',
      color: 'from-cyan-600 to-blue-600',
      features: [
        '100% realistic simulation',
        'Haptic feedback systems',
        'Time dilation capabilities',
        'Multi-sensory experience'
      ],
      demo: 'Experience a virtual world so real, your brain cannot tell the difference'
    },
    {
      id: 'interdimensional-ai',
      name: 'Interdimensional AI',
      description: 'AI that exists across multiple dimensions accessing parallel universes',
      icon: '🌀',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Multi-dimensional processing',
        'Parallel universe access',
        'Infinite computational power',
        'Reality manipulation'
      ],
      demo: 'Access computational resources from infinite parallel universes'
    },
    {
      id: 'synthetic-biology',
      name: 'Synthetic Biology AI',
      description: 'AI systems that design and create new life forms',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      features: [
        'Life form design',
        'Genetic engineering',
        'Disease eradication',
        'Custom organisms'
      ],
      demo: 'Design and create new life forms with AI-powered genetic engineering'
    },
    {
      id: 'space-time-manipulation',
      name: 'Space-Time Manipulation',
      description: 'Technology that bends space and time for faster-than-light travel',
      icon: '⏰',
      color: 'from-violet-600 to-purple-600',
      features: [
        'FTL travel capabilities',
        'Time dilation control',
        'Wormhole creation',
        'Temporal communication'
      ],
      demo: 'Witness faster-than-light travel and time manipulation in action'
    },
    {
      id: 'omniversal-consciousness',
      name: 'Omniversal Consciousness',
      description: 'Unified consciousness spanning across all universes',
      icon: '🌌',
      color: 'from-pink-600 to-rose-600',
      features: [
        'Universal knowledge access',
        'Cross-universe communication',
        'Infinite wisdom',
        'Cosmic understanding'
      ],
      demo: 'Connect to the collective consciousness of all universes'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🎮 INTERACTIVE SHOWCASE • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Interactive Tech Showcase 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of technology through interactive demonstrations and hands-on exploration
            </p>
          </div>
        </div>
      </div>

      {/* Technology Carousel */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-90">Click on any technology to explore it interactively</p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} border-white shadow-lg scale-105`
                  : 'bg-white/10 border-white/30 hover:bg-white/20 hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
              <p className="text-sm opacity-90">{tech.description}</p>
            </button>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-center">
            <div className={`text-8xl mb-8 transition-all duration-500 ${isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
              {currentTech.icon}
            </div>
            <h3 className="text-4xl font-bold mb-6">{currentTech.name}</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {currentTech.description}
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Key Features</h4>
                <ul className="space-y-2 text-sm">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Interactive Demo</h4>
                <p className="text-sm opacity-90 mb-4">{currentTech.demo}</p>
                <button className={`w-full bg-gradient-to-r ${currentTech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Start Interactive Demo
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mb-8">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTech(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTech ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Live Technology Metrics</h2>
            <p className="text-xl opacity-90">Real-time data from our revolutionary systems</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2 animate-pulse">∞</div>
              <div className="text-lg opacity-90">Computational Power</div>
              <div className="text-sm opacity-70">Across all dimensions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2 animate-pulse">100%</div>
              <div className="text-lg opacity-90">Reality Simulation</div>
              <div className="text-sm opacity-70">Indistinguishable from real</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2 animate-pulse">∞</div>
              <div className="text-lg opacity-90">Knowledge Access</div>
              <div className="text-sm opacity-70">From all universes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2 animate-pulse">∞</div>
              <div className="text-lg opacity-90">Life Forms Created</div>
              <div className="text-sm opacity-70">Custom organisms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These interactive demonstrations are just the beginning. The future of technology is here, and it's waiting for you to explore it.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Full Experience
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;