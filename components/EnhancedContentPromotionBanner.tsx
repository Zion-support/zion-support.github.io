import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, TrendingUp, Zap, Globe, Leaf, Users } from 'lucide-react';

interface EnhancedContentPromotionBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'premium';
  isVisible?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const contentPromotions = [
  {
    id: 1,
    title: "🎨 HOT: The Generative AI Revolution 2025",
    description: "Discover how generative AI is transforming business operations with 10x content output and practical implementation strategies",
    ctaText: "Read Full Article",
    ctaHref: "/blog/ai-2025-generative-ai-revolution",
    badge: "HOT",
    badgeColor: "bg-purple-100 text-purple-800",
    metrics: "10x Content Output",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    title: "⚖️ CRITICAL: Ethical AI Governance Guide",
    description: "Build trustworthy AI systems with comprehensive ethics frameworks and governance strategies for 95% trust scores",
    ctaText: "Learn AI Ethics",
    ctaHref: "/blog/ai-2025-ethical-ai-governance",
    badge: "CRITICAL",
    badgeColor: "bg-green-100 text-green-800",
    metrics: "95% Trust Score",
    icon: <Globe className="w-5 h-5" />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    title: "⚡ BREAKTHROUGH: Edge Computing Revolution",
    description: "Unlock real-time AI processing with edge computing solutions that reduce latency by 90% and enable new applications",
    ctaText: "Explore Edge AI",
    ctaHref: "/blog/ai-2025-edge-computing-revolution",
    badge: "BREAKTHROUGH",
    badgeColor: "bg-orange-100 text-orange-800",
    metrics: "90% Latency Reduction",
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: "from-orange-500 to-red-600"
  }
];

export default function EnhancedContentPromotionBanner({
  variant = 'default',
  isVisible = true,
  autoRotate = true,
  rotationInterval = 8000
}: EnhancedContentPromotionBannerProps) {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate promotions
  React.useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % contentPromotions.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, isHovered]);

  if (!isVisible) return null;

  const promotion = contentPromotions[currentPromotion];

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: `bg-gradient-to-r ${promotion.gradient}`,
          text: 'text-white',
          button: 'bg-white text-gray-800 hover:bg-gray-100'
        };
      case 'warning':
        return {
          container: 'bg-gradient-to-r from-orange-500 to-red-500',
          text: 'text-white',
          button: 'bg-white text-orange-600 hover:bg-gray-100'
        };
      case 'info':
        return {
          container: 'bg-gradient-to-r from-blue-500 to-cyan-500',
          text: 'text-white',
          button: 'bg-white text-blue-600 hover:bg-gray-100'
        };
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-purple-500 to-pink-500',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-gray-100'
        };
      default:
        return {
          container: `bg-gradient-to-r ${promotion.gradient}`,
          text: 'text-white',
          button: 'bg-white text-gray-800 hover:bg-gray-100'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${styles.container}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                {promotion.icon}
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${promotion.badgeColor}`}>
                  {promotion.badge}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm opacity-90">
                <Star className="w-4 h-4 fill-current" />
                <span>{promotion.metrics}</span>
              </div>
            </div>
            
            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${styles.text}`}>
              {promotion.title}
            </h3>
            
            <p className={`text-base md:text-lg mb-4 opacity-90 ${styles.text}`}>
              {promotion.description}
            </p>

            <Link
              href={promotion.ctaHref}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${styles.button} hover:scale-105 hover:shadow-lg`}
            >
              {promotion.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Progress indicators */}
          <div className="flex gap-2">
            {contentPromotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromotion(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPromotion 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <div className="animate-pulse">
          <Globe className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}