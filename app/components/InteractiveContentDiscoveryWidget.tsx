import Link from 'next/link';
import { useState, useEffect } from 'react';

const InteractiveContentDiscoveryWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-revolution', name: 'AI Revolution', icon: '🤖' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'automation', name: 'Automation', icon: '⚙️' },
    { id: 'future-tech', name: 'Future Tech', icon: '🚀' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Autonomous Business Operations Revolution",
      description: "Discover how autonomous AI agents are transforming business operations with real-world implementation strategies.",
      category: "ai-revolution",
      readTime: "12 min read",
      featured: true,
      href: "/blog/ai-2026-autonomous-business-operations-revolution",
      tags: ["autonomous AI", "business operations", "enterprise automation"],
      publishDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Quantum Computing Business Applications: 2026 Breakthrough Guide",
      description: "Explore how quantum computing is revolutionizing business operations from optimization to cryptography.",
      category: "quantum-computing",
      readTime: "15 min read",
      featured: true,
      href: "/blog/quantum-computing-business-applications-2026",
      tags: ["quantum computing", "business applications", "optimization"],
      publishDate: "2025-01-15"
    },
    {
      id: 3,
      title: "AI Automation Enterprise Transformation: Fortune 500 Success Story",
      description: "How we helped a Fortune 500 company achieve 340% ROI through comprehensive AI automation.",
      category: "case-studies",
      readTime: "8 min read",
      featured: true,
      href: "/case-studies/ai-automation-enterprise-transformation",
      tags: ["AI automation", "enterprise transformation", "ROI"],
      publishDate: "2025-01-15"
    },
    {
      id: 4,
      title: "Neural Interface Revolution: The Future of Human-AI Collaboration",
      description: "Exploring next-generation neural interfaces that enable seamless human-AI interaction and augmentation.",
      category: "neural-interfaces",
      readTime: "10 min read",
      featured: true,
      href: "/blog/neural-interface-revolution-2026",
      tags: ["neural interfaces", "human-AI collaboration", "augmentation"],
      publishDate: "2025-01-14"
    },
    {
      id: 5,
      title: "Advanced Automation Workflows: Enterprise Implementation Guide",
      description: "Complete guide to implementing advanced automation workflows across enterprise organizations.",
      category: "automation",
      readTime: "14 min read",
      featured: false,
      href: "/blog/advanced-automation-workflows-enterprise",
      tags: ["automation workflows", "enterprise implementation", "process optimization"],
      publishDate: "2025-01-13"
    },
    {
      id: 6,
      title: "Future of Work: AI-Augmented Human Capabilities",
      description: "How AI augmentation is transforming the workplace and enhancing human capabilities.",
      category: "future-tech",
      readTime: "11 min read",
      featured: false,
      href: "/blog/future-of-work-ai-augmented-capabilities",
      tags: ["future of work", "AI augmentation", "human capabilities"],
      publishDate: "2025-01-12"
    }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge insights, case studies, and implementation guides.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search content, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(cat => cat.id === item.category)?.icon} {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="text-sm text-gray-500 mb-4">
                  Published {formatDate(item.publishDate)}
                </div>

                {/* CTA */}
                <Link
                  href={item.href}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read Article
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
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find relevant content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights on AI, quantum computing, and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget;