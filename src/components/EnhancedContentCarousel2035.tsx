import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2035",
      subtitle: "Synthetic Consciousness • Quantum Reality • Interdimensional AI",
      description: "Experience the most advanced technological revolution featuring synthetic consciousness, quantum reality manipulation, and interdimensional AI that transcends the boundaries of space and time.",
      image: "🧠",
      link: "/pages/UltimateTechRevolution2035",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2035",
      subtitle: "Interactive Demos • Quantum Simulation • Reality Manipulation",
      description: "The most advanced technological showcase featuring interactive demos, quantum simulation, and reality manipulation that will reshape the future of technology.",
      image: "🌟",
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-indigo-600 to-pink-600",
      bgColor: "from-indigo-900 via-purple-900 to-pink-900"
    },
    {
      id: 3,
      title: "Consciousness Technology 2035",
      subtitle: "Synthetic Intelligence • Quantum Computing • Mind-Machine Fusion",
      description: "Revolutionary technology that enhances human consciousness and creates synthetic intelligence through advanced quantum computing and mind-machine fusion.",
      image: "⚡",
      link: "/pages/UltimateTechRevolution2035",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Content Carousel 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced technological content featuring synthetic consciousness, quantum reality, and interdimensional AI
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.bgColor} p-12 rounded-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {slide.title}
                      </h3>
                      <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                      <p className="text-lg opacity-80 mb-8">{slide.description}</p>
                      <div className="flex space-x-4">
                        <a
                          href={slide.link}
                          className={`bg-gradient-to-r ${slide.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Content →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="text-xl font-bold mb-4">Technology Features</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Synthetic Intelligence</span>
                            <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-full text-xs">Active</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Quantum Processing</span>
                            <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-full text-xs">Active</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Reality Manipulation</span>
                            <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-xs">Beta</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Interdimensional Access</span>
                            <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-xs">Beta</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="text-xl font-bold mb-4">Success Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-400">99.99%</div>
                            <div className="text-sm text-gray-300">Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-pink-400">1000x</div>
                            <div className="text-sm text-gray-300">Faster</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">∞</div>
                            <div className="text-sm text-gray-300">Possibilities</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">24/7</div>
                            <div className="text-sm text-gray-300">Available</div>
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
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">
            Join millions of innovators who are already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2035;