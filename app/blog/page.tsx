'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      content: 'Artificial Intelligence continues to revolutionize business operations across industries. In 2024, we\'re seeing unprecedented adoption of AI technologies...',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'How Machine Learning is Transforming Customer Service',
      excerpt: 'Discover how ML-powered chatbots and automation are improving customer experiences and reducing costs.',
      content: 'Customer service has undergone a dramatic transformation with the integration of machine learning technologies...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '4 min read',
      category: 'Machine Learning',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices for AI Workloads',
      excerpt: 'Learn the essential strategies for deploying and managing AI applications in the cloud effectively.',
      content: 'Deploying AI workloads in the cloud requires careful planning and optimization to ensure performance and cost-effectiveness...',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: Protecting Your Data',
      excerpt: 'Understand the unique security challenges and solutions when implementing AI systems in your organization.',
      content: 'As AI becomes more prevalent in business operations, cybersecurity takes on new dimensions and challenges...',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 5,
      title: 'Building Scalable AI Applications: A Developer\'s Guide',
      excerpt: 'Practical tips and strategies for creating AI applications that can handle growing user demands.',
      content: 'Scalability is crucial when building AI applications that need to serve thousands or millions of users...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'Learn how to calculate and demonstrate the return on investment for your AI initiatives.',
      content: 'Measuring the ROI of AI implementations can be challenging but is essential for justifying continued investment...',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Business Strategy',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI Trends',
    'Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Development',
    'Business Strategy'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, machine learning, cloud computing, and IT solutions from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, machine learning, cloud computing, cybersecurity, IT insights, technology trends" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Expert insights on AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, machine learning, cloud computing, 
              and IT solutions from our team of experts.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AI</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="h-40 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI and IT insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;
