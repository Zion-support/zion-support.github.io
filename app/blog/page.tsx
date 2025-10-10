'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content here...',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Automation'],
      featured: true,
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: '2',
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect their cloud infrastructure.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Cybersecurity',
      tags: ['Cloud', 'Security', 'Best Practices'],
      featured: false,
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: '3',
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'How micro SaaS solutions are revolutionizing the software industry and creating new business opportunities.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-05',
      category: 'Development',
      tags: ['SaaS', 'Software', 'Business'],
      featured: true,
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: '4',
      title: 'Digital Transformation Strategies for Small Businesses',
      excerpt: 'Practical steps small businesses can take to embrace digital transformation and stay competitive.',
      content: 'Full article content here...',
      author: 'Emily Davis',
      date: '2024-01-01',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Small Business'],
      featured: false,
      image: '/images/blog/digital-transformation.jpg'
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Development'];

  useEffect(() => {
    let filtered = blogPosts;
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
  }, [searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry best practices from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Insights & News
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, blockchain, cloud computing, and IT solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  {post.image && (
                    <div className="aspect-video bg-slate-700">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Articles</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  {post.image && (
                    <div className="aspect-video bg-slate-700">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;