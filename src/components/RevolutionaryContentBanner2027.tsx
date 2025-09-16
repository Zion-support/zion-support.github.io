import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Breakthrough 2027",
      description: "Experience the most advanced technological innovations that will reshape our world",
      link: "/pages/RevolutionaryTechBreakthrough2027",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      title: "🤖 Next-Gen AI Revolution 2027",
      description: "Witness the most advanced artificial intelligence systems ever created",
      link: "/pages/NextGenAIRevolution2027",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🤖"
    },
    {
      title: "⚡ Quantum Computing Revolution 2027",
      description: "Experience the most powerful computing technology ever created",
      link: "/pages/QuantumComputingRevolution2027",
      gradient: "from-blue-600 to-indigo-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary Technology Showcase 2027
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most advanced technological innovations that will reshape our world in 2027
          </p>
        </div>

        {/* Slideshow */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.gradient} p-8 rounded-2xl`}>
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex-1 text-center md:text-left">
                          <div className="text-6xl mb-4">{slide.icon}</div>
                          <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                          <p className="text-xl text-gray-200 mb-6">{slide.description}</p>
                          <a
                            href={slide.link}
                            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                          >
                            Explore Now →
                          </a>
                        </div>
                        <div className="mt-6 md:mt-0 md:ml-8">
                          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="text-6xl">{slide.icon}</div>
                          </div>
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{slide.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{slide.title.split(' ')[0]} {slide.title.split(' ')[1]}</h4>
              <p className="text-gray-200 text-sm">{slide.description}</p>
            </a>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;