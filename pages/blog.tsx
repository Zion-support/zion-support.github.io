import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const blogPosts = [
  {
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans and drug discovery.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"]
  },
  {
    title: "Cloud Migration Best Practices: A Complete Guide",
    excerpt: "Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Cloud & Infrastructure",
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Migration", "AWS", "DevOps"]
  },
  {
    title: "Cybersecurity Trends 2024: What Every Business Should Know",
    excerpt: "Stay ahead of emerging cyber threats with our comprehensive analysis of the latest cybersecurity trends and best practices for protecting your organization.",
    author: "David Kim",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Cybersecurity",
    image: "/api/placeholder/600/400",
    tags: ["Security", "Threats", "Compliance", "Best Practices"]
  },
  {
    title: "Building Scalable Microservices Architecture",
    excerpt: "Discover how to design and implement microservices that can scale with your business growth while maintaining performance and reliability.",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    readTime: "15 min read",
    category: "Software Development",
    image: "/api/placeholder/600/400",
    tags: ["Microservices", "Architecture", "Scalability", "DevOps"]
  },
  {
    title: "Data Analytics: Turning Information into Insights",
    excerpt: "Learn how to leverage data analytics to drive business decisions, improve operational efficiency, and gain competitive advantages in your industry.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Data Analytics",
    image: "/api/placeholder/600/400",
    tags: ["Analytics", "Data Science", "Business Intelligence", "Insights"]
  },
  {
    title: "The Rise of Edge Computing: Benefits and Challenges",
    excerpt: "Explore how edge computing is changing the landscape of data processing and what it means for businesses looking to optimize their operations.",
    author: "Alex Thompson",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Technology Trends",
    image: "/api/placeholder/600/400",
    tags: ["Edge Computing", "IoT", "Performance", "Innovation"]
  }
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Software Development",
  "Data Analytics",
  "Technology Trends"
];

const featuredPost = {
  title: "Digital Transformation: A Strategic Guide for Modern Businesses",
  excerpt: "In today's rapidly evolving digital landscape, businesses must adapt or risk being left behind. This comprehensive guide explores the key strategies, technologies, and best practices for successful digital transformation initiatives.",
  author: "Kleber Santos",
  date: "2024-01-18",
  readTime: "20 min read",
  category: "Digital Transformation",
  image: "/api/placeholder/800/400",
  tags: ["Digital Transformation", "Strategy", "Innovation", "Business"]
};

const stats = [
  { icon: TrendingUp, value: "100+", label: "Articles Published" },
  { icon: User, value: "50K+", label: "Monthly Readers" },
  { icon: Tag, value: "25+", label: "Categories Covered" },
  { icon: Clock, value: "5 min", label: "Avg. Read Time" }
];

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in technology, AI, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{featuredPost.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}