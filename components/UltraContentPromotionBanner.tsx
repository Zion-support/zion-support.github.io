import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, TrendingUp, Download, BookOpen } from 'lucide-react';

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
  result?: string;
  pages?: string;
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
          icon: '✨'
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
          icon: '🚀'
        };
      case 'resources':
        return {
          gradient: 'from-green-600 via-teal-600 to-cyan-600',
          accent: 'green',
          icon: '📚'
        };
      default:
        return {
          gradient: 'from-gray-600 via-blue-600 to-purple-600',
          accent: 'gray',
          icon: '📄'
        };
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Automation': 'bg-blue-100 text-blue-800',
      'Cybersecurity': 'bg-red-100 text-red-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Master Guide': 'bg-purple-100 text-purple-800',
      'AI Innovations': 'bg-yellow-100 text-yellow-800',
      'Workforce': 'bg-indigo-100 text-indigo-800',
      'Privacy': 'bg-gray-100 text-gray-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Customer Service': 'bg-pink-100 text-pink-800',
      'AI Safety': 'bg-orange-100 text-orange-800',
      'Security': 'bg-red-100 text-red-800',
      'Tools': 'bg-cyan-100 text-cyan-800',
      'Templates': 'bg-violet-100 text-violet-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (item: ContentItem) => {
    if (item.isNew) return { text: 'NEW', color: 'bg-green-500 text-white' };
    if (item.isTrending) return { text: 'TRENDING', color: 'bg-orange-500 text-white' };
    if (item.isPopular) return { text: 'POPULAR', color: 'bg-blue-500 text-white' };
    return null;
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
          {displayContent.map((item, index) => {
            const statusBadge = getStatusBadge(item);
            
            return (
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
                    {statusBadge && (
                      <div className="flex justify-end mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
                          {statusBadge.text}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      {item.readTime && (
                        <span className="text-xs text-white opacity-75 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:underline">
                      {item.title}
                    </h3>
                    
                    <p className="text-white text-sm opacity-90 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white opacity-75">
                        {item.type && (
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {item.type}
                          </span>
                        )}
                        {item.result && (
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {item.result}
                          </span>
                        )}
                        {item.pages && (
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {item.pages}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              📖 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}