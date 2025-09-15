import React, { useState } from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Revolutionary AI systems with autonomous learning and quantum processing",
      features: [
        "Autonomous Learning Systems",
        "Quantum Neural Networks",
        "Distributed Intelligence",
        "Predictive Analytics"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      description: "Breakthrough quantum computing solutions for complex problem solving",
      features: [
        "Quantum Algorithms",
        "Quantum Cryptography",
        "Quantum Simulation",
        "Quantum Optimization"
      ],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Space Technology",
      icon: "🚀",
      description: "Advanced space exploration and colonization technologies",
      features: [
        "Interplanetary Travel",
        "Space Colonization",
        "Asteroid Mining",
        "Mars Mission Technology"
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Biotechnology",
      icon: "🧬",
      description: "Cutting-edge biotechnology and synthetic biology innovations",
      features: [
        "Gene Editing & CRISPR",
        "Synthetic Biology",
        "Neural Interfaces",
        "Personalized Medicine"
      ],
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY 2026 TECHNOLOGY SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Next-Generation Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking 2026 technology innovations in AI systems, 
            space technology, biotechnology, and quantum computing
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{techCategories[activeTab].title}</h3>
            <p className="text-xl opacity-90">{techCategories[activeTab].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techCategories[activeTab].features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{techCategories[activeTab].icon}</div>
                <h4 className="text-lg font-bold mb-2">{feature}</h4>
                <p className="text-sm opacity-80">Revolutionary technology that will change everything</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Explore {techCategories[activeTab].title} →
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                index === activeTab
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-sm font-semibold">{category.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;