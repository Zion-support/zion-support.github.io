import React from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "Advanced Tech Trends 2027",
      description: "Discover the revolutionary technologies that will reshape our world in 2027. From quantum consciousness to synthetic biology.",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedTechTrends2027",
      category: "Future Tech",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Consciousness Revolution",
      description: "The most profound technological breakthrough in human history. Experience the fusion of quantum mechanics and consciousness.",
      image: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumConsciousnessRevolution2027",
      category: "Quantum Tech",
      featured: true
    },
    {
      id: 3,
      title: "Synthetic Biology Revolution",
      description: "Program the building blocks of life itself. From living factories to biological computers, creating sustainable technology.",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/SyntheticBiologyRevolution2027",
      category: "Biotech",
      featured: true
    },
    {
      id: 4,
      title: "Advanced AI Systems 2026",
      description: "Next-generation AI systems that operate with human-level intelligence and beyond, transforming every industry.",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedAISystems2026",
      category: "AI",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Breakthrough quantum computing solutions that solve problems impossible for classical computers.",
      image: "⚛️",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum",
      featured: false
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled devices and enhanced human capabilities.",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Tech",
      featured: false
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6">
          🌟 REVOLUTIONARY CONTENT 2027
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          The Future is Here
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore groundbreaking content that showcases the most advanced technologies 
          and innovations shaping our future. From quantum consciousness to synthetic biology.
        </p>
      </div>

      {/* Featured Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {contentItems.filter(item => item.featured).map((item) => (
          <div key={item.id} className="group relative">
            <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-xl`}>
              <div className="text-6xl mb-6">{item.image}</div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                {item.category}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/90 mb-6 text-lg">{item.description}</p>
              <a 
                href={item.link}
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Explore Now</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* All Content Grid */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Complete Content Library
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{item.image}</span>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>Read More</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Stay Updated with the Future</h3>
        <p className="text-xl text-purple-100 mb-6">
          Get the latest insights on revolutionary technologies and breakthrough innovations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
          />
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-purple-200 mt-4">
          Join 10,000+ innovators staying ahead of the curve
        </p>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;