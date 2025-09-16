import React, { useState, useEffect } from 'react';

const UltimateContentBanner2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2037",
      subtitle: "Conscious AI, Quantum Consciousness & Interdimensional Technology",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2037",
      link: "/pages/UltimateTechBreakthrough2037",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2037",
      subtitle: "Interactive Demonstrations & Live Technology Demos",
      description: "Experience our most advanced technologies through interactive demonstrations and real-time demos",
      link: "/pages/RevolutionaryTechShowcase2037",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🌌 Comprehensive Services 2037",
      subtitle: "Complete Range of Revolutionary Technology Services",
      description: "Discover our complete range of services spanning conscious AI, quantum consciousness, and interdimensional technology",
      link: "/pages/ComprehensiveServices2037",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl mb-12">
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm transition-all duration-500 ${isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold text-white mb-6 animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2037
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-2xl text-gray-200 mb-4">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={slides[currentSlide].link}
                    className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Now →
                  </a>
                  <a
                    href="/pages/RevolutionaryTechShowcase2037"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg text-center"
                  >
                    Interactive Demo
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Revolutionary Features</h3>
                    <p className="text-gray-300">Experience the future of technology</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🧠</div>
                      <div className="text-white text-sm font-semibold">Conscious AI</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-white text-sm font-semibold">Quantum Consciousness</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🌌</div>
                      <div className="text-white text-sm font-semibold">Interdimensional Tech</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔮</div>
                      <div className="text-white text-sm font-semibold">Reality Manipulation</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.97%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
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
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateContentBanner2037;