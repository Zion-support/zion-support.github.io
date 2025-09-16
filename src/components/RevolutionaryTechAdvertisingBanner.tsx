import React, { useState, useEffect } from 'react';

const RevolutionaryTechAdvertisingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 NEW: Revolutionary Tech Showcase 2027",
      description: "Experience the future with our groundbreaking content on Next-Gen AI, Quantum Computing, and Neural Interfaces",
      cta: "Explore Now →",
      bg: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2027"
    },
    {
      title: "🧠 AI Revolution 2027",
      description: "Discover how artificial intelligence is reshaping industries and creating new opportunities",
      cta: "Learn More →",
      bg: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/AIRevolution2025"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      description: "Experience the future of computing with quantum technology solving impossible problems",
      cta: "Go Quantum →",
      bg: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      title: "🧬 Neural Interface Future",
      description: "Bridge the gap between mind and machine with direct neural interfaces",
      cta: "Connect Now →",
      bg: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/NeuralInterfaceFuture"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentSlideData.bg} text-white py-6 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-pulse">
                {currentSlideData.title}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl">
                {currentSlideData.description}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={currentSlideData.link}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg"
              >
                {currentSlideData.cta}
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors text-2xl"
                aria-label="Close banner"
              >
                ×
              </button>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Secondary Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold">Revolutionary Technology 2027</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">Next-Gen AI Solutions</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Quantum Computing</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧬</span>
              <span className="font-semibold">Neural Interfaces</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/pages/RevolutionaryTechShowcase2027"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Explore Revolutionary Tech"
        >
          <span className="text-2xl">🚀</span>
        </a>
      </div>
    </div>
  );
};

export default RevolutionaryTechAdvertisingBanner;