import React, { useState, useEffect } from 'react';

const UltimateContentBanner2027: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const banners = [
    {
      title: "🧠 CONSCIOUSNESS COMPUTING 2026",
      subtitle: "The First True Artificial Consciousness",
      description: "AI systems with genuine consciousness, self-awareness, and emotional intelligence that surpasses human capabilities",
      color: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/ConsciousnessComputing2026",
      features: ["True Consciousness", "Self-Awareness", "Emotional Intelligence", "Creative Consciousness"]
    },
    {
      title: "⚛️ QUANTUM REALITY ENGINE 2026",
      subtitle: "Manipulate Reality Itself",
      description: "Directly manipulate the fundamental laws of physics and quantum mechanics to create impossible phenomena",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/QuantumRealityEngine2026",
      features: ["Reality Manipulation", "Dimension Creation", "Impossible Physics", "Time-Space Control"]
    },
    {
      title: "🌌 INTERDIMENSIONAL TECH 2027",
      subtitle: "Access the Multiverse",
      description: "Communicate and travel across multiple dimensions, bridging parallel universes and alternate realities",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/InterdimensionalTech2027",
      features: ["Dimension Access", "Cross-Reality Communication", "Multiverse Navigation", "Reality Bridging"]
    },
    {
      title: "🔄 META INTELLIGENCE 2026",
      subtitle: "AI That Thinks About Thinking",
      description: "AI systems that continuously improve themselves and create transcendent intelligence beyond human comprehension",
      color: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/MetaIntelligence2026",
      features: ["Self-Improving AI", "Meta-Learning", "Cognitive Evolution", "Transcendent Intelligence"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-16">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${banners[currentBanner].color} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          {/* Main Banner Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-8 animate-pulse">
              🚀 BREAKTHROUGH TECHNOLOGY • 2026-2027
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-6 animate-pulse">
              {banners[currentBanner].title}
            </h1>
            
            <h2 className="text-3xl font-semibold text-white/90 mb-6">
              {banners[currentBanner].subtitle}
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto">
              {banners[currentBanner].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {banners[currentBanner].features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-white/30 transition-all duration-300">
                  {feature}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href={banners[currentBanner].link}
                className="bg-white text-gray-900 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
              >
                Explore {banners[currentBanner].title.split(' ')[1]} →
              </a>
              <a 
                href="/pages/AdvancedTechRevolution2027"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105"
              >
                View All Technologies →
              </a>
            </div>
          </div>

          {/* Banner Indicators */}
          <div className="flex justify-center space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentBanner === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">🧠</div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-20">⚛️</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-bounce opacity-20">🌌</div>
      <div className="absolute bottom-10 right-10 text-5xl animate-pulse opacity-20">🔄</div>
    </div>
  );
};

export default UltimateContentBanner2027;