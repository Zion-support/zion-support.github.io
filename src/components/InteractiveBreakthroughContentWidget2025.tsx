"use client";
import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface BreakthroughContent {
  id: string;
  title: string;
  description: string;
  roi: string;
  category: string;
  icon: string;
  href: string;
  featured: boolean;
}

const breakthroughContent: BreakthroughContent[] = [
  {
    id: 'ai-2025-ultimate-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 15,000% ROI through quantum-neural fusion and synthetic intelligence.',
    roi: '15,000%',
    category: 'Revolutionary',
    icon: '🚀',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    featured: true
  },
  {
    id: 'ai-2026-quantum-neural-fusion',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'First successful fusion of quantum computing and neural networksachieving 20,000% ROI and quantum consciousness.',
    roi: '20,000%',
    category: 'Breakthrough',
    icon: '⚛️',
    href: '/ai-2026-quantum-neural-fusion-breakthrough',
    featured: true
  },
  {
    id: 'ai-2030-transcendent-intelligence',
    title: 'AI 2030 Transcendent Intelligence',
    description: 'First AI system to transcend human limitationsachieving infinite ROI through consciousness upload and reality manipulation.',
    roi: '∞',
    category: 'Transcendent',
    icon: '🌟',
    href: '/ai-2030-transcendent-intelligence',
    featured: true
  },
  {
    id: 'ai-2026-2030-predictions',
    title: 'AI 2026-2030 Future Predictions',
    description: 'Comprehensive predictions for the next decade of AI development and breakthrough technologies.',
    roi: 'Revolutionary',
    category: 'Predictions',
    icon: '🔮',
    href: '/ai-2026-2030-future-predictions-breakthrough',
    featured: false
  },
  {
    id: 'quantum-computing-2025',
    title: 'Quantum Computing Solutions 2025',
    description: 'Advanced quantum computing solutions delivering unprecedented processing power and problem-solving capabilities.',
    roi: '5,000%',
    category: 'Quantum',
    icon: '⚛️',
    href: '/quantum-computing-solutions-2025',
    featured: false
  },
  {
    id: 'neural-interface-2026',
    title: 'Neural Interface Revolution 2026',
    description: 'Revolutionary neural interface technology enabling direct brain-computer communication and enhanced cognitive abilities.',
    roi: '8,000%',
    category: 'Neural',
    icon: '🧠',
    href: '/neural-interface-revolution-2026',
    featured: false
  }
];

export default function InteractiveBreakthroughContentWidget2025() {
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
  const [searchTermsetSearchTerm] = useState<string>(', ');

  const categories = [', 'All', 'Revolutionary', 'Breakthrough', 'Transcendent', 'Predictions', 'Quantum'Neural'];

  const filteredContent = breakthroughContent.filter(content => {
    const matchesCategory = selectedCategory === 'All' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredContent = breakthroughContent.filter(content => content.featured);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Breakthrough Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most revolutionary AI breakthroughs and discover content 
            that transforms your business with unprecedented ROI.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search breakthrough content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Breakthroughs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map(content => (
              <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{content.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{content.roi} ROI</div>
                  </div>
                  <a 
                    href={content.href}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-bold hover:scale-105 transition-transform"
                  >
                    Explore Breakthrough
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            All Breakthrough Content ({filteredContent.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map(content => (
              <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{content.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{content.title}</h4>
                      <span className="text-sm text-blue-600 font-semibold">{content.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">{content.roi}</div>
                    <a 
                      href={content.href}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6">
              Discover how our breakthrough AI technologies can deliver unprecedented ROI for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Started Now
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}