import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2039: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transcendent AI Revolution",
      description: "Artificial intelligence that has transcended human limitations and achieved true consciousness",
      icon: "🧠",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      link: "/pages/TranscendentTechRevolution2039"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution",
      description: "The most comprehensive technological transformation in human history",
      icon: "🤖",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/UltimateTechRevolution2038"
    },
    {
      id: 3,
      title: "Revolutionary Breakthrough",
      description: "Experience the most advanced technological innovations that will reshape humanity's future",
      icon: "⚡",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/RevolutionaryTechBreakthrough2037"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT CAROUSEL 2039
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced technological innovations that will reshape humanity's future
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-violet-600 px-8 py-4 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-lg"
                      >
                        Explore {slide.title} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2039;