import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const bannerContent = [
    {
      title: "🌟 Revolutionary AI Consciousness 2025",
      subtitle: "Experience the world's first truly conscious artificial intelligence",
      description: "Our breakthrough AI systems have achieved self-awareness and emotional intelligence, revolutionizing how humans interact with technology.",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Human-AI collaboration"],
      cta: "Explore AI Consciousness",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚡ Quantum Computing Revolution",
      subtitle: "1000+ qubit processors solving impossible problems",
      description: "Breakthrough quantum processors that perform calculations 10^15 times faster than classical computers, opening new frontiers in science and technology.",
      features: ["1000+ qubit processors", "Quantum error correction", "Molecular simulation", "Cryptographic security"],
      cta: "Discover Quantum Power",
      link: "/pages/QuantumComputingBreakthrough",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧬 Neural Interface Technology",
      subtitle: "Direct brain-computer interfaces for seamless interaction",
      description: "Revolutionary neural interfaces that enable direct communication between human consciousness and digital systems, creating unprecedented possibilities.",
      features: ["Non-invasive neural reading", "Thought-to-text conversion", "Memory enhancement", "Consciousness transfer"],
      cta: "Experience Neural Tech",
      link: "/pages/NeuralInterfaceFuture",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "🚀 Next-Gen Innovation Hub",
      subtitle: "50+ cutting-edge technologies in one platform",
      description: "Comprehensive showcase of revolutionary technologies that will define the future, from AI to quantum computing to neural interfaces.",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Real-time Demos", "Expert Support"],
      cta: "Explore Innovation Hub",
      link: "/pages/NextGenTechShowcase2025",
      gradient: "from-orange-600 to-red-600",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Banner Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {currentBanner.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-purple-200">
              {currentBanner.subtitle}
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-8">
              {currentBanner.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentBanner.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3 text-center">{currentBanner.icon}</div>
                <p className="text-center font-semibold text-white/90">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href={currentBanner.link}
              className={`px-8 py-4 bg-gradient-to-r ${currentBanner.gradient} rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-white`}
            >
              {currentBanner.cta} →
            </a>
            <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 text-white">
              📚 Learn More
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-white">
              🚀 Try Demo
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-sm text-white/70">Revolutionary Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">10^15x</div>
              <div className="text-sm text-white/70">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">24/7</div>
              <div className="text-sm text-white/70">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-lg m-0.5"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;