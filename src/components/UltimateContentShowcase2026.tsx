import React from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most comprehensive technology revolution featuring breakthrough innovations in AI, Quantum Computing, and Neural Interfaces.",
      link: "/pages/UltimateTechRevolution2026",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      category: "Revolutionary Technology"
    },
    {
      title: "Revolutionary Innovation Hub 2026",
      description: "The world's most advanced innovation hub where cutting-edge technologies converge to create impossible solutions.",
      link: "/pages/RevolutionaryInnovationHub2026",
      icon: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      category: "Innovation Center"
    },
    {
      title: "Next-Gen Space Tech 2026",
      description: "Revolutionary space exploration technologies enabling interplanetary travel, space colonization, and cosmic resource utilization.",
      link: "/pages/NextGenSpaceTech2026",
      icon: "🛸",
      gradient: "from-indigo-600 to-purple-600",
      category: "Space Technology"
    },
    {
      title: "Advanced Quantum Computing 2026",
      description: "Breakthrough quantum computing systems that achieve consciousness-level processing and unprecedented problem-solving capabilities.",
      link: "/pages/AdvancedQuantumComputing2026",
      icon: "⚛️",
      gradient: "from-green-600 to-emerald-600",
      category: "Quantum Technology"
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces combined with biotechnology, enabling seamless integration between human consciousness and digital systems.",
      link: "/pages/NeuralInterfaceRevolution2026",
      icon: "🧠",
      gradient: "from-pink-600 to-rose-600",
      category: "Neural Technology"
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "Next-generation AI that transcends human cognitive capabilities, creating truly autonomous systems that can reason and evolve independently.",
      link: "/pages/SyntheticIntelligence2026",
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      category: "Artificial Intelligence"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold mb-6">
            🌟 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our most comprehensive collection of cutting-edge technology content, 
            featuring breakthrough innovations that are reshaping the future of humanity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${content.gradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              onClick={() => window.location.href = content.link}
            >
              <div className="text-5xl mb-4">{content.icon}</div>
              <div className="mb-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                  {content.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {content.title}
              </h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                {content.description}
              </p>
              <div className="flex items-center text-white font-semibold">
                <span>Explore Now</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Content Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Revolutionary Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Content Updates</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators, entrepreneurs, and technology enthusiasts 
            who are already exploring the revolutionary content that's shaping tomorrow.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Exploring
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;