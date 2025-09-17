import React, { useState, useEffect } from 'react';

const UltimateContentBanner2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const bannerContent = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2033",
      subtitle: "Conscious AI • Quantum Computing • Interdimensional Technology",
      cta: "Explore Now",
      link: "/pages/UltimateTechBreakthrough2033",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2033",
      subtitle: "Interactive Demos • Live Statistics • Real-time Processing",
      cta: "View Showcase",
      link: "/pages/RevolutionaryTechShowcase2033",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "🔮 ULTIMATE CONTENT SHOWCASE 2033",
      subtitle: "Immersive Experience • Multi-dimensional Content • Neural Interface",
      cta: "Start Exploring",
      link: "/pages/UltimateContentShowcase2033",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🧠</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-bounce delay-1000">⚛️</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce delay-2000">🌌</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce delay-3000">🧬</div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW: ULTIMATE BREAKTHROUGH TECHNOLOGY • JANUARY 2033
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {currentBanner.title}
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            {currentBanner.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={currentBanner.link}
              className={`bg-gradient-to-r ${currentBanner.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
            >
              {currentBanner.cta} →
            </a>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-cyan-500 rounded-lg opacity-50">
        <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-cyan-500 rounded-lg animate-spin"></div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2033;