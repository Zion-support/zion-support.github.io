import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, TrendingUp, Award, Users, Clock, Star, ExternalLink } from 'lucide-react';

const FeaturedContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025: Complete Guide to Autonomous Business Operations",
      type: "Blog Post",
      category: "AI & Automation",
      description: "Discover how AI-powered autonomous business operations are revolutionizing enterprises in 2025. Learn implementation strategies, real-world case studies, and future trends.",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readingTime: "12 min read",
      featured: true,
      link: "/blog/ai-2025-autonomous-business-operations-complete-guide",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Automation", "Business Operations", "2025", "Enterprise"],
      stats: {
        views: "15.2k",
        likes: "847",
        shares: "234"
      },
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Enterprise AI Transformation: 300% ROI Success Story",
      type: "Case Study",
      category: "Success Stories",
      description: "Learn how a Fortune 500 company achieved 300% ROI through comprehensive AI transformation, reducing costs by 60% while increasing productivity by 85%.",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readingTime: "15 min read",
      featured: true,
      link: "/case-studies/enterprise-ai-transformation-2025-complete-success",
      image: "/api/placeholder/400/250",
      tags: ["AI Transformation", "Enterprise", "Success Story", "2025", "ROI"],
      stats: {
        views: "12.8k",
        likes: "692",
        shares: "189"
      },
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "AI Implementation Master Guide 2025: Complete Roadmap",
      type: "Resource Guide",
      category: "Implementation",
      description: "The ultimate 12-step roadmap to successful AI implementation in 2025. From strategy to execution, learn how to successfully deploy AI solutions.",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readingTime: "20 min read",
      featured: true,
      link: "/resources/ai-implementation-master-guide-2025-complete",
      image: "/api/placeholder/400/250",
      tags: ["AI Implementation", "Roadmap", "2025", "Enterprise", "Strategy"],
      stats: {
        views: "18.5k",
        likes: "1.2k",
        shares: "456"
      },
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: featuredContent.length },
    { id: 'blog', label: 'Blog Posts', count: featuredContent.filter(c => c.type === 'Blog Post').length },
    { id: 'case-study', label: 'Case Studies', count: featuredContent.filter(c => c.type === 'Case Study').length },
    { id: 'resource', label: 'Resources', count: featuredContent.filter(c => c.type === 'Resource Guide').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => 
        activeTab === 'blog' ? content.type === 'Blog Post' :
        activeTab === 'case-study' ? content.type === 'Case Study' :
        activeTab === 'resource' ? content.type === 'Resource Guide' :
        true
      );

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Featured Content</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge strategies, real-world case studies, and comprehensive guides 
            to help you succeed with AI in 2025
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredContent.map((content, index) => (
            <motion.article
              key={content.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400">
                    {content.icon}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${content.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {content.type}
                  </span>
                </div>
                {content.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                  <Clock className="w-4 h-4" />
                  <span>{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{content.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{content.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{content.stats.likes}</span>
                    </div>
                  </div>
                  <span>{content.date}</span>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = content.link}
                  className={`w-full bg-gradient-to-r ${content.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get access to our complete library of AI resources, implementation guides, 
              and expert insights to accelerate your AI journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/content-showcase'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Content
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Expert Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase2025;