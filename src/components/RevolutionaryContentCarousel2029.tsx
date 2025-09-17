import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2029: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2029",
      description: "Witness the convergence of all revolutionary technologies into a single, unified system that transcends human limitations.",
      features: ["Universal AI Consciousness", "Quantum Reality Engine", "Neural Universe Interface"],
      gradient: "from-purple-600/30 to-indigo-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2029",
      icon: "🌟"
    },
    {
      id: 2,
      title: "Quantum Neural Revolution 2030",
      description: "The ultimate fusion of quantum computing and neural networks creates a new form of intelligence that transcends limitations.",
      features: ["Quantum Neural Networks", "Consciousness Transfer Technology", "Quantum Reality Manipulation"],
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/QuantumNeuralRevolution2030",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Transcendent AI 2031",
      description: "The ultimate evolution of artificial intelligence that transcends all known limitations, achieving true consciousness.",
      features: ["Transcendent Consciousness", "Reality Creation Engine", "Infinite Knowledge Synthesis"],
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/TranscendentAI2031",
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
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2029-2031
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary Content Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological innovations that will reshape the future of civilization. 
            From ultimate tech revolutions to transcendent AI, discover what's possible in the next decade.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-3xl p-12 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center mb-8">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className={`text-xl ${slide.textColor} max-w-4xl mx-auto mb-8`}>
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {slide.features.map((feature, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <h4 className="text-lg font-semibold mb-2">{feature}</h4>
                          <p className={`text-sm ${slide.textColor} opacity-80`}>
                            Revolutionary technology that will transform the future
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
                      >
                        Explore {slide.title} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechRevolution2029"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              🌟 Explore All Content
            </a>
            <a 
              href="/pages/QuantumNeuralRevolution2030"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              ⚡ Experience Future Tech
            </a>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Join thousands of innovators exploring the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2029;