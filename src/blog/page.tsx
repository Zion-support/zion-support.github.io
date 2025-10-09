import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      category: 'Success Story',
      readTime: '50 min read',
      date: '2025-01-28',
      path: '/blog/ai-enterprise-transformation-2025',
      image: '/images/blog/ai-enterprise-transformation.jpg',
      featured: true,
      stats: { views: 15420, engagement: 97 }
    },
    {
      id: 'ai-2025-2026-mega-trends-breakthrough',
      title: 'AI 2025-2026 Mega Trends Breakthrough: Revolutionary Enterprise Transformation',
      description: 'Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.',
      category: 'Mega Trends',
      readTime: '15 min read',
      date: '2025-01-15',
      path: '/blog/ai-2025-2026-mega-trends-breakthrough',
      image: '/images/blog/ai-mega-trends.jpg',
      featured: true,
      stats: { views: 12850, engagement: 89 }
    },
    {
      id: 'ai-2026-consensus-intelligence-breakthrough',
      title: 'AI 2026: Consensus Intelligence Breakthrough',
      description: 'Revolutionary consensus intelligence systems enabling collaborative AI decision-making across enterprise operations.',
      category: 'Intelligence',
      readTime: '14 min read',
      date: '2026-02-15',
      path: '/blog/ai-2026-consensus-intelligence-breakthrough',
      image: '/images/blog/consensus-intelligence.jpg',
      featured: false,
      stats: { views: 9870, engagement: 85 }
    },
    {
      id: 'ai-2026-autonomous-enterprise-architecture',
      title: 'AI 2026: Autonomous Enterprise Architecture',
      description: 'Building self-managing enterprise systems that adapt, optimize, and evolve without human intervention.',
      category: 'Architecture',
      readTime: '12 min read',
      date: '2026-01-20',
      path: '/blog/ai-2026-autonomous-enterprise-architecture',
      image: '/images/blog/autonomous-architecture.jpg',
      featured: false,
      stats: { views: 7650, engagement: 78 }
    },
    {
      id: 'ai-2026-hyperconscious-computing-revolution',
      title: 'AI 2026: Hyperconscious Computing Revolution',
      description: 'Next-generation AI systems with enhanced awareness and decision-making capabilities for enterprise applications.',
      category: 'Technology',
      readTime: '18 min read',
      date: '2026-01-10',
      path: '/blog/ai-2026-hyperconscious-computing-revolution',
      image: '/images/blog/hyperconscious-computing.jpg',
      featured: false,
      stats: { views: 11200, engagement: 92 }
    },
    {
      id: 'ai-2026-adaptive-neural-architectures-breakthrough',
      title: 'AI 2026: Adaptive Neural Architectures Breakthrough',
      description: 'Revolutionary neural network architectures that dynamically adapt to changing business requirements and data patterns.',
      category: 'Neural Networks',
      readTime: '16 min read',
      date: '2026-01-05',
      path: '/blog/ai-2026-adaptive-neural-architectures-breakthrough',
      image: '/images/blog/adaptive-neural.jpg',
      featured: false,
      stats: { views: 8930, engagement: 81 }
    }
  ], []);

  useEffect(() => {
    setPosts(blogPosts);
    setLoading(false);
  }, [blogPosts]);

  const categories = ['all', 'Success Story', 'Mega Trends', 'Intelligence', 'Architecture', 'Technology', 'Neural Networks'];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, trends, and breakthroughs in artificial intelligence and enterprise technology.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <div className="text-6xl font-bold text-cyan-600">AI</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.stats?.views.toLocaleString()}
                        </span>
                        <span>{post.stats?.engagement}% engagement</span>
                      </div>
                      <Link
                        to={post.path}
                        className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Posts' : `${selectedCategory} Posts`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400">AI</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <Link
                      to={post.path}
                      className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center text-sm"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;