import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI through synthetic intelligence',
      category: 'ai-2025',
      roi: '10000',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true,
      badge: 'BREAKTHROUGH'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025 Ultimate',
      description: 'Infinite computational power with quantum supremacy and error-corrected systems',
      category: 'quantum',
      roi: 'infinite',
      link: '/quantum-computing-solutions-2025-ultimate',
      featured: true,
      badge: 'REVOLUTIONARY'
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2025 Ultimate',
      description: 'Intelligent process automation delivering 15,000% ROI with autonomous systems',
      category: 'automation',
      roi: '15000',
      link: '/advanced-automation-solutions-2025-ultimate',
      featured: true,
      badge: 'ULTIMATE'
    },
    {
      id: 4,
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Breakthrough quantum-neural integration delivering 15,000% ROI',
      category: 'ai-2026',
      roi: '15000',
      link: '/ai-2026-quantum-neural-fusion-breakthrough',
      featured: false,
      badge: 'BREAKTHROUGH'
    },
    {
      id: 5,
      title: 'AI 2027 Future Predictions Revolutionary',
      description: 'Advanced AI predictions and neural synthesis with 99.7% accuracy',
      category: 'ai-2027',
      roi: '8000',
      link: '/ai-2027-future-predictions-revolutionary',
      featured: false,
      badge: 'FUTURE'
    },
    {
      id: 6,
      title: 'AI 2028 Future Predictions Breakthrough',
      description: 'Revolutionary AI predictions for 2028 with 3000% ROI automotive transformation',
      category: 'ai-2028',
      roi: '3000',
      link: '/ai-2028-future-predictions-breakthrough',
      featured: false,
      badge: 'REVOLUTIONARY'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || 
      (selectedROI === 'high' && parseInt(item.roi) >= 10000) ||
      (selectedROI === 'medium' && parseInt(item.roi) >= 5000 && parseInt(item.roi) < 10000) ||
      (selectedROI === 'infinite' && item.roi === 'infinite');
    return categoryMatch && roiMatch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'REVOLUTIONARY': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'ULTIMATE': return 'bg-gradient-to-r from-green-500 to-blue-500';
      case 'FUTURE': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getROIColor = (roi: string) => {
    if (roi === 'infinite') return 'text-cyan-400';
    const roiNum = parseInt(roi);
    if (roiNum >= 10000) return 'text-green-400';
    if (roiNum >= 5000) return 'text-yellow-400';
    return 'text-blue-400';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI content and solutions tailored to your business needs. 
            Filter by category and ROI to find the perfect breakthrough for your organization.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="ai-2025">AI 2025</option>
                <option value="ai-2026">AI 2026</option>
                <option value="ai-2027">AI 2027</option>
                <option value="ai-2028">AI 2028</option>
                <option value="quantum">Quantum Computing</option>
                <option value="automation">Automation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">ROI Level</label>
              <select 
                value={selectedROI} 
                onChange={(e) => setSelectedROI(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All ROI Levels</option>
                <option value="infinite">Infinite ROI</option>
                <option value="high">High ROI (10,000%+)</option>
                <option value="medium">Medium ROI (5,000-9,999%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div 
              key={item.id} 
              className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:scale-105 transition-transform ${
                item.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(item.badge)}`}>
                  {item.badge}
                </div>
                {item.featured && (
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-black">
                    FEATURED
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-400">Projected ROI</div>
                  <div className={`text-2xl font-bold ${getROIColor(item.roi)}`}>
                    {item.roi === 'infinite' ? '∞' : `${item.roi}%`}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Category</div>
                  <div className="text-sm font-medium text-blue-400 capitalize">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>
              </div>
              
              <Link 
                href={item.link}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform text-center block"
              >
                Explore Solution
              </Link>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-4">No content found</h3>
            <p className="text-gray-500">Try adjusting your filters to discover more content.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Can't find what you're looking for? Our AI experts can create custom solutions for your specific needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform inline-block"
          >
            Get Custom Solution
          </Link>
        </div>
      </div>
    </div>
  );
}