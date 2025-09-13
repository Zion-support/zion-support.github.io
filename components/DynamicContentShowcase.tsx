import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  category: string;
  icon: string;
  href: string;
  isNew?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-year-in-review',
      title: 'AI 2025 Year in Review',
      description: 'Comprehensive look at AI breakthroughs that changed everything',
      type: 'blog',
      readTime: '25 min read',
      category: 'AI & Technology',
      icon: '📊',
      href: '/blog/ai-2025-year-in-review',
      isNew: true
    },
    {
      id: 'ai-2026-predictions',
      title: 'AI 2026 Predictions',
      description: 'The technologies that will reshape everything in 2026',
      type: 'blog',
      readTime: '22 min read',
      category: 'AI & Technology',
      icon: '🔮',
      href: '/blog/ai-2026-predictions',
      isNew: true
    },
    {
      id: 'ai-retail-transformation-success',
      title: 'AI Retail Success Story',
      description: '300% revenue growth in 18 months - complete case study',
      type: 'case-study',
      readTime: '18 min read',
      category: 'Case Study',
      icon: '🛒',
      href: '/case-studies/ai-retail-transformation-success-2025',
      isNew: true
    },
    {
      id: 'ai-transformation-readiness-assessment',
      title: 'AI Readiness Assessment',
      description: 'Free tool to evaluate your AI transformation readiness',
      type: 'resource',
      readTime: 'Free Download',
      category: 'Resource',
      icon: '📊',
      href: '/resources/ai-transformation-readiness-assessment-2025',
      isNew: true
    },
    {
      id: 'ai-multimodal-applications',
      title: 'AI Multimodal Applications',
      description: 'Beyond text to vision, audio, and beyond - the future of AI',
      type: 'blog',
      readTime: '15 min read',
      category: 'AI & Technology',
      icon: '🎭',
      href: '/blog/ai-multimodal-applications-2025',
      isTrending: true
    },
    {
      id: 'ai-sustainability-green-tech',
      title: 'AI for Sustainability',
      description: 'Green tech solutions driving environmental impact',
      type: 'blog',
      readTime: '12 min read',
      category: 'AI & Technology',
      icon: '🌱',
      href: '/blog/ai-sustainability-green-tech-2025',
      isPopular: true
    },
    {
      id: 'ai-cybersecurity-threats',
      title: 'AI Cybersecurity Threats',
      description: 'Defending against next-gen AI-powered attacks',
      type: 'blog',
      readTime: '18 min read',
      category: 'Security',
      icon: '🛡️',
      href: '/blog/ai-cybersecurity-threats-2025',
      isNew: true
    },
    {
      id: 'ai-startup-funding-playbook',
      title: 'AI Startup Funding Playbook',
      description: 'Master the $47B funding landscape with proven strategies',
      type: 'resource',
      readTime: '25 min read',
      category: 'Startup Strategy',
      icon: '💰',
      href: '/resources/ai-startup-funding-playbook-2025',
      isTrending: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const getCurrentItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % contentItems.length;
      items.push(contentItems[index]);
    }
    return items;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = (item: ContentItem) => {
    if (item.isNew) return { text: 'New', color: 'bg-green-500 text-white' };
    if (item.isTrending) return { text: 'Trending', color: 'bg-orange-500 text-white' };
    if (item.isPopular) return { text: 'Popular', color: 'bg-blue-500 text-white' };
    return null;
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 DYNAMIC CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our constantly updated library of expert articles, case studies, and resources. 
            Fresh content added weekly to keep you informed about the latest AI trends and breakthroughs.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-rotation
            </button>
            <div className="flex gap-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getCurrentItems().map((item, index) => {
            const statusBadge = getStatusBadge(item);
            return (
              <Link key={`${item.id}-${index}`} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex gap-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                          {item.type.replace('-', ' ').toUpperCase()}
                        </span>
                        {statusBadge && (
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusBadge.color}`}>
                            {statusBadge.text}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{item.readTime}</span>
                        <span>•</span>
                        <span>{item.category}</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline text-sm">
                        {item.type === 'resource' ? 'Download →' : 'Read →'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              📚 View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📊 Browse Case Studies
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;