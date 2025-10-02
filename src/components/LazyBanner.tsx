import React, { Suspense, lazy } from 'react';

// Lazy load banner components (using existing components)
const January2026NewContentShowcaseBanner = lazy(() => import('./January2026NewContentShowcaseBanner'));
const CognitiveOrchestrationMegaBanner = lazy(() => import('./CognitiveOrchestrationMegaBanner'));
const October2025CognitiveHyperautomationBanner = lazy(() => import('./October2025CognitiveHyperautomationBanner'));
const October2025NewContentBanner = lazy(() => import('./October2025NewContentBanner'));
const October2025NewContentMegaLaunchBanner = lazy(() => import('./October2025NewContentMegaLaunchBanner'));
const Revolutionary2026ContentMegaBanner = lazy(() => import('./Revolutionary2026ContentMegaBanner'));
const UltimateContentAdvertisingBanner = lazy(() => import('./UltimateContentAdvertisingBanner'));
const AIInnovationAdvertisingBanner = lazy(() => import('./AIInnovationAdvertisingBanner'));

// Loading component
const BannerSkeleton = () => (
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-6 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="h-8 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2 w-1/2"></div>
    </div>
  </div>
);

// Wrapper component for lazy loading
export const LazyBannerWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<BannerSkeleton />}>
    {children}
  </Suspense>
);

// Export lazy components
export {
  January2026NewContentShowcaseBanner,
  CognitiveOrchestrationMegaBanner,
  October2025CognitiveHyperautomationBanner,
  October2025NewContentBanner,
  October2025NewContentMegaLaunchBanner,
  Revolutionary2026ContentMegaBanner,
  UltimateContentAdvertisingBanner,
  AIInnovationAdvertisingBanner,
};