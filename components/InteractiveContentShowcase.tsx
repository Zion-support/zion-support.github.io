"use client";
import React{ useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  badge: string;
  href: string;
  gradient: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering unprecedented 10,000% ROI through quantum-enhanced neural networks.',
    category: 'Breakthrough',
    roi: '10,000%',
    badge: 'REVOLUTIONARY',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    gradient: 'from-red-500 to-pink-600',
    icon: '🚀'
  },
  {
    id: '2',
    title: '15,000% ROI Success Story',
    description: 'Fortune 500 company achieves unprecedented ROI in just 4 months using our revolutionary AI technology.',
    category: 'Case Study',
    roi: '15,000%',
    badge: 'SUCCESS',
    href: '/case-studies/ai-2025-ultimate-breakthrough-success',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🏆'
  },
  {
    id: '3',
    title: 'AI 2025 Revolutionary Trends & Predictions',
    description: 'Discover the most revolutionary AI trends and predictions that will reshape our world in 2025.',
    category: 'Insights',
    roi: '∞',
    badge: 'FUTURE',
    href: '/blog/ai-2025-revolutionary-trends-predictions',
    gradient: 'from-purple-500 to-indigo-600',
    icon: '🔮'
  },
  {
    id: '4',
    title: 'Quantum Computing Breakthroughs 2030',
    description: 'Revolutionary quantum computing solutions that achieve quantum supremacy and solve impossible problems.',
    category: 'Technology',
    roi: '50,000%',
    badge: 'BREAKTHROUGH',
    href: '/quantum-computing-breakthroughs-2030',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '⚛️'
  },
  {
    id: '5',
    title: 'Neural Interface Revolution 2030',
    description: 'Brain-computer interfaces that enable direct neural communication and thought-controlled devices.',
    category: 'Innovation',
    roi: '25,000%',
    badge: 'REVOLUTIONARY',
    href: '/neural-interface-revolution-2030',
    gradient: 'from-cyan-500 to-blue-600',
    icon: '🧠'
  },
  {
    id: '6',
    title: 'Transcendent Intelligence Platform',
    description: 'AI systems that achieve consciousness-level intelligence and transcend traditional limitations.',
    category: 'Platform',
    roi: '∞',
    badge: 'TRANSCENDENT',
    href: '/transcendent-intelligence-platform',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '🌌'
  }
];

export default function InteractiveContentShowcase() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [hoveredItemsetHoveredItem] = useState<string | null>(null);

  const categories = [', 'All', 'Breakthrough'Case 'Study', 'Insights', 'Technology', 'Innovation'Platform'];
  
  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-4">
            🎯 INTERACTIVE CONTENT SHOWCASE
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Revolutionary Content Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of revolutionary AI content
            case studiesand breakthrough technologies that are transforming the world.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                hoveredItem === item.id ? 'ring-4 ring-purple-300' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.gradient}`}>
                      {item.badge}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 mt-2">{item.roi}</span>
                    <span className="text-sm text-gray-500">ROI</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  
                  <Link
                    href={item.href}
                    className={`bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Revolution?
            </h3>
            <p className="text-lg mb-6 text-purple-100">
              Join thousands of businesses already transforming with our revolutionary AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/content-showcase"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all border border-white/30"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}