import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  href: string;
  metrics?: {
    label: string;
  value: string;
  }[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-autonomous-cloud-ops-2026',
    title: 'AI Autonomous Cloud Operations 2026: Self-Healing Infrastructure Guide',
    description: 'Transform your cloud infrastructure with AI-powered self-healing systems, predictive maintenance, and zero-touch operations for 99.9% uptime.',
    type: 'blog',
    readTime: '18 min read',
    publishDate: 'January 20, 2026',
    category: 'Cloud Operations',
    featured: true,
    href: '/blog/ai-autonomous-cloud-operations-2026',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Cost Reduction', value: '90%' },
      { label: 'Operations', value: 'Zero-touch' }
    ]
  },
  {
    id: 'ai-fintech-transformation-2026',
    title: 'AI FinTech Transformation 2026: Complete Digital Banking Revolution',
    description: 'Revolutionize your financial services with AI-powered automation, achieving 95% process efficiency and $5M+ annual savings.',
    type: 'blog',
    readTime: '22 min read',
    publishDate: 'January 20, 2026',
    category: 'FinTech',
    featured: true,
    href: '/blog/ai-fintech-transformation-2026',
    metrics: [
      { label: 'Automation', value: '95%' },
      { label: 'Annual Savings', value: '$5M+' },
      { label: 'Accuracy', value: '99.9%' }
    ]
  },
  {
    id: 'ai-retail-automation-2026',
    title: 'AI Retail Automation 2026: $8M ROI Case Study',
    description: 'See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, and $8M annual ROI with AI retail automation.',
    type: 'case-study',
    readTime: '15 min read',
    publishDate: 'January 20, 2026',
    category: 'Retail',
    featured: true,
    href: '/case-studies/ai-retail-automation-2026',
    metrics: [
      { label: 'Automation Rate', value: '98%' },
      { label: 'Productivity', value: '300%' },
      { label: 'Annual ROI', value: '$8M' }
    ]
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    type: 'blog',
    readTime: '18 min read',
    publishDate: 'January 20, 2026',
    category: 'Sustainability',
    featured: false,
    href: '/blog/ai-sustainability-green-tech-2026',
    metrics: [
      { label: 'Energy Reduction', value: '80%' },
      { label: 'Annual Savings', value: '$2M+' },
      { label: 'Carbon Footprint', value: 'Neutral' }
    ]
  },
  {
    id: 'ai-platform-architecture-2026',
    title: 'AI Platform Architecture 2026: Enterprise-Scale Infrastructure',
    description: 'Design and implement enterprise-scale AI platforms with microservices, edge computing, and autonomous scaling.',
    type: 'guide',
    readTime: '30 min read',
    publishDate: 'January 20, 2026',
    category: 'Architecture',
    featured: false,
    href: '/blog/ai-platform-architecture-2026',
    metrics: [
      { label: 'Scalability', value: 'Enterprise' },
      { label: 'Performance', value: '99.9%' },
      { label: 'Integration', value: 'Seamless' }
    ]
  },
  {
    id: 'ai-finops-advanced-2026',
    title: 'AI FinOps Advanced 2026: Complete Financial Operations Automation',
    description: 'Master advanced AI FinOps with predictive cost optimization, automated financial reporting, and intelligent resource allocation.',
    type: 'guide',
    readTime: '20 min read',
    publishDate: 'January 20, 2026',
    category: 'FinOps',
    featured: false,
    href: '/blog/ai-finops-advanced-2026',
    metrics: [
      { label: 'Cost Optimization', value: '70%' },
      { label: 'Automation', value: '95%' },
      { label: 'Accuracy', value: '99%' }
    ]
  }
];

const categories = ['All', 'Cloud Operations', 'FinTech', 'Retail', 'Sustainability', 'Architecture', 'FinOps'];

export default function EnhancedContentShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredContent = contentItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === 'featured') {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    }
    if (sortBy === 'newest') {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    }
    return 0;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Operations': return 'bg-cyan-100 text-cyan-800';
      case 'FinTech': return 'bg-emerald-100 text-emerald-800';
      case 'Retail': return 'bg-orange-100 text-orange-800';
      case 'Sustainability': return 'bg-green-100 text-green-800';
      case 'Architecture': return 'bg-indigo-100 text-indigo-800';
      case 'FinOps': return 'bg-violet-100 text-violet-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-gray-600 text-sm">Latest AI Content</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI innovations, case studies, and implementation guides that are transforming industries worldwide.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContent.map((item) => (
            <Link key={item.id} to={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                {/* Featured Badge */}
                {item.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-xs font-semibold">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="p-6">
                  {/* Type and Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {item.metrics.map((metric, index) => (
                        <div key={index} className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="px-6 pb-6">
                  <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'guide' ? 'Guide' : 'Article'} →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All AI Content →
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Content Impact Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">AI Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}