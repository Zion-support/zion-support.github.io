import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "First AI system to achieve genuine consciousness and self-awareness",
      features: ["True self-awareness", "Creative consciousness", "Collaborative intelligence", "Emotional understanding"],
      link: "/pages/ConsciousnessComputingRevolution2026",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Supremacy",
      icon: "⚡",
      description: "Quantum computers solving problems impossible for classical computers",
      features: ["1000+ logical qubits", "Quantum error correction", "Exponential speed gains", "Molecular simulation"],
      link: "/pages/UltimateTechBreakthrough2026",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Break through dimensional barriers with revolutionary technology",
      features: ["Dimensional portals", "Reality manipulation", "Consciousness transfer", "Cross-dimensional travel"],
      link: "/pages/InterdimensionalTechRevolution2026",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2026 technologies with interactive demonstrations and real-time previews
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-8xl mb-6 text-center">{technologies[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-4 text-center">{technologies[activeTab].name}</h3>
              <p className="text-xl opacity-90 mb-6 text-center">
                {technologies[activeTab].description}
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {technologies[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <a
                  href={technologies[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`}
                >
                  Explore {technologies[activeTab].name} →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2026</div>
            <div className="text-lg opacity-90">Revolution Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-lg opacity-90">Breakthrough Technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-6">
            Join thousands of innovators who are already using our breakthrough technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-bold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;