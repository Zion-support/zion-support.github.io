import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar, TrendingUp, Star, Eye } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime: string;
  publishDate: string;
  icon: string;
  featured: boolean;
  trending: boolean;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced AI Architecture Patterns for 2025',
      description: 'Master production-ready AI systems with advanced architecture patterns, microservices design, and real-world implementation strategies.',
      href: '/blog/ai-2025-advanced-ai-architecture',
      type: 'blog',
      category: 'AI Architecture',
      readTime: '25 min read',
      publishDate: '2025-01-17',
      icon: '🏗️',
      featured: true,
      trending: true
    },
    {
      id: '2',
      title: 'Multimodal AI Applications in 2025',
      description: 'Explore revolutionary multimodal AI applications combining text, vision, audio, and more for unprecedented user experiences.',
      href: '/blog/ai-2025-multimodal-ai-applications',
      type: 'blog',
      category: 'Multimodal AI',
      readTime: '22 min read',
      publishDate: '2025-01-17',
      icon: '🎭',
      featured: true,
      trending: true
    },
    {
      id: '3',
      title: 'AI-Powered Retail Transformation: $150M Success',
      description: 'Discover how a major retail chain achieved $150M revenue increase through AI-powered personalization and optimization.',
      href: '/case-studies/ai-2025-retail-transformation-success',
      type: 'case-study',
      category: 'Retail AI',
      readTime: '18 min read',
      publishDate: '2025-01-17',
      icon: '🏪',
      featured: true,
      trending: false
    },
    {
      id: '4',
      title: 'AI Enterprise Implementation Playbook 2025',
      description: 'Complete guide to successful enterprise AI implementation with proven strategies, templates, and best practices.',
      href: '/resources/ai-2025-enterprise-implementation-playbook',
      type: 'resource',
      category: 'Implementation',
      readTime: '45 min read',
      publishDate: '2025-01-17',
      icon: '📋',
      featured: true,
      trending: true
    },
    {
      id: '5',
      title: 'AI 2025 Breakthrough Innovations',
      description: 'Revolutionary AI technologies and breakthrough innovations that are reshaping industries in 2025.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      category: 'AI Innovation',
      readTime: '25 min read',
      publishDate: '2025-01-15',
      icon: '🚀',
      featured: false,
      trending: true
    },
    {
      id: '6',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Building eco-friendly AI systems and sustainable technology solutions for a greener future.',
      href: '/blog/ai-2025-sustainability-green-tech',
      type: 'blog',
      category: 'Sustainability',
      readTime: '20 min read',
      publishDate: '2025-01-14',
      icon: '🌱',
      featured: false,
      trending: false
    }
  ];

  const featuredItems = contentItems.filter(item => item.featured);
  const trendingItems = contentItems.filter(item => item.trending);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredItems.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI & Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our newest articles, case studies, and resources covering the latest trends 
            in AI, technology, and digital transformation.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="md:flex">
                        {/* Image/Icon Section */}
                        <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-8xl mb-4">{item.icon}</div>
                            <div className="text-sm font-medium opacity-90">{item.category}</div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="md:w-2/3 p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                              {getTypeLabel(item.type)}
                            </span>
                            {item.trending && (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                🔥 Trending
                              </span>
                            )}
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              ✨ New
                            </span>
                          </div>
                          
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">
                            {item.title}
                          </h4>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{item.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>Zion Tech Group</span>
                            </div>
                          </div>
                          
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trending Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trending Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingItems.slice(0, 3).map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Trending</span>
                      </div>
                    </div>
                    
                    <div className="text-3xl mb-3">{item.icon}</div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                        <span>{item.category}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <span>Explore All Content</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel;