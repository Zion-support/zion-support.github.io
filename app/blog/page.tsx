'use client';
import React, { useState, useEffect } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Sample blog posts data
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and driving innovation across industries.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking New Ground',
      excerpt: 'Understanding the revolutionary potential of quantum computing and its practical applications.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum',
      tags: ['Quantum Computing', 'Technology', 'Future'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How AI is both enhancing and challenging cybersecurity practices in modern organizations.',
      content: 'Full article content here...',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'AI', 'Security'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Security', 'Cloud', 'Development'];

  useEffect(() => {
    setPosts(samplePosts);
    setFilteredPosts(samplePosts);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find(post => post.featured) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Featured Article
            </h2>
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured);
              return featuredPost ? (
                <article className="cyber-card hologram-card p-8 mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-yellow-400 text-sm font-medium">Featured</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="cyber-button w-fit">
                        Read More <ArrowRight className="w-4 h-4 inline ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              ) : null;
            })()}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Latest Articles
          </h2>
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
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="cyber-button w-full">
                  Read More <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;