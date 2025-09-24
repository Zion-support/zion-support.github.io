import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2042: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Breakthrough 2042",
      description: "Experience the most revolutionary technological advances that will reshape our universe",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2042"
    },
    {
      title: "Revolutionary Tech Showcase 2042",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      icon: "🚀",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2042"
    },
    {
      title: "Next-Gen Innovation Hub 2042",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2042"
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎠 REVOLUTIONARY CAROUSEL • JANUARY 2042
          </div>
          <h2 className="text-4xl font-bold mb-4">🎠 Revolutionary Content Carousel 2042</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our latest revolutionary technologies through an interactive carousel experience
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-12 text-center">
                  <div className="text-8xl mb-6">{slide.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={slide.link}
                      className={`bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore {slide.title.split(' ')[0]} →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2">{slide.icon}</div>
              <div className="font-semibold">{slide.title.split(' ')[0]}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2042;