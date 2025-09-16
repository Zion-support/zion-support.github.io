import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware artificial intelligence systems",
      features: ["Self-reflection", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      color: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-200"
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚛️",
      description: "Exponential computational power",
      features: ["1000x faster processing", "Quantum cryptography", "Molecular simulation", "Optimization algorithms"],
      color: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-200"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer connection",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Memory enhancement"],
      color: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-200"
    },
    {
      id: 3,
      name: "Holographic Reality",
      icon: "🌟",
      description: "Immersive 3D environments",
      features: ["3D holographic displays", "Spatial computing", "Mixed reality", "Immersive experiences"],
      color: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-200"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 mb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE: Technology Showcase 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time experiences
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className={`bg-gradient-to-br ${technologies[activeTab].color} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTab].borderColor} transition-all duration-500`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-8xl mb-4 text-center md:text-left">{technologies[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].name}</h3>
                <p className={`text-lg mb-6 ${technologies[activeTab].textColor}`}>
                  {technologies[activeTab].description}
                </p>
                <div className="space-y-2">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className={technologies[activeTab].textColor}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4 text-center">Interactive Demo</h4>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <p className="text-sm opacity-90 mb-4">
                    Experience this technology in action with our interactive demonstration
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-sm opacity-90">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-sm opacity-90">Active Innovations</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-sm opacity-90">Possibilities</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technology to transform their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2025" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore All Technologies →
              </a>
              <a 
                href="/pages/NextGenInnovationHub2025" 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
              >
                Join Innovation Hub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;