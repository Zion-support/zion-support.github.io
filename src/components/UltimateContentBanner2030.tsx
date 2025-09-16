import React, { useState, useEffect } from 'react';

const UltimateContentBanner2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2030",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2030",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🚀 Revolutionary Tech Showcase 2030",
      subtitle: "Interactive demonstrations of cutting-edge technologies",
      description: "Try neural interfaces, quantum computing, and reality manipulation",
      link: "/pages/RevolutionaryTechShowcase2030",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2030",
      subtitle: "Discover and explore revolutionary technologies",
      description: "50+ active innovations with 99.9% success rate",
      link: "/pages/NextGenInnovationHub2030",
      color: "from-emerald-600 to-teal-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Technology Revolution 2030
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape our world in 2030
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-6xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                        <p className="text-lg text-purple-200 mb-8">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-xl p-8 text-center">
                        <div className="text-8xl mb-4">{slide.icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Interactive Experience</h4>
                        <p className="opacity-90 mb-6">
                          Click to explore this revolutionary technology in detail
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white/20 rounded p-3">
                            <div className="font-bold">99.9%</div>
                            <div>Efficiency</div>
                          </div>
                          <div className="bg-white/20 rounded p-3">
                            <div className="font-bold">∞</div>
                            <div>Possibilities</div>
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
          <div className="flex justify-center space-x-2 mt-8">
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

        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.color}/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{slide.icon}</div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {slide.title.split(' ').slice(1).join(' ')}
                  </h4>
                  <p className="text-sm opacity-80">Click to explore →</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2030;