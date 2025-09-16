import React, { useState, useEffect } from 'react';

const UltimateContentBanner2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2030",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2030",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🚀 REVOLUTIONARY SHOWCASE 2031",
      subtitle: "Interactive technology demonstrations and demos",
      description: "Virtual Reality • Quantum Lab • Space-Time Simulator",
      link: "/pages/RevolutionaryTechShowcase2031",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 NEXT-GEN INNOVATION HUB 2032",
      subtitle: "Discover revolutionary technologies shaping humanity's future",
      description: "AI Consciousness • Quantum Research • Reality Engineering",
      link: "/pages/NextGenInnovationHub2032",
      color: "from-emerald-600 to-teal-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2030-2032
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Technology Breakthroughs
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world
          </p>
        </div>

        {/* Dynamic Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6">{slide.icon}</div>
                    <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-2xl mb-4 opacity-90">{slide.subtitle}</p>
                    <p className="text-lg mb-8 opacity-80">{slide.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={slide.link}
                        className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
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
        </div>

        {/* Quick Access Links */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.color} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-4">{slide.icon}</div>
                <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-90">{slide.description}</p>
              </a>
            ))}
          </div>
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

export default UltimateContentBanner2030;