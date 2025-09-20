<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FeaturedContent2025Showcase: React.FC = () => {
  const featuredContent = [
    {
      type: "Implementation Guide",
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Complete guide to achieving 300-500% ROI with strategic AI automation implementation",
      href: "/blog/ai-2025-enterprise-automation-revolution-complete-guide",
      readTime: "12 min read",
      featured: true,
      badge: "NEW",
      badgeColor: "bg-green-500",
      stats: "340% Average ROI",
      category: "Automation"
    },
    {
      type: "Case Study",
      title: "Global Manufacturing 1200% ROI Success",
      description: "Fortune 500 manufacturing company achieves $2.4B value creation through AI automation",
      href: "/case-studies/ai-2025-global-manufacturing-automation-1200-roi-success-story",
      readTime: "8 min read",
      featured: true,
      badge: "FEATURED",
      badgeColor: "bg-blue-500",
      stats: "$2.4B Value Created",
      category: "Success Story"
    },
    {
      type: "Future Tech",
      title: "Quantum AI 2026 Business Revolution",
      description: "Next-generation quantum computing applications transforming enterprise operations",
      href: "/blog/quantum-ai-2026-business-revolution-complete-guide",
      readTime: "10 min read",
      featured: false,
      badge: "TRENDING",
      badgeColor: "bg-purple-500",
      stats: "2026 Predictions",
      category: "Quantum Computing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🌟 FEATURED CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Must-Read Content for Business Leaders
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest insights, strategies, and success stories from industry leaders. 
            Expert guidance to accelerate your AI transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${
                content.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                content.featured ? 'border-blue-200' : 'border-gray-100'
              }`}>
                {content.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${content.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                      {content.badge}
                    </span>
                  </div>
                )}
                
                <div className={`p-8 ${content.featured ? 'lg:p-12' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {content.type}
                    </span>
                    <span className="text-gray-500 text-sm">{content.readTime}</span>
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-4 leading-tight ${
                    content.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {content.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-6 leading-relaxed ${
                    content.featured ? 'text-lg' : ''
                  }`}>
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {content.category}
                      </span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {content.stats}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={content.href}
                    className={`inline-flex items-center font-semibold transition-colors ${
                      content.featured 
                        ? 'bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700' 
                        : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    {content.featured ? 'Read Full Guide' : 'Read More'}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Content Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2.8M+</div>
              <div className="text-gray-600 text-sm">Readers Monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Content Updates</div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-600 mb-6">
              Get the newest insights, case studies, and implementation guides delivered to your inbox weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContent2025Showcase;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
