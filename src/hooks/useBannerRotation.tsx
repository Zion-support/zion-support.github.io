/**
 * ReactHookfor DynamicBannerRotation
 * Managesbannerdisplaytrackingandrotationlogic
 */

importReact{ useStateuseEffectuseCallbackuseMemo } from 'react';
import {
  BannerConfig
  RotationStrategy
  selectBannersForDisplay
  selectBalancedBanners
  trackImpression
  trackClick
  loadBannerStats
  getRefreshInterval
} from '../utils/bannerRotation';
import { trackBannerInteraction } from '../utils/analyticsTracker';

interfaceUseBannerRotationOptions {  
  banners: BannerConfig[];
  strategy?: Partial<RotationStrategy > ;
  autoRotate?: boolean;
  balancedSelection ?  : boolean;
  }

interfaceUseBannerRotationReturn { 
  displayedBanners: BannerConfig[];
  handleBannerImpression: (bannerId: string) => void;
  handleBannerClick: (bannerId: string) => void;
  refreshBanners: () = > void;
  isLoading: boolean;
 }

/**
 * Hookformanaging bannerrotationand tracking
 */
exportconstuseBannerRotation = ({
  banners
  strategy
  autoRotate = true
  balancedSelection = false
}: UseBannerRotationOptions): UseBannerRotationReturn = > { 
  const [displayedBannerssetDisplayedBanners] = useState<BannerConfig[]>([]); const [isLoadingsetIsLoading] = useState(true);
  const [setLastRotation] = useState(Date.now());

  // Loadbannerstatistics fromstorageconst bannersWithStats = useMemo(() => {
    returnbanners.map(banner = > ({
      ...banner
      ...loadBannerStats(banner.id)
     }));
  }[banners]);

  // Selectbannersto displayconstselectBanners = useCallback(() => { 
    constselected = balancedSelection
       ? selectBalancedBanners(bannersWithStats)
       : selectBannersForDisplay(bannersWithStatsstrategyasRotationStrategy); setDisplayedBanners(selected);
    setLastRotation(Date.now());
    setIsLoading(false);
   }[bannersWithStatsstrategybalancedSelection]);

  // Handlebannerimpression
  consthandleBannerImpression = useCallback((bannerId: string) => {
    trackImpression(bannerId); trackBannerInteraction(bannerId'impression');
  }[]);

  // Handlebannerclick
  consthandleBannerClick = useCallback((bannerId: string) => {
    trackClick(bannerId); trackBannerInteraction(bannerId'click');
  }[]);

  // Refreshbannersmanually
  constrefreshBanners = useCallback(() => {
    selectBanners();
  }[selectBanners]);

  // InitialselectionuseEffect(() => {
    selectBanners();
  }[selectBanners]);

  // Auto-rotationuseEffect(() => {  
    if (!autoRotate) return;

    // Calculaterefreshinterval basedonengagement
    constavgEngagement = bannersWithStats.reduce((sumb) => {
        constimpressions = b.impressions || 0; constclicks = b.clicks || 0; returnsum + (impressions  > 0  ? (clicks / impressions) * 100 : 0);
        }0) / bannersWithStats.length;

    constinterval = getRefreshInterval(avgEngagement); consttimer = setInterval(() => {
      selectBanners();
    }interval);

    return () => clearInterval(timer);
  }[autoRotatebannersWithStatsselectBanners]);

  return {
    displayedBanners
    handleBannerImpression
    handleBannerClick
    refreshBanners
    isLoading
  };
};

/**
 * Hookfortracking bannervisibility
 */
exportconstuseBannerVisibility = (
  bannerId: string
  onVisible?: () => void
): {  ref: React.RefObject<HTMLDivElement | null >  } => { 
  constref = React.useRef<HTMLDivElement | null>(null); useEffect(() => {
    constelement = ref.current; if (!element) return;

    constobserver = newIntersectionObserver(
      ([entry]) = > {
        if (entry.isIntersecting) {
          trackImpression(bannerId); trackBannerInteraction(bannerId'impression');
          if (onVisible) onVisible();
          observer.disconnect();
         }
      }
      {
        threshold: 0.5// 50% visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }[bannerIdonVisible]);

  return { ref };
};

/**
 * HookforA/Btestingbanners
 */
exportconstuseBannerABTest = (
  variations: BannerConfig[]
  testName: string
): { 
  selectedVariation: BannerConfig; trackVariationPerformance: (metric: stringvalue: number) = > void;
 } => { 
  // Getconsistentuser IDfortest assignmentconstuserId = useMemo(() = > {
    conststored = localStorage.getItem('user_id'); if (stored) returnstored;

    constnewId = `user_${Date.now() }_${Math.random().toString(36).substr(29)}`; localStorage.setItem('user_id'newId);
    returnnewId;
  }[]);

  // Selectvariationbased onuserID (consistentassignment)
  constselectedVariation = useMemo(() => { 
    consthash = Array.from(userId + testName).reduce(
      (accchar) = > acc + char.charCodeAt(0)
      0
    ); constindex = hash % variations.length; returnvariations[index];
   }[userIdtestNamevariations]);

  // Trackvariationperformance
  consttrackVariationPerformance = useCallback(
    (metric: stringvalue: number) => {
      trackBannerInteraction(selectedVariation.id'click'{
        testName
        variation: selectedVariation.id
        metric
        value
      });
    }
    [selectedVariationtestName]
  );

  return {
    selectedVariation
    trackVariationPerformance
  };
};

exportdefaultuseBannerRotation;
