import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai', name: 'AI & Automation', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'analytics', name: 'Analytics & Insights', icon: '📊' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI Automation Success Story: 500% ROI Achievement",
      description: "How a Fortune 500 company achieved 500% ROI through intelligent automation",
      category: 'ai',
      readTime: '8 min',
      featured: true,
      href: '/blog/ai-automation-success-story-2025',
      tags: ['ROI', 'Automation', 'Enterprise', 'Success Story']
    },
    {
      id: 2,
      title: "Quantum Computing Business Applications 2025",
      description: "Revolutionary applications transforming industries with quantum advantage",
      category: 'quantum',
      readTime: '12 min',
      featured: true,
      href: '/blog/quantum-computing-business-applications-2025',
      tags: ['Quantum', 'Business', 'Innovation', '2025']
    },
    {
      id: 3,
      title: "Neural Interface Revolution in Business",
      description: "Brain-computer interfaces transforming business operations and productivity",
      category: 'neural',
      readTime: '10 min',
      featured: true,
      href: '/case-studies/neural-interface-revolution-2025',
      tags: ['BCI', 'Productivity', 'Accessibility', 'Innovation']
    },
    {
      id: 4,
      title: "Advanced Cloud Infrastructure Solutions",
      description: "Scalable, secure cloud solutions for modern enterprise needs",
      category: 'cloud',
      readTime: '6 min',
      featured: false,
      href: '/services/cloud-infrastructure',
      tags: ['Cloud', 'Scalability', 'Security', 'Enterprise']
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices 2025",
      description: "Comprehensive security strategies for the modern digital landscape",
      category: 'security',
      readTime: '7 min',
      featured: false,
      href: '/resources/cybersecurity-best-practices-2025',
      tags: ['Security', 'Best Practices', '2025', 'Digital']
    },
    {
      id: 6,
      title: "Advanced Analytics and Business Intelligence",
      description: "Data-driven insights and analytics for competitive advantage",
      category: 'analytics',
      readTime: '9 min',
      featured: false,
      href: '/services/analytics',
      tags: ['Analytics', 'BI', 'Data', 'Insights']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover relevant content tailored to your interests and business needs. 
            Use our interactive filters to find exactly what you're looking for.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
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
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                item.featured 
                  ? 'border-purple-200 ring-2 ring-purple-100' 
                  : 'border-gray-100 hover:border-purple-200'
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime} read</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Read More Link */}
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group-hover:underline"
                >
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team of experts can help you discover the perfect solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Custom Recommendations
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;