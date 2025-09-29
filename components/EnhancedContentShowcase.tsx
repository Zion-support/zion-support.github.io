import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  href: string;
  featured?: boolean;
  new?: boolean;
  stats?: {
    metric: string;
    value: string;
  };
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-bi-2026',
    title: 'AI Business Intelligence 2026: Next-Generation Decision Making',
    description: 'Transform your business with AI-powered BI that delivers real-time insights, predictive analytics, and 400% faster growth.',
    category: 'blog',
    readTime: '25 min read',
    publishDate: '2025-01-20',
    href: '/blog/ai-business-intelligence-2026',
    featured: true,
    new: true,
    stats: { metric: 'Growth Acceleration', value: '400%' },
    tags: ['AI', 'Business Intelligence', 'Analytics']
  },
  {
    id: 'autonomous-enterprise-success',
    title: 'AI Autonomous Enterprise Success 2026: $25M ROI Case Study',
    description: 'See how a Fortune 500 company achieved $25M ROI with AI autonomous enterprise systems. 99.9% uptime, 90% cost reduction.',
    category: 'case-study',
    readTime: '12 min read',
    publishDate: '2025-01-20',
    href: '/case-studies/ai-autonomous-enterprise-success-2026',
    featured: true,
    new: true,
    stats: { metric: 'ROI', value: '$25M' },
    tags: ['AI', 'Autonomous Enterprise', 'Case Study']
  },
  {
    id: 'autonomous-cloud-ops',
    title: 'AI Autonomous Cloud Operations 2026: Complete Self-Managing Infrastructure',
    description: 'Achieve 99.9% uptime with self-managing cloud infrastructure. Automated scaling, intelligent monitoring, and predictive maintenance.',
    category: 'guide',
    readTime: '30 min read',
    publishDate: '2025-01-19',
    href: '/blog/ai-autonomous-cloud-ops-2026',
    new: true,
    stats: { metric: 'Uptime', value: '99.9%' },
    tags: ['AI', 'Cloud Operations', 'Infrastructure']
  },
  {
    id: 'fintech-transformation',
    title: 'AI FinTech Transformation 2026: 95% Automation & $3M+ Savings',
    description: 'Revolutionize financial services with AI automation. 95% process automation, fraud detection, and $3M+ annual savings.',
    category: 'blog',
    readTime: '22 min read',
    publishDate: '2025-01-18',
    href: '/blog/ai-fintech-transformation-2026',
    new: true,
    stats: { metric: 'Automation', value: '95%' },
    tags: ['AI', 'FinTech', 'Automation']
  },
  {
    id: 'retail-automation',
    title: 'AI Retail Automation 2026: 150% Revenue Growth Case Study',
    description: 'See how retail automation achieved 150% revenue growth and 80% cost reduction with AI-powered systems.',
    category: 'case-study',
    readTime: '15 min read',
    publishDate: '2025-01-17',
    href: '/case-studies/ai-retail-automation-2026',
    new: true,
    stats: { metric: 'Revenue Growth', value: '150%' },
    tags: ['AI', 'Retail', 'Automation']
  },
  {
    id: 'autonomous-operations',
    title: 'AI Autonomous Operations 2026: Zero-Touch Business Management',
    description: 'Master autonomous AI operations with zero-touch business management, predictive analytics, and self-optimizing systems.',
    category: 'guide',
    readTime: '28 min read',
    publishDate: '2025-01-16',
    href: '/blog/ai-autonomous-operations-2026',
    stats: { metric: 'Cost Reduction', value: '90%' },
    tags: ['AI', 'Autonomous Operations', 'Management']
  }
];

export default function EnhancedContentShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'guide'>('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>(contentItems);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'guide': return '📚';
      default: return '📄';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🌟</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, proven case studies, and comprehensive implementation guides for 2026.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'All Content', count: contentItems.length },
            { key: 'blog', label: 'Articles', count: contentItems.filter(item => item.category === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
            { key: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredContent.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category.replace('-', ' ').toUpperCase()}
                    </span>
                    {item.new && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.stats && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{item.stats.metric}</span>
                        <span className="text-2xl font-bold text-blue-600">{item.stats.value}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                    </div>
                    <Link
                      href={item.href}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.filter(item => !item.featured).map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{getCategoryIcon(item.category)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.new && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {item.stats && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{item.stats.metric}</span>
                      <span className="text-lg font-bold text-blue-600">{item.stats.value}</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {item.readTime}
                  </div>
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Innovations
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get notified about new content, case studies, and AI breakthroughs that can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}