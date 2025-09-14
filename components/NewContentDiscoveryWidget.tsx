"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget() {
  const [searchTermsetSearchTerm] = useState('');

  const newContent = [
    {
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough in historydelivering unprecedented 10,000% ROI',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'AI 2025',
      roi: '10,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Revolutionary AI predictions delivering 15,000% ROI through quantum-neural fusion',
      url: '/ai-2026-future-predictions-breakthrough',
      category: 'AI 2026',
      roi: '15,000%',
      badge: 'FUTURE',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Global Transformation Breakthrough Case Study',
      description: 'How a Fortune 500 company achieved 10,000% ROI in just 6 months',
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      category: 'Case Study',
      roi: '10,000%',
      badge: 'SUCCESS',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum-Neural Fusion Success Story',
      description: 'Manufacturing company achieves 15,000% ROI through quantum-neural technology',
      url: '/case-studies/ai-2026-quantum-neural-fusion-success',
      category: 'Case Study',
      roi: '15,000%',
      badge: 'REVOLUTIONARY',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI 2025 Revolutionary Implementation Guide',
      description: 'Complete guide to implementing AI 2025 breakthrough technology',
      url: '/resources/ai-2025-revolutionary-implementation-guide',
      category: 'Resources',
      roi: 'N/A',
      badge: 'GUIDE',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI 2026 Ultimate Implementation Master Guide',
      description: 'Master guide for AI 2026 quantum-neural fusion implementation',
      url: '/resources/ai-2026-ultimate-implementation-master-guide',
      category: 'Resources',
      roi: 'N/A',
      badge: 'MASTER',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredContent = newContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover New Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI breakthrough contentcase studiesand implementation guides
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search new content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((itemindex) => (
            <Link
              key={index}
              href={item.url}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {item.roi !== 'N/A' && (
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">
                      {item.roi} ROI
                    </div>
                    <div className="text-blue-600 font-semibold group-hover:text-blue-800">
                      Learn More →
                    </div>
                  </div>
                )}
                
                {item.roi === 'N/A' && (
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-700">
                      Implementation Guide
                    </div>
                    <div className="text-blue-600 font-semibold group-hover:text-blue-800">
                      Download →
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}