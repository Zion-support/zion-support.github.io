import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Lightbulb,
  Code,
  Cloud,
  Shield,
  Brain
} from 'lucide-react';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Business Intelligence in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing business intelligence and decision-making processes across industries.",
      author: "Zion Tech Team",
      date: "2025-01-15",
      category: "AI & Analytics",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Business Intelligence", "Analytics", "2025"]
    },
    {
      id: 2,
      title: "Implementing Zero Trust Security Architecture for Modern Enterprises",
      excerpt: "Learn the essential steps to implement a robust zero trust security framework that protects your organization from evolving cyber threats.",
      author: "Security Experts",
      date: "2025-01-12",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Security", "Zero Trust", "Enterprise", "Cybersecurity"]
    },
    {
      id: 3,
      title: "Quantum Computing: Breaking Down the Next Frontier in Technology",
      excerpt: "Explore the revolutionary potential of quantum computing and how it will transform industries from finance to healthcare.",
      author: "Quantum Research Team",
      date: "2025-01-10",
      category: "Emerging Tech",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["Quantum Computing", "Emerging Tech", "Innovation", "Future"]
    },
    {
      id: 4,
      title: "Micro SaaS Solutions: The Rise of Niche Software Platforms",
      excerpt: "How specialized software solutions are creating new opportunities for businesses and developers in the SaaS ecosystem.",
      author: "Product Team",
      date: "2025-01-08",
      category: "Micro SaaS",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Micro SaaS", "Software", "Platforms", "Innovation"]
    },
    {
      id: 5,
      title: "Cloud FinOps: Optimizing Cloud Costs in the Digital Age",
      excerpt: "Master the principles of Cloud Financial Operations to maximize ROI and minimize waste in your cloud infrastructure.",
      author: "Cloud Experts",
      date: "2025-01-05",
      category: "Cloud & DevOps",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Cloud", "FinOps", "Cost Optimization", "DevOps"]
    },
    {
      id: 6,
      title: "The Evolution of Digital Transformation in Healthcare",
      excerpt: "How technology is reshaping healthcare delivery and improving patient outcomes through digital innovation.",
      author: "Healthcare Tech Team",
      date: "2025-01-03",
      category: "Healthcare",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Healthcare", "Digital Transformation", "Innovation", "Patient Care"]
    }
  ];

  const categories = [
    { name: "AI & Analytics", icon: Brain, count: 15 },
    { name: "Cybersecurity", icon: Shield, count: 12 },
    { name: "Cloud & DevOps", icon: Cloud, count: 18 },
    { name: "Emerging Tech", icon: TrendingUp, count: 10 },
    { name: "Micro SaaS", icon: Code, count: 8 },
    { name: "Healthcare", icon: Lightbulb, count: 6 }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Insights & Technology News</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI developments, cybersecurity trends, and innovation news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, emerging tech, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Zion Tech Insights
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Discover cutting-edge technology insights, industry trends, and expert perspectives on AI, cybersecurity, cloud computing, and emerging technologies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Explore by Category
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
                      <category.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                      <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                      <p className="text-sm text-slate-500">{category.count} articles</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Latest Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 overflow-hidden group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <div className="text-blue-600 text-4xl font-bold">ZT</div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-500">{post.category}</span>
                        </div>
                        <span className="text-sm text-slate-500">{post.readTime}</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Zion Tech
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest technology insights and industry updates delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
