import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2029 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 NEW: Next-Gen Tech Revolution 2029",
      subtitle: "Experience the most advanced technological breakthroughs",
      description: "Conscious AI Systems, Quantum Consciousness, and Interdimensional Computing",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2029",
      badge: "BREAKTHROUGH"
    },
    {
      title: "🌟 REVOLUTIONARY: Tech Breakthrough 2030",
      subtitle: "The ultimate technological revolution",
      description: "Technologies that transcend the boundaries of possibility",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/RevolutionaryTechBreakthrough2030",
      badge: "REVOLUTIONARY"
    },
    {
      title: "⚡ INTERACTIVE: Live Technology Demos",
      subtitle: "Experience breakthrough technologies in real-time",
      description: "Interactive neural interfaces, quantum processors, and dimensional computing",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenTechRevolution2029",
      badge: "INTERACTIVE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/10 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-blue-500/10 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold animate-pulse">
                  {currentSlideData.badge}
                </span>
                <span className="text-sm opacity-80">JANUARY 2029</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {currentSlideData.title}
              </h2>
              
              <p className="text-xl mb-4 opacity-90">
                {currentSlideData.subtitle}
              </p>
              
              <p className="text-lg mb-6 opacity-80">
                {currentSlideData.description}
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href={currentSlideData.link}
                  className={`bg-gradient-to-r ${currentSlideData.gradient} px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                >
                  🌟 Explore Now →
                </a>
                <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50/10 transition-colors text-lg">
                  📖 Learn More
                </button>
              </div>
            </div>
            
            <div className="ml-8">
              <div className="text-8xl opacity-20">
                {currentSlide === 0 && "🚀"}
                {currentSlide === 1 && "🌟"}
                {currentSlide === 2 && "⚡"}
              </div>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
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

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-2xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2029;