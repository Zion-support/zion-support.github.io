import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🎯' },
    { id: 'breakthrough', name: 'Breakthrough', icon: '🚀' },
    { id: 'case-study', name: 'Case Studies', icon: '🏆' },
    { id: 'guide', name: 'Guides', icon: '📚' },
    { id: 'innovation', name: 'Innovation', icon: '💡' }
  ];

  const contentItems = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Revolutionary AI technologies transforming industries",
      href: "/blog/ai-2026-breakthrough-innovations",
      category: "breakthrough",
      type: "Blog Post",
      readTime: "12 min",
      icon: "🚀",
      featured: true
    },
    {
      title: "Global Tech Giant Transformation",
      description: "2,500% ROI success story with AI implementation",
      href: "/case-studies/ai-2026-global-tech-giant-transformation",
      category: "case-study",
      type: "Case Study",
      readTime: "15 min",
      icon: "🏆",
      featured: true
    },
    {
      title: "Comprehensive Implementation Guide",
      description: "Complete blueprint for AI 2026 technologies",
      href: "/resources/ai-2026-comprehensive-implementation-master-guide",
      category: "guide",
      type: "Resource",
      readTime: "45 min",
      icon: "📚",
      featured: true
    },
    {
      title: "AI 2026 Future Predictions",
      description: "Detailed predictions for AI development in 2026",
      href: "/blog/ai-2026-future-predictions",
      category: "innovation",
      type: "Blog Post",
      readTime: "10 min",
      icon: "🔮",
      featured: false
    },
    {
      title: "Fortune 500 Manufacturing Success",
      description: "1,800% ROI with AI automation in manufacturing",
      href: "/case-studies/ai-2026-fortune-500-transformation-breakthrough",
      category: "case-study",
      type: "Case Study",
      readTime: "12 min",
      icon: "🏭",
      featured: false
    },
    {
      title: "AI 2026 Implementation Toolkit",
      description: "Practical tools and templates for implementation",
      href: "/resources/ai-2026-implementation-toolkit",
      category: "guide",
      type: "Resource",
      readTime: "30 min",
      icon: "🛠️",
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Breakthrough AI Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2026 content, case studies, and implementation guides. 
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                content.featured ? 'border-blue-200' : 'border-gray-200'
              } overflow-hidden`}>
                {/* Featured Badge */}
                {content.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 text-center">
                    ⭐ FEATURED
                  </div>
                )}

                {/* Content Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                      {content.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.readTime} read</span>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                      <span className="font-medium">Explore</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Can't Find What You're Looking For?
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search for specific topics, technologies, or use cases..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Search
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Try searching for: "quantum AI", "neural interfaces", "ROI calculator", "implementation guide"
            </p>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/blog" className="group">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-bold mb-2">Blog Posts</h3>
              <p className="text-sm opacity-90">Latest insights and trends</p>
            </div>
          </Link>
          
          <Link href="/case-studies" className="group">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center hover:from-green-600 hover:to-green-700 transition-all duration-300">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-bold mb-2">Case Studies</h3>
              <p className="text-sm opacity-90">Real success stories</p>
            </div>
          </Link>
          
          <Link href="/resources" className="group">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold mb-2">Resources</h3>
              <p className="text-sm opacity-90">Guides and toolkits</p>
            </div>
          </Link>
          
          <Link href="/tools" className="group">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="font-bold mb-2">Tools</h3>
              <p className="text-sm opacity-90">ROI calculators & more</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}