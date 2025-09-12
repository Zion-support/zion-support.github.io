'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'resource' | 'tool';
  featured: boolean;
  readTime?: string;
  date?: string;
  category?: string;
  badge?: string;
}

interface MegaContentDropBannerProps {
  variant?: 'mega' | 'premium' | 'showcase';
  maxItems?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const MegaContentDropBanner = ({
  variant = 'mega',
  maxItems = 8,
  autoRotate = true,
  rotationInterval = 6000
}: MegaContentDropBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const megaContent: ContentItem[] = [
    {
      id: 'mega1',
      title: 'AI 2025 Enterprise Automation Revolution',
      description: 'Complete implementation guide with 340% ROI case studies and actionable strategies for Fortune 500 companies.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Enterprise AI',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'mega2',
      title: '$200M Manufacturing Success Story',
      description: 'Real Fortune 500 case study showing how autonomous AI systems delivered unprecedented cost savings and efficiency.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      featured: true,
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      category: 'Case Study',
      badge: 'EXCLUSIVE'
    },
    {
      id: 'mega3',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Build eco-friendly AI systems that reduce carbon footprints by 40% while improving performance.',
      href: '/blog/ai-2025-sustainability-green-tech',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Jan 28, 2025',
      category: 'Sustainability',
      badge: 'NEW'
    },
    {
      id: 'mega4',
      title: 'AI Training Simulator: Learn ML by Doing',
      description: 'Master machine learning through hands-on experience with interactive datasets and algorithms.',
      href: '/tools/ai-training-simulator',
      type: 'tool',
      featured: true,
      readTime: 'Interactive',
      date: 'Jan 28, 2025',
      category: 'Learning',
      badge: 'INTERACTIVE'
    },
    {
      id: 'mega5',
      title: 'AI Implementation Master Guide 2026',
      description: '200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      featured: true,
      readTime: '200+ pages',
      date: 'Jan 28, 2025',
      category: 'Guide',
      badge: 'FREE'
    },
    {
      id: 'mega6',
      title: 'AI Cybersecurity Checklist 2025',
      description: '150+ security items for secure AI implementation with compliance frameworks and best practices.',
      href: '/resources/ai-cybersecurity-checklist-2025',
      type: 'resource',
      featured: true,
      readTime: '150+ items',
      date: 'Jan 28, 2025',
      category: 'Security',
      badge: 'ESSENTIAL'
    },
    {
      id: 'mega7',
      title: 'AI ROI Calculator Tool',
      description: 'Calculate your potential return on AI investments with our interactive calculator and benchmarking tools.',
      href: '/tools/ai-roi-calculator',
      type: 'tool',
      featured: true,
      readTime: 'Interactive',
      date: 'Jan 28, 2025',
      category: 'Calculator',
      badge: 'TOOL'
    },
    {
      id: 'mega8',
      title: 'AI Workforce Transformation Playbook',
      description: 'Complete reskilling strategies and implementation guides for the AI era workforce transformation.',
      href: '/resources/ai-workforce-transformation-playbook-2025',
      type: 'resource',
      featured: true,
      readTime: '150+ pages',
      date: 'Jan 28, 2025',
      category: 'Workforce',
      badge: 'COMPREHENSIVE'
    }
  ];

  const displayedContent = megaContent.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered && displayedContent.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayedContent.length, rotationInterval, currentIndex]);

  const nextSlide = () => {
    const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? displayedContent.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'resource': return '📋';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'resource': return 'bg-orange-100 text-orange-800';
      case 'tool': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH': return 'bg-red-100 text-red-800 border-red-200';
      case 'EXCLUSIVE': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'NEW': return 'bg-green-100 text-green-800 border-green-200';
      case 'INTERACTIVE': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'FREE': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'ESSENTIAL': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'TOOL': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'COMPREHENSIVE': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (variant === 'premium') {
    return (
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-8 py-3 mb-6">
              <span className="text-lg font-bold">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              🚀 Revolutionary AI Content Collection
            </h2>
            <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
              The most comprehensive AI content library ever assembled. From enterprise automation guides 
              to interactive tools - everything you need to master AI in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/content-showcase"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-5 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 text-xl shadow-2xl"
              >
                🎯 Explore All Content
              </Link>
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="border-2 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 text-xl"
              >
                📖 Start with Guide
              </Link>
            </div>
          </div>

          {/* Premium Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{getTypeIcon(item.type)}</span>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getBadgeColor(item.badge || '')}`}>
                        {item.badge}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {item.readTime}
                    </div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'showcase') {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {variant === 'mega' ? 'Mega Content Collection' : 'Premium Content Showcase'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {variant === 'mega' 
                ? 'The most comprehensive AI content library with breakthrough guides, exclusive case studies, and interactive tools.'
                : 'Handpicked premium content featuring our most impactful resources and breakthrough insights.'
              }
            </p>
          </div>

          <div className="relative">
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative h-[500px]">
                {displayedContent.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
                      <div className="h-full flex items-center">
                        <div className="w-1/2 p-12">
                          <div className="flex items-center mb-4">
                            <span className="text-4xl mr-3">{getTypeIcon(item.type)}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                              {item.type.replace('-', ' ').toUpperCase()}
                            </span>
                            {item.featured && (
                              <span className={`ml-3 px-3 py-1 rounded-full text-sm font-bold border ${getBadgeColor(item.badge || '')}`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-4xl font-bold mb-4 line-clamp-2">{item.title}</h3>
                          <p className="text-xl text-purple-100 mb-6 line-clamp-3">{item.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-purple-200 mb-6">
                            {item.readTime && (
                              <div className="flex items-center">
                                <span className="mr-2">⏱️</span>
                                {item.readTime}
                              </div>
                            )}
                            {item.category && (
                              <div className="flex items-center">
                                <span className="mr-2">🏷️</span>
                                {item.category}
                              </div>
                            )}
                            {item.date && <div>{item.date}</div>}
                          </div>
                          <Link href={item.href} className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors text-lg">
                            Explore Content
                            <span className="ml-2">→</span>
                          </Link>
                        </div>
                        <div className="w-1/2 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                          <div className="text-9xl opacity-20">{getTypeIcon(item.type)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {displayedContent.length > 1 && (
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-6">
                  <div className="flex justify-between">
                    <button onClick={prevSlide} className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">◀</button>
                    <button onClick={nextSlide} className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">▶</button>
                  </div>
                </div>
              )}

              {displayedContent.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {displayedContent.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedContent.map((item) => (
                <Link key={item.id} href={item.href} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div className="flex flex-col gap-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getBadgeColor(item.badge || '')}`}>
                          {item.badge}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {item.type.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-1">⏱️</span>
                        {item.readTime || '—'}
                      </div>
                      <span>{item.date || ''}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/content-showcase" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Explore Complete Collection
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default mega variant
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-red-400 text-black rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-bold">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            🔥 Revolutionary AI Content Collection
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            The most comprehensive AI content library ever assembled. From enterprise automation guides 
            to interactive tools - everything you need to master AI in 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-gradient-to-r from-yellow-400 to-red-400 text-black px-12 py-5 rounded-xl font-bold hover:from-yellow-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 text-xl shadow-2xl"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-automation-revolution"
              className="border-2 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white hover:text-indigo-900 transition-all duration-300 text-xl"
            >
              📖 Start with Guide
            </Link>
          </div>
        </div>

        {/* Mega Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{getTypeIcon(item.type)}</span>
                  <div className="flex flex-col gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getBadgeColor(item.badge || '')}`}>
                      {item.badge}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <div className="flex items-center">
                    <span className="mr-1">⏱️</span>
                    {item.readTime}
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-red-400 text-black px-12 py-5 rounded-xl font-bold hover:from-yellow-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl"
          >
            🎯 Explore Complete Collection
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MegaContentDropBanner;