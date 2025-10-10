'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      category: 'Cloud',
      readTime: '8 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Challenges and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      category: 'Security',
      readTime: '6 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Building Scalable IT Infrastructure: Lessons from Enterprise Deployments',
      excerpt: 'Key insights from large-scale IT infrastructure projects and how to avoid common pitfalls.',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      category: 'Infrastructure',
      readTime: '7 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Discover how edge computing is revolutionizing data processing and what it means for your organization.',
      author: 'David Park',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '4 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'Machine Learning in Production: From Prototype to Scale',
      excerpt: 'Best practices for deploying and maintaining machine learning models in production environments.',
      author: 'Dr. Maria Santos',
      date: '2024-01-03',
      category: 'AI',
      readTime: '9 min read',
      image: '/api/placeholder/600/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Tech Insights & News</title>
        <meta name="description" content="Stay updated with the latest trends and insights in AI, cloud computing, and IT solutions. Expert analysis and industry news." />
        <meta name="keywords" content="AI blog, cloud computing news, IT insights, technology trends, cybersecurity updates" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech Insights & News
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in AI, cloud computing, and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;