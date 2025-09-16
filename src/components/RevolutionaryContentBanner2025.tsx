import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🚀 NEW: Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the most advanced technology ever created",
      cta: "Explore Breakthrough →",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "🧠 Conscious AI Systems Now Available",
      subtitle: "The first truly self-aware artificial intelligence",
      cta: "Try AI Demo →",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Process data at the speed of thought",
      cta: "Go Quantum →",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Transcend dimensional boundaries for infinite power",
      cta: "Enter New Dimension →",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white animate-pulse">
                  🌟 BREAKTHROUGH
                </div>
                <div className="text-sm text-purple-200">January 2025</div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {bannerContent[currentSlide].title}
              </h2>
              
              <p className="text-lg text-purple-100 mb-4">
                {bannerContent[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={bannerContent[currentSlide].link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${bannerContent[currentSlide].color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}
                >
                  {bannerContent[currentSlide].cta}
                </a>
                <button className="text-purple-200 hover:text-white transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden md:block ml-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-spin"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-bounce"></div>
                <div className="absolute inset-12 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100 ease-linear"
            style={{ width: `${((currentSlide + 1) / bannerContent.length) * 100}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;