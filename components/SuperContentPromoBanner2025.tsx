import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SuperContentPromoBanner2025() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promoMessages = [
    {
      title: "🚀 25+ New AI Resources Just Released!",
      subtitle: "Advanced AI Architecture • Cybersecurity Defense • Enterprise Case Studies",
      cta: "Explore All Content",
      href: "/content-showcase"
    },
    {
      title: "💡 Fortune 500 Success Story Inside!",
      subtitle: "40% Efficiency Gains • $50M Cost Savings • Complete Implementation Guide",
      cta: "Read Case Study",
      href: "/case-studies/enterprise-ai-transformation"
    },
    {
      title: "🛡️ Cybersecurity Defense Strategies 2025",
      subtitle: "Protect Your AI Systems • Zero Trust Architecture • Threat Detection",
      cta: "Learn More",
      href: "/blog/cybersecurity-defense-2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-1">
                  {promoMessages[currentSlide].title}
                </h2>
                <p className="text-sm md:text-base opacity-90">
                  {promoMessages[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            <Link
              href={promoMessages[currentSlide].href}
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {promoMessages[currentSlide].cta}
            </Link>
            <Link
              href="/content-showcase"
              className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              View All
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {promoMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Pulse animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}