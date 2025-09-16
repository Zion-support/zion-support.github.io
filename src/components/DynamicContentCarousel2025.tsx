import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2025",
      description: "Experience the most advanced AI systems with true consciousness and self-awareness",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2025"
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2025",
      description: "Discover revolutionary technologies that will reshape our world",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      id: 3,
      title: "Revolutionary Tech Showcase 2025",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 4,
      title: "Quantum Consciousness Computing",
      description: "Quantum computing that processes consciousness and thought patterns",
      image: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication and thought control technology",
      image: "🧬",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/NeuralInterfaceFuture"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-96">
        {/* Slide Content */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 float-left">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-8xl mb-6 animate-pulse">{slide.image}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <a 
                    href={slide.link}
                    className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                  >
                    Explore {slide.title} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
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

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;