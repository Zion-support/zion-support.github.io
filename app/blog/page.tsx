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
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
      content: "Artificial Intelligence continues to revolutionize the business landscape, offering unprecedented opportunities for automation, efficiency, and innovation...",
      author: "Dr. Sarah Johnson",
      authorRole: "AI Research Director",
      authorAvatar: "/images/authors/sarah-johnson.jpg",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Machine Learning", "Business", "Automation"],
      featured: true,
      image: "/images/blog/ai-business-future.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Essential security measures to protect your organization's data and systems in remote work settings.",
      content: "With the rise of remote work, cybersecurity has become more critical than ever. Organizations must implement comprehensive security strategies...",
      author: "Michael Chen",
      authorRole: "Cybersecurity Expert",
      authorAvatar: "/images/authors/michael-chen.jpg",
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      tags: ["Cybersecurity", "Remote Work", "Data Protection", "Best Practices"],
      featured: true,
      image: "/images/blog/cybersecurity-remote.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud successfully.",
      content: "Cloud migration is a complex process that requires careful planning and execution. This comprehensive guide covers everything you need to know...",
      author: "Emily Rodriguez",
      authorRole: "Cloud Solutions Architect",
      authorAvatar: "/images/authors/emily-rodriguez.jpg",
      publishedAt: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      tags: ["Cloud Computing", "Migration", "Infrastructure", "AWS", "Azure"],
      featured: false,
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Discover the latest technologies and frameworks for building robust, scalable web applications.",
      content: "Modern web development requires a deep understanding of various technologies and frameworks. This article explores the current landscape...",
      author: "David Kim",
      authorRole: "Senior Full-Stack Developer",
      authorAvatar: "/images/authors/david-kim.jpg",
      publishedAt: "2024-01-08",
      readTime: "12 min read",
      category: "development",
      tags: ["Web Development", "React", "Node.js", "Scalability", "Performance"],
      featured: false,
      image: "/images/blog/web-development.jpg"
    },
    {
      id: 5,
      title: "The Impact of 5G on IoT and Smart City Development",
      excerpt: "How 5G technology is enabling the next generation of IoT applications and smart city solutions.",
      content: "5G technology is revolutionizing the Internet of Things (IoT) landscape, enabling new possibilities for smart cities and connected devices...",
      author: "Lisa Wang",
      authorRole: "IoT Solutions Specialist",
      authorAvatar: "/images/authors/lisa-wang.jpg",
      publishedAt: "2024-01-05",
      readTime: "7 min read",
      category: "ai",
      tags: ["5G", "IoT", "Smart Cities", "Technology", "Innovation"],
      featured: true,
      image: "/images/blog/5g-iot.jpg"
    },
    {
      id: 6,
      title: "Data Privacy Regulations: What Businesses Need to Know",
      excerpt: "A comprehensive overview of data privacy laws and their implications for businesses worldwide.",
      content: "Data privacy regulations are evolving rapidly, and businesses must stay informed to ensure compliance and protect customer data...",
      author: "James Wilson",
      authorRole: "Privacy Law Expert",
      authorAvatar: "/images/authors/james-wilson.jpg",
      publishedAt: "2024-01-03",
      readTime: "9 min read",
      category: "cybersecurity",
      tags: ["Data Privacy", "GDPR", "Compliance", "Legal", "Regulations"],
      featured: false,
      image: "/images/blog/data-privacy.jpg"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights and Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, web development, industry news, tech trends" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Technology Blog</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and the latest technology trends shaping our digital future.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
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
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{post.author}</p>
                            <p className="text-xs text-gray-400">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === "all" ? "All Articles" : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{post.author}</p>
                          <p className="text-xs text-gray-400">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Get the latest technology insights and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
