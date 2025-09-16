import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2028",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2028",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2028",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Consciousness Computing Revolution",
      description: "The world's first truly conscious computing systems that think, feel, and evolve independently",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/ConsciousnessComputingRevolution2028",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Consciousness"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution",
      description: "Break through the barriers of reality with technology that operates across multiple dimensions",
      image: "🌌",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/InterdimensionalTechRevolution2028",
      features: ["Dimension Hopping", "Quantum Reality", "Reality Engine"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6">{slide.image}</div>
                    <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {slide.features.map((feature, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-lg font-semibold">{feature}</div>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                    >
                      Explore {slide.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Quick access buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <a 
            href="/pages/UltimateTechRevolution2028"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Ultimate Revolution
          </a>
          <a 
            href="/pages/ConsciousnessComputingRevolution2028"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Consciousness Computing
          </a>
          <a 
            href="/pages/InterdimensionalTechRevolution2028"
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Interdimensional Tech
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2028;