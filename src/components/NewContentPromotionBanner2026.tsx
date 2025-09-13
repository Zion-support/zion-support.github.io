import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Globe, Shield } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const newContent = [
    {
      title: "AI 2026: Enterprise Autonomous Operations Revolution",
      description: "Discover how enterprises are revolutionizing operations with autonomous AI systems, achieving unprecedented efficiency and ROI in 2026.",
      type: "Blog Post",
      readTime: "12 min read",
      featured: true,
      url: "/blog/ai-2026-enterprise-autonomous-operations-revolution"
    },
    {
      title: "Global Enterprise AI Transformation: $5 Billion ROI",
      description: "Fortune 100 company achieves unprecedented success with AI autonomous operations, generating $5 billion in ROI and revolutionizing their business model.",
      type: "Case Study",
      readTime: "15 min read",
      featured: true,
      url: "/case-studies/global-enterprise-ai-autonomous-transformation-2026-5-billion-roi"
    },
    {
      title: "AI 2026 Autonomous Operations Implementation Master Guide",
      description: "Complete implementation guide for AI autonomous operations in 2026. Step-by-step framework for enterprise transformation with proven strategies.",
      type: "Implementation Guide",
      readTime: "20 min read",
      featured: true,
      url: "/resources/ai-2026-autonomous-operations-implementation-master-guide"
    }
  ];

  const stats = [
    { icon: TrendingUp, label: "500% ROI", value: "Average Return" },
    { icon: Zap, label: "85% Reduction", value: "Operational Costs" },
    { icon: Globe, label: "150+ Countries", value: "Global Reach" },
    { icon: Shield, label: "99.9% Uptime", value: "System Reliability" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-lg">NEW CONTENT RELEASE</span>
            <Star className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2026: The Future is 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}Autonomous
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover revolutionary AI autonomous operations that are transforming enterprises worldwide. 
            Learn from real-world success stories and implement proven strategies for unprecedented ROI.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 h-full">
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {content.type}
                  </span>
                  <span className="ml-3 text-gray-300 text-sm">{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {content.description}
                </p>
                
                <motion.a
                  href={content.url}
                  className="inline-flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Transform Your Enterprise with AI Autonomous Operations?
            </h3>
            <p className="text-black/80 mb-6">
              Join industry leaders who are already achieving unprecedented success with AI autonomous operations. 
              Get expert guidance and proven strategies for your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href="/resources"
                className="bg-white/20 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border-2 border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Resources
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-bold text-lg">Microsoft</div>
            <div className="text-white font-bold text-lg">Amazon</div>
            <div className="text-white font-bold text-lg">Google</div>
            <div className="text-white font-bold text-lg">IBM</div>
            <div className="text-white font-bold text-lg">Oracle</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;