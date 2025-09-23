import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025 Ultimate Automation Revolution',
      description: 'Comprehensive guide to the next generation of AI automation technologies transforming businesses worldwide.',
      category: 'automation',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution',
      featured: true,
      readTime: '15 min read',
      publishDate: '2025-01-15'
    },
    {
      id: 'enterprise-transformation-guide',
      title: 'Enterprise AI Transformation Complete Guide',
      description: 'Step-by-step roadmap for enterprise AI implementation with proven ROI strategies.',
      category: 'enterprise',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-transformation-complete-guide',
      featured: true,
      readTime: '20 min read',
      publishDate: '2025-01-14'
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'Quantum Computing Business Breakthrough',
      description: 'How quantum computing is revolutionizing business operations and creating new opportunities.',
      category: 'quantum',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-breakthrough',
      featured: true,
      readTime: '12 min read',
      publishDate: '2025-01-13'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'enterprise', label: 'Enterprise', count: contentItems.filter(item => item.category === 'enterprise').length },
    { id: 'quantum', label: 'Quantum', count: contentItems.filter(item => item.category === 'quantum').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI 2025 Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation content, case studies, and implementation guides.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'blog' ? '📝 Blog' : 
                     item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                  </span>
                  {item.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.readTime}</span>
                  <span>{item.publishDate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;