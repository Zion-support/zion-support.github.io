import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      content: 'Artificial Intelligence continues to evolve at a rapid pace, bringing new opportunities and challenges for businesses...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Business', 'Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect against cyber threats.',
      content: 'Small businesses are increasingly becoming targets for cybercriminals. Here are the essential steps...',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security',
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'Small Business', 'Security', 'Best Practices']
    },
    {
      id: 3,
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Learn how to successfully migrate your business to the cloud with our comprehensive guide.',
      content: 'Cloud migration can seem daunting, but with the right approach, it can transform your business...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud',
      image: '/api/placeholder/600/400',
      tags: ['Cloud', 'Migration', 'Infrastructure', 'Guide']
    },
    {
      id: 4,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Discover how to design and implement microservices that can grow with your business.',
      content: 'Microservices architecture offers flexibility and scalability, but requires careful planning...',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      tags: ['Microservices', 'Architecture', 'Development', 'Scalability']
    },
    {
      id: 5,
      title: 'Digital Transformation: Where to Start',
      excerpt: 'A practical guide to beginning your digital transformation journey.',
      content: 'Digital transformation is more than just adopting new technology. It\'s about fundamentally changing...',
      author: 'Sarah Johnson',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400',
      tags: ['Digital Transformation', 'Strategy', 'Business', 'Technology']
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT',
      excerpt: 'How edge computing is revolutionizing IoT applications and what it means for businesses.',
      content: 'Edge computing brings processing power closer to where data is generated, enabling real-time...',
      author: 'Michael Chen',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'IoT',
      image: '/api/placeholder/600/400',
      tags: ['Edge Computing', 'IoT', 'Technology', 'Innovation']
    }
  ];

  const categories = ['all', 'AI', 'Security', 'Cloud', 'Development', 'Digital Transformation', 'IoT'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and digital transformation from Zion Tech Group." />
        <meta name="keywords" content="blog, AI insights, IT solutions, cybersecurity, digital transformation, technology trends" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, IT solutions, cybersecurity, 
                and digital transformation from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                  <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                        <div className="w-full h-48 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/50">{post.category}</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <UserIcon className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                        >
                          Read More
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
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