import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  value?: string;
  icon: string;
  category: string;
  featured: boolean;
  gradient: string;
  stats: {
    views?: number;
    shares?: number;
    rating?: number;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-agents',
    title: 'Advanced AI Agents Revolution 2025',
    description: 'Discover how advanced AI agents are revolutionizing industries with autonomous decision-making, multi-agent systems, and enterprise implementation strategies.',
    href: '/blog/ai-2025-advanced-ai-agents',
    type: 'blog',
    readTime: '15 min',
    icon: '🤖',
    category: 'AI Technology',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
    stats: { views: 12500, shares: 340, rating: 4.9 }
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Business Revolution',
    description: 'Unlock unprecedented computational power with quantum algorithms delivering 10,000x speedups in optimization and transforming business operations.',
    href: '/blog/quantum-computing-business-revolution-2025',
    type: 'blog',
    readTime: '18 min',
    icon: '⚡',
    category: 'Quantum Tech',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
    stats: { views: 8900, shares: 280, rating: 4.8 }
  },
  {
    id: 'fortune-500-success',
    title: '$3.2B Quantum AI Transformation',
    description: 'Fortune 500 company achieves $3.2B value creation through quantum AI implementation with 45% efficiency gains and 340% ROI.',
    href: '/case-studies/ai-2025-fortune-500-quantum-transformation',
    type: 'case-study',
    readTime: '12 min',
    value: '$3.2B',
    icon: '🏆',
    category: 'Success Story',
    featured: true,
    gradient: 'from-green-500 to-emerald-500',
    stats: { views: 15600, shares: 520, rating: 5.0 }
  },
  {
    id: 'ai-governance',
    title: 'Enterprise AI Governance Master Guide',
    description: 'Complete ethical AI governance framework with compliance strategies, risk management, and 340% ROI implementation guide.',
    href: '/blog/ai-2025-enterprise-ai-governance',
    type: 'blog',
    readTime: '25 min',
    icon: '🏛️',
    category: 'AI Governance',
    featured: false,
    gradient: 'from-indigo-500 to-purple-500',
    stats: { views: 9800, shares: 190, rating: 4.7 }
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI Revolution 2025',
    description: '300% accuracy boost with vision, audio, and sensor fusion technologies transforming industries and creating new possibilities.',
    href: '/blog/ai-2025-multimodal-revolution',
    type: 'blog',
    readTime: '28 min',
    icon: '👁️',
    category: 'AI Innovation',
    featured: false,
    gradient: 'from-pink-500 to-rose-500',
    stats: { views: 11200, shares: 310, rating: 4.8 }
  },
  {
    id: 'retail-transformation',
    title: '$2.8B Global Retail Transformation',
    description: 'Fortune 100 retail giant achieves $2.8B value creation with AI transformation across 50+ countries and 340% ROI.',
    href: '/case-studies/ai-2025-global-retail-transformation-success',
    type: 'case-study',
    readTime: '20 min',
    value: '$2.8B',
    icon: '🛒',
    category: 'Retail AI',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
    stats: { views: 13400, shares: 450, rating: 4.9 }
  }
];

export default function DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const featuredItems = contentItems.filter(item => item.featured);
  const regularItems = contentItems.filter(item => !item.featured);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Content
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our most impactful AI insights, implementation guides, and success stories 
          that are transforming businesses worldwide.
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous content"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next content"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {contentItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${item.gradient} p-8 md:p-12 text-white`}>
                  <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content Info */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {getTypeLabel(item.type)}
                          </div>
                          <div className="text-white/70 text-sm">{item.readTime} read</div>
                          <div className="text-white/70 text-sm">•</div>
                          <div className="text-white/70 text-sm">{item.category}</div>
                          {item.value && (
                            <div className="text-yellow-300 text-sm font-semibold">{item.value} Value</div>
                          )}
                        </div>

                        <div className="text-6xl mb-4">{item.icon}</div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-white/90 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center space-x-6 text-sm text-white/80">
                          {item.stats.views && (
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                              </svg>
                              <span>{item.stats.views.toLocaleString()}</span>
                            </div>
                          )}
                          {item.stats.shares && (
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                              </svg>
                              <span>{item.stats.shares}</span>
                            </div>
                          )}
                          {item.stats.rating && (
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                              <span>{item.stats.rating}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href={item.href}
                            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                          >
                            Read Full {getTypeLabel(item.type)}
                          </Link>
                          <Link
                            href="/content-showcase"
                            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                          >
                            Explore All Content
                          </Link>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="text-8xl mb-4">{item.icon}</div>
                            <div className="text-2xl font-bold mb-2">{item.category}</div>
                            <div className="text-white/80">{getTypeLabel(item.type)}</div>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          More Featured Content
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </div>
                  <div className="text-gray-500 text-xs">{item.readTime}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 text-sm font-medium group-hover:underline">
                    Read More →
                  </div>
                  {item.value && (
                    <div className="text-green-600 text-sm font-semibold">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}