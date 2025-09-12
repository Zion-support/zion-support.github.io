import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentCategories = {
    all: {
      title: "All Content",
      icon: "📚",
      color: "from-blue-500 to-purple-600"
    },
    blog: {
      title: "Blog Posts",
      icon: "📝",
      color: "from-green-500 to-blue-600"
    },
    caseStudies: {
      title: "Case Studies",
      icon: "📊",
      color: "from-purple-500 to-pink-600"
    },
    resources: {
      title: "Resources",
      icon: "🛠️",
      color: "from-orange-500 to-red-600"
    }
  };

  const featuredContent = [
    {
      id: 1,
      type: 'blog',
      title: 'AI 2026: Revolutionary Breakthroughs That Will Transform Everything',
      description: 'Discover the groundbreaking AI innovations coming in 2026 that will revolutionize industries, from quantum-enhanced neural networks to autonomous systems.',
      link: '/blog/ai-2026-revolutionary-breakthroughs',
      image: '/api/placeholder/400/250',
      badge: 'NEW',
      readTime: '15 min read',
      publishDate: '2025-01-17',
      tags: ['AI 2026', 'Quantum AI', 'Neural Interfaces', 'Autonomous Systems'],
      featured: true
    },
    {
      id: 2,
      type: 'caseStudies',
      title: 'AI 2026 Global Enterprise Transformation: 500% ROI Success Story',
      description: 'How a Fortune 500 company achieved 500% ROI through comprehensive AI transformation, reducing costs by $2.3B while increasing productivity by 300%.',
      link: '/case-studies/ai-2026-global-enterprise-transformation-success',
      image: '/api/placeholder/400/250',
      badge: 'CASE STUDY',
      readTime: '12 min read',
      publishDate: '2025-01-17',
      tags: ['Enterprise AI', 'ROI Success', 'Fortune 500', 'Transformation'],
      featured: true
    },
    {
      id: 3,
      type: 'resources',
      title: 'AI 2026 Complete Implementation Master Guide: Your Blueprint for Success',
      description: 'The definitive guide to implementing cutting-edge AI technologies in 2026. Complete blueprint with tools, templates, and expert insights for guaranteed success.',
      link: '/resources/ai-2026-complete-implementation-master-guide',
      image: '/api/placeholder/400/250',
      badge: 'MASTER GUIDE',
      readTime: '45 min read',
      publishDate: '2025-01-17',
      tags: ['Implementation Guide', 'AI Strategy', 'Blueprint', 'Master Guide'],
      featured: true
    },
    {
      id: 4,
      type: 'blog',
      title: 'Quantum Machine Learning Revolution: The Next Frontier',
      description: 'Explore how quantum computing is revolutionizing machine learning, delivering 1000x performance improvements and enabling new AI capabilities.',
      link: '/blog/ai-2026-quantum-machine-learning-revolution',
      image: '/api/placeholder/400/250',
      badge: 'TRENDING',
      readTime: '18 min read',
      publishDate: '2025-01-16',
      tags: ['Quantum AI', 'Machine Learning', 'Performance', 'Innovation']
    },
    {
      id: 5,
      type: 'caseStudies',
      title: 'Neural Interface Healthcare Breakthrough: Restoring Mobility',
      description: 'Revolutionary case study showing how neural interfaces restored mobility for paralyzed patients, achieving 95% success rate in clinical trials.',
      link: '/case-studies/ai-neural-interface-healthcare-breakthrough-2025',
      image: '/api/placeholder/400/250',
      badge: 'BREAKTHROUGH',
      readTime: '14 min read',
      publishDate: '2025-01-15',
      tags: ['Neural Interfaces', 'Healthcare', 'Medical AI', 'Breakthrough']
    },
    {
      id: 6,
      type: 'resources',
      title: 'AI 2026 Implementation Toolkit: Templates & Frameworks',
      description: 'Complete toolkit with templates, frameworks, and tools for successful AI 2026 implementation. Everything you need to get started.',
      link: '/resources/ai-2026-implementation-toolkit',
      image: '/api/placeholder/400/250',
      badge: 'TOOLKIT',
      readTime: '30 min read',
      publishDate: '2025-01-14',
      tags: ['Toolkit', 'Templates', 'Frameworks', 'Implementation']
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.type === activeTab);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>🚀</span>
            <span>NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Library
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI 2026 content, featuring breakthrough insights, 
            real-world case studies, and practical implementation guides.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.badge === 'NEW' ? 'bg-red-500 text-white' :
                    item.badge === 'CASE STUDY' ? 'bg-green-500 text-white' :
                    item.badge === 'MASTER GUIDE' ? 'bg-purple-500 text-white' :
                    item.badge === 'BREAKTHROUGH' ? 'bg-orange-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Featured indicator */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{item.readTime}</span>
                  <span>•</span>
                  <span>{item.publishDate}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI 2026?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already implementing cutting-edge AI technologies. 
              Get expert guidance and accelerate your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/mega-content-showcase-2026"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm border border-white/30"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;