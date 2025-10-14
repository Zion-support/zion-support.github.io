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
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      author: "Cloud Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn how to build web applications that can handle millions of users using modern development frameworks and best practices.",
      author: "Dev Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Machine Learning in Production: Challenges and Solutions",
      excerpt: "Navigate the complexities of deploying machine learning models in production environments with real-world insights.",
      author: "ML Team",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture: Implementation Guide",
      excerpt: "Implement a zero trust security model to protect your organization's data and systems from internal and external threats.",
      author: "Security Team",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, development, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Tech Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with insights, tutorials, and industry trends from our expert team.
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
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <ResponsiveContainer>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
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
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                          Featured
                        </span>
                        <span className="text-purple-400 text-sm">{featuredPost.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <FuturisticButton>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </FuturisticButton>
                      </div>
                    </div>
                  </div>
                </FuturisticCard>
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12">
          <ResponsiveContainer>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <FuturisticCard key={post.id} className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-purple-400 text-sm">{post.category}</span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <FuturisticButton className="w-full justify-center">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </FuturisticButton>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="max-w-4xl mx-auto text-center">
              <FuturisticCard className="p-12">
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Subscribe to our newsletter and never miss the latest insights and updates from our tech experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <FuturisticButton>
                    Subscribe
                    <Zap className="w-4 h-4 ml-2" />
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