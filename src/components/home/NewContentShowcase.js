import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  TrendingUp,
  Star,
  BookOpen,
  Download,
  Play,
  Zap
} from 'lucide-react';

const NewContentShowcase = () => {
  const newContent = [
    {
      id: 1,
      type: 'blog',
      title: 'AI Autonomous Operations 2025',
      description: 'Transform your business with 500% revenue growth through AI autonomous operations',
      link: '/blog/ai-autonomous-business-operations-2025',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-purple-500 to-indigo-600',
      badge: 'New Blog Post'
    },
    {
      id: 2,
      type: 'blog',
      title: 'Quantum Neural Networks',
      description: '10,000x performance improvement over classical AI systems',
      link: '/blog/quantum-neural-networks-2025-breakthrough',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-600',
      badge: 'Breakthrough'
    },
    {
      id: 3,
      type: 'case-study',
      title: 'Enterprise AI Success',
      description: 'How a Fortune 500 company achieved 500% revenue growth',
      link: '/case-studies/enterprise-ai-transformation-2025-success',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-600',
      badge: 'Success Story'
    },
    {
      id: 4,
      type: 'resource',
      title: 'AI Implementation Guide',
      description: 'Complete roadmap to enterprise AI success',
      link: '/resources/ai-implementation-master-guide-2025',
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600',
      badge: 'Free Guide'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Latest Content - January 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            New AI Content & Resources
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our latest insights, breakthrough research, and proven strategies for AI transformation success.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {newContent.map((content) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                to={content.link}
                className="block h-full bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate/80 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-zion-blue-dark px-3 py-1 rounded-full text-xs font-bold">
                    {content.badge}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {content.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {content.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* CTA */}
                <div className="flex items-center space-x-2 text-zion-cyan group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">
                    {content.type === 'case-study' ? 'Read Case Study' :
                     content.type === 'resource' ? 'Download Guide' : 'Read More'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/resources"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase;