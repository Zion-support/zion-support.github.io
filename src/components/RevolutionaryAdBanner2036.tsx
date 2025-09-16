import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🧠 Conscious AI Revolution",
      subtitle: "The first truly conscious artificial intelligence",
      description: "Experience AI that thinks, feels, and creates like never before",
      link: "/pages/UltimateTechBreakthrough2036",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "⚛️ Quantum Consciousness",
      subtitle: "Merging quantum computing with consciousness",
      description: "Unlock the power of quantum consciousness technology",
      link: "/pages/RevolutionaryTechShowcase2036",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80"
    },
    {
      title: "🌌 Interdimensional Computing",
      subtitle: "Computing across multiple dimensions",
      description: "Solve impossible problems with interdimensional technology",
      link: "/pages/NextGenInnovationHub2036",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} text-white py-16 transition-all duration-1000`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
                🌟 REVOLUTIONARY TECHNOLOGY • 2036
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                {slides[currentSlide].description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={slides[currentSlide].link}
                  className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-8xl text-center mb-4 opacity-80">
                {slides[currentSlide].title.split(' ')[0]}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"></div>
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

      {/* Quick Access Grid */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">🚀 Quick Access to Revolutionary Tech</h3>
            <p className="text-gray-300">Explore our most advanced technologies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.color} text-white p-6 rounded-lg hover:scale-105 transition-all duration-300 text-center ${
                  currentSlide === index ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="text-4xl mb-3">{slide.title.split(' ')[0]}</div>
                <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-90">{slide.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2036;