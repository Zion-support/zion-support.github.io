import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Enterprise Automation Breakthrough',
      category: 'case-study',
      roi: '2500',
      description: 'Fortune 500 company achieves 2,500% ROI through revolutionary AI implementation.',
      link: '/case-studies/ai-2025-enterprise-automation-breakthrough',
      image: '🏢',
      tags: ['AI 2025', 'Enterprise', 'Automation', 'Fortune 500'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough 2025',
      category: 'case-study',
      roi: '15000',
      description: 'Global financial services achieves 15,000% ROI through quantum supremacy.',
      link: '/case-studies/quantum-computing-breakthrough-2025',
      image: '⚛️',
      tags: ['Quantum Computing', 'Financial Services', 'Breakthrough', '15,000% ROI'],
      featured: true
    },
    {
      id: 3,
      title: 'AI 2026 Future Predictions Breakthrough',
      category: 'blog',
      roi: '0',
      description: 'Revolutionary technology forecast with 95% accuracy predictions.',
      link: '/blog/ai-2026-future-predictions-breakthrough',
      image: '🔮',
      tags: ['AI 2026', 'Predictions', 'Future Tech', '95% Accuracy'],
      featured: true
    },
    {
      id: 4,
      title: 'Neural Interface Revolution 2026',
      category: 'blog',
      roi: '8000',
      description: 'Direct brain-computer interfaces achieve 99.7% accuracy for cognitive enhancement.',
      link: '/blog/neural-interface-revolution-2026',
      image: '🧠',
      tags: ['Neural Interface', 'Brain-Computer', 'Cognitive Enhancement', '99.7% Accuracy'],
      featured: false
    },
    {
      id: 5,
      title: 'Quantum-AI Fusion Success Story',
      category: 'case-study',
      roi: '12000',
      description: 'Manufacturing company achieves 12,000% ROI through quantum-AI integration.',
      link: '/case-studies/quantum-ai-fusion-success-2026',
      image: '⚛️',
      tags: ['Quantum-AI', 'Manufacturing', '12,000% ROI', 'Fusion Technology'],
      featured: false
    },
    {
      id: 6,
      title: 'Autonomous Systems Implementation Guide',
      category: 'resource',
      roi: '5000',
      description: 'Complete guide to implementing fully autonomous business systems.',
      link: '/resources/autonomous-systems-implementation-guide-2026',
      image: '🤖',
      tags: ['Autonomous Systems', 'Implementation', 'Guide', '5,000% ROI'],
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || 
      (selectedROI === 'high' && parseInt(item.roi) >= 10000) ||
      (selectedROI === 'medium' && parseInt(item.roi) >= 1000 && parseInt(item.roi) < 10000) ||
      (selectedROI === 'low' && parseInt(item.roi) > 0 && parseInt(item.roi) < 1000) ||
      (selectedROI === 'predictions' && parseInt(item.roi) === 0);
    return categoryMatch && roiMatch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🔍 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover breakthrough content tailored to your interests and ROI goals
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Content Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Content</option>
                <option value="case-study">Case Studies</option>
                <option value="blog">Blog Posts</option>
                <option value="resource">Resources</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">ROI Level</label>
              <select
                value={selectedROI}
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All ROI Levels</option>
                <option value="high">High ROI (10,000%+)</option>
                <option value="medium">Medium ROI (1,000-9,999%)</option>
                <option value="low">Low ROI (1-999%)</option>
                <option value="predictions">Predictions & Analysis</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {parseInt(item.roi) > 0 && (
                  <div className="mb-4">
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      💰 {item.roi}% ROI
                    </span>
                  </div>
                )}

                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  {item.category === 'case-study' ? 'View Case Study' : 
                   item.category === 'blog' ? 'Read Article' : 'View Resource'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your filters to discover more content.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Our AI-powered content recommendation system can suggest personalized content based on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/content-showcase"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}