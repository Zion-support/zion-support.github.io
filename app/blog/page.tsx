import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Tag, Clock } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and how companies are leveraging artificial intelligence for competitive advantage.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      slug: "future-ai-business-2024-trends"
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Learn essential cybersecurity practices that every small business should implement to protect their data and maintain customer trust.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-best-practices-small-business"
    },
    {
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating unprecedented opportunities for innovation and growth.",
      author: "5G Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "5G Technology",
      image: "/api/placeholder/400/250",
      slug: "5g-technology-transforming-industries"
    },
    {
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Understand how micro SAAS solutions are changing the way businesses approach software adoption and digital transformation.",
      author: "Product Team",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Business Solutions",
      image: "/api/placeholder/400/250",
      slug: "micro-saas-solutions-future-business-software"
    },
    {
      title: "Cloud Computing: A Complete Guide for Modern Businesses",
      excerpt: "Everything you need to know about cloud computing, from basic concepts to advanced implementation strategies for your business.",
      author: "Cloud Team",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      slug: "cloud-computing-complete-guide-modern-businesses"
    },
    {
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to transform raw data into actionable business insights that drive growth and improve decision-making processes.",
      author: "Analytics Team",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      slug: "data-analytics-turning-information-business-intelligence"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Cybersecurity",
    "5G Technology",
    "Business Solutions",
    "Cloud Computing",
    "Data Analytics"
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, cybersecurity tips, 5G technology, cloud computing, business solutions, tech news, industry trends"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest technology insights, industry trends, and expert analysis 
            from our team of technology professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#featured"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Read Latest Posts
            </FuturisticButton>
            <FuturisticButton
              href="#newsletter"
              variant="outline"
              size="lg"
              icon={<Search className="w-5 h-5" />}
            >
              Subscribe to Newsletter
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Article
            </h2>
          </div>
          
          <FuturisticCard className="overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-300">Featured Article</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of technology insights and industry analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm">Article Image</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology insights, 
              industry trends, and expert analysis.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <FuturisticButton
                  href="#"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Subscribe
                </FuturisticButton>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;