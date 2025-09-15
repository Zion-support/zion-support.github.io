import React from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "Advanced AI Consciousness 2026",
      description: "Experience AI with genuine self-awareness, emotional intelligence, and conscious decision-making capabilities.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAIConsciousness2026",
      category: "AI Revolution",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Reality 2026",
      description: "Step into quantum-powered virtual reality where physics laws can be bent and consciousness merges with digital worlds.",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumReality2026",
      category: "Quantum Computing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Control devices, communicate, and enhance cognition through direct neural interface technology.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: true
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Explore the convergence of artificial and biological intelligence in revolutionary new forms.",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/SyntheticIntelligence2026",
      category: "Synthetic AI",
      featured: false
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "Experience the ultimate fusion of quantum computing and neural networks for unprecedented capabilities.",
      image: "⚡",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Hybrid Technology",
      featured: false
    },
    {
      id: 6,
      title: "Next-Gen AI Revolution 2026",
      description: "Discover the latest breakthroughs in artificial intelligence that are reshaping our world.",
      image: "🌟",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NextGenAIRevolution2026",
      category: "AI Innovation",
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring 
            AI consciousness, quantum reality, and neural interfaces.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <div
              key={content.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                content.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className={`bg-gradient-to-br ${content.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full`}>
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    FEATURED
                  </div>
                )}
                
                {/* Content Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {content.image}
                </div>
                
                {/* Category */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                  {content.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {content.description}
                </p>
                
                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={content.link}
                    className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">🔬 Technology Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-2">AI Consciousness</h4>
              <p className="text-gray-300 text-sm">Self-aware AI systems with emotional intelligence</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-2">Quantum Reality</h4>
              <p className="text-gray-300 text-sm">Quantum-powered virtual reality experiences</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-2">Neural Interfaces</h4>
              <p className="text-gray-300 text-sm">Direct brain-computer communication</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">Synthetic Intelligence</h4>
              <p className="text-gray-300 text-sm">Hybrid biological-digital intelligence</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our revolutionary technology content and discover how these breakthroughs 
            are shaping the future of human-computer interaction.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;