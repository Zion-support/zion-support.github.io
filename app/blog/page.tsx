import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog data
  const categories = [
    { id: "all", name: "All", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "business", name: "Business", count: 2 }
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is transforming business operations and what to expect in the coming year.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'ai',
      image: '/api/placeholder/600/400',
      featured: true,
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false,
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud successfully.',
      content: 'Full article content here...',
      author: 'David Rodriguez',
      date: '2024-01-10',
      category: 'cloud',
      image: '/api/placeholder/600/400',
      featured: false,
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications',
      excerpt: 'Modern development practices for creating applications that can handle millions of users.',
      content: 'Full article content here...',
      author: 'Emily Watson',
      date: '2024-01-08',
      category: 'development',
      image: '/api/placeholder/600/400',
      featured: false,
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare',
      excerpt: 'How technology is revolutionizing patient care and healthcare operations.',
      content: 'Full article content here...',
      author: 'Dr. Lisa Park',
      date: '2024-01-05',
      category: 'business',
      image: '/api/placeholder/600/400',
      featured: false,
      readTime: '9 min read'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, business technology" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Tech Insights & News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, cybersecurity, cloud computing, and emerging technologies from our expert team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Article
            </h2>
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl overflow-hidden border border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 text-purple-400 mr-2" />
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
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

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest tech insights and industry updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
