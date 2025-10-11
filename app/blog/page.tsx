<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

=======
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

=======
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18

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
  featured: boolean;
  image: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Solutions',
    excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and what businesses need to know.',
    content: 'Full article content here...',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI',
    tags: ['AI', 'Enterprise', 'Technology'],
    image: '/api/placeholder/400/200',
    featured: true
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices for 2024',
    excerpt: 'Essential strategies for optimizing cloud infrastructure and maximizing ROI in the modern digital landscape.',
    content: 'Full article content here...',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Cloud',
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    image: '/api/placeholder/400/200',
    featured: false
  },
  {
    id: '3',
    title: 'Cybersecurity Trends Every Business Should Know',
    excerpt: 'Stay ahead of emerging threats with our comprehensive guide to cybersecurity trends and best practices.',
    content: 'Full article content here...',
    author: 'Lisa Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Security',
    tags: ['Cybersecurity', 'Security', 'Business'],
    image: '/api/placeholder/400/200',
    featured: true
  }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-529a

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

<<<<<<< HEAD
=======
=======
const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
  const blogPosts: BlogPost[] = useMemo(() => [
=======
const blogPosts: BlogPost[] = useMemo(() => [

    {
      id: '1',
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and creating new opportunities.',
      content: 'Full article content here...',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['artificial intelligence', 'business', 'technology'],
      featured: true,
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: '2',
      title: 'Cloud Computing Best Practices',
      excerpt: 'Essential strategies for optimizing your cloud infrastructure and maximizing performance.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cloud',
      tags: ['cloud computing', 'infrastructure', 'optimization'],
      featured: false,
      image: '/images/blog/cloud-computing.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Trends 2024',
      excerpt: 'The latest cybersecurity trends and how to protect your business from emerging threats.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      tags: ['cybersecurity', 'security', 'trends'],
      featured: false,
      image: '/images/blog/cybersecurity.jpg'
    }
  ], []);
<<<<<<< HEAD
  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'DevOps'];
=======
  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development'];
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Business'];
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag, blogPosts]);

<<<<<<< HEAD
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
  const featuredPost = blogPosts.find(post => post.featured);
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Blog posts coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
=======
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights and articles on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="tech blog, AI articles, cloud computing, cybersecurity, technology insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tech
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and innovations in AI, cloud computing, and technology.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
=======
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business solutions from Zion Tech Group." />
        <meta name="keywords" content="blog, AI insights, technology news, business solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, technology, and business solutions.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tag Filter */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag('All')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTag === 'All'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    All Tags
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedTag === tag
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Blog Posts Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold">
=======
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Featured Image</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="text-gray-400">{featuredPost.category}</span>
                    </div>
<<<<<<< HEAD
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400">{post.category}</span>
                      </div>
                      <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
=======
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="flex items-center bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                      Read More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center mb-6">
                    <span className="text-white text-lg font-semibold">Article Image</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Read More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                </article>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        <Footer />
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
    </>
  );
};

export default BlogPage;
