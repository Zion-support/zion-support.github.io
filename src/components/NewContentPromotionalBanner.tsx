import React, { useState, useEffect } from 'react';

const NewContentPromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: '🚀 NEW: Revolutionary Tech Solutions 2025',
      subtitle: 'Experience the future of technology with our cutting-edge solutions',
      cta: 'Explore Revolutionary Solutions',
      link: '/pages/RevolutionaryTechSolutions2025',
      gradient: 'from-purple-600 to-pink-600',
      badge: 'HOT'
    },
    {
      id: 2,
      title: '🤖 AI Business Transformation 2025',
      subtitle: 'Complete your digital transformation with our comprehensive AI suite',
      cta: 'Start Transformation',
      link: '/pages/AIBusinessTransformation2025',
      gradient: 'from-blue-600 to-purple-600',
      badge: 'NEW'
    },
    {
      id: 3,
      title: '⚛️ Quantum Computing Solutions',
      subtitle: 'Unlock exponential computational power with quantum technology',
      cta: 'Go Quantum',
      link: '/pages/QuantumComputingSolutions2025',
      gradient: 'from-indigo-600 to-blue-600',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 4,
      title: '🔮 Ultimate Tech Trends 2025',
      subtitle: 'Discover the most significant technological trends reshaping our world',
      cta: 'Explore Trends',
      link: '/pages/UltimateTechTrends2025',
      gradient: 'from-teal-600 to-cyan-600',
      badge: 'TRENDS'
    },
    {
      id: 5,
      title: '🔮 Technology Insights 2025',
      subtitle: 'Stay ahead with the latest trends and innovations',
      cta: 'Read Insights',
      link: '/pages/TechnologyInsights2025',
      gradient: 'from-cyan-600 to-blue-600',
      badge: 'INSIGHTS'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = promotionalContent[currentPromo];

  return (
    <div className={`bg-gradient-to-r ${current.gradient} text-white rounded-2xl p-6 mb-8 relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                {current.badge}
              </span>
              <span className="text-sm opacity-90">JANUARY 2025</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
            <p className="text-lg opacity-90 mb-4">{current.subtitle}</p>
            <a 
              href={current.link}
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              {current.cta} →
            </a>
          </div>
          
          <div className="hidden md:block ml-8">
            <div className="text-6xl opacity-20">
              {current.id === 1 && '🚀'}
              {current.id === 2 && '🤖'}
              {current.id === 3 && '⚛️'}
              {current.id === 4 && '🔮'}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {promotionalContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPromo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPromo ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-white text-sm">×</span>
      </button>
    </div>
  );
};

export default NewContentPromotionalBanner;