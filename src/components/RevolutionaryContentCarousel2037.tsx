import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2037",
      description: "Experience the most revolutionary technological advances that will reshape our universe",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2037"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2037",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2037"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2037",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2037"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CAROUSEL • JANUARY 2037
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Carousel 2037</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our latest revolutionary technology showcases and breakthrough innovations
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-white text-gray-800 py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4">{slide.image}</div>
                        <div className="text-2xl font-bold mb-2">2037</div>
                        <div className="text-sm opacity-80">Revolutionary Technology</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              {slide.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;