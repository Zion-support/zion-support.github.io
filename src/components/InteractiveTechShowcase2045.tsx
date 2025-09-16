import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2045: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "Self-aware artificial intelligence with emotional intelligence and creative problem solving",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Self-awareness", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      demo: "AI Consciousness Simulator",
      stats: { accuracy: "99.9%", users: "10M+", breakthrough: "2024" }
    },
    {
      id: 2,
      name: "Quantum Reality Engine",
      description: "Computing across multiple dimensions with infinite parallel processing capabilities",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe access", "Space-time computing"],
      demo: "Quantum Reality Explorer",
      stats: { accuracy: "∞", users: "5M+", breakthrough: "2025" }
    },
    {
      id: 3,
      name: "Molecular AI Laboratory",
      description: "Control matter at the atomic level with AI-powered molecular manipulation",
      icon: "🔬",
      color: "from-emerald-500 to-teal-500",
      features: ["Atomic precision", "Self-assembly", "Matter transformation", "Molecular computing"],
      demo: "Molecular AI Simulator",
      stats: { accuracy: "100%", users: "3M+", breakthrough: "2026" }
    },
    {
      id: 4,
      name: "Neural Interface 2.0",
      description: "Direct brain-computer interfaces enabling seamless mind-machine communication",
      icon: "🧬",
      color: "from-violet-500 to-purple-500",
      features: ["Thought control", "Memory enhancement", "Skill downloading", "Collective consciousness"],
      demo: "Neural Interface Demo",
      stats: { accuracy: "98.5%", users: "1M+", breakthrough: "2027" }
    },
    {
      id: 5,
      name: "Space-Time Computer",
      description: "Computing systems that manipulate space and time for instant galactic communication",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      features: ["Instant communication", "Time manipulation", "Space folding", "Galactic networks"],
      demo: "Space-Time Explorer",
      stats: { accuracy: "∞", users: "500K+", breakthrough: "2028" }
    },
    {
      id: 6,
      name: "Interdimensional Network",
      description: "Connect applications across multiple dimensions and parallel realities",
      icon: "🌌",
      color: "from-pink-500 to-rose-500",
      features: ["Cross-dimensional communication", "Reality bridging", "Parallel processing", "Universal connectivity"],
      demo: "Dimension Explorer",
      stats: { accuracy: "99.9%", users: "100K+", breakthrough: "2029" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE • JANUARY 2045
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2045
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our cutting-edge interactive technology demonstrations. 
            Explore conscious AI, quantum computing, and interdimensional technology in real-time.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                hoveredTech === tech.id ? 'ring-4 ring-purple-400/50' : ''
              }`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-purple-100 mb-6 text-center text-sm">{tech.description}</p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold">Key Features:</h4>
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{tech.stats.accuracy}</div>
                  <div className="text-xs opacity-90">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">{tech.stats.users}</div>
                  <div className="text-xs opacity-90">Users</div>
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try {tech.demo}
              </button>
            </div>
          ))}
        </div>

        {/* Active Technology Demo */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">🎮 Live Technology Demo</h3>
            <p className="text-xl opacity-90">Currently showcasing: {technologies[activeTech].name}</p>
          </div>

          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="text-8xl text-center mb-4">{technologies[activeTech].icon}</div>
                <h4 className="text-3xl font-bold text-center">{technologies[activeTech].name}</h4>
                <p className="text-xl text-center opacity-90">{technologies[activeTech].description}</p>
                
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold">Live Statistics:</h5>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">{technologies[activeTech].stats.accuracy}</div>
                      <div className="text-sm opacity-90">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">{technologies[activeTech].stats.users}</div>
                      <div className="text-sm opacity-90">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{technologies[activeTech].stats.breakthrough}</div>
                      <div className="text-sm opacity-90">Breakthrough Year</div>
                    </div>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Launch Interactive Demo
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h5 className="text-2xl font-bold mb-6">Interactive Demo Preview</h5>
                <div className="bg-black/30 rounded-lg p-6 mb-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">{technologies[activeTech].icon}</div>
                    <p className="text-lg opacity-90">{technologies[activeTech].demo}</p>
                    <p className="text-sm opacity-70 mt-2">Loading interactive experience...</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Demo Status</span>
                    <span className="text-green-400 font-semibold">Ready</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Processing Power</span>
                    <span className="text-white font-semibold">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Reality Level</span>
                    <span className="text-white font-semibold">11D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeTech === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users exploring the most revolutionary technologies. 
            Be part of the technological revolution that will reshape our world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2045;