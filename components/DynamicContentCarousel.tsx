import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
<<<<<<< HEAD
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
  image?: string;
}

interface DynamicContentCarouselProps {
  content: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function DynamicContentCarousel({
  content,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}: DynamicContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, content.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? content.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
  };

  if (!content || content.length === 0) return null;

  const currentItem = content[currentIndex];
=======
  type: 'article' | 'case-study' | 'resource' | 'webinar';
  category: string;
  readTime: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  icon: string;
  gradient: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: "AI 2025 Advanced Architecture Patterns",
    description: "Master advanced AI architecture patterns for scalable, production-ready systems with real-world examples and implementation guides.",
    href: "/blog/ai-2025-advanced-ai-architecture",
    type: "article",
    category: "AI Architecture",
    readTime: "25 min read",
    isNew: true,
    isFeatured: true,
    icon: "🏗️",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: '2',
    title: "AI Automation Trends 2025",
    description: "Discover the revolutionary AI automation trends that are transforming businesses and achieving 40%+ efficiency gains.",
    href: "/blog/ai-2025-automation-trends",
    type: "article",
    category: "AI Automation",
    readTime: "22 min read",
    isTrending: true,
    isFeatured: true,
    icon: "🤖",
    gradient: "from-green-500 to-blue-600"
  },
  {
    id: '3',
    title: "$200M Manufacturing Success Case Study",
    description: "How a Fortune 500 manufacturer achieved unprecedented results with autonomous AI systems, saving $200M annually.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    type: "case-study",
    category: "Case Study",
    readTime: "18 min read",
    isNew: true,
    isFeatured: true,
    icon: "💰",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    id: '4',
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies.",
    href: "/resources/ai-implementation-master-guide-2026",
    type: "resource",
    category: "Implementation Guide",
    readTime: "200+ pages",
    isNew: true,
    isFeatured: true,
    icon: "📖",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: '5',
    title: "AI Sustainability & Green Tech 2025",
    description: "Building eco-friendly AI systems for a sustainable future with 40% energy reduction strategies.",
    href: "/blog/ai-sustainability-green-tech-2025",
    type: "article",
    category: "Sustainability",
    readTime: "20 min read",
    isNew: true,
    icon: "🌱",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: '6',
    title: "AI Robotics & Automation Revolution",
    description: "The future of intelligent machines and how they're reshaping manufacturing and service industries.",
    href: "/blog/ai-robotics-automation-2025",
    type: "article",
    category: "Robotics",
    readTime: "22 min read",
    isTrending: true,
    icon: "🤖",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: '7',
    title: "AI Cybersecurity Checklist 2025",
    description: "150+ security items for secure AI implementation with compliance frameworks and best practices.",
    href: "/resources/ai-cybersecurity-checklist-2025",
    type: "resource",
    category: "Security",
    readTime: "150+ items",
    isNew: true,
    icon: "🛡️",
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: '8',
    title: "AI Workforce Transformation Playbook",
    description: "Complete reskilling strategies and implementation guides for the AI era workforce transformation.",
    href: "/resources/ai-workforce-transformation-playbook-2025",
    type: "resource",
    category: "Workforce",
    readTime: "150+ pages",
    isNew: true,
    icon: "👥",
    gradient: "from-indigo-500 to-purple-600"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'resource':
      return 'bg-purple-100 text-purple-800';
    case 'webinar':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'article':
      return 'Article';
    case 'case-study':
      return 'Case Study';
    case 'resource':
      return 'Resource';
    case 'webinar':
      return 'Webinar';
    default:
      return 'Content';
  }
};

export default function DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
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

  const currentItem = contentItems[currentIndex];
  const featuredItems = contentItems.filter(item => item.isFeatured);
>>>>>>> cursor/create-and-deploy-new-content-ddbf

  return (
    <section className={`py-16 bg-gradient-to-r from-gray-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI & Tech Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert analysis, real-world case studies, and actionable resources 
            that help you succeed in the AI-driven future.
          </p>
        </div>

        <div 
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{currentItem.icon}</div>
                <div className="flex items-center gap-2">
                  {currentItem.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {currentItem.isTrending && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      TRENDING
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{currentItem.category}</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                {currentItem.readTime && (
                  <span className="text-sm text-gray-500">{currentItem.readTime}</span>
                )}
                {currentItem.type && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{currentItem.type}</span>
                  </>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Read More →
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
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8 md:p-12">
              <div className="text-8xl opacity-80">
                {currentItem.icon}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && content.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Previous content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Next content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {showDots && content.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Preview Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">More Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.slice(0, 3).map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${
                  index === currentIndex ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
=======
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our comprehensive collection of AI articles, case studies, 
            and implementation guides. Fresh content published weekly.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Link href={currentItem.href} className="block">
              <div className={`bg-gradient-to-r ${currentItem.gradient} p-12 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-6xl">{currentItem.icon}</span>
                      <div>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(currentItem.type)}`}>
                          {getTypeLabel(currentItem.type)}
                        </span>
                        <div className="text-sm opacity-90 mt-1">{currentItem.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {currentItem.isNew && (
                        <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {currentItem.isTrending && (
                        <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {currentItem.title}
                  </h3>
                  <p className="text-xl opacity-90 mb-6 leading-relaxed max-w-3xl">
                    {currentItem.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm opacity-75">{currentItem.readTime}</span>
                      <span className="text-sm opacity-75">•</span>
                      <span className="text-sm opacity-75">Read More →</span>
                    </div>
                    <div className="text-sm opacity-75">
                      {currentIndex + 1} of {contentItems.length}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {item.isNew && (
                        <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
>>>>>>> cursor/create-and-deploy-new-content-ddbf
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.readTime}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.category}</span>
                  {item.readTime && (
                    <span>{item.readTime}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Explore All Our Content</h3>
            <p className="text-lg opacity-90 mb-6">
              Discover 100+ articles, case studies, and resources covering every aspect of AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Articles
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Case Studies
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-ddbf
      </div>
    </section>
  );
}