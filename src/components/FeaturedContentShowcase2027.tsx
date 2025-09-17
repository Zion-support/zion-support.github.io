import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Star, 
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Globe
} from 'lucide-react';
import { NEW_BLOG_POSTS_2027, NEW_SERVICES_2027 } from '../data/newContent2027';
const FeaturedContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'services'>('blog');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai transformation':
        return <Brain className="w-5 h-5" />;
      case 'quantum computing':
        return <Zap className="w-5 h-5" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'ai consulting':
        return <TrendingUp className="w-5 h-5" />;
      case 'ai automation':
        return <Globe className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Revolutionary Content & Services 2027
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthrough technologies and transformative solutions 
            that are reshaping the future of business and technology.
          </p>
        </motion.div>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              📚 Latest Insights
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              ⚡ Premium Services
            </button>
          </div>
        </div>
        {/* Content Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'blog' ? (
            NEW_BLOG_POSTS_2027.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    {getCategoryIcon(post.category)}
                    <span className="text-white text-sm font-medium">{post.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            NEW_SERVICES_2027.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-teal-600">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    {getCategoryIcon(service.category)}
                    <span className="text-white text-sm font-medium">{service.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ {service.aiScore} AI Score
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-emerald-200 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between text-lg font-bold mb-4">
                    <span className="text-emerald-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-700">{service.reviews.rating}</span>
                      <span className="text-gray-500 text-sm">({service.reviews.count})</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies leveraging our cutting-edge AI and quantum technologies 
              to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default FeaturedContentShowcase2027;
