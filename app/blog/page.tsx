import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "AI Solutions",
      readTime: "5 min read",
      image: "/images/blog/ai-trends.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving threats.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity.jpg"
    },
    {
      id: 3,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Discover how 5G is enabling new possibilities in IoT, edge computing, and smart cities.",
      author: "Emily Johnson",
      date: "2024-01-05",
      category: "5G Solutions",
      readTime: "6 min read",
      image: "/images/blog/5g-technology.jpg"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud successfully.",
      author: "David Kim",
      date: "2024-01-01",
      category: "Cloud Services",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to leverage data analytics to drive business growth and make informed decisions.",
      author: "Lisa Wang",
      date: "2023-12-28",
      category: "Data Analytics",
      readTime: "6 min read",
      image: "/images/blog/data-analytics.jpg"
    },
    {
      id: 6,
      title: "Micro SAAS: The Future of Software Solutions",
      excerpt: "Explore how micro SAAS platforms are changing the way businesses approach software solutions.",
      author: "Alex Thompson",
      date: "2023-12-25",
      category: "Micro SAAS",
      readTime: "5 min read",
      image: "/images/blog/micro-saas.jpg"
    }
  ];

  const categories = ["All", "AI Solutions", "Cybersecurity", "5G Solutions", "Cloud Services", "Data Analytics", "Micro SAAS"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud services, and 5G technology from Zion Tech Group experts." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and best practices in AI, cybersecurity, cloud services, and 5G technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "All"
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                <div className="w-full h-48 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-white/50" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:gap-3">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on technology trends and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}