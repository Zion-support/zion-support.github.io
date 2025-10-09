import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation 2025: Revolutionary Business Solutions',
      description: 'Discover how AI is transforming enterprise operations with revolutionary solutions that deliver unprecedented efficiency and growth.',
      category: 'Enterprise AI',
      readTime: '50 min read',
      date: '2025-01-28',
      path: '/blog/ai-enterprise-transformation-2025',
      image: '💰',
      featured: true,
      stats: { views: 18750, engagement: 97 }
    },
    {
      id: 'ai-2025-2026-mega-trends-breakthrough',
      title: 'AI 2025-2026 Mega Trends Breakthrough: Revolutionary Enterprise Transformation',
      description: 'Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.',
      category: 'Mega Trends',
      readTime: '15 min read',
      date: '2025-01-15',
      path: '/blog/ai-2025-2026-mega-trends-breakthrough',
      image: '🚀',
      stats: { views: 12500, engagement: 94 }
    },
    {
      id: 'ai-2026-autonomous-enterprise-architecture',
      title: 'AI 2026: Autonomous Enterprise Architecture Revolution',
      description: 'Revolutionary autonomous enterprise architecture transforming business operations with self-healing systems and predictive infrastructure.',
      category: 'Architecture',
      readTime: '12 min read',
      date: '2026-01-15',
      path: '/blog/ai-2026-autonomous-enterprise-architecture',
      image: '🏗️',
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
      image: '🤖',
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
      image: '🧠',
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
      image: '💡',
      featured: true,
      stats: { views: 15200, engagement: 96 }
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI & Technology Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and breakthroughs in AI and technology
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{post.image}</span>
                      <div>
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      <Link to={post.path} className="hover:text-cyan-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-300 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.stats.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {post.stats.engagement}%
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{post.image}</span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link to={post.path} className="hover:text-cyan-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.stats.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {post.stats.engagement}%
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;