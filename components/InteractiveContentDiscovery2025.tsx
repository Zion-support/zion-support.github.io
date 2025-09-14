import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Automation Revolution",
      category: "ai-automation",
      type: "blog",
      excerpt: "Discover how AI automation is revolutionizing businesses with unprecedented ROI gains of up to 50,000%.",
      readTime: "8 min read",
      featured: true,
      tags: ["AI", "Automation", "ROI", "2025"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion 2026",
      category: "quantum-computing",
      type: "blog",
      excerpt: "Explore the revolutionary convergence of quantum computing and neural networks that's redefining AI.",
      readTime: "12 min read",
      featured: true,
      tags: ["Quantum Computing", "Neural Networks", "AI", "2026"]
    },
    {
      id: 3,
      title: "Fortune 500 AI Transformation",
      category: "case-study",
      type: "case-study",
      excerpt: "How a Fortune 500 company achieved 800% ROI in just 6 months through comprehensive AI transformation.",
      readTime: "15 min read",
      featured: true,
      tags: ["Fortune 500", "AI Transformation", "ROI", "Enterprise"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2025",
      category: "neural-interfaces",
      type: "blog",
      excerpt: "The future of human-computer interaction through advanced neural interface technology.",
      readTime: "10 min read",
      featured: false,
      tags: ["Neural Interfaces", "Human-Computer Interaction", "2025"]
    },
    {
      id: 5,
      title: "Autonomous Business Operations",
      category: "automation",
      type: "blog",
      excerpt: "How businesses are achieving full autonomy through AI-powered operational systems.",
      readTime: "9 min read",
      featured: false,
      tags: ["Autonomous Operations", "AI", "Business"]
    },
    {
      id: 6,
      title: "Synthetic Intelligence Breakthrough",
      category: "ai-research",
      type: "blog",
      excerpt: "The latest breakthroughs in synthetic intelligence and their implications for business.",
      readTime: "11 min read",
      featured: false,
      tags: ["Synthetic Intelligence", "AI Research", "Breakthrough"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'ai-automation').length },
    { id: 'quantum-computing', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum-computing').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'neural-interfaces', name: 'Neural Interfaces', count: contentItems.filter(item => item.category === 'neural-interfaces').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'ai-research', name: 'AI Research', count: contentItems.filter(item => item.category === 'ai-research').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getContentUrl = (item) => {
    if (item.type === 'case-study') {
      return `/case-studies/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return `/blog/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-4 text-sm font-semibold text-white">
            <span className="mr-2">🔍</span>
            INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insights, case studies, and breakthrough technologies that are shaping the future of AI and business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                {/* Category Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span className="text-xs text-gray-500">{item.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Link
                  href={getContentUrl(item)}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
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

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;