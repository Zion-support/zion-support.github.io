'use client';
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Eye, Heart, Share2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'Artificial Intelligence', count: 8 },
    { id: 'it', name: 'IT Solutions', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'technology', name: 'Technology', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive growth and efficiency.',
      content: 'Artificial intelligence is revolutionizing how enterprises operate, from automating routine tasks to providing deep insights into customer behavior...',
      author: 'Dr. Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '🤖',
      views: 1250,
      likes: 89,
      tags: ['AI', 'Enterprise', 'Automation', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt: 'A comprehensive look at quantum computing\'s current state, practical applications, and what it means for businesses today.',
      content: 'Quantum computing represents one of the most significant technological leaps of our time, but understanding its practical applications...',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'technology',
      image: '⚛️',
      views: 980,
      likes: 67,
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future Tech']
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Everything you need to know about migrating to the cloud successfully, including common pitfalls and optimization strategies.',
      content: 'Cloud migration is a critical step in digital transformation, but it requires careful planning and execution to avoid costly mistakes...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'it',
      image: '☁️',
      views: 1100,
      likes: 72,
      tags: ['Cloud Computing', 'Migration', 'DevOps', 'Infrastructure']
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support: Revolutionizing User Experience',
      excerpt: 'How AI is transforming customer support operations and creating more personalized, efficient user experiences.',
      content: 'Customer support has evolved dramatically with the integration of AI technologies, enabling businesses to provide 24/7 assistance...',
      author: 'Dr. Emily Watson',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'ai',
      image: '🎧',
      views: 850,
      likes: 54,
      tags: ['AI', 'Customer Support', 'Chatbots', 'User Experience']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both creating new threats and providing innovative solutions.',
      content: 'As AI becomes more prevalent, cybersecurity professionals must adapt to new attack vectors while leveraging AI for defense...',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'it',
      image: '🛡️',
      views: 920,
      likes: 61,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Risk Management']
    },
    {
      id: 6,
      title: 'The ROI of Digital Transformation: Measuring Success',
      excerpt: 'A data-driven approach to measuring the return on investment of digital transformation initiatives.',
      content: 'Digital transformation is a significant investment, and measuring its success requires a comprehensive approach to metrics...',
      author: 'Sarah Chen',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'business',
      image: '📊',
      views: 780,
      likes: 45,
      tags: ['Digital Transformation', 'ROI', 'Business Strategy', 'Analytics']
    },
    {
      id: 7,
      title: 'Machine Learning in Healthcare: Saving Lives with Data',
      excerpt: 'How machine learning is revolutionizing healthcare through predictive analytics, drug discovery, and personalized medicine.',
      content: 'Healthcare is experiencing a transformation through machine learning, enabling more accurate diagnoses and personalized treatments...',
      author: 'Dr. Emily Watson',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'ai',
      image: '🏥',
      views: 1300,
      likes: 95,
      tags: ['Machine Learning', 'Healthcare', 'Medical AI', 'Predictive Analytics']
    },
    {
      id: 8,
      title: 'Building Scalable IT Infrastructure for Growing Businesses',
      excerpt: 'Essential strategies for designing and implementing IT infrastructure that can grow with your business.',
      content: 'Scalable IT infrastructure is crucial for business growth, requiring careful planning and the right technology choices...',
      author: 'Michael Rodriguez',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'it',
      image: '🏗️',
      views: 650,
      likes: 38,
      tags: ['Infrastructure', 'Scalability', 'Cloud Computing', 'Business Growth']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOEnhancer
        title="Blog - Zion Tech Group | AI and IT Insights"
        description="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group's expert team."
        keywords={['AI blog', 'IT solutions blog', 'technology insights', 'AI trends', 'enterprise technology']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Blog
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert analysis on AI, IT solutions, and technology
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Featured Article</h2>
              <div className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="text-8xl">{filteredPosts[0].image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold">
                        {categories.find(c => c.id === filteredPosts[0].category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(filteredPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {filteredPosts[0].author}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {filteredPosts[0].views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {filteredPosts[0].likes}
                        </div>
                      </div>
                      <a
                        href={`/blog/${filteredPosts[0].id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(1).map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{post.image}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-400 text-slate-900 rounded text-xs font-semibold">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 neon-text line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI, IT solutions, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;