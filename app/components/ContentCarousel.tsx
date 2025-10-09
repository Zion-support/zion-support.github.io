import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business processes with intelligent automation that learns and adapts.",
      image: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem solving and optimization.",
      image: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance for your critical data and infrastructure.",
      image: "🔒",
      color: "from-green-500 to-emerald-500"
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

<<<<<<< HEAD
  return (
    <section className="mb-16" aria-labelledby="carousel-heading">
      <h2 id="carousel-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
        Featured Solutions
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 text-center text-white`}>
                  <div className="text-6xl md:text-8xl mb-6">{slide.image}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    {slide.description}
=======
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content Spotlight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular and impactful content that's transforming enterprises worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image/Visual section */}
              <div className="relative h-64 lg:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">{currentItem.image}</div>
                  <div className="text-2xl font-bold mb-2">{currentItem.category}</div>
                  <div className="text-lg opacity-90">{currentItem.readTime}</div>
                </div>
                
                {/* Stats overlay */}
                {currentItem.stats && (
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {formatNumber(currentItem.stats.views)}
                      </div>
                      <div className="text-sm text-white opacity-90">views</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="p-8 lg:p-12">
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {currentItem.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {currentItem.description}
>>>>>>> resolve-merge-conflicts-1759965566
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
