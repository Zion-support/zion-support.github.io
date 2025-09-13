import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  User, 
  TrendingUp, 
  Star,
  Calendar,
  Eye,
  MessageCircle,
  BookOpen,
  Play,
  Download
} from 'lucide-react';

const FeaturedContentSection = () => {
  const featuredContent = [
    {
      id: 1,
      type: 'blog',
      title: 'AI Autonomous Business Operations: The 2025 Revolution',
      excerpt: 'Discover how AI autonomous business operations are revolutionizing enterprise management, reducing costs by 70%, and enabling 24/7 intelligent decision-making.',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-17',
      readTime: '12 min read',
      views: '5.2k',
      comments: 47,
      tags: ['AI', 'Autonomous Operations', 'Business Transformation'],
      image: '/images/ai-autonomous-operations.jpg',
      link: '/blog/ai-autonomous-business-operations-2025',
      featured: true
    },
    {
      id: 2,
      type: 'blog',
      title: 'Quantum Neural Networks: The 2025 Breakthrough Reshaping AI',
      excerpt: 'Explore how quantum neural networks are achieving 10,000x performance improvements over classical AI, solving previously impossible problems.',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-17',
      readTime: '15 min read',
      views: '4.8k',
      tags: ['Quantum Computing', 'Neural Networks', 'AI Breakthrough'],
      image: '/images/quantum-neural-networks.jpg',
      link: '/blog/quantum-neural-networks-2025-breakthrough',
      featured: true
    },
    {
      id: 3,
      type: 'case-study',
      title: 'Enterprise AI Transformation: 500% Revenue Growth in 12 Months',
      excerpt: 'Discover how a Fortune 500 manufacturing company achieved unprecedented business success through AI autonomous operations.',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-17',
      readTime: '8 min read',
      views: '6.3k',
      tags: ['Case Study', 'AI Transformation', 'Revenue Growth'],
      image: '/images/enterprise-ai-transformation.jpg',
      link: '/case-studies/enterprise-ai-transformation-2025-success',
      featured: true
    },
    {
      id: 4,
      type: 'webinar',
      title: 'Cybersecurity in the Age of AI: Best Practices',
      excerpt: 'Join our security experts for an in-depth discussion on AI-enhanced cybersecurity.',
      author: 'Alex Thompson',
      scheduledAt: '2024-02-15',
      duration: '45 min',
      attendees: '850+',
      tags: ['webinar', 'cybersecurity', 'AI'],
      image: '/images/cybersecurity-webinar.jpg',
      link: '/webinars/ai-cybersecurity-best-practices',
      featured: true,
      upcoming: true
    },
    {
      id: 5,
      type: 'resource',
      title: 'AI Implementation Master Guide 2025',
      excerpt: 'Complete roadmap to enterprise AI success with proven strategies, best practices, and step-by-step implementation processes.',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-17',
      readTime: '25 min read',
      downloads: '3.2k',
      tags: ['AI Implementation', 'Guide', 'Best Practices'],
      image: '/images/ai-implementation-guide.jpg',
      link: '/resources/ai-implementation-master-guide-2025',
      featured: true
    },
    {
      id: 6,
      type: 'resource',
      title: 'AI ROI Calculator Guide 2025',
      excerpt: 'Learn how to calculate and maximize ROI from your AI investments with proven frameworks and formulas.',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-17',
      downloads: '2.8k',
      tags: ['AI ROI', 'Calculator', 'Investment'],
      image: '/images/ai-roi-calculator.jpg',
      link: '/resources/ai-roi-calculator-guide-2025',
      featured: true
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'whitepaper':
        return <Download className="w-4 h-4" />;
      case 'case-study':
        return <TrendingUp className="w-4 h-4" />;
      case 'webinar':
        return <Play className="w-4 h-4" />;
      case 'tutorial':
        return <BookOpen className="w-4 h-4" />;
      case 'infographic':
        return <Eye className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'whitepaper':
        return 'from-purple-500 to-indigo-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'webinar':
        return 'from-orange-500 to-red-500';
      case 'tutorial':
        return 'from-pink-500 to-rose-500';
      case 'infographic':
        return 'from-teal-500 to-cyan-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

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
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Content & Resources
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Stay ahead with our latest insights, case studies, and industry expertise. 
            Discover cutting-edge solutions and best practices from our team of experts.
          </p>
        </motion.div>

        {/* Featured Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className={`group relative bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                content.featured ? 'ring-2 ring-zion-cyan/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {content.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-zion-blue-dark px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Upcoming Badge */}
              {content.upcoming && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Upcoming</span>
                  </div>
                </div>
              )}

              {/* Content Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(content.type)} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {getTypeIcon(content.type)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 text-white">
                    <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-sm`}>
                      {getTypeIcon(content.type)}
                    </div>
                    <span className="text-sm font-medium capitalize">{content.type}</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {content.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{content.author}</span>
                    </div>
                    {content.publishedAt && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{content.publishedAt}</span>
                      </div>
                    )}
                    {content.scheduledAt && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{content.scheduledAt}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{content.readTime || content.duration}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">
                  <div className="flex items-center space-x-4">
                    {content.views && (
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{content.views}</span>
                      </div>
                    )}
                    {content.downloads && (
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{content.downloads}</span>
                      </div>
                    )}
                    {content.attendees && (
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{content.attendees}</span>
                      </div>
                    )}
                    {content.comments && (
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{content.comments}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zion-cyan/10 text-zion-cyan text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={content.link}
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300 text-sm font-medium group-hover:translate-x-1 transform transition-transform"
                >
                  <span>
                    {content.type === 'webinar' ? 'Register Now' : 
                     content.type === 'whitepaper' || content.type === 'infographic' ? 'Download' : 'Read More'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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

export default FeaturedContentSection;