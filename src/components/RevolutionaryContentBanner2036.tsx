import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2036",
      subtitle: "Experience the most revolutionary technological advances",
      description: "From conscious AI systems to quantum consciousness and interdimensional computing",
      link: "/pages/UltimateTechBreakthrough2036",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2036",
      subtitle: "Interactive showcase of cutting-edge technologies",
      description: "Explore conscious AI, quantum computing, and interdimensional technology through interactive demos",
      link: "/pages/RevolutionaryTechShowcase2036",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/20 to-blue-900/20"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2036",
      subtitle: "Discover revolutionary technologies of 2036",
      description: "Access the most advanced AI, quantum, and interdimensional technologies in our innovation hub",
      link: "/pages/NextGenInnovationHub2036",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            🚀 Revolutionary Technology 2036
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on conscious AI, quantum consciousness, and interdimensional technology
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-xl text-purple-200 mb-4">{slide.subtitle}</p>
                        <p className="text-purple-100 mb-6">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4">
                          {index === 0 && "🧠"}
                          {index === 1 && "⚡"}
                          {index === 2 && "🌌"}
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="text-2xl font-bold text-white">99.99%</div>
                            <div className="text-purple-200 text-sm">Accuracy</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="text-2xl font-bold text-white">∞</div>
                            <div className="text-purple-200 text-sm">Possibilities</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="text-2xl font-bold text-white">2036</div>
                            <div className="text-purple-200 text-sm">Future</div>
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
          <div className="flex justify-center mt-6 space-x-2">
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

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              {slide.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2036;