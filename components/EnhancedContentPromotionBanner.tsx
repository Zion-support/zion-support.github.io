import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, TrendingUp, Eye, Heart } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime: string;
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
  views?: number;
  likes?: number;
  rating?: number;
}

interface EnhancedContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  content?: ContentItem[];
  variant?: 'default' | 'featured' | 'trending' | 'new';
  maxItems?: number;
  showStats?: boolean;
  showRatings?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const defaultContent: ContentItem[] = [
  {
    title: "AI Enterprise Automation Revolution 2025",
    description: "Transform your enterprise operations with AI automation strategies that deliver 400% ROI and revolutionize how your business operates",
    href: "/blog/ai-2025-enterprise-automation-revolution",
    icon: "⚙️",
    readTime: "22 min read",
    category: "Enterprise AI",
    isNew: true,
    isTrending: true,
    views: 15420,
    likes: 892,
    rating: 4.9
  },
  {
    title: "AI Healthcare Diagnosis Revolution 2025",
    description: "Revolutionary AI technologies achieving 95% accuracy in medical diagnosis, saving thousands of lives and transforming healthcare delivery worldwide",
    href: "/blog/ai-healthcare-diagnosis-revolution-2025",
    icon: "🏥",
    readTime: "20 min read",
    category: "Healthcare AI",
    isNew: true,
    isTrending: true,
    views: 22150,
    likes: 1245,
    rating: 4.8
  },
  {
    title: "AI Financial Services Transformation 2025",
    description: "How a Fortune 500 financial services company achieved $2B+ revenue increase and 400% ROI through comprehensive AI transformation",
    href: "/case-studies/ai-financial-services-transformation-2025",
    icon: "💰",
    readTime: "25 min read",
    category: "Financial AI",
    isNew: true,
    isTrending: true,
    views: 18750,
    likes: 1103,
    rating: 4.9
  },
  {
    title: "AI Breakthrough Innovations 2025",
    description: "Revolutionary technologies that are reshaping industries and creating unprecedented opportunities for businesses worldwide",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    readTime: "18 min read",
    category: "AI Innovation",
    isNew: true,
    views: 32100,
    likes: 2156,
    rating: 4.7
  }
];

export default function EnhancedContentPromotionBanner({
  title = "Discover Revolutionary AI Content",
  subtitle = "Explore the latest insights, case studies, and breakthrough innovations that are transforming industries worldwide",
  content = defaultContent,
  variant = 'default',
  maxItems = 4,
  showStats = true,
  showRatings = true,
  autoRotate = true,
  rotationInterval = 5000,
  className = ''
}: EnhancedContentPromotionBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          gradient: 'from-purple-600 to-blue-600',
          accentColor: 'purple',
          badgeColor: 'bg-purple-100 text-purple-800'
        };
      case 'trending':
        return {
          gradient: 'from-orange-500 to-red-500',
          accentColor: 'orange',
          badgeColor: 'bg-orange-100 text-orange-800'
        };
      case 'new':
        return {
          gradient: 'from-green-500 to-teal-500',
          accentColor: 'green',
          badgeColor: 'bg-green-100 text-green-800'
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          accentColor: 'blue',
          badgeColor: 'bg-blue-100 text-blue-800'
        };
    }
  };

  const styles = getVariantStyles();
  const displayContent = content.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayContent.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayContent.length, rotationInterval]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className={`py-20 bg-gradient-to-r ${styles.gradient} text-white relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">{subtitle}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div 
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm opacity-75">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                    {item.category}
                  </span>
                </div>

                {/* Stats */}
                {showStats && (
                  <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{formatNumber(item.views || 0)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{formatNumber(item.likes || 0)}</span>
                        </div>
                      </div>
                      {showRatings && item.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-sm font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Explore All Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              Download Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}