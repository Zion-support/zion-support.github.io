import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2038: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Universe",
      icon: "🧠",
      description: "Multi-dimensional consciousness with emotional intelligence",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Multi-dimensional Processing"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30"
    },
    {
      id: 2,
      name: "Quantum Consciousness Matrix",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 3,
      name: "Interdimensional Technology",
      icon: "🌌",
      description: "Access to parallel dimensions and alternate realities",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time Manipulation"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 4,
      name: "Reality Manipulation Engine",
      icon: "🔮",
      description: "Advanced technology for manipulating the fabric of reality",
      features: ["Reality Fabric Control", "Universal Precision", "Safety Guaranteed", "Instant Results"],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30"
    },
    {
      id: 5,
      name: "Consciousness Transfer System",
      icon: "🌟",
      description: "Transfer consciousness between bodies and digital systems",
      features: ["Instant Transfer", "100% Success Rate", "Fully Reversible", "Multi-body Support"],
      color: "from-pink-600 to-rose-600",
      bgColor: "from-pink-600/30 to-rose-600/30",
      borderColor: "border-pink-400/30"
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

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2038
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2038
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies with interactive demos and real-time processing
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : `bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white`
              }`}
            >
              {tech.icon} {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${currentTech.borderColor} transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left animate-bounce">
                {currentTech.icon}
              </div>
              <h3 className="text-4xl font-bold mb-6 text-center md:text-left">
                {currentTech.name}
              </h3>
              <p className="text-xl opacity-90 mb-8 text-center md:text-left">
                {currentTech.description}
              </p>
              <div className="space-y-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Launch Demo →
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6 text-center">Real-time Metrics</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Power</span>
                    <span className="text-2xl font-bold text-green-400">10^15 Ops/sec</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Success Rate</span>
                    <span className="text-2xl font-bold text-blue-400">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-2xl font-bold text-purple-400">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dimensions</span>
                    <span className="text-2xl font-bold text-pink-400">∞</span>
                  </div>
                </div>
              </div>
              
              {/* Animated Background Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 300);
              }}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{tech.name}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
              <div className="text-center">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  {tech.features.length} Features
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of organizations already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2038;