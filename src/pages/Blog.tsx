import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Business Operations in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      category: 'AI',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Enterprise Adoption',
      excerpt: 'Understanding the practical applications of quantum computing and how businesses can start preparing for the quantum revolution.',
      category: 'Quantum',
      author: 'Dr. James Kim',
      date: '2025-01-12',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Why zero-trust security architecture is becoming essential for modern enterprises and how to implement it effectively.',
      category: 'Cybersecurity',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & Tech <span className="text-cyan-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Article</h2>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-slate-300 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-slate-400">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
                <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Latest Articles</h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full mb-4">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-xs text-slate-400">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-300 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
