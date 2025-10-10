'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and beyond.",
      author: "Zion Tech Team",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      slug: "future-ai-business-2024"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data.",
      author: "Security Team",
      date: "January 10, 2024",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-small-business"
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your business to the cloud with our comprehensive guide.",
      author: "Cloud Solutions Team",
      date: "January 5, 2024",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      slug: "cloud-migration-guide"
    },
    {
      id: 4,
      title: "AI-Powered Customer Service: Revolutionizing Support",
      excerpt: "Discover how AI is transforming customer service and improving customer satisfaction.",
      author: "AI Solutions Team",
      date: "December 28, 2023",
      readTime: "6 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      slug: "ai-customer-service-revolution"
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to leverage data analytics to make informed business decisions.",
      author: "Data Team",
      date: "December 20, 2023",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      slug: "data-analytics-insights"
    },
    {
      id: 6,
      title: "The Rise of Micro-SaaS: Building Scalable Solutions",
      excerpt: "Explore the micro-SaaS revolution and how to build successful small-scale software solutions.",
      author: "Development Team",
      date: "December 15, 2023",
      readTime: "10 min read",
      category: "Software Development",
      image: "/api/placeholder/400/250",
      slug: "micro-saas-scalable-solutions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, cybersecurity tips, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, data analytics, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest technology trends, AI innovations, cybersecurity insights, and industry best practices from our expert team.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Get the latest technology insights and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;