import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];      title: "The Future of AI in Business: Trends and Predictions for 2024",
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
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for successful cloud migration and how to avoid common pitfalls during the transition.",
      author: "Cloud Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Understand how 5G technology is revolutionizing various industries and creating new business opportunities.",
      author: "5G Solutions Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "5G Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Micro SAAS Solutions: Building Scalable Business Applications",
      excerpt: "Learn how micro SAAS solutions can help businesses scale efficiently while maintaining cost-effectiveness.",
      author: "Product Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Discover how advanced data analytics can transform raw data into actionable business insights.",
      author: "Analytics Team",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Cybersecurity",
    "Cloud Computing",
    "5G Technology",
    "Micro SAAS",
    "Data Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cybersecurity articles, cloud computing trends, 5G technology, micro SAAS" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Tag className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Our Blogcursor/analyze-improve-and-deploy-application-30da
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize the business landscape...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Business", "Technology", "Future"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every remote team should implement to protect sensitive data and maintain compliance.",
      content: "With the rise of remote work, cybersecurity has become more critical than ever...",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      image: "/api/placeholder/400/250",
      tags: ["Cybersecurity", "Remote Work", "Security", "Best Practices"]
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud while minimizing risks and downtime.",
      content: "Cloud migration is a complex process that requires careful planning...",
      author: "Jennifer Liu",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/400/250",
      tags: ["Cloud Computing", "Migration", "Infrastructure", "Strategy"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Discover the latest web development frameworks and techniques for creating high-performance applications.",
      content: "Modern web development has evolved significantly with new frameworks...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "development",
      image: "/api/placeholder/400/250",
      tags: ["Web Development", "Frameworks", "Scalability", "Performance"]
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "How AI and machine learning are revolutionizing healthcare delivery and improving patient outcomes.",
      content: "Healthcare is one of the most promising areas for AI applications...",
      author: "Dr. Maria Garcia",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "ai",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Healthcare", "Machine Learning", "Patient Care"]
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture: Implementation Guide",
      excerpt: "Implement a zero trust security model to protect your organization from modern cyber threats.",
      content: "Zero trust security is becoming the standard for modern organizations...",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "cybersecurity",
      image: "/api/placeholder/400/250",
      tags: ["Zero Trust", "Security", "Architecture", "Implementation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, web development, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Tech Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  
          </p>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm font-medium">{post.category}</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
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

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-4xl">📝</div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>cursor/analyze-improve-and-deploy-application-30da
  );
};

export default BlogPage;
