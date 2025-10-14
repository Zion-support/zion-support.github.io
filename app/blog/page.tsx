import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, User } from 'lucide-react';

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, User, Calendar } from 'lucide-react'
const BlogPage: React.FC = () => {
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "ai", name: "Artificial Intelligence" },
    { id: "blockchain", name: "Blockchain & Web3" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "devops", name: "DevOps" },
    { id: "security", name: "Cybersecurity" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Blockchain Applications: A Complete Guide",
      excerpt: "Learn how to design and develop blockchain applications that can handle millions of transactions.",
      category: "blockchain",
      author: "Marcus Johnson",
      date: "2024-01-12",
      readTime: "12 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: From On-Premise to Multi-Cloud",
      excerpt: "A comprehensive guide to migrating your infrastructure to the cloud with minimal downtime.",
      category: "cloud",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "Discover the essential DevOps practices that can accelerate your development and deployment cycles.",
      category: "devops",
      author: "Alex Thompson",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt: "How artificial intelligence is both a threat and a solution in modern cybersecurity strategies.",
      category: "security",
      author: "Dr. Michael Park",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Bringing AI Closer to Users",
      excerpt: "Understanding how edge computing is revolutionizing AI deployment and user experience.",
      category: "ai",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, blockchain, cloud computing, and technology trends from Zion Tech Group experts." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert analysis on the latest in technology, AI, blockchain, and digital transformation.
              </p>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <ResponsiveContainer>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </ResponsiveContainer>
        </section>

                      <div className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{post.readTime}</span>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <Right className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage
