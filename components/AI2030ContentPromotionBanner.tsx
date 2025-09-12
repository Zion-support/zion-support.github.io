import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2030ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI 2030 Future Vision",
      subtitle: "Revolutionary Breakthrough Technologies",
      description: "Explore quantum AI, neural interfaces, and autonomous systems that deliver 5000%+ ROI",
      link: "/ai-2030-future-vision",
      bgColor: "from-purple-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum Breakthrough",
      subtitle: "5000% ROI Success Story",
      description: "Discover how QuantumTech Industries achieved extraordinary results with AI 2030",
      link: "/case-studies/ai-2030-quantum-breakthrough",
      bgColor: "from-indigo-600 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "📚 Master Implementation Guide",
      subtitle: "Complete AI 2030 Guide",
      description: "Step-by-step implementation guide for breakthrough technologies",
      link: "/resources/ai-2030-implementation-master-guide",
      bgColor: "from-blue-600 to-cyan-600",
      textColor: "text-white"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          {/* Main Banner */}
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold mb-4 animate-bounce">
              🚀 NEW BREAKTHROUGH CONTENT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI 2030 Revolutionary Technologies
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover the future of AI with breakthrough technologies that deliver 5000%+ ROI. 
              Quantum computing, neural interfaces, and autonomous systems that will transform your business.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.bgColor} rounded-2xl p-8 md:p-12`}>
                      <div className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg md:text-xl mb-4 opacity-90">{slide.subtitle}</p>
                        <p className="text-base md:text-lg mb-8 opacity-80 max-w-2xl mx-auto">{slide.description}</p>
                        <Link 
                          href={slide.link}
                          className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore Now
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
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

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link 
              href="/ai-2030-future-vision"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2 group-hover:text-purple-300 transition-colors">Future Vision</h4>
              <p className="text-sm text-gray-300">Revolutionary technologies</p>
            </Link>
            <Link 
              href="/case-studies/ai-2030-quantum-breakthrough"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-2">⚛️</div>
              <h4 className="font-semibold mb-2 group-hover:text-blue-300 transition-colors">Case Studies</h4>
              <p className="text-sm text-gray-300">5000% ROI success stories</p>
            </Link>
            <Link 
              href="/resources/ai-2030-implementation-master-guide"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-semibold mb-2 group-hover:text-indigo-300 transition-colors">Implementation</h4>
              <p className="text-sm text-gray-300">Complete master guide</p>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI 2030 Journey
            </Link>
            <Link 
              href="/resources/ai-2030-implementation-master-guide"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2030ContentPromotionBanner;