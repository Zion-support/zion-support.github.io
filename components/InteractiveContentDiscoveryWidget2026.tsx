import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const contentItems = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "breakthrough",
      roi: "2000%",
      year: "2025",
      icon: "🚀",
      gradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary quantum-neural technology delivering 15,000% ROI",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      category: "breakthrough",
      roi: "15000%",
      year: "2026",
      icon: "⚛️",
      gradient: "from-purple-50 to-blue-50",
      borderColor: "border-purple-200"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive forecasts for revolutionary AI technologies in 2027",
      href: "/blog/ai-2027-future-predictions",
      category: "predictions",
      roi: "5000%",
      year: "2027",
      icon: "🔮",
      gradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Global Enterprise Transformation",
      description: "How we achieved 2000% ROI in Fortune 500 transformation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "case-study",
      roi: "2000%",
      year: "2025",
      icon: "🏆",
      gradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "Quantum-Neural Manufacturing Success",
      description: "15,000% ROI achieved in Fortune 500 manufacturing",
      href: "/case-studies/ai-2026-quantum-neural-fusion-success",
      category: "case-study",
      roi: "15000%",
      year: "2026",
      icon: "🏭",
      gradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Ultimate Implementation Guide",
      description: "Complete guide to implementing AI 2026 breakthrough technologies",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      category: "resource",
      roi: "15000%",
      year: "2026",
      icon: "📚",
      gradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || 
      (selectedROI === 'high' && parseInt(item.roi) >= 10000) ||
      (selectedROI === 'medium' && parseInt(item.roi) >= 2000 && parseInt(item.roi) < 10000) ||
      (selectedROI === 'low' && parseInt(item.roi) < 2000);
    const yearMatch = selectedYear === 'all' || item.year === selectedYear;
    
    return categoryMatch && roiMatch && yearMatch;
  });

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>🎯</span>
            <span>INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔍 Find Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery system to find exactly what you need. 
            Filter by category, ROI level, or year to discover the perfect content for your needs.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Category</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="breakthrough">Breakthrough Technology</option>
                <option value="case-study">Case Studies</option>
                <option value="predictions">Future Predictions</option>
                <option value="resource">Resources & Guides</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ROI Level</label>
              <select 
                value={selectedROI} 
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All ROI Levels</option>
                <option value="high">High ROI (10,000%+)</option>
                <option value="medium">Medium ROI (2,000% - 9,999%)</option>
                <option value="low">Lower ROI (< 2,000%)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Showing <span className="font-bold text-blue-600">{filteredContent.length}</span> content items
            {selectedCategory !== 'all' && ` in ${selectedCategory.replace('-', ' ')}`}
            {selectedROI !== 'all' && ` with ${selectedROI} ROI`}
            {selectedYear !== 'all' && ` from ${selectedYear}`}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content, index) => (
            <Link 
              key={index}
              href={content.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-blue-300"
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${content.gradient} border-2 ${content.borderColor}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        content.category === 'breakthrough' ? 'bg-red-100 text-red-800' :
                        content.category === 'case-study' ? 'bg-green-100 text-green-800' :
                        content.category === 'predictions' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {content.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {content.roi} ROI
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>{content.year}</span>
                      </span>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to find more content that matches your criteria.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedROI('all');
                setSelectedYear('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Can't Find What You're Looking For?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Our AI experts can help you find the perfect content for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Expert Help
              </Link>
              <Link 
                href="/resources"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}