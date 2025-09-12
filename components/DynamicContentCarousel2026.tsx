"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 1,
    title: "AI 2025: Neural Architecture Revolution",
    description: "Next-gen AI systems transforming industries with 40% efficiency gains",
    category: "Revolutionary Breakthroughs",
    icon: "🧠",
    href: "/blog/ai-2025-neural-architecture-revolution",
    badge: "NEW",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Quantum Machine Learning Breakthrough",
    description: "The next frontier in AI computing with 10-100x performance improvements",
    category: "Quantum AI",
    icon: "⚛️",
    href: "/blog/ai-2025-quantum-machine-learning",
    badge: "BREAKTHROUGH",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    title: "$2.3B Fintech Transformation Success",
    description: "Real-world case study showing massive revenue impact through AI",
    category: "Case Study",
    icon: "💰",
    href: "/case-studies/ai-2025-fintech-transformation-breakthrough",
    badge: "SUCCESS",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "AI Implementation Master Guide 2026",
    description: "Complete enterprise strategy for successful AI deployment",
    category: "Master Guide",
    icon: "📚",
    href: "/resources/ai-implementation-master-guide-2026",
    badge: "GUIDE",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 5,
    title: "Multimodal AI Revolution 2025",
    description: "Seamless integration of text, image, audio, and video processing",
    category: "Multimodal AI",
    icon: "🎭",
    href: "/blog/ai-2025-multimodal-revolution",
    badge: "TRENDING",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 6,
    title: "Enterprise AI Governance Framework",
    description: "Comprehensive framework for responsible AI implementation",
    category: "Governance",
    icon: "🛡️",
    href: "/resources/ai-governance-framework-2026",
    badge: "FRAMEWORK",
    color: "from-teal-500 to-green-500"
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredContent.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our curated collection of cutting-edge AI research, 
            real-world case studies, and practical implementation guides.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.color} p-12 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                              {content.category}
                            </span>
                            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                              {content.badge}
                            </span>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {content.title}
                          </h3>
                          
                          <p className="text-lg opacity-90 mb-8 leading-relaxed">
                            {content.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                              href={content.href}
                              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                            >
                              Read More
                            </Link>
                            <Link
                              href="/content-showcase"
                              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                            >
                              View All Content
                            </Link>
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className="text-center">
                          <div className="text-8xl mb-4">{content.icon}</div>
                          <div className="text-2xl font-bold opacity-80">
                            {content.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              <div className={`w-4 h-4 rounded-full border-2 ${
                isAutoPlaying ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
              }`}></div>
              Auto-play {isAutoPlaying ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All Content
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Latest Blog Posts
                </h4>
                <p className="text-gray-600 text-sm">
                  In-depth articles on AI trends, technologies, and best practices
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-green-200">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Success Stories
                </h4>
                <p className="text-gray-600 text-sm">
                  Real-world case studies and transformation success stories
                </p>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Implementation Guides
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides, frameworks, and practical resources
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}