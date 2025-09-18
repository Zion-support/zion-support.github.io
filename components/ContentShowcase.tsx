<<<<<<< HEAD
"use client";

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  excerpt: string;
  href: string;
  author: string;
  date: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
}

const ContentShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems: ContentItem[] = [
    {
      title: "AI-Driven Customer Experience: The Future of Customer Service in 2025",
      excerpt: "Discover how AI is revolutionizing customer experience with personalized interactions, predictive support, and seamless omnichannel experiences.",
      href: "/blog/ai-driven-customer-experience-2025",
      author: "Customer Experience Team",
      date: "2025-09-18",
      tags: ["Customer Experience", "AI Automation", "Personalization"],
      gradient: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      title: "Blockchain and AI Integration: Building Trust in the Digital Economy",
      excerpt: "Explore how the convergence of blockchain and AI is creating new opportunities for secure, transparent, and intelligent business solutions.",
      href: "/blog/blockchain-ai-integration-2025",
      author: "Blockchain Innovation Team",
      date: "2025-09-18",
      tags: ["Blockchain", "AI Integration", "Digital Economy"],
      gradient: "from-emerald-500 to-cyan-600"
    },
    {
      title: "AI-Powered Business Transformation: A Complete Guide for 2025",
      excerpt: "Discover how AI is revolutionizing business operations, from autonomous workflows to intelligent decision-making systems.",
      href: "/blog/ai-powered-business-transformation-2025",
      author: "AI Transformation Team",
      date: "2025-09-18",
      tags: ["AI Transformation", "Business Automation", "Digital Innovation"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Quantum Computing Enterprise Applications: Practical Applications for 2025",
      excerpt: "Explore how quantum computing is solving complex business problems and creating new opportunities for enterprise innovation.",
      href: "/blog/quantum-computing-enterprise-applications-2025",
      author: "Quantum Solutions Team",
      date: "2025-09-18",
      tags: ["Quantum Computing", "Enterprise Solutions", "Advanced Technology"],
      gradient: "from-indigo-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, contentItems.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with cutting-edge research, industry insights, and practical guides from our expert teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                    Latest
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{contentItems[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{contentItems[0].date}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {contentItems[0].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {contentItems[0].excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {contentItems[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/30 text-gray-300 text-sm rounded-lg border border-gray-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={contentItems[0].href}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Other Articles */}
          {contentItems.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/20 text-gray-400 text-xs rounded border border-gray-600/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentShowcase;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
