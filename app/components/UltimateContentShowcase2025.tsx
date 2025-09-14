import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    timeframe?: string;
    satisfaction?: string;
  };
  tags: string[];
  readingTime?: string;
  featured?: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Breakthrough - 1,500% ROI in 12 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$4.2M',
        timeframe: '12 months',
        satisfaction: '99.7%'
      },
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Digital Transformation'],
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-1500-roi-ultimate-success',
      title: 'Fortune 500 AI Transformation: $8.2B Company Achieves 1,500% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success',
      metrics: {
        roi: '1,500%',
        savings: '$4.2M',
        timeframe: '12 months',
        satisfaction: '99.8%'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI'],
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution-ultimate-guide',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - Ultimate Guide to 2,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution-ultimate-guide',
      metrics: {
        roi: '2,000%',
        savings: '$8.7M',
        timeframe: '18 months',
        satisfaction: '99.9%'
      },
      tags: ['Autonomous Systems', 'Enterprise', 'ROI', 'AI Revolution'],
      readingTime: '32 min read',
      featured: true
    },
    {
      id: 'ai-2025-generative-ai-enterprise-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      metrics: {
        roi: '340%',
        savings: '$180M',
        satisfaction: '98%'
      },
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation'],
      readingTime: '25 min read'
    },
    {
      id: 'retail-ai-transformation-2025-ultimate-success',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%'
      },
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study'],
      readingTime: '18 min read'
    },
    {
      id: 'ai-2025-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        timeframe: '12 months'
      },
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Guide'],
      readingTime: '35 min read'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const featuredContent = contentItems.filter(item => item.featured);

  // Auto-rotate featured content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
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

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That's Transforming Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, case studies, and implementation guides that are helping companies achieve unprecedented ROI and operational excellence.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Featured Content</h3>
                <div className="flex space-x-2">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{getTypeIcon(featuredContent[currentIndex]?.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(featuredContent[currentIndex]?.type)}`}>
                      {featuredContent[currentIndex]?.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {featuredContent[currentIndex]?.title}
                  </h4>
                  <p className="text-lg opacity-90 mb-6">
                    {featuredContent[currentIndex]?.readingTime} • {featuredContent[currentIndex]?.tags.slice(0, 3).join(', ')}
                  </p>
                  <Link
                    href={featuredContent[currentIndex]?.url || '#'}
                    className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Read Now →
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-1">{featuredContent[currentIndex]?.metrics.roi}</div>
                    <div className="text-sm opacity-90">ROI Achieved</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-1">{featuredContent[currentIndex]?.metrics.savings}</div>
                    <div className="text-sm opacity-90">Cost Savings</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-1">{featuredContent[currentIndex]?.metrics.timeframe || 'N/A'}</div>
                    <div className="text-sm opacity-90">Timeframe</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-1">{featuredContent[currentIndex]?.metrics.satisfaction || 'N/A'}</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors mr-4 mb-4 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3">
                  {item.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already achieving unprecedented ROI with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;