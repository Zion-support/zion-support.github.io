import React, { useState } from 'react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: "AI Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      description: "Advanced artificial intelligence that thinks, learns, and creates",
      features: ["Self-Learning AI", "Conscious Systems", "Creative Intelligence", "Global Network"],
      link: "/pages/AdvancedAIRevolution2025"
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      description: "Exponential computational power solving impossible problems",
      features: ["Quantum Supremacy", "Unbreakable Security", "Molecular Simulation", "Space Exploration"],
      link: "/pages/QuantumComputingBreakthrough2025"
    },
    {
      title: "Space Technology",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      description: "Revolutionary space tech making the cosmos accessible",
      features: ["Mars Colonization", "Space Mining", "Interstellar Travel", "Lunar Bases"],
      link: "/pages/SpaceTechRevolution2025"
    },
    {
      title: "Biotechnology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Life sciences breakthrough transforming human potential",
      features: ["Gene Editing", "Personalized Medicine", "Brain Enhancement", "Regenerative Medicine"],
      link: "/pages/BiotechRevolution2025"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Generation Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological breakthroughs that are reshaping our world
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Content */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">{techCategories[activeTab].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{techCategories[activeTab].title}</h3>
                <p className="text-xl opacity-90 mb-6">{techCategories[activeTab].description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {techCategories[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={techCategories[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${techCategories[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {techCategories[activeTab].title} →
                </a>
              </div>
              <div className="relative">
                <div className={`bg-gradient-to-br ${techCategories[activeTab].color} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-4">{techCategories[activeTab].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Revolutionary Breakthrough</h4>
                  <p className="opacity-90 mb-6">
                    Experience the future of technology with our cutting-edge innovations
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-bold">99.9%</div>
                      <div>Accuracy</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-bold">1000x</div>
                      <div>Faster</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-bold">24/7</div>
                      <div>Available</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-bold">∞</div>
                      <div>Scalable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="opacity-90 mb-6 text-sm">{category.description}</p>
              <div className="space-y-2 text-sm">
                {category.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <span className="text-white/80">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;