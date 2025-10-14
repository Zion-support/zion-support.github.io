import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving threats in the digital age.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Computing: Scaling Your Business Infrastructure",
      excerpt: "Discover how cloud computing can help your business scale efficiently while reducing costs and improving performance.",
      author: "Cloud Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "The Rise of Quantum Computing: What It Means for Your Business",
      excerpt: "Understanding quantum computing and its potential impact on various industries and business operations.",
      author: "Research Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 5,
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "Essential DevOps practices that can streamline your development workflow and improve deployment efficiency.",
      author: "DevOps Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Development",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Data Privacy in the Age of AI: Compliance and Best Practices",
      excerpt: "Navigate the complex landscape of data privacy regulations and learn how to maintain compliance while leveraging AI.",
      author: "Legal Team",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 7,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Learn how to build web applications that can handle millions of users using modern development practices.",
      author: "Development Team",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Development",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 8,
      title: "The Future of Remote Work: Technology Solutions and Trends",
      excerpt: "Explore how technology is shaping the future of remote work and what tools businesses need to succeed.",
      author: "HR Team",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 9,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "Discover how machine learning is revolutionizing healthcare and improving patient outcomes.",
      author: "Healthcare Team",
      date: "2023-12-10",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 10,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Understanding the broader applications of blockchain technology in various industries and business processes.",
      author: "Blockchain Team",
      date: "2023-12-05",
      readTime: "8 min read",
      category: "Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 11,
      title: "API Security: Protecting Your Digital Assets",
      excerpt: "Essential strategies for securing your APIs and protecting your digital infrastructure from cyber threats.",
      author: "Security Team",
      date: "2023-11-30",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 12,
      title: "The Evolution of Cloud Security: Trends and Best Practices",
      excerpt: "Stay updated on the latest cloud security trends and learn how to protect your cloud infrastructure.",
      author: "Cloud Security Team",
      date: "2023-11-25",
      readTime: "5 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, cybersecurity, and business innovation from Zion Tech Group." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, business technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Tech Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with insights, trends, and expert analysis 
                on the latest in technology, AI, and business innovation.
              </p>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <ResponsiveContainer>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12">
            <ResponsiveContainer>
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>
                      <FuturisticButton className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </FuturisticButton>
                    </Link>
                  </FuturisticCard>
                ))}
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <ResponsiveContainer>
            <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`}>
                    <FuturisticButton className="group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on technology, 
                AI, and business innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FuturisticButton>
                  Subscribe
                  <Zap className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default BlogPage;