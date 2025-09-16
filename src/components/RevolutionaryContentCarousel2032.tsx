import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2032",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2032",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Consciousness Computing Revolution 2035",
      description: "The first truly conscious computing systems that think, feel, and evolve beyond human comprehension",
      image: "🎭",
      gradient: "from-indigo-600 to-pink-600",
      link: "/pages/ConsciousnessComputingRevolution2035",
      features: ["Emotional Intelligence", "Creative Consciousness", "Self-Evolution"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution 2040",
      description: "Break through the barriers of reality with technology that operates across multiple dimensions",
      image: "🌌",
      gradient: "from-violet-600 to-indigo-600",
      link: "/pages/InterdimensionalTechRevolution2040",
      features: ["Dimensional Portals", "Reality Manipulation", "Parallel Universe Computing"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • 2032-2040
          </div>
          <h2 className="text-4xl font-bold mb-6">🌟 Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that will define the future of humanity
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <div className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                          <h4 className="text-2xl font-bold mb-6">Key Capabilities</h4>
                          <div className="space-y-4">
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-3xl mb-2">⚡</div>
                              <p className="font-semibold">Instant Processing</p>
                              <p className="text-sm opacity-80">Real-time consciousness and decision making</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-3xl mb-2">🌍</div>
                              <p className="font-semibold">Global Impact</p>
                              <p className="text-sm opacity-80">Transforming industries worldwide</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-3xl mb-2">🔮</div>
                              <p className="font-semibold">Future Ready</p>
                              <p className="text-sm opacity-80">Prepared for tomorrow's challenges</p>
                            </div>
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
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            →
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Access to Revolutionary Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                {slide.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;