import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, BookOpen, Case, Wrench } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  featured: boolean;
  publishDate: string;
  readTime: string;
  views: string;
}

const ContentPromotionBanner: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<ContentItem | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredContent: ContentItem[] = [
    {
      id: 'generative-ai-revolution',
      title: 'The Generative AI Revolution 2025: Beyond Text and Images',
      description: 'Explore how generative AI is revolutionizing content creation, design, and business processes with advanced multimodal capabilities.',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-revolution',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '22 min read',
      views: '3.1K views'
    },
    {
      id: 'ai-gtm-2025',
      title: 'AI Go-To-Market Strategy 2025: From Zero to Traction',
      description: 'Positioning, pricing, and distribution playbook to launch and scale AI products in 2025.',
      type: 'blog',
      url: '/blog/ai-2025-ai-go-to-market-strategy',
      featured: true,
      publishDate: 'September 12, 2025',
      readTime: '12 min read',
      views: '1.1K views'
    },
    {
      id: 'healthcare-diagnosis',
      title: 'AI Healthcare Diagnosis Revolution 2025: Saving Lives with Precision Medicine',
      description: 'Discover how AI is revolutionizing healthcare diagnosis with early disease detection and personalized treatment plans.',
      type: 'blog',
      url: '/blog/ai-healthcare-diagnosis-revolution-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '25 min read',
      views: '4.2K views'
    },
    {
      id: 'financial-transformation',
      title: 'AI Financial Services Transformation Success: $2.3B in Value Created',
      description: 'Comprehensive case study of how a Fortune 500 company achieved unprecedented success through AI transformation.',
      type: 'case-study',
      url: '/case-studies/ai-financial-services-transformation-success-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '28 min read',
      views: '5.7K views'
    },
    {
      id: 'ai-tools-frameworks',
      title: 'AI Tools & Frameworks 2025: Complete Developer Resource Guide',
      description: 'Comprehensive guide to the best AI tools, frameworks, and libraries for developers in 2025.',
      type: 'resource',
      url: '/resources/ai-tools-frameworks-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '35 min read',
      views: '8.9K views'
    }
  ];

  useEffect(() => {
    setCurrentContent(featuredContent[0]);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
      setCurrentContent(featuredContent[(currentIndex + 1) % featuredContent.length]);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <Case className="w-4 h-4" />;
      case 'resource':
        return <Wrench className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-purple-100 text-purple-800';
      case 'case-study':
        return 'bg-blue-100 text-blue-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'BLOG POST';
      case 'case-study':
        return 'CASE STUDY';
      case 'resource':
        return 'RESOURCE';
      default:
        return 'CONTENT';
    }
  };

  if (!isVisible || !currentContent) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-400 to-pink-400 transform -rotate-12 scale-150"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                  {getTypeIcon(currentContent.type)}
                  <span className="ml-2">{getTypeLabel(currentContent.type)}</span>
                </div>
                <div className="text-sm opacity-90">
                  {currentContent.publishDate} • {currentContent.readTime} • {currentContent.views}
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex items-center space-x-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Content
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="text-6xl">
                  {getTypeIcon(currentContent.type)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20">
        <div className="h-full bg-white bg-opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;