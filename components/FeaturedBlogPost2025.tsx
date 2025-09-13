import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const FeaturedBlogPost2025 = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Quantum Neural Networks in 2025",
      excerpt: "Explore how quantum neural networks are revolutionizing artificial intelligence and what this means for businesses worldwide.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      views: "12.5k",
      likes: "847",
      category: "AI Research",
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure with AI",
      excerpt: "Learn how to design and implement cloud solutions that automatically scale and optimize based on AI-driven insights.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "6 min read",
      views: "8.2k",
      likes: "523",
      category: "Cloud Computing",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Neural Interface Technology: The Next Frontier",
      excerpt: "Discover the latest developments in brain-computer interfaces and their potential applications in healthcare and business.",
      author: "Dr. Alex Thompson",
      date: "January 10, 2025",
      readTime: "10 min read",
      views: "15.3k",
      likes: "1.2k",
      category: "Neural Tech",
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Automation Revolution: AI-Powered Business Processes",
      excerpt: "How artificial intelligence is transforming traditional business processes and creating new opportunities for growth.",
      author: "Lisa Wang",
      date: "January 8, 2025",
      readTime: "7 min read",
      views: "9.7k",
      likes: "634",
      category: "Automation",
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
            <span className="text-sm font-semibold">FEATURED BLOG POSTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Trends
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI, quantum computing, and emerging technologies.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {(() => {
            const featuredPost = blogPosts.find(post => post.featured);
            return (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <UserIcon className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center">
                          <EyeIcon className="w-4 h-4 mr-1" />
                          {featuredPost.views}
                        </div>
                        <div className="flex items-center">
                          <HeartIcon className="w-4 h-4 mr-1" />
                          {featuredPost.likes}
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-fit">
                      Read Full Article
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center">
                    Read More
                    <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 border-2 border-blue-600 hover:border-blue-700">
            View All Blog Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogPost2025;