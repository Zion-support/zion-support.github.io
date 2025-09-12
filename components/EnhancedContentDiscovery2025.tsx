import React, { useState } from 'react';
import Link from 'next/link';

export default function EnhancedContentDiscovery2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚', count: 150 },
    { id: 'trends', name: 'Trends & Predictions', icon: '🔮', count: 25 },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', count: 40 },
    { id: 'implementation', name: 'Implementation', icon: '🛠️', count: 35 },
    { id: 'automation', name: 'Automation', icon: '🚀', count: 30 },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️', count: 15 },
    { id: 'security', name: 'Cybersecurity', icon: '🛡️', count: 20 }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Trends & Predictions",
      description: "Comprehensive analysis of AI trends, quantum computing breakthroughs, and future predictions.",
      href: "/blog/ai-2025-ultimate-trends-predictions",
      category: "trends",
      type: "Blog Post",
      readTime: "15 min read",
      featured: true,
      stats: "85% Enterprise Adoption"
    },
    {
      title: "1200% ROI Enterprise Transformation",
      description: "Real-world case study of Fortune 500 company achieving unprecedented ROI through AI transformation.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "case-studies",
      type: "Case Study",
      readTime: "12 min read",
      featured: true,
      stats: "$2.8B Total Impact"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete guide with templates, frameworks, and step-by-step instructions for AI success.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "implementation",
      type: "Resource",
      readTime: "20 min read",
      featured: true,
      stats: "60% Faster Implementation"
    },
    {
      title: "Enterprise Automation Mastery",
      description: "Learn how to achieve 95% process automation across all business functions.",
      href: "/blog/ai-2025-enterprise-automation-mastery",
      category: "automation",
      type: "Blog Post",
      readTime: "10 min read",
      featured: false,
      stats: "95% Automation Rate"
    },
    {
      title: "Quantum Computing Breakthroughs",
      description: "Explore quantum computing innovations and their impact on AI development.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      category: "quantum",
      type: "Blog Post",
      readTime: "8 min read",
      featured: false,
      stats: "1000x Faster Training"
    },
    {
      title: "AI Cybersecurity Defense",
      description: "Advanced strategies for protecting AI systems from emerging cyber threats.",
      href: "/blog/ai-2025-cybersecurity-defense",
      category: "security",
      type: "Blog Post",
      readTime: "12 min read",
      featured: false,
      stats: "99.9% Threat Detection"
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🔍 ENHANCED CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Perfect AI Content for Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, case studies, and implementation guides. 
            Find exactly what you need to transform your business with AI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-white bg-opacity-20'
                  : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI content, case studies, and resources..."
              className="w-full px-6 py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{contentCategories.find(c => c.id === item.category)?.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {item.type}
                      </div>
                      <div className="text-xs text-gray-500">{item.readTime}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Impact</div>
                    <div className="text-sm font-semibold text-green-600">{item.stats}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Searches */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            🔥 Popular Searches
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AI automation",
              "ROI calculator",
              "Implementation guide",
              "Case studies",
              "Quantum computing",
              "Enterprise AI",
              "Cybersecurity",
              "Machine learning",
              "Neural networks",
              "Edge computing"
            ].map((term, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">Total Resources</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-sm text-gray-600">Monthly Readers</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.8B</div>
            <div className="text-sm text-gray-600">Total Impact</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Can't Find What You're Looking For?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Our AI experts can create custom content tailored to your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Request Custom Content
            </Link>
            <Link
              href="/webinars"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              🎥 Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}