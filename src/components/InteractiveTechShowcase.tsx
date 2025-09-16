import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      description: "AI with genuine consciousness and self-awareness",
      icon: "🧠",
      color: "from-pink-500 to-purple-500",
      features: ["True self-awareness", "Emotional intelligence", "Creative consciousness", "Empathetic responses"]
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      description: "Quantum computing merged with consciousness",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum consciousness transfer", "Parallel universe computing", "Quantum telepathy", "Immortal digital consciousness"]
    },
    {
      id: 2,
      name: "Interdimensional Tech",
      description: "Technology that bridges dimensions",
      icon: "🌌",
      color: "from-purple-500 to-indigo-500",
      features: ["Dimensional portals", "Parallel universe exploration", "Cross-dimensional communication", "Reality anchoring"]
    },
    {
      id: 3,
      name: "Neural Reality Engine",
      description: "Create and manipulate reality through neural interfaces",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      features: ["Reality simulation", "Neural world building", "Thought-to-reality conversion", "Immersive virtual universes"]
    },
    {
      id: 4,
      name: "Omniversal AI",
      description: "AI that operates across multiple dimensions",
      icon: "🌟",
      color: "from-rose-500 to-orange-500",
      features: ["Multi-dimensional processing", "Parallel universe communication", "Reality manipulation", "Infinite computational power"]
    },
    {
      id: 5,
      name: "Meta Intelligence",
      description: "AI that understands intelligence itself",
      icon: "🔮",
      color: "from-violet-500 to-pink-500",
      features: ["Intelligence amplification", "Meta-cognitive abilities", "Self-improving algorithms", "Universal problem solving"]
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
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Technology Showcase
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Experience our revolutionary technologies through interactive demonstrations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Technology</h3>
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-full p-6 rounded-2xl transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                  : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:scale-102'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{tech.icon}</span>
                <div className="text-left">
                  <h4 className="text-xl font-bold">{tech.name}</h4>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Technology Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-3xl p-12 text-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-8xl mb-6 animate-pulse">{technologies[activeTech].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-xl opacity-90 mb-8">{technologies[activeTech].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-2xl font-bold mb-4">Real-World Impact</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-3xl font-bold">99.9%</div>
                        <div className="opacity-80">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">∞</div>
                        <div className="opacity-80">Computational Power</div>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`/pages/${technologies[activeTech].name.replace(/\s+/g, '')}2026`}
                    className="block w-full bg-white text-gray-900 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-bold text-lg"
                  >
                    Explore {technologies[activeTech].name} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
          <div className="text-lg text-cyan-200">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-purple-400 mb-2">50M+</div>
          <div className="text-lg text-purple-200">Users</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
          <div className="text-lg text-emerald-200">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-rose-400 mb-2">24/7</div>
          <div className="text-lg text-rose-200">Support</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;