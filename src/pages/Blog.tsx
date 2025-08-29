import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, ArrowRight, Tag, Search,
  Brain, Shield, Cloud, Server, Atom, Rocket
} from 'lucide-react';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover the latest AI trends that will reshape business operations in 2025 and beyond.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/images/ai-future.jpg',
      tags: ['AI', 'Business', 'Innovation', '2025']
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype',
      excerpt: 'Understanding the real potential of quantum computing for enterprise applications.',
      author: 'Marcus Rodriguez',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'Emerging Tech',
      image: '/images/quantum-computing.jpg',
      tags: ['Quantum Computing', 'Technology', 'Research']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity practices.',
      author: 'Lisa Thompson',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/images/ai-security.jpg',
      tags: ['Cybersecurity', 'AI', 'Security']
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Cloud Cost Optimization Strategies',
      excerpt: 'Practical approaches to reducing cloud infrastructure costs.',
      author: 'Dr. James Kim',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Cloud & DevOps'
    },
    {
      id: 5,
      title: 'Digital Transformation Roadmap',
      excerpt: 'A step-by-step guide to successful digital transformation.',
      author: 'Marcus Rodriguez',
      date: '2025-01-03',
      readTime: '15 min read',
      category: 'Digital Transformation'
    },
    {
      id: 6,
      title: 'Micro SaaS: The Future of Software',
      excerpt: 'How niche software solutions are changing the industry landscape.',
      author: 'Lisa Thompson',
      date: '2024-12-28',
      readTime: '9 min read',
      category: 'Micro SaaS'
    },
    {
      id: 7,
      title: 'AI Ethics and Governance',
      excerpt: 'Building responsible AI systems for enterprise use.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-25',
      readTime: '11 min read',
      category: 'AI & Machine Learning'
    },
    {
      id: 8,
      title: 'Edge Computing Benefits',
      excerpt: 'Why edge computing is becoming essential for modern applications.',
      author: 'Dr. James Kim',
      date: '2024-12-22',
      readTime: '7 min read',
      category: 'Emerging Tech'
    },
    {
      id: 9,
      title: 'Zero Trust Security Architecture',
      excerpt: 'Implementing zero trust principles in enterprise environments.',
      author: 'Lisa Thompson',
      date: '2024-12-20',
      readTime: '13 min read',
      category: 'Cybersecurity'
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { name: 'Cybersecurity', icon: Shield, count: 12 },
    { name: 'Cloud & DevOps', icon: Cloud, count: 10 },
    { name: 'Emerging Tech', icon: Atom, count: 8 },
    { name: 'Digital Transformation', icon: Rocket, count: 6 },
    { name: 'Micro SaaS', icon: Server, count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on technology, AI, and digital transformation
            </p>
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="h-4 w-4 mr-2" />
                          {post.author}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                          <Clock className="h-4 w-4 ml-4 mr-2" />
                          {post.readTime}
                          <Tag className="h-4 w-4 ml-4 mr-2" />
                          {post.category}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-400">
                            <User className="h-4 w-4 mr-2" />
                            {post.author}
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-5 w-5 text-blue-400 mr-3" />
                        <span className="text-gray-300">{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{category.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Get the latest insights delivered to your inbox
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
