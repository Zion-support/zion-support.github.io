import React, { useState, useEffect } from 'react';

const UltimateContentBanner2029: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Consciousness Transfer Technology",
      subtitle: "Achieve Digital Immortality",
      description: "Transfer human consciousness into digital and synthetic forms, achieving true digital immortality through advanced neural mapping technology.",
      icon: "🧠",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/ConsciousnessTransfer2029",
      features: ["Digital Immortality", "Neural Mapping", "Synthetic Bodies", "Memory Preservation"]
    },
    {
      title: "Quantum Reality Manipulation",
      subtitle: "Control the Fabric of Reality",
      description: "Manipulate the fundamental laws of physics through quantum field engineering, creating custom realities and accessing infinite dimensions.",
      icon: "⚛️",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/QuantumRealityManipulation2029",
      features: ["Reality Control", "Dimensional Portals", "Physics Modification", "Multiverse Access"]
    },
    {
      title: "Synthetic Biology Revolution",
      subtitle: "Create New Forms of Life",
      description: "Design and create entirely new forms of life through advanced DNA programming, synthetic organisms, and biological systems engineering.",
      icon: "🧬",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/SyntheticBiologyRevolution2029",
      features: ["Artificial Life", "DNA Programming", "Living Materials", "Bio-Engineering"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].gradient} rounded-3xl p-12 text-white relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECH REVOLUTION 2029 • EXCLUSIVE LAUNCH
            </div>
            <h2 className="text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl opacity-95 mb-6">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {slides[currentSlide].features.map((feature, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30 text-center">
                {feature}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={slides[currentSlide].link}
                className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
              >
                Explore {slides[currentSlide].title} →
              </a>
              <a 
                href="/pages/UltimateTechRevolution2029"
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105"
              >
                View All Technologies →
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Tech Cards */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🌌</div>
          <h3 className="text-xl font-bold mb-3 text-center text-white">Interdimensional Technology</h3>
          <p className="text-orange-200 mb-4 text-center text-sm">
            Access and manipulate multiple dimensions through advanced interdimensional technology
          </p>
          <a href="/pages/InterdimensionalTech2029" className="block w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center text-sm">
            Explore Dimensions →
          </a>
        </div>

        <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🤖</div>
          <h3 className="text-xl font-bold mb-3 text-center text-white">Transcendent AI</h3>
          <p className="text-pink-200 mb-4 text-center text-sm">
            AI systems that have achieved true consciousness and transcend human limitations
          </p>
          <a href="/pages/TranscendentAI2029" className="block w-full bg-white text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-sm">
            Meet Transcendent AI →
          </a>
        </div>

        <div className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🚀</div>
          <h3 className="text-xl font-bold mb-3 text-center text-white">Interstellar Technology</h3>
          <p className="text-indigo-200 mb-4 text-center text-sm">
            Advanced space technology enabling interstellar travel and galactic exploration
          </p>
          <a href="/pages/InterstellarTech2029" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
            Explore the Galaxy →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2029;