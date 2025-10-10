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
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in AI technology and how they\'re transforming businesses across industries.',
      content: 'Full article content...',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      featured: true,
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: '2',
      title: 'How to Implement AI Solutions in Your Small Business',
      excerpt: 'A practical guide to getting started with AI technology for small and medium businesses.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      category: 'AI',
      tags: ['AI', 'Small Business', 'Implementation', 'Guide'],
      featured: false,
      image: '/images/blog/ai-small-business.jpg'
    },
    {
      id: '3',
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Essential security measures to protect your cloud infrastructure and data.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-05',
      category: 'Security',
      tags: ['Cloud', 'Security', 'Best Practices', 'Infrastructure'],
      featured: true,
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: '4',
      title: 'Micro SaaS: The Future of Software Distribution',
      excerpt: 'How micro SaaS solutions are revolutionizing the software industry.',
      content: 'Full article content...',
      author: 'Lisa Johnson',
      date: '2024-01-01',
      category: 'SaaS',
      tags: ['SaaS', 'Micro SaaS', 'Software', 'Distribution'],
      featured: false,
      image: '/images/blog/micro-saas.jpg'
    },
    {
      id: '5',
      title: 'AI-Powered Customer Service: A Complete Guide',
      excerpt: 'Learn how to implement AI chatbots and virtual assistants for better customer support.',
      content: 'Full article content...',
      author: 'Kleber Santos',
      date: '2023-12-28',
      category: 'AI',
      tags: ['AI', 'Customer Service', 'Chatbots', 'Automation'],
      featured: false,
      image: '/images/blog/ai-customer-service.jpg'
    },
    {
      id: '6',
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'How to successfully transform your business with digital technologies.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2023-12-20',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Business', 'Technology', 'Strategy'],
      featured: true,
      image: '/images/blog/digital-transformation.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'AI', name: 'AI' },
    { id: 'Security', name: 'Security' },
    { id: 'SaaS', name: 'SaaS' },
    { id: 'Digital Transformation', name: 'Digital Transformation' }
  ];

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business transformation from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Insights, trends, and expert advice on AI, technology, and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-cyan-400 text-sm font-medium">{post.author}</p>
                      <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-cyan-400 text-sm font-medium">{post.author}</p>
                    <p className="text-gray-400 text-xs">{post.date}</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI, technology, and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;