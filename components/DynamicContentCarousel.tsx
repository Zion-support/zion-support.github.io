import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readTime?: string;
  featured: boolean;
  icon: string;
  gradient: string;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Breakthrough Innovations 2025: Revolutionary Technologies Shaping the Future',
      description: 'Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI, explore technologies that are reshaping industries.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '25 min read',
      featured: true,
      icon: '🚀',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: '2',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems',
      description: 'Discover how AI is driving sustainability initiatives and reducing carbon footprints. Learn about smart energy management and climate solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
      category: 'Sustainability',
      readTime: '20 min read',
      featured: true,
      icon: '🌱',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      title: 'AI Sustainability Transformation Success: 60% Energy Reduction & Carbon Neutrality',
      description: 'Fortune 500 manufacturing company achieves 60% energy reduction and carbon neutrality through AI-powered sustainability initiatives.',
      href: '/case-studies/ai-sustainability-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      featured: true,
      icon: '💰',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
      description: 'Download our comprehensive AI Implementation Master Guide for 2026. Step-by-step instructions, templates, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Master Guide',
      featured: true,
      icon: '📚',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: '5',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '18 min read',
      featured: true,
      icon: '🏢',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: '6',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      category: 'Healthcare AI',
      readTime: '22 min read',
      featured: true,
      icon: '🏥',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentItems.length, isAutoPlaying]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'New Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Free Resource';
      case 'service':
        return 'Service';
      default:
        return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      case 'service':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 HOT CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest AI & Tech Insights
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Discover our newest breakthrough content, case studies, and resources. 
              Fresh insights published weekly to keep you ahead of the curve.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{currentItem.icon}</span>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                      {getTypeLabel(currentItem.type)}
                    </span>
                    <div className="text-sm opacity-75 mt-1">{currentItem.category}</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-white/75 hover:text-white transition-colors"
                  title={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                >
                  {isAutoPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentItem.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link 
                    href={currentItem.href}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    {currentItem.type === 'resource' ? 'Download Free' : 'Read More'}
                  </Link>
                  <Link 
                    href="/content-showcase"
                    className="text-white hover:text-indigo-200 transition-colors"
                  >
                    View All Content →
                  </Link>
                </div>
                {currentItem.readTime && (
                  <div className="text-sm opacity-75">
                    {currentItem.readTime}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-6">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* Quick Preview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {contentItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`group p-4 rounded-lg transition-all ${
                    index === currentIndex 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-white bg-opacity-5 hover:bg-opacity-10'
                  }`}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xs font-medium mb-1 line-clamp-2">
                    {item.title.split(':')[0]}
                  </div>
                  <div className="text-xs opacity-75">
                    {getTypeLabel(item.type)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-6000 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / contentItems.length) * 100}%`,
            animationPlayState: isAutoPlaying ? 'running' : 'paused'
          }}
        />
      </div>
    </div>
  );
};

export default DynamicContentCarousel;