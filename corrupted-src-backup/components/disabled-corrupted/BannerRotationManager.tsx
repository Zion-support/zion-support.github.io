import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
  'ai-innovation': lazy(() => import('./AIInnovationAdvertisingBanner')),
  'ai-trends': lazy(() => import('./AITrendsInsightsBanner2026')),
  'ai-cost-optimization': lazy(() => import('./AICostOptimizationBanner')),
  'breakthrough-content': lazy(() => import('./BreakthroughContent2026Banner')),
  'comprehensive-promo': lazy(() => import('./ComprehensivePromoBanner')),
  advertising: lazy(() => import('./AdvertisingBanner')),
  'content-showcase': lazy(() => import('./ContentShowcase')),
  'content-value-testimonials': lazy(
    () => import('./ContentValueTestimonials')
  ),
  'december-revolutionary': lazy(
    () => import('./December2025RevolutionaryContentShowcase')
  ),
  'cognitive-orchestration': lazy(
    () => import('./CognitiveOrchestrationMegaBanner')
  ),
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
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBanners, setVisibleBanners] = useState<BannerKey[]>([]);

  // Select banners to display (limit to maxBanners)
  useEffect(() => {
    const selected = banners.slice(0, maxBanners);
    setVisibleBanners(selected);
  }, [banners, maxBanners]);

  // Rotate banners at specified interval
  useEffect(() => {
    if (visibleBanners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % visibleBanners.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [visibleBanners.length, rotationInterval]);

  if (visibleBanners.length === 0) {
    return null;
  }

  const currentBanner = visibleBanners[currentIndex];
  const BannerComponent = bannerComponents[currentBanner];

  return (
    <div className={`banner-rotation-manager ${className}`}></div>
      <Suspense
        fallback={
          <div className='flex items-center justify-center py-16'></Suspense>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          </div>
        }
      >
        <BannerComponent />
      </Suspense>

      {/* Banner indicators */}
      {visibleBanners.length > 1 && (
        <div className='flex justify-center mt-4 space-x-2'></div>
          {visibleBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </button></div>
      )}
    </div>
  );
};

export default BannerRotationManager;
