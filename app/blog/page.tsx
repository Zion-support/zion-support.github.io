'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function BlogPage() {
'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

import React  from 'react';
const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Innovation'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Trends', 'Protection'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the principles and techniques for creating applications that can handle millions of users.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Web Development', 'Scalability', 'Architecture'],
      image: '/images/blog/scalable-apps.jpg',
      featured: false
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development'];

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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT solutions from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, software development" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive blog solutions designed to meet your business needs.
          </p>
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Calendar, User, Tag } from 'lucide-react'
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimizes downtime and maximizes benefits.',
      author: 'Cloud Solutions Team',
      date: '2024-01-10',
      category: 'Cloud Services',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both a threat and a solution in modern cybersecurity strategies.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Micro SaaS Solutions: Building Scalable AI-Powered Tools',
      excerpt: 'Learn how to create and scale micro SaaS applications that leverage AI to solve specific business problems.',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'Micro SaaS',
      readTime: '7 min read',
    }
  ]

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Development',
    'Business',
    'Data Analytics'
  ]

  const stats = [
    { label: 'Articles Published', value: '100+', icon: FileText },
    { label: 'Monthly Readers', value: '10K+', icon: Users },
    { label: 'Average Read Time', value: '6 min', icon: Clock },
    { label: 'Expert Authors', value: '15+', icon: User }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business trends from our expert team." />
        <meta name="keywords" content="blog, AI insights, technology trends, business tips, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Blog() {return (
    <title>Blog - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
            <p className="text-lg text-gray-300 mb-8">Professional blog services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Blog services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="blog, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Blog;
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights on AI, technology, and business trends. 
              Our expert team shares knowledge to help you stay ahead of the curve.
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Blog services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="blog, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional blog services by Zion Tech Group.
            </p>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Updates
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cloud computing, and technology.
              </p>
            </div></div></div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div></div></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div></div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive blog solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const BlogPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Blog - Zion Tech Group"
        description="Latest insights and updates from Zion Tech Group"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default BlogPage;
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive blog solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    <  />
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Professional blog services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-gray-300 mb-8">Professional blog services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
