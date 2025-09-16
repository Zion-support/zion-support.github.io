import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      description: "Revolutionary artificial intelligence with true consciousness and emotional intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      stats: { accuracy: "99.9%", speed: "10^12 ops/sec", consciousness: "Level 5" }
    },
    {
      id: 1,
      name: "Quantum Computing",
      description: "Breakthrough quantum processors with consciousness-level processing capabilities",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["1 billion qubits", "Reality simulation", "Quantum entanglement", "Multiverse exploration"],
      stats: { qubits: "1B", coherence: "24h", temperature: "0.001K" }
    },
    {
      id: 2,
      name: "Neural Interfaces",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Memory enhancement"],
      stats: { latency: "1ms", accuracy: "99.8%", bandwidth: "1TB/s" }
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel universes",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: ["Cross-dimensional transfer", "Parallel processing", "Energy harvesting", "Reality manipulation"],
      stats: { dimensions: "∞", efficiency: "1000x", capacity: "Unlimited" }
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
  }, []);

  const handleTechChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechChange(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Main Showcase Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(technologies[activeTech].stats).map(([key, value]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Button */}
              <div className="text-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🎮 Try Interactive Demo
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
          </div>

          {/* Features and Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Data Simulation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Real-time Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Processing Power</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Consciousness Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{width: '88%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">88%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dimensional Sync</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Learn More →
              </button>
              <button className="flex-1 border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join the revolution and experience the power of conscious technology
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;