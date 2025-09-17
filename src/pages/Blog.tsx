import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in 2025",
      excerpt: "Exploring the latest breakthroughs in artificial intelligence and their impact on business.",
      date: "January 15, 2025",
      category: "AI",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      excerpt: "How quantum computing is transforming industries and what it means for the future.",
      date: "January 10, 2025",
      category: "Quantum",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures every organization should implement in 2025.",
      date: "January 5, 2025",
      category: "Security",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-purple">
            Tech Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Stay updated with the latest insights, trends, and breakthroughs in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover"
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="ml-2 text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-white hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{post.date}</span>
                <a 
                  href={`/blog/${post.id}`}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Subscribe to Our Newsletter
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;