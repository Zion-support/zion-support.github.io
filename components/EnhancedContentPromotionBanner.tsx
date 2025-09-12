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
}

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-advanced-automation',
      title: 'AI Advanced Automation 2025: Complete Implementation Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn strategies that deliver 300%+ ROI and 60% cost reduction.',
      href: '/blog/ai-2025-advanced-automation',
      icon: '🤖',
      category: 'AI Automation',
      readTime: '22 min read',
      isNew: true
    },
    {
      id: 'generative-agents-production',
      title: 'Generative AI Agents in Production 2025',
      description: 'Deploy and manage AI agents in production environments. Achieve 99.9% uptime and 400%+ ROI with proven strategies.',
      href: '/blog/ai-2025-generative-agents-in-production',
      icon: '🧠',
      category: 'AI Agents',
      readTime: '28 min read',
      isTrending: true
    },
    {
      id: 'cybersecurity-breakthrough',
      title: '$50M Cybersecurity Transformation Success',
      description: 'How a Fortune 500 company achieved 99.8% threat detection accuracy and $50M in security cost savings.',
      href: '/case-studies/ai-cybersecurity-transformation-breakthrough-2025',
      icon: '🛡️',
      category: 'Case Study',
      type: 'Success Story',
      isNew: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our 200+ page comprehensive guide with templates, checklists, and proven strategies for AI success.',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      category: 'Free Resource',
      type: '200+ Pages',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];

  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Fresh AI & Tech Content Just Dropped
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Advanced AI Automation, Generative AI Agents, 
            Cybersecurity Success Stories, and comprehensive implementation guides. Expert insights 
            to accelerate your success in 2025.
          </p>
        </div>

        {/* Featured Content Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="text-6xl mb-4">{currentContent.icon}</div>
              <div className="flex gap-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.category}
                </span>
                {currentContent.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                )}
                {currentContent.isTrending && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  {currentContent.type ? 'Download Now' : 'Read Article'}
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              
              {currentContent.readTime && (
                <div className="mt-4 text-sm opacity-75">
                  {currentContent.readTime}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredContent.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setCurrentIndex(index)}
              className="group bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-sm font-semibold mb-1 line-clamp-2">
                {item.title}
              </h4>
              <div className="flex justify-center gap-1 mb-2">
                {item.isNew && (
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">NEW</span>
                )}
                {item.isTrending && (
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">HOT</span>
                )}
              </div>
              <div className="text-xs opacity-75">
                {item.readTime || item.type}
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg opacity-90 mb-4">
            Join 15,000+ AI professionals who trust our content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              📋 Download Resources
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              📊 View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentPromotionBanner;