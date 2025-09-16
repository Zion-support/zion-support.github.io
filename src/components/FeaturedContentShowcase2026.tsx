import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Eye, Heart } from 'lucide-react';

const FeaturedContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Innovation Hub 2026: The Future of Artificial Intelligence",
      excerpt: "Explore the revolutionary AI innovations that are reshaping technology and transforming industries worldwide.",
      author: "Dr. Sarah Chen",
      authorRole: "Chief AI Officer",
      publishDate: "2025-09-16",
      readTime: "8 min read",
      category: "AI Innovation",
      views: "12.5K",
      likes: 847,
      image: "/images/blog/ai-innovation-hub-2026.jpg",
      featured: true,
      link: "/ai-innovation-hub-2026"
    },
    {
      id: 2,
      title: "Advanced Tech Solutions 2026: Transforming Business Operations",
      excerpt: "Comprehensive guide to next-generation technology solutions that deliver 10x performance improvements.",
      author: "Marcus Rodriguez",
      authorRole: "CTO",
      publishDate: "2025-09-16",
      readTime: "10 min read",
      category: "Technology",
      views: "8.3K",
      likes: 623,
      image: "/images/blog/advanced-tech-solutions-2026.jpg",
      featured: true,
      link: "/advanced-tech-solutions-2026"
    },
    {
      id: 3,
      title: "Quantum Computing Guide 2026: Mastering the Fundamentals",
      excerpt: "Complete guide to quantum computing fundamentals, applications, and implementation strategies.",
      author: "Dr. Elena Volkov",
      authorRole: "Quantum Computing Expert",
      publishDate: "2025-09-16",
      readTime: "12 min read",
      category: "Quantum Computing",
      views: "15.7K",
      likes: 1.2,
      image: "/images/blog/quantum-computing-guide-2026.jpg",
      featured: true,
      link: "/quantum-computing-guide-2026"
    }
  ];

  const categories = [
    { name: "AI Innovation", count: 24, color: "bg-purple-500" },
    { name: "Technology", count: 18, color: "bg-blue-500" },
    { name: "Quantum Computing", count: 12, color: "bg-green-500" },
    { name: "Future Tech", count: 8, color: "bg-pink-500" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and groundbreaking content that's shaping the future of technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <motion.article
              key={content.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = content.link}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 h-full hover:scale-105">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{content.views}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{content.author}</p>
                      <p className="text-gray-400 text-sm">{content.authorRole}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {content.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {content.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{content.likes}K</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                    <span className="font-semibold mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Popular Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center cursor-pointer group"
              >
                <div className={`${category.color} w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">{category.name}</h4>
                <p className="text-gray-400 text-sm">{category.count} articles</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto">
            View All Content
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase2026;