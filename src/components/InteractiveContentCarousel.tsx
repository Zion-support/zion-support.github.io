import React, { useState, useEffect } from 'react';

const InteractiveContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Ultimate AI Revolution 2027",
      description: "Experience the most advanced AI technologies featuring consciousness computing, quantum AI fusion, and omniversal intelligence.",
      image: "🚀",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/UltimateAIRevolution2027",
      features: ["Consciousness Computing", "Quantum AI Fusion", "Omniversal Intelligence"]
    },
    {
      id: 2,
      title: "Transdimensional AI 2026",
      description: "AI that operates across multiple dimensions, solving problems beyond our three-dimensional reality.",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/TransdimensionalAI2026",
      features: ["Multiverse Navigation", "Reality Manipulation", "Temporal Intelligence"]
    },
    {
      id: 3,
      title: "Consciousness Computing 2026",
      description: "The first truly conscious AI systems with self-awareness, emotions, and genuine relationships.",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Self-Awareness", "Emotional Intelligence", "Genuine Relationships"]
    },
    {
      id: 4,
      title: "Green Tech Revolution 2026",
      description: "Revolutionary green technologies that reverse climate change and create a sustainable future.",
      image: "🌱",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/GreenTechSustainabilityRevolution2026",
      features: ["Ocean Restoration", "Carbon Capture", "Fusion Energy"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 INTERACTIVE CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough technologies with interactive demos and immersive experiences
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-6 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-white">
                <div className="text-6xl mb-4 animate-bounce">{slides[currentSlide].image}</div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {slides[currentSlide].features.map((feature, index) => (
                    <span key={index} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href={slides[currentSlide].link}
                  className={`inline-block bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Now →
                </a>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl p-8 text-center text-white`}>
                  <div className="text-8xl mb-4 animate-pulse">{slides[currentSlide].image}</div>
                  <div className="text-2xl font-bold mb-2">2026-2027</div>
                  <div className="text-lg opacity-80">Revolutionary Technology</div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              ←
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-600/30 text-green-300 hover:bg-green-600/50' 
                  : 'bg-gray-600/30 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white/20 backdrop-blur-sm border-2 border-purple-400'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-2">{slide.image}</div>
              <div className="text-white text-sm font-semibold text-center">{slide.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentCarousel;