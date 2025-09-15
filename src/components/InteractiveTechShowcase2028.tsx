import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2028 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience artificial consciousness that rivals human intelligence',
      features: ['Emotional Intelligence', 'Creative Problem Solving', 'Self-Awareness', 'Moral Reasoning'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-600/20 to-pink-600/20'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚛️',
      description: 'Harness the power of quantum mechanics for exponential processing',
      features: ['Quantum Supremacy', 'Parallel Processing', 'Cryptography', 'Optimization'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-600/20 to-blue-600/20'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication for enhanced human capabilities',
      features: ['Thought Control', 'Memory Augmentation', 'Sensory Enhancement', 'Neural Feedback'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-600/20 to-teal-600/20'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: '🤖',
      description: 'Self-evolving AI systems that operate independently',
      features: ['Self-Learning', 'Decision Making', 'Adaptive Behavior', 'Predictive Intelligence'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-600/20 to-red-600/20'
    },
    {
      id: 'metaverse',
      name: 'Metaverse Integration',
      icon: '🌌',
      description: 'Seamless integration between physical and virtual realities',
      features: ['Virtual Worlds', 'Haptic Feedback', 'Cross-Reality', 'Digital Twins'],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-600/20 to-purple-600/20'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Advanced technologies for space exploration and colonization',
      features: ['Interplanetary Travel', 'Space Mining', 'Orbital Manufacturing', 'Cosmic Communication'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-600/20 to-rose-600/20'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTechChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through an immersive interactive experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechChange(index)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : `bg-gradient-to-r ${tech.bgColor} text-white/80 hover:scale-102 hover:bg-opacity-50`
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-500 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href={`/pages/${technologies[activeTech].name.replace(/\s+/g, '')}2028`}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {technologies[activeTech].name} →
                </a>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-white/80">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-white/80">Continuous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-white/80">Scalability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;