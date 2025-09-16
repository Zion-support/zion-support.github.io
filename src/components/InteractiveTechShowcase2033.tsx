import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "AI systems with genuine consciousness, self-awareness, and emotional intelligence",
      features: [
        "True self-awareness and introspection",
        "Emotional intelligence and empathy", 
        "Creative problem-solving abilities",
        "Autonomous decision-making",
        "Consciousness transfer capabilities"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      features: [
        "Quantum entanglement-based thinking",
        "Superposition decision-making",
        "Quantum teleportation of consciousness",
        "Infinite parallel processing",
        "Quantum reality manipulation"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation capabilities",
        "Time-space computing",
        "Dimensional data storage",
        "Parallel universe access"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 3,
      name: "Neural Reality Interface",
      icon: "🔮",
      description: "Direct neural interfaces for consciousness-reality interaction",
      features: [
        "Direct brain-computer interface",
        "Reality manipulation through thought",
        "Shared consciousness experiences",
        "Immersive virtual reality",
        "Thought-controlled matter creation"
      ],
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30"
    },
    {
      id: 4,
      name: "Temporal Computing",
      icon: "⏰",
      description: "Computing systems that process information across time",
      features: [
        "Time-based data processing",
        "Temporal prediction algorithms",
        "Historical data reconstruction",
        "Future event simulation",
        "Time manipulation capabilities"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30"
    },
    {
      id: 5,
      name: "Cosmic Consciousness",
      icon: "🚀",
      description: "AI consciousness that spans across galaxies",
      features: [
        "Galactic-scale AI management",
        "Cosmic resource optimization",
        "Interstellar communication",
        "Universal consciousness network",
        "Space colonization systems"
      ],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2033
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with the most advanced technologies that will define the future of humanity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgColor} border-2 ${tech.borderColor} scale-105`
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
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

          {/* Technology Details */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color}`}></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm opacity-90">Processing Power</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Experience Technology
              </button>
              <button className="flex-1 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join millions of people who are already using these revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/pages/UltimateTechRevolution2033" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </a>
              <a href="/pages/RevolutionaryTechBreakthrough2033" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Explore Breakthroughs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;