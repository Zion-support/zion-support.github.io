import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage artificial intelligence for competitive advantage.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "5G Technology: Transforming Industries and Enabling Innovation",
      excerpt: "Discover how 5G networks are revolutionizing industries from healthcare to manufacturing, enabling new possibilities for IoT and edge computing.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "5G Solutions",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Micro SAAS: The Future of Business Software",
      excerpt: "Learn how micro SAAS solutions are changing the way businesses operate, offering specialized tools for specific business needs.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies and practices that every business should implement to protect their digital assets and customer data.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Enterprise",
      excerpt: "Step-by-step guide to migrating your business infrastructure to the cloud, including planning, execution, and best practices.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "DevOps Transformation: Accelerating Software Delivery",
      excerpt: "How DevOps practices can help organizations deliver software faster, more reliably, and with higher quality.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "DevOps",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "AI & Technology", "5G Solutions", "Micro SAAS", "Cybersecurity", "Cloud Computing", "DevOps"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, cybersecurity, and digital transformation from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity, cloud computing, 5G technology, micro SAAS, digital transformation"
      />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Insights & News
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest trends, insights, and innovations in AI, technology, and digital transformation.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                  <span className="text-white/50 text-sm">Featured Image</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;