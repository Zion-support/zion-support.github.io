import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Search,
  Filter
} from "lucide-react";
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
      author: "Kleber",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Trends"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures that every small business should implement to protect against cyber threats.",
      author: "Zion Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      tags: ["Security", "Small Business", "Best Practices", "Cyber Threats"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to migrating your business to the cloud while minimizing downtime and risks.",
      author: "Zion Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "DevOps", "Strategy"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
      title: "Digital Transformation: Why It's Critical for Business Survival",
      excerpt: "Understanding the importance of digital transformation and how it can give your business a competitive edge.",
      author: "Kleber",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Innovation", "Business Strategy", "Technology"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 5,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can scale with your business growth.",
      author: "Zion Team",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "Software Development",
      tags: ["Microservices", "Architecture", "Scalability", "Development"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Exploring how edge computing is revolutionizing IoT and enabling real-time data processing.",
      author: "Zion Team",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Emerging Tech",
      tags: ["Edge Computing", "IoT", "Real-time", "Innovation"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400"
    }
  ];
  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud & DevOps",
    "Digital Transformation",
    "Software Development",
    "Emerging Tech"
  ];
  const popularTags = [
    "AI", "Security", "Cloud", "Innovation", "Technology", "Business", "Development", "Strategy"
  ];
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, trends, and expert knowledge on AI, cybersecurity, cloud computing, and digital transformation.
            </motion.p>
          </div>
        </div>
      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-zion-slate-light" />
              <select className="px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Latest insights and expert analysis on technology trends and business innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-purple/80 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Popular Tags Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore articles by topic and discover insights that matter to your business
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                className="px-6 py-3 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:bg-zion-purple/20 hover:border-zion-purple/50 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Tag className="inline h-4 w-4 mr-2" />
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-8 py-3 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-zion-slate-light text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-purple/30 text-white hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
