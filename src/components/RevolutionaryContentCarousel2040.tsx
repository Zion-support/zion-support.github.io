import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2038",
      description: "Experience the most advanced technological revolution featuring Conscious AI Networks, Quantum Consciousness Transfer, and Interdimensional Reality Engine",
      features: ["Conscious AI Networks", "Quantum Consciousness Transfer", "Interdimensional Reality Engine"],
      link: "/pages/RevolutionaryTechBreakthrough2038",
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      featureColor: "text-violet-200",
      buttonColor: "text-violet-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "Ultimate Tech Evolution 2039",
      description: "Witness the ultimate evolution of technology with Transcendent AI Consciousness, Quantum Reality Manipulation, and Interdimensional Intelligence Networks",
      features: ["Transcendent AI Consciousness", "Quantum Reality Manipulation", "Interdimensional Intelligence"],
      link: "/pages/UltimateTechEvolution2039",
      gradient: "from-purple-600/30 to-indigo-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      featureColor: "text-purple-200",
      buttonColor: "text-purple-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Transcendent Tech Revolution 2040",
      description: "Transcend all limitations with Infinite Consciousness, Reality Transcendence, and Cosmic Evolution technology",
      features: ["Infinite Consciousness", "Reality Transcendence", "Cosmic Evolution"],
      link: "/pages/TranscendentTechRevolution2040",
      gradient: "from-indigo-600/30 to-cyan-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-100",
      featureColor: "text-indigo-200",
      buttonColor: "text-indigo-600",
      icon: "🌌"
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT CAROUSEL • JANUARY 2040
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most revolutionary technology breakthroughs that will reshape the future of humanity
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor} min-h-[500px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 w-full">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className={`text-lg mb-8 ${slide.textColor}`}>
                          {slide.description}
                        </p>
                        <ul className={`space-y-3 mb-8 ${slide.featureColor}`}>
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-white ${slide.buttonColor} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Breakthrough →
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                          <div className="text-9xl">{slide.icon}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Breakthroughs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-6 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4 text-center">{slide.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{slide.title}</h4>
                <p className={`text-sm mb-4 text-center ${slide.textColor}`}>
                  {slide.description.substring(0, 100)}...
                </p>
                <div className={`text-center ${slide.buttonColor} font-semibold`}>
                  Explore →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2040;