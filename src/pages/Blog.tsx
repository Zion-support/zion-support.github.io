import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  Lightbulb, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket 
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: TrendingUp, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb, count: 3 },
    { id: 'transformation', name: 'Digital Transformation', icon: Rocket, count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      image: '/images/blog/ai-future-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Zero Trust Security: Why Traditional Security Models Are Failing',
      excerpt: 'Learn about the Zero Trust security framework and how it\'s becoming essential in today\'s threat landscape.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '6 min read',
      image: '/images/blog/zero-trust-security.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud-Native Development: Best Practices for Modern Applications',
      excerpt: 'Explore the principles and practices of cloud-native development for scalable and resilient applications.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 10, 2024',
      readTime: '10 min read',
      image: '/images/blog/cloud-native-dev.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI and ML are transforming healthcare delivery and improving patient outcomes.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 8, 2024',
      readTime: '7 min read',
      image: '/images/blog/ml-healthcare.jpg'
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Practical strategies for implementing DevOps automation to accelerate your development process.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 5, 2024',
      readTime: '9 min read',
      image: '/images/blog/devops-automation.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Closer to Users',
      excerpt: 'Understanding edge computing and its impact on modern technology infrastructure.',
      category: 'innovation',
      author: 'Alex Thompson',
      date: 'December 3, 2024',
      readTime: '5 min read',
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 7,
      title: 'Cybersecurity Compliance: Navigating Regulatory Requirements',
      excerpt: 'A comprehensive guide to meeting cybersecurity compliance standards in various industries.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'November 30, 2024',
      readTime: '11 min read',
      image: '/images/blog/cybersecurity-compliance.jpg'
    },
    {
      id: 8,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformation initiatives and key learnings.',
      category: 'transformation',
      author: 'Alex Thompson',
      date: 'November 28, 2024',
      readTime: '12 min read',
      image: '/images/blog/digital-transformation-success.jpg'
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : TrendingUp;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights, trends, and innovations in technology, AI, and digital transformation."
        keywords="tech blog, AI insights, digital transformation, cybersecurity, cloud computing, innovation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, cybersecurity, 
                cloud computing, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights and expert analysis on the most important topics in technology today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <getCategoryIcon categoryId={post.category} className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest insights and analysis on emerging technologies and trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.slice(3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <getCategoryIcon categoryId={post.category} className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">
                          {getCategoryName(post.category)}
                        </span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Tech Insights
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest technology insights, AI trends, and digital transformation 
                strategies delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}