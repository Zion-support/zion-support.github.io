import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2042: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Breakthrough 2042",
      description: "Experience revolutionary technologies that will reshape our world",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2042"
    },
    {
      title: "Revolutionary Tech Showcase 2042",
      description: "Interactive demonstrations of cutting-edge technology",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2042"
    },
    {
      title: "Next-Gen Innovation Hub 2042",
      description: "Discover the most advanced innovation ecosystem",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2042"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2042
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2042
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">{slide.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                      >
                        Explore Now →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.color}/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2">{slide.icon}</div>
              <div className="font-semibold text-sm">{slide.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2042;