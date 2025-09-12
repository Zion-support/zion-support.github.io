'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar';
  featured: boolean;
  icon: string;
  badge: string;
  readTime: string;
  publishDate: string;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced AI Architecture Patterns for 2025',
      description: 'Master advanced AI architecture patterns for building scalable, resilient systems with real-world examples.',
      href: '/blog/ai-2025-advanced-ai-architecture',
      type: 'blog',
      featured: true,
      icon: '🏗️',
      badge: 'NEW',
      readTime: '25 min read',
      publishDate: '2025-01-28'
    },
    {
      id: '2',
      title: 'AI Cybersecurity Revolution 2025',
      description: 'Discover the AI cybersecurity revolution transforming enterprise security with advanced threat detection.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      featured: true,
      icon: '🛡️',
      badge: 'TRENDING',
      readTime: '22 min read',
      publishDate: '2025-01-28'
    },
    {
      id: '3',
      title: 'Quantum Computing Breakthrough 2025',
      description: 'Discover quantum computing breakthroughs revolutionizing AI with quantum machine learning and quantum advantage.',
      href: '/blog/ai-2025-quantum-computing-breakthrough',
      type: 'blog',
      featured: true,
      icon: '⚛️',
      badge: 'BREAKTHROUGH',
      readTime: '28 min read',
      publishDate: '2025-01-28'
    },
    {
      id: '4',
      title: '$200M Manufacturing Success Case Study',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings using AI autonomous systems.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      featured: true,
      icon: '💰',
      badge: 'SUCCESS',
      readTime: '18 min read',
      publishDate: '2025-01-28'
    },
    {
      id: '5',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our comprehensive 200+ page guide with step-by-step instructions, templates, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      featured: true,
      icon: '📚',
      badge: 'FREE',
      readTime: '200+ pages',
      publishDate: '2025-01-28'
    },
    {
      id: '6',
      title: 'AI Healthcare Diagnosis Success 2025',
      description: 'Discover how a leading healthcare system achieved 95% diagnostic accuracy with AI-powered medical imaging.',
      href: '/case-studies/ai-healthcare-diagnosis-success-2025',
      type: 'case-study',
      featured: true,
      icon: '🏥',
      badge: 'NEW',
      readTime: '15 min read',
      publishDate: '2025-01-10'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, content.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'webinar':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW':
        return 'bg-green-500 text-white';
      case 'TRENDING':
        return 'bg-orange-500 text-white';
      case 'BREAKTHROUGH':
        return 'bg-purple-500 text-white';
      case 'SUCCESS':
        return 'bg-blue-500 text-white';
      case 'FREE':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (!isVisible) return null;

  const currentContent = content[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest articles, case studies, and resources. Fresh content published weekly 
            to accelerate your AI success in 2025.
          </p>
        </div>

        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className={`bg-gradient-to-r ${getTypeColor(currentContent.type)} p-8 text-white relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{currentContent.icon}</span>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(currentContent.badge)}`}>
                        {currentContent.badge}
                      </span>
                      <div className="text-sm opacity-90 mt-1">
                        {currentContent.type === 'case-study' ? 'Case Study' : 
                         currentContent.type === 'resource' ? 'Free Resource' : 
                         currentContent.type === 'webinar' ? 'Webinar' : 'Article'} • {currentContent.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlayPause}
                      className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-3xl">
                  {currentContent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={currentContent.href}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Read More
                  </Link>
                  <Link 
                    href="/content-showcase"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                  >
                    View All Content
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Preview Grid */}
            <div className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">More Featured Content</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.slice(0, 3).map((item, index) => (
                  <Link key={item.id} href={item.href} className="group">
                    <div className={`p-4 rounded-lg border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(item.badge)}`}>
                          {item.badge}
                        </span>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel;