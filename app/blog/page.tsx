import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Filter } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping business operations and driving innovation across industries.",
      content: "Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights through advanced analytics. In 2024, we're seeing unprecedented adoption of AI technologies across all sectors...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect their digital assets.",
      content: "Cybersecurity is no longer optional for small businesses. With the increasing number of cyber threats targeting smaller organizations, implementing robust security measures has become critical...",
      author: "Mike Rodriguez",
      date: "2024-01-10",
      category: "security",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-guide.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your business operations to the cloud.",
      content: "Cloud migration has become a strategic imperative for businesses looking to scale, improve efficiency, and reduce costs. This comprehensive guide covers everything you need to know...",
      author: "Jennifer Liu",
      date: "2024-01-05",
      category: "cloud",
      readTime: "10 min read",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'development', name: 'Development' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from our expert team."
        keywords="technology blog, ai insights, cybersecurity, cloud computing, tech trends"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and practical guides 
            from our technology experts.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && searchTerm === '' && selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-white mb-4">No articles found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;