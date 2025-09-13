import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025RevolutionaryBreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContentItems = [
    {
      title: "AI 2025 Ultimate Automation Platform",
      description: "Revolutionary business process automation delivering 10,000% ROI through intelligent decision systems and autonomous operations.",
      href: "/ai-2025-ultimate-automation-platform",
      badge: "BREAKTHROUGH",
      color: "from-purple-500 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Quantum-AI Fusion 2025",
      description: "Revolutionary quantum-enhanced artificial intelligence delivering 15,000% ROI through neural synthesis and transcendent computing.",
      href: "/quantum-ai-fusion-2025",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI 2025 Neural Interface Revolution",
      description: "Advanced neural interfaces delivering 8,500% ROI through direct brain-computer integration and cognitive enhancement.",
      href: "/ai-2025-neural-interface-revolution",
      badge: "FUTURE",
      color: "from-green-500 to-blue-500",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = newContentItems[currentContent];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl animate-pulse">🚀</div>
                <div className="text-white font-bold text-sm">
                  NEW REVOLUTIONARY BREAKTHROUGHS
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className={`text-lg`}>{currentItem.icon}</span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-sm">{currentItem.title}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentItem.color} animate-pulse`}>
                        {currentItem.badge}
                      </span>
                    </div>
                    <div className="text-gray-300 text-xs max-w-md">
                      {currentItem.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link 
                href={currentItem.href}
                className={`px-4 py-2 bg-gradient-to-r ${currentItem.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
              >
                Explore Now
              </Link>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile content */}
          <div className="md:hidden mt-3 pt-3 border-t border-purple-500/30">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{currentItem.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-semibold text-sm">{currentItem.title}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentItem.color} animate-pulse`}>
                    {currentItem.badge}
                  </span>
                </div>
                <div className="text-gray-300 text-xs mb-2">
                  {currentItem.description}
                </div>
                <Link 
                  href={currentItem.href}
                  className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${currentItem.color} text-white font-semibold rounded text-xs hover:shadow-lg transition-all duration-300`}
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((Date.now() % 5000) / 5000) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default NewContent2025RevolutionaryBreakthroughBanner;