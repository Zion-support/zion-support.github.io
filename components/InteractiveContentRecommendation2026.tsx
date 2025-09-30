import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentItems = [
  {
    id: 1,
    title: 'AI Enterprise Transformation 2026',
    type: 'Article',
    category: 'AI Strategy',
    readTime: '25 min',
    description: 'Complete business revolution guide with 400% ROI strategies',
    href: '/blog/ai-enterprise-transformation-2026',
    image: '/blog/ai-enterprise-transformation-2026.jpg',
    tags: ['AI Strategy', 'Enterprise', 'ROI', 'Transformation'],
    featured: true
  },
  {
    id: 2,
    title: 'Quantum AI Revolution 2026',
    type: 'Article',
    category: 'Quantum Computing',
    readTime: '18 min',
    description: 'Next frontier of enterprise computing with 1000x speed improvements',
    href: '/blog/quantum-ai-revolution-2026',
    image: '/blog/quantum-ai-revolution-2026.jpg',
    tags: ['Quantum AI', 'Breakthrough', 'Technology', 'Innovation'],
    featured: true
  },
  {
    id: 3,
    title: 'Fortune 500 AI Success Story',
    type: 'Case Study',
    category: 'Success Story',
    readTime: '12 min',
    description: '300% ROI achieved in 8 months with $12M annual savings',
    href: '/case-studies/fortune-500-ai-transformation-success',
    image: '/case-studies/fortune-500-ai-success.jpg',
    tags: ['Success Story', 'ROI', 'Fortune 500', 'Manufacturing'],
    featured: true
  },
  {
    id: 4,
    title: 'AI Trends 2025: Enterprise Transformation',
    type: 'Article',
    category: 'AI Trends',
    readTime: '15 min',
    description: 'Top 10 AI predictions and industry insights for 2025',
    href: '/blog/ai-trends-2025-enterprise-transformation',
    image: '/blog/ai-trends-2025.jpg',
    tags: ['AI Trends', '2025', 'Predictions', 'Enterprise'],
    featured: false
  },
  {
    id: 5,
    title: 'Multimodal AI Customer Service Success',
    type: 'Case Study',
    category: 'Customer Service',
    readTime: '10 min',
    description: '80% faster response times and 60% cost reduction achieved',
    href: '/case-studies/multimodal-ai-customer-service',
    image: '/case-studies/multimodal-ai-success.jpg',
    tags: ['Customer Service', 'Multimodal AI', 'Efficiency', 'Cost Reduction'],
    featured: false
  },
  {
    id: 6,
    title: 'AI Workflow Automation Guide',
    type: 'Guide',
    category: 'Automation',
    readTime: '20 min',
    description: 'Complete guide to automating business processes with AI',
    href: '/guides/ai-workflow-automation',
    image: '/guides/workflow-automation.jpg',
    tags: ['Automation', 'Workflow', 'Process', 'Guide'],
    featured: false
  }
];

const categories = ['All', 'AI Strategy', 'Quantum Computing', 'Success Story', 'AI Trends', 'Customer Service', 'Automation'];

export default function InteractiveContentRecommendation2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 Personalized Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI insights, success stories, and breakthrough technologies 
            tailored to your business needs
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
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                item.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
              } ${hoveredItem === item.id ? 'transform -translate-y-2' : ''}`}>
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-4xl">
                    {item.type === 'Article' ? '📄' : item.type === 'Case Study' ? '📊' : '📚'}
                  </div>
                </div>

                <div className="p-6">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.featured 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.featured ? 'Featured' : item.type}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Read {item.type.toLowerCase()}</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Content Library Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our AI experts can create custom content and solutions tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Custom Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}