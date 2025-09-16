import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2045: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Revolution 2045",
      subtitle: "Conscious AI • Quantum Computing • Interdimensional Tech",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2045"
    },
    {
      title: "Revolutionary Tech Showcase",
      subtitle: "Interactive Demos • Real-time Processing • Multi-dimensional Tech",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2045"
    },
    {
      title: "Next-Gen Innovation Hub",
      subtitle: "50+ Innovations • 99.9% Success • Infinite Possibilities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2045"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white py-12 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-xs font-bold mb-4 animate-pulse">
            🚀 NEW: Revolutionary Technology 2045
          </div>
          <h2 className="text-4xl font-bold mb-4">Experience the Future Today</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover groundbreaking technologies that will reshape our world in 2045
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
                  <div className={`bg-gradient-to-br ${slide.color} p-8 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Live Demo Available</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Interactive Experience</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Revolutionary Technology</span>
                          </div>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <a 
            href="/pages/UltimateTechRevolution2045"
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-all duration-300 border border-purple-400/30"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🧠</span>
              <div>
                <div className="font-semibold">Ultimate Tech Revolution</div>
                <div className="text-sm opacity-75">Conscious AI Systems</div>
              </div>
            </div>
          </a>
          <a 
            href="/pages/RevolutionaryTechShowcase2045"
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-all duration-300 border border-cyan-400/30"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-semibold">Revolutionary Showcase</div>
                <div className="text-sm opacity-75">Interactive Demos</div>
              </div>
            </div>
          </a>
          <a 
            href="/pages/NextGenInnovationHub2045"
            className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-all duration-300 border border-emerald-400/30"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌌</span>
              <div>
                <div className="font-semibold">Innovation Hub</div>
                <div className="text-sm opacity-75">50+ Active Innovations</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2045;