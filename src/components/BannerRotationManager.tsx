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
 * Manages banner display with lazy loading, rotation, and performance optimization
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
  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || visibleBanners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % visibleBanners.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoRotate, interval, visibleBanners.length]);
  if (visibleBanners.length === 0) return null;
  // For non-rotating, show all banners
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
  // For rotating, show current banner with controls
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
export default BannerRotationManager;
import React { lazy Suspense useState useEffect } from ' react ' ; / / Define available banners with their import paths const bannerComponents = { ' january2026 - revolutionary ' : lazy ( ( ) = > import ( ' . / January2026RevolutionaryBanner ' ) ) ' new - services - 2026 ' : lazy ( ( ) = > import ( ' . / NewServicesPromoBanner2026 ' ) ) ' ai - trends - insights - 2026 ' : lazy ( ( ) = > import ( ' . / AITrendsInsightsBanner2026 ' ) ) ' breakthrough - content - 2026 ' : lazy ( ( ) = > import ( ' . / BreakthroughContent2026Banner ' ) ) ' cognitive - orchestration - mega ' : lazy ( ( ) = > import ( ' . / CognitiveOrchestrationMegaBanner ' ) ) ' comprehensive - promo ' : lazy ( ( ) = > import ( ' . / ComprehensivePromoBanner ' ) ) ' content - promotion ' : lazy ( ( ) = > import ( ' . / ContentPromotionBanner ' ) ) ' december2025 - revolutionary - breakthrough ' : lazy ( ( ) = > import ( ' . / December2025RevolutionaryBreakthroughContentBanner ' ) ) ' december2025 - revolutionary - content ' : lazy ( ( ) = > import ( ' . / December2025RevolutionaryContentShowcase ' ) ) ' enhanced - content - showcase - 2026 ' : lazy ( ( ) = > import ( ' . / EnhancedContentShowcase2026 ' ) ) ' enhanced - promotional ' : lazy ( ( ) = > import ( ' . / EnhancedPromotionalBanner ' ) ) ' enterprise - ai - fall - 2025 ' : lazy ( ( ) = > import ( ' . / EnterpriseAIFall2025Banner ' ) ) ' enterprise - solutions - showcase - 2026 ' : lazy ( ( ) = > import ( ' . / EnterpriseSolutionsShowcase2026 ' ) ) ' featured - content - 2025 ' : lazy ( ( ) = > import ( ' . / FeaturedContentBanner2025 ' ) ) ' february2026 - content - showcase ' : lazy ( ( ) = > import ( ' . / February2026ContentShowcaseBanner ' ) ) ' future - tech - showcase - 2026 ' : lazy ( ( ) = > import ( ' . / FutureTechShowcase2026 ' ) ) ' global - ai - transformation - hub ' : lazy ( ( ) = > import ( ' . / GlobalAITransformationHub ' ) ) ' january2025 - breakthrough - content ' : lazy ( ( ) = > import ( ' . / January2025BreakthroughContentBanner ' ) ) ' january2025 - content - showcase ' : lazy ( ( ) = > import ( ' . / January2025ContentShowcaseBanner ' ) ) ' january2025 - enterprise - success ' : lazy ( ( ) = > import ( ' . / January2025EnterpriseSuccessBanner ' ) ) ' january2026 - content - showcase ' : lazy ( ( ) = > import ( ' . / January2026ContentShowcaseBanner ' ) ) ' january2026 - new - content - showcase ' : lazy ( ( ) = > import ( ' . / January2026NewContentShowcaseBanner ' ) ) ' january2026 - revolutionary - ai ' : lazy ( ( ) = > import ( ' . / January2026RevolutionaryAIBanner ' ) ) ' january2026 - revolutionary - breakthroughs ' : lazy ( ( ) = > import ( ' . / January2026RevolutionaryBreakthroughsBanner ' ) ) ' january2026 - revolutionary - content ' : lazy ( ( ) = > import ( ' . / January2026RevolutionaryContentBanner ' ) ) ' january2027 - content - advertising ' : lazy ( ( ) = > import ( ' . / January2027ContentAdvertisingBanner ' ) ) ' january2027 - new - content - showcase ' : lazy ( ( ) = > import ( ' . / January2027NewContentShowcaseBanner ' ) ) ' latest2026 - content ' : lazy ( ( ) = > import ( ' . / Latest2026ContentBanner ' ) ) ' latest - content ' : lazy ( ( ) = > import ( ' . / LatestContentBanner ' ) ) }; export type BannerKey = keyof typeof bannerComponents; interface BannerRotationManagerProps { / * * Array of banner keys to display in rotation * / banners ? : BannerKey [ ]; / * * Rotation interval in milliseconds ( default: 8000 ) * / interval ? : number; / * * Whether to auto - rotate banners ( default: true ) * / autoRotate ? : boolean; / * * Maximum number of banners to show ( default: 3 ) * / maxBanners ? : number; } const LoadingFallback = ( ) = > ( < div className = ' bg - gradient - to - r from - purple - 900 / 40 to - blue - 900 / 40 rounded - xl p - 8 border border - purple - 500 / 30 animate - pulse ' > < div className = ' h - 32 bg - white / 10 rounded ' > < / div > < / div > ); / * * * Banner Rotation Manager Component * * Manages banner display with lazy loading rotation and performance optimization * / export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ( { banners = [ ' october2025 - new - breakthrough ' ' october2025 - tech - breakthrough ' ' october2025 - next - gen - ai ' ] interval = 8000 autoRotate = false / / Disabled by default to reduce unnecessary re - renders maxBanners = 3 } ) = > { const [ currentIndexsetCurrentIndex ] = useState ( 0 ); const [ visibleBannerssetVisibleBanners ] = useState < BannerKey [ ] > ( [ ] ); / / Select banners to display ( limit to maxBanners ) useEffect ( ( ) = > { const selected = banners.slice( 0 maxBanners ); setVisibleBanners ( selected ); } [ banners maxBanners ] ); / / Auto - rotation logic useEffect ( ( ) = > { if ( ! autoRotate | | visibleBanners.length < = 1 ) return; const timer = setInterval ( ( ) = > { setCurrentIndex ( prev = > ( prev + 1 ) % visibleBanners.length ); } interval ); return ( ) = > clearInterval ( timer ); } [ autoRotate interval visibleBanners.length ] ); if ( visibleBanners.length = = = 0 ) return null; / / For non - rotating show all banners if ( ! autoRotate ) { return ( < div className = ' space - y - 6 ' > { visibleBanners.map( bannerKey = > { const BannerComponent = bannerComponents [ bannerKey ]; return ( < Suspense key = { bannerKey } fallback = { < LoadingFallback / > } > < BannerComponent / > < / Suspense > ); } ) } < / div > ); } / / For rotating show current banner with controls const currentBannerKey = visibleBanners [ currentIndex ]; const CurrentBanner = bannerComponents [ currentBannerKey ]; return ( < div className = ' relative ' > < Suspense fallback = { < LoadingFallback / > } > < CurrentBanner / > < / Suspense > { / * Rotation controls ( if multiple banners ) * / } { visibleBanners.length > 1 & & ( < div className = ' flex justify - center gap - 2 mt - 4 ' > { visibleBanners.map( ( _ index ) = > ( < button key = { index } onClick = { ( ) = > setCurrentIndex ( index ) } className = { ` w - 3 h - 3 rounded - full transition - all $ { index = = = currentIndex ? ' bg - purple - 400 w - 8 ' : ' bg - white / 30 hover: bg - white / 50 ' } ` } aria - label = { ` Go to banner $ { index + 1 } ` } / > ) ) } < / div > ) } < / div > ); }; export default BannerRotationManager; $ $ 
