import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024. From automation to predictive analytics, explore the latest AI innovations.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "5G Implementation: Revolutionizing Enterprise Connectivity",
      excerpt: "Learn how 5G technology is changing the game for businesses. From ultra-low latency to massive IoT connectivity, discover the benefits of 5G implementation.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Connectivity", "Enterprise", "IoT"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Protect your business from cyber threats with our comprehensive guide to cybersecurity best practices. Learn about the latest security measures and compliance requirements.",
      author: "David Martinez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cybersecurity", "Security", "Compliance", "Best Practices"]
    },
    {
      id: 4,
      title: "How AI Analytics Can Transform Your Data Strategy",
      excerpt: "Unlock the power of your data with AI analytics. Learn how to implement intelligent data analysis and gain actionable insights for your business growth.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI Analytics", "Data", "Business Intelligence", "Insights"]
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Navigate your cloud migration journey with confidence. Our comprehensive guide covers planning, execution, and best practices for successful cloud adoption.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Enterprise", "Infrastructure"]
    },
    {
      id: 6,
      title: "The Rise of Micro SAAS: Building Scalable Solutions",
      excerpt: "Explore the micro SAAS revolution and learn how to build scalable, focused software solutions that solve specific business problems effectively.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Micro SAAS", "Software", "Scalability", "Business"]
    },
    {
      id: 7,
      title: "AI-Powered Customer Support: The Future is Here",
      excerpt: "Discover how AI is revolutionizing customer support with intelligent chatbots, automated responses, and personalized customer experiences.",
      author: "Jennifer Adams",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI", "Customer Support", "Automation", "Chatbots"]
    },
    {
      id: 8,
      title: "Data Privacy in the Age of AI: What You Need to Know",
      excerpt: "Understand the critical importance of data privacy in AI applications. Learn about regulations, best practices, and how to protect user data.",
      author: "Robert Kim",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Data Privacy", "AI", "Compliance", "Security"]
    },
    {
      id: 9,
      title: "Building Resilient IT Infrastructure for Modern Businesses",
      excerpt: "Learn how to design and implement resilient IT infrastructure that can withstand challenges and support your business growth in the digital age.",
      author: "Maria Garcia",
      date: "2023-12-25",
      readTime: "11 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["IT Infrastructure", "Resilience", "Business", "Technology"]
    },
    {
      id: 10,
      title: "The Business Case for AI Investment: ROI and Beyond",
      excerpt: "Calculate the real return on investment for AI initiatives. Learn how to measure success and justify AI investments to stakeholders.",
      author: "Alex Turner",
      date: "2023-12-22",
      readTime: "7 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI Investment", "ROI", "Business Case", "Strategy"]
    },
    {
      id: 11,
      title: "Edge Computing: Bringing AI Closer to Your Data",
      excerpt: "Explore the benefits of edge computing for AI applications. Learn how to reduce latency and improve performance with edge-based solutions.",
      author: "Sophie Lee",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Edge Computing", "AI", "Performance", "Latency"]
    },
    {
      id: 12,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Navigate your digital transformation journey with a strategic approach. Learn how to align technology initiatives with business objectives.",
      author: "Kevin Brown",
      date: "2023-12-18",
      readTime: "10 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Digital Transformation", "Strategy", "Business", "Technology"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence articles, tech trends, digital transformation, cybersecurity, cloud computing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Tech Insights & Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with expert insights on AI, technology trends, and business innovation from our team of industry experts.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Articles
                </span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
