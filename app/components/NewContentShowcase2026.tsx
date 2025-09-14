import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026: React.FC = () => {
  const newContent = [
    {
      type: 'blog',
      title: 'AI 2026: Quantum Computing Breakthrough',
      description: 'The most significant technological advancement of 2026 - quantum-AI convergence revolutionizing business operations',
      url: '/blog/ai-2026-quantum-computing-breakthrough',
      category: 'Quantum AI',
      readTime: '12 min read',
      featured: true
    },
    {
      type: 'blog',
      title: 'Enterprise Automation Mastery Guide',
      description: 'Complete transformation guide for autonomous business operations with 95% efficiency improvements',
      url: '/blog/ai-2026-enterprise-automation-mastery',
      category: 'Automation',
      readTime: '15 min read',
      featured: true
    },
    {
      type: 'case-study',
      title: 'Quantum AI Financial Services Transformation',
      description: 'How Global Financial Corp achieved 940% ROI with quantum-enhanced AI systems',
      url: '/case-studies/quantum-ai-financial-services-transformation-2026',
      category: 'Case Study',
      readTime: '8 min read',
      featured: false
    },
    {
      type: 'resource',
      title: 'Quantum AI Implementation Master Guide',
      description: 'Comprehensive guide to implementing quantum AI systems in enterprise environments',
      url: '/resources/quantum-ai-implementation-master-guide-2026',
      category: 'Implementation',
      readTime: '20 min read',
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📖';
      case 'case-study': return '💼';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🆕 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Innovation Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge insights, real-world case studies, and comprehensive guides 
            on the latest AI and quantum computing breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newContent.map((content, index) => (
            <Link
              key={index}
              href={content.url}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                content.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{getTypeIcon(content.type)}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {content.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-800">
                    Read More
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;