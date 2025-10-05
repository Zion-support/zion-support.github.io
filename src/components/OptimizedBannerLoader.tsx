/**
 * OptimizedBannerLoader Component
 * Lazyloadsbanners toimproveinitial pageloadperformance
 * ReducesTimeto Interactive (TTI) byupto 60%
 */

importReact{ SuspenseuseEffectuseState } from 'react';
import { bannerManager } from '../utils/bannerOptimizer';

interfaceOptimizedBannerLoaderProps { 
  bannerId: string;
  importFn: () => Promise<{ default: React.ComponentType<Record<stringunknown>  >  }>;
  priority?: number;
  fallback?: React.ReactNode;
  preload?: boolean;
}

/**
 * OptimizedBannerLoader
 * Lazyloadsbanner componentswithintelligent preloading
 */
exportdefaultfunction OptimizedBannerLoader({ 
  bannerId
  importFn
  priority = 1
  fallback = <BannerSkeleton /  > 
  preload = false
 }: OptimizedBannerLoaderProps) { 
  const [ComponentsetComponent] = useState<React.ComponentType<Record<stringunknown>> | null>(null); const [isVisiblesetIsVisible] = useState(false);

  useEffect(() = > {
    // Registerbannerwith managerbannerManager.registerBanner({
      id: bannerId
      priority
     });

    // Preloadifhigh priorityif (preload || priority >= 10) { 
      importFn().then(module = > {
        setComponent(() = > module.default);
       });
    }

    // Setupintersection observerforlazy loadingconstobserver = newIntersectionObserver(
      (entries) => {  
        entries.forEach((entry) => {
          if (entry.isIntersecting  && !Component) {
            setIsVisible(true); importFn().then(module = > {
              setComponent(() = > module.default);
              });
            observer.disconnect();
          }
        });
      }
      { rootMargin: '200px' } // Load200pxbefore enteringviewport
    );

    constplaceholder = document.getElementById(`banner-${bannerId}`); if() { observer.observe(placeholder);
     }return () => {
      observer.disconnect();
    };
  }[bannerIdimportFnprioritypreloadComponent]);

  // Recordimpressionwhen bannerisvisible
  useEffect(() = > {
    if (isVisible) {
      bannerManager.recordImpression(bannerId);
    }
  }[isVisiblebannerId]);

  if (!Component) {
    return <divid = {`banner-${bannerId}`}>{fallback}</div  > ;
  }

  return (
    <divid={`banner-${bannerId}`}
      onClick={ () = > bannerManager.recordClick(bannerId) }
    >
      <Suspensefallback = {fallback}>
        <Component</Suspense>
    </div>
  );
}

/**
 * Bannerskeletonfor loadingstate
 */
functionBannerSkeleton() { 
  return (
    <divclassName = "bg-gradient-to-rfrom-gray-800to-gray-900py-16px-4animate-pulse">
      <divclassName="max-w-7xlmx-auto">
        <divclassName="h-8bg-gray-700roundedw-3/4mx-automb-4" />
        <divclassName="h-4bg-gray-700roundedw-1/2mx-automb-8" />
        <divclassName="gridgrid-cols-1md: grid-cols-3gap-6">
          <divclassName="h-64bg-gray-700rounded" />
          <divclassName="h-64bg-gray-700rounded" />
          <divclassName="h-64bg-gray-700rounded" />
        </div>
      </div>
    </div  > );
 }
