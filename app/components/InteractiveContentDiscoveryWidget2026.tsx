import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  url: string;
  tags: string[];
}

const InteractiveContentDiscoveryWidget2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'quantum-neural-breakthrough',
      title: 'AI 2026: Quantum Neural Breakthrough - Ultimate Guide',
      description: 'Discover how quantum neural networks are revolutionizing AI in 2026, delivering unprecedented computational power and intelligence capabilities.',
      category: 'AI Innovation',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-2026-quantum-neural-breakthrough-ultimate-guide',
      tags: ['quantum computing', 'neural networks', 'AI 2026', 'breakthrough technology']
    },
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2026: Autonomous Enterprise Revolution - Complete Guide',
      description: 'Transform your organization into a fully autonomous enterprise with AI 2026 technologies. Self-managing business systems that operate with minimal human intervention.',
      category: 'Enterprise Automation',
      readTime: '15 min read',
      featured: true,
      url: '/blog/ai-2026-autonomous-enterprise-revolution-complete-guide',
      tags: ['autonomous enterprise', 'AI 2026', 'self-managing systems', 'business automation']
    },
    {
      id: 'quantum-cybersecurity-breakthrough',
      title: 'AI 2026: Quantum Cybersecurity Breakthrough - Ultimate Guide',
      description: 'Discover the revolutionary quantum cybersecurity technologies that will protect your organization from next-generation threats in 2026 and beyond.',
      category: 'Cybersecurity',
      readTime: '10 min read',
      featured: true,
      url: '/blog/ai-2026-quantum-cybersecurity-breakthrough-ultimate-guide',
      tags: ['quantum cybersecurity', 'AI 2026', 'quantum encryption', 'cyber defense']
    },
    {
      id: 'ai-2025-cybersecurity-revolution',
      title: 'AI 2025: Cybersecurity Revolution - Next Generation Threat Protection',
      description: 'Advanced AI-powered cybersecurity solutions that protect against sophisticated threats and ensure enterprise security.',
      category: 'Cybersecurity',
      readTime: '8 min read',
      featured: false,
      url: '/blog/ai-2025-cybersecurity-revolution-next-generation-threat-protection',
      tags: ['cybersecurity', 'AI 2025', 'threat protection', 'enterprise security']
    },
    {
      id: 'ai-2025-enterprise-automation',
      title: 'AI 2025: Enterprise Automation Revolution',
      description: 'Comprehensive guide to implementing AI automation across enterprise operations for maximum efficiency and productivity.',
      category: 'Enterprise Automation',
      readTime: '11 min read',
      featured: false,
      url: '/blog/ai-2025-enterprise-automation-revolution',
      tags: ['enterprise automation', 'AI 2025', 'productivity', 'efficiency']
    },
    {
      id: 'ai-2026-quantum-computing',
      title: 'AI 2026: Quantum Computing Breakthrough',
      description: 'Explore the revolutionary impact of quantum computing on artificial intelligence and business applications.',
      category: 'AI Innovation',
      readTime: '9 min read',
      featured: false,
      url: '/blog/ai-2026-quantum-computing-breakthrough',
      tags: ['quantum computing', 'AI 2026', 'breakthrough', 'business applications']
    }
  ];

  const categories = ['all', 'AI Innovation', 'Enterprise Automation', 'Cybersecurity'];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2026 guides, case studies, and breakthrough technologies. 
            Find the perfect content for your business transformation journey.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, topics, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Content' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get personalized recommendations and expert consultation for your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2026;