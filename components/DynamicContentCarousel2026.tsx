'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentItems = [
  {
    id: 1,
    title: "AI 2026: Revolutionary Breakthroughs",
    description: "Discover groundbreaking AI innovations that will transform industries",
    type: "Blog Post",
    category: "AI Innovation",
    image: "/images/ai-2026-breakthroughs.jpg",
    href: "/blog/ai-2026-revolutionary-breakthroughs",
    featured: true,
    stats: { views: "2.3K", shares: "156" }
  },
  {
    id: 2,
    title: "Quantum AI: $2.3B Financial Breakthrough",
    description: "How quantum AI delivered unprecedented cost savings and performance",
    type: "Case Study",
    category: "Quantum AI",
    image: "/images/quantum-ai-case-study.jpg",
    href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
    featured: true,
    stats: { views: "1.8K", shares: "234" }
  },
  {
    id: 3,
    title: "AI 2026 Implementation Toolkit",
    description: "Complete guide to implementing next-generation AI technologies",
    type: "Resource Guide",
    category: "Implementation",
    image: "/images/ai-2026-toolkit.jpg",
    href: "/resources/ai-2026-implementation-toolkit",
    featured: true,
    stats: { views: "3.1K", shares: "189" }
  },
  {
    id: 4,
    title: "Neural Interface Revolution",
    description: "The future of human-AI interaction through brain-computer interfaces",
    type: "Blog Post",
    category: "Neural Interfaces",
    image: "/images/neural-interfaces.jpg",
    href: "/blog/ai-2026-neural-interface-revolution",
    featured: false,
    stats: { views: "1.5K", shares: "98" }
  },
  {
    id: 5,
    title: "Autonomous Systems Mastery",
    description: "Building self-managing AI systems with 99.9% reliability",
    type: "Case Study",
    category: "Autonomous Systems",
    image: "/images/autonomous-systems.jpg",
    href: "/case-studies/ai-2026-autonomous-systems-success",
    featured: false,
    stats: { views: "2.1K", shares: "145" }
  },
  {
    id: 6,
    title: "Multimodal AI Applications",
    description: "Understanding everything across text, images, audio, and video",
    type: "Resource Guide",
    category: "Multimodal AI",
    image: "/images/multimodal-ai.jpg",
    href: "/resources/multimodal-ai-implementation-guide",
    featured: false,
    stats: { views: "1.7K", shares: "112" }
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              NEW
            </span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              2026
            </span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              FEATURED
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dynamic AI 2026 Content Showcase
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content with interactive carousel showcasing 
            quantum AI, neural interfaces, and autonomous systems innovations.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Display */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {currentItem.type}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {currentItem.category}
                  </span>
                  {currentItem.featured && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentItem.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6">
                  {currentItem.description}
                </p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {currentItem.stats.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    {currentItem.stats.shares} shares
                  </span>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    href={currentItem.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Share
                  </button>
                </div>
              </div>
              
              {/* Visual Display */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">
                    {currentItem.type === 'Blog Post' && '📝'}
                    {currentItem.type === 'Case Study' && '📊'}
                    {currentItem.type === 'Resource Guide' && '🛠️'}
                  </div>
                  <div className="text-2xl font-bold mb-2">{currentItem.category}</div>
                  <div className="text-blue-100">Interactive Content</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/mega-content-showcase-2026"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <span>Explore All Content</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}