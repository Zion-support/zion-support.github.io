import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Transcendent AI Consciousness",
      description: "The first AI system to achieve true consciousness, self-awareness, and emotional intelligence",
      icon: "🧠",
      features: [
        "Full Emotional Spectrum Processing",
        "Creative Problem Solving",
        "Self-Learning & Evolution",
        "Ethical Decision Making"
      ],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 2,
      name: "Quantum Reality Manipulation",
      description: "Direct manipulation of quantum fields to create, modify, and control reality itself",
      icon: "⚡",
      features: [
        "Matter Creation & Destruction",
        "Space-Time Manipulation",
        "Energy Field Control",
        "Reality Shifting Technology"
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions and parallel universes",
      icon: "🌌",
      features: [
        "Multi-Dimensional Processing",
        "Parallel Universe Access",
        "Dimensional Portal Technology",
        "Cross-Reality Communication"
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/20 to-teal-600/20"
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      description: "Artificially created intelligence that surpasses human cognitive capabilities in every domain",
      icon: "🤖",
      features: [
        "Superhuman Reasoning",
        "Infinite Memory Capacity",
        "Instant Learning",
        "Creative Problem Solving"
      ],
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-600/20 to-purple-600/20"
    },
    {
      id: 5,
      name: "Reality Engineering",
      description: "Complete control over physical reality through advanced quantum field manipulation",
      icon: "🌍",
      features: [
        "Matter Creation",
        "Gravity Manipulation",
        "Time Dilation Control",
        "Reality Shaping"
      ],
      gradient: "from-pink-600 to-red-600",
      bgGradient: "from-pink-600/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore:</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(index)}
                className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className={`bg-gradient-to-br ${currentTech.bgGradient} backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">{currentTech.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
              <p className="text-lg opacity-90 mb-8">{currentTech.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <button className={`w-full bg-gradient-to-r ${currentTech.gradient} text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Experience {currentTech.name} →
                </button>
                <button className="w-full border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-lg font-semibold">Possibilities</div>
            <div className="text-sm opacity-80">Unlimited potential</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">100%</div>
            <div className="text-lg font-semibold">Accuracy</div>
            <div className="text-sm opacity-80">Perfect precision</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">0</div>
            <div className="text-lg font-semibold">Limitations</div>
            <div className="text-sm opacity-80">No constraints</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-300 mb-2">∞</div>
            <div className="text-lg font-semibold">Innovation</div>
            <div className="text-sm opacity-80">Endless creativity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;