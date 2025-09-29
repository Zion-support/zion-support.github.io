import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles, Zap, Star, TrendingUp } from 'lucide-react';

interface AdvertisingBannerProps {
  variant?: 'primary' | 'secondary' | 'success';
  dismissible?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  variant = 'primary',
  dismissible = true,
  autoHide = false,
  autoHideDelay = 10000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Solutions Available!",
      subtitle: "Transform your business with cutting-edge AI technology",
      cta: "Explore AI Services",
      link: "/services",
      icon: Sparkles,
      variant: 'primary' as const
    },
    {
      id: 2,
      title: "⚡ Free Cloud Migration Assessment",
      subtitle: "Get a comprehensive analysis of your current infrastructure",
      cta: "Get Started",
      link: "/contact",
      icon: Zap,
      variant: 'secondary' as const
    },
    {
      id: 3,
      title: "📊 Download Our Latest Whitepaper",
      subtitle: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      cta: "Download Now",
      link: "/resources",
      icon: TrendingUp,
      variant: 'success' as const
    },
    {
      id: 4,
      title: "🏆 View Our Success Stories",
      subtitle: "See how we've helped 500+ companies achieve remarkable results",
      cta: "View Portfolio",
      link: "/portfolio",
      icon: Star,
      variant: 'primary' as const
    }
  ];

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentPromotion = promotions[currentPromo];
  const IconComponent = currentPromotion.icon;

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'bg-gradient-to-r from-zion-blue to-zion-purple',
          text: 'text-white',
          cta: 'bg-white text-zion-blue hover:bg-zion-slate-light'
        };
      case 'secondary':
        return {
          bg: 'bg-gradient-to-r from-zion-cyan to-zion-blue',
          text: 'text-white',
          cta: 'bg-white text-zion-cyan hover:bg-zion-blue-light'
        };
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          text: 'text-white',
          cta: 'bg-white text-green-600 hover:bg-green-50'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-zion-blue to-zion-purple',
          text: 'text-white',
          cta: 'bg-white text-zion-blue hover:bg-zion-slate-light'
        };
    }
  };

  const styles = getVariantStyles(currentPromotion.variant);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${styles.bg} ${styles.text} shadow-lg animate-slide-down`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0">
              <IconComponent className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm md:text-base">{currentPromotion.title}</h3>
              <p className="text-xs md:text-sm opacity-90">{currentPromotion.subtitle}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              to={currentPromotion.link}
              className={`${styles.cta} px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 group`}
            >
              {currentPromotion.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white/60 transition-all duration-100 ease-linear"
            style={{
              width: '100%',
              animation: 'progress 8s linear infinite'
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default AdvertisingBanner;