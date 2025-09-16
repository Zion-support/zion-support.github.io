import React, { useState, useEffect } from 'react';

const InteractiveTechnologyShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Synthetic Intelligence",
      icon: "🧠",
      description: "Self-evolving AI systems that transcend traditional limitations",
      features: [
        "Autonomous learning and evolution",
        "Cross-domain intelligence transfer",
        "Meta-cognitive AI frameworks",
        "Self-modifying neural architectures"
      ],
      applications: [
        "Healthcare diagnostics",
        "Autonomous manufacturing",
        "Personalized education",
        "Scientific research"
      ],
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚡",
      description: "Revolutionary computing power solving impossible problems",
      features: [
        "Exponential processing speed",
        "Quantum parallel processing",
        "Unbreakable cryptography",
        "Molecular simulation capabilities"
      ],
      applications: [
        "Drug discovery",
        "Climate modeling",
        "Financial optimization",
        "Space exploration"
      ],
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingBreakthrough2026"
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer communication systems",
      features: [
        "Non-invasive neural interfaces",
        "Thought-controlled systems",
        "Real-time neural feedback",
        "Consciousness-AI integration"
      ],
      applications: [
        "Medical rehabilitation",
        "Gaming and entertainment",
        "Communication assistance",
        "Cognitive enhancement"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      id: 4,
      name: "Quantum-Neural Fusion",
      icon: "⚛️",
      description: "Convergence of quantum computing and neural networks",
      features: [
        "Hybrid quantum-neural architectures",
        "Quantum entanglement networks",
        "Probabilistic neural computing",
        "Exponential learning capabilities"
      ],
      applications: [
        "Advanced AI systems",
        "Complex optimization",
        "Pattern recognition",
        "Predictive modeling"
      ],
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026"
    }
  ];

  const currentTech = technologies[activeTech];

  const handleTechChange = (index: number) => {
    if (index === activeTech) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Showcase</h2>
        <p className="text-xl text-gray-600">Explore revolutionary technologies with interactive features</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Technology Selector */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechChange(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{tech.name}</h3>
                    <p className={`text-sm ${
                      activeTech === index ? 'opacity-90' : 'text-gray-600'
                    }`}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Technology Details */}
        <div className="lg:col-span-2">
          <div className={`bg-gradient-to-br ${currentTech.gradient} rounded-2xl p-8 text-white transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl animate-bounce">{currentTech.icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentTech.name}</h3>
                <p className="text-xl opacity-90">{currentTech.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Key Features */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">✨</span>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-300">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  Applications
                </h4>
                <ul className="space-y-2">
                  {currentTech.applications.map((application, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-blue-300">→</span>
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Demo Section */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">🎮</span>
                Interactive Demo
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/30 hover:bg-white/40 transition-colors p-3 rounded-lg text-sm font-semibold">
                  🧪 Try Simulation
                </button>
                <button className="bg-white/30 hover:bg-white/40 transition-colors p-3 rounded-lg text-sm font-semibold">
                  📊 View Analytics
                </button>
                <button className="bg-white/30 hover:bg-white/40 transition-colors p-3 rounded-lg text-sm font-semibold">
                  🔬 Explore Features
                </button>
                <button className="bg-white/30 hover:bg-white/40 transition-colors p-3 rounded-lg text-sm font-semibold">
                  🎯 See Applications
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={currentTech.link}
                className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center space-x-2"
              >
                <span>🚀</span>
                <span>Explore {currentTech.name}</span>
              </a>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold flex items-center space-x-2">
                <span>📖</span>
                <span>Learn More</span>
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold flex items-center space-x-2">
                <span>💬</span>
                <span>Discuss</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Progress Indicator */}
      <div className="mt-8">
        <div className="flex justify-center space-x-2 mb-4">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTechChange(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeTech === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Technology {activeTech + 1} of {technologies.length} • Auto-rotating every 8 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechnologyShowcase;