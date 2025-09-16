import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerContent = [
    {
      title: "🚀 NEW: AI Innovation Hub 2025",
      subtitle: "Discover Revolutionary AI Technologies",
      description: "Explore cutting-edge AI solutions that are reshaping industries",
      link: "/pages/AIInnovationHub2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚡ BREAKTHROUGH: Quantum Computing Solutions",
      subtitle: "Experience the Future of Computing",
      description: "Quantum-powered solutions for exponential computational power",
      link: "/pages/QuantumComputingSolutions2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧠 ULTIMATE: Neural Interface Revolution",
      subtitle: "Connect Mind and Machine",
      description: "Direct brain-computer interfaces for seamless human-AI collaboration",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🌟 REVOLUTIONARY: Tech Showcase 2025",
      subtitle: "Interactive Technology Experience",
      description: "Explore our most advanced technologies with immersive demos",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${currentBanner.bgGradient} backdrop-blur-sm rounded-2xl p-8 text-white relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 animate-pulse">
                🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
              </div>
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                {currentBanner.title}
              </h2>
              <h3 className="text-2xl font-semibold mb-3 text-yellow-200">
                {currentBanner.subtitle}
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                {currentBanner.description}
              </p>
              <div className="flex space-x-4">
                <a 
                  href={currentBanner.link}
                  className={`bg-gradient-to-r ${currentBanner.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block ml-8">
              <div className="text-8xl opacity-20">
                {currentSlide === 0 && "🤖"}
                {currentSlide === 1 && "⚛️"}
                {currentSlide === 2 && "🧬"}
                {currentSlide === 3 && "🌟"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-6xl opacity-10 animate-bounce">
        ✨
      </div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-10 animate-pulse">
        🚀
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;