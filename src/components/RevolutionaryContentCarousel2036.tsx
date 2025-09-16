import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "🧠 AI Consciousness 2036",
      description: "The first truly conscious AI systems that think, feel, and create like humans",
      link: "/pages/UltimateAIConsciousness2036",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50"
    },
    {
      id: 2,
      title: "⚡ Tech Showcase 2036",
      description: "Interactive demonstrations of the most advanced technologies ever created",
      link: "/pages/RevolutionaryTechShowcase2036",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      buttonColor: "bg-white text-cyan-600 hover:bg-cyan-50"
    },
    {
      id: 3,
      title: "🚀 Next-Gen Revolution 2036",
      description: "Revolutionary technologies that will reshape humanity's future",
      link: "/pages/NextGenTechRevolution2036",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      buttonColor: "bg-white text-emerald-600 hover:bg-emerald-50"
    },
    {
      id: 4,
      title: "🌌 Quantum Reality Engine",
      description: "Create and manipulate reality itself through quantum field manipulation",
      link: "/pages/RevolutionaryTechShowcase2036",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      textColor: "text-violet-100",
      buttonColor: "bg-white text-violet-600 hover:bg-violet-50"
    },
    {
      id: 5,
      title: "⏰ Temporal Processing",
      description: "Process data across multiple timelines for predictive intelligence",
      link: "/pages/NextGenTechRevolution2036",
      gradient: "from-orange-600/30 to-red-600/30",
      border: "border-orange-400/30",
      textColor: "text-orange-100",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technological innovations that are reshaping our world
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6 animate-pulse">{slide.title.split(' ')[0]}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className={`text-2xl ${slide.textColor} mb-8 max-w-4xl mx-auto`}>
                        {slide.description}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={slide.link}
                          className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${slide.buttonColor} hover:shadow-lg`}
                        >
                          Explore Now →
                        </a>
                        <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                          Learn More
                        </button>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Access to Revolutionary Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${slide.buttonColor} hover:shadow-lg`}
              >
                {slide.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;