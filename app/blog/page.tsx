import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth.",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Explore the potential of 5G networks and how they're enabling new applications and services.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "5G & IoT"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats.",
      author: "Alex Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Cybersecurity"
    },
    {
      id: 4,
      title: "Cloud Migration: A Complete Guide",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud successfully.",
      author: "Emily Davis",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Cloud Computing"
    },
    {
      id: 5,
      title: "Data Analytics: Turning Data into Insights",
      excerpt: "How to leverage data analytics to make better business decisions and drive growth.",
      author: "David Kim",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Data Analytics"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing",
      excerpt: "Understanding edge computing and its impact on modern technology infrastructure.",
      author: "Lisa Wang",
      date: "January 3, 2025",
      readTime: "5 min read",
      category: "Edge Computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group. Stay informed about AI, 5G, cybersecurity, and technology trends." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and updates from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}