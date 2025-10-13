import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Filter } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping the business landscape and discover how your company can stay ahead of the curve.",
      content: "Artificial Intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Protect your business from cyber threats with these essential security practices and strategies.",
      content: "Small businesses are increasingly becoming targets for cybercriminals. Here's how to protect your company...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "Security",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud successfully.",
      content: "Cloud migration is a complex process that requires careful planning and execution...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Business', 'Security', 'Cloud Computing', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, cybersecurity tips, and business strategies from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity tips, cloud computing, business technology, tech trends" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on AI, cybersecurity, cloud computing, and digital transformation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    post.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest technology insights, AI trends, and business strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;