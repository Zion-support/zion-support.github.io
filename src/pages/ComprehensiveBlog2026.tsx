import React, { useState } from 'react';

const ComprehensiveBlog2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'future', name: 'Future Tech', icon: '🔮' },
    { id: 'business', name: 'Business Innovation', icon: '💼' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The AI Consciousness Revolution: What It Means for Humanity',
      excerpt: 'Exploring the emergence of artificial consciousness and its profound implications for human society, ethics, and the future of intelligence.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'January 20, 2026',
      readTime: '8 min read',
      image: '🧠',
      featured: true,
      tags: ['AI Consciousness', 'Ethics', 'Future of Intelligence']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Solving Impossible Problems',
      excerpt: 'How quantum computers are revolutionizing drug discovery, climate modeling, and cryptography with unprecedented computational power.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: 'January 18, 2026',
      readTime: '6 min read',
      image: '⚡',
      featured: true,
      tags: ['Quantum Computing', 'Cryptography', 'Drug Discovery']
    },
    {
      id: 3,
      title: 'Neural Interfaces: Bridging Mind and Machine',
      excerpt: 'The latest developments in brain-computer interfaces and how they\'re enabling direct communication between human consciousness and digital systems.',
      category: 'neural',
      author: 'Dr. Elena Volkov',
      date: 'January 15, 2026',
      readTime: '7 min read',
      image: '🧬',
      featured: false,
      tags: ['Neural Interfaces', 'BCI', 'Consciousness']
    },
    {
      id: 4,
      title: 'Future Tech Trends 2026: What to Expect',
      excerpt: 'A comprehensive overview of the revolutionary technologies that will shape our world in 2026 and beyond.',
      category: 'future',
      author: 'Tech Insights Team',
      date: 'January 12, 2026',
      readTime: '10 min read',
      image: '🔮',
      featured: true,
      tags: ['Future Tech', 'Innovation', 'Trends']
    },
    {
      id: 5,
      title: 'Holographic Computing: The Next Frontier',
      excerpt: 'How three-dimensional computing environments are transforming the way we interact with digital information and each other.',
      category: 'future',
      author: 'Dr. James Park',
      date: 'January 10, 2026',
      readTime: '5 min read',
      image: '🌟',
      featured: false,
      tags: ['Holographic Computing', '3D Interfaces', 'Spatial Computing']
    },
    {
      id: 6,
      title: 'AI-Powered Business Transformation: A Complete Guide',
      excerpt: 'How artificial intelligence is revolutionizing business operations, decision-making, and customer experiences across industries.',
      category: 'business',
      author: 'Business Innovation Team',
      date: 'January 8, 2026',
      readTime: '9 min read',
      image: '💼',
      featured: false,
      tags: ['AI Business', 'Digital Transformation', 'Automation']
    },
    {
      id: 7,
      title: 'Space Technology Revolution: Colonizing the Cosmos',
      excerpt: 'Breakthrough technologies making space exploration and colonization more accessible, sustainable, and economically viable.',
      category: 'future',
      author: 'Dr. Alex Thompson',
      date: 'January 5, 2026',
      readTime: '8 min read',
      image: '🚀',
      featured: false,
      tags: ['Space Technology', 'Colonization', 'Exploration']
    },
    {
      id: 8,
      title: 'Biotechnology Revolution: Enhancing Human Capabilities',
      excerpt: 'How advanced biotechnology is enabling unprecedented control over biological systems and human enhancement.',
      category: 'future',
      author: 'Dr. Maria Santos',
      date: 'January 3, 2026',
      readTime: '7 min read',
      image: '🧪',
      featured: false,
      tags: ['Biotechnology', 'Human Enhancement', 'Gene Editing']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE BLOG • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Blog 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep insights into the revolutionary technologies and innovations that are reshaping our world and defining the future.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Read Latest Posts
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Featured Posts</h2>
          <p className="text-xl opacity-90">Our most popular and impactful articles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{post.image}</div>
                <span className="px-3 py-1 bg-purple-500 rounded-full text-sm font-bold">FEATURED</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-purple-100 mb-4 opacity-90">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm opacity-75 mb-4">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Browse by Category</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {selectedCategory === 'all' ? 'All Posts' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <p className="opacity-90">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{post.image}</div>
                <div className="text-right">
                  <div className="text-sm opacity-75">{post.date}</div>
                  <div className="text-sm opacity-75">{post.readTime}</div>
                </div>
              </div>
              
              <h4 className="text-lg font-bold mb-3">{post.title}</h4>
              <p className="text-white/80 mb-4 text-sm">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-75">{post.author}</span>
                <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on revolutionary technologies and innovations.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore More?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary content and discover the technologies that are reshaping our world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveBlog2026;