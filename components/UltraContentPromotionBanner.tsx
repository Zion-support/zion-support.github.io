import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, TrendingUp, Download, BookOpen, Award, Zap } from 'lucide-react';

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
  variant?: 'featured' | 'trending' | 'new' | 'resources';
  maxItems?: number;
  className?: string;
}

export default function UltraContentPromotionBanner({
  title,
  subtitle,
  description,
  content,
  variant = 'featured',
  maxItems = 6,
  className = ''
}: UltraContentPromotionBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          gradient: 'from-purple-600 via-pink-600 to-red-600',
          accent: 'purple',
          icon: '⭐'
        };
      case 'trending':
        return {
          gradient: 'from-orange-600 via-red-600 to-pink-600',
          accent: 'orange',
          icon: '🔥'
        };
      case 'new':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          accent: 'blue',
          icon: '✨'
        };
      case 'resources':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          accent: 'green',
          icon: '📚'
        };
      default:
        return {
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          accent: 'indigo',
          icon: '🚀'
        };
    }
  };

  const styles = getVariantStyles();
  const displayContent = content.slice(0, maxItems);

  return (
    <section className={`py-20 bg-gradient-to-r ${styles.gradient} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">{styles.icon} {subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.isTrending && <TrendingUp className="w-4 h-4 text-orange-300" />}
                      {item.isNew && <Star className="w-4 h-4 text-yellow-300" />}
                      {item.isPopular && <Zap className="w-4 h-4 text-blue-300" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-200 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm opacity-90 mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <div className="flex items-center gap-3">
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/content-showcase"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg inline-flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Explore All Content
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}