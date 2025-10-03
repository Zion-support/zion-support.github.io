import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service';
  category: 'quantum' | 'autonomous' | 'transformation' | 'roi';
  href: string;
  featured: boolean;
  metrics?: {
    value: string;
    label: string;
    color: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'quantum-breakthrough',
    title: 'AI 2027: Quantum Computing Breakthrough',
    description: 'Discover how quantum computing breakthroughs are revolutionizing enterprise AI operations with unprecedented computational power.',
    type: 'blog',
    category: 'quantum',
    href: '/blog/ai-2027-quantum-breakthrough',
    featured: true,
    metrics: { value: '10,000x', label: 'Speed Increase', color: 'purple' }
  },
  {
    id: 'autonomous-enterprise',
    title: 'Fully Autonomous Enterprise Operations',
    description: 'Explore how AI-driven autonomous systems are transforming business operations with unprecedented efficiency.',
    type: 'blog',
    category: 'autonomous',
    href: '/blog/ai-2027-autonomous-enterprise',
    featured: true,
    metrics: { value: '95%', label: 'Autonomy Level', color: 'green' }
  },
  {
    id: 'mega-transformation',
    title: '$150M ROI Success Story',
    description: 'Learn how a Fortune 500 company achieved $150M in ROI through comprehensive AI transformation.',
    type: 'case-study',
    category: 'roi',
    href: '/case-studies/ai-2027-mega-transformation-success',
    featured: true,
    metrics: { value: '$150M', label: 'ROI Achieved', color: 'green' }
  },
  {
    id: 'quantum-optimization',
    title: 'Quantum Supply Chain Optimization',
    description: 'Advanced quantum algorithms optimizing global supply chains with real-time decision making.',
    type: 'service',
    category: 'quantum',
    href: '/services/quantum-optimization',
    featured: false,
    metrics: { value: '35%', label: 'Cost Reduction', color: 'blue' }
  },
  {
    id: 'autonomous-manufacturing',
    title: 'Autonomous Manufacturing Systems',
    description: 'Self-managing manufacturing operations with 24/7 optimization and minimal human intervention.',
    type: 'service',
    category: 'autonomous',
    href: '/services/autonomous-manufacturing',
    featured: false,
    metrics: { value: '99.8%', label: 'Uptime', color: 'green' }
  },
  {
    id: 'ai-transformation',
    title: 'Enterprise AI Transformation',
    description: 'Comprehensive AI transformation programs delivering measurable business results and competitive advantage.',
    type: 'service',
    category: 'transformation',
    href: '/services/ai-transformation',
    featured: false,
    metrics: { value: '300%', label: 'ROI Increase', color: 'purple' }
  }
];

export default function Interactive2027ContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'quantum', label: 'Quantum AI', icon: '⚛️' },
    { id: 'autonomous', label: 'Autonomous', icon: '🤖' },
    { id: 'transformation', label: 'Transformation', icon: '🚀' },
    { id: 'roi', label: 'Success Stories', icon: '💰' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getMetricColor = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-indigo-500',
      green: 'from-green-500 to-blue-500',
      blue: 'from-blue-500 to-cyan-500',
      orange: 'from-orange-500 to-red-500'
    };
    return colors[color as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🎯 INTERACTIVE DISCOVERY
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW 2027
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Revolutionary AI 2027 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthroughs in quantum computing, autonomous enterprise operations, 
            and transformation success stories. Filter by category to find exactly what you need.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ FEATURED
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-gradient-to-r ${getMetricColor(item.metrics?.color || 'blue')} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                    {item.type === 'blog' ? '📖 ARTICLE' : item.type === 'case-study' ? '📊 CASE STUDY' : '🔧 SERVICE'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {item.metrics && (
                  <div className="mb-4">
                    <div className={`bg-gradient-to-r ${getMetricColor(item.metrics.color)} text-white px-3 py-2 rounded-lg text-center`}>
                      <div className="text-lg font-bold">{item.metrics.value}</div>
                      <div className="text-xs opacity-90">{item.metrics.label}</div>
                    </div>
                  </div>
                )}

                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Learn More'}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredItem === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI 2027?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join the revolution. Our expert team can help you implement these breakthrough technologies 
              and achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}