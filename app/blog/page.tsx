import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <section className="py-8 px-4">
            <ResponsiveContainer>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
                {(() => {
                  const featuredPost = filteredPosts.find(post => post.featured);
                  if (!featuredPost) return null;
                  
                  return (
                    <FuturisticCard className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8">
                          <div className="flex items-center mb-4">
                            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                              Featured
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                          <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-400 mb-6">
                            <User className="w-4 h-4 mr-2" />
                            <span className="mr-4">{featuredPost.author}</span>
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="mr-4">{featuredPost.date}</span>
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                          <FuturisticButton href={`/blog/${featuredPost.id}`}>
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </FuturisticButton>
                        </div>
                      </div>
                    </FuturisticCard>
                  );
                })()}
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-8 px-4">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map(post => (
                <FuturisticCard key={post.id} className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <FuturisticButton href={`/blog/${post.id}`} variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </ResponsiveContainer>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get the latest tech insights delivered to your inbox.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <FuturisticButton className="bg-white text-blue-600 hover:bg-gray-100">
                    Subscribe
                    <Zap className="ml-2 w-4 h-4" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default BlogPage;