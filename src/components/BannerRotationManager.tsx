import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
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
};

type BannerKey = keyof typeof bannerComponents;

interface BannerRotationManagerProps {
  banners?: BannerKey[];
  maxBanners?: number;
  rotationInterval?: number;
  className?: string;
}

/**
 * Banner Rotation Manager Component
 *
 * Manages banner display with lazy loading rotation and performance optimization
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [
    'january2026-revolutionary',
    'january2026-content-showcase',
    'latest-2026-content',
  ],
  interval = 8000,
  autoRotate = false, // Disabled by default to reduce unnecessary re-renders
  maxBanners = 3,
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
      setCurrentIndex((prev) => (prev + 1) % visibleBanners.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [visibleBanners.length, rotationInterval]);

  if (visibleBanners.length === 0) return null;

  // For non-rotating show all banners
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

  // For rotating show current banner with controls
  const currentBannerKey = visibleBanners[currentIndex];
  const CurrentBanner = bannerComponents[currentBannerKey];

  return (
    <div className={`banner-rotation-manager ${className}`}>
      <Suspense fallback={
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        <BannerComponent />
      </Suspense>
      
      {/* Banner indicators */}
      {visibleBanners.length > 1 && (
        <div className='flex justify-center gap-2 mt-4'>
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
        </div>
      )}
    </div>
  );
};

export default BannerRotationManager;