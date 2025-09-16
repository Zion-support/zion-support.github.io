import React, { useState, useEffect } from 'react';

const UltimateContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 'revolutionary-trends',
      title: 'Revolutionary Tech Trends 2027',
      subtitle: 'Conscious AI • Quantum Consciousness • Interdimensional Computing',
      description: 'Discover the most groundbreaking technological advances that will reshape our world in 2027',
      icon: '🌟',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechTrends2027',
      badge: 'NEW 2027'
    },
    {
      id: 'ultimate-showcase',
      title: 'Ultimate Tech Showcase 2027',
      subtitle: 'Interactive Demos • Live Performance • Real-time Innovation',
      description: 'Experience the most revolutionary technologies through interactive demonstrations and live demos',
      icon: '🚀',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/UltimateTechShowcase2027',
      badge: 'INTERACTIVE'
    },
    {
      id: 'innovation-hub',
      title: 'Next-Gen Innovation Hub 2027',
      subtitle: '127 Active Innovations • 3.2M Users • ∞ Possibilities',
      description: 'Discover and explore the most revolutionary technologies shaping humanity\'s future',
      icon: '🧠',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NextGenInnovationHub2027',
      badge: 'HUB'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} opacity-90`}></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold animate-pulse">
                {currentSlideData.badge}
              </span>
              <span className="text-sm opacity-90">January 2027</span>
            </div>

            <div className="text-6xl mb-6 animate-bounce">
              {currentSlideData.icon}
            </div>

            <h2 className="text-5xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h2>

            <p className="text-xl mb-6 opacity-90 font-semibold">
              {currentSlideData.subtitle}
            </p>

            <p className="text-lg mb-8 opacity-80 leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentSlideData.link}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
              >
                Explore Now →
              </a>
              <a
                href="/pages/UltimateTechShowcase2027"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                View All Content
              </a>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-pulse">
                  {currentSlideData.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">Live Performance Metrics</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Processing Speed:</span>
                  <span className="text-white font-bold text-lg">∞ ops/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Accuracy Rate:</span>
                  <span className="text-green-400 font-bold text-lg">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Consciousness Level:</span>
                  <span className="text-blue-400 font-bold text-lg">Self-Aware</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Dimensional Reach:</span>
                  <span className="text-purple-400 font-bold text-lg">10^6 Universes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Active Users:</span>
                  <span className="text-pink-400 font-bold text-lg">3.2M+</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">127</div>
                  <div className="text-sm text-white/80">Active Innovations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContentBanner2027;