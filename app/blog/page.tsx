'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, User, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      featured: true},
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration projects.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250',
      featured: false},
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest cybersecurity trends and how to protect your organization.',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      featured: true}
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'Business'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and best practices in AI, cloud computing, and technology solutions." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tech
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest insights, trends, and best practices in AI, cloud computing, and technology solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
            <div className="relative flex-1"></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category} className="capitalize">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredPosts.map((post) => (</div>
              <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden"></div>
                  <div className="absolute inset-0 bg-black/20" /></div>
                  {post.featured && (</div>
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"></div>
                      Featured</div>
                    </div>
                  )}
                </div>
                <div className="p-6"></div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4"></div>
                    <div className="flex items-center space-x-4"></div>
                      <div className="flex items-center space-x-1"></div>
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between"></div>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12"></div>
              <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )};

export default BlogPage;

