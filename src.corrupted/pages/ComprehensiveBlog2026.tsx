import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Tech Revolution: What 2026 Holds for Humanity",
      excerpt: "Explore the most revolutionary technological breakthroughs that will reshape our world in 2026 and beyond.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Revolutionary Tech",
      image: "🚀",
      featured: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems",
      excerpt: "How quantum computers are solving problems that were previously impossible for classical computers.",
      author: "Prof. Michael Rodriguez",
      date: "January 12, 2026",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "⚛️",
      featured: true,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Direct Brain-Computer Communication",
      excerpt: "The latest advances in brain-computer interfaces enabling direct thought-to-machine communication.",
      author: "Dr. Elena Volkov",
      date: "January 10, 2026",
      readTime: "7 min read",
      category: "Neural Tech",
      image: "🧠",
      featured: false,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 4,
      title: "AI Systems 2026: Beyond Human Intelligence",
      excerpt: "Next-generation AI systems that surpass human intelligence and operate with complete autonomy.",
      author: "Dr. James Park",
      date: "January 8, 2026",
      readTime: "9 min read",
      category: "AI Systems",
      image: "🤖",
      featured: false,
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 5,
      title: "Biotech Revolution: Genetic Enhancement and Longevity",
      excerpt: "Revolutionary advances in biotechnology enabling genetic enhancement and longevity treatments.",
      author: "Dr. Maria Santos",
      date: "January 5, 2026",
      readTime: "5 min read",
      category: "Biotechnology",
      image: "🧬",
      featured: false,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 6,
      title: "Space Technology: Interplanetary Travel and Colonization",
      excerpt: "Advanced space technologies enabling interplanetary travel and space colonization.",
      author: "Dr. Alex Thompson",
      date: "January 3, 2026",
      readTime: "6 min read",
      category: "Space Tech",
      image: "🚀",
      featured: false,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 7,
      title: "Cyber-Physical Systems: The Future of Smart Environments",
      excerpt: "Seamless integration of digital and physical worlds creating intelligent environments.",
      author: "Dr. Lisa Wang",
      date: "January 1, 2026",
      readTime: "4 min read",
      category: "IoT & Smart Systems",
      image: "🌐",
      featured: false,
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 8,
      title: "Synthetic Intelligence: The Next Evolution of AI",
      excerpt: "Exploring synthetic intelligence that goes beyond traditional AI capabilities.",
      author: "Dr. Robert Kim",
      date: "December 28, 2025",
      readTime: "7 min read",
      category: "AI Systems",
      image: "🧠",
      featured: false,
      gradient: "from-purple-600 to-indigo-600"
    }
  ];

  const categories = [
    { name: "All", count: 8, active: true },
    { name: "Revolutionary Tech", count: 1, active: false },
    { name: "Quantum Computing", count: 1, active: false },
    { name: "Neural Tech", count: 1, active: false },
    { name: "AI Systems", count: 2, active: false },
    { name: "Biotechnology", count: 1, active: false },
    { name: "Space Tech", count: 1, active: false },
    { name: "IoT & Smart Systems", count: 1, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              📝 COMPREHENSIVE BLOG 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Tech Insights Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with our comprehensive coverage of the latest technological breakthroughs, 
              industry insights, and future predictions from leading experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${post.gradient} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm opacity-80">{post.readTime}</span>
                </div>
                
                <div className="text-6xl mb-4">{post.image}</div>
                
                <h3 className="text-2xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{post.author}</div>
                      <div className="text-xs opacity-80">{post.date}</div>
                    </div>
                  </div>
                  <button className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-semibold`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <div className="text-4xl mb-4">{post.image}</div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-purple-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-purple-600">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </div>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300">
                    Read →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Tech Insights</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get exclusive access to our latest articles, research insights, and technology predictions 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveBlog2026;