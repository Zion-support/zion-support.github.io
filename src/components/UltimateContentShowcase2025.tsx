import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award, Globe, Shield } from 'lucide-react';

const UltimateContentShowcase2025: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI-Powered Business Transformation Guide 2025",
      description: "Complete roadmap for implementing AI solutions in your business with proven strategies and real-world case studies.",
      category: "AI & Automation",
      readTime: "15 min read",
      rating: 4.9,
      downloads: "12.5K",
      image: "/api/placeholder/400/250",
      featured: true,
      new: true
    },
    {
      id: 2,
      title: "Quantum Computing: The Future is Now",
      description: "Explore how quantum computing will revolutionize industries and what it means for your business.",
      category: "Quantum Computing",
      readTime: "20 min read",
      rating: 4.8,
      downloads: "8.9K",
      image: "/api/placeholder/400/250",
      featured: true,
      new: false
    },
    {
      id: 3,
      title: "Cybersecurity Mastery: Advanced Threat Detection",
      description: "Learn cutting-edge cybersecurity techniques and implement enterprise-grade security solutions.",
      category: "Cybersecurity",
      readTime: "25 min read",
      rating: 4.9,
      downloads: "15.2K",
      image: "/api/placeholder/400/250",
      featured: false,
      new: true
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization Strategies",
      description: "Maximize your cloud investment with proven optimization techniques and cost reduction strategies.",
      category: "Cloud & DevOps",
      readTime: "18 min read",
      rating: 4.7,
      downloads: "11.3K",
      image: "/api/placeholder/400/250",
      featured: false,
      new: false
    },
    {
      id: 5,
      title: "Blockchain Solutions for Enterprise",
      description: "Implement blockchain technology in your organization with practical use cases and deployment guides.",
      category: "Blockchain",
      readTime: "22 min read",
      rating: 4.8,
      downloads: "9.7K",
      image: "/api/placeholder/400/250",
      featured: true,
      new: true
    },
    {
      id: 6,
      title: "IoT Integration: Smart Business Solutions",
      description: "Connect your business with IoT devices and create intelligent, automated workflows.",
      category: "IoT Solutions",
      readTime: "16 min read",
      rating: 4.6,
      downloads: "7.4K",
      image: "/api/placeholder/400/250",
      featured: false,
      new: true
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Readers" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "200+", label: "Expert Articles" },
    { icon: Globe, value: "150+", label: "Countries Reached" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
            <Zap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Ultimate Content Hub 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge insights, breakthrough technologies, and expert guidance to transform your business in 2025 and beyond.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Content Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {content.new && (
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    NEW
                  </span>
                )}
                {content.featured && (
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white/30">
                    {content.category === 'AI & Automation' && '🤖'}
                    {content.category === 'Quantum Computing' && '⚛️'}
                    {content.category === 'Cybersecurity' && '🛡️'}
                    {content.category === 'Cloud & DevOps' && '☁️'}
                    {content.category === 'Blockchain' && '⛓️'}
                    {content.category === 'IoT Solutions' && '🌐'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400 font-medium">{content.category}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">{content.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{content.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{content.downloads} downloads</span>
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-400/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our cutting-edge technology solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore All Content
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get Custom Solutions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;