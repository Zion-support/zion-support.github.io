import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TrendingContent {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  publishDate: string;
  readTime: string;
  category: string;
  views: number;
  trending: boolean;
  featured: boolean;
}

const TrendingContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const trendingContent: TrendingContent[] = [
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough: Revolutionary Computing Meets AI',
      description: 'Explore the groundbreaking convergence of quantum computing and AI, unlocking unprecedented computational power and solving previously impossible problems.',
      type: 'blog',
      url: '/blog/ai-2025-quantum-ai-breakthrough',
      publishDate: '2025-01-17',
      readTime: '8 min read',
      category: 'Quantum Technology',
      views: 15420,
      trending: true,
      featured: true
    },
    {
      id: 'advanced-ai-agents',
      title: 'Advanced AI Agents: The Future of Autonomous Operations',
      description: 'Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making, multi-modal capabilities, and enterprise-grade reliability.',
      type: 'blog',
      url: '/blog/ai-2025-advanced-ai-agents',
      publishDate: '2025-01-17',
      readTime: '10 min read',
      category: 'AI Technology',
      views: 12850,
      trending: true,
      featured: true
    },
    {
      id: 'fintech-unicorn',
      title: 'Fintech Unicorn: $3.2B Valuation Through AI Innovation',
      description: 'How a fintech startup achieved unicorn status and $3.2B valuation by implementing cutting-edge AI solutions across their entire platform.',
      type: 'case-study',
      url: '/case-studies/ai-2025-fintech-unicorn-transformation',
      publishDate: '2025-01-17',
      readTime: '12 min read',
      category: 'Success Story',
      views: 18750,
      trending: true,
      featured: true
    },
    {
      id: 'implementation-checklist',
      title: 'AI Implementation Master Checklist 2025',
      description: 'The definitive step-by-step checklist for successfully implementing AI solutions in 2025. Based on 500+ successful AI deployments.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-checklist',
      publishDate: '2025-01-17',
      readTime: '15 min read',
      category: 'Implementation Guide',
      views: 22100,
      trending: true,
      featured: true
    },
    {
      id: 'ai-governance-guide',
      title: 'Enterprise AI Governance: Complete Implementation Guide',
      description: 'Master the art of AI governance with our comprehensive guide covering ethics, compliance, risk management, and operational excellence.',
      type: 'resource',
      url: '/resources/ai-2025-enterprise-governance-guide',
      publishDate: '2025-01-16',
      readTime: '18 min read',
      category: 'Governance',
      views: 9650,
      trending: true,
      featured: false
    },
    {
      id: 'multimodal-ai-revolution',
      title: 'Multimodal AI Revolution: 300% Accuracy Boost',
      description: 'Discover how multimodal AI is transforming industries with unprecedented accuracy improvements in text, voice, and visual processing.',
      type: 'blog',
      url: '/blog/ai-2025-multimodal-revolution',
      publishDate: '2025-01-16',
      readTime: '9 min read',
      category: 'AI Innovation',
      views: 14200,
      trending: true,
      featured: false
    }
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(trendingContent.length / slidesToShow);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'border-blue-200 bg-blue-50 text-blue-800';
      case 'case-study':
        return 'border-green-200 bg-green-50 text-green-800';
      case 'resource':
        return 'border-purple-200 bg-purple-50 text-purple-800';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-800';
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const getCurrentSlideContent = () => {
    const startIndex = currentSlide * slidesToShow;
    return trendingContent.slice(startIndex, startIndex + slidesToShow);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Trending Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, success stories, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {trendingContent
                      .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                      .map((content) => (
                        <div
                          key={content.id}
                          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden group"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(content.type)}`}>
                                <span className="mr-2">{getTypeIcon(content.type)}</span>
                                {content.category}
                              </div>
                              {content.trending && (
                                <div className="flex items-center text-orange-600 text-sm font-medium">
                                  <span className="mr-1">🔥</span>
                                  Trending
                                </div>
                              )}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {content.title}
                            </h3>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {content.description}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <span>{content.readTime}</span>
                              <span>{formatViews(content.views)} views</span>
                            </div>

                            <Link
                              href={content.url}
                              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            >
                              Read More
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Trending Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentCarousel;