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
  date: string;
  tags: string[];
}

interface InteractiveContentDiscoveryProps {
  className?: string;
}

const InteractiveContentDiscovery: React.FC<InteractiveContentDiscoveryProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'quantum-ai',
      title: 'AI 2025: Quantum Computing Breakthrough',
      description: 'Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications and quantum machine learning.',
      href: '/blog/ai-2025-quantum-computing-breakthrough',
      icon: '⚛️',
      category: 'Quantum AI',
      readTime: '28 min read',
      date: 'Jan 30, 2025',
      tags: ['quantum', 'computing', 'breakthrough', 'AI', 'machine learning']
    },
    {
      id: 'neural-interface',
      title: 'AI 2025: Neural Interface Revolution',
      description: 'Explore revolutionary neural interface technologies transforming healthcare, communication, and human-AI interaction.',
      href: '/blog/ai-2025-neural-interface-revolution',
      icon: '🧠',
      category: 'Neural AI',
      readTime: '32 min read',
      date: 'Jan 31, 2025',
      tags: ['neural', 'interface', 'brain-computer', 'healthcare', 'AI']
    },
    {
      id: 'space-exploration',
      title: 'AI Space Exploration Breakthrough 2025',
      description: 'How AI-powered autonomous spacecraft achieved unprecedented success in deep space exploration with $2B mission value.',
      href: '/case-studies/ai-space-exploration-breakthrough-2025',
      icon: '🚀',
      category: 'Space AI',
      type: 'Case Study',
      date: 'Feb 01, 2025',
      tags: ['space', 'exploration', 'autonomous', 'spacecraft', 'AI']
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2025',
      description: 'Complete 200+ page resource with step-by-step instructions, templates, and best practices for successful AI deployment.',
      href: '/resources/ai-2025-implementation-master-guide',
      icon: '📚',
      category: 'Master Guide',
      type: 'Free Download',
      date: 'Feb 01, 2025',
      tags: ['implementation', 'guide', 'templates', 'checklist', 'AI']
    },
    {
      id: 'breakthrough-innovations',
      title: 'AI Breakthrough Innovations 2025',
      description: 'Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI technologies.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      category: 'AI Innovations',
      readTime: '25 min read',
      date: 'Jan 30, 2025',
      tags: ['breakthrough', 'innovations', 'AGI', 'quantum', 'AI']
    },
    {
      id: 'sustainability',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Building eco-friendly AI systems for the future. Learn about sustainable AI practices and green technology solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      icon: '🌱',
      category: 'Sustainability',
      readTime: '20 min read',
      date: 'Jan 29, 2025',
      tags: ['sustainability', 'green tech', 'eco-friendly', 'environment', 'AI']
    }
  ];

  const categories = ['all', 'Quantum AI', 'Neural AI', 'Space AI', 'AI Innovations', 'Sustainability', 'Master Guide'];
  const allTags = ['quantum', 'computing', 'neural', 'interface', 'space', 'exploration', 'breakthrough', 'AI', 'machine learning', 'healthcare', 'sustainability', 'green tech', 'implementation', 'guide'];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(item => 
        selectedTags.some(tag => item.tags.includes(tag))
      );
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
  }, [selectedCategory, selectedTags, searchQuery]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSearchQuery('');
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🔍 Interactive Content Discovery</h2>
        <p className="text-lg text-gray-600">
          Find the perfect content for your needs. Filter by category, tags, or search for specific topics.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search content by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Content' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery) && (
        <div className="mb-6">
          <button
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredContent.length} of {contentItems.length} content items
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <Link key={item.id} href={item.href} className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                {item.type && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full ml-2 mb-2">
                    {item.type}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.date}</span>
                {item.readTime && <span>{item.readTime}</span>}
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms to find more content.
          </p>
          <button
            onClick={clearFilters}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/content-showcase"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Content
          </Link>
          <Link
            href="/blog"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Browse Articles
          </Link>
          <Link
            href="/resources"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Download Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;