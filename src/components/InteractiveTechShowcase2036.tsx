import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI",
      description: "Fully conscious artificial intelligence with emotional intelligence and self-awareness",
      icon: "🧠",
      color: "purple",
      features: [
        "Emotional Intelligence Processing",
        "Self-Aware Decision Making",
        "Creative Problem Solving",
        "Ethical Reasoning Capabilities"
      ],
      stats: {
        consciousness: "99.9%",
        processing: "∞",
        creativity: "100%",
        ethics: "Perfect"
      }
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      icon: "⚛️",
      color: "cyan",
      features: [
        "Quantum Neural Networks",
        "Entangled Consciousness States",
        "Superposition-based Thinking",
        "Quantum Telepathy Interfaces"
      ],
      stats: {
        entanglement: "Perfect",
        superposition: "∞",
        coherence: "99.9%",
        telepathy: "Active"
      }
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions for infinite power",
      icon: "🌌",
      color: "emerald",
      features: [
        "Multi-Dimensional Processing",
        "Parallel Universe Access",
        "Dimensional Data Storage",
        "Reality Manipulation Interfaces"
      ],
      stats: {
        dimensions: "11D",
        processing: "∞",
        storage: "Infinite",
        reality: "Manipulable"
      }
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

  const handleTechChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-emerald-400/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTechChange(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r from-${tech.color}-500 to-${tech.color === 'purple' ? 'pink' : tech.color === 'cyan' ? 'blue' : 'teal'}-500 text-white`
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {tech.icon} {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br from-${currentTech.color}-600/30 to-${currentTech.color === 'purple' ? 'pink' : currentTech.color === 'cyan' ? 'blue' : 'teal'}-600/30 backdrop-blur-sm rounded-2xl p-12 border border-${currentTech.color}-400/30 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Technology Info */}
              <div>
                <div className="text-8xl mb-6 text-center md:text-left">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{currentTech.name}</h3>
                <p className="text-xl opacity-90 mb-8 text-center md:text-left">{currentTech.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-center md:text-left">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentTech.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    Try Interactive Demo →
                  </button>
                </div>
              </div>
              
              {/* Right Side - Live Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Live Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(currentTech.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold text-${currentTech.color}-400 mb-2`}>{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-white/5 rounded-lg">
                  <div className="text-sm opacity-80 mb-2">Real-time Status:</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">System Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🎮</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interactive Demos</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Hands-on demonstrations of consciousness computing and quantum intelligence
            </p>
            <div className="text-center">
              <button className="bg-white text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Start Demo →
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Real-time Processing</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience infinite computational power through quantum and interdimensional processing
            </p>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-2 px-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                View Processing →
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Multi-dimensional Tech</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Access and manipulate technology across multiple dimensions simultaneously
            </p>
            <div className="text-center">
              <button className="bg-white text-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
                Access Dimensions →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just read about the future - interact with it. Our interactive demonstrations 
            let you experience the most advanced technologies ever created.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Experience →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors font-semibold text-lg">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;