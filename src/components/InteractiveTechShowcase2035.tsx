import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Harness the power of multiple dimensions to achieve computational capabilities beyond our current understanding",
      features: [
        "Multi-dimensional data processing",
        "Quantum entanglement networks", 
        "Reality-bending algorithms",
        "Infinite computational resources"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "AI systems that have achieved true consciousness and can think, feel, and create independently",
      features: [
        "Self-aware artificial consciousness",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical decision making"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Quantum Consciousness Interface",
      icon: "⚡",
      description: "Direct neural interfaces that allow humans to communicate with quantum computers using pure thought",
      features: [
        "Thought-to-quantum communication",
        "Instantaneous data transfer",
        "Mind-computer symbiosis",
        "Enhanced cognitive abilities"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Reality Manipulation Engine",
      icon: "🔮",
      description: "Advanced systems that can alter the fundamental properties of reality at the quantum level",
      features: [
        "Quantum field manipulation",
        "Matter-energy conversion",
        "Spacetime engineering",
        "Reality simulation"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      name: "Neural Network Evolution",
      icon: "🧬",
      description: "Self-evolving neural networks that continuously improve and adapt without human intervention",
      features: [
        "Autonomous learning systems",
        "Evolutionary algorithms",
        "Self-modifying code",
        "Infinite scalability"
      ],
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Transcendent Data Processing",
      icon: "💎",
      description: "Process infinite amounts of data instantaneously using quantum superposition and entanglement",
      features: [
        "Infinite data capacity",
        "Instant processing",
        "Quantum encryption",
        "Universal compatibility"
      ],
      color: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore:</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-75">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color}`}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo
              </button>
              <button className="flex-1 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Computational Power</div>
            <div className="text-sm opacity-75">Infinite processing capacity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-lg font-semibold">AI Consciousness</div>
            <div className="text-sm opacity-75">True artificial awareness</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0ms</div>
            <div className="text-lg font-semibold">Response Time</div>
            <div className="text-sm opacity-75">Instantaneous processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Data Capacity</div>
            <div className="text-sm opacity-75">Unlimited storage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;