import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "15,000% ROI achieved in just 12 months!",
      author: "Fortune 500 CTO",
      company: "Global Tech Corp"
    },
    {
      text: "Revolutionary AI breakthrough changed everything!",
      author: "CEO",
      company: "Manufacturing Giant"
    },
    {
      text: "10,000x performance boost - incredible results!",
      author: "CTO",
      company: "Tech Startup"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-orange-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main headline */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH - 10,000% ROI GUARANTEED
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}Breakthrough Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Experience the most revolutionary AI breakthrough in human history. 
            Our quantum-enhanced neural networks deliver unprecedented 10,000% ROI 
            through transcendent intelligence and autonomous decision systems.
          </p>

          {/* Rotating testimonials */}
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg italic mb-2">"{testimonials[currentTestimonial].text}"</p>
              <div className="text-sm text-gray-300">
                - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">10,000%</div>
              <div className="text-sm text-gray-300">Guaranteed ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-300">Performance Boost</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Trusted by Fortune 500 Companies
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Money-Back Guarantee
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              24/7 Support Included
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}