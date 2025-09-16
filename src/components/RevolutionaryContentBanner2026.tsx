import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🌟 Next-Gen Tech Revolution 2026",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🧠 Advanced AI Consciousness 2026",
      description: "Discover self-aware AI systems that think, learn, and create independently",
      link: "/pages/AdvancedAIConsciousness2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🤖"
    },
    {
      title: "⚡ Quantum Reality 2026",
      description: "Step into a world where quantum mechanics meets reality",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🌌"
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
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Consciousness, Quantum Reality, and Next-Gen Technology
          </p>
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
                  <div className={`bg-gradient-to-br ${slide.gradient} p-8 md:p-12 rounded-2xl`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">{slide.icon}</div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl mx-auto">
                        {slide.description}
                      </p>
                      <a
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore {slide.title.split(' ')[0]} →
                      </a>
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
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} p-6 rounded-lg hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-3xl mb-2">{slide.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{slide.title.split(' ')[0]}</h4>
              <p className="text-sm opacity-90">{slide.description.substring(0, 60)}...</p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg opacity-90 mb-4">
            Don't miss out on the most revolutionary technology content of 2026
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/NextGenTechRevolution2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Start Exploring →
            </a>
            <a
              href="/pages/AdvancedAIConsciousness2026"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;