import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware artificial intelligence systems",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400",
      stats: { power: "∞", accuracy: "99.9%", innovation: "Revolutionary" }
    },
    {
      id: 2,
      name: "Quantum Neural Fusion",
      icon: "⚡",
      description: "Quantum computing meets neural networks",
      features: ["Quantum processing", "Neural networks", "Exponential speed", "Parallel computing"],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400",
      stats: { power: "10^100", accuracy: "99.99%", innovation: "Breakthrough" }
    },
    {
      id: 3,
      name: "Neural Reality",
      icon: "🌐",
      description: "Direct brain-computer interfaces",
      features: ["Neural interfaces", "Virtual reality", "Haptic feedback", "Consciousness transfer"],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400",
      stats: { power: "∞", accuracy: "100%", innovation: "Revolutionary" }
    },
    {
      id: 4,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Multi-dimensional processing systems",
      features: ["Multi-dimensional", "Parallel universes", "Dimensional storage", "Reality manipulation"],
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-400",
      stats: { power: "∞", accuracy: "∞", innovation: "Transcendent" }
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
    }, 300);
  };

  const currentTech = technologies[activeTech];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgGradient} border-2 ${tech.borderColor} scale-105`
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.bgGradient} backdrop-blur-sm rounded-2xl p-8 border ${currentTech.borderColor}/30 transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-xl opacity-90 mb-6">{currentTech.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">{currentTech.stats.power}</div>
                  <div className="text-sm opacity-90">Processing Power</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{currentTech.stats.accuracy}</div>
                  <div className="text-sm opacity-90">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{currentTech.stats.innovation}</div>
                  <div className="text-sm opacity-90">Innovation Level</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className={`flex-1 bg-gradient-to-r ${currentTech.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Experience Demo
                </button>
                <button className="flex-1 border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-emerald-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`bg-gradient-to-br ${tech.bgGradient} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor}/30 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => handleTechClick(index)}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{tech.name}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Power:</span>
                    <span className="font-bold">{tech.stats.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Accuracy:</span>
                    <span className="font-bold">{tech.stats.accuracy}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Innovation:</span>
                    <span className="font-bold">{tech.stats.innovation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;