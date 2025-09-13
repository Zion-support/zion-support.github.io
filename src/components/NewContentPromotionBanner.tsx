import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, FileText, Star, Clock, Users, TrendingUp } from 'lucide-react';

export const NewContentPromotionBanner: React.FC = () => {
  const newContent = [
    {
      type: 'blog',
      title: 'AI 2025: Enterprise Automation Revolutionary Breakthrough',
      excerpt: 'Discover how AI-powered enterprise automation is revolutionizing business operations in 2025',
      link: '/blog/ai-2025-enterprise-automation-revolutionary-breakthrough',
      category: 'AI & Automation',
      readTime: '12 min read',
      featured: true,
      icon: BookOpen,
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      type: 'case-study',
      title: 'Global Enterprise AI Transformation: Ultimate Success Story',
      excerpt: 'How a Fortune 500 company achieved 500% ROI with comprehensive AI transformation',
      link: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      category: 'Case Study',
      readTime: '15 min read',
      featured: true,
      icon: Target,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      type: 'resource',
      title: 'AI 2025: Quick Start Implementation Guide',
      excerpt: 'Get started with AI implementation in your organization with this comprehensive guide',
      link: '/resources/ai-2025-implementation-quick-start-guide',
      category: 'Implementation Guide',
      readTime: '10 min read',
      featured: true,
      icon: FileText,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '500%', label: 'Average ROI' },
    { icon: Users, value: '150+', label: 'Companies Transformed' },
    { icon: Clock, value: '90 Days', label: 'To First Results' },
    { icon: Star, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              That Changes Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI implementation, real-world success stories, 
            and proven strategies that are transforming businesses in 2025.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {newContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={content.link}>
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${content.gradient}`}>
                      <content.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                          {content.category}
                        </span>
                        {content.featured && (
                          <span className="text-xs font-medium text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {content.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {content.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already achieved remarkable results 
              with our AI implementation strategies and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free AI Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                View Success Stories
                <Target className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner;