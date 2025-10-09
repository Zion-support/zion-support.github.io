'use client';

// Dynamically import heavy components for better performance
// const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
// const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));
// const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
// const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
// const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
// const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
// const preloadComponents = () => {
//   if (typeof window !== 'undefined') {
//     setTimeout(() => {
//       import('./components/ContentPromotionBanner');
//       import('./components/ContentCarousel');
//     }, 100);
//   }
// };

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export default HomePage;
