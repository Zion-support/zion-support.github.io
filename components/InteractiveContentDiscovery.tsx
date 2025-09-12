import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar';
  category: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production Guide',
      description: 'Master production-ready RAG systems with advanced patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      category: 'Advanced AI',
      readTime: '25 min read',
      featured: true,
      tags: ['RAG', 'Production', 'AI Architecture', 'Vector Databases']
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025',
      description: 'Explore how vision, voice, and text integration is revolutionizing human-computer interaction and AI applications.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      category: 'Multimodal AI',
      readTime: '28 min read',
      featured: true,
      tags: ['Multimodal', 'Computer Vision', 'Voice AI', 'Integration']
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Discover quantum computing breakthroughs in machine learning, enabling exponential speedups for complex problems.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '32 min read',
      featured: true,
      tags: ['Quantum Computing', 'Machine Learning', 'Optimization', 'Algorithms']
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings and 300% productivity gains.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      category: 'Case Study',
      readTime: '15 min read',
      featured: true,
      tags: ['Manufacturing', 'Automation', 'ROI', 'Success Story']
    },
    {
      id: '5',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '22 min read',
      featured: false,
      tags: ['Enterprise', 'Automation', 'ROI', 'Efficiency']
    },
    {
      id: '6',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      category: 'Healthcare AI',
      readTime: '20 min read',
      featured: false,
      tags: ['Healthcare', 'Diagnosis', 'Medical AI', 'Accuracy']
    },
    {
      id: '7',
      title: 'AI Financial Services Transformation',
      description: 'Complete case study: How a major bank achieved 300% ROI through strategic AI implementation.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      readTime: '18 min read',
      featured: false,
      tags: ['Finance', 'Banking', 'Transformation', 'ROI']
    },
    {
      id: '8',
      title: 'AI Implementation Masterclass 2025',
      description: 'Comprehensive webinar covering end-to-end AI implementation strategies, best practices, and real-world success stories.',
      href: '/webinars/ai-2025-implementation-masterclass',
      type: 'webinar',
      category: 'Webinar',
      readTime: '90 min watch',
      featured: false,
      tags: ['Masterclass', 'Implementation', 'Strategy', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'Advanced AI', name: 'Advanced AI', count: contentItems.filter(item => item.category === 'Advanced AI').length },
    { id: 'Multimodal AI', name: 'Multimodal AI', count: contentItems.filter(item => item.category === 'Multimodal AI').length },
    { id: 'Quantum AI', name: 'Quantum AI', count: contentItems.filter(item => item.category === 'Quantum AI').length },
    { id: 'Case Study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'Case Study').length },
    { id: 'Enterprise AI', name: 'Enterprise AI', count: contentItems.filter(item => item.category === 'Enterprise AI').length },
    { id: 'Healthcare AI', name: 'Healthcare AI', count: contentItems.filter(item => item.category === 'Healthcare AI').length },
    { id: 'Webinar', name: 'Webinars', count: contentItems.filter(item => item.category === 'Webinar').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      case 'webinar':
        return '🎥';
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
      case 'webinar':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI insights, case studies, and implementation guides 
            from industry experts. Find exactly what you need to accelerate your AI journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {item.type === 'case-study' ? 'Case Study' : 
                     item.type === 'webinar' ? 'Webinar' : 
                     item.type === 'service' ? 'Service' : 'Article'}
                  </span>
                </div>
                {item.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{item.readTime}</span>
                <span>{item.category}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI experts can create custom content tailored to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-consulting"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Custom Content
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;