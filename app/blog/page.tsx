"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt: "Learn how to design and implement cloud infrastructure that can scale with your business growth and changing needs.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cloud Computing",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt: "Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that organizations must address.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cybersecurity",
      featured: false,
    },
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Computing", "Cybersecurity", "Development", "Business"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights and trends in technology" />
        <meta property="og:title" content="Blog | Zion Tech Group" />
        <meta property="og:description" content="Latest insights and trends in technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Latest insights, trends, and best practices in technology and business.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center rounded-lg mb-6">
                    <div className="text-6xl text-purple-400">📝</div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
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