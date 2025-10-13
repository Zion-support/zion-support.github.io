import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are transforming businesses across industries and what to expect in the coming year.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: Building Scalable Business Tools",
      excerpt: "Learn how micro SAAS solutions are revolutionizing the way businesses operate and scale their operations.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Business",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "5G Technology: Transforming Connectivity and IoT",
      excerpt: "Discover how 5G technology is enabling new possibilities in IoT, edge computing, and smart city implementations.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Technology",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Security",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrating your business to the cloud with minimal disruption.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Digital Transformation: Key Success Factors",
      excerpt: "Learn the critical factors that determine the success of digital transformation initiatives in organizations.",
      author: "Robert Taylor",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Business",
    "Technology",
    "Security",
    "Cloud Computing",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, business technology, digital transformation, cloud computing, cybersecurity"
        canonical="/blog"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest insights, trends, and innovations in AI, technology, and digital transformation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest technology trends and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;