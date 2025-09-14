'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      title: "Revolutionary AI 2025",
      subtitle: "Next-Generation Enterprise Transformation",
      description: "Experience unprecedented business automation with our cutting-edge AI solutions",
      cta: "Explore Solutions",
      link: "/ai-2025-enterprise-automation"
    },
    {
      title: "Quantum Computing Revolution",
      subtitle: "Breakthrough Computational Power",
      description: "Unlock quantum-enhanced capabilities for your business operations",
      cta: "Learn More",
      link: "/quantum-computing-solutions"
    },
    {
      title: "Neural Interface Technology",
      subtitle: "Direct Brain-Computer Integration",
      description: "Seamless human-AI collaboration through advanced neural interfaces",
      cta: "Discover Now",
      link: "/neural-interfaces-2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  const currentContent = contentPieces[currentIndex];

  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {currentContent.title}
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            {currentContent.subtitle}
          </p>
          
          <p className="text-lg opacity-80 mb-8 max-w-3xl mx-auto">
            {currentContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={currentContent.link}
              className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              {currentContent.cta}
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Content Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="Close banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025UltimateBanner;