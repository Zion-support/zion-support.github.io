import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContentNavigationBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      title: "AI 2026 Revolution",
      description: "Discover the ultimate breakthrough in artificial intelligence",
      link: "/ai-2026-revolution",
      badge: "NEW",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Quantum AI 2026",
      description: "Revolutionary quantum computing meets AI",
      link: "/quantum-ai-2026",
      badge: "BREAKTHROUGH",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer integration technology",
      link: "/neural-interfaces-2026",
      badge: "FUTURE",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Autonomous Business",
      description: "Self-managing AI business systems",
      link: "/autonomous-business-2026",
      badge: "REVOLUTIONARY",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Featured content carousel */}
          <div className="flex-1 max-w-2xl">
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredContent.map((content, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${content.color} p-6 rounded-xl text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-black bg-opacity-30 px-3 py-1 rounded-full text-xs font-bold">
                          {content.badge}
                        </span>
                        <div className="flex space-x-1">
                          {featuredContent.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentSlide(i)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{content.description}</p>
                      <Link
                        href={content.link}
                        className="inline-flex items-center text-white font-semibold hover:underline"
                      >
                        Explore Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Quick links */}
          <div className="ml-8 hidden lg:block">
            <div className="text-center">
              <h3 className="text-white font-bold mb-4">Latest Content</h3>
              <div className="space-y-2">
                {featuredContent.map((content, index) => (
                  <Link
                    key={index}
                    href={content.link}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {content.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden ml-4">
            <div className="flex space-x-1">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentNavigationBanner;