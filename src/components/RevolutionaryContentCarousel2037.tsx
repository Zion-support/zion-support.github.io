import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Breakthrough 2037",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2037",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2037"
    },
    {
      id: 2,
      title: "⚡ Revolutionary Tech Showcase 2038",
      description: "Discover the most advanced technologies that will revolutionize every aspect of human existence",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2038"
    },
    {
      id: 3,
      title: "🌌 Next-Gen Innovation Hub 2039",
      description: "Explore the most revolutionary technologies shaping humanity's future across all dimensions",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/NextGenInnovationHub2039"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2037-2039
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Carousel 2037-2039</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technological advances that will reshape our world from 2037 to 2039
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                    
                    <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.border}`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h4 className="text-2xl font-bold mb-4">{slide.title}</h4>
                        <p className={`${slide.textColor} mb-6`}>{slide.description}</p>
                        <a 
                          href={slide.link}
                          className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
                        >
                          Explore {slide.title.split(' ')[0]} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3 text-center">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-center">Conscious AI 2.0</h3>
              <p className="text-purple-100 text-sm text-center mb-4">
                Next generation conscious artificial intelligence with enhanced emotional intelligence
              </p>
              <a href="/pages/UltimateTechBreakthrough2037" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
                Explore AI Revolution →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3 text-center">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-center">Quantum Reality Engine</h3>
              <p className="text-cyan-100 text-sm text-center mb-4">
                Revolutionary quantum computing that can manipulate reality at quantum level
              </p>
              <a href="/pages/RevolutionaryTechShowcase2038" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
                View Showcase →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3 text-center">🌌</div>
              <h3 className="text-lg font-bold mb-2 text-center">Multiverse Gateway</h3>
              <p className="text-emerald-100 text-sm text-center mb-4">
                Advanced portal technology for instant travel between dimensions
              </p>
              <a href="/pages/NextGenInnovationHub2039" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
                Enter Innovation Hub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;