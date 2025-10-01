import React, { useState, useEffect } from 'react';
import { getActiveBanners, BannerConfig } from './BannerRegistry';

interface BannerCarouselProps {
  category?: 'breakthrough' | 'content' | 'product' | 'service' | 'event';
  maxBanners?: number;
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
  showAllAtOnce?: boolean;
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  category,
  maxBanners = 5,
  autoRotate = false,
  rotationInterval = 10000,
  showAllAtOnce = true,
}) => {
  const [activeBanners, setActiveBanners] = useState<BannerConfig[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const banners = getActiveBanners(category, maxBanners);
    setActiveBanners(banners);
  }, [category, maxBanners]);

  useEffect(() => {
    if (autoRotate && !showAllAtOnce && activeBanners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activeBanners.length);
      }, rotationInterval);

      return () => clearInterval(interval);
    }
  }, [autoRotate, showAllAtOnce, activeBanners.length, rotationInterval]);

  if (activeBanners.length === 0) {
    return null;
  }

  if (showAllAtOnce) {
    // Display all banners
    return (
      <div className="banner-carousel">
        {activeBanners.map((banner) => {
          const BannerComponent = banner.component;
          return <BannerComponent key={banner.id} />;
        })}
      </div>
    );
  }

  // Display one banner at a time with navigation
  const currentBanner = activeBanners[currentIndex];
  const BannerComponent = currentBanner.component;

  return (
    <div className="banner-carousel relative">
      <BannerComponent />
      
      {activeBanners.length > 1 && (
        <div className="banner-navigation flex justify-center gap-2 mt-4 pb-4">
          {activeBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
