import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      date: "2024-01-15",
      author: "Sarah Johnson",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "🤖"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successfully migrating your infrastructure to the cloud.",
      date: "2024-01-10",
      author: "Michael Chen",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "☁️"
    },
    {
      id: 3,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",
      excerpt: "Discover the latest cybersecurity threats and how to protect your organization from evolving risks.",
      date: "2024-01-05",
      author: "Emily Rodriguez",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "🔒"
    },
    {
      id: 4,
      title: "Digital Transformation: Where to Start",
      excerpt: "A practical guide to beginning your digital transformation journey with the right strategy and tools.",
      date: "2024-01-01",
      author: "David Kim",
      category: "Digital Transformation",
      readTime: "7 min read",
      image: "🚀"
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: What It Means for Your Business",
      excerpt: "Understanding edge computing and its implications for modern business operations and data processing.",
      date: "2023-12-28",
      author: "Michael Chen",
      category: "Technology",
      readTime: "4 min read",
      image: "⚡"
    },
    {
      id: 6,
      title: "Building Scalable Web Applications: Modern Architecture Patterns",
      excerpt: "Learn about modern architecture patterns that help build scalable and maintainable web applications.",
      date: "2023-12-20",
      author: "David Kim",
      category: "Web Development",
      readTime: "9 min read",
      image: "🌐"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Transformation",
    "Technology",
    "Web Development"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in 
            AI, technology, and digital transformation.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {blogPosts[0].title}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{blogPosts[0].author}</span>
              <span>•</span>
              <span>{blogPosts[0].date}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{post.image}</span>
                  <div>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter and never miss the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}