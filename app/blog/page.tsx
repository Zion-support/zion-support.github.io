import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Discover how artificial intelligence is transforming enterprise operations and driving innovation across industries.',
      content: 'Artificial intelligence is revolutionizing the way enterprises operate, from automating routine tasks to providing deep insights into business processes...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing: The Next Frontier',
      excerpt: 'Exploring the potential of quantum computing and its applications in solving complex business problems.',
      content: 'Quantum computing represents a paradigm shift in computational power, offering the potential to solve problems that are intractable for classical computers...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '3',
      title: '5G Technology: Enabling the Connected Future',
      excerpt: 'How 5G networks are creating new opportunities for businesses and transforming connectivity.',
      content: '5G technology is not just about faster internet speeds; it\'s about enabling a new era of connected devices and applications...',
      author: 'Emily Watson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: '5G',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the evolving threat landscape and how AI is being used both for attacks and defense.',
      content: 'As artificial intelligence becomes more prevalent, cybersecurity professionals must adapt to new threats and opportunities...',
      author: 'James Kim',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Security',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '5',
      title: 'Micro SAAS: The Future of Software',
      excerpt: 'How micro SAAS solutions are changing the software landscape and enabling rapid innovation.',
      content: 'Micro SAAS represents a new approach to software development, focusing on specific problems and rapid deployment...',
      author: 'Lisa Martinez',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'SAAS',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '6',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Cloud migration is a complex process that requires careful planning and execution to ensure success...',
      author: 'David Wilson',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Cloud',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', value: 'all', count: blogPosts.length },
    { name: 'AI', value: 'AI', count: blogPosts.filter(post => post.category === 'AI').length },
    { name: 'Quantum', value: 'Quantum', count: blogPosts.filter(post => post.category === 'Quantum').length },
    { name: '5G', value: '5G', count: blogPosts.filter(post => post.category === '5G').length },
    { name: 'Security', value: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
    { name: 'SAAS', value: 'SAAS', count: blogPosts.filter(post => post.category === 'SAAS').length },
    { name: 'Cloud', value: 'Cloud', count: blogPosts.filter(post => post.category === 'Cloud').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, quantum computing, 5G technology, cybersecurity, and more from Zion Tech Group's expert team."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, quantum computing, 5G technology, cybersecurity, cloud computing, micro SAAS, tech trends"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Technology Blog
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, quantum computing, 5G technology, 
                cybersecurity, and more from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="py-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
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
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 text-sm font-medium">Featured Article</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <User className="w-3 h-3 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-3 h-3 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}