import React, { useState, useEffect } from 'react';

const NextGenContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Next-Gen Innovation Hub 2025",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Technology",
      description: "Discover the most revolutionary technologies that will reshape our world in 2025",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🌟"
    },
    {
      id: 2,
      title: "Conscious AI Systems 2025",
      subtitle: "Emotional Intelligence • Creative Problem Solving • Self-Learning",
      description: "The first truly conscious artificial intelligence that experiences emotions and creativity",
      link: "/pages/ConsciousAI2025",
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-900 via-indigo-900 to-pink-900",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Quantum Consciousness 2025",
      subtitle: "Quantum Neural Networks • Consciousness Amplification • Multi-dimensional Thinking",
      description: "Direct neural interface with quantum computing for enhanced cognitive processing",
      link: "/pages/QuantumConsciousness2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Interdimensional Technology 2025",
      subtitle: "Dimensional Portals • Reality Shifting • Parallel Universe Access",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      link: "/pages/InterdimensionalTech2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`bg-gradient-to-r ${currentBannerData.bgColor} text-white py-12 mb-8 relative overflow-hidden transition-all duration-500`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3 animate-bounce">{currentBannerData.icon}</span>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                🚀 NEW BREAKTHROUGH TECHNOLOGY
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {currentBannerData.title}
            </h2>
            
            <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium">
              {currentBannerData.subtitle}
            </p>
            
            <p className="text-lg mb-6 text-white/80 max-w-2xl">
              {currentBannerData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={currentBannerData.link}
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentBannerData.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg group`}
              >
                Explore Now
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="/pages/NextGenInnovationHub2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              >
                View All Innovations
              </a>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-8xl animate-pulse">{currentBannerData.icon}</span>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/25 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Banner indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextGenContentBanner2025;