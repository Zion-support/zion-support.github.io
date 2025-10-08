import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}

const DynamicContentShowcase: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-2025-2026-mega-trends-breakthrough',
      title: 'AI 2025-2026 Mega Trends Breakthrough: Revolutionary Enterprise Transformation',
      description: 'Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.',
      category: 'Mega Trends',
      readTime: '15 min read',
      date: '2025-01-15',
      path: '/blog/ai-2025-2026-mega-trends-breakthrough',
      featured: true,
      stats: { views: 12500, engagement: 94 }
    },
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      category: 'Success Story',
      readTime: '50 min read',
      date: '2025-01-28',
      path: '/blog/ai-enterprise-transformation-2025',
      featured: true,
      stats: { views: 18750, engagement: 97 }
    },
    {
      id: 'ai-2026-autonomous-enterprise-architecture',
      title: 'AI 2026: Autonomous Enterprise Architecture Revolution',
      description: 'Revolutionary autonomous enterprise architecture transforming business operations with self-healing systems and predictive infrastructure.',
      category: 'Architecture',
      readTime: '12 min read',
      date: '2026-01-15',
      path: '/blog/ai-2026-autonomous-enterprise-architecture',
      featured: true,
      stats: { views: 8900, engagement: 91 }
    },
    {
      id: 'ai-2026-autonomous-agent-factories',
      title: 'AI 2026: Autonomous Agent Factories Revolution',
      description: 'Revolutionary autonomous agent factories transforming business operations with self-managing AI systems.',
      category: 'AI Agents',
      readTime: '18 min read',
      date: '2026-02-01',
      path: '/blog/ai-2026-autonomous-agent-factories',
      featured: false,
      stats: { views: 7200, engagement: 88 }
    },
    {
      id: 'ai-2026-consensus-intelligence-breakthrough',
      title: 'AI 2026: Consensus Intelligence Breakthrough',
      description: 'Revolutionary consensus intelligence systems enabling collaborative AI decision-making across enterprise operations.',
      category: 'Intelligence',
      readTime: '14 min read',
      date: '2026-02-15',
      path: '/blog/ai-2026-consensus-intelligence-breakthrough',
      featured: false,
      stats: { views: 6500, engagement: 85 }
    },
    {
      id: 'ai-cost-optimization-breakthrough-2026',
      title: 'AI Cost Optimization Breakthrough 2026',
      description: 'Revolutionary cost optimization strategies delivering 90% reduction in operational expenses through intelligent AI systems.',
      category: 'Cost Optimization',
      readTime: '20 min read',
      date: '2026-03-01',
      path: '/blog/ai-cost-optimization-breakthrough-2026',
      featured: false,
      stats: { views: 9800, engagement: 92 }
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setFeaturedPosts(blogPosts.filter(post => post.featured));
      setRecentPosts(blogPosts.filter(post => !post.featured).slice(0, 3));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [blogPosts]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(item => (
              <div key={item} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI trends, enterprise transformation strategies, and revolutionary 
            technologies that are reshaping the future of business.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Content
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-br ${
                    index === 0 ? 'from-indigo-500 to-purple-600' :
                    index === 1 ? 'from-green-500 to-blue-600' :
                    'from-purple-500 to-pink-600'
                  } flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">
                        {index === 0 ? '🚀' : index === 1 ? '💰' : '🏗️'}
                      </div>
                      <div className="text-sm font-medium opacity-90">{post.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.readTime}
                    </span>
                  </div>
                  {post.stats && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {formatNumber(post.stats.views)} views
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className={`font-bold text-gray-900 mb-3 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    {post.stats && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-green-600 font-medium">
                          {post.stats.engagement}% engagement
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Link
                    to={post.path}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Read Full Article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Recent Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-1">
                      {index === 0 ? '🤖' : index === 1 ? '🧠' : '💰'}
                    </div>
                    <div className="text-xs font-medium opacity-90">{post.category}</div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    {post.stats && (
                      <span className="text-xs text-green-600 font-medium">
                        {post.stats.engagement}% engagement
                      </span>
                    )}
                  </div>
                  
                  <Link
                    to={post.path}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Read More
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore All Content
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover our complete library of AI insights, enterprise transformation guides, 
              and cutting-edge technology breakthroughs.
            </p>
            <div className="space-x-4">
              <Link
                to="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                View All Articles
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Get Custom Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;