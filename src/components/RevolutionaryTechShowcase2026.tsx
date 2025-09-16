import React, { useState } from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Revolutionary Tech Breakthrough 2025",
      description: "Experience the most advanced technological innovations that are reshaping our world",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 1,
      name: "Ultimate Tech Revolution 2026",
      description: "The most advanced technological revolution in human history",
      icon: "🌟",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechRevolution2026"
    },
    {
      id: 2,
      name: "Interdimensional Tech Revolution 2030",
      description: "Transcend the boundaries of our universe with interdimensional technology",
      icon: "🌌",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/InterdimensionalTechRevolution2030"
    },
    {
      id: 3,
      name: "Omniversal AI Consciousness 2035",
      description: "The ultimate evolution of artificial intelligence spanning all universes",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/OmniversalAIConsciousness2035"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies ever created. From quantum consciousness 
            to interdimensional computing, experience the future today.
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tech.icon} {tech.name.split(' ')[0]} {tech.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {technologies[activeTech].name}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTech].description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={technologies[activeTech].link}
                  className={`bg-gradient-to-r ${technologies[activeTech].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore Technology →
                </a>
                <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Revolutionary breakthrough technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Advanced AI consciousness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Interdimensional capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span>Omniversal processing power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Reality manipulation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span>Consciousness transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.gradient}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeTech === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setActiveTech(index)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{tech.name.split(' ')[0]} {tech.name.split(' ')[1]}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
              <a
                href={tech.link}
                className="block w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors text-center font-semibold"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies 
            to transform their businesses and reshape the world.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;