import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Showcase 2035",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Technology",
      description: "Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Ultimate Innovation Hub 2035",
      subtitle: "Next-Gen Solutions • Advanced AI • Quantum Breakthroughs",
      description: "Discover cutting-edge innovations that will reshape industries and transform human capabilities",
      link: "/pages/UltimateInnovationHub2035",
      color: "from-cyan-600 to-blue-600",
      icon: "🧠"
    },
    {
      title: "🌌 Transcendent Technology 2035",
      subtitle: "Reality Manipulation • Consciousness Transfer • Dimensional Portals",
      description: "Explore technologies that transcend current limitations and open infinite possibilities",
      link: "/pages/TranscendentTechnology2035",
      color: "from-emerald-600 to-teal-600",
      icon: "🌍"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-90`}></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 NEW BREAKTHROUGH TECHNOLOGY • JANUARY 2035
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {slides[currentSlide].icon} {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href={slides[currentSlide].link}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Explore Now →
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
            <button className="text-white/80 hover:text-white transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-white/20 text-6xl animate-bounce delay-1000">
        ⚡
      </div>
      <div className="absolute bottom-4 left-4 text-white/20 text-4xl animate-pulse delay-2000">
        🌟
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2035;