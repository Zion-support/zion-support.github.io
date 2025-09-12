import React from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 'ai-maturity-assessment',
    title: 'Enterprise AI Maturity Assessment Framework 2025',
    description: 'Comprehensive framework to assess your organization\'s AI maturity level and create a roadmap for AI transformation success.',
    type: 'Strategy Guide',
    category: 'AI Strategy',
    readTime: '15 min read',
    url: '/blog/ai-2025-enterprise-ai-maturity-assessment',
    image: '📊',
    featured: true,
    new: true,
    tags: ['AI Maturity', 'Assessment', 'Strategy', 'Framework']
  },
  {
    id: 'logistics-transformation',
    title: 'Global Logistics AI Transformation: $2.3B Revenue Impact',
    description: 'How a Fortune 500 logistics company achieved 40% operational efficiency gains and $2.3B revenue growth through comprehensive AI transformation.',
    type: 'Case Study',
    category: 'Success Stories',
    readTime: '12 min read',
    url: '/case-studies/ai-2025-global-logistics-transformation-success',
    image: '🚛',
    featured: true,
    new: true,
    tags: ['Logistics', 'Transformation', 'ROI', 'Fortune 500']
  },
  {
    id: 'implementation-checklist',
    title: 'AI Implementation Master Checklist 2025',
    description: 'Comprehensive 200+ point checklist for successful AI implementation across strategy, data, technology, people, and governance dimensions.',
    type: 'Implementation Guide',
    category: 'Tools & Templates',
    readTime: '25 min read',
    url: '/resources/ai-implementation-master-checklist-2025',
    image: '✅',
    featured: true,
    new: true,
    tags: ['Checklist', 'Implementation', 'Best Practices', 'Templates']
  },
  {
    id: 'ai-architecture-2025',
    title: 'Advanced AI Architecture for Enterprise 2025',
    description: 'Build scalable, resilient AI systems with our comprehensive architecture guide covering microservices, MLOps, and cloud-native patterns.',
    type: 'Technical Guide',
    category: 'Architecture',
    readTime: '20 min read',
    url: '/blog/ai-2025-advanced-ai-architecture',
    image: '🏗️',
    featured: false,
    new: false,
    tags: ['Architecture', 'Scalability', 'MLOps', 'Cloud']
  },
  {
    id: 'cybersecurity-ai',
    title: 'AI Cybersecurity Revolution: Defense Strategies 2025',
    description: 'Protect your AI systems with advanced cybersecurity strategies, threat detection, and security hardening techniques.',
    type: 'Security Guide',
    category: 'Cybersecurity',
    readTime: '18 min read',
    url: '/blog/ai-2025-cybersecurity-revolution',
    image: '🛡️',
    featured: false,
    new: false,
    tags: ['Security', 'AI Defense', 'Threat Detection', 'Hardening']
  },
  {
    id: 'quantum-ai-breakthrough',
    title: 'Quantum Computing Breakthrough: AI Applications 2025',
    description: 'Explore the intersection of quantum computing and AI, with practical applications and implementation strategies.',
    type: 'Research Paper',
    category: 'Emerging Tech',
    readTime: '22 min read',
    url: '/blog/ai-2025-quantum-computing-breakthrough',
    image: '⚛️',
    featured: false,
    new: false,
    tags: ['Quantum', 'AI', 'Breakthrough', 'Research']
  }
];

const categories = [
  { name: 'All', count: 25, active: true },
  { name: 'AI Strategy', count: 8, active: false },
  { name: 'Case Studies', count: 6, active: false },
  { name: 'Implementation', count: 7, active: false },
  { name: 'Architecture', count: 4, active: false }
];

export default function EnhancedContentShowcase2025() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🔥 NEW CONTENT DROP</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest AI implementation guides, enterprise case studies, and comprehensive frameworks 
            to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <Link key={content.id} href={content.url} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl">{content.image}</div>
                  {content.new && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                  {content.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                      {content.type}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{content.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {content.tags.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{content.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your AI Capabilities?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get access to our complete library of AI resources, tools, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
            <div className="text-gray-600">Checklist Items</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
            <div className="text-gray-600">Proven ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-gray-600">New Resources</div>
          </div>
        </div>
      </div>
    </div>
  );
}