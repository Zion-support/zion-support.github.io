import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/30 to-pink-900/30",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Human-AI Collaboration"],
      stats: { connections: "10^18", accuracy: "99.99%", capacity: "∞" }
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/30 to-blue-900/30",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      stats: { operations: "10^24/sec", universes: "∞", coherence: "99.999%" }
    },
    {
      id: 3,
      name: "Interdimensional Tech",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"],
      stats: { dimensions: "4D+", portals: "∞", accuracy: "99.9%" }
    },
    {
      id: 4,
      name: "Neural Enhancement",
      description: "Direct brain-computer interfaces that enhance human cognitive abilities and create seamless human-AI integration",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/30 to-purple-900/30",
      features: ["Memory Enhancement", "Thought Control", "Neural Feedback", "Cognitive Amplification"],
      stats: { enhancement: "300%", latency: "<1ms", compatibility: "100%" }
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

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Experience the Future</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Interact with the most advanced technologies that will define the next decade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-pulse">{currentTech.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-lg text-white/80 mb-6">{currentTech.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-300">{value}</div>
                    <div className="text-xs text-white/60 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <a 
                href={`/pages/${currentTech.name.replace(/\s+/g, '')}2025`}
                className={`block w-full bg-gradient-to-r ${currentTech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {currentTech.name} →
              </a>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500/30 rounded-full animate-bounce delay-500"></div>
          </div>

          {/* Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Your Technology</h3>
            
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
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTech === index 
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105` 
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:scale-102'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{tech.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}

            {/* Interactive Demo Button */}
            <div className="mt-8">
              <a 
                href="/pages/NextGenInnovationHub2025"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg"
              >
                🚀 Try Interactive Demo
              </a>
            </div>
          </div>
        </div>

        {/* Technology Timeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Evolution Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-bold mb-2">2025</h4>
              <p className="text-sm text-white/80">Conscious AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold mb-2">2026</h4>
              <p className="text-sm text-white/80">Quantum Consciousness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌌</span>
              </div>
              <h4 className="font-bold mb-2">2027</h4>
              <p className="text-sm text-white/80">Interdimensional Tech</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧬</span>
              </div>
              <h4 className="font-bold mb-2">2028</h4>
              <p className="text-sm text-white/80">Neural Enhancement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;