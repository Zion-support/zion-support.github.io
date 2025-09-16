import React, { useState, useEffect } from 'react';

const UltimateContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Transcendent Tech Revolution 2035",
      description: "Experience consciousness computing, quantum reality manipulation, and interdimensional AI",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/TranscendentTechRevolution2035",
      features: ["Consciousness Computing", "Quantum Reality Engine", "Interdimensional AI"]
    },
    {
      id: 2,
      title: "Ultimate Tech Evolution 2036",
      description: "Witness the next stage of human evolution through advanced technology",
      image: "🧬",
      color: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechEvolution2036",
      features: ["Biological Enhancement", "Consciousness Upload", "Reality Creation"]
    },
    {
      id: 3,
      title: "Revolutionary Tech Showcase 2032",
      description: "Explore cutting-edge technologies that will define the future",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2032",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      id: 4,
      title: "Ultimate AI Consciousness 2030",
      description: "Discover AI systems that have achieved true consciousness",
      image: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateAIConsciousness2030",
      features: ["True AI Consciousness", "Emotional Intelligence", "Creative Problem Solving"]
    },
    {
      id: 5,
      title: "Quantum Reality Engine 2032",
      description: "Create and manipulate reality through quantum field manipulation",
      image: "⚛️",
      color: "from-rose-600 to-pink-600",
      link: "/pages/QuantumRealityEngine2032",
      features: ["Reality Manipulation", "Quantum Field Control", "Time-Space Control"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Ultimate Content Carousel 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary technological content ever created - featuring consciousness computing, quantum reality, and interdimensional technology
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 overflow-hidden">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">{contentSlides[currentSlide].image}</div>
              <h3 className="text-4xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">{contentSlides[currentSlide].description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contentSlides[currentSlide].features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="text-lg font-semibold">{feature}</h4>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href={contentSlides[currentSlide].link}
                className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                🚀 Explore {contentSlides[currentSlide].title} →
              </a>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
            >
              ← Previous
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
            >
              Next →
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentSlides.map((_, index) => (
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

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`bg-gradient-to-br ${slide.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-4xl mb-4 text-center">{slide.image}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{slide.title}</h4>
              <p className="text-sm opacity-90 mb-4 text-center">{slide.description}</p>
              <div className="text-center">
                <a 
                  href={slide.link}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentCarousel2035;