import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service';
  category: string;
  readTime: string;
  featured: boolean;
  image?: string;
  stats?: {
    views?: number;
    likes?: number;
    shares?: number;
  };
}

const EnhancedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'case-study' | 'service'>('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains. Learn about cutting-edge tools and implementation strategies.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '15 min read',
      featured: true,
      stats: { views: 12500, likes: 340, shares: 89 }
    },
    {
      id: '2',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs. Explore the future of healthcare AI.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      category: 'Healthcare AI',
      readTime: '12 min read',
      featured: true,
      stats: { views: 8900, likes: 267, shares: 156 }
    },
    {
      id: '3',
      title: 'AI Financial Services Transformation Success',
      description: 'Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Real results and proven strategies.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      category: 'Financial Services',
      readTime: '18 min read',
      featured: true,
      stats: { views: 15600, likes: 445, shares: 203 }
    },
    {
      id: '4',
      title: 'AI Automation Services',
      description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction, 99.9% accuracy.',
      href: '/services/ai-automation',
      type: 'service',
      category: 'AI Services',
      readTime: '10 min read',
      featured: true,
      stats: { views: 22000, likes: 567, shares: 134 }
    },
    {
      id: '5',
      title: 'AI Retail Personalization Success 2025',
      description: 'How leading retailers are using AI to create personalized shopping experiences and increase sales by 40%.',
      href: '/case-studies/ai-retail-personalization-success-2025',
      type: 'case-study',
      category: 'Retail AI',
      readTime: '14 min read',
      featured: false,
      stats: { views: 7800, likes: 189, shares: 67 }
    },
    {
      id: '6',
      title: 'AI Cybersecurity Best Practices 2025',
      description: 'Essential AI cybersecurity strategies to protect your business from evolving threats. Expert insights and implementation guides.',
      href: '/blog/ai-cybersecurity-best-practices-2025',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '11 min read',
      featured: false,
      stats: { views: 11200, likes: 298, shares: 145 }
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'service':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our comprehensive collection of AI articles, case studies, 
            and service offerings. Discover the latest trends and proven strategies.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            {[
              { key: 'all', label: 'All Content', count: contentItems.length },
              { key: 'blog', label: 'Articles', count: contentItems.filter(item => item.type === 'blog').length },
              { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
              { key: 'service', label: 'Services', count: contentItems.filter(item => item.type === 'service').length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        {activeTab === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {contentItems.filter(item => item.featured).slice(0, 2).map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{getTypeIcon(item.type)}</span>
                    <div>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-600">{item.readTime}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href}
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Read More
                    </Link>
                    {item.stats && (
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>👁️ {formatNumber(item.stats.views || 0)}</span>
                        <span>❤️ {formatNumber(item.stats.likes || 0)}</span>
                        <span>📤 {formatNumber(item.stats.shares || 0)}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{getTypeIcon(item.type)}</span>
                  <div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">{item.readTime}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={item.href}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Read More →
                  </Link>
                  {item.stats && (
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>👁️ {formatNumber(item.stats.views || 0)}</span>
                      <span>❤️ {formatNumber(item.stats.likes || 0)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with AI Insights
            </h3>
            <p className="text-xl mb-8 text-indigo-100">
              Get the latest AI content, case studies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;