import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2032",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2032",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2033",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/NextGenInnovationHub2033"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Carousel 2032
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our latest breakthrough technologies and innovations
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
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor} min-h-[400px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className={`text-xl ${slide.textColor} mb-8`}>
                          {slide.description}
                        </p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                          <ul className="space-y-3 text-lg">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Revolutionary Technology
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Interactive Demos
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Real-time Processing
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Future Innovation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;