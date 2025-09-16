import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2027",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2027",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2027",
      badge: "BREAKTHROUGH",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Ultimate Tech Showcase 2027",
      subtitle: "Interactive Demos • Live Technology • Real-time Processing",
      description: "Experience the future through interactive demonstrations of our most revolutionary technologies",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechShowcase2027",
      badge: "INTERACTIVE",
      features: ["Live Demos", "Real-time Stats", "Interactive Features"]
    },
    {
      id: 3,
      title: "Revolutionary Tech Insights 2027",
      subtitle: "Expert Analysis • Research Papers • Breakthrough Studies",
      description: "Deep dive into the technologies that are reshaping our world with expert analysis",
      image: "📚",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechInsights2027",
      badge: "INSIGHTS",
      features: ["Expert Analysis", "Research Papers", "Breakthrough Studies"]
    },
    {
      id: 4,
      title: "Ultimate Tech Breakthrough 2026",
      subtitle: "Revolutionary Advances • Cutting-edge Technology • Future Innovation",
      description: "The most revolutionary technological advances that will reshape our world in 2026",
      image: "🌟",
      color: "from-orange-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2026",
      badge: "FEATURED",
      features: ["Revolutionary Advances", "Cutting-edge Tech", "Future Innovation"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? 'opacity-0 scale-95 -translate-x-full'
                : index === (currentSlide + 1) % slides.length
                ? 'opacity-0 scale-95 translate-x-full'
                : 'opacity-0 scale-95'
            } ${isAnimating ? 'transition-all duration-300' : ''}`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.color} flex items-center`}>
              <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="text-white">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mr-3">
                        {slide.badge}
                      </span>
                      <span className="text-sm opacity-80">JANUARY 2027</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl opacity-90 mb-4">{slide.subtitle}</p>
                    <p className="text-lg opacity-80 mb-6">{slide.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {slide.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                    >
                      Explore Now →
                    </Link>
                  </div>
                  
                  {/* Visual */}
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl mb-4 opacity-80">
                      {slide.image}
                    </div>
                    <div className="text-2xl font-bold opacity-60">
                      {slide.title.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2027;