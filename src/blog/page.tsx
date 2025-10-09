import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation 2025: The Complete Guide',
      description: 'Comprehensive guide to AI transformation in enterprise environments, covering strategy, implementation, and ROI optimization.',
      category: 'AI Strategy',
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
      description: 'Revolutionary autonomous agent factories transforming business operations with self-managing AI systems and intelligent automation.',
      category: 'Automation',
      readTime: '18 min read',
      date: '2026-01-10',
      path: '/blog/ai-2026-autonomous-agent-factories',
      image: '🤖',
      stats: { views: 15600, engagement: 96 }
    }
  ];

  const categories = ['All', 'AI Strategy', 'Mega Trends', 'Architecture', 'Automation', 'Technology'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI & Technology Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and breakthroughs in AI and enterprise technology.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-cyan-500 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-6xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-300">{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.description}</p>
                  <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {post.stats.views.toLocaleString()} views
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      {post.stats.engagement}% engagement
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to={post.path}
                    className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">{post.image}</div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-300 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {post.stats.views.toLocaleString()}
                </div>
              </div>
              <Link
                to={post.path}
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI insights and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;