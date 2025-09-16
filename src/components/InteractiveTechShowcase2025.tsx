import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Revolutionary Breakthrough",
      icon: "🧬",
      description: "Bio-Quantum Computing that fuses biological systems with quantum processing",
      features: ["Molecular-level processing", "Self-healing systems", "Biological data storage"],
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 1,
      title: "AI Consciousness",
      icon: "🧠",
      description: "Ultimate AI systems with true consciousness, creativity, and emotional intelligence",
      features: ["Emotional intelligence", "Creative consciousness", "Self-evolution"],
      color: "from-violet-600 to-purple-600",
      link: "/pages/UltimateAIConsciousness2025"
    },
    {
      id: 2,
      title: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum Reality Engine creating infinite parallel universes and alternate realities",
      features: ["Quantum entanglement VR", "Reality manipulation", "Consciousness transfer"],
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2025"
    }
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECH SHOWCASE 2025 • LIVE DEMOS
=======
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4">
          🚀 INTERACTIVE TECH SHOWCASE 2025
>>>>>>> cursor/create-and-deploy-new-content-36c0
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Revolutionary Technologies</h2>
        <p className="text-xl text-gray-600">Click on each technology to discover its groundbreaking capabilities</p>
      </div>

<<<<<<< HEAD
      {/* Demo Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => handleDemoClick(index)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDemo === index
                ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl">{demo.icon}</span>
            <span>{demo.title}</span>
          </button>
        ))}
=======
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-2 shadow-lg">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>
>>>>>>> cursor/create-and-deploy-new-content-36c0
      </div>

      {/* Active Technology Display */}
      <div className="max-w-6xl mx-auto">
        <div className={`bg-gradient-to-br ${technologies[activeTab].color} rounded-2xl p-8 text-white shadow-2xl`}>
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{technologies[activeTab].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">{technologies[activeTab].description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {technologies[activeTab].features.map((feature, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">✨</div>
                <h4 className="text-lg font-bold mb-2">{feature}</h4>
                <p className="text-sm opacity-90">
                  Revolutionary capability that transforms how we interact with technology
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={technologies[activeTab].link}
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
            >
              Explore {technologies[activeTab].title} →
            </a>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">All Revolutionary Technologies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(tech.id)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{tech.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
              <div className="text-center">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  Click to explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
