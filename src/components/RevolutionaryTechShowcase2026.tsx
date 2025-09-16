import React from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2026",
      description: "The world's most advanced AI innovation center featuring cutting-edge artificial intelligence technologies.",
      image: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AIInnovationHub2026",
      featured: true
    },
    {
      id: 2,
      title: "Comprehensive Blog 2026",
      description: "Stay updated with the latest insights, breakthroughs, and innovations in technology.",
      image: "📚",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/ComprehensiveBlog2026",
      featured: true
    },
    {
      id: 3,
      title: "Advanced Analytics Dashboard",
      description: "Real-time insights and analytics for AI systems, quantum computing, and neural interfaces.",
      image: "📊",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      featured: true
    },
    {
      id: 4,
      title: "Next-Gen Tech Showcase",
      description: "Discover the most advanced technologies of 2026 with revolutionary innovations.",
      image: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/NextGenTechShowcase2026",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "AI systems with synthetic consciousness that can think, create, and evolve independently.",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      featured: false
    },
    {
      id: 6,
      title: "Quantum Computing Revolution",
      description: "Experience exponential processing power with 1000+ qubit quantum processors.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <divdiv
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies of 2026 with our comprehensive showcase 
            of AI innovations, quantum computing breakthroughs, and neural interface technologies.
          </p>
        </divdiv>

        {/* Featured Showcase Items */}
        <divdiv
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {showcaseItems.filter(item => item.featured).map((item, index) => (
            <divdiv
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => window.location.href = item.link}
            >
              <div className="text-6xl mb-6 text-center">{item.image}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-white/80 mb-6 text-center">{item.description}</p>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                  Explore →
                </span>
              </div>
            </divdiv>
          ))}
        </divdiv>

        {/* All Showcase Items */}
        <divdiv
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">All Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <divdiv
                key={item.id}
                className={`bg-gradient-to-br ${item.gradient}/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => window.location.href = item.link}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{item.image}</div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      item.featured ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-500/20 text-gray-300'
                    }`}>
                      {item.featured ? 'Featured' : 'Technology'}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{item.description}</p>
                <div className="text-center">
                  <span className="text-white/60 hover:text-white text-sm font-semibold">
                    Learn More →
                  </span>
                </div>
              </divdiv>
            ))}
          </div>
        </divdiv>

        {/* Technology Categories */}
        <divdiv
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technology Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">Artificial Intelligence</h4>
              <p className="text-purple-200 text-sm">Advanced AI systems and machine learning technologies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Quantum Computing</h4>
              <p className="text-purple-200 text-sm">Next-generation quantum processors and algorithms</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-2">Neural Interfaces</h4>
              <p className="text-purple-200 text-sm">Brain-computer interfaces and neural technologies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Analytics</h4>
              <p className="text-purple-200 text-sm">Advanced analytics and data processing systems</p>
            </div>
          </div>
        </divdiv>

        {/* Call to Action */}
        <divdiv
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore our revolutionary technology showcase and discover the innovations 
            that are shaping the future of humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pages/ComprehensiveTechInsights2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Get Started
            </a>
          </div>
        </divdiv>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;