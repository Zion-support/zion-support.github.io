import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
  'october2025-tech-breakthrough': lazy(() => import('./October2025TechBreakthroughBanner')),
  'october2025-next-gen-ai': lazy(() => import('./October2025NextGenAIBanner')),
  'october2025-operational-excellence': lazy(() => import('./October2025OperationalExcellenceBanner')),
  'october2025-edge-ai-quantum': lazy(() => import('./October2025EdgeAIQuantumCryptoBanner')),
  'october2025-breakthrough-content': lazy(() => import('./October2025BreakthroughContentBanner')),
  'october2025-ai-revolution': lazy(() => import('./October2025AIRevolutionBanner')),
  'october2025-new-content': lazy(() => import('./October2025NewContentBanner')),
  'october2025-new-breakthrough': lazy(() => import('./October2025NewBreakthroughBanner')),
  'october2025-document-automation': lazy(() => import('./October2025DocumentAutomationBanner')),
  'october2025-revops': lazy(() => import('./October2025RevOpsBanner')),
  'january2026-revolutionary': lazy(() => import('./January2026RevolutionaryBanner')),
  'new-services-2026': lazy(() => import('./NewServicesPromoBanner2026')),
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
  <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-8 border border-purple-500/30 animate-pulse">
    <div className="h-32 bg-white/10 rounded"></div>
  </div>
);

/**
 * Banner Rotation Manager Component
 * 
 * Manages banner display with lazy loading, rotation, and performance optimization
 */
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [
    'october2025-new-breakthrough',
    'october2025-tech-breakthrough',
    'october2025-next-gen-ai',
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

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || visibleBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleBanners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, visibleBanners.length]);

  if (visibleBanners.length === 0) return null;

  // For non-rotating, show all banners
  if (!autoRotate) {
    return (
      <div className="space-y-6">
        {visibleBanners.map((bannerKey) => {
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

  // For rotating, show current banner with controls
  const currentBannerKey = visibleBanners[currentIndex];
  const CurrentBanner = bannerComponents[currentBannerKey];

  return (
    <div className="relative">
      <Suspense fallback={<LoadingFallback />}>

        <CurrentBanner />
      </Suspense>

      {/* Rotation controls (if multiple banners) */}
      {visibleBanners.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
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

export default BannerRotationManager;
