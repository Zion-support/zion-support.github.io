import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-implementation', name: 'AI Implementation', icon: '🤖' },
    { id: 'quantum-tech', name: 'Quantum Technology', icon: '⚛️' },
    { id: 'automation', name: 'AI Automation', icon: '⚡' },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: '🏢' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' }
  ];

  const allContent = [
    {
      id: 1,
      title: "AI 2025 Enterprise Integration Mastery",
      description: "Complete implementation guide for enterprise AI integration with 340% average ROI increase",
      category: 'ai-implementation',
      type: 'blog',
      readingTime: "12 min read",
      href: "/blog/ai-2025-enterprise-integration-mastery",
      featured: true,
      new: true,
      tags: ['AI Integration', 'Enterprise Solutions', 'ROI', 'Implementation']
    },
    {
      id: 2,
      title: "Quantum AI Business Revolution 2025",
      description: "Discover how quantum AI is revolutionizing business operations with exponential improvements",
      category: 'quantum-tech',
      type: 'blog',
      readingTime: "15 min read",
      href: "/blog/quantum-ai-business-revolution-2025",
      featured: true,
      new: true,
      tags: ['Quantum Computing', 'AI Revolution', 'Business Innovation']
    },
    {
      id: 3,
      title: "AI Autonomous Business Operations 2025",
      description: "The future of self-managing enterprises with 500% productivity increases",
      category: 'automation',
      type: 'blog',
      readingTime: "18 min read",
      href: "/blog/ai-autonomous-business-operations-2025",
      featured: true,
      new: true,
      tags: ['Autonomous AI', 'Business Automation', 'Self-Managing Systems']
    },
    {
      id: 4,
      title: "AI Implementation Enterprise Guide 2025",
      description: "Complete roadmap for enterprise AI implementation with real-world case studies",
      category: 'enterprise',
      type: 'resource',
      readingTime: "25 min read",
      href: "/resources/ai-implementation-enterprise-guide-2025",
      featured: true,
      new: true,
      tags: ['Implementation Guide', 'Enterprise Strategy', 'Best Practices']
    },
    {
      id: 5,
      title: "Manufacturing AI Success Story",
      description: "How a Fortune 500 manufacturer achieved 400% efficiency increase with AI",
      category: 'case-studies',
      type: 'case-study',
      readingTime: "8 min read",
      href: "/case-studies/manufacturing-ai-success",
      featured: false,
      new: false,
      tags: ['Manufacturing', 'Success Story', 'Efficiency']
    },
    {
      id: 6,
      title: "Financial Services AI Transformation",
      description: "Bank achieves $2B in autonomous trading with 300% ROI improvement",
      category: 'case-studies',
      type: 'case-study',
      readingTime: "10 min read",
      href: "/case-studies/financial-ai-transformation",
      featured: false,
      new: false,
      tags: ['Financial Services', 'Trading', 'ROI']
    }
  ];

  const filteredContent = allContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = filteredContent.filter(content => content.featured);
  const regularContent = filteredContent.filter(content => !content.featured);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover AI & Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, implementation guides, 
            and real-world success stories
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2">
                {contentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">⭐</span>
              Featured Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.map((content) => (
                <div
                  key={content.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {content.new && (
                          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{content.readingTime}</span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {content.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={content.href}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group-hover:underline"
                    >
                      Read More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularContent.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📚</span>
              All Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularContent.map((content) => (
                <div
                  key={content.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {content.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{content.readingTime}</span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>

                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {content.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={content.href}
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our AI experts can help you find the perfect solution for your specific needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Personalized Recommendations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;