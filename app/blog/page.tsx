'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean});
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]></BlogPost>([]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Technology'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true});
},
    {
      id: '2',
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement when migrating to or operating in cloud environments.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );)
}

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);)
}

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, User, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: 'Blockchain Technology Trends 2024',
      excerpt: 'Latest developments in blockchain technology and their business applications.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Blockchain',
      image: '/images/blog/blockchain-trends.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg'
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const displayPosts = searchQuery ? searchResults : blogPosts;

  return (
    <>
      <Helmet>
<title>Blog - Zion Tech Group | AI & IT Solutions Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, digital transformation" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />

      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<section className="py-20 px-4">

          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section></section>
          <div></div>
            <h2></h2>
              Latest Articles
            </h2>
            <div></div>
              {displayPosts.map((post) => (
                <article></article>
                  <div></div>
                    <div></div>
                      <div></div>
                        <User className="w-4 h-4" />
{/* Featured Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>

                      </div>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-4xl">📝</div>

                  </div>
                  <div></div>
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <spa></spa>{post.category}</span>
                  </div>
                  <h3></h3>
                    {post.title}
                  </h3>
                  <p></p>
                    {post.excerpt}
                  </p>
                  <div></div>
                    <div></div>
                      <User className="w-4 h-4" />
                      <spa></spa>{post.author}</span>
                    </div>
                    <div></div>
                      <Clock className="w-4 h-4" />
                      <spa></spa>{post.readTime}</span>
                    </div>
                  </div>
                  <div></div>
                    <span></span>
                      {new Date(post.date).toLocaleDateString();
                    </span>
                    <button></button>
                      <spa></spa>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ));
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section></section>
          <div></div>
            <h2></h2>
              Stay Updated
            </h2>
            <p></p>
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div></div>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button></button>
                Subscribe
              </button>
            </div>

                </article>
              ));
            </div>
            
            {searchResults.length === 0 && searchQuery && (
{filteredPosts.length === 0 && (

              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No articles found</div>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}

          </div>
        </section>
      </div>
    </>
  ));});
};

export default BlogPage;

