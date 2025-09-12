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
  featured?: boolean;
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
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          badgeColor: 'bg-white bg-opacity-20',
          textColor: 'text-white',
          buttonPrimary: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
        };
      case 'trending':
        return {
          gradient: 'from-orange-600 via-red-600 to-pink-600',
          badgeColor: 'bg-white bg-opacity-20',
          textColor: 'text-white',
          buttonPrimary: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
        };
      case 'new':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          badgeColor: 'bg-white bg-opacity-20',
          textColor: 'text-white',
          buttonPrimary: 'bg-white text-green-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-green-600'
        };
      case 'popular':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          badgeColor: 'bg-white bg-opacity-20',
          textColor: 'text-white',
          buttonPrimary: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
      default:
        return {
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          badgeColor: 'bg-white bg-opacity-20',
          textColor: 'text-white',
          buttonPrimary: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
        };
    }
  };

  const styles = getVariantStyles();
  const displayedContent = content.slice(0, maxItems);

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
          <div className={`inline-flex items-center ${styles.badgeColor} rounded-full px-6 py-2 mb-6 backdrop-blur-sm`}>
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className={`${styles.buttonPrimary} px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg flex items-center gap-2`}
            >
              <BookOpen className="w-5 h-5" />
              Explore All Content
            </Link>
            <Link
              href="/resources"
              className={`${styles.buttonSecondary} px-10 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center gap-2`}
            >
              <Download className="w-5 h-5" />
              Download Resources
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedContent.map((item, index) => (
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
                      {item.featured && <Star className="w-4 h-4 text-yellow-300" />}
                      {item.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm opacity-90 mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <div className="flex items-center gap-3">
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {content.length > maxItems && (
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className={`${styles.buttonSecondary} px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2`}
            >
              View All Content
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}