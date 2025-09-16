import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2027",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/UltimateTechBreakthrough2027",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2027",
      subtitle: "Interactive Demos • Real-time Processing • Multi-dimensional Tech",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      link: "/pages/RevolutionaryTechShowcase2027",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2027",
      subtitle: "50+ Active Innovations • 99.9% Success Rate • Infinite Possibilities",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      link: "/pages/NextGenInnovationHub2027",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000`}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gradient-to-r from-black/20 to-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-bold text-black animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2027
                </div>
                <div className="flex space-x-1">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h2>
              
              <p className="text-lg text-gray-200 mb-3">
                {slides[currentSlide].subtitle}
              </p>
              
              <p className="text-gray-300 mb-4 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={slides[currentSlide].link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${slides[currentSlide].color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group`}
                >
                  Explore Now
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <button className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className={`h-full bg-gradient-to-r ${slides[currentSlide].color} transition-all duration-100 ease-linear`}
          style={{
            width: '100%',
            animation: 'progress 6s linear infinite'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryContentBanner2027;