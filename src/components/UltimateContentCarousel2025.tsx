import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ChevronLeftChevronRightStarArrowRightPlayDownloadUsersTrendingUp

const UltimateContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Showcase 2025",
      description: "Experience the most revolutionary technologies that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechShowcase2025"
    },
    {
      id: 2,
      title: "Revolutionary AI Services 2025",
      description: "Transform your business with cutting-edge AI services",
      image: "🤖",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryAIServices2025"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2025",
      description: "Discover and implement revolutionary technologies",
      image: "🧠",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/NextGenInnovationHub2025"
    },
    {
      id: 4,
      title: "Conscious AI Systems",
      description: "AI with self-awareness and emotional intelligence",
      image: "🌟",
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/UltimateTechShowcase2025"
    },
    {
      id: 5,
      title: "Quantum Computing Revolution",
      description: "Quantum processors and quantum algorithms",
      image: "⚛️",
      gradient: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-100",
      link: "/pages/NextGenInnovationHub2025"
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
    <divsection
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <divdiv
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Ultimate Content Carousel 2025
          </divdiv>
          
          <divh2
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Revolutionary Technology
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Showcase
            </span>
          </divh2>
          
          <divp
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the most advanced AI and technology solutions that are reshaping 
            industries and transforming businesses worldwide.
          </divp>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className={`text-xl ${slide.textColor} mb-8 max-w-3xl mx-auto`}>
                        {slide.description}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={slide.link}
                          className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </divdiv>
            </div>
          </div>

          {/* Navigation Arrows */}
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <divdiv
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>50,000+ Active Users</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Play className="w-5 h-5" />
              <span>Interactive Demos Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Download className="w-5 h-5" />
              <span>Free Resources & Guides</span>
            </div>
          </div>
        </div>
      </div>
    </divsection>
  );
};

export default UltimateContentCarousel2025;
