'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, TrendingUp, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise solutions and how businesses can leverage these technologies for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Enterprise', 'Trends', 'Machine Learning']
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls to avoid and optimization techniques.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure']
    },
    {
      title: 'Cybersecurity in 2024: Emerging Threats and Defense Strategies',
      excerpt: 'Stay ahead of evolving cyber threats with our comprehensive analysis of the latest security challenges and proven defense mechanisms.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Security', 'Threats', 'Defense', 'Compliance']
    },
    {
      title: 'DevOps Transformation: From Chaos to Continuous Delivery',
      excerpt: 'Discover how to implement effective DevOps practices that accelerate development cycles while maintaining quality and reliability.',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'DevOps',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Agile']
    },
    {
      title: 'Data Analytics Revolution: Turning Big Data into Business Intelligence',
      excerpt: 'Learn how modern data analytics tools and AI-powered insights can transform raw data into actionable business intelligence.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Analytics', 'Big Data', 'BI', 'Insights']
    },
    {
      title: 'The Rise of Quantum Computing: What It Means for Your Business',
      excerpt: 'Explore the potential impact of quantum computing on various industries and how to prepare for this technological revolution.',
      author: 'Dr. Maria Santos',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Quantum Computing',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Quantum', 'Computing', 'Future', 'Technology']
    },
    {
      title: 'Mobile-First Development: Building Apps for the Modern User',
      excerpt: 'Master the art of mobile app development with our comprehensive guide to creating user-centric, performance-optimized applications.',
      author: 'Ryan Kim',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Mobile Development',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Mobile', 'Apps', 'UX', 'Performance']
    },
    {
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Discover how blockchain technology is revolutionizing industries beyond finance, from supply chain to healthcare and beyond.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '13 min read',
      category: 'Blockchain',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Innovation']
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'DevOps',
    'Data Analytics',
    'Quantum Computing',
    'Mobile Development',
    'Blockchain'
  ];

  return (
    <>
      <SEOEnhancer
        title="Blog - Latest Insights on AI, IT, and Technology | Zion Tech Group"
        description="Stay updated with the latest trends, insights, and best practices in AI, IT solutions, cloud computing, cybersecurity, and digital transformation."
        keywords={['tech blog', 'AI insights', 'IT trends', 'cloud computing', 'cybersecurity', 'digital transformation', 'technology news']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Tech Insights & Trends
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, IT solutions, and emerging technologies
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        index === 0 
                          ? 'bg-cyan-400 text-slate-900' 
                          : 'bg-slate-700 text-gray-300 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-4xl">📊</div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-cyan-400 text-slate-900 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-yellow-400 text-sm flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-3xl">📱</div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-purple-400 text-slate-900 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Stay Updated</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Subscribe to our newsletter for the latest tech insights, industry trends, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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