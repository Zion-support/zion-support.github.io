import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp, Brain, Cloud, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    excerpt: "Explore the latest AI trends that are reshaping enterprise technology and how businesses can prepare for the next wave of innovation.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    featured: true,
    image: "/api/placeholder/600/400",
    tags: ["AI", "Enterprise", "Technology", "Innovation"]
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices: A Complete Guide",
    excerpt: "Learn the essential strategies and considerations for successful cloud migration, including common pitfalls and how to avoid them.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Cloud Computing",
    featured: true,
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Migration", "AWS", "Azure"]
  },
  {
    id: 3,
    title: "Cybersecurity in 2025: Emerging Threats and Defense Strategies",
    excerpt: "Stay ahead of evolving cyber threats with our comprehensive analysis of the latest security challenges and proven defense mechanisms.",
    author: "Emily Johnson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Cybersecurity",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["Security", "Threats", "Defense", "Compliance"]
  },
  {
    id: 4,
    title: "Micro SaaS Success Stories: Building Scalable Solutions",
    excerpt: "Discover how successful micro SaaS companies are built, from ideation to scaling, with real-world examples and actionable insights.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "SaaS Development",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["SaaS", "Startups", "Scaling", "Business"]
  },
  {
    id: 5,
    title: "Digital Transformation: A Roadmap for Modern Enterprises",
    excerpt: "Navigate the complex landscape of digital transformation with our step-by-step guide to modernizing your business processes and technology stack.",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Digital Transformation",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["Digital Transformation", "Strategy", "Enterprise", "Innovation"]
  },
  {
    id: 6,
    title: "The Rise of Edge Computing: Opportunities and Challenges",
    excerpt: "Explore how edge computing is revolutionizing data processing and what it means for the future of cloud infrastructure and IoT applications.",
    author: "Michael Rodriguez",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Infrastructure",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["Edge Computing", "IoT", "Infrastructure", "Performance"]
  }
];

const categories = [
  { name: "AI & Machine Learning", icon: Brain, count: 12 },
  { name: "Cloud Computing", icon: Cloud, count: 8 },
  { name: "Cybersecurity", icon: Shield, count: 15 },
  { name: "SaaS Development", icon: TrendingUp, count: 6 },
  { name: "Digital Transformation", icon: Brain, count: 10 },
  { name: "Infrastructure", icon: Cloud, count: 7 }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout
      title="Blog - Zion Tech Group | Technology Insights & Industry News"
      description="Stay updated with the latest insights, trends, and best practices in AI, cloud computing, cybersecurity, and digital transformation."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, digital transformation, tech trends"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Industry News
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay ahead with expert insights on AI, cloud computing, cybersecurity, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <Tag className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              )}

              {/* Regular Posts */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center mb-3">
                            <Tag className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <Link
                          key={index}
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                            <span className="text-gray-700">{category.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{category.count}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                    />
                    <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}