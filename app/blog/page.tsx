'use client';

import React from 'react';
import { 
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  Search
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      author: "Dr. Kleber Santos",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Trends",
      image: "/images/blog/ai-trends-2024.jpg"
    },
    {
      title: "How Quantum Computing is Revolutionizing Data Processing",
      excerpt: "Discover how quantum computing is transforming data processing capabilities and what it means for your business.",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Quantum Computing",
      image: "/images/blog/quantum-computing.jpg"
    },
    {
      title: "Building Scalable AI Infrastructure: Best Practices",
      excerpt: "Learn the essential strategies for building AI infrastructure that can grow with your business needs.",
      author: "Michael Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Infrastructure",
      image: "/images/blog/ai-infrastructure.jpg"
    },
    {
      title: "The Ethics of AI: Ensuring Responsible Development",
      excerpt: "Understanding the importance of ethical AI development and how to implement responsible practices.",
      author: "Dr. Kleber Santos",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "AI Ethics",
      image: "/images/blog/ai-ethics.jpg"
    },
    {
      title: "Micro SaaS: The Future of Business Software",
      excerpt: "How micro SaaS solutions are changing the way businesses approach software and automation.",
      author: "Sarah Chen",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Micro SaaS",
      image: "/images/blog/micro-saas.jpg"
    },
    {
      title: "Cybersecurity in the Age of AI: New Challenges and Solutions",
      excerpt: "Exploring the evolving landscape of cybersecurity and how AI is both a threat and a solution.",
      author: "Michael Rodriguez",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Cybersecurity",
      image: "/images/blog/ai-cybersecurity.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "AI Trends",
    "Quantum Computing",
    "Infrastructure",
    "AI Ethics",
    "Micro SaaS",
    "Cybersecurity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Insights, trends, and expert analysis on AI, technology, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-4xl">📝</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights on AI, technology, and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;