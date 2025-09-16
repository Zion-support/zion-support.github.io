import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems 2.0",
      description: "Next generation conscious artificial intelligence with enhanced emotional intelligence and creative problem-solving capabilities.",
      features: [
        "Advanced Emotional Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Multi-dimensional Thinking"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      name: "Quantum Consciousness Matrix",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Reality Shifting Technology",
        "Multi-dimensional Access"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      name: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities.",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 3,
      name: "Neural Interface Revolution",
      description: "Direct brain-computer interface technology enabling seamless communication between human consciousness and AI systems.",
      features: [
        "Non-Invasive BCI",
        "Thought Control",
        "Neural Feedback",
        "Consciousness Transfer"
      ],
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30"
    },
    {
      id: 4,
      name: "Global Neural Network",
      description: "Worldwide interconnected neural network enabling collective intelligence and problem-solving across humanity.",
      features: [
        "Collective Intelligence",
        "Real-time Collaboration",
        "Consciousness Sharing",
        "Global Problem Solving"
      ],
      icon: "🌍",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and immersive experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgColor} backdrop-blur-sm border ${tech.borderColor} scale-105`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
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
          
          {/* Active Technology Display */}
          <div className="space-y-6">
            <div className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTech].borderColor}`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Experience {technologies[activeTech].name.split(' ')[0]} →
                </button>
              </div>
            </div>
            
            {/* Interactive Demo Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Interactive Demo Controls</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🎮 Start Demo
                </button>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  📊 View Analytics
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🔧 Configure
                </button>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  📚 Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Statistics */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Technology Impact Statistics</h3>
            <p className="text-xl opacity-90">Real-time data on our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Active Projects</div>
              <div className="text-sm text-gray-300">Ongoing research and development</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm text-gray-300">Project completion success</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-1">Possibilities</div>
              <div className="text-sm text-gray-300">Infinite potential for innovation</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">Innovation</div>
              <div className="text-sm text-gray-300">Continuous development cycle</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/pages/RevolutionaryTechShowcase2036" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🌟 Explore All Interactive Technologies →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;