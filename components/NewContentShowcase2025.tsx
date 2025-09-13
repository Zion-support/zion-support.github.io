import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewContentShowcase2025 = () => {
  const newContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the latest AI innovations transforming business operations with 2,500% ROI improvements.",
      image: "/images/ai-2025-breakthrough.jpg",
      category: "AI Innovation",
      date: "2025-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Solutions 2025",
      description: "Explore quantum-powered automation solutions delivering unprecedented performance gains.",
      image: "/images/quantum-2025.jpg",
      category: "Quantum Technology",
      date: "2025-01-14",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "Autonomous Business Operations",
      description: "Learn how AI-driven autonomous systems are revolutionizing enterprise workflows.",
      image: "/images/autonomous-business.jpg",
      category: "Business Automation",
      date: "2025-01-13",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "The future of human-AI interaction through advanced neural interfaces and consciousness integration.",
      image: "/images/neural-interface.jpg",
      category: "Neural Technology",
      date: "2025-01-12",
      readTime: "15 min read",
      featured: true
    },
    {
      id: 5,
      title: "Enterprise Transformation Guide",
      description: "Complete roadmap for implementing AI-driven enterprise transformation with proven ROI metrics.",
      image: "/images/enterprise-transformation.jpg",
      category: "Implementation Guide",
      date: "2025-01-11",
      readTime: "20 min read",
      featured: false
    },
    {
      id: 6,
      title: "Future Technology Predictions 2026-2030",
      description: "Exclusive insights into upcoming technological breakthroughs and their business implications.",
      image: "/images/future-tech.jpg",
      category: "Future Predictions",
      date: "2025-01-10",
      readTime: "18 min read",
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest revolutionary content covering AI breakthroughs, quantum computing,
            and autonomous business operations transforming enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                content.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {content.featured && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium">
                  {content.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{content.date}</span>
                  <span className="mx-2">•</span>
                  <span>{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <Link
                  href={`/content/${content.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/content-library"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;