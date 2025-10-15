<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag, BookOpen, Zap } from 'lucide-react';

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
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Sample blog posts data
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
      title: 'Quantum Computing: The Next Frontier',
      excerpt: 'Understanding the potential of quantum computing and its implications for cybersecurity and data processing.',
      content: 'Full article content...',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'Security'],
      image: '/images/blog/quantum-computing.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies for Enterprise',
      excerpt: 'Best practices and strategies for successful cloud migration in enterprise environments.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Enterprise'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is both enhancing and challenging cybersecurity practices.',
      content: 'Full article content...',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threats'],
      image: '/images/blog/cybersecurity-ai.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Comprehensive guide to digital transformation for modern businesses.',
      content: 'Full article content...',
      author: 'David Lee',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Business'],
      image: '/images/blog/digital-transformation.jpg',
      featured: false
    }
  ];

  const categories = [
    'all',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cloud Computing',
    'Cybersecurity',
    'Digital Transformation'
  ];

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
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, quantum computing, cloud solutions, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, quantum computing, cloud solutions, digital transformation, technology insights" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, cybersecurity, cloud computing, and emerging technologies.
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
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
=======
<<<<<<< HEAD
import React from 'react;'
import { Helmet , Right,  User,  Calendar  } from 'lucide-react;'
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
>>>>>>> main
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="aspect-w-16 aspect-h-9">
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="ml-2 text-sm text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transform duration-300"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          <Tag className="w-3 h-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transform duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
=======
        {/* Blog Posts */}
        <section className="py-20 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""
              {blogPosts.map((post) => (}
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">""
                  <div className="text-4xl mb-4">{post.image}</div>""
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">""
                    <span className="flex items-center">""
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">""
                      <User className="w-4 h-4 mr-1" />""
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">""
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>""
                  <div className="flex items-center justify-between">""
                    <span className="text-cyan-400 text-sm font-medium">{post.readTime}</span>""
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">""
                      Read More
                      <Right className="w-4 h-4 ml-1" />""
                    </button>
>>>>>>> main
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
        <div className="text-center"></div>
          <h1>Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import React from 'react';;
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {}
import React from 'react',
      import { Helmet } from 'react-helmet-async',
      import SEOHead from '../components/SEOHead',
      const BlogPage: React.FC = () => {}
  return ()
    <>{}</>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

  );

const BlogPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="Blog - Zion Tech Group | AI & IT Solutions"",
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."";
        keywords="tech blog, AI insights, cybersecurity news, cloud computing, technology trends, tech articles"";
      />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        <div className ="min-h-screen flex items-center justify-center">";
          <div className ="text-center max-w-4xl mx-auto px-4">";
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
              Blog
            </h1>
            <p className ="text-xl text-gray-300 mb-8">",
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends.
            </p>
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
                Coming Soon
              </button>
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),

};

<<<<<<< HEAD
export default BlogPage;
=======
export default BlogPage;
>>>>>>> main
>>>>>>> main
