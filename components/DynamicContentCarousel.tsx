import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study';
  readTime: string;
  value?: string;
  icon: string;
  category: string;
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-agents',
    title: 'Advanced AI Agents Revolution',
    description: 'Autonomous AI agents transforming business operations with 340% productivity increase and multi-agent orchestration systems.',
    href: '/blog/ai-2025-advanced-ai-agents',
    type: 'blog',
    readTime: '12 min read',
    icon: '🤖',
    category: 'AI Technology',
    featured: true
  },
  {
    id: 'quantum-ai',
    title: 'Quantum AI Breakthrough',
    description: 'Revolutionary intersection of quantum computing and AI with 1Mx speedup in optimization problems and real-time applications.',
    href: '/blog/ai-2025-quantum-ai-breakthrough',
    type: 'blog',
    readTime: '15 min read',
    icon: '⚛️',
    category: 'Breakthrough Technology',
    featured: true
  },
  {
    id: 'enterprise-transformation',
    title: '$3.2B Enterprise AI Transformation',
    description: 'Fortune 500 company achieved unprecedented AI transformation success, creating $3.2B in value through comprehensive implementation.',
    href: '/case-studies/ai-2025-enterprise-ai-transformation-success',
    type: 'case-study',
    readTime: '18 min read',
    value: '$3.2B',
    icon: '🏆',
    category: 'Success Story',
    featured: true
  },
  {
    id: 'financial-ai',
    title: '$5.7B Financial Services AI Revolution',
    description: 'Leading global bank achieved unprecedented success through comprehensive AI implementation, creating $5.7B in value.',
    href: '/case-studies/ai-2025-financial-services-ai-revolution',
    type: 'case-study',
    readTime: '20 min read',
    value: '$5.7B',
    icon: '🏦',
    category: 'Financial Services',
    featured: true
  },
  {
    id: 'ai-governance',
    title: 'Enterprise AI Governance Master Guide',
    description: 'Complete ethical AI governance framework with 340% ROI, compliance strategies, and implementation playbooks.',
    href: '/blog/ai-2025-enterprise-ai-governance',
    type: 'blog',
    readTime: '25 min read',
    icon: '🏛️',
    category: 'AI Governance',
    featured: false
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI Revolution',
    description: '300% accuracy boost with vision, audio & sensor fusion transforming industries with advanced neural networks.',
    href: '/blog/ai-2025-multimodal-revolution',
    type: 'blog',
    readTime: '28 min read',
    icon: '👁️',
    category: 'AI Technology',
    featured: false
  }
];

export default function DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredItems = contentItems.filter(item => item.featured);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = featuredItems[currentIndex];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Content Spotlight
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our most impactful AI insights, breakthrough technologies, and real-world success stories
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-96 md:h-80">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="w-full px-8 md:px-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl mr-4">{currentItem.icon}</span>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {currentItem.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{currentItem.readTime}</span>
                        {currentItem.value && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="font-semibold text-green-600">{currentItem.value} Value</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {currentItem.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentItem.href}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      {currentItem.type === 'blog' ? 'Read Article' : 'View Case Study'}
                    </Link>
                    <Link
                      href="/content-showcase"
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                    >
                      Explore All Content
                    </Link>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                    <div className="text-8xl mb-4">{currentItem.icon}</div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {currentItem.type === 'case-study' ? 'Success Story' : 'Expert Guide'}
                    </div>
                    <div className="text-gray-600">
                      {currentItem.type === 'case-study' ? 'Real-world transformation results' : 'In-depth technical insights'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 hover:text-gray-900 p-2 rounded-full shadow-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 hover:text-gray-900 p-2 rounded-full shadow-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 p-4 bg-gray-50">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Quick Access to All Content
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Latest Articles</h4>
              <p className="text-gray-600 mb-4">Expert insights on AI trends, implementation strategies, and business transformation</p>
              <div className="text-blue-600 font-medium group-hover:underline">Browse Articles →</div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">Success Stories</h4>
              <p className="text-gray-600 mb-4">Real-world case studies showcasing AI transformations and measurable results</p>
              <div className="text-green-600 font-medium group-hover:underline">View Case Studies →</div>
            </div>
          </Link>

          <Link href="/content-showcase" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Content Showcase</h4>
              <p className="text-gray-600 mb-4">Comprehensive collection of all our AI resources, guides, and success stories</p>
              <div className="text-purple-600 font-medium group-hover:underline">Explore All →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}