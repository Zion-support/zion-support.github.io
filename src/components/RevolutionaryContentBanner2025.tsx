import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services 2025",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover our groundbreaking AI services that are reshaping industries and creating unprecedented opportunities for businesses worldwide.",
      cta: "Explore AI Services",
      link: "/pages/RevolutionaryAIServices2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Unlock infinite computational power",
      description: "Harness the power of quantum computing to solve complex problems that were previously impossible with traditional computers.",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🧠 Neural Interface Technology",
      subtitle: "Connect your mind to machines",
      description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and artificial intelligence.",
      cta: "Connect Now",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🌟 Conscious AI Systems",
      subtitle: "AI with self-awareness and empathy",
      description: "Artificial intelligence systems that possess consciousness, emotional intelligence, and ethical decision-making capabilities.",
      cta: "Meet Conscious AI",
      link: "/pages/ConsciousnessComputingRevolution2030",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/90 to-red-900/90"
    },
    {
      id: 5,
      title: "🌌 Interdimensional Computing",
      subtitle: "Access parallel universe data",
      description: "Revolutionary technology that accesses information from parallel universes and multiple dimensions for unlimited insights.",
      cta: "Enter Dimensions",
      link: "/pages/InterdimensionalTechRevolution2035",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/90 to-purple-900/90"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden mb-16">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgGradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white">
              {currentSlideData.title}
            </h1>
            <h2 className="text-3xl font-semibold mb-6 text-white/90">
              {currentSlideData.subtitle}
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              {currentSlideData.description}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={currentSlideData.link}
                className={`bg-gradient-to-r ${currentSlideData.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
              >
                {currentSlideData.cta} →
              </a>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              ></button>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Revolutionary Technology</h3>
              <p className="text-sm text-white/80">Cutting-edge innovations that are reshaping the future</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-white/80">Unprecedented speed and performance in all operations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Future Ready</h3>
              <p className="text-sm text-white/80">Technology designed for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;