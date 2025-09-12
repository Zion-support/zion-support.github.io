import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DynamicContentCarousel2025() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Content Showcase",
      description: "Experience the most revolutionary AI technologies of 2025 through interactive demos and real-world case studies",
      link: "/ai-2025-breakthrough-content-showcase",
      badge: "NEW",
      color: "from-red-500 to-pink-500",
      icon: "🚀",
      image: "/images/ai-2025-showcase.jpg",
      stats: { views: "12.5K", rating: 5, duration: "15 min" }
    },
    {
      id: 2,
      title: "15,000% ROI Finance Transformation",
      description: "Discover how a global financial institution achieved unprecedented returns using AI 2025 breakthrough technologies",
      link: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      badge: "BREAKTHROUGH",
      color: "from-green-500 to-blue-500",
      icon: "💰",
      image: "/images/finance-transformation.jpg",
      stats: { views: "8.7K", rating: 5, duration: "12 min" }
    },
    {
      id: 3,
      title: "AI 2026 Future Predictions Interactive",
      description: "Explore the revolutionary AI breakthroughs predicted for 2026 through our interactive timeline and demos",
      link: "/ai-2026-future-predictions-interactive",
      badge: "FUTURE",
      color: "from-purple-500 to-cyan-500",
      icon: "🔮",
      image: "/images/ai-2026-predictions.jpg",
      stats: { views: "15.2K", rating: 5, duration: "20 min" }
    },
    {
      id: 4,
      title: "Quantum Computing Solutions Showcase",
      description: "Experience the future of computing with revolutionary quantum solutions and interactive demonstrations",
      link: "/quantum-computing-solutions-showcase",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      icon: "⚛️",
      image: "/images/quantum-computing.jpg",
      stats: { views: "9.8K", rating: 5, duration: "18 min" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl animate-pulse">{currentContent.icon}</div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${currentContent.color} text-white`}>
                  {currentContent.badge}
                </span>
                <span className="text-blue-200 text-sm">Featured Content</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {currentContent.title}
              </h2>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label={isAutoPlaying ? 'Pause' : 'Play'}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-semibold">{currentContent.stats.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-white font-semibold">{currentContent.stats.views}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-semibold">{currentContent.stats.duration}</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  href={currentContent.link}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Content
                </Link>
                <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentContent.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Preview</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Experience this content with interactive demos and real-time data
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-2">
                      {currentContent.badge === 'BREAKTHROUGH' ? '15,000% ROI' : 
                       currentContent.badge === 'FUTURE' ? '95% Probability' :
                       currentContent.badge === 'REVOLUTIONARY' ? '10,000x Faster' : '99.7% Accuracy'}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {currentContent.badge === 'BREAKTHROUGH' ? 'Achieved in 8 months' :
                       currentContent.badge === 'FUTURE' ? 'Predicted accuracy' :
                       currentContent.badge === 'REVOLUTIONARY' ? 'Quantum processing' : 'Neural accuracy'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-between px-6 pb-6">
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}