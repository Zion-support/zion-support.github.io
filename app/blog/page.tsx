'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: '5G Implementation: A Complete Guide',
      excerpt: 'Everything you need to know about implementing 5G networks for your business.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Technology',
      image: '/images/blog/5g-guide.jpg'
    },
    {
      id: 3,
      title: 'Micro SaaS: The Future of Software',
      excerpt: 'How micro SaaS solutions are revolutionizing the software industry.',
      author: 'Mike Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Business',
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: 4,
      title: 'AI Voice Assistants: Beyond Siri and Alexa',
      excerpt: 'Building custom voice assistants for enterprise applications.',
      author: 'Emily Rodriguez',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: '/images/blog/voice-ai.jpg'
    },
    {
      id: 5,
      title: 'Predictive Maintenance with AI',
      excerpt: 'How AI is revolutionizing equipment maintenance and reducing downtime.',
      author: 'David Kim',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'AI & Technology',
      image: '/images/blog/predictive-maintenance.jpg'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization in 2024',
      excerpt: 'Latest trends and technologies in supply chain management.',
      author: 'Lisa Wang',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Business',
      image: '/images/blog/supply-chain.jpg'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Business', 'Technology'];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, artificial intelligence, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights on AI, technology, and business innovation from our experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl">📝</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-4">
                      {post.category}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search terms or browse all categories.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest tech insights and AI updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;