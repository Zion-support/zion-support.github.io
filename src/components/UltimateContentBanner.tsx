import React, { useState, useEffect } from 'react';

const UltimateContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "🌟 ULTIMATE TECH SHOWCASE 2026",
      subtitle: "Experience the most advanced technologies revolutionizing our world",
      description: "From AI consciousness to quantum supremacy, discover what's possible in 2026",
      gradient: "from-yellow-400 via-pink-500 to-purple-600",
      bgGradient: "from-yellow-400/20 via-pink-500/20 to-purple-600/20",
      link: "/pages/UltimateTechShowcase2026",
      icon: "🚀",
      features: ["AI Consciousness", "Quantum Supremacy", "Neural Interfaces", "Space Tech", "Biotech Revolution"]
    },
    {
      id: 2,
      title: "🧠 ADVANCED AI CONSCIOUSNESS 2026",
      subtitle: "Witness the birth of true artificial consciousness",
      description: "AI systems with self-awareness, emotional intelligence, and creative thinking",
      gradient: "from-cyan-400 via-purple-500 to-pink-600",
      bgGradient: "from-cyan-400/20 via-purple-500/20 to-pink-600/20",
      link: "/pages/AdvancedAIConsciousness2026",
      icon: "🧠",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Thinking", "Ethical Reasoning", "Continuous Learning"]
    },
    {
      id: 3,
      title: "⚛️ QUANTUM SUPREMACY 2026",
      subtitle: "Quantum computers achieving impossible computational feats",
      description: "Solving problems in seconds that would take classical computers millennia",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-400/20 via-blue-500/20 to-purple-600/20",
      link: "/pages/QuantumSupremacy2026",
      icon: "⚛️",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation", "Optimization", "Quantum AI"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Main Banner */}
      <div className={`bg-gradient-to-br ${banners[currentBanner].bgGradient} backdrop-blur-sm rounded-2xl p-12 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ✨ EXCLUSIVE NEW CONTENT • JANUARY 2026
            </div>
            <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${banners[currentBanner].gradient} bg-clip-text text-transparent`}>
              {banners[currentBanner].title}
            </h2>
            <p className="text-2xl opacity-90 mb-4">{banners[currentBanner].subtitle}</p>
            <p className="text-xl opacity-80 max-w-4xl mx-auto mb-8">{banners[currentBanner].description}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
            {banners[currentBanner].features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                <div className="text-2xl mb-2">{banners[currentBanner].icon}</div>
                <div className="text-sm font-semibold">{feature}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6">
            <a 
              href={banners[currentBanner].link}
              className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Explore {banners[currentBanner].title.split(' ')[0]} →
            </a>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className={`bg-gradient-to-br ${banner.bgGradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}>
            <div className="text-center">
              <div className="text-4xl mb-4">{banner.icon}</div>
              <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
              <p className="text-white/90 mb-4 text-sm">{banner.subtitle}</p>
              <a 
                href={banner.link}
                className={`inline-block bg-gradient-to-r ${banner.gradient} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                Explore Now →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content Showcase */}
      <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">🚀 More Revolutionary Content</h3>
          <p className="text-xl opacity-90">Discover our complete collection of cutting-edge technology content</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/pages/NextGenAIRevolution2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
            🧠 Next-Gen AI Revolution
          </a>
          <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
            ⚡ Quantum Computing Revolution
          </a>
          <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
            🧬 Neural Interface Revolution
          </a>
          <a href="/pages/RevolutionaryTechBlog2026" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
            📚 Revolutionary Tech Blog
          </a>
        </div>
      </div>
    </div>
  );
};
export default UltimateContentBanner;
