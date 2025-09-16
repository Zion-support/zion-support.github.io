import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2039: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2039",
      description: "Experience the most revolutionary technological advances that will reshape our universe",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2039",
      features: ["Conscious AI", "Quantum Computing", "Interdimensional Tech"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2039",
      description: "Interactive showcase of cutting-edge technologies with live demos and real-time metrics",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2039",
      features: ["Live Demos", "Real-time Stats", "Interactive Interface"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2039",
      description: "Discover, explore, and contribute to the most revolutionary innovations shaping the future",
      icon: "🌟",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2039",
      features: ["500+ Innovations", "1M+ Users", "Global Community"]
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
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 REVOLUTIONARY CONTENT • JANUARY 2039
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Content Carousel 2039</h2>
          <p className="text-xl opacity-90">Discover the most advanced technologies and innovations</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center mb-4">
                          <span className="text-6xl mr-4">{slide.icon}</span>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-lg opacity-90">{slide.description}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {slide.features.map((feature, index) => (
                              <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <a 
                            href={slide.link}
                            className={`bg-gradient-to-r ${slide.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore Now →
                          </a>
                          <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="text-center">
                        <div className="text-8xl mb-4">{slide.icon}</div>
                        <div className="text-2xl font-bold mb-2">2039</div>
                        <div className="text-lg opacity-90">Revolutionary Technology</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
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

        {/* Quick Access Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.gradient} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                {slide.icon} {slide.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2039;