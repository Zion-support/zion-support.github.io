import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, User, TrendingUp, Download } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
}

interface UltraContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  content: ContentItem[];
  variant?: 'featured' | 'trending' | 'new' | 'popular';
  maxItems?: number;
  className?: string;
}

const UltraContentPromotionBanner: React.FC<UltraContentPromotionBannerProps> = ({
  title,
  subtitle,
  description,
  content,
  variant = 'featured',
  maxItems = 6,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'trending':
        return {
          gradient: 'from-orange-600 via-red-600 to-pink-600',
          accent: 'from-orange-500 to-red-500',
          text: 'text-orange-600',
          border: 'border-orange-400'
        };
      case 'new':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          accent: 'from-green-500 to-emerald-500',
          text: 'text-green-600',
          border: 'border-green-400'
        };
      case 'popular':
        return {
          gradient: 'from-purple-600 via-indigo-600 to-blue-600',
          accent: 'from-purple-500 to-indigo-500',
          text: 'text-purple-600',
          border: 'border-purple-400'
        };
      default:
        return {
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          accent: 'from-indigo-500 to-purple-500',
          text: 'text-indigo-600',
          border: 'border-indigo-400'
        };
    }
  };

  const styles = getVariantStyles();
  const displayContent = content.slice(0, maxItems);

  return (
    <section className={`py-20 bg-gradient-to-r ${styles.gradient} text-white relative overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="group bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                🎯 Explore All Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/resources"
              className="group border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                📚 Download Resources
                <Download className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayContent.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link href={item.href} className="group block">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        POPULAR
                      </span>
                    )}
                    <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <div className="flex items-center gap-3">
                      {item.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.readTime}</span>
                        </div>
                      )}
                      {item.type && (
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                          {item.type}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Free Resources</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-90">Downloads</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Content</h3>
            <p className="text-lg opacity-90 mb-6">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Read Latest Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraContentPromotionBanner;