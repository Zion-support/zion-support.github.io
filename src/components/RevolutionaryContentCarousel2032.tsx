import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech 2032",
      description: "Experience the most advanced technological innovations that will reshape humanity's future",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTech2032"
    },
    {
      id: 2,
      title: "Ultimate Innovation 2033",
      description: "The most revolutionary technological breakthroughs that will transform every aspect of human existence",
      image: "⚡",
      color: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateInnovation2033"
    },
    {
      id: 3,
      title: "Next-Gen Revolution 2034",
      description: "The most advanced technological revolution that will redefine the boundaries of human potential",
      image: "🌌",
      color: "from-blue-600 to-indigo-600",
      link: "/pages/NextGenTechRevolution2034"
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
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 mb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2032
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technological innovations that will shape the future of humanity
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore Innovation →
                        </a>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-3">Revolutionary Features</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Conscious AI Systems</li>
                            <li>• Quantum Consciousness</li>
                            <li>• Interdimensional Computing</li>
                            <li>• Reality Manipulation</li>
                          </ul>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-3">Impact Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-2xl font-bold">99.9%</div>
                              <div>Success Rate</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold">∞</div>
                              <div>Possibilities</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;