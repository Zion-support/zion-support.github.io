import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '⚡', color: 'from-red-500 to-orange-500' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { id: 'predictions', name: 'Predictions', icon: '🔮', color: 'from-purple-500 to-indigo-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 'resources', name: 'Resources', icon: '📚', color: 'from-orange-500 to-red-500' }
  ];

  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technology delivering 5,000% ROI through advanced automation",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "breakthroughs",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      roi: "5,000%",
      tags: ["AI 2025", "Automation", "ROI"]
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "15,000% ROI through quantum computing integration and neural networks",
      href: "/ai-2026-quantum-neural-fusion-breakthrough",
      category: "quantum",
      badge: "QUANTUM",
      badgeColor: "bg-cyan-500",
      roi: "15,000%",
      tags: ["AI 2026", "Quantum", "Neural Networks"]
    },
    {
      title: "Revolutionary Content Showcase 2025",
      description: "Complete library of revolutionary AI content and breakthrough technologies",
      href: "/revolutionary-content-showcase-2025",
      category: "resources",
      badge: "NEW",
      badgeColor: "bg-purple-500",
      roi: "∞",
      tags: ["Content", "Showcase", "Library"]
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive predictions for AI development and technological advancement",
      href: "/ai-2027-future-predictions-revolutionary",
      category: "predictions",
      badge: "FUTURE",
      badgeColor: "bg-purple-500",
      roi: "8,000%",
      tags: ["AI 2027", "Predictions", "Future"]
    },
    {
      title: "Global Enterprise Transformation",
      description: "Real case study showing 1,200% ROI in enterprise AI implementation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "case-studies",
      badge: "SUCCESS",
      badgeColor: "bg-green-500",
      roi: "1,200%",
      tags: ["Case Study", "Enterprise", "Transformation"]
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "47 resources for successful AI implementation and transformation",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "resources",
      badge: "ESSENTIAL",
      badgeColor: "bg-orange-500",
      roi: "2,500%",
      tags: ["Implementation", "Toolkit", "Resources"]
    },
    {
      title: "AI 2028 Revolutionary Breakthroughs",
      description: "Advanced AI systems and autonomous operations for 2028",
      href: "/blog/ai-2028-future-predictions-breakthrough",
      category: "breakthroughs",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-indigo-500",
      roi: "10,000%",
      tags: ["AI 2028", "Breakthroughs", "Autonomous"]
    },
    {
      title: "AI 2029 Singularity Breakthrough",
      description: "Approaching artificial general intelligence and singularity",
      href: "/blog/ai-2029-singularity-breakthrough",
      category: "predictions",
      badge: "SINGULARITY",
      badgeColor: "bg-pink-500",
      roi: "∞",
      tags: ["AI 2029", "Singularity", "AGI"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Revolutionary AI Content</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive library of AI breakthrough content, case studies, and implementation resources
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search content, tags, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {contentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                {item.badge}
              </span>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{item.roi}</div>
                <div className="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search terms or category filters</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding the Right Content?</h3>
        <p className="text-gray-600 mb-6">
          Our AI experts can help you discover the perfect content for your specific needs and goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Get Expert Help
          </Link>
          <Link
            href="/revolutionary-content-showcase-2025"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold border-2 border-purple-500 hover:bg-purple-50 transition-all"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}