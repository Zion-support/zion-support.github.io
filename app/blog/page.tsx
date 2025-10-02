import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "AI Implementation Roadmap 2026: A Complete Guide",
      excerpt: "Learn how to successfully implement AI solutions in your organization with our comprehensive roadmap.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "AI",
      href: "/guides/ai-2026-implementation-roadmap",
      featured: true
    },
    {
      title: "Autonomous Business Processes: The Future of Work",
      excerpt: "Discover how autonomous business processes are revolutionizing the way companies operate.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Automation",
      href: "/guides/autonomous-business-processes-implementation-guide-2026",
      featured: true
    },
    {
      title: "Micro SaaS Development: Building Scalable Solutions",
      excerpt: "Best practices for developing micro SaaS applications that scale with your business growth.",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "SaaS",
      href: "/blog/micro-saas-development",
      featured: false
    },
    {
      title: "Cloud Migration Strategies for Enterprise",
      excerpt: "Comprehensive guide to migrating your enterprise infrastructure to the cloud.",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Cloud",
      href: "/blog/cloud-migration-strategies",
      featured: false
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential cybersecurity practices to protect your business in the digital age.",
      date: "December 20, 2024",
      readTime: "4 min read",
      category: "Security",
      href: "/blog/cybersecurity-best-practices",
      featured: false
    },
    {
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Exploring real-world applications of blockchain technology in various industries.",
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Blockchain",
      href: "/blog/blockchain-applications",
      featured: false
    }
  ];

  const categories = ["All", "AI", "Automation", "SaaS", "Cloud", "Security", "Blockchain"];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, micro SaaS, IT services, and technology trends from Zion Tech Group experts." />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, micro SaaS, IT services, 
              and emerging technology trends from our team of experts.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link to={post.href} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        to={post.href}
                        className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      <Link to={post.href} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link
                        to={post.href}
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest technology insights and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;