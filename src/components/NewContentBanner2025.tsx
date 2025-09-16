import React, { useState, useEffect } from 'react';

const NewContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the most advanced technological innovations",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🌟 Ultimate Tech Revolution 2025",
      subtitle: "The most comprehensive technology platform ever created",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/90 to-purple-900/90"
    },
    {
      title: "⚡ Interactive Technology Showcase",
      subtitle: "Explore cutting-edge technologies through interactive demos",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧠 Conscious AI Systems",
      subtitle: "Self-aware AI with emotional intelligence and creativity",
      link: "/pages/ConsciousAI2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "⚛️ Quantum Neural Networks",
      subtitle: "Revolutionary quantum computing with neural integration",
      link: "/pages/QuantumNeural2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const currentBanner = bannerContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentBanner.bgColor} backdrop-blur-sm transition-all duration-1000 ease-in-out`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  {bannerContent.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  NEW CONTENT • JANUARY 2025
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-pulse">
                {currentBanner.title}
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                {currentBanner.subtitle}
              </p>
            </div>
            
            <div className="flex-1 flex justify-end space-x-3">
              <a
                href={currentBanner.link}
                className={`bg-gradient-to-r ${currentBanner.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                Explore Now →
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-black/20">
        <div 
          className={`h-full bg-gradient-to-r ${currentBanner.color} transition-all duration-100 ease-linear`}
          style={{ width: '100%' }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerContent.length) % bannerContent.length)}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerContent.length)}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ›
        </button>
      </div>

      {/* Quick Access Menu */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 space-y-1">
          {bannerContent.map((banner, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to ${banner.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2025;