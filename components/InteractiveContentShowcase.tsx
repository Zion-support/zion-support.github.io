import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  url: string;
  featured: boolean;
  metrics?: {
    views: string;
    rating: number;
    savings?: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-autonomous-cloud-ops-2026',
    title: 'AI Autonomous Cloud Operations 2026',
    description: 'Master autonomous cloud operations with AI-driven infrastructure management. Achieve 99.9% uptime, 70% cost reduction, and zero-touch operations.',
    category: 'Cloud Operations',
    readTime: '30 min read',
    url: '/blog/ai-autonomous-cloud-ops-2026',
    featured: true,
    metrics: {
      views: '25K+',
      rating: 4.9,
      savings: '$2.5M'
    }
  },
  {
    id: 'ai-fintech-transformation-2026',
    title: 'AI FinTech Transformation 2026',
    description: 'Transform financial services with AI-powered solutions. Achieve 95% automation, 70% cost reduction, and $5M+ annual savings.',
    category: 'FinTech',
    readTime: '25 min read',
    url: '/blog/ai-fintech-transformation-2026',
    featured: true,
    metrics: {
      views: '18K+',
      rating: 4.8,
      savings: '$5M+'
    }
  },
  {
    id: 'ai-retail-automation-2026',
    title: 'AI Retail Automation Success 2026',
    description: 'See how a retail giant achieved $50M revenue growth, 150% growth rate, and 80% cost reduction with AI automation.',
    category: 'Retail',
    readTime: '20 min read',
    url: '/case-studies/ai-retail-automation-2026',
    featured: true,
    metrics: {
      views: '22K+',
      rating: 4.9,
      savings: '$50M'
    }
  },
  {
    id: 'ai-autonomous-enterprise-success-2026',
    title: 'AI Autonomous Enterprise Success 2026',
    description: 'See how a Fortune 500 company achieved $25M ROI with AI autonomous enterprise systems. 99.9% uptime, 90% cost reduction.',
    category: 'Enterprise',
    readTime: '25 min read',
    url: '/case-studies/ai-autonomous-enterprise-success-2026',
    featured: false,
    metrics: {
      views: '15K+',
      rating: 4.8,
      savings: '$25M'
    }
  },
  {
    id: 'ai-enterprise-automation-2026',
    title: 'AI Enterprise Automation 2026',
    description: 'Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.',
    category: 'Enterprise',
    readTime: '18 min read',
    url: '/blog/ai-enterprise-automation-2026',
    featured: false,
    metrics: {
      views: '12K+',
      rating: 4.7,
      savings: '$5M+'
    }
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    category: 'Sustainability',
    readTime: '18 min read',
    url: '/blog/ai-sustainability-green-tech-2026',
    featured: false,
    metrics: {
      views: '8K+',
      rating: 4.6,
      savings: '$2M+'
    }
  },
  {
    id: 'ai-quantum-computing-2026',
    title: 'AI Quantum Computing 2026',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    category: 'Quantum Computing',
    readTime: '25 min read',
    url: '/blog/ai-quantum-computing-2026',
    featured: false,
    metrics: {
      views: '10K+',
      rating: 4.8,
      savings: '$3.5M'
    }
  },
  {
    id: 'ai-governance-framework-2025',
    title: 'AI Governance Framework 2025',
    description: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.',
    category: 'Governance',
    readTime: '15 min read',
    url: '/blog/ai-governance-framework-2025',
    featured: false,
    metrics: {
      views: '14K+',
      rating: 4.7,
      savings: '70%'
    }
  }
];

const categories = ['All', 'Cloud Operations', 'FinTech', 'Retail', 'Enterprise', 'Sustainability', 'Quantum Computing', 'Governance'];

export default function InteractiveContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    let filtered = selectedCategory === 'All' 
      ? contentItems 
      : contentItems.filter(item => item.category === selectedCategory);

    // Sort by selected criteria
    switch (sortBy) {
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => (b.metrics?.rating || 0) - (a.metrics?.rating || 0));
        break;
      case 'views':
        filtered = filtered.sort((a, b) => {
          const aViews = parseInt(a.metrics?.views?.replace(/[K+]/g, '') || '0');
          const bViews = parseInt(b.metrics?.views?.replace(/[K+]/g, '') || '0');
          return bViews - aViews;
        });
        break;
      case 'savings':
        filtered = filtered.sort((a, b) => {
          const aSavings = parseInt(a.metrics?.savings?.replace(/[$M+K]/g, '') || '0');
          const bSavings = parseInt(b.metrics?.savings?.replace(/[$M+K]/g, '') || '0');
          return bSavings - aSavings;
        });
        break;
    }

    setFilteredContent(filtered);
  }, [selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Cloud Operations': '☁️',
      'FinTech': '💳',
      'Retail': '🛍️',
      'Enterprise': '🏢',
      'Sustainability': '🌱',
      'Quantum Computing': '⚛️',
      'Governance': '🛡️',
      'All': '📚'
    };
    return icons[category] || '📄';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cloud Operations': 'from-blue-500 to-cyan-500',
      'FinTech': 'from-green-500 to-teal-500',
      'Retail': 'from-orange-500 to-red-500',
      'Enterprise': 'from-purple-500 to-indigo-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Quantum Computing': 'from-violet-500 to-purple-500',
      'Governance': 'from-slate-500 to-gray-500',
      'All': 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 Interactive AI Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover, filter, and explore our comprehensive collection of AI insights, case studies, 
            and implementation guides. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Interactive Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{getCategoryIcon(category)}</span>
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="rating">Rating</option>
                <option value="views">Most Viewed</option>
                <option value="savings">Highest Savings</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                hoveredItem === item.id ? 'scale-105 -translate-y-2' : 'hover:-translate-y-1'
              } border border-gray-200 overflow-hidden`}>
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}

                {/* Category Header */}
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(item.category)}`}></div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{getCategoryIcon(item.category)}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-700">Views</div>
                        <div className="text-lg font-bold text-blue-600">{item.metrics.views}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-700">Rating</div>
                        <div className="text-lg font-bold text-yellow-600">⭐ {item.metrics.rating}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-700">Savings</div>
                        <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : ''
                }`}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Content Library Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">{contentItems.length}+</div>
              <div className="text-blue-200">Articles & Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150K+</div>
              <div className="text-blue-200">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$100M+</div>
              <div className="text-blue-200">Customer Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-hub"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Complete Content Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}