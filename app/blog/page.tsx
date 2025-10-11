'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '/images/blog/ai-trends-2024.jpg'
    },
    {
      id: 2,
      title: 'How to Implement AI Analytics in Your Organization',
      excerpt: 'A comprehensive guide to implementing AI analytics solutions in your business.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Analytics',
      readTime: '8 min read',
      image: '/images/blog/ai-analytics-guide.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for AI-Powered Systems',
      excerpt: 'Learn how to secure your AI systems and protect against emerging threats.',
      author: 'Mike Chen',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Infrastructure with AI',
      excerpt: 'Discover how AI can optimize your cloud infrastructure and reduce costs.',
      author: 'Alex Rodriguez',
      date: '2024-01-01',
      category: 'Cloud',
      readTime: '7 min read',
      image: '/images/blog/cloud-ai-infrastructure.jpg'
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Real Case Studies',
      excerpt: 'Real-world examples of companies that achieved significant ROI with AI solutions.',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      category: 'Case Study',
      readTime: '10 min read',
      image: '/images/blog/ai-roi-case-studies.jpg'
    },
    {
      id: 6,
      title: 'Automating Business Processes with AI: A Step-by-Step Guide',
      excerpt: 'Learn how to identify and automate business processes using AI technology.',
      author: 'Emily Davis',
      date: '2023-12-20',
      category: 'Automation',
      readTime: '9 min read',
      image: '/images/blog/ai-automation-guide.jpg'
    }
  ];

  const categories = ['All', 'AI', 'Analytics', 'Security', 'Cloud', 'Case Study', 'Automation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-cyan-400">Blog</span> & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in AI and IT.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-cyan-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">AI</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
