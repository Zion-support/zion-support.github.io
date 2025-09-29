import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  readTime: string;
  category: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  href: string;
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'autonomous-infrastructure',
    title: 'AI Autonomous Infrastructure 2026',
    description: 'Self-managing systems with 99.9% uptime and 90% cost reduction',
    type: 'article',
    readTime: '25 min',
    category: 'Infrastructure',
    metrics: [
      { value: '99.9%', label: 'Uptime', color: 'text-blue-600' },
      { value: '90%', label: 'Cost Reduction', color: 'text-green-600' }
    ],
    href: '/blog/ai-autonomous-infrastructure-2026',
    featured: true
  },
  {
    id: 'quantum-computing',
    title: 'AI Quantum Hybrid Computing 2026',
    description: '1000x faster optimization with quantum-AI hybrid systems',
    type: 'article',
    readTime: '25 min',
    category: 'Quantum Computing',
    metrics: [
      { value: '1000x', label: 'Faster', color: 'text-purple-600' },
      { value: '95%', label: 'Accuracy', color: 'text-indigo-600' }
    ],
    href: '/blog/ai-quantum-hybrid-computing-2026',
    featured: true
  },
  {
    id: 'zero-trust-security',
    title: 'AI Zero Trust Security 2026',
    description: '99.7% threat detection accuracy with automated response',
    type: 'article',
    readTime: '22 min',
    category: 'Cybersecurity',
    metrics: [
      { value: '99.7%', label: 'Detection', color: 'text-red-600' },
      { value: '70%', label: 'Risk Reduction', color: 'text-orange-600' }
    ],
    href: '/blog/ai-zero-trust-security-2026',
    featured: true
  },
  {
    id: 'enterprise-transformation',
    title: 'AI Autonomous Enterprise Transformation',
    description: '$25M ROI case study with 99% automation and complete revolution',
    type: 'case-study',
    readTime: '30 min',
    category: 'Transformation',
    metrics: [
      { value: '$25M', label: 'ROI', color: 'text-green-600' },
      { value: '99%', label: 'Automation', color: 'text-blue-600' }
    ],
    href: '/case-studies/ai-autonomous-enterprise-transformation-2026',
    featured: true
  },
  {
    id: 'sustainability-transformation',
    title: 'AI Sustainability Transformation 2026',
    description: '$10M ROI case study with 100% carbon neutrality achievement',
    type: 'case-study',
    readTime: '15 min',
    category: 'Sustainability',
    metrics: [
      { value: '$10M', label: 'ROI', color: 'text-green-600' },
      { value: '100%', label: 'Carbon Neutral', color: 'text-teal-600' }
    ],
    href: '/case-studies/ai-sustainability-transformation-2026'
  },
  {
    id: 'retail-automation',
    title: 'AI Retail Automation 2026',
    description: '$8M ROI case study with 98% automation and 300% productivity gains',
    type: 'case-study',
    readTime: '20 min',
    category: 'Retail',
    metrics: [
      { value: '$8M', label: 'ROI', color: 'text-green-600' },
      { value: '98%', label: 'Automation', color: 'text-blue-600' }
    ],
    href: '/case-studies/ai-retail-automation-2026'
  }
];

const categories = ['All', 'Infrastructure', 'Quantum Computing', 'Cybersecurity', 'Transformation', 'Sustainability', 'Retail'];

export default function InteractiveContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ INTERACTIVE CONTENT SHOWCASE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI innovations, success stories, and transformation guides. 
            Filter by category to find content tailored to your interests.
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
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Content Grid */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <div 
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.type === 'article' ? 'bg-blue-100' : 
                        item.type === 'case-study' ? 'bg-green-100' : 'bg-purple-100'
                      }`}>
                        <span className="text-2xl">
                          {item.type === 'article' ? '📝' : 
                           item.type === 'case-study' ? '📊' : '📚'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex gap-4 mb-4">
                      {item.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-lg font-bold ${metric.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">{item.readTime} read</div>
                      <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Filtered Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.type === 'article' ? 'bg-blue-100' : 
                    item.type === 'case-study' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <span className="text-2xl">
                      {item.type === 'article' ? '📝' : 
                       item.type === 'case-study' ? '📊' : '📚'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex gap-4 mb-4">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">{item.readTime} read</div>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try selecting a different category to explore more content.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              View All Content
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get expert guidance on implementing AI solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}