import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', count: 150 },
    { id: 'ai-trends', name: 'AI Trends', count: 45 },
    { id: 'implementation', name: 'Implementation', count: 38 },
    { id: 'case-studies', name: 'Case Studies', count: 25 },
    { id: 'resources', name: 'Resources', count: 42 }
  ];

  const content = [
    {
      id: 1,
      title: 'AI 2025 Revolutionary Breakthroughs: The 10 Most Game-Changing Developments',
      type: 'blog',
      category: 'ai-trends',
      description: 'From quantum-enhanced AI to brain-computer interfaces, discover the breakthroughs reshaping our world in 2025.',
      readTime: '28 min',
      publishDate: '2025-01-30',
      featured: true,
      tags: ['AI Innovation', 'Breakthroughs', '2025 Trends'],
      image: '🚀'
    },
    {
      id: 2,
      title: 'AI 2025 Market Disruption Analysis: How AI is Reshaping Every Industry',
      type: 'blog',
      category: 'ai-trends',
      description: 'Comprehensive analysis of how AI is disrupting markets across 15+ industries with real data on market shifts.',
      readTime: '32 min',
      publishDate: '2025-01-30',
      featured: true,
      tags: ['Market Analysis', 'Industry Disruption', 'Business Impact'],
      image: '📊'
    },
    {
      id: 3,
      title: 'Fortune 500 AI Transformation Breakthrough: $2.4B Cost Savings in 18 Months',
      type: 'case-study',
      category: 'case-studies',
      description: 'Complete case study of how a Fortune 500 manufacturing company achieved unprecedented results through AI transformation.',
      readTime: '25 min',
      publishDate: '2025-01-30',
      featured: true,
      tags: ['Fortune 500', 'ROI', 'Transformation'],
      image: '🏆'
    },
    {
      id: 4,
      title: 'AI Transformation Master Guide 2025: Complete Implementation Playbook',
      type: 'resource',
      category: 'resources',
      description: 'The most comprehensive AI transformation guide available. 300+ pages of proven frameworks and templates.',
      readTime: '300+ pages',
      publishDate: '2025-01-30',
      featured: true,
      tags: ['Implementation', 'Guide', 'Templates'],
      image: '📚'
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI & Technology Insights 2025"
        description="Explore our comprehensive library of AI insights, case studies, implementation guides, and resources. 150+ pieces of expert content to accelerate your AI transformation."
        keywords="AI content, technology insights, case studies, implementation guides, AI resources, digital transformation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive library of AI insights, case studies, implementation guides, 
            and resources. 150+ pieces of expert content to accelerate your AI transformation.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        {/* Featured Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredContent.map((item) => (
              <Link key={item.id} href={`/${item.type === 'blog' ? 'blog' : item.type === 'case-study' ? 'case-studies' : 'resources'}/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="group">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{item.readTime}</span>
                        <span>•</span>
                        <span>{item.publishDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-white bg-opacity-50 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Content */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredContent.length} {filteredContent.length === 1 ? 'item' : 'items'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Link key={item.id} href={`/${item.type === 'blog' ? 'blog' : item.type === 'case-study' ? 'case-studies' : 'resources'}/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'blog' 
                            ? 'bg-blue-100 text-blue-800' 
                            : item.type === 'case-study' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                        </span>
                        {item.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{item.tags.length - 3}
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
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Content
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly updates on new articles, case studies, and resources delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 10,000+ professionals. No spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}