'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities.',
      content: 'Full article content here...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology'],
      readTime: '5 min read',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential cybersecurity measures every business should implement to protect against evolving threats.',
      content: 'Full article content here...',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Security',
      tags: ['Cybersecurity', 'Best Practices', 'Security'],
      readTime: '7 min read',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to migrating your business to the cloud successfully and efficiently.',
      content: 'Full article content here...',
      author: 'Cloud Team',
      date: '2024-01-05',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Strategy'],
      readTime: '6 min read',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS: The Future of Software',
      excerpt: 'How micro SaaS solutions are revolutionizing the software industry and creating new opportunities.',
      content: 'Full article content here...',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'SaaS',
      tags: ['SaaS', 'Micro SaaS', 'Software'],
      readTime: '4 min read',
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: 5,
      title: 'Data Analytics for Small Businesses',
      excerpt: 'Practical data analytics strategies that small businesses can implement to drive growth.',
      content: 'Full article content here...',
      author: 'Analytics Team',
      date: '2023-12-28',
      category: 'Analytics',
      tags: ['Data Analytics', 'Small Business', 'Growth'],
      readTime: '8 min read',
      image: '/images/blog/data-analytics.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing',
      excerpt: 'Understanding quantum computing and its potential impact on various industries.',
      content: 'Full article content here...',
      author: 'Research Team',
      date: '2023-12-20',
      category: 'Technology',
      tags: ['Quantum Computing', 'Technology', 'Future'],
      readTime: '10 min read',
      image: '/images/blog/quantum-computing.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'AI', name: 'AI' },
    { id: 'Security', name: 'Security' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'SaaS', name: 'SaaS' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Technology', name: 'Technology' }
  ];

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business solutions from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, business solutions, tech news" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in AI, technology, 
              and business solutions from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm">{filteredPosts[0].category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {filteredPosts[0].author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(filteredPosts[0].date).toLocaleDateString()}
                        </div>
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${filteredPosts[0].id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Tag className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 h-48 flex items-center justify-center">
                    <Tag className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-slate-700 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights and updates on AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

BlogPage.displayName = 'BlogPage';

export default BlogPage;