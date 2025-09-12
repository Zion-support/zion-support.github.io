import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'resource' | 'case-study';
  url: string;
  readTime: string;
  category: string;
  featured: boolean;
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Advanced Automation 2025: Complete Business Transformation Guide',
    description: 'Discover how advanced AI automation is revolutionizing businesses with real-world case studies and implementation strategies.',
    type: 'blog',
    url: '/blog/ai-2025-advanced-automation',
    readTime: '15 min',
    category: 'AI & Automation',
    featured: true,
    publishDate: '2025-01-15'
  },
  {
    id: '2',
    title: 'Quantum Computing Business Revolution 2025: The Next Frontier',
    description: 'Explore how quantum computing is transforming industries with practical applications and competitive advantages.',
    type: 'blog',
    url: '/blog/quantum-computing-business-revolution-2025',
    readTime: '18 min',
    category: 'Quantum Technology',
    featured: true,
    publishDate: '2025-01-14'
  },
  {
    id: '3',
    title: 'AI Implementation Success Framework 2025: Complete Guide',
    description: 'Master AI implementation with our comprehensive success framework, proven strategies, and step-by-step methodologies.',
    type: 'resource',
    url: '/resources/ai-implementation-success-framework-2025',
    readTime: '45 min',
    category: 'Implementation',
    featured: true,
    publishDate: '2025-01-13'
  },
  {
    id: '4',
    title: 'Multimodal AI Revolution: Beyond Text and Images',
    description: 'Learn how multimodal AI is creating new possibilities by combining text, images, audio, and video processing.',
    type: 'blog',
    url: '/blog/ai-2025-multimodal-revolution',
    readTime: '12 min',
    category: 'AI Innovation',
    featured: false,
    publishDate: '2025-01-12'
  },
  {
    id: '5',
    title: 'Enterprise AI Security: Advanced Threat Protection',
    description: 'Comprehensive guide to securing AI systems in enterprise environments with advanced threat detection and prevention.',
    type: 'resource',
    url: '/resources/ai-enterprise-security-2025',
    readTime: '30 min',
    category: 'Security',
    featured: false,
    publishDate: '2025-01-11'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog': return '📝';
    case 'resource': return '📚';
    case 'case-study': return '📊';
    default: return '📄';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog': return 'from-blue-500 to-blue-600';
    case 'resource': return 'from-green-500 to-green-600';
    case 'case-study': return 'from-purple-500 to-purple-600';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function EnhancedContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = contentItems.filter(item => item.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const currentItem = featuredContent[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Promotion Banner */}
      <section className="py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW CONTENT JUST DROPPED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎉 Massive Content Update: 20+ New AI Resources Just Released!
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
              Discover our latest breakthrough content: Advanced AI Automation, Quantum Computing Revolution, 
              Implementation Success Frameworks, plus new case studies and expert guides. Get ahead with the 
              technologies transforming 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore All New Content
              </Link>
              <Link
                href="/blog/ai-2025-advanced-automation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Read Latest Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Carousel */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Content Spotlight
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful content, handpicked by our experts
            </p>
          </div>

          <div className="relative">
            {/* Featured Item Display */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className={`h-48 md:h-full bg-gradient-to-br ${getTypeColor(currentItem.type)} flex items-center justify-center`}>
                    <div className="text-6xl">{getTypeIcon(currentItem.type)}</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {currentItem.category}
                    </span>
                    <span className="text-gray-500 text-sm">{currentItem.readTime} read</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500 text-sm">{currentItem.publishDate}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentItem.title}
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {currentItem.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentItem.url}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Read Full Article
                    </Link>
                    <Link
                      href="/content-showcase"
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
                    >
                      View All Content
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredContent.map((_, index) => (
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
      </section>

      {/* Trending Topics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trending Topics This Week
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our readers are most interested in right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { topic: 'AI Automation', count: '2.3K', trend: '+15%', color: 'blue' },
              { topic: 'Quantum Computing', count: '1.8K', trend: '+22%', color: 'purple' },
              { topic: 'Machine Learning', count: '3.1K', trend: '+8%', color: 'green' },
              { topic: 'Digital Transformation', count: '1.5K', trend: '+18%', color: 'orange' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{item.topic}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {item.trend}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{item.count}</p>
                <p className="text-sm text-gray-600">weekly views</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Get exclusive access to our latest content, expert insights, and implementation guides delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              Join 10,000+ professionals already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}