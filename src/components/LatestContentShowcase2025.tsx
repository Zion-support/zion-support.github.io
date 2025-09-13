import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  ChartBarIcon, 
  LightBulbIcon,
  ArrowRightIcon,
  CalendarIcon,
  EyeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  featured: boolean;
  publishDate: string;
  readTime: string;
  views: number;
  category: string;
  imageUrl?: string;
}

const LatestContentShowcase2025: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Enterprise Automation Revolution',
      description: 'Discover how AI is transforming enterprise operations in 2025. Learn about the latest breakthroughs, implementation strategies, and real-world success stories from industry leaders.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true,
      publishDate: '2025-01-15',
      readTime: '12 min read',
      views: 2847,
      category: 'AI & Automation',
      imageUrl: '/images/ai-automation-hero.jpg'
    },
    {
      id: '2',
      title: 'Global Manufacturing AI Transformation Success Story',
      description: 'See how a Fortune 500 manufacturer achieved 40% cost reduction and 60% efficiency improvement through strategic AI implementation. Complete case study with metrics and lessons learned.',
      type: 'case-study',
      url: '/case-studies/global-manufacturing-ai-transformation-2025',
      featured: true,
      publishDate: '2025-01-12',
      readTime: '15 min read',
      views: 1923,
      category: 'Manufacturing',
      imageUrl: '/images/manufacturing-transformation.jpg'
    },
    {
      id: '3',
      title: 'AI Implementation Roadmap 2025',
      description: 'Your complete guide to digital transformation. Step-by-step roadmap for successful AI adoption in your organization, including readiness assessment and best practices.',
      type: 'resource',
      url: '/resources/ai-implementation-roadmap-2025',
      featured: true,
      publishDate: '2025-01-10',
      readTime: '20 min read',
      views: 3567,
      category: 'Implementation Guide',
      imageUrl: '/images/ai-roadmap-guide.jpg'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpenIcon className="w-6 h-6" />;
      case 'case-study':
        return <ChartBarIcon className="w-6 h-6" />;
      case 'resource':
        return <LightBulbIcon className="w-6 h-6" />;
      default:
        return <BookOpenIcon className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500 text-white';
      case 'case-study':
        return 'bg-green-500 text-white';
      case 'resource':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource Guide';
      default:
        return 'Content';
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpenIcon className="w-5 h-5" />
            <span>Latest Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Ahead with Our Latest
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, real-world success stories, and actionable implementation guides 
            from our team of experts.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </span>
                </div>
              )}

              {/* Content Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`${getTypeColor(item.type)} px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}>
                  {getTypeIcon(item.type)}
                  <span>{getTypeLabel(item.type)}</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-blue-400 text-sm font-medium">{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <EyeIcon className="w-4 h-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  to={item.url}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-white transition-colors duration-200 group/btn"
                >
                  <span className="font-semibold">Read More</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/resources"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Resources</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default LatestContentShowcase2025;