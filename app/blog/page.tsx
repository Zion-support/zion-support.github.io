import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  readTime: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Explore how artificial intelligence is transforming modern business operations and what it means for your company.",
      slug: "future-ai-business",
      author: "AI Team",
      date: '2024-01-15',
      category: 'AI',
      featured: true,
      image: '/images/blog/ai-business.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices 2024",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.",
      slug: "cybersecurity-best-practices-2024",
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Security',
      featured: false,
      image: '/images/blog/cybersecurity.jpg',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: "Cloud Migration Strategies",
      excerpt: "A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption.",
      slug: "cloud-migration-strategies",
      author: 'Cloud Team',
      date: '2024-01-05',
      category: 'Cloud',
      featured: false,
      image: '/images/blog/cloud-migration.jpg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: "Building Scalable Web Applications",
      excerpt: "Learn the key principles and technologies for creating web applications that can handle massive scale.",
      slug: "building-scalable-web-applications",
      author: 'Development Team',
      date: '2024-01-01',
      category: 'Technology',
      featured: false,
      image: '/images/blog/scalable-web.jpg',
      readTime: '7 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI news, tech insights, industry trends, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead with the latest technology trends, AI insights, and industry news from our expert team.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;