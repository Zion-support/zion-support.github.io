import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RevolutionaryContent2025Showcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Complete implementation guide for achieving 300-500% ROI with AI automation",
      category: "Implementation Guide",
      readTime: "12 min read",
      href: "/blog/ai-2025-enterprise-automation-revolution-complete-guide",
      featured: true,
      stats: "340% Average ROI"
    },
    {
      title: "Global Manufacturing 1200% ROI Success",
      description: "Fortune 500 company achieves $2.4B value creation through strategic AI automation",
      category: "Case Study",
      readTime: "8 min read",
      href: "/case-studies/ai-2025-global-manufacturing-automation-1200-roi-success-story",
      featured: true,
      stats: "$2.4B Value Created"
    },
    {
      title: "Quantum AI 2026 Business Revolution",
      description: "Next-generation quantum computing applications for enterprise transformation",
      category: "Future Tech",
      readTime: "10 min read",
      href: "/blog/quantum-ai-2026-business-revolution-complete-guide",
      featured: false,
      stats: "2026 Predictions"
    },
    {
      title: "Autonomous Business Systems 2026",
      description: "Complete guide to self-managing business operations and autonomous decision making",
      category: "Autonomous Systems",
      readTime: "14 min read",
      href: "/blog/autonomous-business-systems-2026-complete-guide",
      featured: false,
      stats: "Complete Guide"
    },
    {
      title: "Neural Interfaces Enterprise Applications",
      description: "Brain-computer interfaces transforming workplace productivity and collaboration",
      category: "Neural Tech",
      readTime: "9 min read",
      href: "/blog/neural-interfaces-2025-business-applications",
      featured: false,
      stats: "2025 Applications"
    },
    {
      title: "Advanced Analytics 900% ROI Success",
      description: "Enterprise analytics transformation delivering unprecedented business insights",
      category: "Analytics",
      readTime: "7 min read",
      href: "/case-studies/ai-2025-advanced-analytics-900-roi-success-story",
      featured: false,
      stats: "900% ROI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest insights, strategies, and success stories from the AI automation revolution. 
            Expert guidance to transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    {item.stats}
                  </div>
                  
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of enterprises already achieving remarkable success with AI automation. 
              Get expert guidance and proven frameworks for your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;