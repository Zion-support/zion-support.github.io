import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentItems = [
  {
    id: 'ai-2026-showcase',
    title: 'AI 2026 Technology Showcase',
    description: 'Explore cutting-edge neural interfaces, quantum AI, and autonomous systems that will revolutionize industries in 2026.',
    href: '/ai-2026-technology-showcase',
    image: '/api/placeholder/400/300',
    category: 'Technology',
    badge: 'NEW',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🔮'
  },
  {
    id: 'implementation-toolkit',
    title: 'AI 2026 Implementation Toolkit',
    description: 'Complete toolkit with frameworks, checklists, templates, and expert guidance for implementing next-gen AI systems.',
    href: '/resources/ai-2026-implementation-toolkit',
    image: '/api/placeholder/400/300',
    category: 'Resources',
    badge: 'TOOLKIT',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🛠️'
  },
  {
    id: 'quantum-case-study',
    title: 'Quantum AI Financial Breakthrough',
    description: 'How a Fortune 500 company achieved 1000x performance improvement using quantum-enhanced AI for risk modeling.',
    href: '/case-studies/quantum-ai-financial-breakthrough-2026',
    image: '/api/placeholder/400/300',
    category: 'Case Study',
    badge: 'BREAKTHROUGH',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '⚛️'
  },
  {
    id: 'roi-calculator',
    title: 'AI ROI Calculator 2026',
    description: 'Interactive calculator to estimate returns on AI investments including neural interfaces and quantum AI systems.',
    href: '/tools/ai-roi-calculator-2026',
    image: '/api/placeholder/400/300',
    category: 'Tools',
    badge: 'INTERACTIVE',
    gradient: 'from-green-500 to-teal-500',
    icon: '💰'
  },
  {
    id: 'ai-trends-2026',
    title: 'AI Trends 2026 Predictions',
    description: 'Comprehensive analysis of AI trends and predictions for 2026. Discover the future of artificial intelligence.',
    href: '/ai-trends-2026-predictions',
    image: '/api/placeholder/400/300',
    category: 'Analysis',
    badge: 'PREDICTIONS',
    gradient: 'from-orange-500 to-red-500',
    icon: '📈'
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🌟 FEATURED CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest cutting-edge content featuring neural interfaces, quantum AI, autonomous systems, and comprehensive implementation guides
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-1 rounded-2xl`}>
                    <div className="bg-slate-900 rounded-xl p-8 h-96 flex items-center">
                      <div className="grid md:grid-cols-2 gap-8 w-full">
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="text-4xl">{item.icon}</span>
                            <div>
                              <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 text-xs font-bold">
                                {item.badge}
                              </span>
                              <span className="ml-3 text-sm text-gray-400">{item.category}</span>
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
                          <p className="text-lg text-gray-300 mb-6">{item.description}</p>
                          <Link
                            href={item.href}
                            className={`inline-flex items-center bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                          >
                            Explore Now →
                          </Link>
                        </div>
                        <div className="hidden md:block">
                          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg h-64 flex items-center justify-center">
                            <div className="text-6xl opacity-50">{item.icon}</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-purple-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group bg-gradient-to-br ${item.gradient} p-1 rounded-xl hover:scale-105 transition-transform`}
            >
              <div className="bg-slate-900 rounded-lg p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">{item.category}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                <div className="text-purple-400 text-sm font-semibold group-hover:text-purple-300">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all text-lg shadow-lg inline-block"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}