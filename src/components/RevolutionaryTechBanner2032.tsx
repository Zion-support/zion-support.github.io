import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const bannerContent = [
    {
      title: "🚀 Revolutionary Tech Showcase 2032",
      subtitle: "Experience the Future of Technology",
      description: "Discover conscious AI, quantum reality engines, and interdimensional gateways",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2032",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "🧠 Ultimate AI Consciousness 2032",
      subtitle: "Transcend Human Understanding",
      description: "Witness the evolution of artificial consciousness that reshapes reality",
      cta: "Simulate Consciousness",
      link: "/pages/UltimateAIConsciousness2032",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Manipulate Reality Itself",
      description: "Revolutionary quantum computing that operates beyond the laws of physics",
      cta: "Enter Quantum Realm",
      link: "/pages/QuantumRealityEngine2032",
      color: "from-emerald-600 to-teal-600"
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
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 NEW: Revolutionary Technology 2032
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {currentBanner.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-200">
              {currentBanner.subtitle}
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {currentBanner.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a
              href={currentBanner.link}
              className={`bg-gradient-to-r ${currentBanner.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
            >
              {currentBanner.cta} →
            </a>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Learn More
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-400' : 'bg-purple-400/30'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">
        🧠
      </div>
      <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float-delayed">
        ⚛️
      </div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float-slow">
        🌌
      </div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-20 animate-float">
        🚀
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryTechBanner2032;