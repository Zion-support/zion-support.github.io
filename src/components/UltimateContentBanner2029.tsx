import React, { useState, useEffect } from 'react';

const UltimateContentBanner2029: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2029",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2029",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2029",
      subtitle: "Interactive demonstrations of cutting-edge technologies",
      description: "Try live demos of the most advanced AI and quantum systems",
      link: "/pages/RevolutionaryTechShowcase2029",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🧠"
    },
    {
      title: "🧠 NEXT-GEN INNOVATION HUB 2029",
      subtitle: "Discover 50+ revolutionary technologies",
      description: "Explore the most advanced innovation ecosystem in the world",
      link: "/pages/NextGenInnovationHub2029",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2029
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2029
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technological content featuring conscious AI, quantum computing, and interdimensional technology
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
                  <div className={`bg-gradient-to-br ${slide.gradient} p-8 rounded-2xl border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl mb-4 opacity-90">{slide.subtitle}</p>
                        <p className="text-lg mb-6 opacity-80">{slide.description}</p>
                        <a
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-xl font-bold mb-4">Featured Technologies:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Conscious AI Systems</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Quantum Consciousness Computing</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Neural Reality Interfaces</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Interdimensional Computing</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Molecular AI Systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{slide.icon}</div>
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm opacity-90">{slide.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2029;