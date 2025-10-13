=======
=======
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
import { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog data
  const categories = [
    { id: "all", name: "All", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "business", name: "Business", count: 2 }
=======
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Cloud Team',
      date: '2024-01-10',
      category: 'Cloud',
      featured: false,
      image: '/images/blog/cloud-migration.jpg',
      readTime: '7 min read'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false,
      readTime: '6 min read'
    },
    {
      title: "The Future of AI in Business: A Comprehensive Guide",
      excerpt: "Explore how artificial intelligence is transforming modern business operations and what it means for your company's future.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential security measures every business should implement to protect against evolving cyber threats.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Cybersecurity",
      readTime: "6 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Cloud Computing",
      readTime: "10 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Digital Transformation: Where to Start",
      excerpt: "A practical guide to beginning your digital transformation journey with proven strategies and real-world examples.",
      author: "David Kim",
      date: "2024-01-08",
      category: "Business",
      readTime: "7 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "AI-Powered Analytics: Unlocking Business Insights",
      excerpt: "Discover how AI-driven analytics can help you make better business decisions and gain competitive advantages.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-05",
      category: "AI & Machine Learning",
      readTime: "9 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture",
      excerpt: "Implementing a zero trust security model to protect your organization from modern cyber threats.",
      author: "Michael Chen",
      date: "2024-01-03",
      category: "Cybersecurity",
      readTime: "11 min read",
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const featuredPost = posts.find(post => post.featured);
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
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud and maximizing the benefits of cloud computing.",
      content: "Cloud migration is a critical step in digital transformation, but it requires careful planning and execution. This comprehensive guide covers everything you need to know...",
      author: "Jennifer Liu",
      authorRole: "Cloud Solutions Architect",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Cloud Computing", "Migration", "Infrastructure", "Digital Transformation"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Explore the latest technologies and frameworks for building web applications that can handle millions of users.",
      content: "Building scalable web applications requires careful architecture decisions and the right technology stack. This article explores modern approaches...",
      author: "David Park",
      authorRole: "Senior Full-Stack Developer",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-08",
      readTime: "7 min read",
      category: "development",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Web Development", "Scalability", "React", "Node.js"]
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Bringing Processing Power Closer to Users",
      excerpt: "Understand how edge computing is changing the landscape of data processing and what it means for your business.",
      content: "Edge computing represents a paradigm shift in how we process and analyze data. By bringing computation closer to the data source...",
      author: "Alex Thompson",
      authorRole: "Edge Computing Specialist",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-05",
      readTime: "9 min read",
      category: "cloud",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Edge Computing", "IoT", "Data Processing", "5G"]
    },
    {
      id: 6,
      title: "Zero Trust Security Model: A New Approach to Cybersecurity",
      excerpt: "Learn about the Zero Trust security model and how it can help protect your organization from modern cyber threats.",
      content: "The traditional perimeter-based security model is no longer sufficient in today's distributed work environment. Zero Trust offers a more robust approach...",
      author: "Lisa Wang",
      authorRole: "Security Consultant",
      authorAvatar: "/api/placeholder/40/40",
      publishedAt: "2024-01-03",
      readTime: "5 min read",
      category: "cybersecurity",
      featured: false,
      image: "/api/placeholder/600/300",
      tags: ["Zero Trust", "Security", "Network Security", "Access Control"]
=======
      title: "Zero-Trust Security Architecture: A Complete Implementation Guide",
      excerpt: "Learn how to implement zero-trust security principles to protect your organization from modern cyber threats.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: From On-Premises to Multi-Cloud",
      excerpt: "Discover the best practices for migrating your infrastructure to the cloud while maintaining security and performance.",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Microservices with Modern DevOps Practices",
      excerpt: "A comprehensive guide to designing and deploying microservices that can scale with your business growth.",
      author: "Alex Thompson",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "development",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Cybersecurity",
      excerpt: "Understanding how quantum computing will revolutionize encryption and what it means for data security.",
      author: "Dr. Maria Santos",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Edge Computing: Bringing AI Closer to the Data Source",
      excerpt: "How edge computing is enabling real-time AI processing and transforming industries from manufacturing to healthcare.",
      author: "David Kim",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "ai",
      image: "/api/placeholder/600/300",
      featured: false
=======
      id: '4',
      title: 'Micro SAAS: The Future of Software',
      excerpt: 'How micro SAAS solutions are revolutionizing the software industry.',
      content: 'Full article content...',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'Technology',
      featured: false,
      image: '/images/blog/micro-saas.jpg',
      readTime: '4 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
=======
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
  const recentPosts = blogPosts.slice(0, 3);

=======
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === categories.find(c => c.id === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, tech trends, industry analysis" />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
=======
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity trends, cloud computing, tech news, IT solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
=======
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and innovations in AI, cloud computing, cybersecurity, and technology from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, micro SAAS, business technology, IT trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Technology Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>

=======
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and innovative solutions from our technology experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400 opacity-50" />
                      </div>
                    </div>
                    <div className="p-6">
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
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-purple-400 opacity-50" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
=======
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
=======
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
=======
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
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
=======
          </section>
        )}

        {/* All Posts */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
=======
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              {selectedCategory === "all" ? "All Articles" : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400/50" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{post.author}</div>
                            <div className="text-gray-400 text-xs">{post.authorRole}</div>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === "all" ? "All Articles" : categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <div className="text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-cyan-400/50" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{post.author}</div>
                            <div className="text-gray-400 text-xs">{post.authorRole}</div>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                        >
                          Read
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
export default BlogPage;
=======
=======
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
