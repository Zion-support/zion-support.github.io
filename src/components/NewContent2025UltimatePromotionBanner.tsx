"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2025UltimatePromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentContentsetCurrentContent] = useState(0);

  const newContentItems = [
    {
      title: "AI Innovations 2025 Ultimate",
      description: "Revolutionary breakthroughs in artificial intelligence",
      link: "/ai-innovations-2025-ultimate",
      icon: "🧠",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Tools Ultimate Showcase",
      description: "Comprehensive collection of revolutionary AI tools",
      link: "/ai-tools-ultimate-showcase-2025",
      icon: "⚡",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI Success Stories 2025",
      description: "Real results from organizations using our AI solutions",
      link: "/ai-success-stories-2025",
      icon: "🏆",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContentItems.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-lg border border-slate-600/30 rounded-2xl p-6 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="text-2xl mr-2">✨</div>
            <h3 className="text-lg font-bold text-white">New Content 2025</h3>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentContent * 100}%)` }}
          >
            {newContentItems.map((itemindex) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-xl text-white`}>
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs opacity-90">{item.description}</p>
                    </div>
                  </div>
                  <a 
                    href={item.link}
                    className="inline-block bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-lg transition-all duration-200"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {newContentItems.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentContent ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Discover the latest AI innovations and success stories
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimatePromotionBanner;