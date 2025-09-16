import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience the most groundbreaking technological innovations reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "Next-Gen Space Technology 2026",
      description: "Revolutionary space technologies making interplanetary travel a reality",
      link: "/pages/NextGenSpaceTech2026",
      color: "from-cyan-600 to-blue-600",
      icon: "🛰️"
    },
    {
      title: "Advanced Biotech Revolution 2026",
      description: "Cutting-edge biotechnology transforming medicine and human enhancement",
      link: "/pages/AdvancedBiotechRevolution2026",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentSlides.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-3xl p-12 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
                <span className="text-2xl font-bold">NEW REVOLUTIONARY CONTENT 2025-2026</span>
                <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{contentSlides[currentSlide].title}</h2>
              <p className="text-xl opacity-95 mb-6 max-w-3xl">
                {contentSlides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={contentSlides[currentSlide].link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-8xl opacity-20">{contentSlides[currentSlide].icon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {contentSlides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            className={`bg-gradient-to-r ${slide.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 ${
              index === currentSlide ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <div className="text-3xl mb-3">{slide.icon}</div>
            <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
            <p className="text-sm opacity-90">{slide.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;