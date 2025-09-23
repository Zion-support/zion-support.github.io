import React from 'react';
import Link from 'next/link';
ArrowRightStarTrendingUpBookOpenTargetUsersZapClockExternalLink

const LatestContentShowcase2025: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'Generative AI 2025: Business Transformation Revolution',
      type: 'blog',
      category: 'AI Innovation',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-2025-generative-ai-business-transformation',
      excerpt: 'Explore how generative AI is revolutionizing business operations in 2025from content creation to customer service automation.',
      image: '/images/ai-content.jpg',
      stats: { views: '12.5'K', 'likes: '890'shares: '234' }
    },
    {
      id: 2,
      title: 'AI Automation in Manufacturing: 500% Productivity Increase',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: '20 min read',
      featured: true,
      url: '/case-studies/ai-automation-manufacturing-success-2025',
      excerpt: 'How a leading manufacturing company achieved 500% productivity increase through comprehensive AI automationreducing costs by $75M annually.',
      image: '/images/manufacturing-ai.jpg',
      stats: { views: '8.2'K', 'likes: '567'shares: '189' }
    },
    {
      id: 3,
      title: 'Quantum Computing 2025: Revolutionary Business Applications',
      type: 'blog',
      category: 'Quantum Technology',
      readTime: '15 min read',
      featured: true,
      url: '/blog/quantum-computing-2025-business-applications',
      excerpt: 'Discover how quantum computing is revolutionizing business operations in 2025from optimization problems to advanced cryptography.',
      image: '/images/quantum-computing.jpg',
      stats: { views: '15.3'K', 'likes: '1.2'K', 'shares: '456' }
    },
    {
      id: 4,
      title: 'AI Implementation Checklist 2025: Complete Guide',
      type: 'resource',
      category: 'Implementation Guide',
      readTime: '25 min read',
      featured: true,
      url: '/resources/ai-implementation-checklist-2025',
      excerpt: 'Comprehensive checklist for successful AI implementation in 2025covering strategytechnologyand change management.',
      image: '/images/ai-implementation.jpg',
      stats: { views: '9.7'K', 'likes: '743'shares: '312' }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <Target className="w-5 h-5" />;
      case 'resource': return <Users className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Innovation': return 'bg-blue-100 text-blue-800';
      case 'Manufacturing': return 'bg-green-100 text-green-800';
      case 'Quantum Technology': return 'bg-purple-100 text-purple-800';
      case 'Implementation Guide': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>FEATURED CONTENT</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Insights</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI researchreal-world success storiesand actionable implementation guides 
            from industry experts and thought leaders.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((item, index) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-sm font-medium`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.stats.views}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.stats.likes} likes</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>{item.stats.shares} shares</span>
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Full Article
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">New Articles</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Implementation Guides</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500%</div>
              <div className="text-gray-600">Avg. ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get personalized AI implementation guidance and join thousands of companies already seeing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/newsletter"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Subscribe to Updates</span>
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContentShowcase2025;