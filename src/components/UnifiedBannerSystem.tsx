import React, { useState, useEffect } from 'react';
import {

} from 'framer-motion';

export interface BannerConfig {
id: string;
title: string;
subtitle?: string;
description: string;
ctaText: string;
ctaLink: string;
imageUrl?: string;
priority: number;
category: string;
tags: string[];
backgroundColor?: string;
textColor?: string;
animation?: 'slide' | 'fade' | 'scale' | 'none';
duration?: number; // Auto-rotate duration in ms
}

interface UnifiedBannerSystemProps {
banners: BannerConfig[];
autoRotate?: boolean;
rotationInterval?: number;
showNavigation?: boolean;
maxVisible?: number;
}

const UnifiedBannerSystem: React.FC<UnifiedBannerSystemProps> = ({
  banners
  autoRotate = true
  rotationInterval = 5000
  showNavigation = true
  maxVisible = 3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBanners, setVisibleBanners] = useState<BannerConfig[]>([]);

  // Sort banners by priority and limit visible ones
  useEffect(() => {
    const sortedBanners = banners
      .sort((a, b) => b.priority - a.priority)
      .slice(0, maxVisible);
    setVisibleBanners(sortedBanners);
  }, [banners, maxVisible]);

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || visibleBanners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleBanners.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, visibleBanners.length]);

  const handleBannerClick = (banner: BannerConfig) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'banner_click', {
        banner_id: banner.id,
        banner_title: banner.title,
        category: banner.category
      });
    }
    
    // Navigate to banner link
    window.open(banner.ctaLink, '_blank', 'noopener,noreferrer');
  };

  const getAnimationVariants = (type: string = 'slide') => {
    switch (type) {
      case 'slide':
        return {
          initial: { x: '100%', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-100%', opacity: 0 }
        };
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case 'scale':
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 }
        };
      default:
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 }
        };
    }
  };

  if (visibleBanners.length === 0) return null;

  return (
    <div className="unified-banner-system">
      <div className="banner-container relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {visibleBanners.map((banner, index) => {
            const isActive = index === currentIndex;
            const variants = getAnimationVariants(banner.animation);
            
            return (
              <motion.div
                key={banner.id}
                variants={variants}
                initial="initial"
                animate={isActive ? "animate" : "initial"}
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`banner-item ${isActive ? 'active' : 'hidden'}`}
                style={{
                  backgroundColor: banner.backgroundColor || '#1e40af',
                  color: banner.textColor || '#ffffff'
                }}
              >
                <div className="banner-content p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {banner.title}
                      </h2>
                      {
banner.subtitle && (
<h3 className="text-lg md:text-xl font-semibold mb-3 opacity-90">
{banner.subtitle
}
                        </h3>
                      )}
                      <p className="text-base md:text-lg mb-6 opacity-80">
                        {banner.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {banner.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => handleBannerClick(banner)}
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                      >
                        {banner.ctaText}
                      </button>
                    </div>
                    {banner.imageUrl && (
                      <div className="flex-shrink-0">
                        <img
                          src={banner.imageUrl}
                          alt={banner.title}
                          className="w-48 h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {showNavigation && visibleBanners.length > 1 && (
        <div className="banner-navigation mt-4 flex justify-center gap-2">
          {visibleBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style jsx>{
`
.banner-item {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
        
        .banner-item.hidden {
          pointer-events: none;
        }
        
        .banner-container {
min-height: 300px;
position: relative;
}
        
        @media (max-width: 768px) {
          .banner-container {
            min-height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default UnifiedBannerSystem;