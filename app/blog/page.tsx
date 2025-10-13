import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business: Transform Your Operations Today",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and learn practical strategies to implement AI solutions in your organization.",
      content: "Artificial intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate. From automating routine tasks to providing deep insights from data, AI offers unprecedented opportunities for growth and efficiency...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      featured: true,
      image: "/api/placeholder/600/300",
      tags: ["AI", "Business", "Automation", "Machine Learning"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024: Protect Your Digital Assets",
      excerpt: "Essential cybersecurity strategies every business should implement to protect against evolving threats and ensure data security.",
      content: "In today's digital landscape, cybersecurity is not optional—it's essential. With cyber threats becoming more sophisticated, businesses must adopt a proactive approach to security...",
      author: "Michael Rodriguez",
      authorRole: "Cybersecurity Expert",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      featured: true,
      image: "/api/placeholder/600/300",
      tags: ["Cybersecurity", "Security", "Data Protection", "Best Practices"]
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
      excerpt: "Learn the essential steps and best practices for successfully migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      content: "Cloud migration is a critical decision that can transform your business operations. However, it requires careful planning and execution to ensure success...",
      author: "Jennifer Liu",
      authorRole: "Cloud Solutions Architect",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Cloud Computing", "Migration", "Infrastructure", "Best Practices"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Explore the latest technologies and architectural patterns for creating web applications that can handle millions of users and massive data loads.",
      content: "Scalability is one of the most critical aspects of modern web development. As your application grows, you need to ensure it can handle increased load...",
      author: "Alex Thompson",
      authorRole: "Senior Full-Stack Developer",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-08",
      readTime: "7 min read",
      category: "development",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Web Development", "Scalability", "Architecture", "Performance"]
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Revolutionizing Patient Care",
      excerpt: "Discover how machine learning is transforming healthcare delivery, from diagnosis to treatment, and learn about the latest innovations in medical AI.",
      content: "The healthcare industry is experiencing a revolution powered by machine learning and artificial intelligence. These technologies are enabling more accurate diagnoses...",
      author: "Dr. Maria Garcia",
      authorRole: "Healthcare AI Specialist",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["AI", "Healthcare", "Machine Learning", "Medical Technology"]
    },
    {
      id: 6,
      title: "Zero Trust Security: The New Standard for Enterprise Protection",
      excerpt: "Understand the zero trust security model and learn how to implement it in your organization to create a more secure and resilient infrastructure.",
      content: "Traditional security models assume that everything inside your network is trustworthy. Zero trust security challenges this assumption...",
      author: "David Park",
      authorRole: "Security Consultant",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-03",
      readTime: "6 min read",
      category: "cybersecurity",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Cybersecurity", "Zero Trust", "Security", "Enterprise"]
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and emerging technologies from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, cybersecurity insights, cloud computing trends, technology news, IT solutions" />
        <meta property="og:title" content="Blog - Zion Tech Group | AI & IT Solutions Insights" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and emerging technologies from Zion Tech Group experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span> & Innovation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">{post.author}</p>
                            <p className="text-gray-400 text-xs">{post.authorRole}</p>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-cyan-400 mr-3" />
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-white text-sm">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-gray-300 mb-6">
                Get the latest articles, industry insights, and technology updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}