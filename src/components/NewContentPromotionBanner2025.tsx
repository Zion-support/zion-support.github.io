import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary AI Solutions 2025",
      description: "Experience groundbreaking AI technologies that are reshaping industries",
      link: "/pages/RevolutionaryAISolutions2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Revolution",
      description: "Discover quantum-powered solutions that solve impossible problems",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Technology",
      description: "Connect your mind directly to AI systems with neural interfaces",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE: Next-Gen Innovation Hub",
      description: "Explore the most advanced technologies shaping our future",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${promotions[currentSlide].bgColor} backdrop-blur-sm rounded-2xl p-8 text-white relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold animate-pulse">
                  NEW CONTENT
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-semibold">
                  JANUARY 2025
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {promotions[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                {promotions[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={promotions[currentSlide].link}
                  className={`bg-gradient-to-r ${promotions[currentSlide].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block ml-8">
              <div className="text-8xl opacity-20">
                {currentSlide === 0 && "🤖"}
                {currentSlide === 1 && "⚛️"}
                {currentSlide === 2 && "🧠"}
                {currentSlide === 3 && "🌟"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;