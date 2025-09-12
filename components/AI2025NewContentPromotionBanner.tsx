import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025: Advanced Autonomous Systems Revolution",
      description: "Breakthrough autonomous systems achieving 99.8% autonomy across industries",
      href: "/blog/ai-2025-advanced-autonomous-systems",
      badge: "BREAKTHROUGH",
      color: "from-blue-500 to-indigo-500",
      icon: "🤖"
    },
    {
      title: "AI 2025: Quantum Machine Learning Breakthrough",
      description: "Revolutionary quantum ML achieving 10,000x speedup in complex computations",
      href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      badge: "QUANTUM BREAKTHROUGH",
      color: "from-purple-500 to-pink-500",
      icon: "⚛️"
    },
    {
      title: "AI 2025: Global Finance Transformation",
      description: "Revolutionary AI transformation achieving 1500% ROI in global finance",
      href: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      badge: "BREAKTHROUGH SUCCESS",
      color: "from-green-500 to-emerald-500",
      icon: "💰"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = newContent[currentContent];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl animate-pulse">🚀</span>
                <span className="font-bold text-lg">NEW AI 2025 CONTENT</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  JUST RELEASED
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm">
                <div className="font-semibold">{current.title}</div>
                <div className="text-gray-300 text-xs">{current.description}</div>
              </div>
              <Link 
                href={current.href}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile version */}
      <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-xl animate-pulse">🚀</span>
              <span className="font-bold">NEW AI 2025 CONTENT</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                JUST RELEASED
              </span>
            </div>
            <div className="text-sm mb-3">
              <div className="font-semibold">{current.title}</div>
              <div className="text-gray-300 text-xs">{current.description}</div>
            </div>
            <Link 
              href={current.href}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Read Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Content showcase section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest AI 2025 Breakthroughs</h2>
            <p className="text-gray-600">Discover the revolutionary AI technologies transforming industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newContent.map((content, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  index === currentContent ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${content.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl">{content.icon}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      content.badge.includes('QUANTUM') ? 'bg-purple-100 text-purple-800' :
                      content.badge.includes('SUCCESS') ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {content.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                  <Link 
                    href={content.href}
                    className={`inline-block w-full text-center py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${content.color} hover:opacity-90 transition-opacity`}
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/content-showcase"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All AI 2025 Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025NewContentPromotionBanner;