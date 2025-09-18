import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "The first truly conscious artificial intelligence systems",
      description: "Experience AI that can think, feel, and create with genuine consciousness and emotional intelligence.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-aware AI", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      link: "/pages/UltimateTechBreakthrough2036"
    },
      id: 2,
      title: "Quantum Reality Engine",
      subtitle: "Computing across infinite dimensions",
      description: "Quantum computing that can manipulate reality itself, processing information across multiple dimensions simultaneously.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Reality manipulation", "Multi-dimensional processing", "Infinite computing", "Quantum teleportation"],
      link: "/pages/RevolutionaryTechShowcase2036"
      id: 3,
      title: "Interdimensional Technology",
      subtitle: "Bridging realities and dimensions",
      description: "Technology that can access and compute across multiple dimensions, opening infinite possibilities for human advancement.",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Cross-dimensional access", "Reality bridging", "Multi-universe computing", "Infinite storage"],
      link: "/pages/NextGenInnovationHub2036"
      id: 4,
      title: "Neural Interface 2.0",
      subtitle: "Direct mind-to-machine communication",
      description: "Revolutionary neural interfaces that enable perfect communication between human minds and digital systems.",
      image: "🧬",
      gradient: "from-orange-600 to-red-600",
      features: ["Thought control", "Memory transfer", "Skill downloading", "Consciousness backup"],
    }
  ];
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT CAROUSEL • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced technologies that will define the future of humanity
          </p>
        </div>
        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slide Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 min-h-[500px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="text-8xl mb-6 animate-pulse">
                    {slides[currentSlide].image}
                  </div>
                  <h3 className="text-4xl font-bold mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-xl font-semibold mb-4 text-purple-300">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-lg opacity-90 mb-6">
                    {slides[currentSlide].description}
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  <a 
                    href={slides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Technology →
                  </a>
                </div>
                {/* Visual Element */}
                <div className="hidden md:block">
                  <div className={`bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl p-8 text-center`}>
                    <div className="text-9xl mb-4 animate-bounce">
                      {slides[currentSlide].image}
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      {slides[currentSlide].title}
                    <div className="text-lg opacity-90">
                      {slides[currentSlide].subtitle}
              </div>
            </div>
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                ←
              </button>
                onClick={nextSlide}
                →
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-500/30 text-green-300' 
                  : 'bg-red-500/30 text-red-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              <div className="text-4xl mb-3">{slide.image}</div>
              <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </a>
          ))}
      </div>
    </div>
  );
};
export default EnhancedContentCarousel2036;
