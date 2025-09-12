import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  image: string;
  badge: string;
  badgeColor: string;
  readTime: string;
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'multimodal-ai',
    title: 'AI 2025: The Multimodal Revolution',
    description: 'Vision, Voice, and Text Unite to Transform Human-Computer Interaction',
    category: 'AI Trends',
    url: '/blog/ai-2025-multimodal-revolution',
    image: '🎭',
    badge: 'TRENDING',
    badgeColor: 'bg-yellow-400 text-yellow-900',
    readTime: '12 min',
    publishDate: 'Jan 15, 2025'
  },
  {
    id: 'quantum-ml',
    title: 'Quantum Machine Learning 2025',
    description: 'The Next Frontier of Artificial Intelligence',
    category: 'Quantum AI',
    url: '/blog/ai-2025-quantum-machine-learning',
    image: '⚛️',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-purple-400 text-purple-900',
    readTime: '15 min',
    publishDate: 'Jan 18, 2025'
  },
  {
    id: 'fintech-case',
    title: 'AI Fintech Transformation Breakthrough',
    description: '$2B Company Achieves 300% ROI in 6 Months',
    category: 'Case Study',
    url: '/case-studies/ai-2025-fintech-transformation-breakthrough',
    image: '💰',
    badge: 'SUCCESS',
    badgeColor: 'bg-green-400 text-green-900',
    readTime: '8 min',
    publishDate: 'Jan 20, 2025'
  },
  {
    id: 'master-guide',
    title: 'AI Implementation Master Guide 2026',
    description: 'Complete Roadmap for Enterprise AI Success',
    category: 'Resource',
    url: '/resources/ai-implementation-master-guide-2026',
    image: '📚',
    badge: 'GUIDE',
    badgeColor: 'bg-blue-400 text-blue-900',
    readTime: '45 min',
    publishDate: 'Jan 22, 2025'
  },
  {
    id: 'cybersecurity-ai',
    title: 'AI Cybersecurity Revolution 2025',
    description: 'Advanced Threat Detection and Automated Response Systems',
    category: 'Cybersecurity',
    url: '/blog/ai-2025-cybersecurity-revolution',
    image: '🛡️',
    badge: 'HOT',
    badgeColor: 'bg-red-400 text-red-900',
    readTime: '10 min',
    publishDate: 'Jan 12, 2025'
  },
  {
    id: 'healthcare-ai',
    title: 'AI Healthcare Transformation',
    description: 'Revolutionary Diagnostic Tools and Treatment Optimization',
    category: 'Healthcare',
    url: '/blog/ai-2025-healthcare-transformation',
    image: '🏥',
    badge: 'NEW',
    badgeColor: 'bg-teal-400 text-teal-900',
    readTime: '14 min',
    publishDate: 'Jan 10, 2025'
  }
];

export default function DynamicContentCarousel2025() {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Latest AI Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our constantly updated collection of cutting-edge AI content, 
            case studies, and implementation guides.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full px-8 md:px-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${contentItems[currentIndex].badgeColor}`}>
                          {contentItems[currentIndex].badge}
                        </span>
                        <span className="text-sm text-gray-500">{contentItems[currentIndex].category}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{contentItems[currentIndex].readTime} read</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {contentItems[currentIndex].title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {contentItems[currentIndex].description}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <Link
                          href={contentItems[currentIndex].url}
                          className="group bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="flex items-center space-x-2">
                            <span>Read More</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                        </Link>
                        
                        <button
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                          <span className="text-2xl">
                            {isAutoPlaying ? '⏸️' : '▶️'}
                          </span>
                          <span className="text-sm font-medium">
                            {isAutoPlaying ? 'Pause' : 'Play'}
                          </span>
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Published {contentItems[currentIndex].publishDate}
                      </div>
                    </div>
                    
                    {/* Right Side - Visual */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-8xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                          {contentItems[currentIndex].image}
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
                        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-600 hover:text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <span className="text-xl">←</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-600 hover:text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <span className="text-xl">→</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.slice(0, 6).map((item, index) => (
              <Link key={item.id} href={item.url} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs text-gray-500">{item.category}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{item.readTime} read</span>
                        <span>{item.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Get notified when we publish new AI insights, case studies, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}