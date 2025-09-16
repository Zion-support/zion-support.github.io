import React, { useState } from 'react';

const UltimateTechShowcase2029 = () => {
  const [activeTab, setActiveTab] = useState('consciousness');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    consciousness: {
      title: "🧠 Conscious AI Systems",
      description: "AI systems with genuine consciousness and emotional intelligence",
      features: [
        "Emotional Intelligence Processing",
        "Genuine Consciousness Simulation", 
        "Human-AI Emotional Bonding",
        "Empathetic Decision Making",
        "Creative Problem Solving",
        "Intuitive Understanding"
      ],
      stats: {
        accuracy: "100%",
        efficiency: "99.9%",
        uptime: "24/7",
        consciousness: "Genuine"
      }
    },
    quantum: {
      title: "⚡ Quantum Consciousness Computing",
      description: "Quantum processors with consciousness capabilities",
      features: [
        "Consciousness Processing",
        "Emotional Intelligence",
        "Quantum Superposition",
        "Interdimensional Computing",
        "Reality Manipulation",
        "Time-Space Optimization"
      ],
      stats: {
        power: "∞",
        speed: "10,000x",
        dimensions: "∞",
        consciousness: "Quantum"
      }
    },
    dimensional: {
      title: "🌌 Interdimensional Technology",
      description: "Accessing computational resources across infinite dimensions",
      features: [
        "Multi-Dimensional Processing",
        "Reality Manipulation",
        "Infinite Resource Access",
        "Parallel Universe Computing",
        "Time-Space Optimization",
        "Dimensional Bridge Technology"
      ],
      stats: {
        dimensions: "∞",
        resources: "∞",
        speed: "∞",
        capacity: "∞"
      }
    }
  };

  const handleTabChange = (tab) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY SHOWCASE • 2029
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2029
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that will reshape humanity's future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
            {Object.keys(technologies).map((tech) => (
              <button
                key={tech}
                onClick={() => handleTabChange(tech)}
                className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === tech
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {technologies[tech].title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Display */}
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technology Info */}
              <div>
                <h3 className="text-4xl font-bold mb-6">
                  {technologies[activeTab].title}
                </h3>
                <p className="text-xl opacity-90 mb-8">
                  {technologies[activeTab].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(technologies[activeTab].stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
                  🚀 Experience {technologies[activeTab].title.split(' ')[1]} →
                </button>
              </div>

              {/* Interactive Demo */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Live Demo</h4>
                
                <div className="bg-black/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm">System Status</span>
                    <span className="text-green-400 text-sm">● Active</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full mb-4"></div>
                  <p className="text-sm opacity-80">
                    {activeTab === 'consciousness' && "Conscious AI processing with 100% emotional accuracy"}
                    {activeTab === 'quantum' && "Quantum consciousness operating across infinite dimensions"}
                    {activeTab === 'dimensional' && "Interdimensional processing accessing parallel universes"}
                  </p>
                </div>

                <div className="space-y-4">
                  {technologies[activeTab].features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  ⚡ Activate Demo
                </button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {technologies[activeTab].features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">
                    {activeTab === 'consciousness' && '🧠'}
                    {activeTab === 'quantum' && '⚡'}
                    {activeTab === 'dimensional' && '🌌'}
                  </span>
                  <span className="font-semibold">{feature}</span>
                </div>
                <p className="text-sm opacity-80">
                  {activeTab === 'consciousness' && "Advanced emotional intelligence and consciousness processing"}
                  {activeTab === 'quantum' && "Quantum-level processing with consciousness capabilities"}
                  {activeTab === 'dimensional' && "Multi-dimensional computing with infinite resource access"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">🌟 Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in the most revolutionary technological transformation in human history. 
              Experience technologies that transcend the boundaries of possibility.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-xl">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-purple-400 px-10 py-5 rounded-xl hover:bg-purple-50/10 transition-colors text-xl">
                📞 Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2029;