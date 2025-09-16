import React, { useState, useEffect } from 'react';

const UltimateContentBanner2045: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2045",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Reality, Interdimensional Computing",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2045",
      subtitle: "Interactive demonstrations of cutting-edge technology",
      description: "Live demos, Real-time metrics, Future technology",
      color: "from-cyan-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "🧠 NEXT-GEN INNOVATION HUB 2045",
      subtitle: "Build the future with revolutionary tools and platforms",
      description: "50+ Active Innovations, 100M+ Users, ∞ Possibilities",
      color: "from-emerald-600 to-teal-600",
      icon: "🛠️"
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
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className={`bg-gradient-to-r ${slides[currentSlide].color} text-white py-8 px-4 relative`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3 animate-bounce">{slides[currentSlide].icon}</span>
              <h2 className="text-3xl md:text-4xl font-bold animate-pulse">
                {slides[currentSlide].title}
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl mb-4 font-semibold">
              {slides[currentSlide].subtitle}
            </p>
            
            <p className="text-lg mb-6 opacity-90">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/pages/UltimateTechBreakthrough2045" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Breakthroughs →
              </a>
              <a 
                href="/pages/RevolutionaryTechShowcase2045" 
                className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border-2 border-white/30 hover:border-white/50"
              >
                View Showcase →
              </a>
              <a 
                href="/pages/NextGenInnovationHub2045" 
                className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border-2 border-white/30 hover:border-white/50"
              >
                Enter Innovation Hub →
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
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 text-2xl animate-bounce">⚡</div>
        <div className="absolute top-4 right-4 text-2xl animate-bounce delay-1000">🌟</div>
        <div className="absolute bottom-4 left-4 text-2xl animate-bounce delay-2000">🚀</div>
        <div className="absolute bottom-4 right-4 text-2xl animate-bounce delay-500">🧠</div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2045;