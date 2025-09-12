import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featured: boolean;
  isNew: boolean;
}

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'neural-architecture-optimization',
      title: 'Neural Architecture Optimization: The Next Frontier',
      description: 'Explore how neural architecture search is revolutionizing AI efficiency, reducing costs by 90% while improving performance.',
      href: '/blog/ai-2025-neural-architecture-optimization',
      category: 'AI Optimization',
      readTime: '15 min read',
      difficulty: 'Advanced',
      tags: ['Neural Architecture Search', 'AI Optimization', 'Edge Computing', 'AutoML'],
      featured: true,
      isNew: true
    },
    {
      id: 'space-exploration-breakthrough',
      title: 'AI-Powered Space Exploration: The Next Giant Leap',
      description: 'Discover how AI is revolutionizing space exploration, from autonomous spacecraft to Mars colonization and beyond.',
      href: '/blog/ai-2025-space-exploration-breakthrough',
      category: 'Space Technology',
      readTime: '18 min read',
      difficulty: 'Intermediate',
      tags: ['Space Technology', 'Autonomous Systems', 'Mars Mission', 'AI Exploration'],
      featured: true,
      isNew: true
    },
    {
      id: 'global-logistics-transformation',
      title: 'Global Logistics Transformation: 40% Cost Reduction',
      description: 'Fortune 500 case study showing how AI revolutionized supply chain operations with $2.3B annual savings.',
      href: '/case-studies/ai-2025-global-logistics-transformation',
      category: 'Case Study',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      tags: ['Logistics', 'Supply Chain', 'Fortune 500', 'Cost Reduction'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-masterclass',
      title: 'AI Implementation Masterclass: Complete Guide',
      description: 'Master enterprise AI implementation with our comprehensive guide covering strategy, technology, and ROI optimization.',
      href: '/resources/ai-2025-comprehensive-implementation-masterclass',
      category: 'Masterclass',
      readTime: '45 min read',
      difficulty: 'Advanced',
      tags: ['Implementation', 'Enterprise AI', 'Strategy', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation 2025',
      description: 'Complete implementation guide with real-world case studies and proven strategies for enterprise AI adoption.',
      href: '/blog/ai-2025-enterprise-ai-transformation',
      category: 'Enterprise AI',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      tags: ['Enterprise AI', 'Transformation', 'Implementation', 'Strategy'],
      featured: true,
      isNew: false
    },
    {
      id: 'healthcare-diagnosis-revolution',
      title: 'AI Healthcare Diagnosis Revolution',
      description: 'Discover how AI is transforming medical diagnosis with 67% reduction in errors and 40-60% accuracy improvements.',
      href: '/blog/ai-healthcare-diagnosis-revolution-2025',
      category: 'Healthcare AI',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      tags: ['Healthcare', 'Medical AI', 'Diagnosis', 'Accuracy'],
      featured: true,
      isNew: false
    },
    {
      id: 'ai-automation-guide',
      title: 'AI Automation Enterprise Guide',
      description: 'Master enterprise AI automation with comprehensive strategies, tools, and implementation frameworks.',
      href: '/resources/ai-automation-enterprise-guide-2025',
      category: 'Automation',
      readTime: 'Guide',
      difficulty: 'Intermediate',
      tags: ['Automation', 'Enterprise', 'Implementation', 'Frameworks'],
      featured: true,
      isNew: false
    },
    {
      id: 'multimodal-ai-revolution',
      title: 'Multimodal AI Revolution 2025',
      description: 'Explore the future of AI with multimodal systems that process text, images, audio, and video simultaneously.',
      href: '/blog/ai-2025-multimodal-revolution',
      category: 'AI Innovation',
      readTime: '20 min read',
      difficulty: 'Advanced',
      tags: ['Multimodal AI', 'Computer Vision', 'NLP', 'Innovation'],
      featured: true,
      isNew: false
    },
    {
      id: 'robotics-automation',
      title: 'Advanced Robotics & AI Integration',
      description: 'The future of manufacturing with intelligent robotic systems that adapt and learn from their environment.',
      href: '/blog/ai-2025-robotics-automation',
      category: 'Robotics',
      readTime: '16 min read',
      difficulty: 'Advanced',
      tags: ['Robotics', 'Manufacturing', 'AI Integration', 'Automation'],
      featured: true,
      isNew: false
    },
    {
      id: 'sustainability-green-tech',
      title: 'AI for Sustainability & Green Tech',
      description: 'How AI is driving environmental solutions and sustainable technology innovations for a greener future.',
      href: '/blog/ai-2025-sustainability-green-tech',
      category: 'Sustainability',
      readTime: '14 min read',
      difficulty: 'Intermediate',
      tags: ['Sustainability', 'Green Tech', 'Environmental AI', 'Climate'],
      featured: true,
      isNew: false
    }
  ];

  const categories = ['All', 'AI Optimization', 'Space Technology', 'Case Study', 'Masterclass', 'Enterprise AI', 'Healthcare AI', 'Automation', 'AI Innovation', 'Robotics', 'Sustainability'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Optimization': 'bg-blue-100 text-blue-800',
      'Space Technology': 'bg-purple-100 text-purple-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Masterclass': 'bg-orange-100 text-orange-800',
      'Enterprise AI': 'bg-indigo-100 text-indigo-800',
      'Healthcare AI': 'bg-pink-100 text-pink-800',
      'Automation': 'bg-cyan-100 text-cyan-800',
      'AI Innovation': 'bg-violet-100 text-violet-800',
      'Robotics': 'bg-gray-100 text-gray-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover AI Content</h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore our comprehensive collection of AI resources, case studies, and implementation guides. 
          Filter by category, difficulty level, or search for specific topics.
        </p>

        {/* Search and Filters */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search content, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

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
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
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

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.readTime}</span>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span>Read more</span>
                  <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
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
            Try adjusting your search criteria or browse all content.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">{contentItems.length}</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              {contentItems.filter(item => item.isNew).length}
            </div>
            <div className="text-sm text-gray-600">New This Month</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {contentItems.filter(item => item.category === 'Case Study').length}
            </div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {contentItems.filter(item => item.category === 'Masterclass').length}
            </div>
            <div className="text-sm text-gray-600">Masterclasses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;