import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Revolutionary AI Breakthrough 2025",
      subtitle: "Experience the Future of Artificial Intelligence",
      description: "Discover cutting-edge AI solutions that are transforming industries worldwide",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Unlock Infinite Computational Power",
      description: "Explore quantum technologies that solve impossible problems in seconds",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "🧬 Neural Interface Technology",
      subtitle: "Bridge Mind and Machine",
      description: "Connect directly with technology through advanced neural interfaces",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🔮"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className={`text-6xl font-bold mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Revolutionary Technology Showcase
          </h1>
          <p className={`text-2xl opacity-90 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Experience the most advanced technology content featuring AI, quantum computing, and neural interfaces
          </p>
        </div>

        {/* Interactive Slideshow */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${slide.gradient} p-12 flex items-center`}>
                  <div className="flex-1">
                    <div className="text-8xl mb-6">{slide.icon}</div>
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <h3 className="text-2xl mb-4 opacity-90">{slide.subtitle}</h3>
                    <p className="text-xl mb-8 opacity-80">{slide.description}</p>
                    <a
                      href={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105"
                    >
                      Explore Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-4 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Precision Technology</h3>
            <p className="opacity-80">Cutting-edge solutions with 99.9% accuracy and reliability</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="opacity-80">Process complex data and operations in real-time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4">Future Ready</h3>
            <p className="opacity-80">Built for tomorrow's challenges and opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;