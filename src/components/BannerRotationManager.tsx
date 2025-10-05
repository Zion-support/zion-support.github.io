import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
  'ai-innovation': lazy(() => import('./AIInnovationAdvertisingBanner')),
  'ai-trends': lazy(() => import('./AITrendsInsightsBanner2026')),
  'comprehensive-promo': lazy(() => import('./ComprehensivePromoBanner')),
  'content-showcase': lazy(() => import('./ContentShowcase')),
  'december-revolutionary': lazy(() => import('./December2025RevolutionaryBreakthroughContentBanner')),
};

type BannerKey = keyof typeof bannerComponents;

interface BannerRotationManagerProps {
  banners?: BannerKey[];
  maxBanners?: number;
  rotationInterval?: number;
  className?: string;
}

/**
 * BannerRotationManager - Manages the rotation and display of promotional banners
 * 
 * Features:
 * - Lazy loads banner components for better performance
 * - Rotates banners at specified intervals
 * - Limits the number of visible banners
 * - Provides fallback loading states
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [],
  maxBanners = 3,
  rotationInterval = 10000,
  className = ''
}) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Get available banner keys
  const availableBanners = Object.keys(bannerComponents) as BannerKey[];
  const bannersToShow = banners.length > 0 ? banners : availableBanners.slice(0, maxBanners);

  useEffect(() => {
    if (bannersToShow.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        (prevIndex + 1) % bannersToShow.length
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [bannersToShow.length, rotationInterval]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentBannerIndex]);

  if (bannersToShow.length === 0) {
    return null;
  }

  const currentBanner = bannersToShow[currentBannerIndex];
  const BannerComponent = bannerComponents[currentBanner];

  return (
    <div className={`banner-rotation-manager ${className}`}>
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <Suspense fallback={
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        }>
          <BannerComponent />
        </Suspense>
      )}

      {/* Banner indicators */}
      {bannersToShow.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {bannersToShow.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentBannerIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerRotationManager;