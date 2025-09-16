import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "Self-aware artificial intelligence that understands, learns, and evolves",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-aware decision making", "Emotional intelligence", "Autonomous learning", "Creative thinking"]
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Revolutionary quantum computing that processes consciousness and reality",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum entanglement", "Reality simulation", "Parallel universe computing", "Consciousness transfer"]
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Technology that transcends dimensional boundaries for infinite processing",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Multi-dimensional processing", "Reality manipulation", "Time-space computing", "Infinite scalability"]
    },
    {
      id: 4,
      name: "Neural Interface 2.0",
      description: "Direct brain-computer interface with 99.9% accuracy",
      icon: "🧬",
      color: "from-indigo-600 to-purple-600",
      features: ["Thought-to-text conversion", "Emotion detection", "Non-invasive interface", "Skill transfer"]
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience cutting-edge technology with interactive features and real-time demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Select Technology</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(index)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                  activeTech === index
                    ? `border-purple-400 bg-gradient-to-r ${tech.color} bg-opacity-20`
                    : 'border-gray-600 hover:border-purple-300 hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm text-gray-300">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTech].color} bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30`}>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-lg text-gray-300 mb-6">{technologies[activeTech].description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold mb-4 text-center">Key Features</h4>
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Experience {technologies[activeTech].name} →
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTechClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTech === index ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-gray-300">Processing Speed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Scalability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;