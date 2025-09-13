import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "5,000% ROI Guaranteed",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "⚛️ Quantum Computing 2026 Breakthrough",
      subtitle: "15,000% ROI with Quantum Supremacy",
      link: "/quantum-computing-2026-breakthrough",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-500/20 to-purple-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "🔮 AI 2026-2030 Future Predictions",
      subtitle: "Revolutionary Technology Forecast",
      link: "/ai-2026-2030-future-predictions-breakthrough",
      badge: "FUTURE",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = promotionalContent[currentContent];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide animate-pulse">
              🎉 NEW CONTENT RELEASED
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthrough content featuring cutting-edge AI technology, 
            quantum computing solutions, and future predictions that will transform your business.
          </p>
          
          {/* Featured Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {promotionalContent.map((content, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${content.bgColor} rounded-2xl p-6 border ${content.borderColor} hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  index === currentContent ? 'ring-2 ring-yellow-400/50 shadow-2xl' : ''
                }`}
                onClick={() => window.location.href = content.link}
              >
                {/* Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className={`bg-gradient-to-r ${content.color} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                    {content.badge}
                  </span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {content.subtitle}
                  </p>
                  
                  <Link
                    href={content.link}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${content.color} text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105`}
                  >
                    Explore Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/content-showcase"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Explore All Content
            </Link>
            <Link
              href="/webinars/revolutionary-ai-content-demo"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              📺 Watch Demo
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">New Content Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15,000%</div>
              <div className="text-gray-300">Maximum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2030</div>
              <div className="text-gray-300">Future Predictions</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}