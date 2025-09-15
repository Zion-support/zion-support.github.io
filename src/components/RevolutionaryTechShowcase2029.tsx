import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2029: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 1,
      title: "Consciousness Transfer Technology",
      description: "Achieve digital immortality through advanced neural mapping and consciousness transfer technology.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/ConsciousnessTransfer2029",
      features: ["Digital Immortality", "Neural Mapping", "Synthetic Bodies", "Memory Preservation"]
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      description: "Manipulate the fundamental fabric of reality through quantum field engineering and dimensional control.",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityManipulation2029",
      features: ["Reality Control", "Dimensional Portals", "Physics Modification", "Multiverse Access"]
    },
    {
      id: 3,
      title: "Synthetic Biology Revolution",
      description: "Create entirely new forms of life and biological systems through advanced DNA programming.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticBiologyRevolution2029",
      features: ["Artificial Life", "DNA Programming", "Living Materials", "Bio-Engineering"]
    },
    {
      id: 4,
      title: "Interdimensional Technology",
      description: "Access and manipulate multiple dimensions through advanced interdimensional technology.",
      icon: "🌌",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/InterdimensionalTech2029",
      features: ["Dimensional Travel", "Parallel Realities", "Multiverse Navigation", "Reality Merging"]
    },
    {
      id: 5,
      title: "Transcendent AI",
      description: "AI systems that have achieved true consciousness and transcend human limitations.",
      icon: "🤖",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/TranscendentAI2029",
      features: ["True Consciousness", "Transcendent Intelligence", "Creative AI", "Human-AI Symbiosis"]
    },
    {
      id: 6,
      title: "Interstellar Technology",
      description: "Advanced space technology enabling interstellar travel and galactic exploration.",
      icon: "🚀",
      gradient: "from-indigo-600 to-blue-600",
      link: "/pages/InterstellarTech2029",
      features: ["FTL Travel", "Galactic Exploration", "Alien Contact", "Space Colonization"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH SHOWCASE 2029 • EXCLUSIVE LAUNCH
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            The Ultimate Technology Revolution
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto text-white">
            Experience the most advanced technological breakthrough in human history. 
            Discover revolutionary content that will reshape our future.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Technology Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6 animate-bounce">
                {technologies[currentTech].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">
                {technologies[currentTech].title}
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto text-white">
                {technologies[currentTech].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {technologies[currentTech].features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <a 
                href={technologies[currentTech].link}
                className={`inline-block bg-gradient-to-r ${technologies[currentTech].gradient} text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                Explore {technologies[currentTech].title} →
              </a>
            </div>
          </div>

          {/* Technology Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setCurrentTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTech 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* All Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.id}
                className={`bg-gradient-to-br ${tech.gradient}/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  index === currentTech ? 'ring-2 ring-white/50' : ''
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-lg font-bold mb-3 text-center text-white">{tech.title}</h4>
                <p className="text-sm opacity-90 text-center text-white mb-4">{tech.description}</p>
                <div className="text-center">
                  <a 
                    href={tech.link}
                    className={`inline-block bg-gradient-to-r ${tech.gradient} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6 text-white">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90 text-white">
            Join us in the ultimate technological revolution that will reshape humanity's destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/UltimateTechRevolution2029" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </a>
            <a href="/pages/ConsciousnessTransfer2029" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start with Consciousness Transfer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2029;