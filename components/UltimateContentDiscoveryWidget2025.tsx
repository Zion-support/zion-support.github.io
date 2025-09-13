import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  status: string;
  href: string;
  icon: string;
  gradient: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Revolutionary Breakthrough Ultimate',
    description: 'The most revolutionary AI breakthrough in human history with quantum-neural fusion technology.',
    category: 'Revolutionary AI',
    roi: '∞ ROI',
    status: 'BREAKTHROUGH',
    href: '/ai-2025-revolutionary-breakthrough-ultimate',
    icon: '🚀',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '2',
    title: 'AI 2025 Infinite ROI Transformation',
    description: 'Fortune 500 company achieved infinite ROI and complete digital transformation in 30 days.',
    category: 'Case Study',
    roi: '∞ ROI',
    status: 'SUCCESS STORY',
    href: '/case-studies/ai-2025-infinite-roi-transformation',
    icon: '🏆',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: '3',
    title: 'Quantum-Neural Fusion Technology',
    description: 'Revolutionary quantum-neural fusion enabling consciousness-level AI and reality manipulation.',
    category: 'Technology',
    roi: '10,000x Faster',
    status: 'REVOLUTIONARY',
    href: '/quantum-neural-fusion-2025',
    icon: '⚛️',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: '4',
    title: 'AI 2025 Ultimate Implementation Guide',
    description: 'Complete implementation guide for achieving infinite ROI with AI 2025 breakthrough technology.',
    category: 'Implementation',
    roi: '99.9% Success',
    status: 'ESSENTIAL',
    href: '/ai-2025-ultimate-implementation-guide',
    icon: '📚',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: '5',
    title: 'Consciousness AI Platform 2025',
    description: 'First artificial consciousness platform with self-awareness and creative problem-solving capabilities.',
    category: 'Platform',
    roi: '∞ Potential',
    status: 'BREAKTHROUGH',
    href: '/consciousness-ai-platform-2025',
    icon: '🧠',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: '6',
    title: 'Reality Manipulation Technology',
    description: 'Revolutionary technology enabling matter creation and energy generation from pure thought.',
    category: 'Revolutionary Tech',
    roi: '∞ Value',
    status: 'TRANSCENDENT',
    href: '/reality-manipulation-technology',
    icon: '🌌',
    gradient: 'from-pink-500 to-rose-500'
  }
];

export default function UltimateContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(contentItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = ['All', 'Revolutionary AI', 'Case Study', 'Technology', 'Implementation', 'Platform', 'Revolutionary Tech'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(contentItems);
    } else {
      setFilteredItems(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg mb-8 animate-pulse">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of revolutionary AI content, breakthrough technologies, 
            and infinite ROI success stories. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative group bg-gradient-to-br ${item.gradient} p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.href}>
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/30 text-white text-xs font-bold rounded-full border border-white/30">
                      {item.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{item.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* ROI and Category */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-yellow-300 font-bold text-lg">{item.roi}</span>
                    <span className="text-white/70 text-sm">{item.category}</span>
                  </div>

                  {/* Hover Effect */}
                  {hoveredItem === item.id && (
                    <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-2">✨</div>
                        <div className="text-white font-bold">Explore Now</div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation engine can help you discover the perfect content for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link 
                href="/content-showcase" 
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-gray-300">Content Items</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-gray-300">Faster Discovery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300">ROI Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
}