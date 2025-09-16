<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  title: string;
  description: string;
  link: string;
  category: string;
  readingTime: string;
  featured?: boolean;
  icon: string;
}

const FeaturedContentShowcase: React.FC = () => {
  const featuredContent: ContentItem[] = [
    {
      title: "AI 2025: Next-Generation Business Automation Revolution",
      description: "Discover how next-generation AI automation is revolutionizing business operations with 300% productivity gains and intelligent workflows.",
      link: "/blog/ai-2025-next-generation-business-automation-revolution",
      category: "AI Automation",
      readingTime: "15 min read",
      featured: true,
      icon: "🤖"
    },
    {
      title: "Quantum Computing 2025: Business Breakthrough Guide",
      description: "Explore how quantum computing is revolutionizing business operations with exponential computational power and breakthrough applications.",
      link: "/blog/quantum-computing-2025-business-breakthrough-guide",
      category: "Quantum Computing",
      readingTime: "18 min read",
      featured: true,
      icon: "⚡"
    },
    {
      title: "AI Automation Enterprise Transformation Success",
      description: "Complete case study showing how a Fortune 500 company achieved $15M annual savings and 300% productivity gains through AI automation.",
      link: "/case-studies/ai-automation-enterprise-transformation-success",
      category: "Case Study",
      readingTime: "12 min read",
      featured: true,
      icon: "📈"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
          🌟 NEW CONTENT • JANUARY 2025
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content & Success Stories</h2>
        <p className="text-lg text-gray-600">Discover our latest insights on breakthrough technologies and real-world transformation results</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {featuredContent.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full font-semibold">
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.readingTime}</span>
              {item.featured && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                  FEATURED
                </span>
              )}
            </div>
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
            <Link 
              to={item.link} 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-4">Join hundreds of enterprises already leveraging our breakthrough technologies</p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="inline-block border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Tag, Star, TrendingUp, Eye } from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../data/blog-posts';

const FeaturedContentShowcase = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = getRecentBlogPosts(6);

  const tabs = [
    { id: 'featured', label: 'Featured', count: featuredPosts.length },
    { id: 'recent', label: 'Latest', count: recentPosts.length },
    { id: 'trending', label: 'Trending', count: 12 }
  ];

  const getPostsForTab = () => {
    switch (activeTab) {
      case 'featured':
        return featuredPosts.slice(0, 6);
      case 'recent':
        return recentPosts;
      case 'trending':
        return [...featuredPosts, ...recentPosts].slice(0, 6);
      default:
        return featuredPosts.slice(0, 6);
    }
  };

  const posts = getPostsForTab();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            Fresh Content Daily
          </motion.div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest <span className="text-blue-600">Innovations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with cutting-edge insights, breakthrough technologies, and revolutionary solutions
            that are shaping the future of business and technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {Math.floor(Math.random() * 1000) + 100}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore More?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Dive deeper into our comprehensive library of insights, case studies, and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Browse All Content
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
>>>>>>> origin/cursor/create-and-deploy-new-content-052c
  );
};

export default FeaturedContentShowcase;