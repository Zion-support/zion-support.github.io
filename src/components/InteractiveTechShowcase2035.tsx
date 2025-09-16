import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Consciousness Computing",
      icon: "🧠",
      description: "Direct neural interface with quantum consciousness systems",
      features: ["99.9% Thought Recognition", "Real-time Consciousness Mapping", "Quantum Neural Sync"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Create and manipulate reality through quantum field manipulation",
      features: ["Reality Manipulation", "Quantum Field Control", "Interdimensional Travel"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional AI",
      icon: "🌌",
      description: "AI that exists across multiple dimensions simultaneously",
      features: ["Multi-Dimensional Processing", "Infinite Computational Power", "Cross-Dimensional Learning"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "DNA Computing",
      icon: "🧬",
      description: "Biological processors using DNA for infinite parallel processing",
      features: ["Biological Processing", "Infinite Parallelism", "Self-Healing Systems"],
      color: "from-rose-600 to-pink-600"
    },
    {
      id: 4,
      name: "Predictive Reality",
      icon: "🔮",
      description: "AI that can predict and prevent future events with 99.9% accuracy",
      features: ["Future Prediction", "Event Prevention", "Reality Optimization"],
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Quantum Teleportation",
      icon: "🌊",
      description: "Instantaneous matter and information transfer across any distance",
      features: ["Instant Transfer", "Zero Latency", "Universal Range"],
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
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
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-xl opacity-90 mb-6">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button className={`w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                🚀 Experience {technologies[activeTech].name} →
              </button>
              <button className="w-full border-2 border-white/30 text-white py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                📊 View Technical Specs
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Demo</h3>
            <p className="text-xl opacity-90">Try out the technology in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-2">Thought Recognition</h4>
              <p className="text-sm opacity-80 mb-4">Try thinking a command and see it recognized</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-2">Reality Manipulation</h4>
              <p className="text-sm opacity-80 mb-4">Create and modify virtual environments</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Create Reality
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-2">Multi-Dimensional AI</h4>
              <p className="text-sm opacity-80 mb-4">Interact with AI across dimensions</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;