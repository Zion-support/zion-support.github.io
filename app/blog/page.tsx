import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Star,
  MessageSquare,
  ThumbsUp,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 4 },
    { id: "technology", name: "Technology", count: 3 },
    { id: "business", name: "Business", count: 2 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      image: "/blog/ai-business-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt: "Learn the essential strategies for creating robust and scalable cloud infrastructure for your business.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "cloud",
      readTime: "7 min read",
      image: "/blog/cloud-infrastructure.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Discover how Micro SAAS solutions are revolutionizing the way businesses access and use software.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "business",
      readTime: "6 min read",
      image: "/blog/micro-saas.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",
      excerpt: "Essential cybersecurity strategies and tools to protect your business from evolving threats.",
      author: "David Kim",
      date: "2024-01-08",
      category: "technology",
      readTime: "8 min read",
      image: "/blog/cybersecurity-2024.jpg",
      featured: false
    },
    {
      id: 5,
      title: "5G Technology: Transforming Industries and Connectivity",
      excerpt: "How 5G networks are revolutionizing industries and enabling new possibilities for businesses.",
      author: "Lisa Wang",
      date: "2024-01-05",
      category: "technology",
      readTime: "6 min read",
      image: "/blog/5g-technology.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Master the art of data analytics and learn how to extract valuable insights from your business data.",
      author: "Alex Thompson",
      date: "2024-01-03",
      category: "ai",
      readTime: "9 min read",
      image: "/blog/data-analytics.jpg",
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Technology Insights and Industry News | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, business strategies, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, business technology, cloud computing, cybersecurity, micro SAAS, 5G technology, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest technology trends, AI insights, and industry news from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Browse Categories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.id === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mb-2">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest technology trends and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;