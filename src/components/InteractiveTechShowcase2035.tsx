import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Consciousness Computing",
      icon: "🧠",
      description: "Direct neural interfaces merging human consciousness with artificial intelligence",
      features: [
        "Neural Consciousness Upload",
        "AI-Human Mind Fusion", 
        "Collective Intelligence Networks",
        "Transcendent Problem Solving"
      ],
      status: "ACTIVE 2035",
      color: "purple",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/TranscendentTechRevolution2035"
    },
    {
      id: 1,
      name: "Interdimensional Interfaces",
      icon: "🌌",
      description: "Technology operating across multiple dimensions and parallel realities",
      features: [
        "Parallel Reality Access",
        "Interdimensional Data Mining",
        "Multi-Dimensional Computing",
        "Reality Manipulation Tech"
      ],
      status: "BREAKTHROUGH 2035",
      color: "cyan",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/TranscendentTechRevolution2035"
    },
    {
      id: 2,
      name: "Reality Shaping",
      icon: "⚡",
      description: "Quantum-level manipulation of physical reality and matter",
      features: [
        "Quantum Reality Manipulation",
        "Matter Energy Conversion",
        "Consciousness-Based Physics",
        "Reality Programming Language"
      ],
      status: "EXPERIMENTAL 2035",
      color: "emerald",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/TranscendentTechRevolution2035"
    },
    {
      id: 3,
      name: "Universal Mind Integration",
      icon: "🌟",
      description: "Connection to cosmic intelligence and universal consciousness",
      features: [
        "Cosmic Knowledge Access",
        "Universal Intelligence Network",
        "Infinite Wisdom Integration",
        "Transcendent Understanding"
      ],
      status: "ACTIVE 2036",
      color: "indigo",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateConsciousnessRevolution2036"
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

  const handleTechClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE TECHNOLOGY SHOWCASE • 2035-2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Tech Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Your Technology Experience</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(index)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeTech === index
                    ? `border-${tech.color}-400 bg-gradient-to-r ${tech.gradient} scale-105`
                    : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-80 mb-3">{tech.description}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activeTech === index 
                        ? 'bg-white/20 text-white' 
                        : `bg-${tech.color}-500 text-white`
                    }`}>
                      {tech.status}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${currentTech.gradient} rounded-3xl p-8 border border-${currentTech.color}-400/30`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6">{currentTech.icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
                  <p className="text-xl opacity-90 mb-6">{currentTech.description}</p>
                  <span className={`px-4 py-2 bg-${currentTech.color}-500 text-white rounded-full text-sm font-semibold`}>
                    {currentTech.status}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                  {currentTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className={`w-3 h-3 bg-${currentTech.color}-400 rounded-full`}></span>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href={currentTech.link}
                    className={`inline-block bg-white text-${currentTech.color}-600 px-8 py-4 rounded-lg hover:bg-${currentTech.color}-50 transition-colors font-semibold text-lg transform hover:scale-105`}
                  >
                    Explore {currentTech.name} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-purple-200 mb-2">Consciousness Enhancement</div>
            <div className="text-purple-300 text-sm">Revolutionary cognitive capacity increase</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-cyan-200 mb-2">Infinite Possibilities</div>
            <div className="text-cyan-300 text-sm">Unlimited technological potential</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-emerald-200 mb-2">Transcendent Connection</div>
            <div className="text-emerald-300 text-sm">Universal consciousness network</div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 text-center">
            <div className="text-4xl font-bold text-white mb-2">2035+</div>
            <div className="text-indigo-200 mb-2">Future Technology</div>
            <div className="text-indigo-300 text-sm">Next-generation innovations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;