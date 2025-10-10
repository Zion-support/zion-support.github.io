'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
    excerpt: "Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Quantum Computing: Breaking Through Traditional Barriers",
    excerpt: "Discover how quantum computing is revolutionizing problem-solving capabilities and what it means for the future of technology.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Quantum Computing",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of AI: New Threats and Solutions",
    excerpt: "Learn about the evolving cybersecurity landscape and how AI is both creating new challenges and providing innovative solutions.",
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Cybersecurity",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 4,
    title: "Digital Transformation: A Complete Guide for Modern Businesses",
    excerpt: "Comprehensive insights into digital transformation strategies that are helping businesses stay competitive in today's market.",
    author: "Lisa Wang",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Digital Transformation",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 5,
    title: "Cloud Migration Best Practices: Lessons from 100+ Successful Projects",
    excerpt: "Real-world insights and best practices from our experience helping businesses migrate to the cloud successfully.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Cloud Computing",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 6,
    title: "The Rise of Micro SaaS: Building Profitable AI-Powered Tools",
    excerpt: "How to build and scale micro SaaS applications using AI to solve specific business problems and generate recurring revenue.",
    author: "Emma Johnson",
    date: "2023-12-25",
    readTime: "12 min read",
    category: "Micro SaaS",
    image: "/api/placeholder/400/250",
    featured: false
  }
];

const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Cybersecurity", "Digital Transformation", "Cloud Computing", "Micro SaaS"];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, digital transformation, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and digital transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Article</h2>
              {(() => {
                const featured = filteredPosts.find(post => post.featured) || filteredPosts[0];
                return (
                  <article className="cyber-card hologram-card p-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featured.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featured.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featured.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{featured.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{featured.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                            {featured.category}
                          </span>
                          <a
                            href={`/blog/${featured.id}`}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })()}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-8">
                Get the latest technology insights and AI trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="cyber-button px-8 py-3">
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