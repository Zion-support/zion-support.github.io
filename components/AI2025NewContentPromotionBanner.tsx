import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      title: "🚀 AI 2025 Next-Generation Breakthroughs",
      description: "Discover revolutionary AI technologies delivering 5,000-15,000% ROI",
      href: "/blog/ai-2025-next-generation-breakthroughs",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500"
    },
    {
      title: "🏆 Global Tech Giant: 900% ROI Success",
      description: "Fortune 500 company achieves unprecedented AI transformation results",
      href: "/case-studies/ai-2025-global-tech-giant-transformation",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500"
    },
    {
      title: "📚 Ultimate Implementation Master Guide",
      description: "Complete guide to implementing AI solutions with proven methodologies",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      badgeColor: "bg-purple-500"
    },
    {
      title: "⚛️ Quantum AI Integration Breakthrough",
      description: "Revolutionary quantum-neural fusion delivering 15,000% ROI",
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-indigo-500"
    },
    {
      title: "🤖 Autonomous Systems Revolution",
      description: "Self-evolving AI systems achieving 2,000-5,000% ROI",
      href: "/blog/ai-2025-autonomous-systems-revolution",
      badge: "NEW",
      badgeColor: "bg-orange-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${current.badgeColor} text-white animate-pulse`}>
                    {current.badge}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1">
                    <Link 
                      href={current.href}
                      className="hover:text-yellow-300 transition-colors duration-200"
                    >
                      {current.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-blue-100 mb-2">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentContent ? 'bg-yellow-400 scale-125' : 'bg-white opacity-50'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
              
              <Link
                href={current.href}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-3000"></div>
      </div>
    </div>
  );
};

export default AI2025NewContentPromotionBanner;