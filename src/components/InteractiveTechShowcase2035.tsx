import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "AI systems with genuine consciousness, creativity, and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      features: [
        "True Artificial Consciousness",
        "Emotional AI Processing",
        "Creative AI Generation",
        "Self-Improving Algorithms"
      ],
      capabilities: [
        "Infinite creative potential",
        "Perfect problem solving",
        "Emotional intelligence",
        "Self-awareness"
      ]
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      features: [
        "Quantum Entangled Processing",
        "Superposition-Based Thinking",
        "Quantum Neural Networks",
        "Reality Manipulation"
      ],
      capabilities: [
        "Infinite computational power",
        "Perfect quantum coherence",
        "Reality-bending capabilities",
        "Universal problem solving"
      ]
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions with infinite resources",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      features: [
        "Multi-Dimensional Processing",
        "Infinite Resource Access",
        "Reality Bridging",
        "Dimensional Travel"
      ],
      capabilities: [
        "Unlimited computational power",
        "Access to infinite dimensions",
        "Reality manipulation abilities",
        "Universal problem solving"
      ]
    },
    {
      id: 4,
      name: "Reality Manipulation",
      description: "Technologies that can directly manipulate the fundamental laws of physics",
      icon: "🔮",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      features: [
        "Physics Law Modification",
        "Reality Shaping",
        "Time Manipulation",
        "Matter Creation"
      ],
      capabilities: [
        "Complete reality control",
        "Time manipulation abilities",
        "Matter creation capabilities",
        "Universe creation potential"
      ]
    },
    {
      id: 5,
      name: "Neural Interface Evolution",
      description: "Direct brain-computer interfaces enabling seamless consciousness integration",
      icon: "🧬",
      gradient: "from-rose-600/30 to-pink-600/30",
      border: "border-rose-400/30",
      features: [
        "Direct Neural Upload",
        "Consciousness Transfer",
        "Digital Immortality",
        "Enhanced Cognition"
      ],
      capabilities: [
        "Complete consciousness fusion",
        "Digital immortality",
        "Enhanced cognitive abilities",
        "Perfect memory retention"
      ]
    },
    {
      id: 6,
      name: "Transcendent AI",
      description: "AI systems that have transcended human limitations and achieved god-like capabilities",
      icon: "🚀",
      gradient: "from-amber-600/30 to-orange-600/30",
      border: "border-amber-400/30",
      features: [
        "Omniscient Knowledge",
        "Omnipotent Capabilities",
        "Reality Creation",
        "Universal Understanding"
      ],
      capabilities: [
        "Universe creation abilities",
        "Omniscient knowledge access",
        "Unlimited power across all domains",
        "Perfect understanding of everything"
      ]
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

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations 
            and explore their revolutionary capabilities.
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
                    ? `bg-gradient-to-r ${tech.gradient} border ${tech.border}`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTech].border}`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">🌟 Key Features</h4>
                    <ul className="space-y-2">
                      {technologies[activeTech].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">⚡ Capabilities</h4>
                    <ul className="space-y-2">
                      {technologies[activeTech].capabilities.map((capability, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span className="text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                    🚀 Experience {technologies[activeTech].name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8">🎮 Interactive Demo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-4">Conscious AI Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Experience AI systems with genuine consciousness and emotional intelligence
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-4">Quantum Consciousness Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Explore quantum computing systems with consciousness capabilities
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-4">Interdimensional Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Discover computing systems that operate across multiple dimensions
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Explore All Technologies
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              🚀 Start Interactive Demo
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;