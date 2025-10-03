import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'service';
  category: string;
  readTime: string;
  description: string;
  href: string;
  tags: string[];
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'Neural Architecture Search (NAS) 2026: Automated AI Model Design Revolution',
    type: 'blog',
    category: 'AI Research',
    readTime: '25 min',
    description: 'Discover how Neural Architecture Search is revolutionizing AI model design with 90% faster development cycles and 40% better performance.',
    href: '/blog/ai-neural-architecture-search-2026',
    tags: ['NAS', 'AI Development', 'Automation', 'Enterprise'],
    featured: true
  },
  {
    id: '2',
    title: 'AI Content Generation 2026: Revolutionary Tools for Enterprise Content Creation',
    type: 'blog',
    category: 'Content AI',
    readTime: '20 min',
    description: 'Transform enterprise content creation with 95% efficiency gains, 80% cost reduction, and personalized content at scale.',
    href: '/blog/ai-content-generation-2026',
    tags: ['Content Generation', 'Marketing', 'Automation', 'Personalization'],
    featured: true
  },
  {
    id: '3',
    title: 'AI Neural Architecture Search Success: 90% Faster Development, 40% Better Performance',
    type: 'case-study',
    category: 'Success Story',
    readTime: '15 min',
    description: 'See how TechVision Corp achieved 90% reduction in AI model development time and 40% performance improvement using NAS.',
    href: '/case-studies/ai-neural-architecture-search-mega-success-2026',
    tags: ['NAS', 'Fortune 500', 'ROI', 'Performance'],
    featured: true
  },
  {
    id: '4',
    title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
    type: 'blog',
    category: 'AI Integration',
    readTime: '22 min',
    description: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration.',
    href: '/blog/ai-multimodal-integration-2025',
    tags: ['Multimodal AI', 'Enterprise', 'Integration', 'Future Tech'],
    featured: false
  },
  {
    id: '5',
    title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '20 min',
    description: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps.',
    href: '/blog/ai-enterprise-adoption-2025',
    tags: ['Enterprise AI', 'Implementation', 'ROI', 'Strategy'],
    featured: false
  },
  {
    id: '6',
    title: 'Multimodal AI Customer Service: 80% Faster Response Times',
    type: 'case-study',
    category: 'Customer Service',
    readTime: '12 min',
    description: 'See how a leading e-commerce company achieved 80% faster response times with multimodal AI.',
    href: '/case-studies/multimodal-ai-customer-service-transformation',
    tags: ['Customer Service', 'E-commerce', 'Multimodal AI', 'Efficiency'],
    featured: false
  }
];

const categories = ['All', 'AI Research', 'Content AI', 'Enterprise AI', 'AI Integration', 'Customer Service', 'Success Story'];

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchTerm]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'service': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Research': return 'bg-purple-100 text-purple-800';
      case 'Content AI': return 'bg-green-100 text-green-800';
      case 'Enterprise AI': return 'bg-blue-100 text-blue-800';
      case 'AI Integration': return 'bg-indigo-100 text-indigo-800';
      case 'Customer Service': return 'bg-orange-100 text-orange-800';
      case 'Success Story': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Cutting-Edge AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest research, case studies, and insights on AI transformation. 
            Use our interactive discovery tool to find content tailored to your interests.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📊 {filteredContent.length} articles found</span>
              <span>🏷️ {new Set(filteredContent.map(item => item.category)).size} categories</span>
              <span>⏱️ {filteredContent.reduce((total, item) => total + parseInt(item.readTime), 0)} min total reading</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 text-center">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                    {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Article' : 'Service'}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime} read</span>
                  <Link
                    href={item.href}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find relevant content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Content Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(selectedItem.type)}`}>
                      {selectedItem.type === 'case-study' ? 'Case Study' : selectedItem.type === 'blog' ? 'Article' : 'Service'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedItem.category)}`}>
                      {selectedItem.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{selectedItem.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                  <span>⏱️ {selectedItem.readTime} read</span>
                  <span>📊 {selectedItem.category}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={selectedItem.href}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Read Full Article
                  </Link>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Want More AI Insights?</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for the latest AI research, case studies, and implementation guides.
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
          </div>
        </div>
      </div>
    </section>
  );
}