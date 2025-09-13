import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "15,000% ROI Guaranteed",
      description: "Revolutionary AI technology delivering unprecedented results",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🏆 15,000% ROI Success Story",
      subtitle: "Fortune 500 Transformation",
      description: "See how Global Manufacturing Corp achieved incredible results",
      link: "/case-studies/ai-2025-global-transformation-15000-roi",
      bgColor: "from-green-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Technology",
      subtitle: "10,000x Faster Processing",
      description: "Experience the most advanced AI breakthrough in history",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-cyan-600 to-indigo-600",
      textColor: "text-white"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Main Banner */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4 animate-pulse">
              <span className="text-red-400 font-semibold text-sm">🔥 REVOLUTIONARY BREAKTHROUGH</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI 2025 Ultimate Breakthrough Revolution
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              Experience the most revolutionary AI breakthrough in human history. 
              <span className="text-green-400 font-bold"> 15,000% ROI guaranteed</span> through 
              autonomous operations, quantum-neural fusion, and transcendent intelligence.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mb-8">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.bgColor} rounded-xl p-8 mx-2`}>
                      <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                        <p className="text-xl font-semibold mb-4 text-yellow-300">{slide.subtitle}</p>
                        <p className="text-lg mb-6 text-gray-200">{slide.description}</p>
                        <Link 
                          href={slide.link}
                          className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-lg p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Transcendent Intelligence</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy in all decision-making processes</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-lg p-6 border border-blue-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">10,000x faster data processing than traditional systems</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-lg p-6 border border-green-500/30">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">24/7 fully autonomous business operations</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Revolutionary Features
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-15000-roi" 
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Exclusive Access
            </Link>
          </div>

          {/* ROI Highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-xl border border-green-500/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15,000% ROI</div>
              <p className="text-lg text-gray-300">Guaranteed minimum return on investment</p>
              <p className="text-sm text-gray-400 mt-2">*Based on real client results from Fortune 500 companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}