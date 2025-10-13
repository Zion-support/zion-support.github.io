import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Posts", count: 8 },
    { id: "ai", name: "Artificial Intelligence", count: 3 },
    { id: "cybersecurity", name: "Cybersecurity", count: 2 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize the business landscape...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      image: "/images/blog/ai-trends-2024.jpg",
      slug: "future-ai-business-2024-trends",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly targeted by cybercriminals...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-small-business.jpg",
      slug: "cybersecurity-best-practices-small-businesses"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your business to the cloud successfully and securely.",
      content: "Cloud migration has become essential for modern businesses...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "cloud",
      readTime: "6 min read",
      image: "/images/blog/cloud-migration-guide.jpg",
      slug: "cloud-migration-strategies-complete-guide"
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Discover the latest frameworks and techniques for creating scalable web applications.",
      content: "Modern web development requires scalable architecture...",
      author: "David Kim",
      date: "2024-01-01",
      category: "development",
      readTime: "8 min read",
      image: "/images/blog/scalable-web-apps.jpg",
      slug: "building-scalable-web-applications-modern-frameworks"
    },
    {
      id: 5,
      title: "AI-Powered Analytics: Transforming Data into Insights",
      excerpt: "How AI is revolutionizing data analytics and helping businesses make better decisions.",
      content: "Data analytics has evolved significantly with AI...",
      author: "Lisa Wang",
      date: "2023-12-28",
      category: "ai",
      readTime: "6 min read",
      image: "/images/blog/ai-analytics.jpg",
      slug: "ai-powered-analytics-transforming-data-insights"
    },
    {
      id: 6,
      title: "Zero Trust Security Model: Implementation Guide",
      excerpt: "Understanding and implementing the zero trust security model for enhanced protection.",
      content: "Zero trust security is becoming the standard...",
      author: "James Wilson",
      date: "2023-12-25",
      category: "cybersecurity",
      readTime: "9 min read",
      image: "/images/blog/zero-trust-security.jpg",
      slug: "zero-trust-security-model-implementation-guide"
    },
    {
      id: 7,
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Exploring the advantages and challenges of microservices architecture in modern applications.",
      content: "Microservices architecture has gained popularity...",
      author: "Anna Thompson",
      date: "2023-12-20",
      category: "development",
      readTime: "7 min read",
      image: "/images/blog/microservices-architecture.jpg",
      slug: "microservices-architecture-benefits-challenges"
    },
    {
      id: 8,
      title: "Hybrid Cloud Solutions: Best of Both Worlds",
      excerpt: "Combining public and private cloud benefits for optimal business solutions.",
      content: "Hybrid cloud solutions offer flexibility...",
      author: "Robert Davis",
      date: "2023-12-15",
      category: "cloud",
      readTime: "5 min read",
      image: "/images/blog/hybrid-cloud-solutions.jpg",
      slug: "hybrid-cloud-solutions-best-both-worlds"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity news, cloud computing, web development, tech trends"
        canonical="https://ziontechgroup.com/blog"
      />
      
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights and Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends shaping the future.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
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
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-semibold">Featured Article</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;