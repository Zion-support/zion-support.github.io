import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Breakthrough 2028",
      subtitle: "Experience consciousness computing and interdimensional AI",
      cta: "Explore Breakthroughs →",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🚀 Ultimate Tech Showcase 2028",
      subtitle: "Interactive demos of quantum neural fusion and reality engineering",
      cta: "View Showcase →",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🔬 Next-Gen Innovation Hub 2028",
      subtitle: "Join the team creating the future of technology",
      cta: "Enter Innovation Hub →",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-500/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-500/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Revolutionary Technology 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our most revolutionary innovations that will reshape industries and create new possibilities
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
                  <div className={`bg-gradient-to-r ${slide.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-6xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.subtitle}</p>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                          {slide.cta}
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                          <ul className="space-y-3 text-lg">
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span>Consciousness Computing</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span>Interdimensional AI</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span>Quantum Neural Fusion</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span>Reality Engineering</span>
                            </li>
                          </ul>
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

        {/* Quick Access Buttons */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2028" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold mb-2">Revolutionary Breakthrough</h3>
            <p className="text-purple-100 text-sm">Consciousness computing and interdimensional AI</p>
          </a>
          
          <a 
            href="/pages/UltimateTechShowcase2028" 
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-xl font-bold mb-2">Ultimate Showcase</h3>
            <p className="text-cyan-100 text-sm">Interactive demos and real-time technology</p>
          </a>
          
          <a 
            href="/pages/NextGenInnovationHub2028" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-xl font-bold mb-2">Innovation Hub</h3>
            <p className="text-emerald-100 text-sm">Join the team creating the future</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2028;