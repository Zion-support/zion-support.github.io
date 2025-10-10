'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag, Eye, ThumbsUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
  views: number;
  likes: number;
}

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      content: 'Artificial Intelligence continues to revolutionize business operations...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['Artificial Intelligence', 'Business Trends', 'Technology'],
      image: '/api/placeholder/600/300',
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      content: 'Cloud migration is a critical step in digital transformation...',
      author: 'Mike Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud',
      tags: ['Cloud Computing', 'Migration', 'Best Practices'],
      image: '/api/placeholder/600/300',
      views: 980,
      likes: 67
    },
    {
      id: '3',
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
      content: 'Cybersecurity threats are becoming more sophisticated...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Digital Security', 'Threat Protection'],
      image: '/api/placeholder/600/300',
      views: 1450,
      likes: 112
    },
    {
      id: '4',
      title: 'Micro SaaS: The Future of Software Distribution',
      excerpt: 'How micro SaaS solutions are changing the software industry landscape.',
      content: 'Micro SaaS represents a new paradigm in software delivery...',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'SaaS',
      tags: ['Micro SaaS', 'Software', 'Business Model'],
      image: '/api/placeholder/600/300',
      views: 890,
      likes: 54
    },
    {
      id: '5',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Master the art of data analytics to drive better business decisions.',
      content: 'Data analytics is the key to unlocking business insights...',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Insights'],
      image: '/api/placeholder/600/300',
      views: 1100,
      likes: 78
    },
    {
      id: '6',
      title: 'DevOps Culture: Building Better Software Faster',
      excerpt: 'How DevOps practices can accelerate your development lifecycle.',
      content: 'DevOps is more than just tools and processes...',
      author: 'Rachel Green',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Software Development', 'Culture'],
      image: '/api/placeholder/600/300',
      views: 750,
      likes: 45
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'SaaS', 'Analytics', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights and News</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from our expert team." />
        <meta name="keywords" content="AI blog, IT blog, technology insights, business technology, AI trends" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest insights on AI, IT solutions, and technology trends from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === selectedCategory
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="glass-card quantum-field group">
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights on AI and IT technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;