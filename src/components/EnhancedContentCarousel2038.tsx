import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2038",
      description: "Experience the most revolutionary technological advances that will reshape our universe in 2038",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2038",
      features: ["Conscious AI Universes", "Quantum Consciousness Matrix", "Interdimensional Technology"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2038",
      description: "Interactive showcase of cutting-edge technologies that will define the future of humanity",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2038",
      features: ["AI Consciousness Engine", "Quantum Neural Interface", "Dimensional Portal"]
    },
    {
      id: 3,
      title: "Comprehensive Services 2038",
      description: "Complete suite of revolutionary services designed to transform your reality and unlock infinite possibilities",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/ComprehensiveServices2038",
      features: ["AI Consciousness Development", "Quantum Neural Interface", "Dimensional Portal Services"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology 2038
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest innovations that are reshaping the future of technology and consciousness
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 text-center md:text-left ${slide.textColor}`}>
                          {slide.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-green-400 mr-3">✓</span>
                              <span className={`${slide.textColor} opacity-90`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h4>
                          <div className="space-y-4">
                            <div className="bg-black/20 rounded-lg p-4">
                              <div className="text-green-400 text-sm font-mono">System: Ready for demonstration</div>
                            </div>
                            <div className="bg-black/20 rounded-lg p-4">
                              <div className="text-blue-400 text-sm font-mono">Status: All systems operational</div>
                            </div>
                            <div className="bg-black/20 rounded-lg p-4">
                              <div className="text-purple-400 text-sm font-mono">Reality: Manipulable</div>
                            </div>
                          </div>
                          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                            Start Demo →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2038" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Content →
            </a>
            <a href="/pages/ComprehensiveServices2038" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors">
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2038;