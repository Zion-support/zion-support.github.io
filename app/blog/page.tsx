import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence to drive innovation and growth.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI & Technology",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small and Medium Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats and maintain customer trust.",
      author: "Security Team",
      date: "2024-01-10",
      category: "Cybersecurity",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprise Success",
      excerpt: "Discover the key steps and considerations for successfully migrating your business to the cloud while minimizing risks.",
      author: "Cloud Solutions Team",
      date: "2024-01-05",
      category: "Cloud Computing",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "Data Analytics: Transforming Raw Data into Business Insights",
      excerpt: "Learn how advanced data analytics can help your business make informed decisions and gain competitive advantages.",
      author: "Analytics Team",
      date: "2024-01-01",
      category: "Data Analytics",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Latest Insights on AI, Technology & Business | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group's expert team." />
        <meta name="keywords" content="AI blog, technology insights, cybersecurity tips, cloud computing, data analytics, business technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 quantum-field-bg">
        <div className="holographic-grid">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-cyberpunk">
                Tech Insights & News
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest insights on AI, cybersecurity, cloud computing, 
                and emerging technologies that are shaping the future of business.
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyberpunk">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map(post => (
                <div key={post.id} className="holographic-card hover-quantum p-8 mb-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{post.date}</span>
                        </div>
                      </div>
                      <button className="btn-quantum inline-flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-6xl">📊</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyberpunk">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <article key={post.id} className="holographic-card hover-quantum p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                    </div>
                    <button className="btn-holographic w-full inline-flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center holographic-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-cyberpunk">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on technology, AI, and business innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="btn-quantum px-8 py-3">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center mt-16 text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
