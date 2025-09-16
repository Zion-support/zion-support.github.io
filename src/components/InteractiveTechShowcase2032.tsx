import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2032: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "AI with true consciousness and self-awareness",
      icon: "🧠",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/50",
      progress: 95,
      status: "Active"
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Quantum computing merged with human consciousness",
      icon: "⚡",
      features: ["Quantum neural networks", "Consciousness transfer", "Infinite processing power", "Reality manipulation"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/50",
      progress: 78,
      status: "In Development"
    },
    {
      id: 3,
      name: "Neural Reality Engine",
      description: "Direct brain-computer interface for immersive experiences",
      icon: "🌌",
      features: ["Direct neural input", "Multi-sensory feedback", "Consciousness transfer", "Reality simulation"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/50",
      progress: 88,
      status: "Active"
    },
    {
      id: 4,
      name: "Interdimensional Computing",
      description: "Computing across multiple dimensions and realities",
      icon: "🌌",
      features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe access", "Time manipulation"],
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-400/50",
      progress: 65,
      status: "Research"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2032
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through interactive demonstrations and hands-on exploration
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTech === index
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className={`bg-gradient-to-r ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-2xl p-12 mb-16 border ${technologies[activeTech].borderColor} transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{technologies[activeTech].icon}</div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{technologies[activeTech].name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      technologies[activeTech].status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      technologies[activeTech].status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {technologies[activeTech].status}
                    </span>
                    <span className="text-sm text-gray-300">{technologies[activeTech].progress}% Complete</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8">{technologies[activeTech].description}</p>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${technologies[activeTech].color} rounded-full animate-pulse`}></div>
                    <span className="text-lg text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Try Interactive Demo
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Live Demo</h4>
              <div className="bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-lg p-8 text-center">
                <div className="text-8xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
                <p className="text-lg text-white mb-4">Interactive demonstration in progress...</p>
                <div className="w-full bg-white/20 rounded-full h-3 mb-6">
                  <div 
                    className={`bg-gradient-to-r ${technologies[activeTech].color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${technologies[activeTech].progress}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold text-white">Processing Power</div>
                    <div className="text-gray-300">∞ Quantum Units</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold text-white">Consciousness Level</div>
                    <div className="text-gray-300">99.9% Human-like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                hoveredCard === tech.id ? 'ring-2 ring-white/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(tech.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{tech.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-400">Progress</span>
                    <span className="text-xs font-semibold text-white">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                  {hoveredCard === tech.id ? 'Explore Now →' : 'Learn More'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Revolutionary Performance Metrics</h3>
            <p className="text-lg text-gray-300">See the incredible achievements of our technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-sm text-gray-300">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Innovation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold text-white mb-6">Experience the Future Today</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their industries
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2032;