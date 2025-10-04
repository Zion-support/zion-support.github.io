<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { X, Image, Code, Database, Settings, Zap, Wifi } from 'lucide-react';

interface PerformanceOptimizerProps {
  isVisible: boolean;
  onClose: () => void;
}

// interface PerformanceMetrics {
//   cls: number | null;
//   fid: number | null;
//   fcp: number | null;
//   lcp: number | null;
//   ttfb: number | null;
//   score: number;
// }

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  isVisible,
  onClose
}) => {
  const [optimizations, setOptimizations] = useState({
    imageOptimization: true,
    codeSplitting: true,
    lazyLoading: true,
    caching: true,
    compression: true,
    cdn: false
  });

  const [currentOptimizations, setCurrentOptimizations] = useState<string[]>([]);

  const runOptimizations = useCallback(async () => {
    const optimizationsList: string[] = [];
    
    if (optimizations.imageOptimization) {
      optimizationsList.push('Optimizing images...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      optimizationsList.push('✓ Images optimized');
    }
    
    if (optimizations.codeSplitting) {
      optimizationsList.push('Enabling code splitting...');
      await new Promise(resolve => setTimeout(resolve, 800));
      optimizationsList.push('✓ Code splitting enabled');
    }
    
    if (optimizations.lazyLoading) {
      optimizationsList.push('Implementing lazy loading...');
      await new Promise(resolve => setTimeout(resolve, 600));
      optimizationsList.push('✓ Lazy loading implemented');
    }
    
    if (optimizations.caching) {
      optimizationsList.push('Configuring caching...');
      await new Promise(resolve => setTimeout(resolve, 700));
      optimizationsList.push('✓ Caching configured');
    }
    
    if (optimizations.compression) {
      optimizationsList.push('Enabling compression...');
      await new Promise(resolve => setTimeout(resolve, 500));
      optimizationsList.push('✓ Compression enabled');
    }
    
    setCurrentOptimizations(optimizationsList);
  }, [optimizations]);

  useEffect(() => {
    if (isVisible) {
      runOptimizations();
    }
  }, [isVisible, runOptimizations]);

  const handleOptimizationToggle = (key: keyof typeof optimizations) => {
    setOptimizations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const optimizationOptions = [
    {
      key: 'imageOptimization' as const,
      label: 'Image Optimization',
      description: 'Compress and optimize images for faster loading',
      icon: Image,
      enabled: optimizations.imageOptimization
    },
    {
      key: 'codeSplitting' as const,
      label: 'Code Splitting',
      description: 'Split code into smaller chunks for better performance',
      icon: Code,
      enabled: optimizations.codeSplitting
    },
    {
      key: 'lazyLoading' as const,
      label: 'Lazy Loading',
      description: 'Load content only when needed',
      icon: Database,
      enabled: optimizations.lazyLoading
    },
    {
      key: 'caching' as const,
      label: 'Browser Caching',
      description: 'Enable aggressive caching strategies',
      icon: Settings,
      enabled: optimizations.caching
    },
    {
      key: 'compression' as const,
      label: 'Gzip Compression',
      description: 'Compress assets for faster transfer',
      icon: Zap,
      enabled: optimizations.compression
    },
    {
      key: 'cdn' as const,
      label: 'CDN Integration',
      description: 'Use Content Delivery Network for global performance',
      icon: Wifi,
      enabled: optimizations.cdn
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {optimizationOptions.map((option) => (
          <div
            key={option.key}
            className={`p-4 border rounded-lg transition-colors ${
              option.enabled
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <option.icon
                  className={`h-5 w-5 ${
                    option.enabled ? 'text-green-600' : 'text-gray-400'
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    {option.label}
                  </h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={option.enabled}
                      onChange={() => handleOptimizationToggle(option.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {option.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {currentOptimizations.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Optimization Progress</h3>
          <div className="space-y-1">
            {currentOptimizations.map((optimization, index) => (
              <div
                key={index}
                className={`text-sm ${
                  optimization.startsWith('✓') ? 'text-green-600' : 'text-gray-600'
                }`}
              >
                {optimization}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Close
        </button>
        <button
          onClick={() => {
            setCurrentOptimizations([]);
            // Trigger re-optimization
          }}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply Optimizations
        </button>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
=======
import React, {useEffectuseState }from 'react'; interface PerformanceMetrics {fcp: number | null; lcp: number | null; fid: number | null; cls: number | null; ttfb: number | null; }interface PerformanceOptimizerProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void; enableReporting?: boolean; }export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps > = ({onMetricsUpdateenableReporting = true }) => {const [metricssetMetrics] = useState<PerformanceMetrics > ({fcp: nulllcp: nullfid: nullcls: nullttfb: null }) ; useEffect ( () => {if (!enableReporting) return; // Import web-vitals dynamically to avoid bundle bloat import ("web-vitals') .then (webVitals = > {const {onCLSonINPonFCPonLCPonTTFB }= webVitals; onCLS (metric = > {setMetrics (prev => {const newMetrics = {...prevcls: metric.value }; onMetricsUpdate ? . (newMetrics) ; return newMetrics; }) ; }) ; onINP (metric = > {setMetrics (prev => {const newMetrics = {...prevfid : metric.value }; onMetricsUpdate ? . (newMetrics) ; return newMetrics; }) ; }) ; onFCP (metric = > {setMetrics (prev => {const newMetrics = {...prevfcp : metric.value }; onMetricsUpdate ? . (newMetrics) ; return newMetrics; }) ; }) ; onLCP (metric = > {setMetrics (prev => {const newMetrics = {...prevlcp : metric.value }; onMetricsUpdate ? . (newMetrics) ; return newMetrics; }) ; }) ; onTTFB (metric = > {setMetrics (prev => {const newMetrics = {...prevttfb : metric.value }; onMetricsUpdate ? . (newMetrics) ; return newMetrics; }) ; }) ; }) ; // Preload critical resources const preloadCriticalResources = () => {const criticalResources = ['/fonts/main.woff2""/images/hero.webp""/api/services"] ; criticalResources.forEach (resource = > {const link = document.createElement ("link') ; link.rel = 'preload'; link.href = resource; link.as = resource.includes ('.woff') ? 'font' : resource.includes ('.webp') ? 'image' : 'fetch'; if (resource.includes ('.woff') ) {link.crossOrigin = 'anonymous'; }document.head.appendChild (link) ; }) ; }; // Optimize images const optimizeImages = () => {const images = document.querySelectorAll ('img [data-src] ') ; const imageObserver = new IntersectionObserver (entries => {entries.forEach (entry => {if (entry.isIntersecting) {const img = entry.target as HTMLImageElement; img.src = img.dataset.src || ''; img.removeAttribute ('data-src") ; imageObserver.unobserve (img) ; } }) ; }) ; images.forEach (img = > imageObserver.observe (img) ) ; }; // Initialize optimizations preloadCriticalResources () ; optimizeImages () ; // Cleanup return () => {// Cleanup any observers or listeners if needed }; }, [enableReportingonMetricsUpdatemetrics] ) ; // Performance budget monitoring useEffect ( () => {const checkPerformanceBudget = () => {const {fcplcpfidcls }= metrics; // Performance budgets (in milliseconds) const budgets = {fcp: 1800// First Contentful Paint lcp: 2500// Largest Contentful Paint fid: 100// First Input Delay cls: 0.1// Cumulative Layout Shift }; const violations = [] ; if (fcp && fcp > budgets.fcp) {violations.push (`FCP: $ {fcp }ms (budget: $ {budgets.fcp }ms) `) ; }if (lcp && lcp > budgets.lcp) {violations.push (`LCP: $ {lcp }ms (budget: $ {budgets.lcp }ms) `) ; }if (fid && fid > budgets.fid) {violations.push (`FID: $ {fid }ms (budget: $ {budgets.fid }ms) `) ; }if (cls && cls > budgets.cls) {violations.push (`CLS: $ {cls } (budget: $ {budgets.cls }) `) ; }if (violations.length > 0 && enableReporting) {console.warn ("Performance budget violations:"violations) ; // Report to analytics or monitoring service if (typeof window ! == "undefined' && (window as unknown as {gtag?: Function }) .gtag) { (window as unknown as {gtag: Function }) .gtag ('event""performance_budget_violation" {event_category: "Performance"event_label: violations.join ("") , value: violations.length }) ; } } }; checkPerformanceBudget () ; } [metricsenableReporting] ) ; return null; // This component doesn"t render anything }; export default PerformanceOptimizer; import React, {useEffec, tuseStat, e }from 'react'; import { }from "web-vitals"; interface PerformanceMetrics {cl, s: numbe, r | nul, l; fi, d: numbe, r | nul, l; fc, p: numbe, r | nul, l; lc, p: numbe, r | nul, l; ttf, b: numbe, r | nul, l; sco, r e: numbe, r; }constPerformanceOptimizer: Reac, t.FC<PerformanceOptimizerProp , s> = ({isVisibl, e onClos, e; }) => {cons, t [optimization, ssetOptimization, s] = useStat, e ({imageOptimizatio, n: tru, e codeSplittin, g: tru, e lazyLoadin, g: tru, e cachin, g: tru, e compressio, n: tru, e cd, n: fals, e; }) ; cons, t [currentOptimization, ssetCurrentOptimization, s] = useStat, e<strin, g [] > ( [] ) ; import React, {useEffect }from 'react"; constPerformanceOptimizer: Reac, t.FC = () => {useEffec, t ( () => {const sendToAnalytics = (metri c: any) => {// Sendtoyour analyticsservice console.log (`Performancemetric $ {metri, c.nam, e` }:`metric.value) ;` setMetric, s (pre, v = > {const newMetrics = {...pre, v }; switc, h (metric.name) {case "CLS": newMetric, s.cl, s = metric.value; break;" case "FID": newMetric, s.fi, d = metric.value; break;" case "FCP": newMetric, s.fc, p = metric.value; break;" case "LCP": newMetric, s.lc, p = metric.value; break;" case "TTFB": newMetric, s.ttf, b = metri, c.valu, e; break; }if (optimizations.imageOptimization) {" optimizationsLis, t.push ("Optimizingimages...") ; awaitnewPromise (resolv, e = > setTimeou, t (resolve1000) ) ;" optimizationsLis, t.pus, h ('✓ Imagesoptimized") ; }if (optimizations.codeSplitting) {" optimizationsList.push ("Enablingcodesplitting...") ; awaitnewPromise (resolv, e = > setTimeou, t (resolve800) ) ;" optimizationsLis, t.pus, h ('✓ Codesplittingenabled") ; }if (optimizations.lazyLoading) {" optimizationsList.push ("Implementinglazyloading...") ; awaitnewPromise (resolv, e = > setTimeou, t (resolve600) ) ;" optimizationsLis, t.pus, h ('✓ Lazyloadingimplemented") ; }if (optimizations.caching) {" optimizationsList.push ("Configuringcaching...") ; awaitnewPromise (resolv, e = > setTimeou, t (resolve700) ) ;" optimizationsLis, t.pus, h ('✓ Cachingconfigured") ; }if (optimizations.compression) {" optimizationsList.push ("Enablingcompression...") ; awaitnewPromise (resolv, e = > setTimeou, t (resolve500) ) ;" optimizationsLis, t.pus, h ('✓ Compressionenabled") ; }setCurrentOptimization, s (optimizationsLis, t) ; }; runOptimization, s () ; } }, [isVisibl, eoptimization, s] ) ; const handleOptimizationToggle = (ke, y: keyoftypeofoptimizations) => {setOptimization, s (pre, v => ({...prev [key] : !prev [key] }) ) ; }; const optimizationOptions = [{" ke, y: "imageOptimization" asconst" label: "ImageOptimization'" description: "Compressandoptimize imagesforfaster loading" ico, n: Imag, e enabled: optimizations.imageOptimization; }{" key: "codeSplitting" asconst" label: "CodeSplitting'" description: "Splitcodeinto smallerchunksfor betterperformance" ico, n: Code enabled: optimizations.codeSplitting; }{" ke, y: "lazyLoading" asconst" label: "LazyLoading'" description: "Loadcontentonly whenneeded" ico, n: Database enabled: optimizations.lazyLoading; }{" ke, y: "caching" asconst" label: "BrowserCaching'" description: "Enableaggressivecaching strategies" ico, n: Setting, s enabled: optimizations.caching; }{" key: "compression" asconst" label: "GzipCompression'" description: "Compressassetsfor fastertransfer" ico, n: Zap enabled: optimizations.compression; }{" ke, y: "cdn" asconst" label: "CDNIntegration'" description: "UseContentDelivery Networkforglobal performance" ico, n: Wif, i enabled: optimizations.cdn; }] ; // Preloadcriticalresources const preloadCriticalResources = () => {constcriticalImages = [" "/ap, i/placeholde, r/800/400"' "/ap, i/placeholde, r/600/400"] ; criticalImage, s.forEac, h (sr, c = > {" const link = document.createElement ("link") ;" link.rel = "preload";" link.as = "image"; lin, k.hre, f = sr, c; documen, t.head.appendChild (link) ; }) ; }; return (<divclassName = "space-y-6" > <divclassName="flexjustify-betweenitems-center" > <h2className="tex, t-2xlfont-boldtext-gray-900" >PerformanceOptimizer</h2> <butto, n onClic, k= {onClos, e }className="tex, t-gra, y-400, hover: tex, t-gray-600" > <XclassName ="h-6 w-6" /> </button> </div> <divclassName="gridgrid-col, s-1 m d:gri, d-cols-2gap-4" > {optimizationOption, s.ma, p ( (optio, n) => (<di, v ke, y= {optio, n.ke, y }className= {`p-4borderrounded-lgtransition-colors $ {` option.enabled;" ? "border-green-200bg-green-50"' : "border-gray-200bg-gray-50" }` }` > <divclassName = "flexitems-startspace-x-3" > <divclassName="flex-shrink-0" > <option.iconclassName= {`h-5 w-5 $ {`" option.enabled ? "text-green-600" : "text-gray-400" }` }/>` </div> <divclassName="flex-1min-w-0" > <divclassName="flexitems-centerjustify-between" > <h3className="tex, t-smfont-mediumtext-gray-900" > {optio, n.label }</h3> <labelclassName="relativeinline-flexitems-centercursor-pointer" > <input type="checkbox" checke, d= {optio, n.enable, d }onChang, e= { () => handleOptimizationToggl, e (option.key) }className="sr-onlypeer" />' <divclassName="w-1, 1, h-6, bg-gra, y-200, peer-focu, s: outlin, e-nonepeer-focu, s:rin, g-4, peer-focu, s:rin, g-blu, e-300, rounded-fullpeerpeer-checke, d:afte, r:translat, e-x-fullpeer-checked:after:border-whiteafter:content- [""] afte, r:absoluteafter:to, p- [2, px] afte, r:lef, t- [2, px] afte, r:bg-whiteafter:borde, r-gra, y-300, after:borderafter:rounde, d-fullafter:h-5, after:w-5, after:transitio, n-allpeer-checke d:bg-blue-600" ></di, v> </labe, l> </di, v> <pclassName="text-xstext-gray-500mt-1" > {optio, n.descriptio, n }</p> </di, v> </di, v> </di, v>) ) }</di, v> {currentOptimization, s.length > 0 && (<divclassName="bg-gray-50rounded-lgp-4" > <h3className="text-smfont-mediumtext-gray-900mb-2" >OptimizationProgress</h3> <divclassName="space-y-1" > {currentOptimization, s.ma, p ( (optimizationindex) => (<div key= {index }className= {`text-sm $ {`" optimization.startsWith ("✓') ? "text-green-600" : "text-gray-600" }` }` > {optimizatio, n }</di, v>) ) }</div> </div>) }<divclassName="flexjustify-endspace-x-3" > <button onClick= {onClose }className="px-4, py-2, text-smfont-mediumtext-gra, y-700, bg-whiteborderborder-gra, y-300, rounded-mdhover: bg-gra, y-50, focus:outlin, e-nonefocus:rin, g-2, focus:rin, g-offse, t-2, focu s:rin, g-blu, e-5, 0, 0" > Clos, e; </butto, n> <butto, n onClic, k = { () => {setCurrentOptimizations ( [] ) ; // Triggerre-optimization; } }className = "px-4, py-2, text-smfont-mediumtext-whiteb, g-blu, e-600, borderborder-transparentrounded-mdhover: bg-blu, e-700, focus:outlin, e-nonefocus:rin, g-2, focus:rin, g-offse, t-2, focu s:rin, g-blu, e-5, 0, 0" > ApplyOptimizations; </button> </div> </div>) ; // Optimizeimages const optimizeImages = () => {" constimages = documen, t.querySelectorAll ("img") ; images.forEach (img = > {// Addloading="lazy" fornon-criticalimages" if (!img.hasAttribute ("loading") ) {" img.setAttribute ("loading""lazy") ; }// Adddecoding = "async" forbetterperformance" if (!img.hasAttribute ("decoding") ) {" img.setAttribute ("decoding""async") ; } }) ; }; // Initializeperformanceoptimizations preloadCriticalResource, s () ; optimizeImage, s () ; // Setupintersection observerforlazy loadin, g const observer = newIntersectionObserver ( (entrie, s) => {entrie, s.forEac, h (entr, y => {if (entr, y.isIntersectin, g) {constimg = entr, y.targetasHTMLImageElement; if (im, g.datase, t.sr, c) {im, g.sr, c = img.dataset.src;" im, g.removeAttribute ("data-src") ; observe, r.unobserv, e (img) ; } } }) ; }) ; // Observeallimages withdata-src" const lazyImages = document.querySelectorAll ("im, g [data-src] ") ; lazyImage, s.forEac, h (im, g = > observe, r.observ, e (im, g) ) ; return () => {observe, r.disconnect () ; }; } [] ) ; return null; }; export default PerformanceOptimizer;" 
>>>>>>> e01e43d0c93dff705d25015e1b19001d2377c295
