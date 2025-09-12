import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp, Star, Download, BookOpen, Play, X } from 'lucide-react';

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
}

interface EnhancedContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  content: ContentItem[];
  variant?: 'featured' | 'trending' | 'new';
  maxItems?: number;
  showCloseButton?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const EnhancedContentPromotionBanner: React.FC<EnhancedContentPromotionBannerProps> = ({
  title,
  subtitle,
  description,
  content,
  variant = 'featured',
  maxItems = 6,
  showCloseButton = true,
  autoRotate = true,
  rotationInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const displayedContent = content.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isPaused && displayedContent.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedContent.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isPaused, displayedContent.length, rotationInterval]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'trending':
        return {
          background: 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600',
          accent: 'text-orange-200',
          button: 'bg-white text-orange-600 hover:bg-orange-50',
          border: 'border-orange-200'
        };
      case 'new':
        return {
          background: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
          accent: 'text-green-200',
          button: 'bg-white text-green-600 hover:bg-green-50',
          border: 'border-green-200'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
          accent: 'text-indigo-200',
          button: 'bg-white text-indigo-600 hover:bg-indigo-50',
          border: 'border-indigo-200'
        };
    }
  };

  const styles = getVariantStyles();

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`py-20 ${styles.background} text-white relative overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
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
              className={`${styles.button} px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg`}
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📚 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedContent.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                    {/* Content Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {item.isTrending && (
                          <TrendingUp className="w-4 h-4 text-orange-300" />
                        )}
                        {item.isNew && (
                          <Star className="w-4 h-4 text-yellow-300" />
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm opacity-90 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Content Footer */}
                    <div className="flex items-center justify-between text-xs opacity-75">
                      <div className="flex items-center gap-3">
                        {item.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.readTime}
                          </span>
                        )}
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.type === 'Free Download' && <Download className="w-3 h-3" />}
                        {item.type === 'Article' && <BookOpen className="w-3 h-3" />}
                        {item.type === 'Case Study' && <Play className="w-3 h-3" />}
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          {displayedContent.length > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {displayedContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Additional Content Grid */}
        {content.length > maxItems && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              More {variant === 'featured' ? 'Featured' : variant === 'trending' ? 'Trending' : 'New'} Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.slice(maxItems, maxItems + 4).map((item, index) => (
                <Link key={item.href} href={item.href} className="group">
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-10">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-semibold mb-1 group-hover:underline line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs opacity-75 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.section>
  );
};

export default EnhancedContentPromotionBanner;