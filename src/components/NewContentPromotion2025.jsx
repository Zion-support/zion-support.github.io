import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotion2025 = () => {
  const featuredContent = [
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough 2025',
      excerpt: 'Discover how quantum AI is revolutionizing business intelligence with unprecedented computational power.',
      category: 'Quantum Computing',
      type: 'Article',
      readTime: '12 min read',
      featured: true,
      new: true,
      path: '/blog/quantum-ai-breakthrough-2025',
      icon: '⚛️',
      gradient: 'from-purple-50 to-blue-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'enterprise-automation-mastery',
      title: 'Enterprise Automation Mastery 2025',
      excerpt: 'Master enterprise automation with our comprehensive guide to AI-powered business transformation.',
      category: 'Enterprise AI',
      type: 'Article',
      readTime: '18 min read',
      featured: true,
      new: true,
      path: '/blog/ai-2025-enterprise-automation-mastery',
      icon: '🏢',
      gradient: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'quantum-financial-transformation',
      title: 'Quantum AI Financial Services Transformation',
      excerpt: 'A $2.3 billion success story of quantum AI implementation in global investment banking.',
      category: 'Case Study',
      type: 'Case Study',
      readTime: '15 min read',
      featured: true,
      new: true,
      path: '/case-studies/quantum-ai-financial-services-transformation',
      icon: '💰',
      gradient: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 'ai-implementation-checklist',
      title: 'AI Automation Implementation Checklist 2025',
      excerpt: 'Your complete guide to successful AI implementation with proven frameworks and strategies.',
      category: 'Implementation Guide',
      type: 'Resource',
      readTime: '20 min read',
      featured: true,
      new: true,
      path: '/resources/ai-automation-implementation-checklist-2025',
      icon: '📋',
      gradient: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200'
    },
    {
      id: 'business-transformation-playbook',
      title: 'AI 2025 Business Transformation Playbook',
      excerpt: 'Strategic guide to successfully transforming your business with artificial intelligence.',
      category: 'Strategic Guide',
      type: 'Resource',
      readTime: '25 min read',
      featured: true,
      new: true,
      path: '/resources/ai-2025-business-transformation-playbook',
      icon: '📖',
      gradient: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Quantum Computing': 'bg-purple-100 text-purple-800',
      'Enterprise AI': 'bg-green-100 text-green-800',
      'Case Study': 'bg-yellow-100 text-yellow-800',
      'Implementation Guide': 'bg-indigo-100 text-indigo-800',
      'Strategic Guide': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 NEW CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest breakthrough content featuring quantum AI, enterprise automation mastery, 
            and proven transformation strategies that are reshaping the future of business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <Link 
              key={content.id} 
              to={content.path} 
              className="group block"
            >
              <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border ${content.borderColor} hover:scale-105`}>
                {/* Content Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {content.icon}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {content.new && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(content.category)}`}>
                  {content.category}
                </div>

                {/* Content Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {content.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    {content.readTime}
                  </span>
                  <span className="text-blue-600 font-medium text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using our proven AI solutions 
            to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/resources" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Explore All Resources
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.3B</div>
            <div className="text-sm text-gray-600">Client Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.97%</div>
            <div className="text-sm text-gray-600">AI Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotion2025;