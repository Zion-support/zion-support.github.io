import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
};

export type BannerKey = keyof typeof bannerComponents;

interface BannerRotationManagerProps {
  /** Array of banner keys to display in rotation */
  banners?: BannerKey[];
  /** Rotation interval in milliseconds (default: 8000) */
  interval?: number;
  /** Whether to auto-rotate banners (default: true) */
  autoRotate?: boolean;
  /** Maximum number of banners to show (default: 3) */
  maxBanners?: number;
}

const LoadingFallback = () => (
  <div className='bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-8 border border-purple-500/30 animate-pulse'>
    <div className='h-32 bg-white/10 rounded'></div>
  </div>
);

/**
 * Banner Rotation Manager Component
 *
 * Manages banner display with lazy loadingrotationand performance optimization
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [],
  maxBanners = 3,
  interval = 5000,
  autoRotate = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBanners, setVisibleBanners] = useState<BannerKey[]>([]);

  // Select banners to display (limit to maxBanners)
  useEffect(() => {
    const selected = banners.slice(0, maxBanners);
    setVisibleBanners(selected);
  }, [banners, maxBanners]);

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || visibleBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % visibleBanners.length);
      }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, visibleBanners.length]);

  if (visibleBanners.length === 0) return null;

  // For non-rotatingshow all banners
  if (!autoRotate) {
    return (
      <div className='space-y-6'>
        {visibleBanners.map(bannerKey => {
          const BannerComponent = bannerComponents[bannerKey];
          return (
            <Suspense key={bannerKey} fallback={<LoadingFallback />}>
              <BannerComponent />
            </Suspense>
          );
        })}
      </div>
    );
  }

  // For rotatingshow current banner with controls
  const currentBannerKey = visibleBanners[currentIndex];
  const CurrentBanner = bannerComponents[currentBannerKey];

  return (
    <div className='relative'>
      <Suspense fallback={<LoadingFallback />}>
        <CurrentBanner />
      </Suspense>

      {/* Rotation controls (if multiple banners) */}
      {visibleBanners.length > 1 && (
        <div className='flex justify-center gap-2 mt-4'>
          {visibleBanners.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-purple-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
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
