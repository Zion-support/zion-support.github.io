import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2042: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Revolution 2042",
      subtitle: "Experience the most revolutionary technological advances",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2042"
    },
    {
      title: "Revolutionary Tech Showcase 2042",
      subtitle: "Interactive showcase of cutting-edge technologies",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2042"
    },
    {
      title: "Next-Gen Innovation Hub 2042",
      subtitle: "Discover the most revolutionary technologies shaping humanity's future",
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
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold mb-4 animate-pulse">
            🌟 NEW CONTENT • JANUARY 2042
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary Technology Content 2042
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies that will define the future of humanity
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} p-8 md:p-12 rounded-2xl`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">{slide.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{slide.subtitle}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
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
          <div className="flex justify-center space-x-2 mt-6">
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

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a 
            href="/pages/UltimateTechRevolution2042"
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2">Ultimate Revolution</h3>
            <p className="text-sm opacity-75">Experience breakthrough technologies</p>
          </a>
          
          <a 
            href="/pages/RevolutionaryTechShowcase2042"
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Tech Showcase</h3>
            <p className="text-sm opacity-75">Interactive technology demos</p>
          </a>
          
          <a 
            href="/pages/NextGenInnovationHub2042"
            className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Innovation Hub</h3>
            <p className="text-sm opacity-75">Discover revolutionary innovations</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2042;