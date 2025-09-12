import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, ArrowRight, Star, Calendar, Download, Play, Gift } from 'lucide-react';

interface PromotionItem {
  id: string;
  title: string;
  description: string;
  type: 'case-study' | 'resource' | 'webinar' | 'blog';
  href: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<any>;
  ctaText: string;
  isNew?: boolean;
  isLimited?: boolean;
  expiresAt?: string;
}

interface ContentPromotionBannerProps {
  className?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  className = '',
  autoRotate = true,
  rotationInterval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions: PromotionItem[] = [
    {
      id: 'generative-ai-revolution',
      title: 'The Generative AI Revolution 2025: Beyond Text and Images',
      description: 'Explore how generative AI is revolutionizing content creation, design, and business processes with advanced multimodal capabilities.',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-revolution',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '22 min read',
      views: '3.1K views'
    },
    {
      id: 'ai-gtm-2025',
      title: 'AI Go-To-Market Strategy 2025: From Zero to Traction',
      description: 'Positioning, pricing, and distribution playbook to launch and scale AI products in 2025.',
      type: 'blog',
      url: '/blog/ai-2025-ai-go-to-market-strategy',
      featured: true,
      publishDate: 'September 12, 2025',
      readTime: '12 min read',
      views: '1.1K views'
    },
    {
      id: 'healthcare-diagnosis',
      title: 'AI Healthcare Diagnosis Revolution 2025: Saving Lives with Precision Medicine',
      description: 'Discover how AI is revolutionizing healthcare diagnosis with early disease detection and personalized treatment plans.',
      type: 'blog',
      url: '/blog/ai-healthcare-diagnosis-revolution-2025',
      featured: true,
      publishDate: 'January 30, 2025',
      readTime: '25 min read',
      views: '4.2K views'
    },
    {
      id: 'financial-transformation',
      title: 'AI Financial Services Transformation Success: $2.3B in Value Created',
      description: 'Comprehensive case study of how a Fortune 500 company achieved unprecedented success through AI transformation.',
      type: 'case-study',
      href: '/case-studies/ai-transformation-manufacturing-giant-2025',
      badge: 'SUCCESS STORY',
      badgeColor: 'bg-green-100 text-green-800',
      icon: Star,
      ctaText: 'View Case Study',
      isNew: true
    },
    {
      id: 'playbook-1',
      title: 'Free AI Transformation Playbook 2025',
      description: 'Download our comprehensive guide with proven frameworks and templates',
      type: 'resource',
      href: '/resources/ai-transformation-playbook-2025',
      badge: 'FREE RESOURCE',
      badgeColor: 'bg-blue-100 text-blue-800',
      icon: Download,
      ctaText: 'Download Now',
      isNew: true,
      isLimited: true
    },
    {
      id: 'webinar-1',
      title: 'AI Transformation Masterclass',
      description: 'Join 2,500+ executives in our free live training session',
      type: 'webinar',
      href: '/webinars/ai-transformation-masterclass',
      badge: 'FREE WEBINAR',
      badgeColor: 'bg-purple-100 text-purple-800',
      icon: Play,
      ctaText: 'Register Free',
      isNew: true,
      expiresAt: '2025-01-25'
    },
    {
      id: 'blog-1',
      title: 'Generative AI Revolution 2025',
      description: 'Explore how generative AI is transforming every industry',
      type: 'blog',
      href: '/blog/ai-2025-generative-ai-revolution',
      badge: 'TRENDING',
      badgeColor: 'bg-orange-100 text-orange-800',
      icon: Star,
      ctaText: 'Read Article',
      isNew: true
    }
  ];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, promotions.length]);

  const currentPromotion = promotions[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'webinar': return '🎓';
      case 'blog': return '📝';
      default: return '📄';
    }
  };

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'case-study': return 'from-green-500 to-emerald-600';
      case 'resource': return 'from-blue-500 to-indigo-600';
      case 'webinar': return 'from-purple-500 to-violet-600';
      case 'blog': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const isExpiring = currentPromotion.expiresAt && 
    new Date(currentPromotion.expiresAt) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <div className={`bg-gradient-to-r ${getGradientClass(currentPromotion.type)} text-white`}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Content */}
                <div className="flex items-center space-x-4 flex-1">
                  <div className="text-2xl">{getTypeIcon(currentPromotion.type)}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${currentPromotion.badgeColor}`}>
                        {currentPromotion.badge}
                      </span>
                      {currentPromotion.isNew && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          NEW
                        </span>
                      )}
                      {currentPromotion.isLimited && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          LIMITED
                        </span>
                      )}
                      {isExpiring && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <Calendar className="w-3 h-3 mr-1" />
                          EXPIRING SOON
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-sm md:text-base mb-1">
                      {currentPromotion.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm opacity-90">
                      {currentPromotion.description}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <Link
                    href={currentPromotion.href}
                    className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-all duration-200 text-sm"
                  >
                    {currentPromotion.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Close promotion"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      {autoRotate && promotions.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-white/50"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: rotationInterval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}

      {/* Navigation Dots */}
      {autoRotate && promotions.length > 1 && (
        <div className="absolute bottom-2 right-4 flex space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to promotion ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentPromotionBanner;