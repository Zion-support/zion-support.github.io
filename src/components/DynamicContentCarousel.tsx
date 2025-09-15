import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Revolutionary AI Solutions 2025',
      subtitle: 'Transform Your Business with Next-Gen AI',
      description: 'Experience the future of business automation with our cutting-edge AI solutions that deliver measurable results and drive unprecedented growth.',
      image: '🚀',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechSolutions2025',
      features: ['Autonomous Intelligence', 'Predictive Analytics', 'Smart Automation']
    },
    {
      id: 2,
      title: 'Quantum Computing Revolution',
      subtitle: 'Unlock Exponential Computational Power',
      description: 'Solve complex problems exponentially faster with our revolutionary quantum computing solutions for cryptography, optimization, and AI.',
      image: '⚛️',
      gradient: 'from-indigo-600 to-blue-600',
      link: '/pages/QuantumComputingSolutions2025',
      features: ['Quantum Cryptography', 'Quantum Optimization', 'Quantum ML']
    },
    {
      id: 3,
      title: 'AI Business Transformation',
      subtitle: 'Complete Digital Transformation Suite',
      description: 'Transform every aspect of your business with our comprehensive AI-powered solutions that automate, optimize, and scale operations.',
      image: '🤖',
      gradient: 'from-blue-600 to-purple-600',
      link: '/pages/AIBusinessTransformation2025',
      features: ['Process Automation', 'Intelligent Analytics', 'Smart Operations']
    },
    {
      id: 4,
      title: 'Comprehensive Services 2025',
      subtitle: 'Complete Technology Ecosystem',
      description: 'Discover our full suite of cutting-edge technology solutions spanning AI, blockchain, cloud, and emerging technologies.',
      image: '🎯',
      gradient: 'from-green-600 to-emerald-600',
      link: '/pages/ComprehensiveServices2025',
      features: ['Full Stack Solutions', 'End-to-End Support', 'Scalable Architecture']
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      {/* Main Carousel */}
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.gradient} p-8 text-white`}>
              <div className="flex items-center justify-between h-full">
                <div className="flex-1 max-w-2xl">
                  <div className="text-6xl mb-4">{slide.image}</div>
                  <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                  <h3 className="text-xl opacity-90 mb-4">{slide.subtitle}</h3>
                  <p className="text-lg opacity-80 mb-6">{slide.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {slide.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">›</span>
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

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-sm">
          {isAutoPlaying ? '⏸️' : '▶️'}
        </span>
      </button>
    </div>
  );
};

export default DynamicContentCarousel;