import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
  featured?: boolean;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: Breakthrough Innovations That Will Transform Everything',
      description: 'Discover the revolutionary AI innovations of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the technologies defining the future.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      category: 'AI Innovations',
      readTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: '2',
      title: 'AI Trends 2025: 15 Predictions That Will Shape the Future',
      description: 'Expert insights on the most important AI trends and predictions for 2025. From AGI breakthroughs to quantum AI, discover what\'s coming next.',
      href: '/blog/ai-2025-trends-predictions',
      icon: '🔮',
      category: 'AI Predictions',
      readTime: '28 min read',
      isNew: true,
      featured: true
    },
    {
      id: '3',
      title: '$200M Manufacturing Success: Autonomous AI Systems Case Study',
      description: 'How a Fortune 500 manufacturing company achieved $200M in annual savings using autonomous AI systems across 15 facilities.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      icon: '💰',
      category: 'Case Study',
      type: 'Success Story',
      isNew: true,
      featured: true
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
      description: 'Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of proven frameworks, templates, and strategies.',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      category: 'Master Guide',
      type: 'Free Download',
      isNew: true,
      featured: true
    },
    {
      id: '5',
      title: 'AI Workforce Transformation 2025: Complete Reskilling Guide',
      description: 'Learn how to prepare your workforce for the AI era with comprehensive reskilling strategies and implementation frameworks.',
      href: '/blog/ai-workforce-transformation-2025',
      icon: '👥',
      category: 'Workforce AI',
      readTime: '18 min read',
      isTrending: true,
      featured: true
    },
    {
      id: '6',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly Systems',
      description: 'Discover how AI is driving sustainability initiatives and reducing carbon footprints with smart energy management solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      icon: '🌱',
      category: 'Sustainability',
      readTime: '20 min read',
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length, isAutoPlay]);

  const getBadgeColor = (item: ContentItem) => {
    if (item.isNew) return 'bg-green-100 text-green-800';
    if (item.isTrending) return 'bg-orange-100 text-orange-800';
    return 'bg-blue-100 text-blue-800';
  };

  const getBadgeText = (item: ContentItem) => {
    if (item.isNew) return 'NEW';
    if (item.isTrending) return 'TRENDING';
    return 'FEATURED';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI & Technology Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest articles, case studies, and resources covering the most 
            important trends in AI, automation, and business transformation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">
                    {contentItems[currentIndex].icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(contentItems[currentIndex])}`}>
                    {getBadgeText(contentItems[currentIndex])}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {contentItems[currentIndex].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {contentItems[currentIndex].description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {contentItems[currentIndex].category}
                  </span>
                  {contentItems[currentIndex].readTime && (
                    <span className="text-gray-500 text-sm">
                      {contentItems[currentIndex].readTime}
                    </span>
                  )}
                  {contentItems[currentIndex].type && (
                    <span className="text-gray-500 text-sm">
                      • {contentItems[currentIndex].type}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={contentItems[currentIndex].href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Read More
                  </Link>
                  <Link
                    href="/content-showcase"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    View All Content
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8 lg:p-12">
                <div className="text-8xl lg:text-9xl opacity-80">
                  {contentItems[currentIndex].icon}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                title={isAutoPlay ? 'Pause auto-play' : 'Resume auto-play'}
              >
                {isAutoPlay ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % contentItems.length)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              📝 All Articles
            </Link>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              📊 Case Studies
            </Link>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              📋 Resources
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
              🚀 Services
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              💬 Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel;