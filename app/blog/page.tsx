'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400'
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      title: 'The Future of AI in Business: 2024 Trends',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/400/250'
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
<<<<<<< HEAD
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthroughs',
      excerpt: 'Recent advances in quantum computing and their implications for the future.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Data Analytics for Business Growth',
      excerpt: 'How data analytics can drive business growth and competitive advantage.',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Digital Transformation Strategies',
      excerpt: 'Key strategies for successful digital transformation in modern enterprises.',
      author: 'Zion Tech Team',
      date: '2023-12-25',
      readTime: '7 min read',
      category: 'Business Strategy',
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'Business Strategy'
  ];
=======
      excerpt: 'Learn the essential strategies for successful cloud migration and how to avoid common pitfalls.',
      author: 'Mike Chen',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the evolving threat landscape and how AI is both a tool and a target for cybercriminals.',
      author: 'Alex Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Building Scalable Web Applications',
      excerpt: 'A comprehensive guide to creating web applications that can handle growth and high traffic.',
      author: 'Emily Davis',
      date: 'Dec 8, 2024',
      readTime: '8 min read',
      category: 'Development',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Data Analytics for Business Intelligence',
      excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
      author: 'David Kim',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Analytics',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'The Rise of Edge Computing',
      excerpt: 'Exploring how edge computing is revolutionizing data processing and application performance.',
      author: 'Lisa Wang',
      date: 'Dec 3, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-b629

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = searchTerm 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredPosts;

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, cloud computing, data analytics, business strategy" />
=======
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT solutions from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, software development" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Tech <span className="text-cyan-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest trends, insights, and best practices in AI, cloud computing, and IT solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            {searchFilteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Posts');
                  }}
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchFilteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/50">📝</div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights on AI, technology, and business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
<<<<<<< HEAD
=======

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest tech insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      </div>
    </>
  );
};

export default BlogPage;