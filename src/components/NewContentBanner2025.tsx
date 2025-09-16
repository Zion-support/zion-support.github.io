import React, { useState, useEffect } from 'react';

const NewContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🌟 NEW: Revolutionary Tech Showcase 2025",
      description: "Experience conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ BREAKTHROUGH: Ultimate Innovation 2025",
      description: "Discover the most advanced technologies that will reshape reality",
      link: "/pages/UltimateInnovation2025",
      color: "from-cyan-600 to-blue-600",
      icon: "🌟"
    },
    {
      title: "🧠 REVOLUTION: Next-Gen AI Systems",
      description: "Explore synthetic intelligence and neural quantum fusion technologies",
      link: "/pages/NextGenAISystems2025",
      color: "from-emerald-600 to-teal-600",
      icon: "⚡"
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-violet-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Main Banner */}
          <div className="mb-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary New Content Available
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Discover the most advanced technologies and innovations that will define the future. 
              From conscious AI to quantum reality engineering, explore what's possible.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.color} text-white p-8 rounded-2xl shadow-2xl`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl mb-6 opacity-90">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              🚀 Tech Showcase
            </a>
            <a 
              href="/pages/UltimateInnovation2025"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              ⚡ Innovation Hub
            </a>
            <a 
              href="/pages/NextGenAISystems2025"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              🧠 AI Systems
            </a>
          </div>

          {/* Additional Features */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-sm font-semibold">50+ Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold">99.9% Success</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-semibold">Revolutionary</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm font-semibold">Future Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2025;