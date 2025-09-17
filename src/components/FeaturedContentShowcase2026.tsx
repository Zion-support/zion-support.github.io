import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, TrendingUp, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedContentShowcase2026Props {
  className?: string;
}

const FeaturedContentShowcase2026: React.FC<FeaturedContentShowcase2026Props> = ({ className = '' }) => {
  const featuredContent = [
    {
      id: 'autonomous-systems',
      title: 'Next-Generation Autonomous AI Systems',
      excerpt: 'Revolutionary autonomous AI systems that learn, adapt, and evolve to transform enterprise automation.',
      category: 'AI Innovation',
      readTime: '12 min read',
      publishedDate: 'Jan 15, 2026',
      image: '/api/placeholder/400/250',
      gradient: 'from-purple-500 to-blue-600',
      stats: { views: '2.4k', likes: '156' },
      tags: ['Autonomous AI', 'Enterprise', 'Machine Learning'],
      featured: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Enterprise Solutions',
      excerpt: 'Harness quantum computing power to solve complex business challenges with unprecedented speed.',
      category: 'Quantum Technology',
      readTime: '15 min read',
      publishedDate: 'Jan 14, 2026',
      image: '/api/placeholder/400/250',
      gradient: 'from-emerald-500 to-cyan-600',
      stats: { views: '1.8k', likes: '98' },
      tags: ['Quantum Computing', 'Enterprise', 'Innovation'],
      featured: true
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Breakthrough',
      excerpt: 'Explore the dawn of sentient artificial intelligence and its transformative impact on human-AI collaboration.',
      category: 'AI Research',
      readTime: '18 min read',
      publishedDate: 'Jan 13, 2026',
      image: '/api/placeholder/400/250',
      gradient: 'from-rose-500 to-pink-600',
      stats: { views: '3.2k', likes: '234' },
      tags: ['Consciousness', 'AI Research', 'Future Tech'],
      featured: true
    },
    {
      id: 'transformation-roadmap',
      title: 'Enterprise AI Transformation 2026',
      excerpt: 'Complete implementation roadmap for successful AI transformation with proven strategies and frameworks.',
      category: 'Business Strategy',
      readTime: '20 min read',
      publishedDate: 'Jan 12, 2026',
      image: '/api/placeholder/400/250',
      gradient: 'from-orange-500 to-red-600',
      stats: { views: '2.9k', likes: '187' },
      tags: ['AI Transformation', 'Strategy', 'Implementation'],
      featured: false
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
=======
>>>>>>> origin/merged-prs

const COMPONENT: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Featured Content
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Innovations & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, breakthrough research, and practical implementation strategies 
            that are shaping the future of enterprise automation and artificial intelligence.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Stats */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                      {content.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {content.stats.views}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {content.stats.likes}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {content.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-4">{content.readTime}</span>
                      <span>{content.publishedDate}</span>
                    </div>

                    <Link
                      to={`/blog/${content.id}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging our AI solutions 
              to drive innovation, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Explore Our AI Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-400 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
>>>>>>> origin/merged-prs
      </div>
    </div>
  );
};

export default COMPONENT;
