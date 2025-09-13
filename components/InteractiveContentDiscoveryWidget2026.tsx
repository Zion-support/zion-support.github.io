import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI through quantum-enhanced neural networks.',
      category: 'breakthrough',
      roi: '10,000%',
      type: 'Revolutionary',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      color: 'from-red-500 to-pink-500',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Success',
      description: 'Fortune 500 company achieves 15,000% ROI with quantum-neural fusion technology.',
      category: 'case-study',
      roi: '15,000%',
      type: 'Success Story',
      href: '/case-studies/ai-2026-quantum-neural-fusion-success',
      color: 'from-cyan-500 to-blue-500',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'AI 2027 Future Predictions',
      description: 'Comprehensive predictions for AI development and business transformation in 2027.',
      category: 'predictions',
      roi: '8,000%',
      type: 'Predictions',
      href: '/ai-2027-future-predictions',
      color: 'from-purple-500 to-indigo-500',
      icon: '🔮'
    },
    {
      id: 4,
      title: 'Quantum Computing Solutions 2026',
      description: 'Revolutionary quantum computing solutions delivering unprecedented computational power.',
      category: 'quantum',
      roi: '12,000%',
      type: 'Quantum Tech',
      href: '/quantum-computing-solutions-2026',
      color: 'from-green-500 to-emerald-500',
      icon: '⚛️'
    },
    {
      id: 5,
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough neural interface technology enabling direct brain-computer communication.',
      category: 'neural',
      roi: '20,000%',
      type: 'Neural Tech',
      href: '/neural-interface-revolution-2026',
      color: 'from-orange-500 to-red-500',
      icon: '🧠'
    },
    {
      id: 6,
      title: 'AI 2028 Automotive Transformation',
      description: 'Revolutionary AI transforming the automotive industry with 3,000% ROI success.',
      category: 'automotive',
      roi: '3,000%',
      type: 'Industry Focus',
      href: '/case-studies/ai-2028-automotive-transformation-breakthrough',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚗'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'case-study', name: 'Case Studies', icon: '🏆' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️' },
    { id: 'neural', name: 'Neural Tech', icon: '🧠' },
    { id: 'automotive', name: 'Automotive', icon: '🚗' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 INTERACTIVE CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive library of breakthrough AI content, case studies, and revolutionary technologies. 
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                    {item.type}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-400">
                    {item.roi} ROI
                  </div>
                  <div className="text-cyan-400 group-hover:text-white transition-colors">
                    Learn More →
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredItem === item.id && (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-xl animate-pulse`}></div>
              )}
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation engine can help you discover the perfect content for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
              >
                Get Personalized Recommendations
              </Link>
              <Link 
                href="/content-showcase" 
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}