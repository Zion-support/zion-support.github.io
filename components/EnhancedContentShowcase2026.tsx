import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  href: string;
  featured?: boolean;
  new?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-enterprise-transformation-2026',
    title: 'AI Enterprise Transformation 2026: Complete Business Revolution Guide',
    description: 'Master enterprise AI transformation with 95% automation, $10M+ ROI, and complete business revolution. Comprehensive guide to AI implementation.',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '25 min read',
    metrics: [
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '$10M+', label: 'ROI', color: 'text-green-600' },
      { value: '300%', label: 'Productivity', color: 'text-purple-600' }
    ],
    href: '/blog/ai-enterprise-transformation-2026',
    featured: true,
    new: true
  },
  {
    id: 'ai-enterprise-transformation-success-2026',
    title: 'AI Enterprise Transformation Success 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved $10M ROI with comprehensive AI transformation. 95% automation, 300% productivity gains.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '15 min read',
    metrics: [
      { value: '$10M', label: 'ROI', color: 'text-green-600' },
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '18', label: 'Months', color: 'text-orange-600' }
    ],
    href: '/case-studies/ai-enterprise-transformation-success-2026',
    featured: true,
    new: true
  },
  {
    id: 'ai-autonomous-operations-2026',
    title: 'AI Autonomous Operations 2026: Complete Self-Managing Operations',
    description: 'Master autonomous AI enterprise operations with zero-touch business management, predictive analytics, and self-optimizing systems.',
    type: 'blog',
    category: 'Autonomous AI',
    readTime: '30 min read',
    metrics: [
      { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
      { value: '90%', label: 'Cost Reduction', color: 'text-blue-600' },
      { value: 'Zero', label: 'Touch Ops', color: 'text-purple-600' }
    ],
    href: '/blog/ai-autonomous-operations-2026',
    new: true
  },
  {
    id: 'ai-platform-architecture-2026',
    title: 'AI Platform Architecture 2026: Enterprise-Scale AI Infrastructure Guide',
    description: 'Design and implement enterprise-scale AI platforms with microservices, edge computing, and autonomous scaling.',
    type: 'guide',
    category: 'Architecture',
    readTime: '30 min read',
    metrics: [
      { value: '1000x', label: 'Performance', color: 'text-blue-600' },
      { value: '99.9%', label: 'Reliability', color: 'text-green-600' },
      { value: 'Auto', label: 'Scaling', color: 'text-purple-600' }
    ],
    href: '/blog/ai-platform-architecture-2026',
    new: true
  },
  {
    id: 'ai-quantum-computing-2026',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    type: 'blog',
    category: 'Quantum AI',
    readTime: '25 min read',
    metrics: [
      { value: '1000x', label: 'Faster', color: 'text-purple-600' },
      { value: '95%', label: 'Accuracy', color: 'text-green-600' },
      { value: 'Revolutionary', label: 'Capabilities', color: 'text-blue-600' }
    ],
    href: '/blog/ai-quantum-computing-2026',
    new: true
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    type: 'blog',
    category: 'Sustainability',
    readTime: '18 min read',
    metrics: [
      { value: '80%', label: 'Energy Saved', color: 'text-green-600' },
      { value: '$2M+', label: 'Savings', color: 'text-blue-600' },
      { value: '100%', label: 'Carbon Neutral', color: 'text-teal-600' }
    ],
    href: '/blog/ai-sustainability-green-tech-2026',
    new: true
  },
  {
    id: 'ai-retail-automation-2026',
    title: 'AI Retail Automation 2026: $8M ROI Case Study',
    description: 'See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, and $8M annual ROI.',
    type: 'case-study',
    category: 'Retail Success',
    readTime: '12 min read',
    metrics: [
      { value: '98%', label: 'Automation', color: 'text-blue-600' },
      { value: '$8M', label: 'ROI', color: 'text-green-600' },
      { value: '300%', label: 'Productivity', color: 'text-purple-600' }
    ],
    href: '/case-studies/ai-retail-automation-2026',
    new: true
  },
  {
    id: 'ai-fintech-transformation-2026',
    title: 'AI FinTech Transformation 2026: Complete Digital Banking Revolution',
    description: 'Transform financial services with 95% automation, $5M+ savings, and complete digital banking revolution.',
    type: 'blog',
    category: 'FinTech',
    readTime: '22 min read',
    metrics: [
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '$5M+', label: 'Savings', color: 'text-green-600' },
      { value: 'Digital', label: 'Banking', color: 'text-purple-600' }
    ],
    href: '/blog/ai-fintech-transformation-2026',
    new: true
  }
];

const categories = ['All', 'Enterprise AI', 'Success Story', 'Autonomous AI', 'Architecture', 'Quantum AI', 'Sustainability', 'Retail Success', 'FinTech'];

export default function EnhancedContentShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);
  const newItems = contentItems.filter(item => item.new);

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-200">
                  <div className="relative h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">
                            {item.type === 'blog' ? '📝' : item.type === 'case-study' ? '📊' : '📋'}
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{item.title.split(':')[0]}</h4>
                        <p className="text-indigo-100">{item.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.new ? 'NEW 2026' : 'FEATURED'}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'blog' ? 'bg-blue-100 text-blue-600' :
                        item.type === 'case-study' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6">
                        {item.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-2 mb-4">
                  {item.new && (
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                  )}
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-600' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {item.type === 'blog' ? '📝 Article' : item.type === 'case-study' ? '📊 Case Study' : '📋 Guide'}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-indigo-600 font-medium">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-1">⏱️</span>
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get started with our AI transformation services and join the companies achieving 95% automation and $10M+ ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}