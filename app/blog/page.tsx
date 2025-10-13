import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and what to expect in 2024.',
      content: 'Artificial intelligence is revolutionizing how businesses operate, from customer service automation to predictive analytics...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: '2',
      title: '5G Technology: Revolutionizing Connectivity',
      excerpt: 'Understanding the impact of 5G networks on IoT, edge computing, and smart city implementations.',
      content: '5G technology promises to deliver unprecedented speed and reliability, enabling new applications...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: '5G Solutions',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect against evolving threats.',
      content: 'As cyber threats become more sophisticated, businesses must adopt comprehensive security strategies...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '4',
      title: 'Micro SAAS: The Future of Business Software',
      excerpt: 'How micro SAAS solutions are changing the way businesses approach software adoption and implementation.',
      content: 'Micro SAAS platforms offer specialized, focused solutions that can be quickly deployed and scaled...',
      author: 'Emily Watson',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '5',
      title: 'Cloud Migration Strategies for Enterprise',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Cloud migration requires careful planning and execution to ensure business continuity and security...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '6',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How advanced analytics can help businesses make data-driven decisions and gain competitive advantages.',
      content: 'Data analytics transforms raw information into actionable insights that drive business growth...',
      author: 'Lisa Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', '5G Solutions', 'Cybersecurity', 'Micro SAAS', 'Cloud Computing', 'Data Analytics'];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, 5G, cybersecurity, micro SAAS, and cloud computing from Zion Tech Group's expert team."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, 5G technology, cybersecurity, micro SAAS, cloud computing, data analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, 5G, cybersecurity, and emerging technologies 
              from our expert team at Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 flex items-center justify-center">
                    <Zap className="w-24 h-24 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover insights, trends, and best practices from our technology experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest technology insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}