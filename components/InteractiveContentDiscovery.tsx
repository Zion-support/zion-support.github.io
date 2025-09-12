import React, { useState } from 'react';
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
  icon: string;
  featured?: boolean;
  isNew?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'Advanced AI Architecture Patterns for 2025',
    description: 'Building scalable, cost-effective systems with 300%+ ROI',
    href: '/blog/ai-2025-advanced-ai-architecture',
    category: 'AI Architecture',
    readTime: '25 min read',
    difficulty: 'Advanced',
    tags: ['Architecture', 'Scalability', 'ROI', 'Enterprise'],
    icon: '🏗️',
    featured: true,
    isNew: true
  },
  {
    id: '2',
    title: 'AI Automation Trends 2025',
    description: 'Complete guide to enterprise transformation with 400%+ ROI',
    href: '/blog/ai-2025-automation-trends',
    category: 'AI Automation',
    readTime: '22 min read',
    difficulty: 'Intermediate',
    tags: ['Automation', 'Enterprise', 'Trends', 'ROI'],
    icon: '🤖',
    featured: true,
    isNew: true
  },
  {
    id: '3',
    title: '$200M Manufacturing Success Case Study',
    description: 'How Fortune 500 achieved 60% efficiency gains with autonomous AI',
    href: '/case-studies/ai-autonomous-manufacturing-success-2025',
    category: 'Case Study',
    readTime: '15 min read',
    difficulty: 'Intermediate',
    tags: ['Manufacturing', 'Case Study', 'ROI', 'Success'],
    icon: '💰',
    featured: true,
    isNew: true
  },
  {
    id: '4',
    title: 'AI Implementation Master Guide 2026',
    description: '200+ page comprehensive guide with frameworks and templates',
    href: '/resources/ai-implementation-master-guide-2026',
    category: 'Free Resource',
    readTime: '200+ pages',
    difficulty: 'Beginner',
    tags: ['Guide', 'Implementation', 'Templates', 'Free'],
    icon: '📚',
    featured: true,
    isNew: true
  },
  {
    id: '5',
    title: 'AI Workforce Transformation 2025',
    description: 'Reskilling strategies for the AI era',
    href: '/blog/ai-workforce-transformation-2025',
    category: 'Workforce',
    readTime: '18 min read',
    difficulty: 'Intermediate',
    tags: ['Workforce', 'Transformation', 'Skills', 'Future'],
    icon: '👥'
  },
  {
    id: '6',
    title: 'AI Sustainability & Green Tech',
    description: 'Building eco-friendly AI systems',
    href: '/blog/ai-sustainability-green-tech-2025',
    category: 'Sustainability',
    readTime: '20 min read',
    difficulty: 'Intermediate',
    tags: ['Sustainability', 'Green Tech', 'Environment', 'AI'],
    icon: '🌱'
  },
  {
    id: '7',
    title: 'AI Cybersecurity Checklist 2025',
    description: '150+ security items for secure AI implementation',
    href: '/resources/ai-cybersecurity-checklist-2025',
    category: 'Security',
    readTime: 'Free Download',
    difficulty: 'Advanced',
    tags: ['Security', 'Checklist', 'Compliance', 'Free'],
    icon: '🛡️'
  },
  {
    id: '8',
    title: 'Edge AI: Privacy by Design',
    description: 'On-device intelligence for instant, compliant CX',
    href: '/blog/edge-ai-privacy-by-design-2025',
    category: 'Edge Computing',
    readTime: '8 min read',
    difficulty: 'Advanced',
    tags: ['Edge Computing', 'Privacy', 'On-device', 'Compliance'],
    icon: '🔐'
  }
];

const categories = ['All', 'AI Architecture', 'AI Automation', 'Case Study', 'Free Resource', 'Workforce', 'Sustainability', 'Security', 'Edge Computing'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find exactly what you need with our intelligent content discovery. Filter by category, 
            difficulty level, or search for specific topics.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <input
                type="text"
                placeholder="Search articles, guides, case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
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

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            {selectedDifficulty !== 'All' && (
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Difficulty: {selectedDifficulty}
                <button
                  onClick={() => setSelectedDifficulty('All')}
                  className="text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-purple-600 hover:text-purple-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content items
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex gap-2">
                      {item.isNew && (
                        <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.featured && (
                        <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
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
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-8">
            Our experts can help you find the perfect content or create custom resources for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Expert Help
            </Link>
            <Link
              href="/blog"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery;