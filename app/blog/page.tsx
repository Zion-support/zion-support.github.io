'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Discover the latest AI trends that are transforming businesses and how you can leverage them for growth.',
      content: 'Artificial Intelligence is revolutionizing the way businesses operate...',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology', 'Innovation'],
      image: '/blog/ai-future.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      content: 'Cloud migration is a critical step for modern businesses...',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Best Practices', 'IT'],
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'Explore how micro SaaS solutions are changing the software landscape.',
      content: 'Micro SaaS represents a new paradigm in software development...',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'SaaS',
      tags: ['SaaS', 'Software', 'Development', 'Business'],
      image: '/blog/micro-saas.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
      content: 'Cybersecurity has never been more important...',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Security',
      tags: ['Security', 'Cybersecurity', 'Protection', 'IT'],
      image: '/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to harness the power of data analytics for better business decisions.',
      content: 'Data is the new oil, but only if you know how to refine it...',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Analytics',
      tags: ['Analytics', 'Data', 'Insights', 'Business'],
      image: '/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What You Need to Know',
      excerpt: 'Understanding edge computing and its impact on modern technology infrastructure.',
      content: 'Edge computing is bringing computation closer to data sources...',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'Technology', 'Infrastructure', 'Innovation'],
      image: '/blog/edge-computing.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI', name: 'AI', count: blogPosts.filter(post => post.category === 'AI').length },
    { id: 'Cloud', name: 'Cloud', count: blogPosts.filter(post => post.category === 'Cloud').length },
    { id: 'SaaS', name: 'SaaS', count: blogPosts.filter(post => post.category === 'SaaS').length },
    { id: 'Security', name: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
    { id: 'Analytics', name: 'Analytics', count: blogPosts.filter(post => post.category === 'Analytics').length },
    { id: 'Technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'Technology').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet></Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT, and technology trends from Zion Tech Group experts." /></meta>
      </Helmet>
      
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></main>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="max-w-6xl mx-auto"></div>
            {/* Header */}
            <div className="text-center mb-12"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1>
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Stay updated with the latest insights on AI, IT, and technology trends
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12"></div>
              <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
                <div className="flex-1 relative"></div>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2"></div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}></option>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12"></div>
                <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
                <div className="bg-slate-800/50 rounded-lg overflow-hidden"></div>
                  <div className="md:flex"></div>
                    <div className="md:w-1/2"></div>
                      <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"></div>
                        <div className="text-center text-white"></div>
                          <div className="text-6xl mb-4">🚀</div>
                          <p className="text-lg">Featured Article</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8"></div>
                      <div className="flex items-center space-x-4 mb-4"></div>
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold"></span>
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between"></div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                          <span className="flex items-center"></span>
                            <User className="w-4 h-4 mr-1" /></User>
                            {featuredPost.author}
                          </span>
                          <span className="flex items-center"></span>
                            <Calendar className="w-4 h-4 mr-1" /></Calendar>
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        ></Link>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300"></article>
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"></div>
                    <div className="text-center text-white"></div>
                      <div className="text-4xl mb-2">📝</div>
                      <p className="text-sm">Blog Post</p>
                    </div>
                  </div>
                  <div className="p-6"></div>
                    <div className="flex items-center space-x-2 mb-3"></div>
                      <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold"></span>
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between"></div>
                      <div className="flex items-center space-x-3 text-xs text-gray-400"></div>
                        <span className="flex items-center"></span>
                          <User className="w-3 h-3 mr-1" /></User>
                          {post.author}
                        </span>
                        <span className="flex items-center"></span>
                          <Calendar className="w-3 h-3 mr-1" /></Calendar>
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      ></Link>
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" /></ArrowRight>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12"></div>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 text-center"></div>
              <div className="bg-slate-800/50 rounded-lg p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-4"></h2>
                  Stay Updated
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
                  Subscribe to our newsletter for the latest insights on AI, IT, and technology trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"></div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  /></input>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"></button>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </>
  )
  };

export default BlogPage;
