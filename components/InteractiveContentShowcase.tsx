import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  href: string;
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'mega-trends',
    title: 'AI Mega Trends 2026: Complete Enterprise Guide',
    description: 'Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, learn how to capitalize on $50B+ market opportunities.',
    category: 'Trends & Insights',
    readTime: '45 min',
    metrics: [
      { value: '$50B+', label: 'Market Size', color: 'text-blue-600' },
      { value: '300%', label: 'Growth Rate', color: 'text-green-600' },
      { value: '15', label: 'Mega Trends', color: 'text-purple-600' }
    ],
    href: '/blog/ai-2026-mega-trends',
    featured: true
  },
  {
    id: 'success-story',
    title: 'AI Transformation Mega Success: $25M ROI Case Study',
    description: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.',
    category: 'Case Study',
    readTime: '30 min',
    metrics: [
      { value: '$25M', label: 'Total ROI', color: 'text-green-600' },
      { value: '99%', label: 'Automation', color: 'text-blue-600' },
      { value: '18mo', label: 'Timeline', color: 'text-purple-600' }
    ],
    href: '/case-studies/ai-transformation-mega-success-2026',
    featured: true
  },
  {
    id: 'autonomous-ops',
    title: 'AI Autonomous Operations 2026: Complete Self-Managing Systems',
    description: 'Master autonomous AI enterprise operations with zero-touch business management, predictive analytics, and self-optimizing systems for 99.9% uptime.',
    category: 'Technical Guide',
    readTime: '25 min',
    metrics: [
      { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
      { value: '90%', label: 'Cost Reduction', color: 'text-blue-600' },
      { value: '95%', label: 'Automation', color: 'text-purple-600' }
    ],
    href: '/blog/ai-autonomous-operations-2026',
    featured: false
  },
  {
    id: 'quantum-ai',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities for enterprise applications.',
    category: 'Innovation',
    readTime: '30 min',
    metrics: [
      { value: '1000x', label: 'Faster', color: 'text-purple-600' },
      { value: '95%', label: 'Accuracy', color: 'text-green-600' },
      { value: '$12M', label: 'Returns', color: 'text-blue-600' }
    ],
    href: '/blog/ai-quantum-computing-2026',
    featured: false
  },
  {
    id: 'zero-trust',
    title: 'AI Zero Trust Security 2026: Enterprise-Grade Protection',
    description: 'Implement zero-trust AI security architecture with 99.7% threat detection, autonomous incident response, and comprehensive enterprise protection.',
    category: 'Security',
    readTime: '20 min',
    metrics: [
      { value: '99.7%', label: 'Detection', color: 'text-red-600' },
      { value: '30s', label: 'Response', color: 'text-green-600' },
      { value: '95%', label: 'Accuracy', color: 'text-blue-600' }
    ],
    href: '/blog/ai-zero-trust-security-2026',
    featured: false
  },
  {
    id: 'foundation-models',
    title: 'AI Foundation Models 2026: Enterprise Implementation Playbook',
    description: 'Master foundation model ecosystems with 95% faster development cycles, 80% cost reduction, and enterprise-grade AI applications.',
    category: 'Implementation',
    readTime: '35 min',
    metrics: [
      { value: '95%', label: 'Faster Dev', color: 'text-green-600' },
      { value: '80%', label: 'Cost Reduction', color: 'text-blue-600' },
      { value: '90%', label: 'Accuracy', color: 'text-purple-600' }
    ],
    href: '/blog/ai-foundation-models-2026',
    featured: false
  }
];

const categories = ['All', 'Trends & Insights', 'Case Study', 'Technical Guide', 'Innovation', 'Security', 'Implementation'];

export default function InteractiveContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 INTERACTIVE CONTENT SHOWCASE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, case studies, and implementation guides. 
            Filter by category to find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer ${
                hoveredItem === item.id ? 'scale-105' : ''
              } ${item.featured ? 'ring-2 ring-blue-500' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-center text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'Case Study' ? 'bg-green-100 text-green-800' :
                    item.category === 'Technical Guide' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Innovation' ? 'bg-purple-100 text-purple-800' :
                    item.category === 'Security' ? 'bg-red-100 text-red-800' :
                    item.category === 'Implementation' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 mb-6">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  {item.category === 'Case Study' ? 'View Case Study →' :
                   item.category === 'Technical Guide' ? 'Read Guide →' :
                   item.category === 'Implementation' ? 'Get Playbook →' :
                   'Read Article →'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Our AI experts can create custom content tailored to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Request Custom Content
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}