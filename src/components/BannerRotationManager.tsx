import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
<<<<<<< HEAD
  'january2026-revolutionary': lazy(
    () => import('./January2026RevolutionaryBanner'),
  ),
  'january2026-content-showcase': lazy(
    () => import('./January2026ContentShowcaseBanner'),
  ),
  'january2026-new-content': lazy(
    () => import('./January2026NewContentShowcaseBanner'),
  ),
  'january2026-revolutionary-ai': lazy(
    () => import('./January2026RevolutionaryAIBanner'),
  ),
  'january2026-revolutionary-content': lazy(
    () => import('./January2026RevolutionaryContentBanner'),
  ),
  'january2026-revolutionary-breakthroughs': lazy(
    () => import('./January2026RevolutionaryBreakthroughsBanner'),
  ),
  'new-services-2026': lazy(() => import('./NewServicesPromoBanner2026')),
  'latest-2026-content': lazy(() => import('./Latest2026ContentBanner')),
  'breakthrough-content-2026': lazy(() => import('./BreakthroughContent2026Banner')),
  'enterprise-ai-fall-2025': lazy(() => import('./EnterpriseAIFall2025Banner')),
  'november-2025-game-changers': lazy(() => import('./November2025GameChangersBanner')),
  'march-2026-innovation': lazy(() => import('./March2026InnovationSpotlightBanner')),
  'february-2026-content': lazy(() => import('./February2026ContentShowcaseBanner')),
  'january-2027-content': lazy(() => import('./January2027ContentAdvertisingBanner')),
  'january-2027-new-content': lazy(() => import('./January2027NewContentShowcaseBanner')),
=======
  // Add banner components here as needed
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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
<<<<<<< HEAD
 * Manages banner display with lazy loading rotation and performance optimization
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
<<<<<<< HEAD
  banners = [
    'january2026-revolutionary',
    'january2026-content-showcase',
    'latest-2026-content',
  ],
  interval = 8000,
  autoRotate = false, // Disabled by default to reduce unnecessary re-renders
  maxBanners = 3,
=======
  banners = [],
  maxBanners = 3,
  interval = 5000,
  autoRotate = true,
  className = ''
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
 * Manages banner display with lazy loading, rotation, and performance optimization
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [],
  interval = 8000,
  autoRotate = true,
  maxBanners = 3
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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
<<<<<<< HEAD
<<<<<<< HEAD
    }, interval);
=======
      }, interval);
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
    }, interval);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163

    return () => clearInterval(timer);
  }, [autoRotate, interval, visibleBanners.length]);

  if (visibleBanners.length === 0) return null;

<<<<<<< HEAD
  // For non-rotating show all banners
=======
  // For non-rotating, show all banners
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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

<<<<<<< HEAD
  // For rotating show current banner with controls
=======
  // For rotating, show current banner with controls
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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
          {visibleBanners.map((_, index) => (
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

<<<<<<< HEAD
export default BannerRotationManager;
=======
export default BannerRotationManager;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
