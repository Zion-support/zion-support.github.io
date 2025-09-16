import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Next-Gen AI Breakthrough 2032",
      description: "Experience the most advanced artificial intelligence systems that are reshaping reality itself",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/NextGenAIBreakthrough2032",
      features: ["Conscious AI Systems", "Quantum AI Processing", "Interdimensional AI"]
    },
    {
      id: 2,
      title: "Quantum Reality 2033",
      description: "Step into a world where quantum computing has transcended the boundaries of reality itself",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/QuantumReality2033",
      features: ["Quantum Wave Computing", "Reality Manipulation", "Universal Quantum Network"]
    },
    {
      id: 3,
      title: "Transcendent Tech 2034",
      description: "Experience technology that transcends the boundaries of what was once thought possible",
      image: "🌟",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/TranscendentTech2034",
      features: ["Mind-Machine Fusion", "Reality Simulation", "Interstellar Travel"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2032-2034
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Ultimate Technology Experience</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping our reality and defining the future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className={`text-lg ${slide.textColor} mb-6 max-w-2xl mx-auto`}>
                        {slide.description}
                      </p>
                      <div className="flex justify-center space-x-4 mb-6">
                        {slide.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        Explore {slide.title.split(' ')[0]} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
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

        {/* Quick Access Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {slides.map((slide) => (
            <Link
              key={slide.id}
              to={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} backdrop-blur-sm rounded-lg p-4 border ${slide.borderColor} hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2">{slide.image}</div>
              <h4 className="font-semibold mb-1">{slide.title.split(' ')[0]}</h4>
              <p className={`text-sm ${slide.textColor}`}>
                {slide.description.substring(0, 60)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentCarousel2032;