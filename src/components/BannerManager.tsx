import React, { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load banner components for better performance
const AI2033UniversalConsciousnessBanner = lazy(() => import('../../components/AI2033UniversalConsciousnessBanner'));
const January2032TranscendentContentBanner = lazy(() => import('../../components/January2032TranscendentContentBanner'));
const TranscendentIntelligenceAdvertisingBanner = lazy(() => import('../../components/TranscendentIntelligenceAdvertisingBanner'));
const September2025NewContentBanner = lazy(() => import('../../components/September2025NewContentBanner'));
const October2026NewContentBanner = lazy(() => import('../../components/October2026NewContentBanner'));
const November2026UniversalIntelligenceBanner = lazy(() => import('../../components/November2026UniversalIntelligenceBanner'));
const December2026SingularityAchievementBanner = lazy(() => import('../../components/December2026SingularityAchievementBanner'));

// Banner configuration with priority and display settings
const BANNER_CONFIG = [
  {
    id: 'ai-2033-universal-consciousness',
    component: AI2033UniversalConsciousnessBanner,
    priority: 1,
    category: 'breakthrough',
    displayTime: 30000, // 30 seconds
  },
  {
    id: 'january-2032-transcendent',
    component: January2032TranscendentContentBanner,
    priority: 2,
    category: 'content',
    displayTime: 25000,
  },
  {
    id: 'transcendent-intelligence-advertising',
    component: TranscendentIntelligenceAdvertisingBanner,
    priority: 3,
    category: 'advertising',
    displayTime: 20000,
  },
  {
    id: 'september-2025-new-content',
    component: September2025NewContentBanner,
    priority: 4,
    category: 'content',
    displayTime: 15000,
  },
  {
    id: 'october-2026-new-content',
    component: October2026NewContentBanner,
    priority: 5,
    category: 'content',
    displayTime: 15000,
  },
  {
    id: 'november-2026-universal-intelligence',
    component: November2026UniversalIntelligenceBanner,
    priority: 6,
    category: 'breakthrough',
    displayTime: 20000,
  },
  {
    id: 'december-2026-singularity-achievement',
    component: December2026SingularityAchievementBanner,
    priority: 7,
    category: 'breakthrough',
    displayTime: 25000,
  },
];

interface BannerManagerProps {
  maxVisibleBanners?: number;
  rotationInterval?: number;
  enableRotation?: boolean;
}

const BannerManager: React.FC<BannerManagerProps> = ({
  maxVisibleBanners = 3,
  rotationInterval = 10000,
  enableRotation = true,
}) => {
  const [visibleBanners, setVisibleBanners] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize visible banners
  useEffect(() => {
    const initialBanners = BANNER_CONFIG
      .slice(0, maxVisibleBanners)
      .map((_, index) => index);
    setVisibleBanners(initialBanners);
  }, [maxVisibleBanners]);

  // Banner rotation logic
  useEffect(() => {
    if (!enableRotation || BANNER_CONFIG.length <= maxVisibleBanners) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % BANNER_CONFIG.length;
        
        // Rotate banners by showing next set
        const newVisibleBanners = [];
        for (let i = 0; i < maxVisibleBanners; i++) {
          const bannerIndex = (nextIndex + i) % BANNER_CONFIG.length;
          newVisibleBanners.push(bannerIndex);
        }
        
        setVisibleBanners(newVisibleBanners);
        return nextIndex;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [enableRotation, rotationInterval, maxVisibleBanners]);

  // Loading component for lazy-loaded banners
  const BannerLoader = () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span className="ml-2 text-gray-600">Loading banner...</span>
    </div>
  );

  return (
    <div className="banner-manager">
      {visibleBanners.map((bannerIndex) => {
        const banner = BANNER_CONFIG[bannerIndex];
        if (!banner) return null;

        const BannerComponent = banner.component;

        return (
          <div
            key={banner.id}
            className={`banner-item priority-${banner.priority} category-${banner.category}`}
            style={{
              animationDuration: `${banner.displayTime}ms`,
            }}
          >
            <Suspense fallback={<BannerLoader />}>
              <BannerComponent />
            </Suspense>
          </div>
        );
      })}
      
      {/* Banner navigation indicators */}
      {enableRotation && BANNER_CONFIG.length > maxVisibleBanners && (
        <div className="banner-indicators flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(BANNER_CONFIG.length / maxVisibleBanners) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / maxVisibleBanners) === index
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
              onClick={() => {
                const newIndex = index * maxVisibleBanners;
                setCurrentIndex(newIndex);
                const newVisibleBanners = [];
                for (let i = 0; i < maxVisibleBanners; i++) {
                  const bannerIndex = (newIndex + i) % BANNER_CONFIG.length;
                  newVisibleBanners.push(bannerIndex);
                }
                setVisibleBanners(newVisibleBanners);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerManager;