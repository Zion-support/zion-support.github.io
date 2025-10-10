'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Business Intelligence', 'Digital Transformation'];

  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      image: '/blog/ai-future.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and best practices for successful cloud migration projects.',
      content: 'Full article content...',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies and tools to protect your business from evolving threats.',
      content: 'Full article content...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Threats', 'Protection', 'Compliance'],
      image: '/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to make better business decisions and drive growth.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Business Intelligence',
      tags: ['Analytics', 'Data', 'Insights', 'Business'],
      image: '/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Complete guide to digital transformation and how to successfully implement it in your organization.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'Digital Transformation',
      tags: ['Transformation', 'Digital', 'Strategy', 'Implementation'],
      image: '/blog/digital-transformation.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI and machine learning are transforming healthcare and improving patient outcomes.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Innovation'],
      image: '/blog/ml-healthcare.jpg',
      featured: true
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT solutions, technology trends, machine learning, cloud computing, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, IT solutions, and technology trends 
                from our team of experts.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search blog posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Category Filter */}
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Featured Posts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="h-64 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">📝</div>
                          <div className="text-sm opacity-80">Featured Article</div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                        <p className="text-gray-300 mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                                <Tag className="w-3 h-3 inline mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Posts */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-3xl mb-2">📰</div>
                        <div className="text-sm opacity-80">Blog Post</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
                        <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay Updated
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Subscribe to our newsletter and never miss the latest insights on AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

BlogPage.displayName = 'BlogPage';

export default BlogPage;